import { motion } from "framer-motion";
import React from "react";
import { FiBriefcase } from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      role: "UI/UX Design",
      company: "Why Global Services",
      duration: "Jul 2024 - Sep 2024",
      description:
        "Focused on designing intuitive and responsive user interfaces, ensuring seamless user experiences across web platforms. Worked on improving usability and creating visually appealing designs.",
    },
    {
      role: "MERN Stack Developer",
      company: "Why Global Services",
      duration: "Sep 2024 - Jan 2025",
      description:
        "Developing dynamic web applications using MongoDB, Express, React, and Node.js. Gaining hands-on experience in both front-end and back-end technologies to build robust, scalable solutions.",
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
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6 md:p-8 rounded-xl relative"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-500/20 border border-cyan-500/60 flex justify-center items-center">
                    <FiBriefcase className="h-5 w-5 md:h-6 md:w-6 text-cyan-500" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2">
                    {exp.role}
                  </h3>
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
