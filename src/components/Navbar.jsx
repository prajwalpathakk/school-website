import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const menu = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span>📞 +977-XXXXXXXXXX</span>
            <span>✉️ info@yourschool.edu.np</span>
          </div>
          <div className="topbar-right">
            <Link to="/admissions">Admission</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <Link to="/" className="logo" onClick={close}>
            <img src="/logo.jpg" alt="School logo" />
            <span className="logo-text">
              Shree Goldhap
              <small>Sunshine Boarding School</small>
            </span>
          </Link>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? "✕" : "☰"}
          </button>

          <nav className={open ? "nav-links open" : "nav-links"}>
            {menu.map((m) =>
              m.sub ? (
                <div className="has-sub" key={m.label}>
                  <NavLink to={m.to} onClick={close}>{m.label} ▾</NavLink>
                  <div className="dropdown">
                    {m.sub.map(([l, t]) => (
                      <Link key={t} to={t} onClick={close}>{l}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink key={m.to} to={m.to} onClick={close}>{m.label}</NavLink>
              )
            )}
            <Link to="/admissions" className="btn btn-gold" onClick={close}>Apply Now</Link>
          </nav>
        </div>
      </header>
    </>
  );
}