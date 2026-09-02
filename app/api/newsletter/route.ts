import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

function validEmail(email:string){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}

export async function POST(req:Request){
 try{
  const {name='',email='',website=''}=await req.json();
  if(website) return NextResponse.json({ok:true});
  const cleanEmail=String(email).trim().toLowerCase();
  const cleanName=String(name).trim().slice(0,120);
  if(!validEmail(cleanEmail)) return NextResponse.json({error:'Digite um e-mail válido.'},{status:400});
  const supabase=createClient();
  const {error}=await supabase.from('newsletter_subscribers').upsert({email:cleanEmail,name:cleanName||null,status:'active',source:'site'},{onConflict:'email'});
  if(error) return NextResponse.json({error:'A newsletter ainda não está conectada ao banco. Configure o Supabase para ativá-la.'},{status:503});
  let resend='pending';
  if(process.env.RESEND_API_KEY){
   const headers={'Authorization':`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'};
   const payload={email:cleanEmail,first_name:cleanName||undefined,unsubscribed:false};
   const r=await fetch('https://api.resend.com/contacts',{method:'POST',headers,body:JSON.stringify(payload)});
   resend=r.ok||r.status===409?'synced':'error';
  }
  return NextResponse.json({ok:true,resend});
 }catch{return NextResponse.json({error:'Não foi possível concluir agora. Tente novamente.'},{status:500})}
}
