// Community grid + footer.

const FlameCommunity = ({ accent, accent2 }) => {
  const T = FlameTokens;
  // Generate 8 stylized "instagram posts" — colored squares with overlay text
  const posts = [
    { hue: 8,   tag: "@maria.r",  note: "mango ice 🔥"},
    { hue: 280, tag: "@nico.psr", note: "ember 9k · ice mint"},
    { hue: 90,  tag: "@flame_ros",note: "watermelon ftw"},
    { hue: 350, tag: "@juli.ok",  note: "mango ice = win"},
    { hue: 30,  tag: "@martin_",  note: "smoke 15k"},
    { hue: 200, tag: "@blz.rsr",  note: "entrega ok"},
    { hue: 320, tag: "@vale.x",   note: "nuevo sabor"},
    { hue: 60,  tag: "@fede_o",   note: "blaze ✨"},
  ];

  return (
    <section style={{
      padding: "80px 32px",
      borderBottom: `1px solid ${T.rule}`,
    }}>
      <div style={{ maxWidth: 1376, margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          marginBottom: 40,
        }}>
          <div>
            <SectionLabel idx="07">COMUNIDAD</SectionLabel>
            <h2 style={{
              fontFamily: "var(--display)", fontSize: 80,
              margin: "12px 0 0", letterSpacing: "0.02em",
              color: T.fg,
            }}>
              @BLAZE.ME.<span style={{ color: accent }}>ONE</span>
            </h2>
            <p style={{
              fontFamily: "var(--body)", fontSize: 13, color: T.muted,
              marginTop: 12, lineHeight: 1.7,
            }}>
              Etiquetanos para aparecer. Repost garantizado en stories.
            </p>
          </div>
          <a href="https://www.instagram.com/blaze.me.one?igsh=ajc5c2plaGxsbWpr" target="_blank" rel="noopener" style={{
            fontFamily: "var(--mono)", fontSize: 12, color: T.fg,
            letterSpacing: "0.2em",
            border: `1px solid ${T.rule2}`,
            padding: "12px 20px",
            textDecoration: "none",
          }}>SEGUIR EN INSTAGRAM →</a>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 6,
        }}>
          {posts.map((p, i) => {
            const color = `oklch(0.55 0.18 ${p.hue})`;
            return (
              <div key={i} style={{
                aspectRatio: "1 / 1",
                background: `linear-gradient(135deg, ${color}, oklch(0.25 0.1 ${p.hue}))`,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}>
                {/* Diagonal lines pattern */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `repeating-linear-gradient(45deg, transparent 0 8px, rgba(0,0,0,0.1) 8px 9px)`,
                }} />
                {/* Vape silhouette */}
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  opacity: 0.7,
                }}>
                  <VapeIllustration color={`oklch(0.7 0.2 ${p.hue})`} size={70} flavor=" " />
                </div>
                {/* Bottom overlay */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "8px 10px",
                  background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.8))",
                  fontFamily: "var(--mono)", fontSize: 9,
                  color: T.fg, letterSpacing: "0.15em",
                }}>
                  <div style={{ color: accent2 }}>{p.tag}</div>
                  <div style={{ color: T.muted, marginTop: 2 }}>{p.note}</div>
                </div>
                {/* Corner index */}
                <div style={{
                  position: "absolute", top: 8, right: 8,
                  fontFamily: "var(--mono)", fontSize: 9,
                  color: T.fg, letterSpacing: "0.2em",
                  background: "rgba(0,0,0,0.4)", padding: "2px 6px",
                }}>0{i + 1}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FlameFooter = ({ accent, accent2 }) => {
  const T = FlameTokens;
  return (
    <footer style={{ padding: "72px 32px 36px" }}>
      <div style={{ maxWidth: 1376, margin: "0 auto" }}>
        {/* Huge wordmark */}
        <div style={{
          fontFamily: "var(--display)", fontSize: 220,
          color: T.fg, letterSpacing: "0.04em", lineHeight: 0.9,
          paddingBottom: 32, borderBottom: `1px solid ${T.rule}`,
          display: "flex", alignItems: "center", gap: 32,
        }}>
          <div style={{
            color: accent, filter: `drop-shadow(0 0 24px ${accent}80)`,
          }}>
            <FlameMark size={140} />
          </div>
          <span>BLAZE</span>
        </div>

        <div style={{
          padding: "40px 0",
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 32, borderBottom: `1px solid ${T.rule}`,
        }}>
          <div style={{ maxWidth: 320 }}>
            <div style={{
              fontFamily: "var(--mono)", fontSize: 10, color: T.muted,
              letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              VAPEO PREMIUM · ROSARIO AR · EST 2026
            </div>
            <p style={{
              fontFamily: "var(--body)", fontSize: 13, color: T.muted,
              marginTop: 14, lineHeight: 1.7,
            }}>
              Una curaduría chica de descartables premium.
              Operamos solo dentro de Rosario y alrededores.
              Solo +18.
            </p>
          </div>
          {[
            ["NAVEGAR",  [["Inicio", "index.html"], ["Catálogo", "Catalogo.html"], ["Cómo comprar", "ComoComprar.html"], ["Contacto", "Contacto.html"]]],
            ["CONTACTO", [["WhatsApp", "https://wa.me/5493412299708"], ["Instagram", "https://www.instagram.com/blaze.me.one?igsh=ajc5c2plaGxsbWpr"], ["Soporte", "Contacto.html"]]],
            ["LEGAL",    [["Sólo +18", "Cookies.html"], ["Política de privacidad", "Cookies.html"], ["Términos", "Cookies.html"], ["Cookies", "Cookies.html"]]],
          ].map(([t, items]) => (
            <div key={t}>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 10, color: accent2,
                letterSpacing: "0.22em", marginBottom: 16,
              }}>{t}</div>
              {items.map(([label, href]) => (
                <a key={label} href={href} style={{
                  display: "block", fontFamily: "var(--body)", fontSize: 13, color: T.fg,
                  marginBottom: 8, opacity: 0.85, textDecoration: "none",
                }}>{label}</a>
              ))}
            </div>
          ))}
        </div>

        <div style={{
          paddingTop: 20,
          display: "flex", justifyContent: "space-between",
          fontFamily: "var(--mono)", fontSize: 10,
          color: T.muted, letterSpacing: "0.22em",
        }}>
          <span>© 2026 BLAZE · ROSARIO AR</span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%", background: accent2,
              animation: "flamePulse 1.6s infinite",
            }} />
            BUILT IN ROSARIO · SYSTEM ONLINE
          </span>
          <span>ABIERTO 24HS</span>
        </div>
      </div>
    </footer>
  );
};

window.FlameCommunity = FlameCommunity;
window.FlameFooter = FlameFooter;
