// Shared building blocks for the three wireframe directions.
// Mid-fi: real type + hierarchy, placeholder imagery via striped SVG boxes.

const StripedBox = ({ width = "100%", height = 200, label, tone = "dark", style = {} }) => {
  const isLight = tone === "light";
  const bg = isLight ? "#efeae1" : "#1a1714";
  const stripe = isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.05)";
  const text = isLight ? "#6b6258" : "#a89c8c";
  return (
    <div style={{
      width, height,
      background: `repeating-linear-gradient(135deg, ${bg} 0 14px, ${stripe} 14px 15px)`,
      border: `1px dashed ${isLight ? "#bcae9c" : "#4a4138"}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "ui-monospace, 'JetBrains Mono', monospace",
      fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
      color: text,
      ...style,
    }}>
      [{label}]
    </div>
  );
};

// Tiny annotation flag used to call out wireframe intent.
const Note = ({ children, style = {} }) => (
  <span style={{
    display: "inline-block",
    fontFamily: "ui-monospace, monospace",
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    padding: "3px 7px",
    border: "1px dashed currentColor",
    opacity: 0.55,
    ...style,
  }}>{children}</span>
);

// Sample product names — generic, no copyrighted brands.
const PRODUCTS = [
  { name: "Disposable A", puffs: "9000", flavor: "Ice Mint" },
  { name: "Disposable B", puffs: "12000", flavor: "Berry Crush" },
  { name: "Disposable C", puffs: "15000", flavor: "Mango Lychee" },
  { name: "Disposable D", puffs: "20000", flavor: "Cola Cherry" },
];

const STEPS = [
  { n: "01", t: "Elegí tu vape", d: "Mirá el catálogo y elegí el modelo + sabor." },
  { n: "02", t: "Escribinos", d: "Coordinamos por WhatsApp en minutos." },
  { n: "03", t: "Pagá y recibí", d: "Transferencia, MP, efectivo o cripto. Entrega en Rosario." },
];

const PAYMENTS = ["Transferencia", "Mercado Pago", "Efectivo", "Cripto · soon"];

Object.assign(window, { StripedBox, Note, PRODUCTS, STEPS, PAYMENTS });
