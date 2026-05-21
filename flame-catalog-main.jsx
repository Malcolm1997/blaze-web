// Main app del catálogo. Reusa Nav + Footer y pone el componente CatalogPage en medio.

const CATALOG_TWEAKS = /*EDITMODE-BEGIN*/{
  "accent": "primary",
  "type": "industrial"
}/*EDITMODE-END*/;

const CATALOG_TYPE_PRESETS = {
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

function CatalogApp() {
  const [t, setTweak] = useTweaks(CATALOG_TWEAKS);
  const accentPair = FlameTokens.accents[t.accent] || FlameTokens.accents.primary;
  const accent = accentPair.hi;
  const accent2 = FlameTokens.fg;
  const typePreset = CATALOG_TYPE_PRESETS[t.type] || CATALOG_TYPE_PRESETS.industrial;

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
        <FlameCatalogPage accent={accent} accent2={accent2} />
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
}

(window.__productsReady || Promise.resolve()).then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(<CatalogApp />);
});
