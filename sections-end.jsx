// ===== Sobre mí · Inversión · CTA final · Footer =====

// ---- ¿Qué incluye? / Qué te llevás ----
function Incluye() {
  const items = [
    ["history", "Acceso a las 5 lecciones grabadas durante 6 meses"],
    ["video", "5 encuentros en vivo con práctica, casos reales e invitados especiales"],
    ["calendar-plus", "Encuentro bonus de Empleabilidad e Inserción Laboral como IT Recruiter (2 hs)"],
    ["message-circle", "Soporte semanal por WhatsApp conmigo"],
    ["award", "Certificado de participación"],
  ];
  return (
    <section className="section" style={{ background: "var(--bg-light)", paddingBottom: "64px" }}>
      <div className="wrap" style={{ maxWidth: 940 }}>
        <div className="reveal" style={{ marginBottom: 36 }}>
          <div className="eyebrow" style={{ color: "var(--color-sparkle)", marginBottom: 18 }}>Qué incluye</div>
          <h2 className="title">Todo lo que te {BK("llevás")}</h2>
        </div>
        <div className="reveal card" style={{ padding: "8px 32px", marginBottom: 32 }}>
          {items.map(([ic, txt], i) => (
            <div key={i} className="check" style={{ alignItems: "center", gap: 20, padding: "22px 0", borderBottom: i < items.length - 1 ? "1px solid var(--color-galaxy-12)" : "none" }}>
              <span className="check-mark" style={{ width: 42, height: 42, flex: "none" }}><i data-lucide={ic} style={{ width: 20, height: 20 }}></i></span>
              <p style={{ fontSize: 17, lineHeight: 1.4, color: "var(--fg1)" }}>{txt}</p>
            </div>
          ))}
        </div>
        <div className="reveal incluye-foot" style={{ display: "flex", gap: 40, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ borderLeft: "2px solid var(--color-purple)", paddingLeft: 24, flex: "1 1 480px" }}>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--fg2)" }}>
              Algo más, que no es una promesa de trabajo sino una <span className="serif it" style={{ color: "var(--color-purple)" }}>facilidad real</span>: estoy en contacto con la red de profesionales de HR en tech más grande de LATAM, y eso me da acceso a búsquedas activas que pueden beneficiar a quienes cursan.
            </p>
          </div>
          <a href="https://wa.me/5492646272661?text=Hola%20F%C3%A1tima%2C%20vengo%20de%20la%20secci%C3%B3n%20de%20qu%C3%A9%20incluye%20y%20quiero%20saber%20m%C3%A1s.%20Mi%20nombre%20es%20" target="_blank" rel="noopener" className="btn btn-primary" style={{ flex: "none" }}>
            <i data-lucide="message-circle"></i> Reservar mi lugar
          </a>
        </div>
      </div>
    </section>
  );
}
window.Incluye = Incluye;

// ---- Sobre mí ----
function SobreMi() {
  const brands = ["Mercado Libre", "Folcode", "Atlas"];
  return (
    <section id="sobre-mi" className="section" style={{ background: "var(--bg-surface)" }}>
      <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 64, alignItems: "center" }}>
        <div className="reveal" style={{ position: "relative" }}>
          <div style={{ position: "relative", borderRadius: "var(--radius-xl)", overflow: "hidden", aspectRatio: "4/5", boxShadow: "var(--shadow-md)", background: "#b9a9cf" }}>
            <img src="fatima-sobremi.png" alt="Fátima Leotta" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 80%" }} />
            <img src="firma-blanca.svg" alt="Firma de Fátima Leotta" className="sobremi-firma" style={{ position: "absolute", left: 26, bottom: 22, height: 74, opacity: 0.96 }} />
          </div>
        </div>
        <div className="reveal">
          <div className="eyebrow" style={{ color: "var(--color-sparkle)", marginBottom: 18 }}>Sobre mí</div>
          <h2 className="title" style={{ marginBottom: 22 }}>
            13 años alineando <span className="it" style={{ color: "var(--color-purple)" }}>personas y negocio</span> en tech.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg2)", marginBottom: 16, maxWidth: 560 }}>
            Soy Fátima Leotta. Vengo de la psicología y crecí en gestión de talento dentro de las tech más exigentes de LATAM: fui reconocida en adquisición de talento IT en <b style={{ color: "var(--fg1)" }}>Mercado Libre</b> por tener las mejores métricas de contratación de la región, contraté roles ejecutivos, fui <b style={{ color: "var(--fg1)" }}>Head of Talent</b> en startups y diseñé formación de talent acquisition para empresas tech.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg2)", marginBottom: 26, maxWidth: 560 }}>
            Licenciada en Psicología (UCC, con honores) y Máster en Dirección de RRHH y Gestión de Talento (EAE, Madrid). Hoy vivo en San Juan, Argentina.
          </p>
          <p className="serif" style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)", lineHeight: 1.25, color: "var(--fg1)", maxWidth: 580, marginBottom: 28 }}>
            Sé lo que buscan las empresas y lo que aceptan las y los candidatos. No hay una receta — hay <span className="it" style={{ color: "var(--color-purple)" }}>criterio</span>.
          </p>
          <div className="eyebrow no-rule" style={{ color: "var(--fg3)", fontSize: 11, marginBottom: 14 }}>He trabajado con</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
            {brands.map((b, i) => (<span className="chip" key={i} style={{ fontSize: 13 }}>{b}</span>))}
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="https://www.instagram.com/fatima.leotta/" target="_blank" rel="noopener" className="btn btn-outline" style={{ padding: "13px 22px" }}><i data-lucide="instagram"></i> Instagram</a>
            <a href="https://www.linkedin.com/in/fatimaleotta" target="_blank" rel="noopener" className="btn btn-outline" style={{ padding: "13px 22px" }}><i data-lucide="linkedin"></i> LinkedIn</a>
            <a href="https://www.youtube.com/@fatimaleotta" target="_blank" rel="noopener" className="btn btn-outline" style={{ padding: "13px 22px" }}><i data-lucide="youtube"></i> YouTube</a>
            <a href="https://fatimaleotta.vercel.app/" target="_blank" rel="noopener" className="btn btn-outline" style={{ padding: "13px 22px" }}><i data-lucide="globe"></i> Mi Web</a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.SobreMi = SobreMi;

