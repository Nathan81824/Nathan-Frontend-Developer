import SkillsHero from "../Skills/SkillsHero";
import CoreSkills from "../Skills/CoreSkills";
import StylingSkills from "../Skills/StylingSkills";
import ToolsSkills from "../Skills/ToolsSkills";
import BuildSkills from "../Skills/BuildSkills";
import LibrariesSkills from "../Skills/LibrariesSkills";
import Approach from "../Skills/Approach";
import SkillsCTA from "../Skills/SkillsCTA";

function Skills() {
  return (
    <main className="skills-page">

      {/* =========================================
          SKILLS HERO
      ========================================= */}

      <SkillsHero />


      {/* =========================================
          CORE SKILLS
      ========================================= */}

      <CoreSkills />


      {/* =========================================
          STYLING & UI
      ========================================= */}

      <StylingSkills />


      {/* =========================================
          DEVELOPMENT TOOLS
      ========================================= */}

      <ToolsSkills />


      {/* =========================================
          BUILD SKILLS
      ========================================= */}

      <BuildSkills />


      {/* =========================================
          LIBRARIES
      ========================================= */}

      <LibrariesSkills />


      {/* =========================================
          DEVELOPMENT APPROACH
      ========================================= */}

      <Approach />


      {/* =========================================
          CALL TO ACTION
      ========================================= */}

      <SkillsCTA />

    </main>
  );
}

export default Skills;