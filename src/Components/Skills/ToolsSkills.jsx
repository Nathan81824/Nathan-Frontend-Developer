import { motion } from "framer-motion";
import {
  Terminal,
  Code2,
  Monitor,
} from "lucide-react";

import {
  siGit,
  siGithub,
} from "simple-icons";


const tools = [
  {
    title: "VS Code",
    description:
      "My main development environment for writing, organizing and debugging code.",
    icon: Code2,
    type: "lucide",
  },

  {
    title: "Git",
    description:
      "I use Git to track changes, manage versions and keep projects organized.",
    icon: siGit,
    type: "simple",
  },

  {
    title: "GitHub",
    description:
      "I use GitHub to store repositories, manage projects and showcase my work.",
    icon: siGithub,
    type: "simple",
  },

  {
    title: "Terminal",
    description:
      "I use the terminal to install packages, run development servers and manage projects.",
    icon: Terminal,
    type: "lucide",
  },

  {
    title: "Figma",
    description:
      "I use design tools to understand layouts, interfaces and visual ideas before building.",
    icon: "F",
    type: "text",
  },

  {
    title: "Browser DevTools",
    description:
      "I use browser developer tools to inspect, test and debug frontend interfaces.",
    icon: Monitor,
    type: "lucide",
  },
];


function ToolsSkills() {
  return (
    <section
      className="tools-skills"
      id="tools"
    >

      <div className="tools-skills-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          className="tools-skills-header"

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
            DEVELOPMENT TOOLS
          </span>


          <h2>
            Tools I use to
            <span> build.</span>
          </h2>


          <p>
            These are the tools that support my workflow,
            from writing code and managing projects to
            testing and designing interfaces.
          </p>

        </motion.div>


        {/* =========================================
            TOOLS GRID
        ========================================= */}

        <div className="tools-skills-grid">

          {tools.map((tool, index) => {

            const Icon = tool.icon;

            return (
              <motion.article

                className="tool-card"

                key={tool.title}

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

                {/* =================================
                    ICON
                ================================= */}

                <div className="tool-icon">

                  {tool.type === "simple" && (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d={Icon.path}
                        fill="currentColor"
                      />
                    </svg>
                  )}


                  {tool.type === "lucide" && (
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                    />
                  )}


                  {tool.type === "text" && (
                    <span className="tool-text-icon">
                      {Icon}
                    </span>
                  )}

                </div>


                {/* =================================
                    CONTENT
                ================================= */}

                <div className="tool-content">

                  <h3>
                    {tool.title}
                  </h3>

                  <p>
                    {tool.description}
                  </p>

                </div>


                {/* =================================
                    NUMBER
                ================================= */}

                <span className="tool-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </motion.article>
            );

          })}

        </div>

      </div>

    </section>
  );
}


export default ToolsSkills;