import Link from "next/link";

const image = "https://raw.githubusercontent.com/siteadrielly/SiteV2/main/public/img/smile-portrait.webp";

export default function NotFound() {
  return (
    <main className="notfound-v3">
      <section className="notfound-copy">
        <div className="notfound-topline">
          <Link href="/" className="notfound-brand">ADRIELY ANUTE</Link>
          <span>HARMONIZAÇÃO · ESTÉTICA AVANÇADA</span>
        </div>

        <div className="notfound-center">
          <p className="eyebrow">404 · Página não encontrada</p>
          <div className="notfound-rule" />
          <div className="notfound-number serif">404</div>
          <h1 className="serif">Você saiu do caminho.</h1>
          <p>
            Esta página não existe ou mudou de endereço. Volte para o início e continue
            sua jornada de cuidado, beleza e naturalidade.
          </p>
          <div className="notfound-actions">
            <Link href="/" className="btn btn-olive">Voltar para a home <span>↗</span></Link>
            <a href="https://wa.me/5583993222422" className="btn notfound-outline">Agendar avaliação <span>↗</span></a>
          </div>
        </div>

        <div className="notfound-bottom">
          <span>JOÃO PESSOA · PB</span>
          <span>© ADRIELY ANUTE</span>
        </div>
      </section>

      <section className="notfound-image">
        <img src={image} alt="Dra. Adriely Anute" />
        <div className="notfound-image-shade" />
        <div className="notfound-image-label">
          <span>01</span>
          <div>
            <strong>BELEZA COM INTENÇÃO</strong>
            <small>Realce sua beleza. Preserve quem você é.</small>
          </div>
        </div>
        <span className="notfound-corner top-left" />
        <span className="notfound-corner bottom-right" />
      </section>
    </main>
  );
}
