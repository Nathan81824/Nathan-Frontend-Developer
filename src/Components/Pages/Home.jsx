import Hero from "../Home/Hero";
import Services from "../Home/Services";
import Skills from "../Home/Skills";
import Journey from "../Home/Journey";
import About from "../Home/About";
import ContactHero from "../Contact/ContactHero";

function Home() {
  return (
    <main>

      {/* =================================
          HERO SECTION
      ================================= */}
      <Hero />


      {/* =================================
          SERVICES SECTION
      ================================= */}
      <Services />


      {/* =================================
          SKILLS SECTION
      ================================= */}
      <Skills />


      {/* =================================
          JOURNEY SECTION
      ================================= */}
      <Journey />


      {/* =================================
          ABOUT SECTION
      ================================= */}
      <About />


      {/* =================================
          CONTACT SECTION
      ================================= */}
      <ContactHero />

    </main>
  );
}

export default Home;
