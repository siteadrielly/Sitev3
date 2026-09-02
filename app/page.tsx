"use client";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Newsletter from "@/components/Newsletter";

const img=(name:string)=>`https://raw.githubusercontent.com/siteadrielly/SiteV2/main/public/img/${name}`;

export default function Home(){
 const whatsapp="https://wa.me/5583993222422";
 const treatments=[
  ["01","Harmonização facial","Equilíbrio de proporções, contorno e pontos de luz com leitura individual do rosto."],
  ["02","Toxina botulínica","Suavização estratégica das marcas de expressão preservando movimento e identidade."],
  ["03","Bioestimuladores","Estímulo de colágeno e melhora progressiva da qualidade da pele."],
  ["04","Rinomodelação","Refinamento de proporções do nariz com planejamento preciso e naturalidade."],
 ];
 return <main>
  <Nav/>
  <section className="hero" style={{backgroundImage:`linear-gradient(90deg,rgba(18,19,15,.76) 0%,rgba(18,19,15,.3) 58%,rgba(18,19,15,.08) 100%),url(${img('hero-portrait.webp')})`}}>
   <div className="container hero-inner">
    <p className="eyebrow">Dra. Adriely Anute · Estética médica</p>
    <h1 className="serif">Realce sua beleza.<br/><i>Preserve quem você é.</i></h1>
    <p className="hero-copy">Harmonização facial e estética avançada guiadas por proporção, técnica e naturalidade.</p>
    <a className="btn" href={whatsapp}>Agendar avaliação <span>↗</span></a>
   </div>
   <div className="hero-signature">ADRIELY ANUTE</div>
  </section>

  <section className="manifesto section"><div className="container manifesto-grid">
   <div><p className="eyebrow">01 · filosofia</p></div>
   <div><h2 className="serif">“Beleza não precisa transformar você.<br/><i>Precisa revelar o que já existe.</i>”</h2><p>Meu trabalho começa antes do procedimento: começa na observação. Cada rosto tem uma história, uma estrutura e um jeito próprio de expressar beleza.</p><p>Por isso, a estética aqui não segue fórmulas. O planejamento é individual, criterioso e construído para que o resultado pareça seu — apenas mais descansado, equilibrado e luminoso.</p></div>
  </div></section>

  <section id="metodo" className="method"><div className="container method-grid"><div className="method-image"><img src={img('syringes-front.webp')} alt="Dra. Adriely em atendimento estético"/></div><div className="method-copy"><p className="eyebrow">02 · método</p><h2 className="serif">Precisão que não rouba a sua <i>identidade.</i></h2><p>Uma abordagem que une conhecimento anatômico, leitura facial e tecnologia para decisões mais precisas.</p><div className="steps"><div><b>01</b><span>Escuta e análise facial</span></div><div><b>02</b><span>Planejamento personalizado</span></div><div><b>03</b><span>Execução delicada e precisa</span></div><div><b>04</b><span>Acompanhamento do resultado</span></div></div><a className="text-link" href={whatsapp}>Conversar sobre meu caso <span>→</span></a></div></div></section>

  <section id="especialidades" className="section treatments"><div className="container"><div className="section-head"><div><p className="eyebrow">03 · especialidades</p><h2 className="serif">Estética com <i>intenção.</i></h2></div><p>Procedimentos selecionados a partir do que o seu rosto realmente precisa — e não do que está em alta.</p></div><div className="treatment-list">{treatments.map(([n,t,d])=><motion.a whileHover={{x:8}} key={n} href={whatsapp} className="treatment"><span>{n}</span><div><h3 className="serif">{t}</h3><p>{d}</p></div><strong>↗</strong></motion.a>)}</div></div></section>

  <section id="resultados" className="results"><div className="container"><div className="results-intro"><p className="eyebrow">04 · resultados</p><h2 className="serif">Naturalidade é quando<br/><i>o resultado não grita.</i></h2></div><div className="results-grid"><img src={img('resultados/rino-01.webp')} alt="Resultado de rinomodelação"/><img src={img('resultados/facetas-01.webp')} alt="Resultado estético"/><img src={img('resultados/botox-testa-01.webp')} alt="Resultado de toxina botulínica"/></div><a className="btn btn-light" href="/resultados">Ver acervo de resultados</a></div></section>

  <section id="sobre" className="section about"><div className="container about-grid"><div><p className="eyebrow">05 · dra. adriely</p><h2 className="serif">A técnica por trás de uma estética que <i>parece sua.</i></h2><p>Uma medicina estética mais autoral, que valoriza sutileza, planejamento e acompanhamento.</p><a className="text-link" href={whatsapp}>Conhecer a Dra. Adriely <span>→</span></a></div><div className="about-photo"><img src={img('dra-adriely-sobre.jpg')} alt="Dra. Adriely Anute"/><small>Harmonização Facial · Estética Avançada</small></div></div></section>

  <section id="estrutura" className="clinic"><div className="container clinic-grid"><div><p className="eyebrow">06 · experiência</p><h2 className="serif">Um espaço pensado para desacelerar.</h2><p>Da recepção ao atendimento, cada detalhe da clínica foi desenhado para tornar o cuidado mais confortável, privado e acolhedor.</p></div><div className="clinic-images"><img src={img('clinica/recepcao-01.webp')} alt="Recepção da clínica"/><img src={img('clinica/workstation-01.webp')} alt="Espaço de atendimento"/></div></div></section>

  <section className="journal section"><div className="container journal-grid"><div><p className="eyebrow">07 · journal</p><h2 className="serif">Conhecimento para cuidar da sua beleza <i>com intenção.</i></h2></div><div className="journal-card"><span>THE ADRIELY JOURNAL</span><p>Pele · longevidade · harmonização · estética · autocuidado</p><a href="#newsletter" className="text-link">Entrar para o Journal →</a></div></div></section>

  <Newsletter/>
  <footer className="footer"><div className="container footer-grid"><div><p className="eyebrow">DRA. ADRIELY ANUTE</p><p className="serif footer-title">Realce o que já existe.</p></div><div><p>Harmonização Facial & Estética Avançada</p><a href={whatsapp}>+55 83 99322-2422</a><p>João Pessoa · PB</p></div><div><a href="#inicio">Voltar ao topo ↑</a><br/><a href="/admin/login">Painel Vital</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Adriely Anute</span><span>Estética médica com propósito.</span></div></footer>
 </main>
}
