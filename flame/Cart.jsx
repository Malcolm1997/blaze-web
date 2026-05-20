// flame/Cart.jsx — Carrito persistente con drawer lateral + checkout por WhatsApp.
//
// Flujo:
//   1. Cada ProductCard llama a useCart().add(product) cuando tocan "+ AGREGAR".
//   2. Nav muestra <CartButton> con un badge de cantidad.
//   3. Al tocarlo se abre <CartDrawer> (slide desde la derecha).
//   4. En el drawer ajustan cantidades y tocan "PEDIR POR WHATSAPP".
//   5. Se arma un wa.me link con la lista de modelos + cantidades + total.

const CART_KEY = "blaze-cart-v1";
const WHATSAPP_NUMBER = "5493412299708";

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch {}
  // Notify other useCart() instances in this tab + other tabs.
  window.dispatchEvent(new CustomEvent("blaze-cart-changed", { detail: items }));
}

function useCart() {
  const [items, setItems] = React.useState(loadCart);

  React.useEffect(() => {
    const handler = () => setItems(loadCart());
    window.addEventListener("blaze-cart-changed", handler);
    window.addEventListener("storage", (e) => {
      if (e.key === CART_KEY) handler();
    });
    return () => {
      window.removeEventListener("blaze-cart-changed", handler);
    };
  }, []);

  const add = (product, qty = 1) => {
    const cur = loadCart();
    const idx = cur.findIndex(x => x.id === product.id);
    if (idx >= 0) {
      cur[idx].qty += qty;
    } else {
      cur.push({
        id: product.id,
        name: product.name,
        flavor: product.flavor,
        puffs: product.puffs,
        price: product.price,
        hue: product.hue,
        qty,
      });
    }
    saveCart(cur);
  };

  const setQty = (id, qty) => {
    const cur = loadCart()
      .map(x => x.id === id ? { ...x, qty: Math.max(0, qty) } : x)
      .filter(x => x.qty > 0);
    saveCart(cur);
  };

  const remove = (id) => setQty(id, 0);
  const clear = () => saveCart([]);

  const count = items.reduce((s, x) => s + x.qty, 0);
  const total = items.reduce((s, x) => s + x.qty * x.price, 0);

  return { items, add, setQty, remove, clear, count, total };
}

