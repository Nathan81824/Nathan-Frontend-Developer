
import Hero from "../Home/Hero";
import Journey from "../Home/Journey";
import Services from "../Home/Services";
import Skills from "../Home/Skills";




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


      <Skills/>

      <Journey/>

    </main>
  );
}

export default Home;
