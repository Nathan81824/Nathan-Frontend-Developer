import {
  Code2,
  Palette,
  Smartphone,
  Database,
  GitBranch,
  Globe,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

function AboutSkills() {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Building modern and interactive interfaces with React, JavaScript, HTML, and CSS.",
    },
    {
      icon: Palette,
      title: "UI & Styling",
      description:
        "Creating clean, modern interfaces with strong visual design, spacing, typography, and dark themes.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Creating layouts that work smoothly across phones, tablets, desktops, and large displays.",
    },
    {
      icon: Database,
      title: "APIs & Data",
      description:
        "Connecting applications to APIs and working with dynamic data inside React applications.",
    },
    {
      icon: GitBranch,
      title: "Git & GitHub",
      description:
        "Using Git and GitHub to manage projects, track changes, collaborate, and maintain code.",
    },
    {
      icon: Globe,
      title: "Deployment",
      description:
        "Deploying websites and applications so they can be accessed online.",
    },
  ];

  return (
    <section className="about-skills" id="about-skills">

      {/* =================================
          CONTAINER
      ================================= */}

      <div className="about-skills-container">

        {/* =================================
            SECTION HEADING
        ================================= */}

        <motion.div
          className="about-skills-heading"
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="about-skills-label">
            <span></span>
            WHAT I WORK WITH
          </p>

          <h2 className="about-skills-title">
            Tools for
            <span>building.</span>
          </h2>

          <p className="about-skills-intro">
            The technologies and tools I use to turn ideas into
            functional, modern, and polished web experiences.
          </p>
        </motion.div>


        {/* =================================
            SKILLS GRID
        ================================= */}

        <div className="about-skills-grid">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                className="about-skill-card"
                key={skill.title}

                initial={{
                  opacity: 0,
                  y: 55,
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
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}

                whileHover={{
                  y: -9,
                }}
              >

                {/* =================================
                    NUMBER
                ================================= */}

                <span className="about-skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>


                {/* =================================
                    ICON
                ================================= */}

                <motion.div
                  className="about-skill-icon"
                  whileHover={{
                    rotate: -5,
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                  />
                </motion.div>


                {/* =================================
                    CONTENT
                ================================= */}

                <div className="about-skill-content">

                  <h3>
                    {skill.title}
                  </h3>

                  <p>
                    {skill.description}
                  </p>

                </div>


                {/* =================================
                    ARROW
                ================================= */}

                <motion.span
                  className="about-skill-arrow"
                  whileHover={{
                    x: 3,
                    y: -3,
                  }}
                >
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.8}
                  />
                </motion.span>

              </motion.article>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default AboutSkills;
