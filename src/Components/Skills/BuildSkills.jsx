import {
  Globe,
  LayoutDashboard,
  Smartphone,
  ShoppingCart,
  FileText,
  Code2,
} from "lucide-react";

import clsx from "clsx";

const projects = [
  {
    title: "Landing Pages",
    description:
      "Modern landing pages focused on strong visual design, clear content, and responsive layouts.",
    icon: Globe,
  },
  {
    title: "Web Applications",
    description:
      "Interactive React applications with reusable components, state management, and dynamic interfaces.",
    icon: Code2,
  },
  {
    title: "Dashboards",
    description:
      "Clean dashboard interfaces for displaying information, statistics, and application data.",
    icon: LayoutDashboard,
  },
  {
    title: "Responsive Websites",
    description:
      "Websites designed to work smoothly across desktops, tablets, and mobile devices.",
    icon: Smartphone,
  },
  {
    title: "Business Websites",
    description:
      "Professional websites that help businesses present their services, projects, and information online.",
    icon: FileText,
  },
  {
    title: "E-commerce Interfaces",
    description:
      "Product-focused interfaces with clean layouts, navigation, cards, and shopping experiences.",
    icon: ShoppingCart,
  },
];

function BuildSkills() {
  return (
    <section className="skills-build" id="build">
      <div className="skills-container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="skills-section-heading">
          <span className="skills-section-label">
            WHAT I BUILD
          </span>

          <h2>
            Turning Skills Into
            <span>Real Projects.</span>
          </h2>

          <p>
            I use my frontend skills to turn ideas into practical,
            responsive, and visually engaging web experiences.
          </p>
        </div>

        {/* =========================================
            BUILD GRID
        ========================================= */}

        <div className="build-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className={clsx(
                  "build-card",
                  `build-card-${index + 1}`
                )}
              >
                {/* ICON */}

                <div className="build-icon">
                  <Icon
                    size={26}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                {/* CONTENT */}

                <div className="build-content">
                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>
                </div>

                {/* CARD NUMBER */}

                <span className="build-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default BuildSkills;