import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const navItems = [
  { id: "home",     label: "HOME", path: "/" },
  { id: "portfolio", label: "PORTFOLIO", path: "/portfolio"},
  { id: "services", label: "SERVICES", path: "/services" },
  { id: "packages", label: "PACKAGES", path: "/packages" },
  { id: "about-us", label: "ABOUT US", path: "/about-us" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {/* Desktop */}
      <nav className="navbar-desktop" role="navigation" aria-label="Desktop navigation">
        <div className="navbar-links">
          {navItems.map((item) => (
            <DesktopNavItem
              key={item.id}
              item={item}
              active={location.pathname === item.path}
            />
          ))}
        </div>
      </nav>

      {/* Mobile */}
      <nav className="navbar-mobile" role="navigation" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <MobileNavItem
            key={item.id}
            item={item}
            active={location.pathname === item.path}
          />
        ))}
      </nav>
    </>
  );
}

function DesktopNavItem({ item, active }) {
  const navigate = useNavigate();
  return (
    <button
      className={`desktop-nav-item ${active ? "active" : ""}`}
      onClick={() => navigate(item.path)}
      aria-label={item.label}
      aria-current={active ? "page" : undefined}
    >
      {item.label}
    </button>
  );
}

function MobileNavItem({ item, active }) {
  const navigate = useNavigate();
  return (
    <button
      className={`mobile-nav-item ${active ? "active" : ""}`}
      onClick={() => navigate(item.path)}
      aria-label={item.label}
      aria-current={active ? "page" : undefined}
    >
      <span>{item.label}</span>
    </button>
  );
}