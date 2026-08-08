import "../styles/Hero.css";

export default function Hero({ onLetsCreate }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">
          PODCASTS THAT KEEPS {" "}
          <span className="gradient-text">WORKING</span>
        </h1>

        <p className="hero-desc">
          
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={onLetsCreate}>
            Let's Create
          </button>
        </div>

      </div>
    </section>
  );
}