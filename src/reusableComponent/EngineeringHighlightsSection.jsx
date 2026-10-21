import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  CheckCircle2, 
  Copy, 
  Check
} from "lucide-react";
import { engineeringHighlights } from "../data/portfolioData";

const EngineeringHighlights = () => {
  const [activeHighlightId, setActiveHighlightId] = useState(engineeringHighlights[0].id);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const activeHighlight = engineeringHighlights.find(h => h.id === activeHighlightId) || engineeringHighlights[0];

  const handleCopyCode = (snippet) => {
    navigator.clipboard.writeText(snippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="highlights" className="section-padding bg-slate-50 dark:bg-[#090d16] border-t border-slate-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono mb-3">
            <span>&lt;architecture&gt; Frontend Engineering &lt;/architecture&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Approaches &amp; Implementation Details
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Concrete technical implementations from production hospital software and high-speed POS applications.
          </p>
        </div>

        {/* Highlights Selector and Interactive Code View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Highlight Selection List */}
          <div className="lg:col-span-5 space-y-3">
            {engineeringHighlights.map((item) => {
              const isSelected = activeHighlightId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveHighlightId(item.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col gap-2 ${
                    isSelected
                      ? "bg-white dark:bg-slate-900 border-cyan-500/50 shadow-md dark:shadow-xl dark:shadow-cyan-500/5 ring-1 ring-cyan-500/20"
                      : "bg-white/80 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 hover:bg-white dark:hover:bg-slate-900/70 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                      {item.badge}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dive & Code Snippet View */}
          <motion.div
            key={activeHighlight.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-sm dark:shadow-2xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-white/10">
              <div>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                  {activeHighlight.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {activeHighlight.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              {activeHighlight.description}
            </p>

            {/* Key Implementation Points */}
            <div className="mt-6 space-y-2.5">
              <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Technical Highlights:
              </h4>
              {activeHighlight.keyPoints.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            {/* Code Snippet Box (Dark IDE aesthetic for code) */}
            <div className="mt-6 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>implementation-sample.ts</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyCode(activeHighlight.codeSnippet)}
                  className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white transition-colors"
                >
                  {copiedSnippet ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy snippet</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 overflow-x-auto text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                <code>{activeHighlight.codeSnippet}</code>
              </pre>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default EngineeringHighlights;
