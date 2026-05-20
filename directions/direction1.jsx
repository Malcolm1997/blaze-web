// Direction 1 — "MANIFEST"
// Brutalist underground. Black + warm off-white + single flame accent.
// Display: Anton (condensed industrial). UI: JetBrains Mono.

const D1 = ({ displayFont, bodyFont }) => {
  const BG = "#0c0a08";
  const FG = "#f3ede2";
  const MUTED = "#8a8278";
  const RULE = "#262220";
  const ACCENT = "oklch(0.68 0.18 45)"; // flame
  const display = displayFont || "Anton, 'Archivo Black', sans-serif";
  const body = bodyFont || "'JetBrains Mono', ui-monospace, monospace";

  const rule = `1px solid ${RULE}`;
  const W = 1440;

  return (
    <div style={{ width: W, background: BG, color: FG, fontFamily: body }}>
      {/* TICKER */}
      <div style={{
        height: 30, borderBottom: rule, display: "flex", alignItems: "center",
        overflow: "hidden", whiteSpace: "nowrap", fontSize: 11, letterSpacing: "0.2em",
        color: MUTED, textTransform: "uppercase", gap: 28, paddingLeft: 32,
      }}>
        <span>★ ENTREGA ROSARIO HOY</span>
        <span style={{ color: RULE }}>/</span>
        <span>SOLO +18</span>
        <span style={{ color: RULE }}>/</span>
        <span>NUEVOS DROPS CADA VIERNES</span>
        <span style={{ color: RULE }}>/</span>
        <span style={{ color: ACCENT }}>● ONLINE</span>
        <span style={{ color: RULE }}>/</span>
        <span>ENTREGA ROSARIO HOY</span>
        <span style={{ color: RULE }}>/</span>
        <span>SOLO +18</span>
      </div>

      {/* NAV */}
      <div style={{
        height: 72, borderBottom: rule, display: "grid",
        gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: "0 32px",
      }}>
        <div style={{ fontFamily: body, fontSize: 11, letterSpacing: "0.2em", color: MUTED }}>
          ROSARIO · ARG · EST. 2025
        </div>
        <div style={{ fontFamily: display, fontSize: 26, letterSpacing: "0.04em" }}>
          BLAZE<span style={{ color: ACCENT }}>·</span>CLUB
        </div>
        <div style={{
          display: "flex", justifyContent: "flex-end", gap: 24, fontSize: 12,
          letterSpacing: "0.16em", textTransform: "uppercase",
        }}>
          <span>Catálogo</span><span>Cómo comprar</span><span>Club</span>
          <span style={{ color: ACCENT }}>WhatsApp ↗</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ borderBottom: rule, padding: "72px 32px 56px", position: "relative" }}>
        <Note style={{ position: "absolute", top: 16, right: 32, color: MUTED }}>
          Hero · manifiesto + 2 CTAs equilibrados
        </Note>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 56, alignItems: "end" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: MUTED, marginBottom: 32 }}>
              VOL. 01 — PREMIUM DISPOSABLE COLLECTION
            </div>
            <h1 style={{
              fontFamily: display, fontSize: 168, lineHeight: 0.86, margin: 0,
              letterSpacing: "-0.02em", textTransform: "uppercase",
            }}>
              UNDER.<br/>
              ENERGY.<br/>
              <span style={{ color: ACCENT }}>DIFFERENT.</span>
            </h1>
          </div>
          <div style={{ paddingBottom: 12 }}>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: FG, marginBottom: 28 }}>
              Una curaduría chica de descartables. Sin vueltas, sin catálogos infinitos.
              Solo lo que realmente vale.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a style={{
                background: ACCENT, color: BG, padding: "16px 22px",
                fontFamily: display, fontSize: 18, letterSpacing: "0.06em",
                textTransform: "uppercase", textAlign: "center", textDecoration: "none",
              }}>VER CATÁLOGO →</a>
              <a style={{
                border: `1px solid ${FG}`, color: FG, padding: "16px 22px",
                fontFamily: display, fontSize: 18, letterSpacing: "0.06em",
                textTransform: "uppercase", textAlign: "center",
              }}>WHATSAPP ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* MÁS VENDIDOS */}
      <section style={{ borderBottom: rule, padding: "40px 32px 56px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: MUTED }}>§ 02</div>
            <h2 style={{ fontFamily: display, fontSize: 64, margin: "8px 0 0", letterSpacing: "-0.01em" }}>
              MÁS VENDIDOS
            </h2>
          </div>
          <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: MUTED }}>
            VER TODO →
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderLeft: rule, borderTop: rule }}>
          {PRODUCTS.map((p, i) => (
            <div key={i} style={{ borderRight: rule, borderBottom: rule, padding: 20 }}>
              <div style={{ fontSize: 11, color: MUTED, display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <span>0{i + 1}</span><span style={{ color: ACCENT }}>● STOCK</span>
              </div>
              <StripedBox height={220} label="PRODUCT PHOTO" />
              <div style={{ marginTop: 16 }}>
                <div style={{ fontFamily: display, fontSize: 22, letterSpacing: "0.02em", textTransform: "uppercase" }}>
                  {p.name}
                </div>
                <div style={{ fontSize: 11, color: MUTED, marginTop: 4, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {p.puffs} PUFFS · {p.flavor}
                </div>
                <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: display, fontSize: 20 }}>$ —.—</span>
                  <span style={{ fontSize: 11, color: ACCENT, letterSpacing: "0.14em" }}>PEDIR →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO COMPRAR */}
      <section style={{ borderBottom: rule, padding: "40px 32px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 56 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: MUTED }}>§ 03</div>
            <h2 style={{ fontFamily: display, fontSize: 64, margin: "8px 0 0", lineHeight: 0.9 }}>
              CÓMO<br/>COMPRAR
            </h2>
            <p style={{ fontSize: 12, color: MUTED, marginTop: 20, lineHeight: 1.6 }}>
              Tres pasos. Sin checkout, sin login. Coordinamos directo.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderLeft: rule, borderTop: rule }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{ borderRight: rule, borderBottom: rule, padding: "28px 24px", minHeight: 220 }}>
                <div style={{ fontFamily: display, fontSize: 72, color: ACCENT, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: display, fontSize: 22, marginTop: 18, textTransform: "uppercase" }}>{s.t}</div>
                <div style={{ fontSize: 12, color: MUTED, marginTop: 10, lineHeight: 1.6 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGOS + ENVÍOS — split */}
      <section style={{ borderBottom: rule, display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ padding: "40px 32px", borderRight: rule }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: MUTED }}>§ 04 · MÉTODOS DE PAGO</div>
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 0 }}>
            {PAYMENTS.map((p, i) => (
              <div key={i} style={{
                padding: "16px 0", borderBottom: rule, display: "flex",
                justifyContent: "space-between", fontFamily: display, fontSize: 22, letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}>
                <span>{p}</span>
                <span style={{ color: MUTED, fontFamily: body, fontSize: 12 }}>0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "40px 32px" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: MUTED }}>§ 05 · ENVÍOS</div>
          <h3 style={{ fontFamily: display, fontSize: 42, margin: "16px 0 18px", letterSpacing: "-0.01em" }}>
            ROSARIO<br/>EN EL DÍA.
          </h3>
          <StripedBox height={180} label="MAPA / ZONAS DE COBERTURA" />
          <div style={{ marginTop: 16, display: "flex", gap: 12, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED, flexWrap: "wrap" }}>
            <span>● CENTRO</span><span>● PICHINCHA</span><span>● FISHERTON</span>
            <span>● BV. OROÑO</span><span>● ALTO ROSARIO</span><span>+ ALREDEDORES</span>
          </div>
        </div>
      </section>

      {/* CLUB / FIDELIDAD */}
      <section style={{ borderBottom: rule, padding: "64px 32px", background: ACCENT, color: BG }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 56, alignItems: "end" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", marginBottom: 16 }}>§ 06 · MEMBERSHIP</div>
            <div style={{ fontFamily: display, fontSize: 120, lineHeight: 0.86, letterSpacing: "-0.02em" }}>
              SUMATE<br/>AL CLUB.
            </div>
          </div>
          <div>
            <p style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>
              Acceso primero a drops, precio de socio, y sorteos mensuales.
              Gratis. Para siempre.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <input placeholder="tu@email" style={{
                flex: 1, background: "transparent", border: `1px solid ${BG}`,
                padding: "14px 16px", fontFamily: body, fontSize: 13, color: BG,
              }} />
              <button style={{
                background: BG, color: ACCENT, border: "none", padding: "14px 22px",
                fontFamily: display, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase",
              }}>UNIRME →</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "56px 32px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 32 }}>
        <div>
          <div style={{ fontFamily: display, fontSize: 48, letterSpacing: "0.02em" }}>
            BLAZE<span style={{ color: ACCENT }}>·</span>CLUB
          </div>
          <div style={{ fontSize: 11, color: MUTED, marginTop: 8, letterSpacing: "0.2em" }}>
            UNDERGROUND PREMIUM DISPOSABLES — ROSARIO AR
          </div>
        </div>
        {[
          ["NAVEGAR", ["Inicio", "Catálogo", "Club", "Cómo comprar"]],
          ["CONTACTO", ["WhatsApp", "Instagram", "rosario@blaze"]],
          ["LEGAL", ["Sólo +18", "Política de privacidad", "Términos"]],
        ].map(([t, items]) => (
          <div key={t}>
            <div style={{ fontSize: 11, color: MUTED, letterSpacing: "0.2em", marginBottom: 14 }}>{t}</div>
            {items.map(x => (
              <div key={x} style={{ fontSize: 13, marginBottom: 6 }}>{x}</div>
            ))}
          </div>
        ))}
      </footer>
    </div>
  );
};

window.D1 = D1;
