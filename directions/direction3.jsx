// Direction 3 — "MEMBERS"
// Drop culture / secret club. Dark warm bg + magenta neon accent + member-card hero.
// Display: Bebas Neue (industrial condensed). Mono: Space Mono.

const D3 = ({ displayFont, bodyFont }) => {
  const BG = "#15110f";
  const PANEL = "#1d1816";
  const FG = "#ece4d6";
  const MUTED = "#7d7268";
  const RULE = "#2b2522";
  const ACCENT = "oklch(0.7 0.22 355)"; // hot magenta
  const ACCENT2 = "oklch(0.85 0.16 95)"; // acid yellow for secondary highlight
  const display = displayFont || "'Bebas Neue', 'Oswald', sans-serif";
  const body = bodyFont || "'Space Mono', ui-monospace, monospace";

  const rule = `1px solid ${RULE}`;
  const W = 1440;

  const Pill = ({ children, color = MUTED, style = {} }) => (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "5px 10px", border: `1px solid ${color}`, borderRadius: 999,
      fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
      color, ...style,
    }}>{children}</span>
  );

  return (
    <div style={{ width: W, background: BG, color: FG, fontFamily: body }}>
      {/* TOP META BAR */}
      <div style={{
        background: PANEL, padding: "8px 28px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED,
      }}>
        <span>MEMBERS · ROSARIO · AR</span>
        <span><span style={{ color: ACCENT2 }}>●</span> NEXT DROP — FRI 23:00 AR</span>
        <span>WHATSAPP · INSTAGRAM</span>
      </div>

      {/* NAV */}
      <div style={{
        padding: "20px 28px", display: "grid",
        gridTemplateColumns: "1fr auto 1fr", alignItems: "center", borderBottom: rule,
      }}>
        <div style={{ fontSize: 11, color: MUTED, letterSpacing: "0.2em" }}>
          MEMBERSHIP NO. <span style={{ color: FG }}>—</span> · GUEST
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            border: `2px solid ${ACCENT}`, background: BG,
          }} />
          <div style={{ fontFamily: display, fontSize: 28, letterSpacing: "0.1em" }}>
            BLAZE / CLUB
          </div>
        </div>
        <div style={{
          display: "flex", justifyContent: "flex-end", gap: 24, fontSize: 11,
          letterSpacing: "0.18em", textTransform: "uppercase",
        }}>
          <span>CATÁLOGO</span><span>DROPS</span><span>CÓMO COMPRAR</span>
          <span style={{
            background: ACCENT, color: BG, padding: "6px 14px",
          }}>SOY SOCIO →</span>
        </div>
      </div>

      {/* HERO — member card on the right */}
      <section style={{ padding: "80px 28px 60px", borderBottom: rule, position: "relative" }}>
        <Note style={{ position: "absolute", top: 20, right: 28, color: MUTED }}>
          Hero · membership-forward, card mockup + ticker
        </Note>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 480px", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
              <Pill color={ACCENT}>● ABIERTO</Pill>
              <Pill>VOL · 01</Pill>
              <Pill>ROSARIO ONLY</Pill>
            </div>
            <h1 style={{
              fontFamily: display, fontSize: 156, lineHeight: 0.86, margin: 0,
              letterSpacing: "0.01em",
            }}>
              NO ES UNA<br/>
              TIENDA.<br/>
              <span style={{ color: ACCENT }}>ES UN CLUB.</span>
            </h1>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginTop: 32, maxWidth: 480, color: MUTED }}>
              Curaduría de descartables premium · drops semanales · precio de socio.
              Si llegaste hasta acá, ya estás casi adentro.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
              <a style={{
                background: ACCENT, color: BG, padding: "16px 26px",
                fontFamily: display, fontSize: 20, letterSpacing: "0.08em",
              }}>UNIRME GRATIS →</a>
              <a style={{
                border: `1px solid ${FG}`, color: FG, padding: "16px 26px",
                fontFamily: display, fontSize: 20, letterSpacing: "0.08em",
              }}>VER CATÁLOGO</a>
            </div>
          </div>

          {/* Member card mockup */}
          <div style={{
            background: PANEL, border: `1px solid ${ACCENT}`, padding: 28,
            transform: "rotate(2deg)", boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
            position: "relative",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 10, color: MUTED, letterSpacing: "0.2em" }}>MEMBER CARD</div>
                <div style={{ fontFamily: display, fontSize: 42, letterSpacing: "0.06em", marginTop: 4 }}>
                  BLAZE<br/>CLUB
                </div>
              </div>
              <div style={{
                width: 56, height: 40, background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`,
                border: `1px solid ${RULE}`,
              }} />
            </div>
            <div style={{ marginTop: 56, fontFamily: display, fontSize: 32, letterSpacing: "0.18em" }}>
              0341 · ████ · ████ · 0001
            </div>
            <div style={{
              display: "flex", justifyContent: "space-between", marginTop: 24,
              fontSize: 10, color: MUTED, letterSpacing: "0.2em",
            }}>
              <div>
                <div>SOCIO</div>
                <div style={{ color: FG, fontFamily: display, fontSize: 16, letterSpacing: "0.1em", marginTop: 4 }}>
                  GUEST
                </div>
              </div>
              <div>
                <div>DESDE</div>
                <div style={{ color: FG, fontFamily: display, fontSize: 16, letterSpacing: "0.1em", marginTop: 4 }}>
                  05 / 26
                </div>
              </div>
              <div>
                <div>NIVEL</div>
                <div style={{ color: ACCENT, fontFamily: display, fontSize: 16, letterSpacing: "0.1em", marginTop: 4 }}>
                  EMBER
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DROPS / MÁS VENDIDOS */}
      <section style={{ padding: "60px 28px", borderBottom: rule }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36 }}>
          <div>
            <div style={{ fontSize: 11, color: MUTED, letterSpacing: "0.2em" }}>
              [ 02 / 07 ] — CURRENT DROP
            </div>
            <h2 style={{ fontFamily: display, fontSize: 80, margin: "6px 0 0", letterSpacing: "0.02em" }}>
              ESTA SEMANA
            </h2>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Pill>← PREV</Pill><Pill color={FG}>NEXT →</Pill>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {PRODUCTS.map((p, i) => (
            <div key={i} style={{ background: PANEL, padding: 16, border: rule, position: "relative" }}>
              {i === 0 && (
                <div style={{
                  position: "absolute", top: 12, left: 12, background: ACCENT, color: BG,
                  padding: "4px 8px", fontSize: 10, letterSpacing: "0.18em", zIndex: 1,
                }}>HOT</div>
              )}
              <div style={{ fontSize: 10, color: MUTED, letterSpacing: "0.2em", marginBottom: 12 }}>
                #00{i + 1} / 04
              </div>
              <StripedBox height={220} label="PRODUCT" />
              <div style={{ marginTop: 14 }}>
                <div style={{ fontFamily: display, fontSize: 26, letterSpacing: "0.04em" }}>
                  {p.name.toUpperCase()}
                </div>
                <div style={{ fontSize: 10, color: MUTED, letterSpacing: "0.16em", marginTop: 4 }}>
                  {p.puffs} PUFFS / {p.flavor.toUpperCase()}
                </div>
                <div style={{
                  marginTop: 14, paddingTop: 12, borderTop: rule,
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <div>
                    <div style={{ fontSize: 9, color: MUTED, letterSpacing: "0.2em" }}>SOCIO</div>
                    <div style={{ fontFamily: display, fontSize: 20, color: ACCENT2 }}>$ —</div>
                  </div>
                  <div style={{
                    fontSize: 10, letterSpacing: "0.16em", color: ACCENT,
                    border: `1px solid ${ACCENT}`, padding: "6px 10px",
                  }}>RESERVAR →</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO COMPRAR — terminal style */}
      <section style={{ padding: "60px 28px", borderBottom: rule }}>
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 48 }}>
          <div>
            <div style={{ fontSize: 11, color: MUTED, letterSpacing: "0.2em" }}>[ 03 / 07 ]</div>
            <h2 style={{ fontFamily: display, fontSize: 80, margin: "6px 0 0", lineHeight: 0.9 }}>
              CÓMO<br/>FUNCIONA
            </h2>
            <p style={{ fontSize: 12, color: MUTED, marginTop: 18, lineHeight: 1.7 }}>
              Tres pasos. Sin formularios largos.<br/>
              Tu primer pedido es tu test drive.
            </p>
          </div>
          <div style={{ background: PANEL, border: rule, padding: 0 }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{
                padding: "26px 28px", borderBottom: i < 2 ? rule : "none",
                display: "grid", gridTemplateColumns: "80px 1fr 100px", gap: 24, alignItems: "center",
              }}>
                <div style={{ fontFamily: display, fontSize: 56, color: ACCENT, lineHeight: 1 }}>
                  {s.n}
                </div>
                <div>
                  <div style={{ fontFamily: display, fontSize: 26, letterSpacing: "0.04em" }}>
                    {s.t.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 12, color: MUTED, marginTop: 6, lineHeight: 1.6 }}>{s.d}</div>
                </div>
                <div style={{ textAlign: "right", fontSize: 10, color: MUTED, letterSpacing: "0.18em" }}>
                  ~ {i === 0 ? "2min" : i === 1 ? "5min" : "<24h"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGOS + ENVÍOS */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: rule }}>
        <div style={{ padding: "56px 28px", borderRight: rule }}>
          <div style={{ fontSize: 11, color: MUTED, letterSpacing: "0.2em" }}>[ 04 / 07 ] — PAGOS</div>
          <h3 style={{ fontFamily: display, fontSize: 56, margin: "8px 0 28px", letterSpacing: "0.02em" }}>
            COMO TE GUSTE
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {PAYMENTS.map((p, i) => (
              <div key={i} style={{
                background: PANEL, border: rule, padding: "18px 16px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontFamily: display, fontSize: 22, letterSpacing: "0.04em" }}>
                  {p.toUpperCase()}
                </span>
                <span style={{ fontSize: 10, color: MUTED, letterSpacing: "0.2em" }}>
                  {i < 3 ? "● OK" : "○ SOON"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "56px 28px" }}>
          <div style={{ fontSize: 11, color: MUTED, letterSpacing: "0.2em" }}>[ 05 / 07 ] — ENVÍOS</div>
          <h3 style={{ fontFamily: display, fontSize: 56, margin: "8px 0 18px", letterSpacing: "0.02em" }}>
            ROSARIO · HOY
          </h3>
          <StripedBox height={180} label="MAPA — ZONAS DE COBERTURA" />
          <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["CENTRO","PICHINCHA","FISHERTON","BV. OROÑO","ALTO ROSARIO","ABASTO","ECHESORTU"].map(z => (
              <Pill key={z} color={MUTED}>● {z}</Pill>
            ))}
          </div>
        </div>
      </section>

      {/* CLUB / NEWSLETTER — perks list */}
      <section style={{ padding: "80px 28px", borderBottom: rule, background: PANEL }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
          <div>
            <div style={{ fontSize: 11, color: MUTED, letterSpacing: "0.2em" }}>[ 06 / 07 ] — MEMBERSHIP</div>
            <h2 style={{
              fontFamily: display, fontSize: 120, margin: "8px 0 24px",
              lineHeight: 0.9, letterSpacing: "0.01em",
            }}>
              SUMATE.<br/>
              <span style={{ color: ACCENT }}>ES GRATIS.</span>
            </h2>
            <div style={{ display: "flex", gap: 8, marginTop: 24, flexDirection: "column", maxWidth: 420 }}>
              <input placeholder="tu@email — solo dejá esto" style={{
                background: BG, border: `1px solid ${RULE}`, color: FG,
                padding: "16px 18px", fontFamily: body, fontSize: 13,
              }} />
              <button style={{
                background: ACCENT, color: BG, border: "none",
                padding: "16px 18px", fontFamily: display, fontSize: 20,
                letterSpacing: "0.1em",
              }}>
                ACTIVAR MI MEMBRESÍA →
              </button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div style={{ fontSize: 11, color: MUTED, letterSpacing: "0.2em", marginBottom: 14 }}>
              QUÉ INCLUYE
            </div>
            {[
              ["01", "Acceso al drop antes que nadie (24h)"],
              ["02", "Precio de socio en todo el catálogo"],
              ["03", "Sorteo mensual entre miembros activos"],
              ["04", "Coordinación directa por WhatsApp"],
              ["05", "Niveles: Ember → Smoke → Blaze"],
            ].map(([n, t]) => (
              <div key={n} style={{
                padding: "16px 0", borderBottom: rule, display: "grid",
                gridTemplateColumns: "40px 1fr 24px", gap: 16, alignItems: "center",
              }}>
                <span style={{ fontFamily: display, fontSize: 20, color: ACCENT2 }}>{n}</span>
                <span style={{ fontSize: 14 }}>{t}</span>
                <span style={{ color: ACCENT, fontSize: 14 }}>+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "56px 28px 36px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 32, marginBottom: 40,
        }}>
          <div>
            <div style={{ fontFamily: display, fontSize: 56, letterSpacing: "0.06em" }}>
              BLAZE / CLUB
            </div>
            <div style={{ fontSize: 11, color: MUTED, marginTop: 6, letterSpacing: "0.2em" }}>
              MEMBERS ONLY · ROSARIO AR · EST 2025
            </div>
          </div>
          {[
            ["NAVEGAR", ["Inicio", "Catálogo", "Drops", "El Club"]],
            ["CONTACTO", ["WhatsApp", "Instagram", "rosario@blaze"]],
            ["LEGAL", ["Sólo +18", "Privacidad", "Términos"]],
          ].map(([t, items]) => (
            <div key={t}>
              <div style={{ fontSize: 11, color: MUTED, letterSpacing: "0.22em", marginBottom: 14 }}>{t}</div>
              {items.map(x => (
                <div key={x} style={{ fontSize: 13, marginBottom: 6 }}>{x}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{
          borderTop: rule, paddingTop: 16, display: "flex", justifyContent: "space-between",
          fontSize: 10, letterSpacing: "0.2em", color: MUTED,
        }}>
          <span>© 2026 BLAZE CLUB</span>
          <span>BUILT IN ROSARIO</span>
          <span><span style={{ color: ACCENT2 }}>●</span> SYSTEM ONLINE</span>
        </div>
      </footer>
    </div>
  );
};

window.D3 = D3;