// ── CART BUTTON (icono + badge) ──────────────────────────────────────
function CartButton({ accent, onClick, compact = false }) {
  const { count } = useCart();
  const T = FlameTokens;
  return (
    <button
      onClick={onClick}
      aria-label={`Carrito · ${count} producto${count === 1 ? "" : "s"}`}
      style={{
        position: "relative",
        background: count > 0 ? accent : "transparent",
        color: count > 0 ? T.bg : T.fg,
        border: `1px solid ${count > 0 ? accent : T.rule2}`,
        padding: compact ? "9px 12px" : "10px 14px",
        cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 8,
        fontFamily: "var(--mono)",
        fontSize: 11,
        letterSpacing: "0.18em",
        transition: "all 0.15s",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
      <span>CARRITO</span>
      {count > 0 && (
        <span style={{
          minWidth: 18, height: 18,
          padding: "0 5px",
          borderRadius: 9,
          background: count > 0 ? T.bg : accent,
          color: count > 0 ? accent : T.bg,
          fontFamily: "var(--mono)",
          fontSize: 10,
          fontWeight: 700,
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          lineHeight: 1,
        }}>
          {count}
        </span>
      )}
    </button>
  );
}

// ── CART DRAWER ─────────────────────────────────────────────────────
function CartDrawer({ accent, accent2, open, onClose }) {
  const { items, setQty, remove, clear, count, total } = useCart();
  const T = FlameTokens;

  // Lock body scroll when open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Esc to close
  React.useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const buildWhatsAppURL = () => {
    const lines = items.map(x =>
      `• ${x.name} — ${x.puffs} puffs · ${x.flavor} — x${x.qty} — ${fmtPrice(x.price * x.qty)}`
    );
    const text = [
      "Hola Blaze, quiero hacer este pedido:",
      "",
      ...lines,
      "",
      `Total: ${fmtPrice(total)} (${count} unidad${count === 1 ? "" : "es"})`,
      "",
      "¿Coordinamos entrega y pago?",
    ].join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <React.Fragment>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.75)",
          zIndex: 1000,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Carrito"
        style={{
          position: "fixed",
          top: 0, right: 0, bottom: 0,
          width: "min(440px, 100vw)",
          background: T.bg,
          borderLeft: `1px solid ${T.rule2}`,
          boxShadow: "-20px 0 60px rgba(0,0,0,0.6)",
          zIndex: 1001,
          transform: open ? "translateX(0)" : "translateX(105%)",
          transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
          display: "flex", flexDirection: "column",
          fontFamily: "var(--body)",
        }}
      >
        {/* HEADER */}
        <div style={{
          padding: "20px 24px",
          borderBottom: `1px solid ${T.rule}`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          background: T.panel,
        }}>
          <div>
            <div style={{
              fontFamily: "var(--mono)", fontSize: 10, color: accent,
              letterSpacing: "0.28em",
            }}>● TU CARRITO</div>
            <div style={{
              fontFamily: "var(--display)", fontSize: 28, color: T.fg,
              letterSpacing: "0.04em", marginTop: 4, lineHeight: 1,
            }}>
              {count > 0 ? `${count} UNIDAD${count === 1 ? "" : "ES"}` : "VACÍO"}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar carrito"
            style={{
              background: "transparent", border: `1px solid ${T.rule2}`,
              color: T.fg, padding: "8px 12px",
              cursor: "pointer",
              fontFamily: "var(--mono)", fontSize: 12,
              letterSpacing: "0.18em",
            }}
          >× CERRAR</button>
        </div>

        {/* ITEMS LIST */}
        <div style={{
          flex: 1, overflowY: "auto",
          padding: items.length === 0 ? 0 : "8px 0",
        }}>
          {items.length === 0 ? (
            <EmptyState accent={accent} onClose={onClose} />
          ) : (
            items.map(item => (
              <CartLine
                key={item.id}
                item={item}
                accent={accent}
                onInc={() => setQty(item.id, item.qty + 1)}
                onDec={() => setQty(item.id, item.qty - 1)}
                onRemove={() => remove(item.id)}
              />
            ))
          )}
        </div>

        {/* FOOTER (totals + checkout) */}
        {items.length > 0 && (
          <div style={{
            borderTop: `1px solid ${T.rule}`,
            padding: 24,
            background: T.panel,
          }}>
            {/* Subtotal row */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginBottom: 8,
            }}>
              <span style={{
                fontFamily: "var(--mono)", fontSize: 11, color: T.muted,
                letterSpacing: "0.22em",
              }}>SUBTOTAL</span>
              <span style={{
                fontFamily: "var(--display)", fontSize: 32, color: T.fg,
                letterSpacing: "0.02em",
              }}>{fmtPrice(total)}</span>
            </div>
            <div style={{
              fontFamily: "var(--mono)", fontSize: 10, color: T.muted,
              letterSpacing: "0.18em", marginBottom: 18,
            }}>ENVÍO COORDINADO POR WHATSAPP</div>

            {/* CHECKOUT */}
            <a
              href={buildWhatsAppURL()}
              target="_blank" rel="noopener"
              onClick={() => {
                // Optionally close drawer after click
                setTimeout(onClose, 400);
              }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                background: accent, color: T.bg,
                padding: "18px 24px",
                fontFamily: "var(--display)", fontSize: 22, letterSpacing: "0.12em",
                textDecoration: "none",
                boxShadow: `0 12px 32px ${accent}50`,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.5 3.5A11.5 11.5 0 0 0 4 18.7L3 22l3.4-1A11.5 11.5 0 1 0 20.5 3.5zm-8.5 18a9.5 9.5 0 0 1-4.9-1.4l-.4-.2-2.5.7.7-2.4-.2-.4A9.5 9.5 0 1 1 12 21.5zm5.3-7.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1l-1 1c-.2.2-.4.3-.7.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/>
              </svg>
              PEDIR POR WHATSAPP
            </a>

            <button
              onClick={() => {
                if (confirm("¿Vaciar el carrito?")) clear();
              }}
              style={{
                marginTop: 12, width: "100%",
                background: "transparent", color: T.muted,
                border: `1px solid ${T.rule2}`,
                padding: "10px",
                cursor: "pointer",
                fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.22em",
              }}
            >× VACIAR CARRITO</button>
          </div>
        )}
      </aside>
    </React.Fragment>
  );
}

function CartLine({ item, accent, onInc, onDec, onRemove }) {
  const T = FlameTokens;
  const color = `oklch(0.65 0.18 ${item.hue || 30})`;

  return (
    <div style={{
      padding: "16px 24px",
      borderBottom: `1px solid ${T.rule}`,
      display: "grid", gridTemplateColumns: "56px 1fr auto", gap: 14, alignItems: "center",
    }}>
      {/* Thumb */}
      <div style={{
        width: 56, height: 56,
        background: `linear-gradient(135deg, ${color}30, ${color}10)`,
        border: `1px solid ${T.rule2}`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: "50%", background: color,
          boxShadow: `0 0 12px ${color}`,
        }} />
      </div>

      {/* Info */}
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontFamily: "var(--display)", fontSize: 18, color: T.fg,
          letterSpacing: "0.04em", lineHeight: 1.1,
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>{item.name.toUpperCase()}</div>
        <div style={{
          fontFamily: "var(--mono)", fontSize: 10, color: T.muted,
          letterSpacing: "0.16em", textTransform: "uppercase",
          marginTop: 2,
        }}>{item.puffs} PUFFS · {item.flavor}</div>

        {/* Qty + price */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          marginTop: 10,
        }}>
          <div style={{
            display: "flex", alignItems: "center",
            border: `1px solid ${T.rule2}`,
          }}>
            <QtyBtn onClick={onDec} accent={accent}>−</QtyBtn>
            <span style={{
              padding: "0 10px",
              fontFamily: "var(--mono)", fontSize: 13, color: T.fg,
              minWidth: 20, textAlign: "center",
            }}>{item.qty}</span>
            <QtyBtn onClick={onInc} accent={accent}>+</QtyBtn>
          </div>
          <span style={{
            fontFamily: "var(--display)", fontSize: 16, color: accent,
            letterSpacing: "0.04em",
          }}>{fmtPrice(item.price * item.qty)}</span>
        </div>
      </div>

      {/* Remove */}
      <button
        onClick={onRemove}
        aria-label={`Quitar ${item.name}`}
        style={{
          background: "transparent", border: "none", color: T.muted,
          cursor: "pointer", padding: 8, alignSelf: "flex-start",
          fontFamily: "var(--mono)", fontSize: 16,
        }}
      >×</button>
    </div>
  );
}

