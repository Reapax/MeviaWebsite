import "../styles/Footer.css";
import instagramIcon from "../assets/Icons/MEVIA_Icon_Instagram.png"
import tikTokIcon from "../assets/Icons/MEVIA_Icon_TikTok.png"
import linkedInIcon from "../assets/Icons/MEVIA_Icon_LinkedIn.png"


const navLinks = [
  { label: "Home",      href: "#top"        },
  { label: "Portfolio", href: "#portfolio"  },
  { label: "Services",  href: "#services"   },
  { label: "Packages",  href: "#packages"   },
  { label: "About Us",  href: "#aboutus"    }
];

const socialLinks = [
  { label: "Instagram", icon: instagramIcon, href: "https://www.instagram.com" },
  { label: "TikTok",  icon: tikTokIcon,  href: "https://www.tiktok.com/" },
  { label: "LinkedIn",   icon: linkedInIcon,   href: "https://www.linkedin.com/" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-column">
          <div className="footer-navigation">
            {navLinks.map((nav) => (
              <a key={nav.label} href={nav.href}>
                {nav.label}                       
              </a>
            ))}
          </div>
          <div className="footer-social">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                <img src={s.icon} alt={s.label} className="footer-social-icon" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}