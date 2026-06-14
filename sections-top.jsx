// ===== Tech Recruitment desde cero — TOP sections =====
// Shared constants + Nav + Hero + Pains

const WA = "https://wa.me/5492646272661?text=Hola%20F%C3%A1tima%2C%20vengo%20de%20la%20web%20y%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20detalle%20del%20curso.%20Mi%20nombre%20es%20";
const BK = (w) => (<span><span className="bk">&lt;</span>{w}<span className="bk">&gt;</span></span>);

// Live countdown to early-bird deadline: 13 Jul 2026, 23:59
function useCountdown(target) {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s, done: diff === 0 };
}
// 15 Jul 2026, 23:59 GMT-3 == 16 Jul 2026, 02:59 UTC
const DEADLINE = Date.UTC(2026, 6, 16, 2, 59, 59);
window.useCountdown = useCountdown;
window.DEADLINE = DEADLINE;
window.WA = WA; window.BK = BK;

function Countdown({ light }) {
  const { d, h, m, s } = useCountdown(DEADLINE);
  const cells = [[d, "Días"], [h, "Hs"], [m, "Min"], [s, "Seg"]];
  return (
    <div className={"cd" + (light ? " cd-light" : "")}>
      {cells.map(([n, l], i) => (
        <div className="cd-cell" key={i}>
          <span className="n">{String(n).padStart(2, "0")}</span>
          <span className="l">{l}</span>
        </div>
      ))}
    </div>
  );
}
window.Countdown = Countdown;

// ---- Nav ----
function Nav({ t }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["Programa", "#programa"], ["Para quién", "#para-quien"], ["Modalidad", "#modalidad"], ["Sobre mí", "#sobre-mi"], ["Inversión", "#inversion"]];
  const onDark = !scrolled && t.heroStyle !== "light";
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 60,
      background: scrolled ? "rgba(253,253,253,0.88)" : "transparent",
      backdropFilter: scrolled ? "saturate(140%) blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      transition: "all .3s var(--ease-out)"
    }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 74 }}>
        <a href="#top"><img src={onDark ? "tipografico-pure.svg" : "tipografico-core.svg"} alt="Fátima Leotta" style={{ height: 21 }} /></a>
        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 34 }}>
          {links.map(([l, href]) => (
            <a key={l} href={href} style={{ fontSize: 14, fontWeight: 500, color: onDark ? "var(--fg-on-dark-2)" : "var(--fg1)", transition: "color .2s" }}
               onMouseEnter={e => e.currentTarget.style.color = onDark ? "var(--color-sparkle-300)" : "var(--color-sparkle)"}
               onMouseLeave={e => e.currentTarget.style.color = onDark ? "var(--fg-on-dark-2)" : "var(--fg1)"}>{l}</a>
          ))}
          <a href={WA} target="_blank" rel="noopener" className={"btn " + (onDark ? "btn-ondark" : "btn-primary")} style={{ padding: "12px 24px", fontSize: 12.5 }}>{t.ctaLabel}</a>
        </nav>
        <a href={WA} target="_blank" rel="noopener" className={"nav-cta-mobile btn " + (onDark ? "btn-ondark" : "btn-primary")} style={{ padding: "11px 20px", fontSize: 12 }}>{t.ctaLabel}</a>
      </div>
    </header>
  );
}
window.Nav = Nav;

