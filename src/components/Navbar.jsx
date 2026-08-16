import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const navItems = [
  { id: "home",       label: "HOME",      section: "home"      },
  { id: "portfolio",  label: "PORTFOLIO", section: "portfolio" },
  { id: "services",   label: "SERVICES",  section: "services"  },
  { id: "packages",   label: "PACKAGES",  section: "packages"  },
  { id: "about-us",   label: "ABOUT US",  section: "about-us"  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.5 } // section must be 50% visible to be active
  );

  const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  
  return (
    <nav className="navbar-desktop">
      <div className="navbar-links">
        {navItems.map((item) => (
          <DesktopNavItem
            key={item.id}
            item={item}
            active={activeSection === item.section}
          />
        ))}
      </div>
    </nav>
  );
}

function DesktopNavItem({ item, active }) {
  const handleClick = () => {
    if (item.section === "home") 
    {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } 
    else 
    {
      const section = document.getElementById(item.section);
      if (section) 
      {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
};

  return (
    <button
      className={`desktop-nav-item ${active ? "active" : ""}`}
      onClick={handleClick}
      aria-label={item.label}
    >
      {item.label}
    </button>
  );
}