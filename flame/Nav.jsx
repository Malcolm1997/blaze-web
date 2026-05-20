// Top meta bar + nav for the Flame landing.

const FlameNav = ({ accent, accent2 }) => {
  const T = FlameTokens;
  const [cartOpen, setCartOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else if (!cartOpen) {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, cartOpen]);

  // Close on Esc
  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const navLinks = [
    { label: "Inicio",       href: "Flame Landing.html" },
    { label: "Catálogo",     href: "Catalogo.html" },
    { label: "Cómo comprar", href: "ComoComprar.html" },
    { label: "Contacto",     href: "Contacto.html" },
  ];

  return (
    <React.Fragment>
      {/* META BAR — info contextual */}
      <div className="flame-meta-bar" style={{
        background: T.panel,
        borderBottom: `1px solid ${T.rule}`,
        padding: "8px 32px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        gap: 16, flexWrap: "wrap",
        fontFamily: "var(--mono)",
        fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
        color: T.muted,
      }}>
        <span style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span>VAPEO PREMIUM</span>
          <span style={{ color: T.mute2 }}>/</span>
          <span>ROSARIO AR</span>
        </span>
        <span className="flame-meta-mid" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%", background: accent,
            boxShadow: `0 0 10px ${accent}`,
            animation: "flamePulse 1.6s ease-in-out infinite",
          }} />
          <span>ABIERTO 24HS — RESPONDEMOS RÁPIDO</span>
        </span>
        <span className="flame-meta-right" style={{ display: "flex", gap: 14 }}>
          <span>+54 9 3412 29-9708</span>
          <span style={{ color: T.mute2 }}>/</span>
          <span>@BLAZE.ME.ONE</span>
        </span>
      </div>

      {/* NAV ROW */}
      <div className="flame-nav-row" style={{
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
        borderBottom: `1px solid ${T.rule}`,
        background: T.bg,
        position: "sticky", top: 0, zIndex: 5,
      }}>
        {/* Wordmark */}
        <a href="Flame Landing.html" className="flame-wordmark" style={{
          display: "flex", alignItems: "center", gap: 14,
          textDecoration: "none", color: "inherit",
          flexShrink: 0,
        }}>
          <div style={{
            color: accent,
            filter: `drop-shadow(0 0 8px ${accent}88)`,
            display: "flex",
          }}>
            <FlameMark size={26} />
          </div>
          <div style={{
            fontFamily: "var(--display)",
            fontSize: 28, letterSpacing: "0.16em",
            color: T.fg,
            lineHeight: 1,
          }}>
            BLAZE
          </div>
        </a>

        {/* DESKTOP LINKS — hidden on mobile via responsive.css */}
        <div className="flame-nav-links" style={{
          display: "flex", alignItems: "center",
          gap: 28,
          fontFamily: "var(--mono)",
          fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
          color: T.fg,
        }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
               style={{ color: "inherit", textDecoration: "none" }}>{l.label}</a>
          ))}
          <CartButton accent={accent} onClick={() => setCartOpen(true)} />
        </div>

        {/* MOBILE ACTIONS — hidden on desktop via responsive.css */}
        <div className="flame-nav-mobile" style={{
          display: "none",
          alignItems: "center", gap: 10,
        }}>
          <CartButton accent={accent} onClick={() => setCartOpen(true)} compact />
          <button
            className="flame-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            style={{
              background: "transparent",
              border: `1px solid ${T.rule2}`,
              color: T.fg,
              width: 42, height: 42,
              cursor: "pointer",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              padding: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6"  x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <MobileMenu
        accent={accent}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
        onOpenCart={() => { setMenuOpen(false); setCartOpen(true); }}
      />

      {/* CART DRAWER */}
      <CartDrawer
        accent={accent}
        accent2={accent2}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </React.Fragment>
  );
};

