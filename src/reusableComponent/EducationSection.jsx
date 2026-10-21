import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from "lucide-react";
import { education, certifications } from "../data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="section-padding bg-slate-50 dark:bg-[#090d16] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono mb-3">
            <span>&lt;credentials&gt; Academic &amp; Certifications &lt;/credentials&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education &amp; Professional Certifications
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Verified academic degree and specialized technical training certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Higher Education Degree */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>Formal Education</span>
            </h3>

            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-sm dark:shadow-xl space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-white/10">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium text-sm mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-mono text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Academic Performance: {edu.grade}</span>
                </div>

                <div>
                  <h5 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>Relevant Engineering Coursework:</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCoursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-950 border border-slate-200/60 dark:border-white/5 text-slate-700 dark:text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 p-5 sm:p-6 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-white/5">
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                      {cert.credentialType}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white mt-2">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    Issued by {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
                    Focus: {cert.focus}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
