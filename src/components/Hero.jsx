import "../styles/Hero.css";
import meviaLogo from "../assets/Images/Logos/Mevia_Logo_Yellow.png"

export default function Hero({ onLetsCreate }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <img src={meviaLogo} alt="MEVIA" className="hero-logo-image"/>
        <div className="hero-actions">
          <button className="hero-btn" onClick={onLetsCreate}>LET'S CREATE</button>
        </div>
      </div>
    </section>
  );
}