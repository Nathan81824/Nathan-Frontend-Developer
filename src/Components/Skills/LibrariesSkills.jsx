import { motion } from "framer-motion";
import {
  Sparkles,
  MousePointer2,
  ScrollText,
  Send,
  Shapes,
  Palette,
} from "lucide-react";

const libraries = [
  {
    name: "Framer Motion",
    description:
      "Creating smooth page transitions, entrance effects, hover interactions, and UI motion.",
    icon: Sparkles,
    category: "Animation",
  },
  {
    name: "Lucide React",
    description:
      "Using clean and consistent SVG icons throughout modern React interfaces.",
    icon: Shapes,
    category: "Icons",
  },
  {
    name: "React Scroll",
    description:
      "Creating smooth scrolling navigation between sections of a page.",
    icon: ScrollText,
    category: "Navigation",
  },
  {
    name: "Lenis",
    description:
      "Adding smooth and natural scrolling experiences to modern websites.",
    icon: MousePointer2,
    category: "Scrolling",
  },
  {
    name: "GSAP",
    description:
      "Building advanced and highly controlled animations for interactive interfaces.",
    icon: Sparkles,
    category: "Animation",
  },
  {
    name: "EmailJS",
    description:
      "Connecting frontend contact forms to email services without requiring a backend.",
    icon: Send,
    category: "Communication",
  },
  {
    name: "React Icons",
    description:
      "Accessing a wide collection of popular icon libraries directly inside React.",
    icon: Palette,
    category: "Icons",
  },
];

function LibrariesSkills() {
  return (
    <section className="libraries-skills" id="libraries">

      <div className="libraries-skills-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          className="libraries-skills-header"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className="skills-section-label">
            LIBRARIES & PACKAGES
          </span>

          <h2>
            More tools behind
            <span> the interface.</span>
          </h2>

          <p>
            I use modern React libraries and tools to add interaction,
            animation, smooth navigation, icons, and functionality
            without unnecessarily rebuilding everything from scratch.
          </p>
        </motion.div>


        {/* =========================================
            LIBRARY GRID
        ========================================= */}

        <div className="libraries-skills-grid">

          {libraries.map((library, index) => {
            const Icon = library.icon;

            return (
              <motion.article
                className="library-card"
                key={library.name}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -7,
                }}
              >

                {/* ICON */}

                <div className="library-icon">
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                  />
                </div>


                {/* CONTENT */}

                <div className="library-content">

                  <div className="library-title-row">

                    <h3>
                      {library.name}
                    </h3>

                    <span className="library-category">
                      {library.category}
                    </span>

                  </div>

                  <p>
                    {library.description}
                  </p>

                </div>


                {/* ACCENT */}

                <div className="library-line" />

              </motion.article>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default LibrariesSkills;