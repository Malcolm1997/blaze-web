// Main — assembles the design canvas with 3 wireframe directions for Blaze Club.

const TYPE_PRESETS = {
  curado: { // default per direction
    d1: { display: "Anton, 'Archivo Black', sans-serif", body: "'JetBrains Mono', ui-monospace, monospace" },
    d2: { display: "'Instrument Serif', 'Cormorant Garamond', serif", body: "'Space Grotesk', sans-serif" },
    d3: { display: "'Bebas Neue', 'Oswald', sans-serif", body: "'Space Mono', ui-monospace, monospace" },
  },
  editorial: { // all serif display + clean sans body
    d1: { display: "'Instrument Serif', serif", body: "'Space Grotesk', sans-serif" },
    d2: { display: "'Instrument Serif', serif", body: "'Space Grotesk', sans-serif" },
    d3: { display: "'Instrument Serif', serif", body: "'Space Grotesk', sans-serif" },
  },
  industrial: { // condensed display + mono body
    d1: { display: "'Anton', sans-serif", body: "'JetBrains Mono', monospace" },
    d2: { display: "'Anton', sans-serif", body: "'JetBrains Mono', monospace" },
    d3: { display: "'Anton', sans-serif", body: "'JetBrains Mono', monospace" },
  },
  mono: { // mono everywhere
    d1: { display: "'Space Mono', monospace", body: "'JetBrains Mono', monospace" },
    d2: { display: "'Space Mono', monospace", body: "'JetBrains Mono', monospace" },
    d3: { display: "'Space Mono', monospace", body: "'JetBrains Mono', monospace" },
  },
};

const TWEAKS = /*EDITMODE-BEGIN*/{
  "typeVibe": "curado"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAKS);
  const preset = TYPE_PRESETS[t.typeVibe] || TYPE_PRESETS.curado;

  return (
    <React.Fragment>
      <DesignCanvas>
        <DCSection
          id="blaze"
          title="Blaze Club — Landing"
          subtitle="3 direcciones · mid-fi · 1440px · Rosario AR"
        >
          <DCArtboard
            id="d1"
            label="01 · MANIFEST — Brutalist underground"
            width={1440}
            height={3200}
          >
            <D1 {...preset.d1} />
          </DCArtboard>

          <DCArtboard
            id="d2"
            label="02 · ATELIER — Premium minimal"
            width={1440}
            height={3400}
          >
            <D2 {...preset.d2} />
          </DCArtboard>

          <DCArtboard
            id="d3"
            label="03 · MEMBERS — Drop culture / club"
            width={1440}
            height={3400}
          >
            <D3 {...preset.d3} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Tipografía">
          <TweakRadio
            label="Type vibe"
            value={t.typeVibe}
            onChange={(v) => setTweak("typeVibe", v)}
            options={[
              { value: "curado", label: "Curado (por dirección)" },
              { value: "editorial", label: "Editorial (serif)" },
              { value: "industrial", label: "Industrial (condensed)" },
              { value: "mono", label: "Mono" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Tips">
          <div style={{ fontSize: 12, color: "rgba(0,0,0,0.6)", lineHeight: 1.5, padding: "4px 0" }}>
            Doble-click en un artboard para enfocarlo a pantalla completa. Usá ← → para navegar.
          </div>
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
