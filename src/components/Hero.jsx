import "../styles/Hero.css";

export default function Hero({ onLetsCreate }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">MEVIA</h1>
        <p className="hero-subtitle">PODCAT PRODUCTION</p>
        <div className="hero-actions">
          <button className="hero-btn" onClick={onLetsCreate}>LET'S CREATE</button>
        </div>
      </div>
    </section>
  );
}