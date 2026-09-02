import Link from "next/link";

const image = "https://raw.githubusercontent.com/siteadrielly/SiteV2/main/public/img/smile-portrait.webp";

export default function NotFound() {
  return (
    <main className="notfound-v3">
      <style>{`
        .notfound-v3{min-height:100svh;display:grid;grid-template-columns:minmax(420px,.88fr) 1.12fr;background:#171714;color:#fbfaf6;overflow:hidden}
        .notfound-copy{position:relative;min-height:100svh;padding:34px 6vw 28px;display:flex;flex-direction:column;justify-content:space-between;border-right:1px solid rgba(255,255,255,.12)}
        .notfound-topline,.notfound-bottom{display:flex;justify-content:space-between;gap:24px;align-items:center;font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.42)}
        .notfound-brand{color:#fff;letter-spacing:.22em}
        .notfound-center{max-width:650px;padding:50px 0}
        .notfound-rule{width:48px;height:1px;background:#b29a6a;margin:22px 0 20px}
        .notfound-number{font-size:clamp(100px,13vw,190px);line-height:.72;color:rgba(255,255,255,.055);margin-left:-8px;margin-bottom:-10px;letter-spacing:-.06em}
        .notfound-center h1{font-size:clamp(46px,5.4vw,78px);line-height:.98;font-weight:400;margin:0;max-width:9ch}
        .notfound-center>p:not(.eyebrow){max-width:450px;color:rgba(255,255,255,.58);font-size:14px;line-height:1.9;margin:28px 0 0}
        .notfound-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}
        .notfound-outline{color:#fff;border-color:rgba(255,255,255,.35)}
        .notfound-outline:hover{background:#fbfaf6;color:#171714}
        .notfound-image{position:relative;min-height:100svh;overflow:hidden;background:#3f4430}
        .notfound-image img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:54% 24%;display:block;transform:scale(1.015)}
        .notfound-image-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(23,23,20,.12),transparent 45%),linear-gradient(0deg,rgba(23,23,20,.72),transparent 32%)}
        .notfound-image-label{position:absolute;left:34px;right:34px;bottom:32px;display:flex;gap:18px;align-items:flex-start;font-size:9px;letter-spacing:.17em;text-transform:uppercase}
        .notfound-image-label>span{color:#b29a6a}
        .notfound-image-label strong{display:block;font-weight:500;color:#fff}
        .notfound-image-label small{display:block;margin-top:7px;color:rgba(255,255,255,.58);font-size:9px;letter-spacing:.1em;text-transform:none}
        .notfound-corner{position:absolute;width:34px;height:34px;border-color:rgba(255,255,255,.5)}
        .notfound-corner.top-left{top:30px;left:30px;border-top:1px solid;border-left:1px solid}
        .notfound-corner.bottom-right{right:30px;bottom:30px;border-right:1px solid;border-bottom:1px solid}
        @media(max-width:800px){.notfound-v3{display:flex;flex-direction:column}.notfound-copy{min-height:72svh;padding:26px 7vw 24px;border-right:0}.notfound-topline span{display:none}.notfound-center{padding:30px 0 40px}.notfound-number{font-size:110px}.notfound-center h1{font-size:48px}.notfound-center>p:not(.eyebrow){font-size:13px;line-height:1.75}.notfound-actions{margin-top:27px}.notfound-actions .btn{width:100%}.notfound-image{min-height:42svh}.notfound-image img{object-position:54% 25%}.notfound-image-label{left:24px;right:24px;bottom:22px}.notfound-corner{display:none}.notfound-bottom{font-size:8px}}
      `}</style>

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
