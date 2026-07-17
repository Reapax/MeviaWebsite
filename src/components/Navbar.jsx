import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const navItems = [
  { id: "home",     label: "Home",     icon: "ti-home",   path: "/" },
  { id: "products", label: "Products", icon: "ti-box",    path: "/products" },
  { id: "addons",   label: "Add-ons",  icon: "ti-puzzle", path: "/addons" },
  { id: "team",     label: "Team",     icon: "ti-users",  path: "/team" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {/* Desktop */}
      <nav className="navbar-desktop glass" role="navigation" aria-label="Desktop navigation">
        <span className="navbar-brand">MEVIA Podcast Production GmbH</span>
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
      <nav className="navbar-mobile glass" role="navigation" aria-label="Mobile navigation">
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
      <i className={`ti ${item.icon}`} aria-hidden="true" />
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
      <i className={`ti ${item.icon}`} aria-hidden="true" />
      <span>{item.label}</span>
    </button>
  );
}