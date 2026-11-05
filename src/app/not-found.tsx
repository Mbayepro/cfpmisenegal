import React from "react";
import Link from "next/link";
import { GraduationCap, ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-6">
        <div className="w-20 h-20 bg-blue-50 text-cfpmi-marine rounded-3xl flex items-center justify-center mx-auto shadow-sm">
          <span className="text-3xl font-extrabold text-cfpmi-orange">404</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900">Page introuvable</h1>
          <p className="text-xs sm:text-sm text-slate-600">
            La page que vous recherchez n&apos;existe pas ou a été déplacée. Retrouvez toutes nos formations professionnelles sur notre site.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-cfpmi-marine hover:bg-blue-900 text-white font-bold text-xs py-3.5 px-5 rounded-xl shadow transition-colors"
          >
            <Home className="w-4 h-4 text-cfpmi-sky" />
            <span>Retour à l&apos;accueil</span>
          </Link>

          <Link
            href="/formations"
            className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3.5 px-5 rounded-xl transition-colors"
          >
            <GraduationCap className="w-4 h-4 text-cfpmi-orange" />
            <span>Voir les formations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

