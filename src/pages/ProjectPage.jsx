import React from "react";
import Navbar from "../reusableComponent/NavbarComponents";
import HeroSection from "../reusableComponent/HeroSectionComponent";
import About from "../reusableComponent/AboutSection";
import Experience from "../reusableComponent/ExperienceSection";
import Projects from "../reusableComponent/ProjectsSection";

const Project = () =>{
    return(
        <div>
            <Navbar/>
            <HeroSection/>
            <About/>
            <Experience/>
            <Projects/>
        </div>
    )
}

export default Project;