
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Smartphone,
  Palette,
  Globe,
} from "lucide-react";

import {
  siReact,
  siJavascript,
  siHtml5,
  siCss,
} from "simple-icons";

const skills = [
  {
    title: "React Developer",
    description:
      "I build modern and interactive web applications using React.",
    icon: siReact,
    type: "simple",
  },
  {
    title: "JavaScript Developer",
    description:
      "I create dynamic and functional web experiences with JavaScript.",
    icon: siJavascript,
    type: "simple",
  },
  {
    title: "HTML Developer",
    description:
      "I build clean, semantic and well-structured websites.",
    icon: siHtml5,
    type: "simple",
  },
  {
    title: "CSS Developer",
    description:
      "I create responsive and visually appealing interfaces with CSS.",
    icon: siCss,
    type: "simple",
  },
  {
    title: "UI Developer",
    description:
      "I turn ideas into clean, intuitive and user-friendly interfaces.",
    icon: Palette,
    type: "lucide",
  },
  {
    title: "Responsive Web Developer",
    description:
      "I build websites that work smoothly across phones, tablets and desktops.",
    icon: Smartphone,
    type: "lucide",
  },
  {
    title: "Frontend Developer",
    description:
      "I combine modern technologies to create engaging web experiences.",
    icon: Globe,
    type: "lucide",
  },
];

function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSkill((previous) => (previous + 1) % skills.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const current = skills[currentSkill];

  return (
    <section className="hero">
      <div className="hero-container">

        {/* =========================
            LEFT SIDE
        ========================== */}

        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm Nathan 👋
          </p>

          <h1 className="hero-title">
            Frontend
            <span>Developer.</span>
          </h1>


          {/* =========================
              CHANGING SKILL
          ========================== */}

          <div
            className="hero-skill"
            key={currentSkill}
          >

            <div className="hero-skill-icon">

              {current.type === "simple" ? (
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d={current.icon.path} />
                </svg>
              ) : (
                (() => {
                  const Icon = current.icon;

                  return (
                    <Icon
                      size={24}
                      strokeWidth={2}
                    />
                  );
                })()
              )}

            </div>


            <div className="hero-skill-content">

              <p className="hero-skill-label">
                Currently working with
              </p>

              <h2>
                {current.title}
              </h2>

              <p className="hero-description">
                {current.description}
              </p>

            </div>

          </div>


          {/* =========================
              BUTTONS
          ========================== */}

          <div className="hero-buttons">

            <Link
              to="/projects"
              className="hero-primary-btn"
            >
              View My Work
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="hero-secondary-btn"
            >
              Contact Me
            </Link>

          </div>


          {/* =========================
              SOCIAL LINKS
          ========================== */}

          <div className="hero-socials">

            <a
              href="https://github.com/Nathan81824/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub →
            </a>

            <a
              href="https://www.linkedin.com/in/nathan-moses-b13b143bb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn →
            </a>

          </div>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div className="hero-visual">

          <div className="hero-card">

            {/* CODE HEADER */}

            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>


            {/* CODE */}

            <div className="code-content">

              <p>
                <span className="code-keyword">
                  const
                </span>{" "}
                developer = {"{"}
              </p>

              <p>
                &nbsp;&nbsp;name:{" "}
                <span className="code-string">
                  "Nathan"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;role:{" "}
                <span className="code-string">
                  "Frontend Developer"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;location:{" "}
                <span className="code-string">
                  "Nigeria"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;skills: [
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-string">
                  "React"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-string">
                  "JavaScript"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-string">
                  "HTML"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-string">
                  "CSS"
                </span>
              </p>

              <p>
                &nbsp;&nbsp;]
              </p>

              <p>
                {"}"}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