// ── Mobile menu overlay (full-screen slide from right) ─────────────
const MobileMenu = ({ accent, open, onClose, links, onOpenCart }) => {
  const T = FlameTokens;
  const { count } = useCart();

  return (
    <React.Fragment>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.85)",
          zIndex: 999,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />

      {/* Sheet */}
      <aside
        role="dialog"
        aria-label="Menú principal"
        style={{
          position: "fixed",
          top: 0, right: 0, bottom: 0,
          width: "min(360px, 100vw)",
          background: T.bg,
          borderLeft: `1px solid ${T.rule2}`,
          boxShadow: "-20px 0 60px rgba(0,0,0,0.6)",
          zIndex: 1000,
          transform: open ? "translateX(0)" : "translateX(105%)",
          transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
          display: "flex", flexDirection: "column",
          fontFamily: "var(--body)",
        }}
      >
        {/* Header */}
        <div style={{
          padding: "18px 22px",
          borderBottom: `1px solid ${T.rule}`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          background: T.panel,
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <div style={{ color: accent, filter: `drop-shadow(0 0 8px ${accent}88)`, display: "flex" }}>
              <FlameMark size={22} />
            </div>
            <div style={{
              fontFamily: "var(--display)", fontSize: 24, letterSpacing: "0.16em",
              color: T.fg, lineHeight: 1,
            }}>BLAZE</div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar menú"
            style={{
              background: "transparent", border: `1px solid ${T.rule2}`,
              color: T.fg, padding: "8px 12px",
              cursor: "pointer",
              fontFamily: "var(--mono)", fontSize: 12,
              letterSpacing: "0.18em",
            }}
          >× CERRAR</button>
        </div>

        {/* Links */}
        <nav style={{ flex: 1, overflowY: "auto", padding: "12px 0" }}>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onClose}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "20px 22px",
                borderBottom: `1px solid ${T.rule}`,
                textDecoration: "none", color: T.fg,
                fontFamily: "var(--display)", fontSize: 28,
                letterSpacing: "0.04em",
              }}
            >
              <span>{l.label.toUpperCase()}</span>
              <span style={{
                fontFamily: "var(--mono)", fontSize: 12, color: T.muted,
                letterSpacing: "0.2em",
              }}>0{i + 1} →</span>
            </a>
          ))}

          {/* Cart link */}
          <button
            onClick={onOpenCart}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              width: "100%",
              padding: "20px 22px",
              background: "transparent",
              border: "none",
              borderBottom: `1px solid ${T.rule}`,
              color: T.fg,
              fontFamily: "var(--display)", fontSize: 28,
              letterSpacing: "0.04em",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span>CARRITO</span>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "var(--mono)", fontSize: 12, color: count > 0 ? accent : T.muted,
              letterSpacing: "0.2em",
            }}>
              {count > 0 && (
                <span style={{
                  minWidth: 22, height: 22, padding: "0 6px",
                  borderRadius: 11,
                  background: accent, color: T.bg,
                  fontSize: 11, fontWeight: 700,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}>{count}</span>
              )}
              →
            </span>
          </button>
        </nav>

        {/* Footer CTAs */}
        <div style={{
          padding: 22,
          borderTop: `1px solid ${T.rule}`,
          background: T.panel,
          display: "flex", flexDirection: "column", gap: 10,
        }}>
          <a
            href="https://wa.me/5493412299708?text=Hola%20Blaze%2C%20quiero%20hacer%20una%20consulta"
            target="_blank" rel="noopener"
            onClick={onClose}
            style={{
              background: accent, color: T.bg,
              padding: "16px 18px",
              fontFamily: "var(--display)", fontSize: 20, letterSpacing: "0.12em",
              textDecoration: "none", textAlign: "center",
              boxShadow: `0 8px 24px ${accent}40`,
            }}
          >WHATSAPP →</a>
          <a
            href="https://www.instagram.com/blaze.me.one?igsh=ajc5c2plaGxsbWpr"
            target="_blank" rel="noopener"
            onClick={onClose}
            style={{
              border: `1px solid ${T.rule2}`, color: T.fg,
              padding: "14px 18px",
              fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.22em",
              textDecoration: "none", textAlign: "center",
            }}
          >INSTAGRAM @BLAZE.ME.ONE</a>
          <div style={{
            marginTop: 8,
            fontFamily: "var(--mono)", fontSize: 9, color: T.mute2,
            letterSpacing: "0.22em", textAlign: "center",
          }}>ABIERTO 24HS · ROSARIO AR</div>
        </div>
      </aside>
    </React.Fragment>
  );
};

window.FlameNav = FlameNav;
