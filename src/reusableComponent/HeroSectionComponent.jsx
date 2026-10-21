import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Download, 
  Github, 
  Linkedin, 
  MapPin, 
  CheckCircle2, 
  Terminal
} from "lucide-react";
import { personalInfo, stats } from "../data/portfolioData";
import profilePhoto from "../assets/myportPhoto.png";

const HeroSection = () => {
  const [heartbeat, setHeartbeat] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeartbeat((prev) => !prev);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center section-padding pt-28 md:pt-36 overflow-hidden bg-grid-pattern transition-colors duration-300"
    >
      {/* Decorative Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-cyan-500/10 dark:bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 border border-cyan-500/40 w-fit backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                {personalInfo.availabilityText}
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm md:text-base font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                <span>Hello, I am</span>
                <span className="text-slate-400 dark:text-slate-500">/</span>
                <span className="text-slate-800 dark:text-slate-300 font-semibold">{personalInfo.name}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Building Modern Web Experiences with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">
                  React, Next.js
                </span>{" "}
                &amp; TypeScript.
              </h1>
            </div>

            {/* Professional Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Frontend Developer with <span className="text-cyan-700 dark:text-cyan-300 font-semibold">1+ year</span> of professional experience at <span className="text-slate-900 dark:text-white font-semibold">GegoSoft Technologies</span> building enterprise healthcare (HIS/EHR) and omnichannel POS applications. Specialized in real-time WebSockets, AG-Grid data tables, and reusable component systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold text-sm md:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={personalInfo.resumeDownloadUrl}
                download={personalInfo.resumeFilename}
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-900 dark:text-white font-medium text-sm md:text-base border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-200 flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Verified Social & Contact Quick Links */}
            <div className="flex flex-wrap items-center gap-5 pt-3 text-slate-600 dark:text-slate-400 text-sm">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span className="font-mono text-xs">github.com/rohitmangal4</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span className="font-mono text-xs">linkedin.com/in/mangaleswaran-mn</span>
              </a>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Paramakudi, TN, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Developer Profile & Live Architecture Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 dark:from-cyan-500/30 dark:to-indigo-500/30 rounded-3xl blur-xl opacity-70"></div>

              {/* Developer Profile Card */}
              <div className="relative rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-2xl p-6 backdrop-blur-xl">
                
                {/* Header with Verified Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={profilePhoto}
                        alt="Mangaleswaran M N"
                        className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500 shadow-md shadow-cyan-500/20"
                      />
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
                    </div>
                    <div>
                      <h2 className="text-slate-900 dark:text-white font-bold text-base flex items-center gap-1.5">
                        {personalInfo.name}
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 fill-cyan-500/20" />
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        Frontend Developer @ GegoSoft
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                    Active Dev
                  </span>
                </div>

                {/* Interactive Mini Architecture Terminal */}
                <div className="mt-4 rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>architecture-summary.ts</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                      <span className={`w-2 h-2 rounded-full ${heartbeat ? "bg-emerald-400" : "bg-emerald-600"} transition-colors`}></span>
                      <span>WS LIVE</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-slate-300 leading-relaxed">
                    <p className="text-slate-500">{`// Production Product Stack`}</p>
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-yellow-300">coreEngine</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-400">framework</span>: <span className="text-emerald-300">&apos;Next.js / React 19&apos;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-400">language</span>: <span className="text-emerald-300">&apos;TypeScript (Strict)&apos;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-400">stateSync</span>: <span className="text-emerald-300">&apos;TanStack Query + RTK&apos;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-400">realTime</span>: <span className="text-emerald-300">&apos;WebSockets (Bed Board)&apos;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-400">dataGrid</span>: <span className="text-emerald-300">&apos;AG-Grid Enterprise&apos;</span>,
                    </p>
                    <p>&#125;;</p>
                  </div>
                </div>

                {/* Micro Stats Row inside the card */}
                <div className="mt-4 grid grid-cols-2 gap-3 pt-3 border-t border-slate-200 dark:border-white/5">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/40 border border-slate-200/60 dark:border-white/5">
                    <div className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">1+ Year</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Full-time Frontend Experience</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/40 border border-slate-200/60 dark:border-white/5">
                    <div className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">HIS / EHR</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Enterprise Clinical Platform</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Key Metric Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 hover:border-cyan-500/40 transition-colors shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-300">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {item.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
