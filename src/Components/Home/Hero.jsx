import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Atom,
  Braces,
  Code2,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react";

function Hero() {
  const skills = [
    {
      title: "React Developer",
      description:
        "I build modern and interactive web applications using React.",
      icon: Atom,
    },
    {
      title: "JavaScript Developer",
      description:
        "I create dynamic and functional web experiences with JavaScript.",
      icon: Braces,
    },
    {
      title: "HTML & CSS Developer",
      description:
        "I build clean, structured and visually appealing websites.",
      icon: Code2,
    },
    {
      title: "UI Developer",
      description:
        "I turn ideas into clean and user-friendly web interfaces.",
      icon: Palette,
    },
    {
      title: "Responsive Web Developer",
      description:
        "I build websites that work smoothly across phones, tablets and desktops.",
      icon: Smartphone,
    },
    {
      title: "Frontend Developer",
      description:
        "I build modern websites and web applications for the web.",
      icon: Globe,
    },
  ];

  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSkill((previous) => {
        return (previous + 1) % skills.length;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const current = skills[currentSkill];

  const SkillIcon = current.icon;

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
            Frontend Developer
          </h1>


          {/* =========================
              CHANGING SKILL
          ========================== */}

          <div
            className="hero-skill"
            key={currentSkill}
          >

            <div className="hero-skill-icon">
              <SkillIcon size={24} />
            </div>

            <div className="hero-skill-content">

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

            {/* CODE WINDOW HEADER */}

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