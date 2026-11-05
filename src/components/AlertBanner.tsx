"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, X, ArrowRight, Phone } from "lucide-react";
import { CFPMI_INFO } from "@/lib/constants";

export default function AlertBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-cfpmi-marine via-blue-900 to-cfpmi-marine text-white text-xs sm:text-sm py-2.5 px-4 shadow-sm border-b border-blue-800 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center gap-1 bg-cfpmi-red text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
            <Sparkles className="w-3 h-3" />
            Rentrée
          </span>
          <p className="font-medium text-slate-100">
            <strong className="text-cfpmi-orange font-bold">Lundi 17 Novembre 2026 :</strong>{" "}
            Démarrage des cours en Froid & Climatisation et Électricité !
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/inscription"
            className="inline-flex items-center gap-1 font-semibold text-white bg-cfpmi-orange hover:bg-orange-600 transition-colors px-3 py-1 rounded-full text-xs shadow-sm"
          >
            S&apos;inscrire maintenant
            <ArrowRight className="w-3 h-3" />
          </Link>
          <a
            href={`tel:+${CFPMI_INFO.phoneSecondaryClean}`}
            className="hidden md:inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors text-xs font-medium"
          >
            <Phone className="w-3 h-3 text-cfpmi-sky" />
            {CFPMI_INFO.phoneSecondary}
          </a>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Fermer la notification"
            className="text-slate-300 hover:text-white p-1 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

