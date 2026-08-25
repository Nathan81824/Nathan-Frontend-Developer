import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function SkillsCTA() {
  return (
    <section className="skills-cta" id="skills-cta">
      <div className="skills-cta-glow skills-cta-glow-one" />
      <div className="skills-cta-glow skills-cta-glow-two" />

      <div className="skills-cta-container">

        <motion.div
          className="skills-cta-card"
          initial={{
            opacity: 0,
            y: 40,
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
            duration: 0.7,
          }}
        >

          {/* ICON */}

          <div className="skills-cta-icon">
            <Code2 size={30} strokeWidth={1.8} />
          </div>


          {/* CONTENT */}

          <div className="skills-cta-content">

            <span className="skills-cta-label">
              <Sparkles size={14} />
              LET'S BUILD SOMETHING
            </span>

            <h2>
              Skills are better
              <span> when put to work.</span>
            </h2>

            <p>
              Explore the projects where I use these technologies to
              build responsive, interactive and modern web experiences.
            </p>

          </div>


          {/* ACTIONS */}

          <div className="skills-cta-actions">

            <Link
              to="/projects"
              className="skills-cta-primary"
            >
              View My Projects

              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="skills-cta-secondary"
            >
              Let's Work Together
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default SkillsCTA;