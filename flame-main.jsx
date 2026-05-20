// Main app — assembles the Flame landing page.

const FLAME_TWEAKS = /*EDITMODE-BEGIN*/{
  "accent": "primary",
  "type": "industrial"
}/*EDITMODE-END*/;

const TYPE_PRESETS = {
  industrial: {
    display: "'Bebas Neue', 'Oswald', sans-serif",
    body: "'Space Grotesk', 'Inter', sans-serif",
    mono: "'Space Mono', ui-monospace, monospace",
  },
  brutal: {
    display: "'Anton', 'Archivo Black', sans-serif",
    body: "'JetBrains Mono', ui-monospace, monospace",
    mono: "'JetBrains Mono', ui-monospace, monospace",
  },
  editorial: {
    display: "'Instrument Serif', serif",
    body: "'Space Grotesk', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
};

function FlameApp() {
  const [t, setTweak] = useTweaks(FLAME_TWEAKS);
  const accentPair = FlameTokens.accents[t.accent] || FlameTokens.accents.primary;
  const accent = accentPair.hi;
  // accent2 = off-white para crear un sistema monocromático rojo+blanco+negro.
  const accent2 = FlameTokens.fg;
  const typePreset = TYPE_PRESETS[t.type] || TYPE_PRESETS.industrial;

  // Inject font CSS vars at root level so all components can pick them up.
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--display", typePreset.display);
    root.style.setProperty("--body", typePreset.body);
    root.style.setProperty("--mono", typePreset.mono);
    root.style.setProperty("--accent", accent);
    root.style.setProperty("--accent2", accent2);
  }, [typePreset, accent, accent2]);

  return (
    <React.Fragment>
      <div style={{
        background: FlameTokens.bg,
        color: FlameTokens.fg,
        fontFamily: typePreset.body,
        minWidth: 1440,
      }}>
        <FlameNav accent={accent} accent2={accent2} />
        <FlameHero accent={accent} accent2={accent2} />
        <FlameDrop accent={accent} accent2={accent2} />
        <FlameHow accent={accent} accent2={accent2} />
        <FlamePay accent={accent} accent2={accent2} />
        <FlameCommunity accent={accent} accent2={accent2} />
        <FlameFooter accent={accent} accent2={accent2} />
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
              { value: "industrial", label: "Industrial (Bebas + Grotesk)" },
              { value: "brutal", label: "Brutal (Anton + Mono)" },
              { value: "editorial", label: "Editorial (Serif + Grotesk)" },
            ]}
            onChange={(v) => setTweak("type", v)}
          />
        </TweakSection>
        <TweakSection label="Tips">
          <div style={{
            fontSize: 11, color: "rgba(0,0,0,0.55)", lineHeight: 1.5,
            fontFamily: "system-ui", padding: "4px 0",
          }}>
            Página de 1440px de ancho — scrolleá para ver toda la landing.
            Los placeholders de vape son SVG hasta que cargues fotos reales.
          </div>
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<FlameApp />);
