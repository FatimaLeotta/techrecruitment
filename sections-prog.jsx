// ===== Para quién · Programa · Modalidad =====

// ---- Para quién ----
function ParaQuien() {
  const who = [
    ["users", "Estudiantes o profesionales de RRHH", "(o afines) que quieran insertarse en la industria tech como IT Recruiters."],
    ["briefcase", "Profesionales que hacen selección de personal", "y quieren sumar búsquedas tecnológicas a su trabajo y ampliar sus oportunidades."],
  ];
  return (
    <section id="para-quien" className="section" style={{ background: "var(--bg-surface)", paddingTop: 64 }}>
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48, maxWidth: 720 }}>
          <div className="eyebrow" style={{ color: "var(--color-sparkle)", marginBottom: 18 }}>Para quién es</div>
          <h2 className="title">¿Quién puede tomar el curso?</h2>
        </div>
        <div className="grid-2" style={{ marginBottom: 36 }}>
          {who.map(([ic, t, d], i) => (
            <div className="card reveal" key={i} style={{ transitionDelay: `${i * 80}ms`, display: "flex", gap: 22, alignItems: "flex-start" }}>
              <div style={{ width: 46, height: 46, borderRadius: 13, display: "grid", placeItems: "center", background: "var(--color-purple)", color: "var(--color-pure)", flex: "none" }}>
                <i data-lucide={ic} style={{ width: 22, height: 22 }}></i>
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 18, lineHeight: 1.3, marginBottom: 8 }}>{t}</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.5, color: "var(--fg2)" }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 14, padding: "20px 26px", borderRadius: "var(--radius-lg)", background: "var(--bg-light)" }}>
          <i data-lucide="sparkles" style={{ width: 20, height: 20, color: "var(--color-sparkle)", flex: "none" }}></i>
          <p style={{ fontSize: 16, lineHeight: 1.45, color: "var(--fg1)" }}>
            No necesitás ningún conocimiento ni experiencia previa en la industria tech.
          </p>
        </div>
      </div>
    </section>
  );
}
window.ParaQuien = ParaQuien;

// ---- Programa ----
function Programa() {
  const mods = [
    { n: "01", t: "Industria y Perfiles Tech", items: ["Estructuras, tipos y etapas de las tech companies", "Cultura organizacional en empresas de tecnología", "Perfiles tech", "Seniority y career path: junior, mid-level, senior, roles de liderazgo y management"] },
    { n: "02", t: "Proceso de Contratación", items: ["Rol y alcance del IT Recruiter", "Dónde y con qué herramientas buscar perfiles", "Instancias del proceso de contratación en tech", "Datos y métricas principales del proceso"] },
    { n: "03", t: "IA en Recruiting y en Roles", items: ["Dónde usamos IA en reclutamiento", "Herramientas con IA", "Casos reales y ejemplos", "Buenas prácticas de contratación con IA"] },
  ];
  return (
    <section id="programa" className="section" style={{ background: "var(--bg-light)" }}>
      <div className="wrap">
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 18, marginBottom: 48 }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--color-sparkle)", marginBottom: 18 }}>El programa</div>
            <h2 className="title">3 módulos, un {BK("criterio")}</h2>
          </div>
          <p style={{ maxWidth: 340, fontSize: 15, lineHeight: 1.55, color: "var(--fg2)" }}>
            Un recorrido ordenado: de entender la industria y sus perfiles, al proceso de contratación, a sumar IA con cabeza.
          </p>
        </div>
        <div className="grid-3" style={{ marginBottom: 24 }}>
          {mods.map((m, i) => (
            <div className="card reveal" key={i} style={{ transitionDelay: `${i * 90}ms`, background: "var(--color-pure)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
                <span className="eyebrow no-rule" style={{ color: "var(--fg3)", fontSize: 11 }}>Módulo {m.n}</span>
                <span className="mod-num">{m.n}</span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 20, lineHeight: 1.2, marginBottom: 14 }}>{m.t}</h3>
              <div>
                {m.items.map((it, k) => (<div className="mod-li" key={k}>{it}</div>))}
              </div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-lg)", background: "var(--color-purple)", color: "var(--color-pure)", padding: "30px 34px", display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
          <div style={{ width: 50, height: 50, borderRadius: 13, display: "grid", placeItems: "center", background: "var(--color-pure-15)", flex: "none", fontWeight: 800, fontSize: 13, letterSpacing: "0.04em" }}>
            PLUS!
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h3 style={{ fontWeight: 700, fontSize: 18, lineHeight: 1.3, marginBottom: 6 }}>Encuentro Bonus · Empleabilidad e Inserción Laboral como IT Recruiter</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Programa = Programa;

// ---- Modalidad / El cursado ----
function Modalidad() {
  const facts = [
    ["timer", "Duración", "5 semanas"],
    ["play-circle", "A tu ritmo", "1 lección grabada por semana (~90 min)"],
    ["radio", "En vivo", "Encuentros sincrónicos los sábados de 10 a 12 hs (ARG)"],
    ["message-circle", "Acompañamiento", "Soporte semanal por WhatsApp conmigo"],
  ];
  return (
    <section id="modalidad" className="section" style={{ background: "var(--color-galaxy)", color: "var(--fg-on-dark)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "var(--gradient-glow)", opacity: .3, pointerEvents: "none" }} />
      <div className="wrap" style={{ position: "relative" }}>
        <div className="reveal modalidad-header">
          <div>
            <div className="eyebrow" style={{ color: "var(--fg-on-dark-2)", marginBottom: 18 }}>Cómo y cuándo</div>
            <h2 className="title">El cursado, en {BK("claro")}</h2>
          </div>
          <div className="chip chip-accent hide-mobile" style={{ padding: "12px 22px" }}>
            <i data-lucide="rocket" style={{ width: 16, height: 16 }}></i> Inicio: 3 ago · Finaliza: 5 sep
          </div>
        </div>
        <div className="grid-4" style={{ marginBottom: 36 }}>
          {facts.map(([ic, l, v], i) => (
            <div className="card card-dark reveal" key={i} style={{ transitionDelay: `${i * 70}ms`, padding: 28 }}>
              <i data-lucide={ic} style={{ width: 24, height: 24, color: "var(--color-sparkle-300)", marginBottom: 18 }}></i>
              <div className="eyebrow no-rule" style={{ color: "var(--fg-on-dark-3)", fontSize: 11, marginBottom: 8 }}>{l}</div>
              <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35 }}>{v}</div>
            </div>
          ))}
        </div>
        <p className="reveal" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--fg-on-dark-2)", maxWidth: 820 }}>
          Cada semana mirás una lección grabada a tu ritmo, y el sábado nos encontramos en vivo para la práctica, las consultas e incluso para conversar con <b style={{ color: "var(--color-pure)" }}>invitados especiales</b> de la industria. Lo mejor de ambos mundos: aprender a tu propio ritmo, <span className="serif it" style={{ color: "var(--color-sparkle-300)" }}>sin perder el ritmo</span>.
        </p>
      </div>
    </section>
  );
}
window.Modalidad = Modalidad;