// ---- Hero ----
function Hero({ t }) {
  const dark = t.heroStyle !== "light";
  const bg = t.heroStyle === "gradient" ? "var(--gradient-galaxy)" : "var(--color-galaxy)";
  return (
    <section id="top" style={{
      background: dark ? bg : "var(--bg-light)",
      color: dark ? "var(--fg-on-dark)" : "var(--fg1)",
      position: "relative", overflow: "hidden"
    }}>
      {dark && t.heroStyle !== "gradient" && (
        <div style={{ position: "absolute", inset: 0, background: "var(--gradient-glow)", opacity: 0.5, pointerEvents: "none" }} />
      )}
      <div className="wrap hero-grid" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.12fr 0.88fr", gap: 56, alignItems: "center", padding: "92px 32px 96px" }}>
        <div>
          <div className="eyebrow" style={{ color: dark ? "var(--fg-on-dark-2)" : "var(--color-sparkle)", marginBottom: 26 }}>
            Tech Recruitment desde cero · 3ª edición
          </div>
          <h1 className="serif" style={{ fontSize: `calc(clamp(2.6rem, 5.1vw, 4.4rem) * ${t.heroSize})`, lineHeight: 1.06, letterSpacing: "-0.015em", marginBottom: 24 }}>
            Aprendé Tech<br />Recruitment,<br /><span className="it" style={{ color: dark ? "var(--color-pure)" : "var(--color-purple)" }}>desde cero</span>.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: dark ? "var(--fg-on-dark-2)" : "var(--fg2)", maxWidth: 510, marginBottom: 22 }}>
            Comenzá (o mejorá) tus primeras búsquedas de talento en tecnología con <b style={{ color: dark ? "var(--color-pure)" : "var(--fg1)" }}>confianza</b> y <b style={{ color: dark ? "var(--color-pure)" : "var(--fg1)" }}>criterio de mercado real</b>.
          </p>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 11, padding: "11px 18px", borderRadius: "var(--radius-pill)", border: dark ? "1px solid var(--color-pure-15)" : "1px solid var(--color-galaxy-12)", background: dark ? "rgba(255,255,255,.04)" : "var(--color-pure)", fontSize: 13.5, lineHeight: 1.4, color: dark ? "var(--fg-on-dark-2)" : "var(--fg2)", marginBottom: 32, maxWidth: 540 }}>
            <i data-lucide="calendar-days" style={{ width: 17, height: 17, color: dark ? "var(--color-sparkle-300)" : "var(--color-sparkle)", flex: "none" }}></i>
            <span><b style={{ color: dark ? "var(--color-pure)" : "var(--fg1)" }}>Inicio: lunes 3 de agosto</b> · 5 semanas · Lecciones a tu ritmo + encuentros en vivo los sábados</span>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 34 }}>
            <a href={WA} target="_blank" rel="noopener" className={"btn " + (dark ? "btn-ondark" : "btn-primary")}>
              Quiero inscribirme<i data-lucide="arrow-right"></i>
            </a>
            <a href="#programa" className={"btn " + (dark ? "btn-ghost-dark" : "btn-outline")}>Ver el programa</a>
          </div>
          {t.showCountdown && (
            <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
              <Countdown light={!dark} />
              <div style={{ fontSize: 13, lineHeight: 1.4, color: dark ? "var(--fg-on-dark-3)" : "var(--fg3)", maxWidth: 160 }}>
                Inscripción anticipada · <b style={{ color: dark ? "var(--color-pure)" : "var(--color-sparkle)" }}>20% OFF</b> hasta el 15/7
              </div>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }}>
          <div className="hero-img-wrap" style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", aspectRatio: "3/4", boxShadow: "var(--shadow-lg)", background: "#a89cb8" }}>
            <img src="hero-fatima-retrato.png" alt="Fátima Leotta" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 16%" }} />
          </div>
          <div className="hide-mobile" style={{
            position: "absolute", left: -26, bottom: 30, background: "var(--color-pure)",
            borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", padding: "16px 20px", maxWidth: 200
          }}>
            <div className="serif" style={{ fontSize: 30, color: "var(--color-purple)", lineHeight: 1 }}>+13</div>
            <div style={{ fontSize: 12.5, lineHeight: 1.35, color: "var(--fg2)", marginTop: 6 }}>años en talento tech</div>
            <div style={{ fontSize: 12, lineHeight: 1.35, color: "var(--fg2)", marginTop: 4 }}>Ex Mercado Libre / Folcode / Atlas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;

// ---- Pains / Oportunidad y barrera ----
function Pains() {
  const pains = [
    ["heart", "Te atrae la industria tech", "por sus desafíos, sus oportunidades y la cultura de sus empresas. Pero al postularte, piden algo que no tenés: conocer la industria."],
    ["puzzle", "Intentaste aprender", "y te pareció demasiado difícil: tecnologías, perfiles, siglas que cambian todo el tiempo."],
    ["shield-alert", "Miraste cursos", "y desconfiás de qué tan aplicables son a la realidad del mercado."],
  ];
  return (
    <section className="section" style={{ background: "var(--bg-surface)" }}>
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 44 }}>
          <div className="eyebrow" style={{ color: "var(--color-sparkle)", marginBottom: 18 }}>Si trabajás o estudiás RRHH, ya lo sabés</div>
          <h2 className="title" style={{ maxWidth: 880 }}>
            IT Recruiter es uno de los roles <span className="it" style={{ color: "var(--color-purple)" }}>más buscados</span> del mercado. ¿Por qué parece tan difícil <span style={{ color: "var(--color-purple)" }}>{BK("entrar")}</span>?
          </h2>
        </div>
        <div className="grid-3" style={{ marginBottom: 40 }}>
          {pains.map(([ic, lead, txt], i) => (
            <div className="card reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, display: "grid", placeItems: "center", background: "var(--bg-light)", color: "var(--color-purple)", marginBottom: 20 }}>
                <i data-lucide={ic} style={{ width: 21, height: 21 }}></i>
              </div>
              <p style={{ fontSize: 16.5, lineHeight: 1.45, color: "var(--fg2)" }}>
                <b style={{ color: "var(--fg1)" }}>{lead}</b> — {txt}
              </p>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ borderLeft: "2px solid var(--color-purple)", paddingLeft: 26, maxWidth: 780 }}>
          <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--fg2)" }}>
            Para entrar no te falta capacidad. Te falta que alguien te cuente <b style={{ color: "var(--fg1)" }}>cómo funciona la industria <span className="serif it" style={{ color: "var(--color-purple)", fontWeight: 700 }}>de verdad</span></b>, que te la explique <b style={{ color: "var(--fg1)" }}>en simple</b> — de persona non-tech a persona non-tech — y que te entrene con <b style={{ color: "var(--fg1)" }}>práctica y criterio de mercado real</b>. Eso, exactamente, es este curso.
          </p>
        </div>
      </div>
    </section>
  );
}
window.Pains = Pains;
