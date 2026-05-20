// Cómo funciona — terminal style with shipping zones map.

const FlameHow = ({ accent, accent2 }) => {
  const T = FlameTokens;
  const steps = [
    {
      n: "01",
      cmd: "$ blaze elegir",
      title: "Elegí tu modelo",
      desc: "Mirá el catálogo completo. Sabor, autonomía, calidad — vos elegís.",
      time: "~2 min",
    },
    {
      n: "02",
      cmd: "$ blaze --send wpp",
      title: "Escribinos por WhatsApp",
      desc: "Te respondemos en minutos. Coordinamos zona, hora y método de pago.",
      time: "~5 min",
    },
    {
      n: "03",
      cmd: "$ blaze deliver --rosario",
      title: "Lo recibís en 48hs",
      desc: "Entrega en mano por toda Rosario. Pagás cuando lo tenés en la mano.",
      time: "≤ 48h",
    },
  ];

  return (
    <section style={{
      padding: "80px 32px",
      borderBottom: `1px solid ${T.rule}`,
    }}>
      <div style={{ maxWidth: 1376, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "340px 1fr", gap: 64,
          alignItems: "flex-start",
        }}>
          <div style={{ position: "sticky", top: 100 }}>
            <SectionLabel idx="03">HOW IT WORKS</SectionLabel>
            <h2 style={{
              fontFamily: "var(--display)", fontSize: 88,
              margin: "12px 0 0", lineHeight: 0.9,
              color: T.fg, letterSpacing: "0.02em",
            }}>
              CÓMO<br/>
              <span style={{ color: accent }}>FUNCIONA</span>
            </h2>
            <p style={{
              fontFamily: "var(--body)", fontSize: 13, color: T.muted,
              marginTop: 20, lineHeight: 1.7, maxWidth: 320,
            }}>
              Tres pasos. Sin formularios largos, sin checkout.
              Tu primer pedido es tu test drive.
            </p>
          </div>

          {/* Terminal */}
          <div style={{
            background: T.panel,
            border: `1px solid ${T.rule2}`,
            fontFamily: "var(--mono)",
            overflow: "hidden",
          }}>
            {/* Terminal header */}
            <div style={{
              padding: "10px 14px",
              borderBottom: `1px solid ${T.rule2}`,
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: T.panel2,
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
              </div>
              <span style={{ fontSize: 10, color: T.muted, letterSpacing: "0.2em" }}>
                BLAZE · TERMINAL · ROSARIO
              </span>
              <span style={{ fontSize: 10, color: T.muted }}>—</span>
            </div>

            {steps.map((s, i) => (
              <div key={s.n} style={{
                padding: "32px 28px",
                borderBottom: i < steps.length - 1 ? `1px solid ${T.rule}` : "none",
                display: "grid",
                gridTemplateColumns: "60px 1fr 90px",
                gap: 24,
                alignItems: "flex-start",
              }}>
                <div style={{
                  fontFamily: "var(--display)", fontSize: 56,
                  color: accent, lineHeight: 0.9,
                }}>{s.n}</div>
                <div>
                  <div style={{
                    color: accent2, fontSize: 12, letterSpacing: "0.08em",
                    marginBottom: 10,
                  }}>
                    <span style={{ color: T.muted }}>~/</span>{s.cmd}<span style={{
                      marginLeft: 4, color: accent2,
                      animation: "flameBlink 1s steps(1) infinite",
                    }}>▊</span>
                  </div>
                  <div style={{
                    fontFamily: "var(--display)", fontSize: 28, color: T.fg,
                    letterSpacing: "0.04em",
                  }}>
                    {s.title.toUpperCase()}
                  </div>
                  <div style={{
                    fontFamily: "var(--body)", fontSize: 14,
                    color: T.muted, marginTop: 8, lineHeight: 1.7,
                  }}>{s.desc}</div>
                </div>
                <div style={{
                  textAlign: "right", fontSize: 10, color: T.muted,
                  letterSpacing: "0.2em", paddingTop: 6,
                }}>
                  <div style={{ color: T.mute2 }}>TIEMPO</div>
                  <div style={{ color: T.fg, marginTop: 4 }}>{s.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

window.FlameHow = FlameHow;
