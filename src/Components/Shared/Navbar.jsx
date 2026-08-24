import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => {
setMenuOpen(false);
};

return ( <nav className="navbar"> <div className="navbar-container">

    {/* =================================
        LOGO
    ================================= */}

    <Link
      to="/"
      className="navbar-logo"
      onClick={closeMenu}
    >
      Nathan
    </Link>


    {/* =================================
        DESKTOP NAVIGATION
    ================================= */}

    <div className="navbar-links">

      <NavLink
        to="/"
        end
        className="navbar-link"
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className="navbar-link"
      >
        About
      </NavLink>

      <NavLink
        to="/skill"
        className="navbar-link"
      >
        Skills
      </NavLink>

      <NavLink
        to="/projects"
        className="navbar-link"
      >
        Projects
      </NavLink>

      <NavLink
        to="/services"
        className="navbar-link"
      >
        Services
      </NavLink>

      <NavLink
        to="/contact"
        className="navbar-link"
      >
        Contact
      </NavLink>

    </div>


    {/* =================================
        DESKTOP RESUME
    ================================= */}

    <Link
      to="/contact"
      className="navbar-resume"
    >
      Resume
    </Link>


    {/* =================================
        MOBILE MENU BUTTON
    ================================= */}

    <button
      type="button"
      className={`navbar-menu-button ${
        menuOpen
          ? "menu-open"
          : ""
      }`}
      onClick={() =>
        setMenuOpen(!menuOpen)
      }
      aria-label={
        menuOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      }
      aria-expanded={menuOpen}
    >
      {menuOpen ? (
        <X
          size={25}
          strokeWidth={2}
        />
      ) : (
        <Menu
          size={25}
          strokeWidth={2}
        />
      )}
    </button>

  </div>


  {/* =================================
      MOBILE MENU
  ================================= */}

  <div
    className={`mobile-menu ${
      menuOpen
        ? "mobile-menu-open"
        : ""
    }`}
  >

    <NavLink
      to="/"
      end
      className="mobile-menu-link"
      onClick={closeMenu}
    >
      Home
    </NavLink>

    <NavLink
      to="/about"
      className="mobile-menu-link"
      onClick={closeMenu}
    >
      About
    </NavLink>

    <NavLink
      to="/skill"
      className="mobile-menu-link"
      onClick={closeMenu}
    >
      Skills
    </NavLink>

    <NavLink
      to="/projects"
      className="mobile-menu-link"
      onClick={closeMenu}
    >
      Projects
    </NavLink>

    <NavLink
      to="/services"
      className="mobile-menu-link"
      onClick={closeMenu}
    >
      Services
    </NavLink>

    <NavLink
      to="/contact"
      className="mobile-menu-link"
      onClick={closeMenu}
    >
      Contact
    </NavLink>

    <Link
      to="/contact"
      className="mobile-menu-resume"
      onClick={closeMenu}
    >
      Resume
    </Link>

  </div>

</nav>

);
}

export default Navbar;
