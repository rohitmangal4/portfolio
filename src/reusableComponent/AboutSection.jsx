import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  Workflow, 
  Zap, 
  FileCheck, 
  Briefcase, 
  GraduationCap, 
  Download,
  ArrowRight
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import formalPhoto from "../assets/MyPhotoNew.png";

const About = () => {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      title: "Modular Component Architecture",
      description: "Building scalable, type-safe React and Next.js design systems with strict TypeScript interfaces, reusable primitives, and WCAG accessibility standards."
    },
    {
      icon: <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      title: "Real-Time & Data-Intensive UI",
      description: "Delivering low-latency WebSocket live state synchronization for clinical bed boards and enterprise AG-Grid / TanStack Table data virtualization."
    },
    {
      icon: <FileCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      title: "Form Engines & Document Systems",
      description: "Creating schema-driven dynamic questionnaire builders with conditional validation (Yup/Zod), HTML5 Canvas vector signatures, and client-side jsPDF rendering."
    },
    {
      icon: <Workflow className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      title: "Frontend Performance & Security",
      description: "Implementing client-side caching, request deduplication, lazy route boundaries, role-based access control (RBAC), and automatic JWT refresh interceptors."
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-100/60 dark:bg-[#0c101d] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono mb-3">
            <span>&lt;section&gt; About Mangaleswaran &lt;/section&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Clean Interfaces for Complex Products
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A developer who bridges user experience with rigorous frontend engineering, turning demanding enterprise workflows into intuitive, responsive web platforms.
          </p>
        </div>

        {/* Narrative & Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Photo & Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-2xl blur-lg"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-2xl">
                <img
                  src={formalPhoto}
                  alt="Mangaleswaran M N in professional attire"
                  className="w-full h-[430px] object-cover object-top filter contrast-[1.03]"
                />
                
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm">{personalInfo.name}</p>
                      <p className="text-xs text-cyan-300 font-mono">Frontend Developer</p>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-white/10">
                      GegoSoft Technologies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Storytelling & Background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              <p>
                I am a <strong className="text-slate-900 dark:text-white">Frontend Developer</strong> with over a year of full-time professional experience at <span className="text-cyan-700 dark:text-cyan-300 font-semibold">GegoSoft Technologies</span> and a previous 10-month full-stack development internship at <span className="text-slate-800 dark:text-slate-200 font-medium">Why Global Services</span>.
              </p>
              <p>
                My daily work centers around architecting and maintaining production-grade applications using <strong className="text-slate-900 dark:text-white">React.js, Next.js, and TypeScript</strong>. I play an active role in developing <span className="text-slate-900 dark:text-white font-semibold">LifeBridge / SmartDocx AI</span>, an enterprise Hospital Information System (HIS) and Electronic Health Records (EHR) platform powering modern clinical and hospital workflows.
              </p>
              <p>
                Whether building a real-time inpatient bed board powered by WebSockets, creating schema-driven form engines with conditional validation, or rendering thousands of patient records with AG-Grid and TanStack Table, I prioritize reliability, maintainability, and clean user experience.
              </p>
              <p>
                I hold a <strong className="text-slate-900 dark:text-white">Master of Computer Applications (MCA)</strong> degree from Hindustan College of Engineering &amp; Technology (CGPA 7.93 / 10), providing me with solid foundations in data structures, web technologies, and software engineering principles.
              </p>
            </div>

            {/* Quick Credentials Summary */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 shadow-sm">
                <Briefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Current: GegoSoft Technologies (OPC) Pvt. Ltd.</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 shadow-sm">
                <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>MCA Graduate: 7.93 / 10 CGPA (2024)</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.resumeDownloadUrl}
                download={personalInfo.resumeFilename}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors shadow-md shadow-cyan-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Verified CV</span>
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium text-sm border border-slate-200 dark:border-white/10 transition-colors shadow-sm"
              >
                <span>View Career Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 4 Engineering Pillars */}
        <div className="mt-8">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Core Engineering Focus &amp; Competencies
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              How I structure and deliver modern frontend solutions in production environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
