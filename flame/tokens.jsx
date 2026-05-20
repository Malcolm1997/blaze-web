// Design tokens + small primitives for the Flame / Blaze hi-fi landing.

// Paleta del cliente: #FF1E5A / #C2184A / #7A0F2E / #0D0D0D / #000000
// + neutros agregados (off-white / grises) para legibilidad sobre puro negro.
const FlameTokens = {
  // Backgrounds — puro negro escalonado
  bg:      "#000000",      // page
  panel:   "#0D0D0D",      // raised surface
  panel2:  "#161616",      // hover / nested
  rule:    "#1f1517",      // 1px divider con tinte rojo sutil
  rule2:   "#2e1a1f",      // 2px or hover divider

  // Foregrounds
  fg:      "#EAEAEA",      // primary text — off-white
  muted:   "#7a7a7a",      // secondary
  mute2:   "#4a4a4a",      // tertiary / dim

  // Accents — todos derivados de la paleta del cliente.
  accents: {
    primary: { hi: "#FF1E5A", lo: "#C2184A", name: "Primary 1E5A" },
    crimson: { hi: "#C2184A", lo: "#7A0F2E", name: "Crimson" },
    wine:    { hi: "#7A0F2E", lo: "#4a0a1c", name: "Wine" },
  },

  // Solid palette refs (para usar en gradientes, overlays, etc.)
  red1:    "#FF1E5A",
  red2:    "#C2184A",
  red3:    "#7A0F2E",

  // Secondary highlight — el mismo rojo principal, monocromático.
  cream:   "#FF1E5A",
};

// ────────────────────────────────────────────────────────────────────
// Shared primitives
// ────────────────────────────────────────────────────────────────────

const Pill = ({ children, color, bg, style = {}, dot, dotColor }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "5px 10px",
    border: `1px solid ${color || FlameTokens.mute2}`,
    background: bg || "transparent",
    borderRadius: 999,
    fontFamily: "var(--mono)",
    fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
    color: color || FlameTokens.muted, lineHeight: 1,
    ...style,
  }}>
    {dot && <span style={{
      width: 6, height: 6, borderRadius: "50%",
      background: dotColor || color || "currentColor",
      boxShadow: dotColor ? `0 0 8px ${dotColor}` : undefined,
    }} />}
    {children}
  </span>
);

const SectionLabel = ({ idx, total = 7, children, style = {} }) => (
  <div style={{
    fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.22em",
    textTransform: "uppercase", color: FlameTokens.muted,
    display: "flex", alignItems: "center", gap: 12, ...style,
  }}>
    <span style={{ color: FlameTokens.mute2 }}>[ {idx} / {total} ]</span>
    <span style={{ width: 24, height: 1, background: FlameTokens.rule2 }} />
    <span>{children}</span>
  </div>
);

const FlameMark = ({ size = 28, color }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path
      d="M16 2 C 18 8, 26 10, 24 18 C 28 16, 28 22, 24 26 C 22 22, 16 30, 10 26 C 6 22, 6 16, 10 18 C 8 10, 14 8, 16 2 Z"
      fill={color || "currentColor"}
    />
    <path
      d="M16 12 C 17 16, 20 17, 19 21 C 21 20, 21 24, 18 26 C 17 23, 14 27, 12 24 C 10 22, 11 19, 13 20 C 12 16, 15 16, 16 12 Z"
      fill={FlameTokens.bg}
      opacity="0.5"
    />
  </svg>
);

