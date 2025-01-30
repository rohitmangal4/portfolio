import { motion, delay } from "framer-motion";
import React from "react";
import { FiBriefcase } from "react-icons/fi";

const Experience = () => {
  const experinces = [
    {
      role: "UI/UX Design",
      company: "Why global Services",
      duration: "jul-2024 - sep-2024",
      description:
        "Designing and developing user interface and user experience for various applications and websites.",
    },
    {
      role: "MERN Stack Developer",
      company: "Why global Services",
      duration: "sep-2024 - jan-2024",
      description:
        "Developing and deploying full-stack applications using MERN stack.",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-[#0f141f]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-center font-bold mb-16 text-white"
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experinces.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6 rounded-xl relative"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/60 flex justify-center items-center">
                    <FiBriefcase className="h-6 w-6 text-cyan-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2">{exp.role}</h3>
                  <p className="text-gray-400 mb-2">
                    {exp.company} | {exp.duration}
                  </p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
