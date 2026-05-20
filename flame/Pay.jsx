// Payments + Shipping (Rosario map) — side by side.

const FlamePay = ({ accent, accent2 }) => {
  const T = FlameTokens;
  const payments = [
    { name: "Transferencia",   note: "CBU / Alias",     status: "ok" },
    { name: "Mercado Pago",    note: "QR / Link",       status: "ok" },
    { name: "Efectivo",        note: "En la entrega",   status: "ok" },
  ];

  const zones = [
    "Centro", "Pichincha", "Fisherton", "Bv. Oroño",
    "Alto Rosario", "Abasto", "Echesortu", "Martin",
    "Saladillo", "Tablada", "Lourdes", "+ alrededores",
  ];

  return (
    <section style={{
      display: "grid", gridTemplateColumns: "1fr 1fr",
      borderBottom: `1px solid ${T.rule}`,
    }}>
      {/* PAYMENTS */}
      <div style={{
        padding: "72px 56px", borderRight: `1px solid ${T.rule}`,
      }}>
        <SectionLabel idx="04">PAGOS</SectionLabel>
        <h3 style={{
          fontFamily: "var(--display)", fontSize: 64,
          margin: "12px 0 36px", letterSpacing: "0.02em",
          color: T.fg,
        }}>
          COMO TE<br/>
          <span style={{ color: accent }}>GUSTE</span>.
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {payments.map((p, i) => (
            <div key={i} style={{
              background: T.panel,
              border: `1px solid ${T.rule}`,
              padding: "20px 18px",
              display: "flex", flexDirection: "column", gap: 6,
              position: "relative",
            }}>
              {p.status === "soon" && (
                <span style={{
                  position: "absolute", top: 10, right: 10,
                  fontFamily: "var(--mono)", fontSize: 9, color: T.muted,
                  letterSpacing: "0.2em",
                }}>○ SOON</span>
              )}
              {p.status === "ok" && (
                <span style={{
                  position: "absolute", top: 10, right: 10,
                  fontFamily: "var(--mono)", fontSize: 9, color: accent2,
                  letterSpacing: "0.2em",
                }}>● OK</span>
              )}
              <span style={{
                fontFamily: "var(--display)", fontSize: 22,
                letterSpacing: "0.04em", color: T.fg,
              }}>{p.name.toUpperCase()}</span>
              <span style={{
                fontFamily: "var(--mono)", fontSize: 10, color: T.muted,
                letterSpacing: "0.16em", textTransform: "uppercase",
              }}>{p.note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SHIPPING */}
      <div style={{ padding: "72px 56px" }}>
        <SectionLabel idx="05">ENVÍOS</SectionLabel>
        <h3 style={{
          fontFamily: "var(--display)", fontSize: 64,
          margin: "12px 0 24px", letterSpacing: "0.02em",
          color: T.fg,
        }}>
          ROSARIO ·<br/>
          <span style={{ color: accent }}>48HS MÁX</span>.
        </h3>

        <RosarioMap accent={accent} />

        <div style={{
          marginTop: 20, display: "flex", flexWrap: "wrap", gap: 6,
        }}>
          {zones.map(z => (
            <Pill key={z} color={T.muted}>● {z.toUpperCase()}</Pill>
          ))}
        </div>
      </div>
    </section>
  );
};

const RosarioMap = ({ accent }) => {
  const T = FlameTokens;
  // Stylized abstract map — concentric rings + dots for zones, river hint
  return (
    <div style={{
      height: 240,
      background: T.panel,
      border: `1px solid ${T.rule}`,
      position: "relative",
      overflow: "hidden",
    }}>
      <svg viewBox="0 0 600 240" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="rivglow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.18" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* River */}
        <path
          d="M 0 80 Q 100 110, 200 100 T 400 130 T 600 160"
          stroke={T.rule2} strokeWidth="40" fill="none" opacity="0.6"
        />
        {/* Grid */}
        {[...Array(8)].map((_, i) => (
          <line key={`v${i}`} x1={i * 80} y1="0" x2={i * 80} y2="240"
                stroke={T.rule} strokeWidth="1" opacity="0.6" />
        ))}
        {[...Array(4)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 60} x2="600" y2={i * 60}
                stroke={T.rule} strokeWidth="1" opacity="0.6" />
        ))}
        {/* Coverage glow */}
        <ellipse cx="280" cy="130" rx="240" ry="90" fill="url(#rivglow)" />
        {/* Concentric rings */}
        {[40, 80, 120, 160].map((r, i) => (
          <ellipse key={r} cx="280" cy="130" rx={r * 1.4} ry={r * 0.55}
                   stroke={accent} strokeOpacity={0.4 - i * 0.08}
                   strokeDasharray="2 4" fill="none" />
        ))}
        {/* Center hub */}
        <circle cx="280" cy="130" r="6" fill={accent} />
        <circle cx="280" cy="130" r="14" fill="none" stroke={accent} strokeOpacity="0.5" />
        {/* Zone dots */}
        {[
          [180, 100], [380, 110], [220, 160], [360, 170],
          [140, 140], [440, 140], [300, 80], [260, 190],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill={T.fg} />
            <circle cx={x} cy={y} r="6" fill="none" stroke={T.fg} strokeOpacity="0.3" />
          </g>
        ))}
        {/* Labels */}
        <text x="290" y="118" fontFamily="var(--mono)" fontSize="9"
              fill={T.fg} letterSpacing="0.18em">★ ROSARIO</text>
        <text x="20" y="22" fontFamily="var(--mono)" fontSize="9"
              fill={T.muted} letterSpacing="0.2em">[ MAPA DE COBERTURA ]</text>
        <text x="500" y="22" fontFamily="var(--mono)" fontSize="9"
              fill={accent} letterSpacing="0.2em">● LIVE</text>
        <text x="20" y="226" fontFamily="var(--mono)" fontSize="9"
              fill={T.muted} letterSpacing="0.2em">~ RÍO PARANÁ</text>
      </svg>
    </div>
  );
};

window.FlamePay = FlamePay;
window.RosarioMap = RosarioMap;