// ---- Inversión ----
function Inversion({ t }) {
  return (
    <section id="inversion" className="section" style={{ background: "var(--bg-light)" }}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: "center", marginBottom: 48, maxWidth: 640, marginInline: "auto" }}>
          <div className="eyebrow no-rule" style={{ color: "var(--color-sparkle)", marginBottom: 18, justifyContent: "center" }}>Inversión</div>
          <h2 className="title">Elegí cómo {BK("empezar")}</h2>
        </div>
        <div className="grid-2" style={{ maxWidth: 880, marginInline: "auto", alignItems: "stretch", gap: 24 }}>
          {/* Full price */}
          <div className="card reveal" style={{ display: "flex", flexDirection: "column", padding: 36 }}>
            <div className="eyebrow no-rule" style={{ color: "var(--fg3)", fontSize: 11, marginBottom: 18 }}>Valor general</div>
            <div className="serif" style={{ fontSize: 44, lineHeight: 1, color: "var(--fg1)" }}>AR$ 250.000</div>
            <div style={{ fontSize: 16, color: "var(--fg3)", marginTop: 8, marginBottom: 24 }}>USD 190</div>
            <div style={{ flex: 1 }}></div>
            <div style={{ fontSize: 14, lineHeight: 1.5, color: "var(--fg2)", paddingTop: 22, borderTop: "1px solid var(--color-galaxy-12)" }}>
              Precio sin descuento, vigente desde el 16 de julio.
            </div>
          </div>
          {/* Early bird */}
          <div className="card reveal" style={{ display: "flex", flexDirection: "column", padding: 36, background: "var(--color-galaxy)", color: "var(--fg-on-dark)", border: "none", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "var(--gradient-glow)", opacity: .4, pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <span className="eyebrow no-rule" style={{ color: "var(--fg-on-dark-2)", fontSize: 11 }}>Inscripción anticipada</span>
                <span className="badge">20% OFF</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                <div className="serif" style={{ fontSize: 44, lineHeight: 1 }}>AR$ 200.000</div>
                <s style={{ fontSize: 18, color: "var(--fg-on-dark-3)" }}>250.000</s>
              </div>
              <div style={{ fontSize: 16, color: "var(--fg-on-dark-2)", marginTop: 8, marginBottom: 10 }}>USD 152 &nbsp;<s style={{ color: "var(--fg-on-dark-3)" }}>190</s></div>
              <div style={{ fontSize: 12.5, color: "var(--fg-on-dark-3)", marginBottom: 18, textAlign: "left" }}>Válido hasta el 15 de julio • cupos limitados • reservás por WhatsApp</div>
              {t.showCountdown && (
                <div style={{ marginBottom: 22 }}>
                  <div style={{ fontSize: 12.5, color: "var(--fg-on-dark-3)", marginBottom: 10, letterSpacing: ".04em", textTransform: "uppercase" }}>Termina en</div>
                  <Countdown />
                </div>
              )}
              <a href="https://wa.me/5492646272661?text=Hola%20F%C3%A1tima%2C%20vengo%20de%20la%20secci%C3%B3n%20de%20precios%20y%20me%20gustar%C3%ADa%20m%C3%A1s%20detalle.%20Mi%20nombre%20es%20" target="_blank" rel="noopener" className="btn btn-ondark" style={{ width: "100%" }}>Reservar mi lugar<i data-lucide="arrow-right"></i></a>
              <div style={{ fontSize: 12.5, color: "var(--fg-on-dark-3)", textAlign: "center", marginTop: 10 }}>
                <i data-lucide="video" style={{ width: 13, height: 13, display: "inline-block", verticalAlign: "middle", marginRight: 5 }}></i>
                Acceso a las grabaciones por 6 meses
              </div>
            </div>
          </div>
        </div>
        <div className="reveal" style={{ maxWidth: 880, marginInline: "auto", marginTop: 24, display: "flex", alignItems: "center", gap: 14, padding: "20px 26px", borderRadius: "var(--radius-lg)", background: "var(--color-pure)", border: "1px solid var(--color-galaxy-12)" }}>
          <i data-lucide="credit-card" style={{ width: 20, height: 20, color: "var(--color-purple)", flex: "none" }}></i>
          <p style={{ fontSize: 15, lineHeight: 1.45, color: "var(--fg2)" }}>
            <b style={{ color: "var(--fg1)" }}>Formas de pago:</b> 1 pago por transferencia, o en cuotas (con interés) con tarjetas de crédito.
          </p>
        </div>
      </div>
    </section>
  );
}
window.Inversion = Inversion;

