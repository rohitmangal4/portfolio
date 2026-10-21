import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building } from "lucide-react";
import { experience } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-[#090d16] relative border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono mb-3">
            <span>&lt;career&gt; Work Experience &lt;/career&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience &amp; Track Record
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Distinguishing full-time product engineering experience and full-stack development internship.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500/50 to-transparent"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
              >
                {/* Timeline Icon Node */}
                <div className="relative z-10 shrink-0 sm:mt-1">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border shadow-xl ${
                    exp.isCurrent
                      ? "bg-gradient-to-tr from-cyan-500 to-indigo-600 border-cyan-400/60 shadow-cyan-500/20 text-slate-950"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 text-cyan-600 dark:text-cyan-400"
                  }`}>
                    {exp.isCurrent ? (
                      <Building className="w-7 h-7 text-slate-950 font-bold" />
                    ) : (
                      <Briefcase className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    )}
                  </div>
                  {exp.isCurrent && (
                    <span className="hidden sm:block absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-slate-50 dark:ring-[#090d16]"></span>
                  )}
                </div>

                {/* Experience Card */}
                <div className="w-full rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 p-6 sm:p-8 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300 shadow-sm dark:shadow-xl">
                  
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-white/10">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                            Present Role
                          </span>
                        )}
                      </div>
                      <p className="text-base text-cyan-600 dark:text-cyan-400 font-medium mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 space-y-1">
                      <div className="flex items-center gap-1.5 font-mono text-slate-700 dark:text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                        <span className="text-slate-400">•</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{exp.employmentType}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Note */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 font-normal leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities Bullets */}
                  <ul className="mt-4 space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Chips */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2">Technologies:</span>
                    {exp.skills.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
