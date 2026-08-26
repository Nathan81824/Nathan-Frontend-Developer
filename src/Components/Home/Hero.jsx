import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Smartphone,
  Palette,
  Globe,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  siReact,
  siJavascript,
  siHtml5,
  siCss,
} from "simple-icons";

import typingSound from "../../assets/Sounds/Typing.mp3";



/* =========================================================
   SKILLS
========================================================= */

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
      "I create dynamic and functional web experiences using JavaScript.",
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


/* =========================================================
   CODE
========================================================= */

const codeText = `const developer = {
  name: "Nathan",
  role: "Frontend Developer",
  location: "Nigeria",
  skills: [
    "React",
    "JavaScript",
    "HTML",
    "CSS"
  ]
}`;


/* =========================================================
   HERO COMPONENT
========================================================= */

function Hero() {

  const [currentSkill, setCurrentSkill] = useState(0);

  const [typedLength, setTypedLength] = useState(0);

  const [isDeleting, setIsDeleting] = useState(false);

  const [isHeroVisible, setIsHeroVisible] = useState(true);


  const heroRef = useRef(null);

  const audioRef = useRef(null);


  const current = skills[currentSkill];


  /* =======================================================
     HERO VISIBILITY
  ======================================================= */

  useEffect(() => {

    const hero = heroRef.current;

    if (!hero) return;


    const observer = new IntersectionObserver(
      ([entry]) => {

        setIsHeroVisible(entry.isIntersecting);

      },
      {
        threshold: 0.15,
      }
    );


    observer.observe(hero);


    return () => {

      observer.disconnect();

    };

  }, []);


  /* =======================================================
     AUDIO SETUP
  ======================================================= */

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;


    audio.volume = 0.35;

    audio.preload = "auto";


    return () => {

      audio.pause();

      audio.currentTime = 0;

    };

  }, []);


  /* =======================================================
     TYPING SOUND
  ======================================================= */

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;


    const shouldPlay =
      !isDeleting &&
      typedLength > 0 &&
      typedLength < codeText.length &&
      isHeroVisible;


    if (shouldPlay) {

      if (audio.paused) {

        audio.play().catch(() => {});

      }

    } else {

      audio.pause();

      audio.currentTime = 0;

    }

  }, [
    typedLength,
    isDeleting,
    isHeroVisible,
  ]);


  /* =======================================================
     TYPING ANIMATION
  ======================================================= */

  useEffect(() => {

    let timer;


    const typingDuration = 9000;

    const typingSpeed =
      typingDuration / codeText.length;


    if (!isDeleting) {

      if (typedLength < codeText.length) {

        timer = setTimeout(() => {

          setTypedLength(
            (previous) => previous + 1
          );

        }, typingSpeed);

      } else {

        timer = setTimeout(() => {

          setIsDeleting(true);

        }, 2000);

      }

    } else {

      if (typedLength > 0) {

        timer = setTimeout(() => {

          setTypedLength(
            (previous) => previous - 1
          );

        }, 25);

      } else {

        setIsDeleting(false);

      }

    }


    return () => {

      clearTimeout(timer);

    };

  }, [
    typedLength,
    isDeleting,
  ]);


  /* =======================================================
     ROTATE SKILLS
  ======================================================= */

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentSkill(
        (previous) =>
          (previous + 1) % skills.length
      );

    }, 8000);


    return () => {

      clearInterval(timer);

    };

  }, []);


  /* =======================================================
     VISIBLE CODE
  ======================================================= */

  const visibleCode =
    codeText.slice(0, typedLength);


  /* =======================================================
     SYNTAX HIGHLIGHTING
  ======================================================= */

  const renderCode = () => {

    const elements = [];

    const regex =
      /(const|let|var)|([a-zA-Z_$][\w$]*)(?=\s*:)|(".*?")|(\d+)|([{}[\],:=])/g;


    let lastIndex = 0;

    let match;

    let key = 0;


    while (
      (match = regex.exec(visibleCode)) !== null
    ) {

      if (match.index > lastIndex) {

        elements.push(

          <span key={key++}>
            {visibleCode.slice(
              lastIndex,
              match.index
            )}
          </span>

        );

      }


      const value = match[0];


      /* KEYWORDS */

      if (match[1]) {

        elements.push(

          <span
            key={key++}
            className="code-keyword"
          >
            {value}
          </span>

        );

      }


      /* OBJECT PROPERTIES */

      else if (match[2]) {

        elements.push(

          <span
            key={key++}
            className="code-property"
          >
            {value}
          </span>

        );

      }


      /* STRINGS */

      else if (match[3]) {

        elements.push(

          <span
            key={key++}
            className="code-string"
          >
            {value}
          </span>

        );

      }


      /* NUMBERS */

      else if (match[4]) {

        elements.push(

          <span
            key={key++}
            className="code-number"
          >
            {value}
          </span>

        );

      }


      /* PUNCTUATION */

      else {

        elements.push(

          <span
            key={key++}
            className="code-punctuation"
          >
            {value}
          </span>

        );

      }


      lastIndex = regex.lastIndex;

    }


    /* REMAINING TEXT */

    if (
      lastIndex <
      visibleCode.length
    ) {

      elements.push(

        <span key={key++}>
          {visibleCode.slice(lastIndex)}
        </span>

      );

    }


    return elements;

  };


  /* =======================================================
     RETURN
  ======================================================= */

  return (

    <section
      ref={heroRef}
      className="hero"
    >


      {/* =================================================
          TYPING AUDIO
      ================================================= */}

      <audio
        ref={audioRef}
        src={typingSound}
        preload="auto"
      />


      <div className="hero-container">


        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="hero-content">


          {/* GREETING */}

          <p className="hero-greeting">

            Hello, I'm Nathan 👋

          </p>


          {/* TITLE */}

          <h1 className="hero-title">

            Frontend

            <span>
              Developer.
            </span>

          </h1>


          {/* =================================================
              SKILL CARD
          ================================================= */}

          <div
            className="hero-skill"
            key={currentSkill}
          >


            {/* SKILL ICON */}

            <div className="hero-skill-icon">

              {current.type === "simple" ? (

                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >

                  <path
                    d={current.icon.path}
                  />

                </svg>

              ) : (

                (() => {

                  const Icon =
                    current.icon;

                  return (

                    <Icon
                      size={24}
                      strokeWidth={2}
                    />

                  );

                })()

              )}

            </div>


            {/* SKILL CONTENT */}

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


          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="hero-buttons">


            <Link
              to="/projects"
              className="hero-primary-btn"
            >

              View My Work

              <ArrowRight
                size={18}
                strokeWidth={2}
              />

            </Link>


            <Link
              to="/contact"
              className="hero-secondary-btn"
            >

              Contact Me

            </Link>


          </div>


          {/* =================================================
              SOCIAL LINKS
          ================================================= */}

          <div className="hero-socials">


            <a
              href="https://github.com/Nathan81824/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Nathan's GitHub"
            >

              <FaGithub
                size={18}
              />

              <span>
                GitHub →
              </span>

            </a>


            <a
              href="https://www.linkedin.com/in/nathan-moses-b13b143bb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Nathan's LinkedIn"
            >

              <FaLinkedin
                size={18}
              />

              <span>
                LinkedIn →
              </span>

            </a>


          </div>


        </div>


        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="hero-visual">


          <div className="hero-card">


            {/* =================================================
                CODE HEADER
            ================================================= */}

            <div className="code-header">


              <span></span>

              <span></span>

              <span></span>


              <span className="code-header-title">
                developer.js
              </span>


            </div>


            {/* =================================================
                CODE CONTENT
            ================================================= */}

            <div className="code-content">


              <pre className="typing-code">

                {renderCode()}


                <span className="code-typing-cursor">
                  |
                </span>

              </pre>


            </div>


          </div>


        </div>


      </div>


    </section>

  );

}


export default Hero;