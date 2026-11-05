import React from "react";
import Link from "next/link";
import { GraduationCap, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-[#080E21] via-[#0D183E] to-[#0A1128] text-white flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-[#121E4A] rounded-3xl p-8 border border-blue-800/80 shadow-2xl text-center space-y-6">
        <div className="w-20 h-20 bg-blue-500/20 text-cfpmi-sky rounded-3xl flex items-center justify-center mx-auto shadow-md border border-blue-400/30">
          <span className="text-3xl font-extrabold text-cfpmi-orange">404</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Page introuvable</h1>
          <p className="text-xs sm:text-sm text-slate-300">
            La page que vous recherchez n&apos;existe pas ou a été déplacée. Retrouvez toutes nos formations professionnelles sur notre site.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#162762] hover:bg-[#1C327A] text-white font-bold text-xs py-3.5 px-5 rounded-xl border border-blue-700/60 shadow-lg transition-colors"
          >
            <Home className="w-4 h-4 text-cfpmi-sky" />
            <span>Retour à l&apos;accueil</span>
          </Link>

          <Link
            href="/formations"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs py-3.5 px-5 rounded-xl shadow-lg shadow-orange-500/25 transition-all"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Voir les formations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
