// CÓMO COMPRAR — página dedicada con pasos detallados, métodos de pago, envíos y FAQ.

const ComoComprarPage = ({ accent, accent2 }) => {
  const T = FlameTokens;
  const [openFaq, setOpenFaq] = React.useState(0);

  const steps = [
    {
      n: "01",
      cmd: "$ blaze elegir",
      title: "Elegí tu modelo",
      desc: "Entrá al catálogo, usá los filtros (puffs, sabor, precio) y eligí el que te tira.",
      bullets: [
        "12 modelos curados, todos en stock",
        "Filtrá por tipo de sabor o autonomía",
        "Mirá precios y stock real",
      ],
      time: "~2 min",
    },
    {
      n: "02",
      cmd: "$ blaze --send wpp",
      title: "Escribinos por WhatsApp",
      desc: "Te respondemos en minutos. Decinos qué modelo, tu zona en Rosario y cómo querés pagar.",
      bullets: [
        "Respuesta promedio: 6 minutos",
        "Lunes a domingo 10–23h",
        "Sin formularios, sin login, chat 1-a-1",
      ],
      time: "~5 min",
    },
    {
      n: "03",
      cmd: "$ blaze deliver --rosario",
      title: "Lo recibís en 48hs",
      desc: "Coordinamos día y horario. Pagás cuando lo tenés en la mano, en tu casa o donde quieras.",
      bullets: [
        "Entrega en mano por toda Rosario",
        "Pagás a la entrega o por adelantado",
        "Si no quedás conforme, te cambiamos",
      ],
      time: "≤ 48h",
    },
  ];

  const payments = [
    { n: "01", t: "TRANSFERENCIA", d: "CBU o Alias. Te pasamos los datos por WhatsApp. Confirmás el comprobante y listo." },
    { n: "02", t: "MERCADO PAGO", d: "QR o link de pago. Cuotas con tarjeta sujeto a banco. Recibís comprobante automático." },
    { n: "03", t: "EFECTIVO", d: "Pagás cuando te entregamos. Llevá el monto justo o coordiná vuelto antes." },
  ];

  const faq = [
    { q: "¿Es seguro comprar acá?",
      a: "Sí. Todos los productos pasan por un control antes de salir. Si algo viene mal, lo cambiamos sin preguntas. Vendemos sólo a +18." },
    { q: "¿En qué zonas de Rosario entregan?",
      a: "Centro, Pichincha, Fisherton, Bv. Oroño, Alto Rosario, Abasto, Echesortu, Martin, Saladillo, Tablada, Lourdes y alrededores. Si no estás seguro, preguntá por WhatsApp." },
    { q: "¿Cuánto tarda la entrega?",
      a: "Entre 24 y 48hs hábiles desde que confirmás el pedido. En zonas céntricas suele ser el mismo día si pedís antes de las 18h." },
    { q: "¿Tienen entrega fuera de Rosario?",
      a: "Por ahora no. Operamos sólo dentro de Rosario y alrededores cercanos. Estamos viendo de abrir Funes y Roldán pronto." },
    { q: "¿Cobran envío?",
      a: "El envío es gratis en compras de $15.000 o más. Por debajo, suma $1.500." },
    { q: "¿Qué pasa si el vape me viene defectuoso?",
      a: "Te lo cambiamos por uno nuevo del mismo modelo (o uno equivalente si no hay stock). Sin discusión. Avisanos en las primeras 48hs de recibido." },
    { q: "¿Aceptan devoluciones?",
      a: "Por motivos de higiene, no aceptamos devoluciones de productos abiertos. Si está cerrado y sellado, hasta 7 días desde la entrega." },
  ];

  return (
    <React.Fragment>
      {/* HEADER */}
      <section style={{
        padding: "100px 32px 72px",
        borderBottom: `1px solid ${T.rule}`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(50% 80% at 20% 50%, ${accent}20 0%, transparent 70%)`,
        }} />
        <div style={{ maxWidth: 1376, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
            <Pill color={accent} dot dotColor={accent}>3 PASOS · 48HS</Pill>
            <Pill>SIN CHECKOUT · SIN LOGIN</Pill>
          </div>
          <h1 style={{
            fontFamily: "var(--display)", fontSize: 168,
            margin: 0, letterSpacing: "0.02em", lineHeight: 0.86,
            color: T.fg,
          }}>
            CÓMO<br/><span style={{ color: accent }}>COMPRAR</span>.
          </h1>
          <p style={{
            fontFamily: "var(--body)", fontSize: 16, color: T.muted,
            marginTop: 32, maxWidth: 560, lineHeight: 1.7,
          }}>
            Sin formularios, sin carrito, sin checkout. Todo se coordina por
            WhatsApp directo con nosotros. Tu primer pedido es tu test drive.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section style={{ padding: "80px 32px", borderBottom: `1px solid ${T.rule}` }}>
        <div style={{ maxWidth: 1376, margin: "0 auto" }}>
          <SectionLabel idx="01">EL PROCESO</SectionLabel>
          <h2 style={{
            fontFamily: "var(--display)", fontSize: 88,
            margin: "12px 0 56px", letterSpacing: "0.02em",
            color: T.fg,
          }}>
            TRES PASOS, <span style={{ color: accent }}>NADA MÁS</span>.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{
                padding: "40px 0",
                borderTop: `1px solid ${T.rule}`,
                borderBottom: i === steps.length - 1 ? `1px solid ${T.rule}` : "none",
                display: "grid", gridTemplateColumns: "100px 1fr 1.2fr 120px",
                gap: 32, alignItems: "flex-start",
              }}>
                <div style={{
                  fontFamily: "var(--display)", fontSize: 88,
                  color: accent, lineHeight: 0.9,
                }}>{s.n}</div>
                <div>
                  <div style={{
                    fontFamily: "var(--mono)", fontSize: 11, color: T.muted,
                    letterSpacing: "0.18em", marginBottom: 14,
                  }}>
                    <span style={{ color: T.mute2 }}>~/</span>{s.cmd}
                  </div>
                  <div style={{
                    fontFamily: "var(--display)", fontSize: 40,
                    color: T.fg, letterSpacing: "0.02em", lineHeight: 1,
                  }}>{s.title.toUpperCase()}</div>
                  <p style={{
                    fontSize: 14, color: T.muted, marginTop: 14,
                    lineHeight: 1.7, maxWidth: 400,
                  }}>{s.desc}</p>
                </div>
                <div style={{ paddingTop: 24 }}>
                  {s.bullets.map(b => (
                    <div key={b} style={{
                      display: "flex", gap: 12, marginBottom: 10,
                      fontSize: 13, color: T.fg, alignItems: "flex-start",
                    }}>
                      <span style={{ color: accent, fontFamily: "var(--mono)" }}>→</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <div style={{
                  textAlign: "right", paddingTop: 28,
                }}>
                  <div style={{
                    fontFamily: "var(--mono)", fontSize: 10, color: T.mute2,
                    letterSpacing: "0.2em",
                  }}>TIEMPO</div>
                  <div style={{
                    fontFamily: "var(--display)", fontSize: 32, color: T.fg,
                    letterSpacing: "0.06em", marginTop: 4,
                  }}>{s.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section style={{ padding: "80px 32px", borderBottom: `1px solid ${T.rule}` }}>
        <div style={{ maxWidth: 1376, margin: "0 auto" }}>
          <SectionLabel idx="02">MÉTODOS DE PAGO</SectionLabel>
          <h2 style={{
            fontFamily: "var(--display)", fontSize: 80,
            margin: "12px 0 48px", letterSpacing: "0.02em",
            color: T.fg,
          }}>
            COMO TE <span style={{ color: accent }}>GUSTE</span>.
          </h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
          }}>
            {payments.map(p => (
              <div key={p.n} style={{
                background: T.panel,
                border: `1px solid ${T.rule2}`,
                padding: 28,
              }}>
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                  marginBottom: 16,
                }}>
                  <span style={{
                    fontFamily: "var(--display)", fontSize: 56, color: accent,
                    letterSpacing: "0.04em", lineHeight: 0.9,
                  }}>{p.n}</span>
                  <span style={{
                    fontFamily: "var(--mono)", fontSize: 10, color: accent2,
                    letterSpacing: "0.2em",
                  }}>● DISPONIBLE</span>
                </div>
                <div style={{
                  fontFamily: "var(--display)", fontSize: 28,
                  color: T.fg, letterSpacing: "0.04em",
                }}>{p.t}</div>
                <p style={{
                  fontSize: 13, color: T.muted, marginTop: 12,
                  lineHeight: 1.7,
                }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 32px", borderBottom: `1px solid ${T.rule}` }}>
        <div style={{
          maxWidth: 1376, margin: "0 auto",
          display: "grid", gridTemplateColumns: "320px 1fr", gap: 64,
          alignItems: "flex-start",
        }}>
          <div style={{ position: "sticky", top: 100 }}>
            <SectionLabel idx="03">FAQ</SectionLabel>
            <h2 style={{
              fontFamily: "var(--display)", fontSize: 72,
              margin: "12px 0 0", letterSpacing: "0.02em", lineHeight: 0.9,
              color: T.fg,
            }}>
              PREGUNTAS<br/>
              <span style={{ color: accent }}>FRECUENTES</span>
            </h2>
            <p style={{
              fontSize: 13, color: T.muted, marginTop: 20,
              lineHeight: 1.7, maxWidth: 280,
            }}>
              ¿Falta algo? Mandanos un mensaje y te respondemos directo.
            </p>
          </div>

          <div>
            {faq.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={i} style={{
                  borderTop: `1px solid ${T.rule}`,
                  borderBottom: i === faq.length - 1 ? `1px solid ${T.rule}` : "none",
                }}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    style={{
                      width: "100%", background: "transparent", border: "none",
                      padding: "24px 0", cursor: "pointer",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      gap: 24, textAlign: "left",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--display)", fontSize: 26, color: T.fg,
                      letterSpacing: "0.02em",
                    }}>{item.q.toUpperCase()}</span>
                    <span style={{
                      fontFamily: "var(--display)", fontSize: 32, color: accent,
                      flexShrink: 0, transition: "transform 0.2s",
                      transform: open ? "rotate(45deg)" : "none",
                    }}>+</span>
                  </button>
                  {open && (
                    <div style={{
                      paddingBottom: 28, paddingRight: 60,
                      fontSize: 14, color: T.muted, lineHeight: 1.75,
                    }}>{item.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "100px 32px", borderBottom: `1px solid ${T.rule}`,
        textAlign: "center", background: T.panel,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(50% 70% at 50% 50%, ${accent}25 0%, transparent 70%)`,
        }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          <h2 style={{
            fontFamily: "var(--display)", fontSize: 96,
            margin: "0 0 24px", letterSpacing: "0.02em", lineHeight: 0.9,
            color: T.fg,
          }}>
            LISTO PARA EL <span style={{ color: accent }}>PRIMER PEDIDO</span>?
          </h2>
          <div style={{
            display: "flex", gap: 12, justifyContent: "center", marginTop: 36,
          }}>
            <a href="Catalogo.html" style={{
              background: accent, color: T.bg, padding: "18px 32px",
              fontFamily: "var(--display)", fontSize: 22, letterSpacing: "0.12em",
              textDecoration: "none",
              boxShadow: `0 12px 32px ${accent}50`,
            }}>VER CATÁLOGO →</a>
            <a href="https://wa.me/5493412299708?text=Hola%20Blaze%2C%20quiero%20hacer%20mi%20primer%20pedido" target="_blank" rel="noopener" style={{
              border: `1px solid ${T.fg}`, color: T.fg, padding: "18px 32px",
              fontFamily: "var(--display)", fontSize: 22, letterSpacing: "0.12em",
              textDecoration: "none",
            }}>WHATSAPP</a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

window.ComoComprarPage = ComoComprarPage;
