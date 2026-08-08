import "../styles/Footer.css";

const navLinks = [
  { label: "Home",     href: "#top" },
  { label: "Pakete",   href: "#products" },
  { label: "Add-Ons",  href: "#addons" },
  { label: "Team",     href: "#team" },
];

const socialLinks = [
  { label: "Instagram", icon: "ti-brand-instagram", href: "https://instagram.com" },
  { label: "LinkedIn",  icon: "ti-brand-linkedin",  href: "https://linkedin.com" },
  { label: "YouTube",   icon: "ti-brand-youtube",   href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glass glass">
        <div className="footer-top">
          <div className="footer-brand">

            <span className="footer-logo">MEVIA</span>
            <p className="footer-tagline">Podcast Production — done right.</p>
            
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <span className="footer-nav-title">Navigation</span>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-nav-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-contact">
            <span className="footer-nav-title">Kontakt</span>
            <a href="mailto:hello@mevia.ch" className="footer-email">
              hello@mevia.ch
            </a>
            <div className="footer-socials">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer-social-link"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`ti ${s.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} MEVIA Podcast Production. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}