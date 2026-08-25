import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const navItems = [
{ name: "Home", path: "/" },
{ name: "About", path: "/about" },
{ name: "Skills", path: "/skill" },
{ name: "Projects", path: "/projects" },
{ name: "Services", path: "/services" },
{ name: "Contact", path: "/contact" },
];

const closeMenu = () => {
setMenuOpen(false);
};

return (
<nav className="navbar">

  <div className="navbar-container">

    {/* LOGO */}

    <Link
      to="/"
      className="navbar-logo"
      onClick={closeMenu}
    >
      Nathan
    </Link>


    {/* DESKTOP NAVIGATION */}

    <div className="navbar-links">

      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            clsx(
              "navbar-link",
              isActive && "active"
            )
          }
        >
          {item.name}
        </NavLink>
      ))}

    </div>


    {/* DESKTOP RESUME */}

    <Link
      to="/contact"
      className="navbar-resume"
    >
      <span>Resume</span>

      <ArrowUpRight
        size={17}
        strokeWidth={2.2}
      />
    </Link>


    {/* MOBILE MENU BUTTON */}

    <motion.button
      type="button"
      className={clsx(
        "navbar-menu-button",
        menuOpen && "menu-open"
      )}
      onClick={() => setMenuOpen((prev) => !prev)}
      whileTap={{ scale: 0.92 }}
      aria-label={
        menuOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      }
      aria-expanded={menuOpen}
    >

      <AnimatePresence mode="wait" initial={false}>

        {menuOpen ? (
          <motion.span
            key="close"
            initial={{
              opacity: 0,
              rotate: -90,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: 90,
              scale: 0.7,
            }}
            transition={{
              duration: 0.22,
            }}
          >
            <X
              size={24}
              strokeWidth={2}
            />
          </motion.span>
        ) : (
          <motion.span
            key="menu"
            initial={{
              opacity: 0,
              rotate: 90,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: -90,
              scale: 0.7,
            }}
            transition={{
              duration: 0.22,
            }}
          >
            <Menu
              size={24}
              strokeWidth={2}
            />
          </motion.span>
        )}

      </AnimatePresence>

    </motion.button>

  </div>


  {/* MOBILE MENU */}

  <AnimatePresence>

    {menuOpen && (
      <motion.div
        className="navbar-mobile-menu"
        initial={{
          opacity: 0,
          height: 0,
        }}
        animate={{
          opacity: 1,
          height: "auto",
        }}
        exit={{
          opacity: 0,
          height: 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        <div className="navbar-mobile-inner">

          {/* MOBILE LINKS */}

          {navItems.map((item, index) => (

            <motion.div
              key={item.path}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -15,
              }}
              transition={{
                duration: 0.35,
                delay: index * 0.055,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              <NavLink
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  clsx(
                    "navbar-mobile-link",
                    isActive && "active"
                  )
                }
              >

                <span className="navbar-mobile-link-name">
                  {item.name}
                </span>

                <span className="navbar-mobile-arrow">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                  />
                </span>

              </NavLink>

            </motion.div>

          ))}


          {/* MOBILE RESUME */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 10,
            }}
            transition={{
              duration: 0.4,
              delay: 0.34,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <Link
              to="/contact"
              className="navbar-mobile-resume"
              onClick={closeMenu}
            >
              <span>Resume</span>

              <ArrowUpRight
                size={18}
                strokeWidth={2.2}
              />
            </Link>

          </motion.div>

        </div>

      </motion.div>
    )}

  </AnimatePresence>

</nav>

);
}

export default Navbar;