import { motion } from "framer-motion";
import clsx from "clsx";

import {
  Code2,
  Smartphone,
  Palette,
  GitBranch,
  Monitor,
  Database,
  Route,
} from "lucide-react";


function Skills() {

  const skills = [
    {
      icon: Code2,
      title: "React",
      description:
        "Building modern component-based interfaces with reusable architecture and smooth interactions.",
    },

    {
      icon: Code2,
      title: "JavaScript",
      description:
        "Creating dynamic functionality, interactive experiences, and powerful web applications.",
    },

    {
      icon: Monitor,
      title: "HTML",
      description:
        "Writing clean, semantic, and accessible markup that provides a strong foundation for every project.",
    },

    {
      icon: Palette,
      title: "CSS",
      description:
        "Designing responsive interfaces with modern layouts, animations, glass effects, and polished visuals.",
    },

    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Creating experiences that adapt beautifully across phones, tablets, laptops, and desktop screens.",
    },

    {
      icon: GitBranch,
      title: "Git & GitHub",
      description:
        "Managing source code, tracking changes, and keeping projects organized throughout development.",
    },

    {
      icon: Database,
      title: "APIs",
      description:
        "Connecting applications with external services and working with real-world data efficiently.",
    },

    {
      icon: Route,
      title: "React Router",
      description:
        "Building smooth navigation and structured multi-page experiences inside React applications.",
    },
  ];


  /* =========================================
     FRAMER MOTION
  ========================================= */

  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };


  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: "blur(6px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };


  return (
    <section
      className="skills-section"
      id="skills"
    >

      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div
        className="skills-bg-glow skills-bg-glow-one"
        aria-hidden="true"
      />

      <div
        className="skills-bg-glow skills-bg-glow-two"
        aria-hidden="true"
      />


      {/* =========================================
          CONTAINER
      ========================================= */}

      <div className="skills-container">


        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <motion.header
          className="skills-heading"

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
            amount: 0.2,
          }}

          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <div className="skills-label">

            <span
              className="skills-label-line"
              aria-hidden="true"
            />

            <span>
              My Skills
            </span>

          </div>


          <h2>
            Technologies I
            <span>
              Work With.
            </span>
          </h2>


          <p className="skills-intro">
            A collection of technologies and tools I use
            to create modern, responsive, and interactive
            digital experiences.
          </p>

        </motion.header>


        {/* =========================================
            SKILLS GRID
        ========================================= */}

        <motion.div
          className="skills-grid"

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.12,
          }}
        >

          {skills.map((skill, index) => {

            const Icon = skill.icon;


            return (
              <motion.article
                key={skill.title}

                className={clsx(
                  "skill-card",
                  index % 2 === 0
                    ? "skill-card-even"
                    : "skill-card-odd"
                )}

                variants={cardVariants}

                whileHover={{
                  y: -9,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
              >

                {/* =================================
                    CARD GLOW
                ================================= */}

                <motion.div
                  className="skill-card-glow"
                  aria-hidden="true"

                  whileHover={{
                    scale: 1.35,
                    opacity: 1,
                  }}

                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />


                {/* =================================
                    CARD TOP
                ================================= */}

                <div className="skill-card-top">


                  {/* ICON */}

                  <motion.div
                    className="skill-icon"

                    whileHover={{
                      rotate: -5,
                      scale: 1.07,
                      y: -3,
                    }}

                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >

                    <Icon
                      size={25}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />

                  </motion.div>


                  {/* NUMBER */}

                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* =================================
                    CONTENT
                ================================= */}

                <div className="skill-content">

                  <h3>
                    {skill.title}
                  </h3>

                  <p>
                    {skill.description}
                  </p>

                </div>


                {/* =================================
                    CARD BOTTOM
                ================================= */}

                <div className="skill-card-bottom">

                  <span>
                    Frontend Skill
                  </span>


                  <motion.span
                    className="skill-dot"
                    aria-hidden="true"

                    whileHover={{
                      scale: 1.5,
                    }}
                  />

                </div>

              </motion.article>
            );

          })}

        </motion.div>

      </div>

    </section>
  );
}


export default Skills;

