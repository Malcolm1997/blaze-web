// PageShell — wrapper común que pone Nav, Footer, Tweaks Panel y banner de cookies.
// Cada página inner sólo se preocupa de su contenido.

const PAGE_TWEAKS_DEFAULT = /*EDITMODE-BEGIN*/{
  "accent": "primary",
  "type": "industrial"
}/*EDITMODE-END*/;

const PAGE_TYPE_PRESETS = {
  industrial: {
    display: "'Bebas Neue', 'Oswald', sans-serif",
    body: "'Space Grotesk', sans-serif",
    mono: "'Space Mono', monospace",
  },
  brutal: {
    display: "'Anton', 'Archivo Black', sans-serif",
    body: "'JetBrains Mono', monospace",
    mono: "'JetBrains Mono', monospace",
  },
  editorial: {
    display: "'Instrument Serif', serif",
    body: "'Space Grotesk', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
};

const PageShell = ({ children, hideFooter = false, hideNav = false }) => {
  const [t, setTweak] = useTweaks(PAGE_TWEAKS_DEFAULT);
  const accentPair = FlameTokens.accents[t.accent] || FlameTokens.accents.primary;
  const accent = accentPair.hi;
  const accent2 = FlameTokens.fg;
  const typePreset = PAGE_TYPE_PRESETS[t.type] || PAGE_TYPE_PRESETS.industrial;

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--display", typePreset.display);
    root.style.setProperty("--body", typePreset.body);
    root.style.setProperty("--mono", typePreset.mono);
    root.style.setProperty("--accent", accent);
    root.style.setProperty("--accent2", accent2);
  }, [typePreset, accent, accent2]);

  // Inject accent + accent2 props into children
  const enhanced = React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child, { accent, accent2 })
      : child
  );

  return (
    <React.Fragment>
      <div style={{
        background: FlameTokens.bg,
        color: FlameTokens.fg,
        fontFamily: typePreset.body,
        minWidth: 1440,
      }}>
        {!hideNav && <FlameNav accent={accent} accent2={accent2} />}
        {enhanced}
        {!hideFooter && <FlameFooter accent={accent} accent2={accent2} />}
      </div>

      <CookieBanner accent={accent} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Acento">
          <TweakColor
            label="Color"
            value={FlameTokens.accents[t.accent].hi}
            options={Object.values(FlameTokens.accents).map(a => a.hi)}
            onChange={(hex) => {
              const k = Object.keys(FlameTokens.accents).find(
                key => FlameTokens.accents[key].hi === hex
              );
              if (k) setTweak("accent", k);
            }}
          />
        </TweakSection>
        <TweakSection label="Tipografía">
          <TweakSelect
            label="Estilo"
            value={t.type}
            options={[
              { value: "industrial", label: "Industrial" },
              { value: "brutal", label: "Brutal" },
              { value: "editorial", label: "Editorial" },
            ]}
            onChange={(v) => setTweak("type", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
};

// ── Cookie Banner ───────────────────────────────────────────────────
const CookieBanner = ({ accent }) => {
  const T = FlameTokens;
  // For preview: always show. In production you'd gate by localStorage flag.
  const [dismissed, setDismissed] = React.useState(() => {
    try { return localStorage.getItem("blaze-cookies") === "1"; }
    catch { return false; }
  });

  if (dismissed) return null;

  const close = (mode) => {
    try { localStorage.setItem("blaze-cookies", "1"); } catch {}
    setDismissed(true);
  };

  return (
    <div style={{
      position: "fixed", bottom: 24, right: 24,
      width: 380, maxWidth: "calc(100vw - 48px)",
      background: T.panel,
      border: `1px solid ${accent}`,
      padding: 24,
      zIndex: 100,
      boxShadow: `0 24px 60px rgba(0,0,0,0.8), 0 0 0 1px ${accent}30`,
      fontFamily: "var(--body)",
    }}>
      <div style={{
        fontFamily: "var(--mono)", fontSize: 10, color: accent,
        letterSpacing: "0.22em", marginBottom: 12,
      }}>
        ● COOKIES & PRIVACIDAD
      </div>
      <div style={{
        fontFamily: "var(--display)", fontSize: 24, color: T.fg,
        letterSpacing: "0.04em", lineHeight: 1.1, marginBottom: 12,
      }}>
        USAMOS COOKIES.<br/>NADA RARO.
      </div>
      <p style={{
        fontSize: 12, color: T.muted, lineHeight: 1.6, margin: "0 0 16px",
      }}>
        Para que la página funcione bien y para entender qué modelos te interesan.
        Cero spam, cero venta de datos. Podés ajustar todo.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={() => close("all")} style={{
          flex: 1, minWidth: 140,
          background: accent, color: T.bg, border: "none",
          padding: "11px 14px", cursor: "pointer",
          fontFamily: "var(--display)", fontSize: 14, letterSpacing: "0.12em",
        }}>ACEPTAR TODO</button>
        <button onClick={() => close("min")} style={{
          background: "transparent", color: T.fg,
          border: `1px solid ${T.rule2}`,
          padding: "11px 14px", cursor: "pointer",
          fontFamily: "var(--display)", fontSize: 14, letterSpacing: "0.12em",
        }}>SÓLO NECESARIAS</button>
      </div>
      <a href="Cookies.html" style={{
        display: "block", marginTop: 12,
        fontFamily: "var(--mono)", fontSize: 10, color: T.muted,
        letterSpacing: "0.2em", textDecoration: "none",
      }}>
        AJUSTAR PREFERENCIAS →
      </a>
    </div>
  );
};

window.PageShell = PageShell;
window.CookieBanner = CookieBanner;
