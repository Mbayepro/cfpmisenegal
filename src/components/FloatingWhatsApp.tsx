"use client";

import React from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { generateWhatsAppLink } from "@/lib/utils";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={generateWhatsAppLink(
          "Bonjour CFPMI Sénégal, je souhaite avoir des informations sur vos formations."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter sur WhatsApp avec le CFPMI"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
        <WhatsAppIcon className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
