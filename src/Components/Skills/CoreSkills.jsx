import { motion } from "framer-motion";
import {
  Code2,
  Braces,
  GitBranch,
  Terminal,
  Database,
  FileCode2,
} from "lucide-react";

const coreSkills = [
  {
    name: "JavaScript",
    description:
      "Building interactive functionality, logic, and dynamic web experiences.",
    icon: Braces,
    level: "Advanced",
  },
  {
    name: "React",
    description:
      "Creating reusable components and modern interactive interfaces.",
    icon: Code2,
    level: "Advanced",
  },
  {
    name: "HTML5",
    description:
      "Writing semantic, accessible, and well-structured web pages.",
    icon: FileCode2,
    level: "Advanced",
  },
  {
    name: "CSS3",
    description:
      "Creating responsive layouts, animations, effects, and polished interfaces.",
    icon: Code2,
    level: "Advanced",
  },
  {
    name: "Git & GitHub",
    description:
      "Managing projects, tracking changes, and collaborating with code repositories.",
    icon: GitBranch,
    level: "Intermediate",
  },
  {
    name: "Command Line",
    description:
      "Using the terminal to manage projects, packages, Git, and development workflows.",
    icon: Terminal,
    level: "Intermediate",
  },
  {
    name: "APIs",
    description:
      "Connecting frontend applications to external data and services.",
    icon: Database,
    level: "Intermediate",
  },
];

function CoreSkills() {
  return (
    <section className="core-skills" id="core-skills">
      <div className="core-skills-container">

        {/* HEADER */}
        <motion.div
          className="core-skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="skills-section-label">
            CORE TECHNOLOGIES
          </span>

          <h2>
            The technologies I
            <span> build with.</span>
          </h2>

          <p>
            These are the technologies I use to turn ideas into
            functional, responsive, and interactive web experiences.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="core-skills-grid">
          {coreSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                className="core-skill-card"
                key={skill.name}
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
              >
                {/* ICON */}
                <div className="core-skill-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                {/* CONTENT */}
                <div className="core-skill-content">
                  <div className="core-skill-top">
                    <h3>{skill.name}</h3>

                    <span className="core-skill-level">
                      {skill.level}
                    </span>
                  </div>

                  <p>{skill.description}</p>
                </div>

                {/* BOTTOM ACCENT */}
                <div className="core-skill-line" />
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default CoreSkills;