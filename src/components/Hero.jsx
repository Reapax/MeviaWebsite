import "../styles/Hero.css";

export default function Hero({ onLetsCreate }) {
  return (
    <section className="hero">
      <div className="hero-inner">

        <div className="hero-badge">New episodes weekly</div>

        <h1 className="hero-title">
          Podcasts made for{" "}
          <span className="gradient-text">curious kids</span>
        </h1>

        <p className="hero-desc">
          Stories, science, and everything in between — designed
          for young minds who ask the big questions.
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