"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function slugify(input: string) {
  return input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
}
async function requireUser() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  return supabase;
}
async function uploadImage(supabase: ReturnType<typeof createClient>, bucket: string, file: File | null) {
  if (!file || file.size === 0) return null;
  const ext = file.name.split(".").pop() || "jpg";
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { error } = await supabase.storage.from(bucket).upload(path, file, { cacheControl: "3600", upsert: false });
  if (error) throw new Error(`Falha ao enviar imagem: ${error.message}`);
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

export async function updateSiteImages(formData: FormData) {
  const supabase = await requireUser();
  const updates: Record<string, string> = { id: "global", updated_at: new Date().toISOString() };
  const hero = await uploadImage(supabase, "site-assets", formData.get("heroImage") as File | null);
  const about = await uploadImage(supabase, "site-assets", formData.get("aboutImage") as File | null);
  const notFound = await uploadImage(supabase, "site-assets", formData.get("notFoundImage") as File | null);
  if (hero) updates.hero_image_url = hero;
  if (about) updates.about_image_url = about;
  if (notFound) updates.not_found_image_url = notFound;
  if (Object.keys(updates).length === 2) throw new Error("Selecione pelo menos uma imagem.");
  const { error } = await supabase.from("site_settings").upsert(updates, { onConflict: "id" });
  if (error) throw new Error(`Não foi possível atualizar as imagens: ${error.message}`);
  revalidatePath("/", "layout"); revalidatePath("/admin/dashboard/imagens"); redirect("/admin/dashboard/imagens?updated=1");
}

export async function createPost(formData: FormData) {
  const supabase = await requireUser();
  const title = String(formData.get("title") || "").trim();
  const content = String(formData.get("content") || "").trim();
  if (!title || !content) throw new Error("Título e conteúdo são obrigatórios.");
  const cover_url = await uploadImage(supabase, "blog-covers", formData.get("cover") as File | null);
  const { error } = await supabase.from("posts").insert({ slug: `${slugify(title)}-${Date.now().toString(36)}`, title, excerpt: String(formData.get("excerpt") || "").trim(), content, category: String(formData.get("category") || "").trim(), cover_url, published: formData.get("published") === "on" });
  if (error) throw new Error(`Não foi possível salvar o post: ${error.message}`);
  revalidatePath("/blog"); revalidatePath("/admin/dashboard/posts"); redirect("/admin/dashboard/posts");
}
export async function deletePost(id: string) { const supabase = await requireUser(); const { error } = await supabase.from("posts").delete().eq("id", id); if (error) throw new Error(error.message); revalidatePath("/blog"); revalidatePath("/admin/dashboard/posts"); }
export async function createTestimonial(formData: FormData) { const supabase = await requireUser(); const name=String(formData.get("name")||"").trim(); const text=String(formData.get("text")||"").trim(); if(!name||!text) throw new Error("Nome e depoimento são obrigatórios."); const image_url=await uploadImage(supabase,"testimonials",formData.get("image") as File|null); const {error}=await supabase.from("testimonials").insert({name,city:String(formData.get("city")||"").trim(),text,image_url}); if(error) throw new Error(error.message); revalidatePath("/"); redirect("/admin/dashboard/depoimentos"); }
export async function deleteTestimonial(id:string){const supabase=await requireUser();const {error}=await supabase.from("testimonials").delete().eq("id",id);if(error)throw new Error(error.message);revalidatePath("/");revalidatePath("/admin/dashboard/depoimentos");}
export async function createBeforeAfter(formData:FormData){const supabase=await requireUser();const procedure=String(formData.get("procedure")||"").trim();const image=formData.get("image") as File|null;if(!procedure||!image?.size)throw new Error("Procedimento e imagem são obrigatórios.");const image_url=await uploadImage(supabase,"before-after",image);const {error}=await supabase.from("before_after").insert({procedure,image_url,before_url:image_url,after_url:image_url,published:formData.get("published")==="on"});if(error)throw new Error(error.message);revalidatePath("/");revalidatePath("/resultados");redirect("/admin/dashboard/antes-depois");}
export async function deleteBeforeAfter(id:string){const supabase=await requireUser();const {error}=await supabase.from("before_after").delete().eq("id",id);if(error)throw new Error(error.message);revalidatePath("/");revalidatePath("/resultados");revalidatePath("/admin/dashboard/antes-depois");}
export async function seedBeforeAfterAcervo(){const supabase=await requireUser();const items=[["Toxina botulínica","/img/resultados/botox-testa-01.webp"],["Facetas","/img/resultados/facetas-01.webp"],["Facetas","/img/resultados/facetas-02.webp"],["Rinomodelação","/img/resultados/rino-01.webp"],["Rinomodelação","/img/resultados/rino-02.webp"],["Rinomodelação","/img/resultados/rino-03.webp"],["Rinomodelação","/img/resultados/rino-04.webp"],["Rinomodelação","/img/resultados/rino-05.webp"]] as const;let imported=0;for(const [procedure,image_url] of items){const {data}=await supabase.from("before_after").select("id").eq("image_url",image_url).limit(1);if(!data?.length){const {error}=await supabase.from("before_after").insert({procedure,image_url,before_url:image_url,after_url:image_url,published:true});if(!error)imported++;}}revalidatePath("/resultados");redirect(`/admin/dashboard/antes-depois?imported=${imported}`);}
