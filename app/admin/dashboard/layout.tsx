import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/lib/admin-actions";
const items=[
 ["/admin/dashboard","Visão geral"],["/admin/dashboard/newsletter","Newsletter"],["/admin/dashboard/posts","Blog"],["/admin/dashboard/depoimentos","Depoimentos"],["/admin/dashboard/antes-depois","Antes e depois"],["/admin/dashboard/imagens","Imagens"],["/admin/dashboard/analytics","Analytics"]
];
export default async function Layout({children}:{children:React.ReactNode}){const {data:{user}}=await createClient().auth.getUser();return <div className="admin-shell"><aside><div><p className="eyebrow">PAINEL VITAL</p><h2 className="serif">Adriely <i>Anute</i></h2><nav>{items.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav></div><div className="admin-user"><small>{user?.email}</small><Link href="/" target="_blank" rel="noopener">Ver site ↗</Link><form action={signOut}><button>Sair</button></form></div></aside><main>{children}</main></div>}