// Stylized disposable vape illustration — vertical pill with mouthpiece + glow.
const VapeIllustration = ({ color, size = "100%", flavor }) => {
  // Two-stop body gradient using the accent color.
  const id = `g-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <svg viewBox="0 0 120 240" width={size} height={size} style={{ display: "block" }}>
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.95" />
          <stop offset="55%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="100%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Glow */}
      <ellipse cx="60" cy="230" rx="55" ry="14" fill={`url(#${id}-glow)`} />
      {/* Mouthpiece */}
      <rect x="50" y="8" width="20" height="22" rx="3" fill="#1a1512" />
      <rect x="48" y="26" width="24" height="6" rx="2" fill="#0d0a08" />
      {/* Body */}
      <rect x="28" y="32" width="64" height="184" rx="18" fill={`url(#${id})`} />
      {/* Specular highlight */}
      <rect x="34" y="40" width="6" height="160" rx="3" fill="#fff" opacity="0.12" />
      {/* Label band */}
      <rect x="28" y="96" width="64" height="56" fill="#000" opacity="0.35" />
      <text
        x="60" y="124"
        textAnchor="middle"
        fontFamily="var(--mono)"
        fontSize="9"
        fill={FlameTokens.fg}
        letterSpacing="0.2em"
      >
        {(flavor || "BLAZE").toUpperCase().slice(0, 10)}
      </text>
      <text
        x="60" y="138"
        textAnchor="middle"
        fontFamily="var(--mono)"
        fontSize="6"
        fill={FlameTokens.muted}
        letterSpacing="0.3em"
      >
        BLAZE · ROSARIO
      </text>
      {/* Indicator dot */}
      <circle cx="60" cy="206" r="3" fill={color} opacity="0.9" />
    </svg>
  );
};

// Product catalog — generic names, no brand recreation.
// Catálogo genérico de descartables. category: ice / fruit / dessert / drink / classic
const FlameProducts = [
  { id: "01", name: "Ember 9K",    puffs: 9000,  flavor: "Ice Mint",        hue: 5,   price: 18000, badge: "",    category: "ice",     stock: "high" },
  { id: "02", name: "Ash 12K",     puffs: 12000, flavor: "Berry Crush",     hue: 350, price: 22000, badge: "HOT", category: "fruit",   stock: "high" },
  { id: "03", name: "Smoke 15K",   puffs: 15000, flavor: "Mango Lychee",    hue: 5,   price: 26000, badge: "",    category: "fruit",   stock: "high" },
  { id: "04", name: "Blaze 20K",   puffs: 20000, flavor: "Cola Cherry",     hue: 0,   price: 32000, badge: "NEW", category: "drink",   stock: "mid"  },
  { id: "05", name: "Cinder 8K",   puffs: 8000,  flavor: "Peach Ice",       hue: 350, price: 16000, badge: "",    category: "ice",     stock: "high" },
  { id: "06", name: "Flicker 10K", puffs: 10000, flavor: "Grape Mist",      hue: 0,   price: 19000, badge: "",    category: "fruit",   stock: "high" },
  { id: "07", name: "Spark 14K",   puffs: 14000, flavor: "Tropical Punch",  hue: 5,   price: 24000, badge: "",    category: "fruit",   stock: "mid"  },
  { id: "08", name: "Pyre 18K",    puffs: 18000, flavor: "Strawberry Kiwi", hue: 350, price: 29000, badge: "LOW", category: "fruit",   stock: "low"  },
  { id: "09", name: "Glow 11K",    puffs: 11000, flavor: "Vanilla Tobacco", hue: 0,   price: 20000, badge: "",    category: "classic", stock: "high" },
  { id: "10", name: "Char 16K",    puffs: 16000, flavor: "Watermelon Ice",  hue: 5,   price: 27000, badge: "HOT", category: "ice",     stock: "high" },
  { id: "11", name: "Soot 7K",     puffs: 7000,  flavor: "Cheesecake",      hue: 350, price: 14500, badge: "",    category: "dessert", stock: "high" },
  { id: "12", name: "Magma 25K",   puffs: 25000, flavor: "Energy Bull",     hue: 0,   price: 38000, badge: "NEW", category: "drink",   stock: "low"  },
];

const CategoryLabels = {
  ice: "Hielo / Mint",
  fruit: "Frutas",
  dessert: "Postres",
  drink: "Bebidas",
  classic: "Clásicos",
};

const fmtPrice = (n) =>
  "$ " + Math.round(n / 1000) + "." + String(n % 1000).padStart(3, "0");

Object.assign(window, {
  FlameTokens, FlameProducts, CategoryLabels,
  Pill, SectionLabel, FlameMark, VapeIllustration, fmtPrice,
});
