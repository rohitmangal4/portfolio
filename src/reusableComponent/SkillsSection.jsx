import React from "react";
import { motion } from "framer-motion"

const Skills = () =>{

    const skillset = [
        {
          category: "Frontend",
          items: ["HTML5", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS", "Redux"]
        },
        {
          category: "Backend",
          items: ["Node.js", "Express", "Python", "Flask", "MangoDB", "MySql"]
        },
        {
          category: "Tools & Others",
          items: ["Git", "GitHub", "VS Code", "Figma", "Postman"]
        }
      ];

    return(
        <section id="skills" className="section-padding bg-[#0f141f]">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-white text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Skills
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillset.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{ duration: 0.5, delay: index * 0.2}}
                            className="glass-card p-6 rounded-lg"
                        >
                            <h3 className="text-xl font-semibold text-center mb-6 text-white/80">
                                {skill.category}
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {skill.items.map((skillset, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        initial={{ width : 0}}
                                        whileInView={{ width: "100% "}}
                                        transition={{ duration:0.8, delay: skillIndex * 0.1}}
                                        className="relative"
                                    >
                                        <div className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/50 text-cyan-300">
                                            {skillset}
                                        </div>
                                    </motion.div>
                                ))}

                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Skills