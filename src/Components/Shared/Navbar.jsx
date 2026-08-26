import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";


const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <header className={`navbar ${theme === "light" ? "navbar-light" : ""}`}>
      
      <div className="navbar-container">

        {/* ================================
            LOGO
        ================================= */}

        <NavLink
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          Nathan
        </NavLink>


        {/* ================================
            DESKTOP NAVIGATION
        ================================= */}

        <nav className="navbar-links">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}

        </nav>


        {/* ================================
            DESKTOP ACTIONS
        ================================= */}

        <div className="navbar-actions">

          {/* THEME BUTTON */}

          <button
            type="button"
            className="navbar-theme-button"
            onClick={handleThemeToggle}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              theme === "dark"
                ? "Light mode"
                : "Dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun size={18} strokeWidth={2} />
            ) : (
              <Moon size={18} strokeWidth={2} />
            )}
          </button>


          {/* RESUME */}

          <a
            href="/Nathan-Frontend-Developer/resume.pdf"
            className="navbar-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

        </div>


        {/* ================================
            MOBILE MENU BUTTON
        ================================= */}

        <div className="navbar-mobile-actions">

          {/* MOBILE THEME BUTTON */}

          <button
            type="button"
            className="navbar-theme-button mobile-theme-button"
            onClick={handleThemeToggle}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun size={18} strokeWidth={2} />
            ) : (
              <Moon size={18} strokeWidth={2} />
            )}
          </button>


          {/* MENU */}

          <button
            type="button"
            className={`navbar-menu-button ${
              menuOpen ? "open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={23} strokeWidth={2} />
            ) : (
              <Menu size={23} strokeWidth={2} />
            )}
          </button>

        </div>

      </div>


      {/* ================================
          MOBILE MENU
      ================================= */}

      {menuOpen && (
        <div
          className={`navbar-mobile-menu ${
            theme === "light"
              ? "navbar-mobile-menu-light"
              : ""
          }`}
        >

          <div className="navbar-mobile-inner">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `navbar-mobile-link ${
                    isActive ? "active" : ""
                  }`
                }
                onClick={closeMenu}
              >
                <span>{link.name}</span>

                <ArrowUpRight
                  className="navbar-mobile-arrow"
                  size={18}
                  strokeWidth={2}
                />
              </NavLink>
            ))}


            {/* MOBILE RESUME */}

            <a
              href="/Nathan-Frontend-Developer/resume.pdf"
              className="navbar-mobile-resume"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <span>View Resume</span>

              <ArrowUpRight
                size={18}
                strokeWidth={2}
              />
            </a>

          </div>

        </div>
      )}

    </header>
  );
}

export default Navbar;