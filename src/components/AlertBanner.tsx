"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, X, ArrowRight } from "lucide-react";

export default function AlertBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-cfpmi-marine via-blue-900 to-cfpmi-marine text-white text-xs py-2 px-3 border-b border-blue-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 truncate">
          <span className="inline-flex items-center gap-1 bg-cfpmi-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shrink-0">
            <Sparkles className="w-3 h-3" />
            Rentrée
          </span>
          <p className="font-medium text-slate-100 truncate">
            <strong className="text-cfpmi-orange font-bold">17 Nov. 2026 :</strong>{" "}
            Inscriptions ouvertes (Froid/Clim, Électricité...)
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/inscription"
            className="inline-flex items-center gap-1 font-bold text-white bg-cfpmi-orange hover:bg-orange-600 transition-colors px-2.5 py-1 rounded-full text-[11px]"
          >
            <span>S&apos;inscrire</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Fermer la notification"
            className="text-slate-300 hover:text-white p-0.5 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
