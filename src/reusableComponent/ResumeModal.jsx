import React, { useEffect, useState } from "react";
import { X, Download, ExternalLink, FileText, Copy, Check, Briefcase, GraduationCap } from "lucide-react";
import { personalInfo, experience, education, stats } from "../data/portfolioData";

const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(personalInfo.bio);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 dark:bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Curriculum Vitae / Resume
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Mangaleswaran M N • Verified Document
              </p>
            </div>
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

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300">
          
          {/* Executive Overview Box */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-white/5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                Professional Summary
              </span>
              <button
                type="button"
                onClick={handleCopySummary}
                className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Summary</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/5 text-center">
                <div className="text-cyan-600 dark:text-cyan-400 font-bold text-base">{item.value}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Experience Recap */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Employment History</span>
            </h4>
            <div className="space-y-3">
              {experience.map((exp, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white">
                    <span>{exp.role}</span>
                    <span className="font-mono text-cyan-700 dark:text-cyan-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {exp.company} • {exp.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Recap */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Academic Qualification</span>
            </h4>
            <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/5 space-y-1">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white">
                <span>{education[0].degree}</span>
                <span className="font-mono text-cyan-700 dark:text-cyan-400">{education[0].period}</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                {education[0].institution} • {education[0].grade}
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950 flex flex-wrap items-center justify-between gap-3">
          <a
            href={personalInfo.resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 font-mono transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open PDF in new tab</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Close
            </button>
            <a
              href={personalInfo.resumeDownloadUrl}
              download={personalInfo.resumeFilename}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
