// Direction 2 — "ATELIER"
// Premium minimal. Warm cream + charcoal + muted ember accent.
// Display: Instrument Serif (editorial). Body: Space Grotesk.

const D2 = ({ displayFont, bodyFont }) => {
  const BG = "#f4efe6";       // warm bone
  const FG = "#1c1815";       // deep charcoal
  const MUTED = "#8a8071";
  const RULE = "#d9d0bf";
  const ACCENT = "oklch(0.55 0.12 35)"; // muted ember
  const display = displayFont || "'Instrument Serif', 'Cormorant Garamond', serif";
  const body = bodyFont || "'Space Grotesk', 'Inter Tight', sans-serif";

  const rule = `1px solid ${RULE}`;
  const W = 1440;

  // small caps label
  const Label = ({ children, style = {} }) => (
    <div style={{
      fontFamily: body, fontSize: 11, letterSpacing: "0.22em",
      textTransform: "uppercase", color: MUTED, ...style,
    }}>{children}</div>
  );

  return (
    <div style={{ width: W, background: BG, color: FG, fontFamily: body }}>
      {/* NAV */}
      <div style={{
        padding: "28px 56px", display: "grid",
        gridTemplateColumns: "1fr auto 1fr", alignItems: "center", borderBottom: rule,
      }}>
        <Label>est. 2025 — rosario</Label>
        <div style={{ fontFamily: display, fontStyle: "italic", fontSize: 32, letterSpacing: "-0.01em" }}>
          Blaze Club
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 32, fontSize: 13 }}>
          <span>Catálogo</span><span>Cómo comprar</span><span>El club</span><span>Contacto</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "120px 56px 100px", borderBottom: rule, position: "relative" }}>
        <Note style={{ position: "absolute", top: 24, right: 56, color: MUTED }}>
          Hero · editorial generoso, claim en serif
        </Note>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <Label style={{ marginBottom: 40 }}>vol. 01 — premium disposables</Label>
            <h1 style={{
              fontFamily: display, fontSize: 132, lineHeight: 0.95, margin: 0,
              letterSpacing: "-0.025em", fontWeight: 400,
            }}>
              Una<br/>
              <span style={{ fontStyle: "italic", color: ACCENT }}>colección</span><br/>
              pequeña.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.55, marginTop: 40, maxWidth: 460, color: FG }}>
              Curamos solo los descartables que realmente vale la pena tener cerca.
              Sabores, autonomía, calidad. Nada más.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
              <a style={{
                background: FG, color: BG, padding: "16px 28px",
                fontFamily: body, fontSize: 14, fontWeight: 500, textDecoration: "none",
                borderRadius: 999,
              }}>Ver catálogo →</a>
              <a style={{
                border: `1px solid ${FG}`, color: FG, padding: "16px 28px",
                fontFamily: body, fontSize: 14, fontWeight: 500, borderRadius: 999,
              }}>WhatsApp</a>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <StripedBox height={560} label="HERO STILL LIFE" tone="light" />
            <div style={{
              position: "absolute", bottom: 20, left: 20, background: BG,
              padding: "10px 14px", border: rule,
            }}>
              <Label style={{ marginBottom: 4 }}>destacado</Label>
              <div style={{ fontFamily: display, fontSize: 22, fontStyle: "italic" }}>
                Disposable C · 15k
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÁS VENDIDOS */}
      <section style={{ padding: "80px 56px", borderBottom: rule }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 56 }}>
          <div>
            <Label>§ favoritos</Label>
            <h2 style={{ fontFamily: display, fontSize: 72, fontWeight: 400, margin: "8px 0 0", letterSpacing: "-0.02em" }}>
              Los más <span style={{ fontStyle: "italic", color: ACCENT }}>elegidos</span>
            </h2>
          </div>
          <div style={{ fontSize: 13 }}>Ver catálogo completo →</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {PRODUCTS.map((p, i) => (
            <div key={i}>
              <StripedBox height={300} label="PRODUCT" tone="light" />
              <div style={{ marginTop: 18 }}>
                <Label style={{ color: MUTED, fontSize: 10 }}>0{i + 1} · {p.puffs} puffs</Label>
                <div style={{ fontFamily: display, fontSize: 26, fontStyle: "italic", marginTop: 6, letterSpacing: "-0.01em" }}>
                  {p.name}
                </div>
                <div style={{ fontSize: 13, color: MUTED, marginTop: 2 }}>{p.flavor}</div>
                <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: display, fontSize: 22 }}>$ —.—</span>
                  <span style={{ fontSize: 12, color: ACCENT }}>Pedir →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO COMPRAR */}
      <section style={{ padding: "100px 56px", borderBottom: rule }}>
        <Label style={{ textAlign: "center", marginBottom: 16 }}>§ cómo comprar</Label>
        <h2 style={{
          fontFamily: display, fontSize: 80, fontWeight: 400, textAlign: "center",
          margin: "0 0 72px", letterSpacing: "-0.02em",
        }}>
          Tres pasos, <span style={{ fontStyle: "italic", color: ACCENT }}>sin vueltas.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: display, fontStyle: "italic", fontSize: 56,
                color: ACCENT, marginBottom: 14,
              }}>{s.n}</div>
              <div style={{ fontFamily: display, fontSize: 28, marginBottom: 10 }}>{s.t}</div>
              <div style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, maxWidth: 280, margin: "0 auto" }}>
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAGOS + ENVÍOS */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: rule }}>
        <div style={{ padding: "80px 56px", borderRight: rule }}>
          <Label>§ pagos</Label>
          <h3 style={{ fontFamily: display, fontSize: 48, fontWeight: 400, margin: "12px 0 32px" }}>
            Como te <span style={{ fontStyle: "italic" }}>convenga.</span>
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {PAYMENTS.map((p, i) => (
              <div key={i} style={{
                border: rule, padding: "20px 18px", borderRadius: 6, background: BG,
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontFamily: display, fontSize: 22 }}>{p}</span>
                <Note style={{ borderColor: MUTED }}>logo</Note>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "80px 56px" }}>
          <Label>§ envíos</Label>
          <h3 style={{ fontFamily: display, fontSize: 48, fontWeight: 400, margin: "12px 0 24px" }}>
            <span style={{ fontStyle: "italic", color: ACCENT }}>Rosario</span>, en el día.
          </h3>
          <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, marginBottom: 24 }}>
            Coordinamos entrega por WhatsApp en el momento.
            Cubrimos casi toda la ciudad y alrededores cercanos.
          </p>
          <StripedBox height={180} label="MAPA — ZONAS DE COBERTURA" tone="light" />
          <div style={{ marginTop: 16, fontSize: 12, color: MUTED, lineHeight: 1.8 }}>
            Centro · Pichincha · Fisherton · Bv. Oroño · Alto Rosario · alrededores
          </div>
        </div>
      </section>

      {/* CLUB / NEWSLETTER */}
      <section style={{ padding: "120px 56px", borderBottom: rule, textAlign: "center" }}>
        <Label style={{ marginBottom: 16 }}>§ blaze club — membership</Label>
        <h2 style={{
          fontFamily: display, fontSize: 120, fontWeight: 400, margin: "0 0 28px",
          letterSpacing: "-0.025em", lineHeight: 0.95,
        }}>
          Acceso al <span style={{ fontStyle: "italic", color: ACCENT }}>círculo</span>.
        </h2>
        <p style={{ fontSize: 16, color: MUTED, maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.6 }}>
          Drops antes que nadie, precio de socio y sorteos mensuales.
          Gratis. Solo dejanos tu mail.
        </p>
        <div style={{ display: "flex", maxWidth: 480, margin: "0 auto", gap: 10 }}>
          <input placeholder="tu@email.com" style={{
            flex: 1, background: BG, border: `1px solid ${FG}`,
            padding: "16px 20px", fontFamily: body, fontSize: 14, color: FG, borderRadius: 999,
          }} />
          <button style={{
            background: FG, color: BG, border: "none", padding: "16px 28px",
            fontFamily: body, fontSize: 14, borderRadius: 999, fontWeight: 500,
          }}>Unirme</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "72px 56px 48px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ fontFamily: display, fontStyle: "italic", fontSize: 44 }}>Blaze Club</div>
          <Label style={{ marginTop: 8 }}>premium disposables — rosario</Label>
        </div>
        {[
          ["navegar", ["Inicio", "Catálogo", "El Club", "Cómo comprar"]],
          ["contacto", ["WhatsApp", "Instagram", "rosario@blaze"]],
          ["legal", ["Sólo +18", "Privacidad", "Términos"]],
        ].map(([t, items]) => (
          <div key={t}>
            <Label style={{ marginBottom: 14 }}>{t}</Label>
            {items.map(x => (
              <div key={x} style={{ fontSize: 14, marginBottom: 6 }}>{x}</div>
            ))}
          </div>
        ))}
      </footer>
    </div>
  );
};

window.D2 = D2;
