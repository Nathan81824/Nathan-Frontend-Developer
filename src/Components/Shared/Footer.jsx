import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* =========================
            TOP SECTION
        ========================== */}

        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo"
            >
              My Portfolio<span>.</span>
            </Link>

            <p className="footer-description">
              Frontend developer focused on building
              modern, responsive and user-friendly
              web experiences.
            </p>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-column">

            <h3>
              Navigation
            </h3>

            <nav className="footer-links">

              <Link to="/">
                Home
              </Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/skill">
                Skills
              </Link>

              <Link to="/projects">
                Projects
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </nav>

          </div>


          {/* SOCIALS */}
          <div className="footer-column">

            <h3>
              Connect
            </h3>

            <div className="footer-socials">

              <a
                href="https://github.com/Nathan81824/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/nathan-moses-b13b143bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>

        </div>


        {/* =========================
            DIVIDER
        ========================== */}

        <div className="footer-divider"></div>


        {/* =========================
            BOTTOM SECTION
        ========================== */}

        <div className="footer-bottom">

          <p className="footer-copy">
            © {currentYear} My Portfolio. All rights reserved.
          </p>

          <p className="footer-built">
            Built with <span>React</span> & passion.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;