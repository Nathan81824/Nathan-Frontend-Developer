import { useEffect, useRef, useState } from "react";

import {
  Heart,
  Code2,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";


/* =========================================================
   BIG STORY CARD
========================================================= */

function StoryCard({
  number,
  title,
  highlight,
  paragraphs,
  phase,
}) {
  return (
    <article
      className={`my-story-main story-${phase}`}
    >

      {/* NUMBER */}

      <div className="my-story-number">
        {number}
      </div>


      {/* CONTENT */}

      <div className="my-story-text">

        <h3>
          {title}

          <span>
            {highlight}
          </span>
        </h3>


        <div className="my-story-paragraphs">

          {paragraphs.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            )
          )}

        </div>

      </div>

    </article>
  );
}


/* =========================================================
   SMALL STORY CARD
========================================================= */

function MiniStoryCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}) {
  return (
    <article
      className="story-mini-card"
      style={{
        "--card-delay": `${delay}s`,
      }}
    >

      {/* ICON */}

      <div className="story-mini-icon">

        <Icon
          size={21}
          strokeWidth={1.7}
        />

      </div>


      {/* CONTENT */}

      <div className="story-mini-content">

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

      </div>

    </article>
  );
}


/* =========================================================
   MY STORY
========================================================= */

function MyStory() {

  const storyRef = useRef(null);

  const [storyIndex, setStoryIndex] =
    useState(0);

  const [storyPhase, setStoryPhase] =
    useState("visible");


  /* =======================================================
     STORY DATA
  ======================================================= */

  const stories = [

    {
      number: "01",

      title:
        "I'm passionate about",

      highlight:
        "building for the web.",

      paragraphs: [

        "My journey into web development started with curiosity about how websites are created. What began as an interest quickly became something I genuinely enjoy doing.",

        "I love turning ideas into clean, responsive and interactive experiences. Every project gives me an opportunity to learn something new and improve my skills.",

        "I'm still growing, but I'm committed to learning, experimenting and building real projects that solve problems and provide a great experience for users.",

      ],
    },


    {
      number: "02",

      title:
        "I'm always focused on",

      highlight:
        "learning and improving.",

      paragraphs: [

        "I believe becoming a better developer is a continuous journey. There is always something new to discover, understand and experiment with.",

        "I enjoy challenging myself with new projects and finding better ways to turn ideas into smooth, responsive and enjoyable web experiences.",

        "My goal is to keep growing my skills while creating projects that I'm proud of and that demonstrate what I can do.",

      ],
    },


    {
      number: "03",

      title:
        "My goal is to",

      highlight:
        "build meaningful experiences.",

      paragraphs: [

        "I want to create websites and applications that are not only visually appealing but also useful, accessible and enjoyable to use.",

        "As I continue learning React and modern frontend technologies, I'm focused on turning my knowledge into real-world projects.",

        "Every project is a chance to improve, solve a new problem and become a stronger developer.",

      ],
    },

  ];


  /* =======================================================
     SCROLL REVEAL
     
     IMPORTANT:
     The visible class is both ADDED and REMOVED.
     
     This means the animation works again every time
     the elements enter the viewport.
  ======================================================= */

  useEffect(() => {

    const section =
      storyRef.current;

    if (!section) {
      return;
    }


    const elements =
      section.querySelectorAll(
        ".my-story-main, .story-mini-card, .my-story-bottom"
      );


    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                /*
                 * Element entered viewport.
                 * Play reveal animation.
                 */

                entry.target.classList.add(
                  "story-visible"
                );

              } else {

                /*
                 * Element left viewport.
                 * Remove state so animation
                 * can play again.
                 */

                entry.target.classList.remove(
                  "story-visible"
                );

              }

            }
          );

        },

        {
          threshold: 0.15,

          rootMargin:
            "0px 0px -50px 0px",
        }

      );


    elements.forEach(
      (element) => {

        observer.observe(
          element
        );

      }
    );


    return () => {

      observer.disconnect();

    };

  }, []);


  /* =======================================================
     AUTOMATIC STORY ROTATION
     
     01 → 02 → 03 → 01
  ======================================================= */

  useEffect(() => {

    const interval =
      setInterval(() => {

        /*
         * Start exit animation.
         */

        setStoryPhase(
          "changing"
        );


        /*
         * Wait for exit animation,
         * then change the content.
         */

        setTimeout(() => {

          setStoryIndex(
            (current) => {

              if (
                current ===
                stories.length - 1
              ) {

                return 0;

              }

              return current + 1;

            }
          );


          /*
           * Start entrance animation.
           */

          setStoryPhase(
            "entering"
          );

        }, 550);

      }, 6500);


    return () => {

      clearInterval(
        interval
      );

    };

  }, [stories.length]);


  /* =======================================================
     FINISH STORY ENTER ANIMATION
  ======================================================= */

  useEffect(() => {

    if (
      storyPhase !==
      "entering"
    ) {

      return;

    }


    const timer =
      setTimeout(() => {

        setStoryPhase(
          "visible"
        );

      }, 800);


    return () => {

      clearTimeout(
        timer
      );

    };

  }, [storyPhase]);


  /* =======================================================
     CURRENT STORY
  ======================================================= */

  const currentStory =
    stories[storyIndex];


  /* =======================================================
     RENDER
  ======================================================= */

  return (

    <section
      className="my-story"
      id="story"
      ref={storyRef}
    >

      <div className="my-story-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <header className="my-story-header">

          <p className="my-story-label">

            <span></span>

            My Story

          </p>


          <h2>

            More Than Just

            <span>
              Writing Code.
            </span>

          </h2>


          <p className="my-story-intro">

            A little about my journey,
            what motivates me and what
            I'm working towards as a
            frontend developer.

          </p>

        </header>



        {/* =================================================
            MAIN STORY GRID
        ================================================= */}

        <div className="my-story-grid">


          {/* =================================================
              BIG ROTATING STORY CARD
          ================================================= */}

          <StoryCard

            number={
              currentStory.number
            }

            title={
              currentStory.title
            }

            highlight={
              currentStory.highlight
            }

            paragraphs={
              currentStory.paragraphs
            }

            phase={
              storyPhase
            }

          />



          {/* =================================================
              THREE RIGHT-SIDE CARDS
          ================================================= */}

          <div className="my-story-side">


            {/* CARD 1 */}

            <MiniStoryCard

              icon={Heart}

              title="What I Love"

              description="Creating beautiful interfaces and bringing ideas to life."

              delay={0.05}

            />


            {/* CARD 2 */}

            <MiniStoryCard

              icon={Code2}

              title="What I Build"

              description="Modern, responsive and user-friendly web experiences."

              delay={0.15}

            />


            {/* CARD 3 */}

            <MiniStoryCard

              icon={Lightbulb}

              title="How I Learn"

              description="By building projects, solving problems and constantly improving."

              delay={0.25}

            />

          </div>

        </div>



        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div className="my-story-bottom">

          <div className="story-bottom-line"></div>


          <p>

            Every project is another opportunity to{" "}

            <span>
              learn, create and grow.
            </span>

          </p>


          <div className="story-bottom-icon">

            <ArrowUpRight
              size={18}
              strokeWidth={1.7}
            />

          </div>

        </div>

      </div>

    </section>

  );
}


export default MyStory;