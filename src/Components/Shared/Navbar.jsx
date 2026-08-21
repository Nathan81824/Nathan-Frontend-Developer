import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          MyPortfolio
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About
          </Link>

            <Link to="/skill" className="nav-link">
            Skills
          </Link>

          <Link to="/projects" className="nav-link">
            Projects
          </Link>

          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>

        <Link to="/contact" className="navbar-button">
          Let's Talk
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;