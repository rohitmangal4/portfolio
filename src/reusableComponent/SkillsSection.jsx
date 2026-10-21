import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Layers, 
  Radio, 
  TableProperties, 
  FileCheck2, 
  Wrench
} from "lucide-react";
import { skillCategories } from "../data/portfolioData";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const icons = {
    frontend: <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    "state-data": <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    realtime: <Radio className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    "ui-tables": <TableProperties className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    "docs-canvas": <FileCheck2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    "backend-security": <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    "tools-performance": <Wrench className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
  };

  const displayedCategories = activeCategory === "all"
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="section-padding bg-slate-100/60 dark:bg-[#0c101d] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono mb-3">
            <span>&lt;stack&gt; Technical Capabilities &lt;/stack&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Technical Skills &amp; Stack
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Grouped by architectural domain. Each skill represents hands-on production or project implementation without arbitrary percentage bars.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                : "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-white/10 shadow-sm"
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                  : "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-white/10 shadow-sm"
              }`}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 p-6 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-white/10">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    {icons[category.id] || <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges with Application Context */}
                <div className="mt-4 space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                          <span>{skill.name}</span>
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-mono">
                        {skill.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
