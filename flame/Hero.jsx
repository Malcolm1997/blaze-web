// Hero — manifesto + next drop showcase.

const FlameHero = ({ accent, accent2 }) => {
  const T = FlameTokens;

  return (
    <section style={{
      padding: "100px 32px 96px",
      borderBottom: `1px solid ${T.rule}`,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Ambient glow blob behind the headline */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(60% 50% at 20% 50%, ${accent}1f 0%, transparent 70%)`,
      }} />
      {/* Faint diagonal grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4,
        backgroundImage: `linear-gradient(${T.rule} 1px, transparent 1px), linear-gradient(90deg, ${T.rule} 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(60% 60% at 50% 50%, #000 30%, transparent 80%)",
      }} />

      <div style={{
        position: "relative",
        display: "grid", gridTemplateColumns: "1fr 480px", gap: 64, alignItems: "center",
        maxWidth: 1376, margin: "0 auto",
      }}>
        {/* LEFT — copy */}
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
            <Pill color={accent} dot dotColor={accent}>ABIERTO 24HS</Pill>
            <Pill>ROSARIO ONLY</Pill>
            <Pill>+18</Pill>
          </div>

          <h1 style={{
            fontFamily: "var(--display)",
            fontSize: 168, lineHeight: 0.85, margin: 0,
            letterSpacing: "0.005em",
            color: T.fg,
          }}>
            VAPEO<br/>
            PREMIUM.<br/>
            <span style={{
              color: accent,
              textShadow: `0 0 40px ${accent}40`,
            }}>ROSARIO.</span>
          </h1>

          <p style={{
            fontFamily: "var(--body)",
            fontSize: 14, lineHeight: 1.75, marginTop: 36,
            maxWidth: 500, color: T.muted,
          }}>
            Curaduría chica de descartables premium. Entrega en 48hs por
            toda Rosario y todos los modelos testeados antes de salir.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
            <a href="Catalogo.html" style={{
              background: accent, color: T.bg,
              padding: "18px 28px", textDecoration: "none",
              fontFamily: "var(--display)", fontSize: 22, letterSpacing: "0.1em",
              boxShadow: `0 12px 32px ${accent}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
              display: "inline-flex", alignItems: "center", gap: 10,
            }}>
              VER CATÁLOGO
              <span style={{ fontSize: 18 }}>→</span>
            </a>
            <a href="https://wa.me/5493412299708?text=Hola%20Blaze%2C%20quiero%20hacer%20una%20consulta"
               target="_blank" rel="noopener" style={{
              border: `1px solid ${T.fg}`, color: T.fg,
              padding: "18px 28px", textDecoration: "none",
              fontFamily: "var(--display)", fontSize: 22, letterSpacing: "0.1em",
              display: "inline-flex", alignItems: "center", gap: 10,
            }}>
              WHATSAPP
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            marginTop: 56,
            display: "grid", gridTemplateColumns: "repeat(4, auto)", gap: 0,
            borderTop: `1px solid ${T.rule}`,
            paddingTop: 24,
            maxWidth: 580,
          }}>
            {[
              ["12+",    "modelos curados"],
              ["48h",    "entrega rosario"],
              ["3",      "métodos de pago"],
              ["★ 4.9",  "rating clientes"],
            ].map(([n, t], i) => (
              <div key={i} style={{ paddingRight: 28 }}>
                <div style={{
                  fontFamily: "var(--display)", fontSize: 36,
                  color: T.fg, letterSpacing: "0.02em", lineHeight: 1,
                }}>{n}</div>
                <div style={{
                  fontFamily: "var(--mono)", fontSize: 10,
                  color: T.muted, marginTop: 6,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                }}>{t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — featured product showcase */}
        <FeaturedDrop accent={accent} accent2={accent2} />
      </div>
    </section>
  );
};

const FeaturedDrop = ({ accent, accent2 }) => {
  const T = FlameTokens;
  const featured = FlameProducts[0];
  const color = featured.color;
  const { add } = useCart();

  const handleAdd = () => {
    add(featured);
  };

  return (
    <div style={{
      position: "relative",
      perspective: "1200px",
    }}>
      {/* Stats card */}
      <div style={{
        position: "absolute",
        top: -32, left: -32,
        width: 220,
        background: T.panel,
        border: `1px solid ${T.rule2}`,
        padding: 18,
        transform: "rotate(-6deg)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        zIndex: 1,
      }}>
        <Pill color={accent2} dot dotColor={accent2} style={{ marginBottom: 12 }}>
          STOCK ACTIVO
        </Pill>
        <div style={{
          fontFamily: "var(--display)", fontSize: 36,
          color: T.fg, letterSpacing: "0.02em", lineHeight: 1,
        }}>
          {FlameProducts.length}<br/>MODELOS
        </div>
        <div style={{
          fontFamily: "var(--mono)", fontSize: 10,
          color: T.muted, letterSpacing: "0.2em", marginTop: 10,
          textTransform: "uppercase",
        }}>EN STOCK · ENTREGA 48HS</div>
      </div>

      {/* Featured product card */}
      <div style={{
        background: `linear-gradient(135deg, ${T.panel2} 0%, ${T.panel} 100%)`,
        border: `1px solid ${accent}`,
        padding: 32,
        transform: "rotate(2deg)",
        boxShadow: `0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px ${accent}30, 0 0 60px ${accent}25`,
        position: "relative",
        overflow: "hidden",
        zIndex: 2,
      }}>
        {/* Holographic shimmer */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `linear-gradient(110deg, transparent 30%, ${accent}15 50%, transparent 70%)`,
        }} />

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          position: "relative",
        }}>
          <div>
            <div style={{
              fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.28em",
              color: T.muted, textTransform: "uppercase",
            }}>DESTACADO</div>
            <div style={{
              display: "flex", alignItems: "center", gap: 8, marginTop: 14,
              color: accent, filter: `drop-shadow(0 0 12px ${accent})`,
            }}>
              <FlameMark size={26} />
              <div style={{
                fontFamily: "var(--display)", fontSize: 30, letterSpacing: "0.04em",
                color: T.fg,
              }}>{featured.name.toUpperCase()}</div>
            </div>
          </div>
          {featured.badge && (
            <span style={{
              background: accent, color: T.bg,
              padding: "4px 9px",
              fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.2em",
              fontWeight: 700,
            }}>{featured.badge}</span>
          )}
        </div>

        {/* Product visual */}
        <div style={{
          position: "relative",
          height: 200, marginTop: 18,
          background: `radial-gradient(50% 80% at 50% 60%, ${color}25 0%, transparent 70%)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
        }}>
          {featured.image
            ? <img src={featured.image} alt={`${featured.name} ${featured.flavor}`}
                style={{ height: "100%", width: "100%", objectFit: "contain" }} />
            : <VapeIllustration color={color} size={140} flavor={featured.flavor.split(" ")[0]} />
          }
        </div>

        {/* Specs */}
        <div style={{
          marginTop: 18, paddingTop: 18,
          borderTop: `1px solid ${T.rule}`,
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          gap: 16,
        }}>
          {[
            ["PUFFS",  featured.puffs,                T.fg],
            ["SABOR",  featured.flavor.toUpperCase(),  T.fg],
            ["PRECIO", fmtPrice(featured.price),       accent],
          ].map(([k, v, c]) => (
            <div key={k}>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.22em",
                color: T.muted, textTransform: "uppercase",
              }}>{k}</div>
              <div style={{
                fontFamily: "var(--display)", fontSize: 18, letterSpacing: "0.04em",
                color: c, marginTop: 4,
              }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Add to cart pill below */}
      <button
         onClick={handleAdd}
         style={{
        position: "absolute", bottom: -28, right: -16,
        background: accent, color: T.bg,
        padding: "12px 22px",
        fontFamily: "var(--display)", fontSize: 16, letterSpacing: "0.16em",
        boxShadow: `0 8px 24px ${accent}50`,
        transform: "rotate(2deg)",
        zIndex: 3,
        textDecoration: "none",
        border: "none",
        cursor: "pointer",
      }}>
        + AGREGAR AL CARRITO
      </button>
    </div>
  );
};

window.FlameHero = FlameHero;
