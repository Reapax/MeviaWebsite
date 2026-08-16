import "../styles/Hero.css";
import meviaLogo from "../assets/Images/Logos/Mevia_Logo_Yellow.png"

export default function Hero() {
  const scrollToProducts = () => {
    const section = document.getElementById("packages");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <img src={meviaLogo} alt="MEVIA" className="hero-logo-image"/>
        <div className="hero-actions">
          <button className="hero-btn" onClick={scrollToProducts}>LET'S CREATE</button>
        </div>
      </div>
    </section>
  );
}