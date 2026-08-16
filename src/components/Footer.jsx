import "../styles/Footer.css";
import sliderRight from "../assets/Icons/MEVIA_SliderRight_Black.png"
import instagramIcon from "../assets/Icons/MEVIA_Icon_Instagram.png"
import tikTokIcon from "../assets/Icons/MEVIA_Icon_TikTok.png"
import linkedInIcon from "../assets/Icons/MEVIA_Icon_LinkedIn.png"


const navLinks = [
  { label: "HOME",      href: "#home"        },
  { label: "PORTFOLIO", href: "#portfolio"  },
  { label: "SERVICES",  href: "#services"   },
  { label: "PACKAGES",  href: "#packages"   },
  { label: "ABOUT US",  href: "#about-us"    }
];

const socialLinks = [
  { label: "Instagram", icon: instagramIcon, href: "https://www.instagram.com" },
  { label: "TikTok",  icon: tikTokIcon,  href: "https://www.tiktok.com/" },
  { label: "LinkedIn",   icon: linkedInIcon,   href: "https://www.linkedin.com/" },
];

export default function Footer() {
  const handleRight = () => {
        return
    };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-navigation">
          <h4 className="footer-navigation-title">NAVIGATION</h4>
          {navLinks.map((nav) => (
            <a key={nav.label} href={nav.href} onClick={(e) => 
              {
                e.preventDefault();
                if (nav.href === "#home") 
                  {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } 
                  else 
                  {
                    const section = document.getElementById(nav.href.replace("#", ""));
                    if (section) 
                    {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }
              }}>
              {nav.label}                       
            </a>
          ))}
        </div>
        <div className="footer-contact">
          <h4 className="footer-contact-title">KONTAKT</h4>
          <p>LET'S TALK</p>
          <p>HELLO@MEVIA.CH</p>
          <p>ZÜRICH, SWITZERLAND</p>
        </div>
        <div className="footer-social">
          <h4 className="footer-social-title">SOCIALS</h4>
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              <img src={s.icon} alt={s.label}/>
            </a>
          ))}
        </div>
        <div className="footer-copyright">
          <p>© 2026 MEVIA Podcast Production GmbH</p>
          <p>Impressum · Datenschutz</p>
          <p>ALL RIGHTS RESERVED</p>
        </div>
        <div className="footer-btn-container">
          <button className="footer-btn" onClick={handleRight}>
              DISCOVER <span className="footer-btn-black">PACKAGES</span>
              <img src={sliderRight} alt="DISCOVER PACKAGES"/>
          </button>
        </div>
      </div>
    </footer>
  );
}