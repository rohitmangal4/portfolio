import React from "react";
import { Link } from "react-router-dom";
import { Home, Terminal } from "lucide-react";
import pageNotImg from "../assets/Error - 404-2.jpg";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full rounded-2xl bg-slate-900/80 border border-white/10 p-8 shadow-2xl backdrop-blur-xl space-y-6">
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
          <Terminal className="w-6 h-6" />
        </div>

        <div>
          <span className="text-xs font-mono font-bold text-cyan-400">ERROR 404</span>
          <h1 className="text-2xl font-bold text-white mt-1">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            The route you navigated to does not exist or has been relocated in the portfolio architecture.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-950">
          <img src={pageNotImg} alt="404 error visual" className="w-full h-48 object-cover filter contrast-105" />
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors shadow-md shadow-cyan-500/20"
        >
          <Home className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;