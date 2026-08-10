import "../styles/AddOns.css";

const addons = [
  {
    icon: "🎬",
    title: "Produktion",
    features: [
      "Podcast-Folge über 30 Minuten",
      "Zusätzliche Reels (über die enthaltenen 10 hinaus)",
    ],
    pricing: [
      { label: "Podcast über 30 Min. (+ je 15 Min.)", price: "CHF 250–400" },
      { label: "5 zusätzliche Reels", price: "CHF 350–500" },
      { label: "10 zusätzliche Reels", price: "CHF 650–900" },
    ],
  },
  {
    icon: "🤝",
    title: "Betreuung",
    features: [
      "Mehr als 1 Podcast-Folge pro Monat",
      "Gästekoordination",
    ],
    pricing: [
      { label: "4 Podcast-Folgen", price: "CHF 21'386 (–15%)" },
      { label: "8 Podcast-Folgen", price: "CHF 40'256 (–20%)" },
      { label: "12+ Folgen", price: "Individuelles Angebot" },
      { label: "Gästekoordination pro Gast", price: "CHF 200–350" },
    ],
  },
  {
    icon: "✨",
    title: "Premium Content",
    features: [
      "Individuelle 3D-Animationen",
      "Motion Graphics / animierte Sequenzen",
    ],
    pricing: [
      { label: "3D-Animation (einfach)", price: "ab CHF 500" },
      { label: "3D-Animation (komplex)", price: "CHF 1'500–4'000+" },
      { label: "Motion Graphics", price: "CHF 250–800" },
    ],
  },
  {
    icon: "📡",
    title: "Distribution",
    features: [
      "Erweiterte Distribution auf zusätzlichen Plattformen",
      "Individuelle Veröffentlichungspläne",
    ],
    pricing: [
      { label: "Zusätzliche Distribution (YouTube, LinkedIn usw.)", price: "CHF 150–300" },
    ],
  },
];

export default function AddOns() {
  return (
    <section className="addons">
      <div className="section-header">
        <span className="section-badge">Add-Ons</span>
        <h2 className="section-title">Expand Your Package</h2>
        <p className="section-desc">
          Flexibel hinzubuchbar — combine what fits your goals.
        </p>
      </div>
      
      <div className="addons-grid">
        {addons.map((addon) => (
          <div>
            <div className="addon-icon">{addon.icon}</div>
            <h3 className="addon-title">{addon.title}</h3>

            <ul className="addon-features">
              {addon.features.map((f) => (
                <li key={f} className="addon-feature-item">
                  <span className="feature-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="addon-divider" />
            <ul className="addon-pricing">
              {addon.pricing.map((p) => (
                <li key={p.label} className="addon-price-item">
                  <span className="addon-price-label">{p.label}</span>
                  <span className="addon-price-value">{p.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
      <p className="addons-note">
        Sollte das Basispaket nicht Ihren Anforderungen entsprechen, passen wir den Leistungsumfang auf Anfrage individuell an.
      </p>
    </section>
  );
}