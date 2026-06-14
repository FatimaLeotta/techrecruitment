// ===== MID sections: Edición · Resultados · Testimonios · Por qué =====

// ---- Edición (course intro) ----
function Edicion() {
  return (
    <section className="section" style={{ background: "var(--bg-light)" }}>
      <div className="wrap split" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "center" }}>
        <div className="reveal">
          <div className="eyebrow" style={{ color: "var(--color-sparkle)", marginBottom: 18 }}>El curso · 3ª edición</div>
          <h2 className="title" style={{ marginBottom: 24 }}>
            Tech Recruitment,<br />{BK("desde cero")}
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--fg2)", marginBottom: 18, maxWidth: 520 }}>
            Un curso práctico para estudiantes y profesionales de RRHH (o afines) y para quienes hacen selección de personal y quieren reclutar talento tech <b style={{ color: "var(--fg1)" }}>con confianza</b>.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--fg2)", marginBottom: 28, maxWidth: 520 }}>
            Esta edición se actualizó incorporando el impacto de la <b style={{ color: "var(--fg1)" }}>Inteligencia Artificial</b> en los roles tecnológicos y en los procesos de selección, y estrena un formato de entrenamiento: <b style={{ color: "var(--fg1)" }}>lecciones grabadas</b> para aprender a tu propio ritmo sin perder el ritmo, <b style={{ color: "var(--fg1)" }}>encuentros en vivo</b> cada semana para practicar, consultar y conversar con invitados especiales, y <b style={{ color: "var(--fg1)" }}>soporte semanal por WhatsApp</b> conmigo.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <span className="chip">Criterio de mercado real</span>
            <span className="chip">Simplicidad y utilidad</span>
            <span className="chip">Entrenamiento práctico</span>
          </div>
          <a href="https://wa.me/5492646272661?text=Hola%20F%C3%A1tima%2C%20vengo%20de%20la%20secci%C3%B3n%20del%20curso%20y%20me%20gustar%C3%ADa%20m%C3%A1s%20detalle.%20Mi%20nombre%20es%20" target="_blank" rel="noopener" className="btn btn-primary" style={{ marginTop: 30 }}>
            <i data-lucide="message-circle"></i> Quiero sumarme
          </a>
        </div>
        <div className="reveal" style={{ position: "relative" }}>
          <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", aspectRatio: "4/5", boxShadow: "var(--shadow-md)" }}>
            <img src="fotografia-4.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
window.Edicion = Edicion;

// ---- Resultados / La transformación ----
function Resultados() {
  const items = [
    "Entender el alcance del rol del IT Recruiter en la industria.",
    "Describir perfiles técnicos y entender la base de cada perfil — lo que te permite seguir su evolución.",
    "Diseñar y medir un proceso de contratación alineado a la expectativa de la industria.",
    "Actualizarte sobre el impacto de la IA en recruitment: nuevas formas de contratar con IA y nuevos roles IT.",
  ];
  return (
    <section className="section" style={{ background: "var(--bg-surface)", paddingBottom: 64 }}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: "center", marginBottom: 52, maxWidth: 640, marginInline: "auto" }}>
          <div className="eyebrow no-rule" style={{ color: "var(--color-sparkle)", marginBottom: 18, justifyContent: "center" }}>Al finalizar el curso</div>
          <h2 className="title">Vas a poder…</h2>
        </div>
        <div className="grid-2" style={{ maxWidth: 880, marginInline: "auto", marginBottom: 24 }}>
          {items.map((txt, i) => (
            <div className="card reveal check" key={i} style={{ transitionDelay: `${i * 70}ms`, alignItems: "flex-start" }}>
              <span className="check-mark"><i data-lucide="check"></i></span>
              <p style={{ fontSize: 16, lineHeight: 1.45, color: "var(--fg1)" }}>{txt}</p>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ maxWidth: 880, marginInline: "auto", marginBottom: 44, display: "flex", alignItems: "center", gap: 18, padding: "26px 32px", borderRadius: "var(--radius-lg)", background: "var(--color-purple)", color: "var(--color-pure)" }}>
          <span style={{ fontSize: 26, flex: "none", lineHeight: 1 }}>🎯</span>
          <p style={{ fontSize: 17, lineHeight: 1.45 }}>
            <b>Bonus:</b> visibilidad del mercado y herramientas de inserción laboral como IT Recruiter.
          </p>
        </div>
        <p className="reveal serif" style={{ textAlign: "center", fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)", lineHeight: 1.2, color: "var(--fg1)", maxWidth: 780, marginInline: "auto" }}>
          Empezás tus primeras búsquedas tech con confianza y <span className="it" style={{ color: "var(--color-purple)" }}>criterio de mercado real</span>.
        </p>
      </div>
    </section>
  );
}
window.Resultados = Resultados;

