// CONTACTO — canales directos + form + mapa.

// Form helpers — duplicated from UnirtePage.jsx so this page works standalone.
// (Babel-standalone scripts don't share lexical scope.)
const inputStyle = (T) => ({
  background: T.panel,
  border: `1px solid ${T.rule2}`,
  color: T.fg,
  padding: "16px 18px",
  fontFamily: "var(--mono)", fontSize: 13,
  letterSpacing: "0.04em",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
});

const Field = ({ label, accent, children }) => {
  const T = FlameTokens;
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{
        fontFamily: "var(--mono)", fontSize: 10, color: T.muted,
        letterSpacing: "0.22em", marginBottom: 8,
      }}>{label}</div>
      {children}
    </div>
  );
};

const ContactoPage = ({ accent, accent2 }) => {
  const T = FlameTokens;
  const [form, setForm] = React.useState({
    nombre: "", email: "", tipo: "consulta", mensaje: "",
  });
  const [sent, setSent] = React.useState(false);
  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <React.Fragment>
      {/* HEADER */}
      <section style={{
        padding: "80px 32px 56px", borderBottom: `1px solid ${T.rule}`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(40% 70% at 80% 50%, ${accent}20 0%, transparent 70%)`,
        }} />
        <div style={{ maxWidth: 1376, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
            <Pill color={accent} dot dotColor={accent}>RESPUESTA &lt; 10MIN</Pill>
            <Pill>LUN–DOM · 10–23H</Pill>
          </div>
          <h1 style={{
            fontFamily: "var(--display)", fontSize: 168,
            margin: 0, letterSpacing: "0.02em", lineHeight: 0.86, color: T.fg,
          }}>
            CON<span style={{ color: accent }}>TACTO</span>.
          </h1>
          <p style={{
            fontFamily: "var(--body)", fontSize: 16, color: T.muted,
            marginTop: 28, maxWidth: 560, lineHeight: 1.7,
          }}>
            La forma más rápida es WhatsApp. También podés encontrarnos
            en Instagram — todo lo leemos nosotros.
          </p>
        </div>
      </section>

      {/* CHANNELS */}
      <section style={{ padding: "80px 32px", borderBottom: `1px solid ${T.rule}` }}>
        <div style={{ maxWidth: 1376, margin: "0 auto" }}>
          <SectionLabel idx="01">CANALES DIRECTOS</SectionLabel>
          <div style={{
            marginTop: 32,
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
          }}>
            {/* WhatsApp — destacado */}
            <ChannelCard
              accent={accent}
              featured
              tag="● RECOMENDADO"
              kicker="WHATSAPP"
              big="+54 9 3412 29-9708"
              desc="Respuesta promedio de 6 minutos. Abiertos 24hs, todos los días. Coordinamos todo por acá."
              cta="ABRIR CHAT →"
              href="https://wa.me/5493412299708?text=Hola%20Blaze%2C%20quiero%20hacer%20una%20consulta"
            />
            {/* Instagram */}
            <ChannelCard
              accent={accent}
              kicker="INSTAGRAM"
              big="@blaze.me.one"
              desc="Drops, novedades y comunidad. Etiquetanos para aparecer en stories."
              cta="SEGUIR →"
              href="https://www.instagram.com/blaze.me.one?igsh=ajc5c2plaGxsbWpr"
            />
          </div>
        </div>
      </section>

      {/* HOURS + LOCATION */}
      <section style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        borderBottom: `1px solid ${T.rule}`,
      }}>
        <div style={{
          padding: "72px 56px", borderRight: `1px solid ${T.rule}`,
        }}>
          <SectionLabel idx="02">HORARIOS</SectionLabel>
          <h3 style={{
            fontFamily: "var(--display)", fontSize: 56,
            margin: "12px 0 32px", letterSpacing: "0.02em",
            color: T.fg,
          }}>
            ESTAMOS <span style={{ color: accent }}>24HS</span>.
          </h3>
          <div style={{
            padding: 32, background: T.panel, border: `1px solid ${T.rule2}`,
            position: "relative", marginBottom: 24,
          }}>
            <div style={{
              fontFamily: "var(--mono)", fontSize: 10, color: T.muted,
              letterSpacing: "0.28em",
            }}>LUNES A DOMINGO</div>
            <div style={{
              fontFamily: "var(--display)", fontSize: 88, color: T.fg,
              letterSpacing: "0.02em", lineHeight: 1, marginTop: 8,
            }}>
              24<span style={{ color: accent }}>HS</span>
            </div>
            <div style={{
              fontFamily: "var(--body)", fontSize: 13, color: T.muted,
              marginTop: 12, lineHeight: 1.6, maxWidth: 320,
            }}>
              WhatsApp directo a un celular personal. Si estás despierto vos,
              probablemente nosotros también.
            </div>
          </div>
          <div style={{
            padding: "16px 18px", background: T.panel,
            border: `1px solid ${accent}`,
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", background: accent,
                animation: "flamePulse 1.6s infinite",
                boxShadow: `0 0 10px ${accent}`,
              }} />
              <span style={{
                fontFamily: "var(--mono)", fontSize: 12, color: accent,
                letterSpacing: "0.22em",
              }}>ESTAMOS ONLINE AHORA</span>
            </div>
          </div>
        </div>

        <div style={{ padding: "72px 56px" }}>
          <SectionLabel idx="03">DÓNDE OPERAMOS</SectionLabel>
          <h3 style={{
            fontFamily: "var(--display)", fontSize: 56,
            margin: "12px 0 24px", letterSpacing: "0.02em",
            color: T.fg,
          }}>
            ROSARIO <span style={{ color: accent }}>ONLY</span>.
          </h3>
          <RosarioMap accent={accent} />
          <p style={{
            fontSize: 13, color: T.muted, lineHeight: 1.7, marginTop: 16,
          }}>
            Operamos sólo dentro de Rosario y alrededores cercanos.
            Si estás afuera, escribinos igual — a veces hacemos excepciones.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section style={{
        padding: "80px 32px", borderBottom: `1px solid ${T.rule}`,
        background: T.panel,
      }}>
        <div style={{
          maxWidth: 880, margin: "0 auto",
        }}>
          <SectionLabel idx="04">MENSAJE LARGO</SectionLabel>
          <h3 style={{
            fontFamily: "var(--display)", fontSize: 64,
            margin: "12px 0 16px", letterSpacing: "0.02em",
            color: T.fg, textAlign: "center",
          }}>
            ¿NECESITÁS ESCRIBIR <span style={{ color: accent }}>MÁS DE 2 LÍNEAS</span>?
          </h3>
          <p style={{
            fontSize: 14, color: T.muted, lineHeight: 1.7, marginTop: 8,
            textAlign: "center", marginBottom: 40,
          }}>
            Para devoluciones, propuestas comerciales o consultas que no entran en un WhatsApp.
          </p>

          {sent ? (
            <div style={{
              padding: 40, border: `1px solid ${accent}`, background: T.bg,
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 12, color: accent,
                letterSpacing: "0.3em", marginBottom: 12,
              }}>● MENSAJE ENVIADO</div>
              <div style={{
                fontFamily: "var(--display)", fontSize: 40, color: T.fg,
                letterSpacing: "0.02em",
              }}>GRACIAS — TE RESPONDEMOS EN 24HS.</div>
            </div>
          ) : (
            <div style={{
              padding: 32, background: T.bg, border: `1px solid ${T.rule2}`,
            }}>
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14,
              }}>
                <Field label="NOMBRE" accent={accent}>
                  <input value={form.nombre} onChange={update("nombre")}
                         placeholder="ej: María R." style={inputStyle(T)} />
                </Field>
                <Field label="WHATSAPP" accent={accent}>
                  <input type="tel" value={form.email} onChange={update("email")}
                         placeholder="ej: 341 555-0000" style={inputStyle(T)} />
                </Field>
              </div>
              <Field label="TIPO DE CONSULTA" accent={accent}>
                <select value={form.tipo} onChange={update("tipo")} style={inputStyle(T)}>
                  <option value="consulta">Consulta general</option>
                  <option value="devolucion">Devolución / problema</option>
                  <option value="comercial">Propuesta comercial</option>
                  <option value="prensa">Prensa / medios</option>
                  <option value="otro">Otro</option>
                </select>
              </Field>
              <Field label="MENSAJE" accent={accent}>
                <textarea value={form.mensaje} onChange={update("mensaje")}
                          placeholder="Contanos qué necesitás..." rows={6}
                          style={{ ...inputStyle(T), resize: "vertical", minHeight: 140 }} />
              </Field>
              <button onClick={() => setSent(true)} style={{
                background: accent, color: T.bg, border: "none",
                padding: "18px 32px", marginTop: 8,
                fontFamily: "var(--display)", fontSize: 22, letterSpacing: "0.14em",
                cursor: "pointer", width: "100%",
                boxShadow: `0 16px 40px ${accent}40`,
              }}>ENVIAR MENSAJE →</button>
            </div>
          )}
        </div>
      </section>

      {/* SECONDARY: Quick links */}
      <section style={{ padding: "60px 32px", borderBottom: `1px solid ${T.rule}` }}>
        <div style={{
          maxWidth: 1376, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
        }}>
          {[
            ["¿PRIMERA COMPRA?",  "Mirá cómo funciona el proceso paso a paso.", "Cómo comprar →", "ComoComprar.html"],
            ["¿VES EL CATÁLOGO?", "12 modelos curados, todos en stock.",          "Catálogo →",      "Catalogo.html"],
            ["¿HABLÁS CONMIGO?",  "Lo más rápido es por WhatsApp, en serio.",    "WhatsApp →",      "https://wa.me/5493412299708"],
          ].map(([t, d, c, href]) => (
            <a key={t} href={href}
               target={href.startsWith("http") ? "_blank" : undefined}
               rel={href.startsWith("http") ? "noopener" : undefined}
               style={{
              padding: 24, background: T.panel, border: `1px solid ${T.rule}`,
              textDecoration: "none", display: "block",
            }}>
              <div style={{
                fontFamily: "var(--display)", fontSize: 22, color: T.fg,
                letterSpacing: "0.04em",
              }}>{t}</div>
              <div style={{
                fontFamily: "var(--body)", fontSize: 13, color: T.muted,
                marginTop: 8, lineHeight: 1.6,
              }}>{d}</div>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 11, color: accent,
                letterSpacing: "0.2em", marginTop: 16,
              }}>{c}</div>
            </a>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

const ChannelCard = ({ accent, featured, tag, kicker, big, desc, cta, href }) => {
  const T = FlameTokens;
  const Tag = href ? "a" : "div";
  const linkProps = href ? {
    href,
    target: href.startsWith("http") ? "_blank" : undefined,
    rel: href.startsWith("http") ? "noopener" : undefined,
  } : {};
  return (
    <Tag {...linkProps} style={{
      background: featured ? T.bg : T.panel,
      border: `1px solid ${featured ? accent : T.rule2}`,
      padding: 32, minHeight: 240, position: "relative",
      boxShadow: featured ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${accent}30` : "none",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      textDecoration: "none", color: "inherit",
      cursor: href ? "pointer" : "default",
    }}>
      <div>
        {tag && (
          <div style={{
            fontFamily: "var(--mono)", fontSize: 10, color: accent,
            letterSpacing: "0.22em", marginBottom: 14,
          }}>{tag}</div>
        )}
        <div style={{
          fontFamily: "var(--mono)", fontSize: 11, color: T.muted,
          letterSpacing: "0.22em", marginBottom: 12,
        }}>{kicker}</div>
        <div style={{
          fontFamily: "var(--display)",
          fontSize: featured ? 44 : 32,
          color: T.fg, letterSpacing: "0.04em", lineHeight: 1,
          marginBottom: 14,
        }}>{big}</div>
        <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.7, margin: 0 }}>{desc}</p>
      </div>
      <div style={{
        marginTop: 24, paddingTop: 18, borderTop: `1px solid ${T.rule}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{
          fontFamily: "var(--mono)", fontSize: 11, color: accent,
          letterSpacing: "0.22em",
        }}>{cta}</span>
        <span style={{
          color: accent, fontSize: 20,
        }}>→</span>
      </div>
    </Tag>
  );
};

window.ContactoPage = ContactoPage;
