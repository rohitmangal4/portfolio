import React, { useState } from "react";
import Navbar from "../reusableComponent/NavbarComponents";
import HeroSection from "../reusableComponent/HeroSectionComponent";
import About from "../reusableComponent/AboutSection";
import Experience from "../reusableComponent/ExperienceSection";
import Projects from "../reusableComponent/ProjectsSection";
import EngineeringHighlights from "../reusableComponent/EngineeringHighlightsSection";
import Skills from "../reusableComponent/SkillsSection";
import Education from "../reusableComponent/EducationSection";
import Contact from "../reusableComponent/ContactSection";
import Footer from "../reusableComponent/FooterComponent";
import ResumeModal from "../reusableComponent/ResumeModal";

const ProjectPage = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />
      
      <main id="main-content" className="flex-1">
        <HeroSection onOpenResume={() => setIsResumeModalOpen(true)} />
        <About onOpenResume={() => setIsResumeModalOpen(true)} />
        <Experience />
        <Projects />
        <EngineeringHighlights />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default ProjectPage;