// ---- CTA final ----
function CtaFinal({ t }) {
  return (
    <section id="inscripcion" className="section">
      <div className="wrap">
        <div className="reveal cta-box" style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-xl)", background: "var(--gradient-galaxy)", color: "var(--fg-on-dark)", padding: "76px 56px" }}>
          <div style={{ position: "relative", maxWidth: 660 }}>
            <div className="eyebrow" style={{ color: "var(--color-pure-90)", marginBottom: 22 }}>Tu próximo paso</div>
            <h2 className="serif" style={{ fontSize: "clamp(2rem, 3.8vw, 3.1rem)", lineHeight: 1.08, letterSpacing: "-0.01em", marginBottom: 22 }}>
              Si querés entender la industria tech y reclutar con más confianza, este curso es <span className="it">para vos</span>.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36, maxWidth: 520 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ flex: "none", width: 30, height: 30, borderRadius: "50%", background: "var(--color-pure)", color: "var(--color-purple)", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 14 }}>1</span>
                <p style={{ fontSize: 17, lineHeight: 1.45, color: "var(--fg-on-dark-2)", paddingTop: 3 }}>Escribime por WhatsApp con un toque del botón.</p>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ flex: "none", width: 30, height: 30, borderRadius: "50%", background: "var(--color-pure)", color: "var(--color-purple)", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 14 }}>2</span>
                <p style={{ fontSize: 17, lineHeight: 1.45, color: "var(--fg-on-dark-2)", paddingTop: 3 }}>Te paso todos los detalles y reservás tu lugar en la 3ª edición.</p>
              </div>
            </div>
            <a href={WA} target="_blank" rel="noopener" className="btn btn-wa" style={{ fontSize: 15, padding: "18px 36px" }}><i data-lucide="message-circle"></i> Inscribirme por WhatsApp</a>
          </div>
          <img src="logomark-pure.svg" alt="" style={{ position: "absolute", right: -36, bottom: -48, width: 240, opacity: .14 }} />
        </div>
      </div>
    </section>
  );
}
window.CtaFinal = CtaFinal;


