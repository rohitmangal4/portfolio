import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Building } from "lucide-react";
import { projects } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "enterprise", label: "Enterprise & Healthcare" },
    { id: "commerce", label: "E-Commerce & POS" },
    { id: "fullstack", label: "Full Stack & Interactive" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "enterprise") return project.category.toLowerCase().includes("healthcare");
    if (selectedFilter === "commerce") return project.category.toLowerCase().includes("commerce");
    if (selectedFilter === "fullstack") return !project.isFlagship;
    return true;
  });

  return (
    <section id="projects" className="section-padding bg-slate-100/60 dark:bg-[#0c101d] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono mb-3">
            <span>&lt;portfolio&gt; Featured Work &lt;/portfolio&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production Products &amp; Engineering Projects
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            From hospital-scale enterprise systems to high-speed point-of-sale applications, showcasing frontend engineering with React, Next.js, and TypeScript.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedFilter === filter.id
                  ? "bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                  : "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-white/10 shadow-sm"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isFlagship = project.isFlagship;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden bg-white dark:bg-slate-900/80 border transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl ${
                  isFlagship
                    ? "border-cyan-500/40 shadow-cyan-500/5 hover:border-cyan-500/70 lg:col-span-1"
                    : "border-slate-200 dark:border-white/10 hover:border-cyan-500/40"
                }`}
              >
                <div>
                  {/* Project Image and Overlays */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                    {/* Category & Status Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-900/90 text-cyan-300 border border-white/10 backdrop-blur-md">
                        {project.category}
                      </span>
                      {project.isProfessionalWork && (
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-indigo-600/90 text-white backdrop-blur-md flex items-center gap-1 shadow-sm">
                          <Building className="w-3 h-3" />
                          <span>GegoSoft Work</span>
                        </span>
                      )}
                    </div>

                    {/* Title overlay at bottom of image */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Role & Period Info */}
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono pt-2 border-t border-slate-100 dark:border-white/5">
                      <span>Role: <strong className="text-slate-800 dark:text-slate-200">{project.role}</strong></span>
                      <span>{project.period}</span>
                    </div>

                    {/* Technologies tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 5).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 sm:p-6 pt-0 mt-auto">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-cyan-500 hover:text-slate-950 text-slate-800 dark:bg-slate-800/90 dark:hover:bg-cyan-500 dark:hover:text-slate-950 dark:text-white border border-slate-200 dark:border-white/10 hover:border-cyan-400 transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-sm"
                  >
                    <span>Inspect Case Study &amp; Architecture</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
