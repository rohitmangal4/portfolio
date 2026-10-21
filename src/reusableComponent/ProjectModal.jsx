import React, { useState, useEffect } from "react";
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Activity, 
  Workflow, 
  Sparkles, 
  Printer 
} from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 dark:bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/60">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              {project.isProfessionalWork && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                  Professional Product • {project.company}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confidentiality Alert if applicable */}
        {project.confidentialityNotice && (
          <div className="px-6 py-3 bg-cyan-50 dark:bg-cyan-950/40 border-b border-cyan-200 dark:border-cyan-500/20 flex items-start gap-3 text-xs text-cyan-900 dark:text-cyan-200">
            <AlertCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-cyan-700 dark:text-cyan-300">Sanitized Product Case Study: </span>
              {project.confidentialityNotice}
            </div>
          </div>
        )}

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/30 text-xs sm:text-sm">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`pb-3 px-3 font-medium transition-colors border-b-2 ${
              activeTab === "overview"
                ? "border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold"
                : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Overview &amp; Responsibilities
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("challenges")}
            className={`pb-3 px-3 font-medium transition-colors border-b-2 ${
              activeTab === "challenges"
                ? "border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold"
                : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Engineering Challenges &amp; Solutions
          </button>
          {project.id === "lifebridge-his-ehr" && (
            <button
              type="button"
              onClick={() => setActiveTab("interactive-mock")}
              className={`pb-3 px-3 font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === "interactive-mock"
                  ? "border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold"
                  : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-cyan-500" />
              <span>Interactive Bed Board Simulation</span>
            </button>
          )}
          {project.id === "atm-crackers-pos" && (
            <button
              type="button"
              onClick={() => setActiveTab("interactive-mock")}
              className={`pb-3 px-3 font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === "interactive-mock"
                  ? "border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold"
                  : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Printer className="w-3.5 h-3.5 text-cyan-500" />
              <span>POS Billing &amp; Invoice Architecture</span>
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 dark:text-slate-300 text-sm">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Problem Statement */}
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-base mb-2 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Problem Context &amp; Objective</span>
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-4 rounded-xl border border-slate-200 dark:border-white/5">
                  {project.problemStatement}
                </p>
              </div>

              {/* My Contributions */}
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-base mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Frontend Engineering Contributions &amp; Modules</span>
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {project.myContributions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-white/5 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Outcomes */}
              {project.outcomes && (
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-base mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>Verifiable Engineering Outcomes</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.outcomes.map((outcome, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-300 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm"
                      >
                        ✓ {outcome}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "challenges" && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Detailed breakdowns of complex architectural challenges tackled during implementation:
              </p>
              {project.challengesAndSolutions?.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 space-y-3"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-wide">
                      Challenge {idx + 1}
                    </span>
                    <p className="text-slate-900 dark:text-white font-semibold text-sm mt-1">
                      {item.challenge}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 dark:border-white/5">
                    <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide">
                      Technical Solution
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "interactive-mock" && project.id === "lifebridge-his-ehr" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 text-white">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-300">
                    <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span>Inpatient Bed Board Simulator (Illustrative Sanitized Concept)</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                    WebSocket Status: Connected
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <div className="text-emerald-400 font-bold text-base">Bed 101-A</div>
                    <div className="text-emerald-200 mt-1">Available</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">ICU Ward</div>
                  </div>
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30">
                    <div className="text-rose-400 font-bold text-base">Bed 101-B</div>
                    <div className="text-rose-200 mt-1">Occupied (MRN-842)</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Admitted: Dr. Sharma</div>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                    <div className="text-amber-400 font-bold text-base">Bed 102-A</div>
                    <div className="text-amber-200 mt-1">Cleaning Req</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Discharged 10m ago</div>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                    <div className="text-blue-400 font-bold text-base">Bed 102-B</div>
                    <div className="text-blue-200 mt-1">Reserved</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Pre-Op Ward</div>
                  </div>
                </div>

                <p className="mt-4 text-[11px] text-slate-400 leading-relaxed font-mono">
                  {`// Real-time synchronization is achieved via WebSocket event broadcasts. When a patient is discharged, the server emits a BED_STATUS_UPDATE payload, instantly re-rendering the AG-Grid bed board without manual page refresh.`}
                </p>
              </div>
            </div>
          )}

          {activeTab === "interactive-mock" && project.id === "atm-crackers-pos" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 text-white">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <Printer className="w-4 h-4 text-cyan-400" />
                    <span>High-Speed Counter POS Billing Pipeline</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                    Draft In-Memory Cart
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900 border border-white/10">
                    <div className="font-bold text-white mb-1">1. Hotkey Barcode Search</div>
                    <p className="text-slate-400 text-[11px]">Instant debounced product lookup with keyboard shortcuts for rapid checkout.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-white/10">
                    <div className="font-bold text-white mb-1">2. Multi-Tier Discounts</div>
                    <p className="text-slate-400 text-[11px]">Automatic wholesale vs retail pricing calculations, coupon codes, and GST breakdown.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-white/10">
                    <div className="font-bold text-white mb-1">3. Thermal &amp; A4 Print</div>
                    <p className="text-slate-400 text-[11px]">Direct jsPDF rendering to 80mm ESC/POS roll format and A4 commercial tax invoice.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Technologies Footer Bar */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/10">
            <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">Technologies &amp; Libraries Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Role: <span className="text-slate-900 dark:text-white font-medium">{project.role}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs sm:text-sm font-medium transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