// ---- Testimonios ----
function Avatar({ img, name }) {
  if (img) return <img src={img} alt={name} style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover", border: "1.5px solid var(--color-pure-15)", flex: "none" }} />;
  const initials = name.split(" ").filter(w => /[A-Za-zÁÉÍÓÚáéíóú]/.test(w[0])).slice(0, 2).map(w => w[0]).join("");
  return (
    <span style={{ width: 52, height: 52, borderRadius: "50%", flex: "none", display: "grid", placeItems: "center", background: "var(--color-sparkle)", color: "var(--color-pure)", fontWeight: 700, fontSize: 16, border: "1.5px solid var(--color-pure-15)" }}>{initials}</span>
  );
}
window.Avatar = Avatar;

function Testimonios() {
  const big = { q: "El mayor aprendizaje fue entender que el recruiting cambia por completo según el modelo de negocio y el tipo de empresa para la que estás buscando talento. La gran diferencia con otros cursos es que no se queda en la teoría: todo el contenido está atravesado por la experiencia práctica y real de Fátima. Recomendaría esta formación a cualquier profesional que quiera comprender cómo funciona realmente la industria tecnológica, qué buscan las empresas hoy y cómo desarrollar una mirada más estratégica del recruiting.", a: "M. Salomé Corradi Biondi", r: "Psicóloga", img: "assets/testi-salome.jpeg" };
  const quotes = [
    { q: "Antes del curso solo tenía impresiones generales sobre la industria tech. Hoy comprendo perfiles, tecnologías, buenas prácticas de recruiting y las características más valoradas por el mercado.", a: "Laura Saball", r: "Lic. en Psicología · Especialista en Gestión del Talento", img: "assets/testi-laura.png" },
    { q: "Era totalmente neófita en recruiting tech y Fátima logró que un mundo que parecía complejo se volviera accesible y amigable. Es una inversión clara en conocimiento práctico y aplicable.", a: "Lia de Cara", r: "Coordinadora de Equipos", img: "assets/testi-lia.png" },
  ];
  const highlights = ["Claridad para entender la industria tech", "Conceptos explicados de forma simple", "Aplicación práctica y ejemplos reales", "Criterio compartido desde la experiencia"];
  return (
    <section className="section" style={{ background: "var(--color-galaxy)", color: "var(--fg-on-dark)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "var(--gradient-glow)", opacity: .35, pointerEvents: "none" }} />
      <div className="wrap" style={{ position: "relative" }}>
        <div className="eyebrow reveal" style={{ color: "var(--fg-on-dark-2)", marginBottom: 44 }}>Lo que dicen quienes ya participaron</div>
        <div className="card card-dark reveal testi-big" style={{ marginBottom: 24, padding: 40, display: "grid", gridTemplateColumns: "auto 1fr", gap: 30, alignItems: "start" }}>
          <span className="serif testi-big-quote" style={{ fontSize: 92, lineHeight: .55, color: "var(--color-sparkle-300)", height: 44 }}>&ldquo;</span>
          <div>
            <p className="serif" style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)", lineHeight: 1.32, color: "var(--fg-on-dark)", marginBottom: 26 }}>{big.q}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <Avatar img={big.img} name={big.a} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>{big.a}</div>
                <div style={{ fontSize: 13.5, color: "var(--fg-on-dark-3)", marginTop: 3 }}>{big.r}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-2" style={{ marginBottom: 56 }}>
          {quotes.map((c, i) => (
            <div className="card card-dark reveal" key={i} style={{ transitionDelay: `${i * 90}ms`, display: "flex", flexDirection: "column", gap: 22, padding: 36 }}>
              <span className="serif" style={{ fontSize: 56, lineHeight: .6, color: "var(--color-sparkle-300)", height: 24 }}>&ldquo;</span>
              <p className="serif" style={{ fontSize: 21, lineHeight: 1.35, color: "var(--fg-on-dark)", flex: 1 }}>{c.q}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <Avatar img={c.img} name={c.a} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{c.a}</div>
                  <div style={{ fontSize: 13, color: "var(--fg-on-dark-3)", marginTop: 3 }}>{c.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ borderTop: "1px solid var(--line-on-dark)", paddingTop: 36 }}>
          <div className="eyebrow no-rule" style={{ color: "var(--fg-on-dark-3)", marginBottom: 22, fontSize: 11 }}>Lo que más destacan</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {highlights.map((h, i) => (
              <span className="check check-dark" key={i} style={{ alignItems: "center", gap: 11, fontSize: 15, color: "var(--fg-on-dark-2)", background: "rgba(255,255,255,.04)", border: "1px solid var(--color-pure-15)", padding: "11px 18px 11px 12px", borderRadius: "var(--radius-pill)" }}>
                <span className="check-mark" style={{ width: 24, height: 24 }}><i data-lucide="check" style={{ width: 14, height: 14 }}></i></span>{h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Testimonios = Testimonios;

// ---- Por qué este curso ----
function PorQue() {
  const pillars = [
    ["badge-check", "Criterio de mercado real", "Criterios y prácticas de IT recruitment validadas en la industria. No es teoría: es información de mercado. Te enseño cómo se hacen las cosas en el mundo real."],
    ["feather", "Simplicidad y utilidad", "Lenguaje y explicaciones simples, tal cual lo aprendí yo: de persona non-tech a persona non-tech. No te vas a perder."],
    ["dumbbell", "Entrenamiento", "Lo mejor de ambos mundos: lecciones grabadas para aprender a tu propio ritmo, mixeadas con encuentros en vivo para prácticas, consultas e invitados especiales."],
  ];
  const nots = ["Sin teoría innecesaria.", "Sin fórmulas mágicas.", "Sin contenido que no puedas aplicar."];
  return (
    <section className="section" style={{ background: "var(--bg-light)" }}>
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 48, maxWidth: 720 }}>
          <div className="eyebrow" style={{ color: "var(--color-sparkle)", marginBottom: 18 }}>Por qué este curso</div>
          <h2 className="title">
            ¿Por qué {BK("este")} curso y no otro?
          </h2>
        </div>
        <div className="grid-3" style={{ marginBottom: 48 }}>
          {pillars.map(([ic, t, d], i) => (
            <div className="card reveal" key={i} style={{ transitionDelay: `${i * 80}ms`, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ width: 46, height: 46, borderRadius: 13, display: "grid", placeItems: "center", background: "var(--bg-surface)", color: "var(--color-purple)" }}>
                <i data-lucide={ic} style={{ width: 22, height: 22 }}></i>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 19, lineHeight: 1.25 }}>{t}</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--fg2)" }}>{d}</p>
            </div>
          ))}
        </div>
        <div className="reveal porque-nots" style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px", paddingTop: 36, borderTop: "1px solid var(--color-galaxy-12)" }}>
          {nots.map((n, i) => (
            <div key={i} className="check" style={{ alignItems: "center" }}>
              <span style={{ flex: "none", width: 26, height: 26, borderRadius: "50%", display: "grid", placeItems: "center", border: "1.5px solid var(--color-purple)", color: "var(--color-purple)" }}>
                <i data-lucide="x" style={{ width: 14, height: 14 }}></i>
              </span>
              <span className="serif" style={{ fontSize: 21, color: "var(--fg1)" }}>{n}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PorQue = PorQue;
