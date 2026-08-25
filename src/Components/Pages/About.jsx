
import AboutHero from "../About/AboutHero";
import AboutStory from "../About/AboutStory";
import AboutSkills from "../About/AboutSkills";
import AboutJourney from "../About/AboutJourney";
import AboutCTA from "../About/AboutCTA";

function About() {
  return (
    <main className="about-page">

      {/* =================================
          ABOUT HERO
      ================================= */}
      <AboutHero />


      {/* =================================
          ABOUT STORY
      ================================= */}
      <AboutStory />


      {/* =================================
          ABOUT SKILLS
      ================================= */}
      <AboutSkills />


      {/* =================================
          ABOUT JOURNEY
      ================================= */}
      <AboutJourney />


      {/* =================================
          ABOUT CTA
      ================================= */}
      <AboutCTA />

    </main>
  );
}

export default About;
