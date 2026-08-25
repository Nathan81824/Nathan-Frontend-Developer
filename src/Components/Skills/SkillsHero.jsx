import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  ArrowDown,
  Layers3,
} from "lucide-react";

function SkillsHero() {
  const scrollToSkills = () => {
    const section = document.getElementById("core-skills");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="skills-hero">

      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div className="skills-hero-glow skills-hero-glow-one" />
      <div className="skills-hero-glow skills-hero-glow-two" />


      {/* =========================================
          CONTAINER
      ========================================= */}

      <div className="skills-hero-container">

        {/* =======================================
            LEFT CONTENT
        ======================================= */}

        <motion.div
          className="skills-hero-content"
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >

          {/* LABEL */}

          <div className="skills-hero-label">

            <span className="skills-hero-label-icon">
              <Sparkles size={15} />
            </span>

            <span>
              MY SKILLS
            </span>

          </div>


          {/* TITLE */}

          <h1 className="skills-hero-title">
            Tools I use to
            <span> build for the web.</span>
          </h1>


          {/* DESCRIPTION */}

          <p className="skills-hero-description">
            A collection of technologies, tools, and techniques
            I use to transform ideas into modern, responsive,
            and interactive web experiences.
          </p>


          {/* BUTTON */}

          <button
            type="button"
            className="skills-hero-button"
            onClick={scrollToSkills}
          >
            <Code2 size={18} />

            <span>
              Explore My Skills
            </span>

            <ArrowDown size={17} />

          </button>

        </motion.div>


        {/* =======================================
            RIGHT VISUAL
        ======================================= */}

        <motion.div
          className="skills-hero-visual"
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
        >

          {/* MAIN CARD */}

          <div className="skills-hero-card">

            {/* CARD HEADER */}

            <div className="skills-hero-card-header">

              <div className="skills-hero-window-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="skills-hero-card-title">
                skills.json
              </span>

            </div>


            {/* CODE */}

            <div className="skills-hero-code">

              <p>
                <span className="skills-code-keyword">
                  const
                </span>{" "}

                <span className="skills-code-variable">
                  skills
                </span>{" "}

                <span className="skills-code-symbol">
                  =
                </span>{" "}
                <span className="skills-code-bracket">
                  {"{"}
                </span>
              </p>


              <p className="skills-code-indent">

                <span className="skills-code-property">
                  frontend
                </span>

                <span className="skills-code-symbol">
                  :
                </span>{" "}

                <span className="skills-code-string">
                  "React"
                </span>

                <span className="skills-code-symbol">
                  ,
                </span>

              </p>


              <p className="skills-code-indent">

                <span className="skills-code-property">
                  language
                </span>

                <span className="skills-code-symbol">
                  :
                </span>{" "}

                <span className="skills-code-string">
                  "JavaScript"
                </span>

                <span className="skills-code-symbol">
                  ,
                </span>

              </p>


              <p className="skills-code-indent">

                <span className="skills-code-property">
                  styling
                </span>

                <span className="skills-code-symbol">
                  :
                </span>{" "}

                <span className="skills-code-string">
                  "CSS"
                </span>

                <span className="skills-code-symbol">
                  ,
                </span>

              </p>


              <p className="skills-code-indent">

                <span className="skills-code-property">
                  responsive
                </span>

                <span className="skills-code-symbol">
                  :
                </span>{" "}

                <span className="skills-code-boolean">
                  true
                </span>

              </p>


              <p>
                <span className="skills-code-bracket">
                  {"}"}
                </span>
              </p>

            </div>


            {/* CARD FOOTER */}

            <div className="skills-hero-card-footer">

              <div>
                <Layers3 size={15} />

                <span>
                  Frontend Stack
                </span>
              </div>

              <span className="skills-hero-status">
                Available
              </span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default SkillsHero;