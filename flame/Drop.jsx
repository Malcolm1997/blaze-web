// Vape catalog highlight section + product card.

const FlameDrop = ({ accent, accent2 }) => {
  const T = FlameTokens;
  // Show first 4 as featured selection
  const featured = FlameProducts.slice(0, 4);

  return (
    <section style={{
      padding: "80px 32px",
      borderBottom: `1px solid ${T.rule}`,
      background: T.bg,
    }}>
      <div style={{ maxWidth: 1376, margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          marginBottom: 48,
        }}>
          <div>
            <SectionLabel idx="02">DESTACADOS</SectionLabel>
            <h2 style={{
              fontFamily: "var(--display)", fontSize: 96, margin: "12px 0 0",
              color: T.fg, letterSpacing: "0.02em", lineHeight: 1,
            }}>
              MÁS <span style={{ color: accent }}>PEDIDOS</span>
            </h2>
            <p style={{
              fontFamily: "var(--body)", fontSize: 13, color: T.muted,
              marginTop: 14, maxWidth: 480, lineHeight: 1.7,
            }}>
              4 modelos seleccionados a mano. Stock real, listos para entregar
              en 48hs por toda Rosario.
            </p>
          </div>
          <a href="Catalogo.html" style={navBtn(T, true)}>VER CATÁLOGO →</a>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16,
        }}>
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} accent={accent} accent2={accent2} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

const navBtn = (T, primary) => ({
  background: primary ? T.fg : "transparent",
  color: primary ? T.bg : T.fg,
  border: `1px solid ${primary ? T.fg : T.rule2}`,
  padding: "12px 18px",
  fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.2em",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-flex", alignItems: "center", gap: 8,
});

const ProductCard = ({ product, accent, accent2, featured }) => {
  const T = FlameTokens;
  const color = `oklch(0.65 0.18 ${product.hue})`;

  return (
    <div style={{
      background: T.panel,
      border: `1px solid ${featured ? accent : T.rule}`,
      padding: 18,
      position: "relative",
      transition: "all 0.2s",
      display: "flex", flexDirection: "column",
    }}>
      {/* Top row */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: 12,
      }}>
        <span style={{
          fontFamily: "var(--mono)", fontSize: 10, color: T.muted,
          letterSpacing: "0.22em",
        }}>#{product.id}</span>
        {product.badge && (
          <span style={{
            background: product.badge === "HOT" ? accent : product.badge === "NEW" ? accent2 : T.mute2,
            color: T.bg,
            padding: "3px 8px",
            fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.2em",
            fontWeight: 700,
          }}>{product.badge}</span>
        )}
      </div>

      {/* Vape illustration */}
      <div style={{
        height: 260,
        background: `radial-gradient(50% 80% at 50% 60%, ${color}15 0%, transparent 70%)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 14,
      }}>
        <VapeIllustration color={color} size={140} flavor={product.flavor.split(" ")[0]} />
      </div>

      {/* Name + flavor */}
      <div style={{
        fontFamily: "var(--display)", fontSize: 26, color: T.fg,
        letterSpacing: "0.04em",
      }}>{product.name.toUpperCase()}</div>
      <div style={{
        fontFamily: "var(--mono)", fontSize: 10, color: T.muted,
        letterSpacing: "0.18em", marginTop: 4, textTransform: "uppercase",
      }}>{product.puffs} puffs · {product.flavor}</div>

      {/* Price + add-to-cart row */}
      <div style={{
        marginTop: 18, paddingTop: 14,
        borderTop: `1px solid ${T.rule}`,
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        gap: 10,
      }}>
        <div>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 9, color: T.muted,
            letterSpacing: "0.22em",
          }}>PRECIO</div>
          <div style={{
            fontFamily: "var(--display)", fontSize: 22,
            color: accent2, letterSpacing: "0.02em",
          }}>{fmtPrice(product.price)}</div>
        </div>
        <AddToCartButton product={product} accent={accent} />
      </div>
    </div>
  );
};

window.FlameDrop = FlameDrop;
window.ProductCard = ProductCard;
