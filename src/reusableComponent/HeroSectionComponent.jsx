import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/myportPhoto.png"

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-[#0f141f]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white/70">
            Hi, I'm <span className="text-cyan-500/80">Mangaleswaran</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            A passionate Full Stack Developer crafting beautiful web experiences
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-cyan-500 text-black font-medium hover:bg-[#0f141f] hover:border-2 hover:border-cyan-500 hover:text-white transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="animate-float"
        >
          <div className="relative w-72 h-72 mx-auto md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-cyan-500/40 blur-2xl"></div>
            <img
              src={Image}
              alt="Profile"
              className="relative rounded-full w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
