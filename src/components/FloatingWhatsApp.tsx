"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CFPMI_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 group">
      {/* Speech bubble / Tooltip */}
      {showTooltip && (
        <div className="bg-white text-slate-800 p-3.5 rounded-2xl shadow-2xl border border-slate-200 max-w-[270px] text-xs relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Fermer le message"
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
            <span className="font-bold text-cfpmi-marine">CFPMI Sénégal en ligne</span>
          </div>
          <p className="text-slate-600 leading-tight">
            Une question sur nos formations ou les modalités d&apos;inscription ? Discutons directement sur <strong>WhatsApp</strong> !
          </p>
        </div>
      )}

      {/* Button with real WhatsApp icon */}
      <a
        href={generateWhatsAppLink(
          "Bonjour CFPMI Sénégal, je souhaite avoir des informations sur vos formations en Froid/Climatisation, Électricité, Plomberie ou Soudure."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter sur WhatsApp avec le CFPMI"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* Unread count badge */}
        <span className="absolute -top-1 -right-1 bg-cfpmi-red text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow">
          1
        </span>

        {/* Pulse ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        <WhatsAppIcon className="w-8 h-8 fill-white" />
      </a>
    </div>
  );
}