// ---- FAQ (acordeón) ----
function FaqItem({ q, a, open, onClick }) {
  const ref = React.useRef(null);
  return (
    <div style={{ borderBottom: "1px solid var(--color-galaxy-12)" }}>
      <button onClick={onClick} aria-expanded={open} style={{ width: "100%", background: "none", border: "none", padding: "24px 4px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, textAlign: "left" }}>
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 17, lineHeight: 1.35, color: "var(--fg1)" }}>{q}</span>
        <span style={{ flex: "none", width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center", background: open ? "var(--color-purple)" : "var(--bg-surface)", color: open ? "var(--color-pure)" : "var(--color-purple)", transition: "var(--t-base)", transform: open ? "rotate(180deg)" : "none" }}>
          <i data-lucide="chevron-down" style={{ width: 18, height: 18 }}></i>
        </span>
      </button>
      <div style={{ overflow: "hidden", maxHeight: open ? (ref.current ? ref.current.scrollHeight + 4 : 400) : 0, transition: "max-height .4s var(--ease-out)" }}>
        <p ref={ref} style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg2)", padding: "0 48px 26px 4px", maxWidth: 760 }}>{a}</p>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = React.useState(0);
  const qs = [
    ["¿Necesito experiencia o conocimientos previos en tecnología?", "No. El curso está pensado desde cero, explicado de persona non-tech a persona non-tech."],
    ["\u201cLas clases teóricas las puedo ver en YouTube o preguntarle a la IA.\u201d", "Podés, y vas a encontrar conceptos aislados que se desactualizan rápido. Acá no aprendés definiciones: aprendés criterio de mercado real — cómo se hacen las cosas de verdad en la industria — con práctica en vivo y soporte directo conmigo."],
    ["\u201cHoy se hace recruiting con IA, no hace falta aprender la industria.\u201d", "Al revés: la IA hace que entender la industria valga más. Las herramientas las puede usar cualquiera; interpretar perfiles y contextos de negocio, no. Por eso hay un módulo completo de IA aplicada con criterio."],
    ["¿Y si aprendo pero después no me inserto?", "Para eso está el encuentro bonus de Empleabilidad e Inserción Laboral, las herramientas de visibilidad del mercado, y mi red de HR en tech de LATAM, desde donde comparto búsquedas activas con el grupo. No es una promesa de trabajo: es una facilidad real."],
    ["¿Qué pasa si no puedo asistir a un encuentro en vivo?", "Las lecciones quedan grabadas con acceso por 6 meses, y tus consultas las canalizamos por el soporte semanal de WhatsApp."],
    ["¿Cuánto tiempo necesito por semana?", "Entre 3 y 4 horas: la lección grabada (~90 min) más el encuentro en vivo del sábado (2 hs)."],
    ["¿Cómo me inscribo?", "Me escribís por WhatsApp, te paso los detalles y reservás tu lugar."],
  ];
  return (
    <section id="faq" className="section" style={{ background: "var(--bg-surface)" }}>
      <div className="wrap-narrow">
        <div className="reveal" style={{ marginBottom: 40 }}>
          <h2 className="title">Preguntas {BK("frecuentes")}</h2>
        </div>
        <div className="reveal" style={{ borderTop: "1px solid var(--color-galaxy-12)" }}>
          {qs.map(([q, a], i) => (
            <FaqItem key={i} q={q} a={a} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
window.Faq = Faq;

// ---- Sticky WhatsApp (mobile) ----
function StickyWA() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a href={WA} target="_blank" rel="noopener" className="sticky-wa" aria-label="Inscribirme por WhatsApp"
       style={{ transform: show ? "translateY(0)" : "translateY(140%)" }}>
      <i data-lucide="message-circle"></i> Inscribirme por WhatsApp
    </a>
  );
}
window.StickyWA = StickyWA;

// ---- Footer ----
function Footer() {
  const social = [["instagram", "@fatima.leotta", "https://www.instagram.com/fatima.leotta/"], ["linkedin", "in/fatimaleotta", "https://www.linkedin.com/in/fatimaleotta"], ["youtube", "@fatimaleotta", "https://www.youtube.com/@fatimaleotta"], ["message-circle", "WhatsApp", WA]];
  return (
    <footer style={{ background: "var(--color-galaxy)", color: "var(--fg-on-dark)", paddingTop: 72, paddingBottom: 36 }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 40, paddingBottom: 44, borderBottom: "1px solid var(--line-on-dark)" }} className="grid-3">
          <div>
            <img src="tipografico-pure.svg" alt="Fátima Leotta" style={{ height: 23, marginBottom: 20 }} />
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg-on-dark-2)", maxWidth: 320 }}>
              Tech Recruitment desde cero · 3ª edición. Aligning people &amp; business in tech.
            </p>
          </div>
          <div>
            <div className="eyebrow no-rule" style={{ color: "var(--fg-on-dark-3)", marginBottom: 16, fontSize: 11 }}>Contacto</div>
            <a href="mailto:fatima.leotta@gmail.com" style={{ display: "block", fontSize: 15, color: "var(--fg-on-dark)", marginBottom: 10 }}>fatima.leotta@gmail.com</a>
            <a href={WA} target="_blank" style={{ display: "block", fontSize: 15, color: "var(--fg-on-dark)" }}>WhatsApp: +54 9 2646 27 2661</a>
          </div>
          <div>
            <div className="eyebrow no-rule" style={{ color: "var(--fg-on-dark-3)", marginBottom: 16, fontSize: 11 }}>Seguime</div>
            {social.map(([ic, l, href], i) => (
              <a key={i} href={href} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "var(--fg-on-dark)", marginBottom: 12 }}
                 onMouseEnter={e => e.currentTarget.style.color = "var(--color-sparkle-300)"}
                 onMouseLeave={e => e.currentTarget.style.color = "var(--fg-on-dark)"}>
                <i data-lucide={ic} style={{ width: 18, height: 18 }}></i>{l}
              </a>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 28, flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12.5, color: "var(--fg-on-dark-3)" }}>© 2026 Fátima Leotta · Talento in tech</span>
          <span className="serif it" style={{ fontSize: 18, color: "var(--fg-on-dark-2)" }}>&lt; fL &gt;</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