function QtyBtn({ children, onClick, accent }) {
  const T = FlameTokens;
  return (
    <button
      onClick={onClick}
      style={{
        width: 26, height: 26,
        background: "transparent", border: "none",
        color: T.fg, cursor: "pointer",
        fontFamily: "var(--mono)", fontSize: 14, lineHeight: 1,
      }}
    >{children}</button>
  );
}

function EmptyState({ accent, onClose }) {
  const T = FlameTokens;
  return (
    <div style={{
      padding: "60px 32px",
      textAlign: "center",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
    }}>
      <div style={{
        color: T.mute2, opacity: 0.6,
      }}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      </div>
      <div style={{
        fontFamily: "var(--display)", fontSize: 28, color: T.fg,
        letterSpacing: "0.04em",
      }}>CARRITO VACÍO</div>
      <p style={{
        fontFamily: "var(--body)", fontSize: 13, color: T.muted,
        lineHeight: 1.6, margin: "0 0 12px", maxWidth: 260,
      }}>
        Agregá vapes desde el catálogo y volvé acá para coordinar el pedido por WhatsApp.
      </p>
      <a
        href="Catalogo.html"
        onClick={onClose}
        style={{
          background: accent, color: T.bg,
          padding: "14px 22px",
          fontFamily: "var(--display)", fontSize: 18, letterSpacing: "0.1em",
          textDecoration: "none",
        }}
      >VER CATÁLOGO →</a>
    </div>
  );
}

// ── ADD TO CART BUTTON (usado dentro de ProductCard) ────────────────
function AddToCartButton({ product, accent, compact = false }) {
  const { add, items } = useCart();
  const [added, setAdded] = React.useState(false);
  const T = FlameTokens;
  const inCart = items.find(x => x.id === product.id);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={`Agregar ${product.name} al carrito`}
      style={{
        background: added ? T.fg : accent,
        color: added ? accent : T.bg,
        border: "none",
        padding: compact ? "9px 14px" : "11px 16px",
        fontFamily: "var(--mono)", fontSize: 10,
        letterSpacing: "0.22em",
        fontWeight: 700,
        cursor: "pointer",
        transition: "all 0.15s",
        display: "inline-flex", alignItems: "center", gap: 6,
      }}
    >
      {added ? "✓ AGREGADO" : (inCart ? `+ AGREGAR (${inCart.qty})` : "+ AGREGAR")}
    </button>
  );
}

window.useCart = useCart;
window.CartButton = CartButton;
window.CartDrawer = CartDrawer;
window.AddToCartButton = AddToCartButton;
window.WHATSAPP_NUMBER = WHATSAPP_NUMBER;
