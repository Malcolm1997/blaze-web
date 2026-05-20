// COOKIES — política + control de preferencias.

const CookiesPage = ({ accent, accent2 }) => {
  const T = FlameTokens;
  const [prefs, setPrefs] = React.useState({
    necessary: true,    // siempre on, no editable
    functional: true,
    analytics: true,
    marketing: false,
  });
  const [saved, setSaved] = React.useState(false);

  const toggle = (k) => setPrefs(p => ({ ...p, [k]: !p[k] }));
  const save = () => {
    try { localStorage.setItem("blaze-cookies", "1"); } catch {}
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  const types = [
    {
      k: "necessary",
      title: "ESENCIALES",
      desc: "Mantienen la sesión, recuerdan tu carrito y permiten que la página funcione. Sin estas, nada anda.",
      example: "session_id, csrf_token",
      locked: true,
    },
    {
      k: "functional",
      title: "FUNCIONALES",
      desc: "Recuerdan tus preferencias: idioma, zona de entrega, último drop visto, productos favoritos.",
      example: "blaze_zone, blaze_lastdrop",
      locked: false,
    },
    {
      k: "analytics",
      title: "ANALÍTICAS",
      desc: "Nos dicen qué productos se miran más y qué páginas se traban. 100% anónimo, agregado.",
      example: "Google Analytics, Plausible",
      locked: false,
    },
    {
      k: "marketing",
      title: "MARKETING",
      desc: "Personalizan las publicidades que ves en Instagram / Meta y permiten retargeting. Si las desactivás, igual ves la página normal.",
      example: "Meta Pixel, fbclid",
      locked: false,
    },
  ];

  return (
    <React.Fragment>
      {/* HEADER */}
      <section style={{
        padding: "80px 32px 56px",
        borderBottom: `1px solid ${T.rule}`,
      }}>
        <div style={{ maxWidth: 1376, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
            <Pill color={accent} dot dotColor={accent}>POLÍTICA DE COOKIES</Pill>
            <Pill>ACTUALIZADO MAY 2026</Pill>
          </div>
          <h1 style={{
            fontFamily: "var(--display)", fontSize: 144,
            margin: 0, letterSpacing: "0.02em", lineHeight: 0.86,
            color: T.fg,
          }}>
            <span style={{ color: accent }}>COOKIES</span>.<br/>NADA RARO.
          </h1>
          <p style={{
            fontFamily: "var(--body)", fontSize: 16, color: T.muted,
            marginTop: 28, maxWidth: 640, lineHeight: 1.7,
          }}>
            Acá podés ver qué tipo de cookies usamos y desactivar las que no
            te interesen. Cero venta de datos a terceros — esto no es Facebook.
          </p>
        </div>
      </section>

      {/* PREFERENCES PANEL */}
      <section style={{
        padding: "80px 32px", borderBottom: `1px solid ${T.rule}`,
      }}>
        <div style={{
          maxWidth: 1376, margin: "0 auto",
          display: "grid", gridTemplateColumns: "320px 1fr", gap: 64,
          alignItems: "flex-start",
        }}>
          <div style={{ position: "sticky", top: 100 }}>
            <SectionLabel idx="01">TUS PREFERENCIAS</SectionLabel>
            <h2 style={{
              fontFamily: "var(--display)", fontSize: 56,
              margin: "12px 0 0", letterSpacing: "0.02em", lineHeight: 0.9,
              color: T.fg,
            }}>
              AJUSTÁ <span style={{ color: accent }}>LO QUE QUIERAS</span>.
            </h2>
            <p style={{
              fontSize: 13, color: T.muted, marginTop: 20,
              lineHeight: 1.7,
            }}>
              Cambios aplican al instante. Podés volver a ajustar cuando quieras.
            </p>
          </div>

          <div>
            {types.map(t => (
              <div key={t.k} style={{
                padding: "28px 0",
                borderTop: `1px solid ${T.rule}`,
              }}>
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                  gap: 24,
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: "flex", alignItems: "center", gap: 12, marginBottom: 12,
                    }}>
                      <span style={{
                        fontFamily: "var(--display)", fontSize: 32, color: T.fg,
                        letterSpacing: "0.04em",
                      }}>{t.title}</span>
                      {t.locked && (
                        <Pill color={T.mute2}>SIEMPRE ACTIVA</Pill>
                      )}
                    </div>
                    <p style={{
                      fontSize: 14, color: T.muted, lineHeight: 1.7,
                      margin: "0 0 12px",
                    }}>{t.desc}</p>
                    <div style={{
                      fontFamily: "var(--mono)", fontSize: 10,
                      color: T.mute2, letterSpacing: "0.18em",
                    }}>EJ: {t.example}</div>
                  </div>
                  <Toggle
                    value={prefs[t.k]}
                    onChange={() => !t.locked && toggle(t.k)}
                    disabled={t.locked}
                    accent={accent}
                  />
                </div>
              </div>
            ))}

            {/* Save bar */}
            <div style={{
              marginTop: 32, padding: "20px 24px",
              background: T.panel, border: `1px solid ${T.rule2}`,
              display: "flex", justifyContent: "space-between", alignItems: "center",
              gap: 24,
            }}>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 11, color: T.muted,
                letterSpacing: "0.2em",
              }}>
                {saved
                  ? <span style={{ color: accent }}>● PREFERENCIAS GUARDADAS</span>
                  : "TUS CAMBIOS NO ESTÁN GUARDADOS"
                }
              </div>
              <button onClick={save} style={{
                background: accent, color: T.bg, border: "none",
                padding: "14px 24px",
                fontFamily: "var(--display)", fontSize: 18, letterSpacing: "0.12em",
                cursor: "pointer",
                boxShadow: `0 8px 24px ${accent}40`,
              }}>GUARDAR PREFERENCIAS →</button>
            </div>
          </div>
        </div>
      </section>

      {/* DETALLE LEGAL */}
      <section style={{
        padding: "80px 32px", borderBottom: `1px solid ${T.rule}`,
        background: T.panel,
      }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <SectionLabel idx="02">CÓMO LO MANEJAMOS</SectionLabel>
          <h2 style={{
            fontFamily: "var(--display)", fontSize: 72,
            margin: "12px 0 40px", letterSpacing: "0.02em", lineHeight: 0.9,
            color: T.fg,
          }}>
            EN <span style={{ color: accent }}>LENGUAJE NORMAL</span>.
          </h2>

          {[
            {
              t: "¿QUÉ ES UNA COOKIE?",
              d: "Un archivo de texto chiquito que tu navegador guarda. Lo usamos para reconocerte entre visitas. No es un programa, no puede leer tus otros archivos, no puede instalar nada.",
            },
            {
              t: "¿VENDEMOS TUS DATOS?",
              d: "No. Nunca lo hicimos y nunca lo vamos a hacer. Los datos que recolectamos los usamos sólo para mejorar la página y mostrarte cosas relevantes. Cero venta a terceros.",
            },
            {
              t: "¿PODÉS DESACTIVARLAS?",
              d: "Todas excepto las esenciales, sí. Usá los toggles de arriba. Si desactivás las esenciales desde tu navegador, la página puede dejar de funcionar bien.",
            },
            {
              t: "¿CUÁNTO DURAN?",
              d: "Las esenciales duran lo que dura tu sesión (se borran al cerrar el navegador). Las demás duran entre 30 días y 1 año, según el tipo. Podés borrarlas manualmente desde tu navegador.",
            },
            {
              t: "¿CONTACTO POR PRIVACIDAD?",
              d: "Si tenés dudas o querés ejercer tus derechos (acceso, rectificación, eliminación de datos), escribinos por WhatsApp a +54 9 3412 29-9708. Te respondemos en 72hs hábiles.",
            },
          ].map((b, i) => (
            <div key={i} style={{
              padding: "24px 0",
              borderTop: i > 0 ? `1px solid ${T.rule}` : "none",
            }}>
              <div style={{
                fontFamily: "var(--display)", fontSize: 28, color: T.fg,
                letterSpacing: "0.04em", marginBottom: 12,
              }}>{b.t}</div>
              <p style={{
                fontSize: 14, color: T.muted, lineHeight: 1.75, margin: 0,
                maxWidth: 720,
              }}>{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

const Toggle = ({ value, onChange, disabled, accent }) => {
  const T = FlameTokens;
  return (
    <button
      onClick={onChange}
      disabled={disabled}
      style={{
        width: 64, height: 32,
        background: value ? accent : T.panel,
        border: `1px solid ${value ? accent : T.rule2}`,
        position: "relative",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        transition: "all 0.2s",
        padding: 0,
        flexShrink: 0,
        boxShadow: value && !disabled ? `0 0 16px ${accent}40` : "none",
      }}
    >
      <span style={{
        position: "absolute",
        top: 3, left: value ? 35 : 3,
        width: 24, height: 24,
        background: value ? T.bg : T.muted,
        transition: "all 0.2s",
      }} />
    </button>
  );
};

window.CookiesPage = CookiesPage;
