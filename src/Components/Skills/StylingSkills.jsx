import { motion } from "framer-motion";
import {
  Palette,
  LayoutGrid,
  Smartphone,
  Sparkles,
  Layers3,
} from "lucide-react";

const stylingSkills = [
  {
    title: "CSS",
    description:
      "Writing clean and structured CSS to create polished interfaces with strong visual hierarchy.",
    icon: Palette,
  },
  {
    title: "Responsive Design",
    description:
      "Building layouts that adapt smoothly across desktop, tablet and mobile screen sizes.",
    icon: Smartphone,
  },
  {
    title: "Flexbox & Grid",
    description:
      "Using modern CSS layout systems to create flexible and well-structured page sections.",
    icon: LayoutGrid,
  },
  {
    title: "UI Design",
    description:
      "Creating interfaces with thoughtful spacing, typography, colors, cards, buttons and visual hierarchy.",
    icon: Layers3,
  },
  {
    title: "CSS Animations",
    description:
      "Adding subtle transitions, hover effects and visual feedback to make interfaces feel interactive.",
    icon: Sparkles,
  },
];

function StylingSkills() {
  return (
    <section className="styling-skills" id="styling">

      <div className="styling-skills-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          className="styling-skills-header"
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
            STYLING & UI
          </span>

          <h2>
            I care about
            <span> how it feels.</span>
          </h2>

          <p>
            Good frontend development is more than making a page work.
            I focus on layout, spacing, typography, responsiveness and
            interaction to create interfaces that feel polished.
          </p>

        </motion.div>


        {/* =========================================
            SKILLS GRID
        ========================================= */}

        <div className="styling-skills-grid">

          {stylingSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                className="styling-skill-card"
                key={skill.title}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
              >

                <div className="styling-skill-icon">
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                  />
                </div>


                <div className="styling-skill-content">

                  <h3>
                    {skill.title}
                  </h3>

                  <p>
                    {skill.description}
                  </p>

                </div>


                <span className="styling-skill-number">
                  0{index + 1}
                </span>

              </motion.article>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default StylingSkills;