import { Code2, Lightbulb, Rocket, Sparkles } from "lucide-react";
import clsx from "clsx";

const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I first understand the goal, users, and requirements before writing any code.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I break the project into components, features, sections, and a clear development plan.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Build",
    description:
      "I build the interface with React, reusable components, clean CSS, and modern frontend tools.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Improve",
    description:
      "I test the experience, fix problems, improve responsiveness, and refine the details.",
    icon: Sparkles,
  },
];

function Approach() {
  return (
    <section className="skills-approach" id="approach">
      <div className="skills-container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="skills-section-heading">
          <span className="skills-section-label">
            MY APPROACH
          </span>

          <h2>
            How I Build
            <span>Web Experiences.</span>
          </h2>

          <p>
            From the first idea to the final interface, I focus on
            building websites that are clean, functional, responsive,
            and enjoyable to use.
          </p>
        </div>

        {/* =========================================
            APPROACH GRID
        ========================================= */}

        <div className="approach-grid">
          {approachSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className={clsx(
                  "approach-card",
                  `approach-card-${index + 1}`
                )}
              >

                {/* NUMBER */}

                <span className="approach-number">
                  {step.number}
                </span>

                {/* ICON */}

                <div className="approach-icon">
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                {/* CONTENT */}

                <div className="approach-content">

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Approach;