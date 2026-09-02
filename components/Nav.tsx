"use client";
import {useState} from "react";
const links=[['#sobre','Sobre'],['#metodo','Método'],['#especialidades','Especialidades'],['#resultados','Resultados'],['#estrutura','Clínica'],['#newsletter','Journal']];
export default function Nav(){const [open,setOpen]=useState(false);return <header className="nav"><a href="#inicio" className="brand"><span>DRA.</span> ADRIELY ANUTE</a><nav className={open?'open':''}>{links.map(([href,label])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a className="nav-cta" href="https://wa.me/5583993222422">Agendar ↗</a></nav><button className="menu" onClick={()=>setOpen(!open)} aria-label="Abrir menu"><i/><i/><i/></button></header>}
