"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INITIAL_FAQ } from "@/lib/data";
import { ChevronDown, HelpCircle, Phone, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CFPMI_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [selectedCat, setSelectedCat] = useState<string>("Toutes");

  const categories = ["Toutes", "Général", "Inscriptions", "Formations", "Tarifs & Paiement", "Insertion & Emploi"];

  const filteredFaq =
    selectedCat === "Toutes"
      ? INITIAL_FAQ
      : INITIAL_FAQ.filter((f) => f.categorie === selectedCat);

  return (
    <div className="bg-gradient-to-b from-[#080E21] via-[#0D183E] to-[#0A1128] text-white min-h-screen py-12 sm:py-20 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-80 bg-cfpmi-sky/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3.5">
          <div className="inline-flex items-center gap-2 bg-[#121E4A] border border-cfpmi-orange/40 px-4 py-1.5 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-cfpmi-orange" />
            <span className="text-xs font-bold uppercase tracking-wider text-cfpmi-orange">
              Foire Aux Questions • CFPMI
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tout Savoir sur le CFPMI
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Frais d&apos;inscription, adresse exacte à Hamo 6, durée, reconnaissance des diplômes et stages chantiers.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCat === cat
                  ? "bg-gradient-to-r from-cfpmi-orange to-orange-600 text-white shadow-lg shadow-orange-500/30"
                  : "bg-[#121E4A] text-slate-200 border border-blue-800/70 hover:bg-[#162762]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-16">
          {filteredFaq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#121E4A] hover:bg-[#152354] rounded-2xl border border-blue-800/70 overflow-hidden shadow-xl transition-all duration-200"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cfpmi-sky shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-cfpmi-orange" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-blue-900/60 animate-in fade-in duration-150">
                    {item.reponse}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="bg-[#121E4A] border-2 border-cfpmi-orange/70 text-white rounded-3xl p-8 text-center space-y-4 shadow-2xl">
          <h3 className="text-xl font-bold">
            Vous avez une question spécifique ?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Notre équipe d&apos;accueil répond directement à vos interrogations par téléphone ou WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={generateWhatsAppLink("Bonjour CFPMI, j'ai une question avant de finaliser mon inscription.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs py-3.5 px-6 rounded-xl transition-all shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Poser ma question sur WhatsApp</span>
            </a>

            <a
              href={`tel:+${CFPMI_INFO.phonePrimaryClean}`}
              className="inline-flex items-center gap-2 bg-[#162762] hover:bg-[#1C327A] text-white font-bold text-xs py-3.5 px-6 rounded-xl transition-all border border-blue-700/60 shadow-md"
            >
              <Phone className="w-4 h-4 text-cfpmi-sky" />
              <span>Appeler le {CFPMI_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
