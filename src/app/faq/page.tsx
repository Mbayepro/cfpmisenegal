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
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cfpmi-marine bg-blue-100/70 px-4 py-1.5 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-cfpmi-orange" />
            Questions Fréquentes
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tout Savoir sur le CFPMI
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Frais d&apos;inscription, adresse exacte à Hamo 6, durée, reconnaissance des diplômes et stages.
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
                  ? "bg-cfpmi-marine text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
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
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-cfpmi-orange" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.reponse}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="bg-gradient-to-r from-blue-900 to-cfpmi-marine text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-xl font-bold">
            Vous avez une question spécifique ?
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto">
            Notre équipe d&apos;accueil répond directement à vos interrogations par téléphone ou WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={generateWhatsAppLink("Bonjour CFPMI, j'ai une question avant de finaliser mon inscription.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs py-3.5 px-6 rounded-xl transition-all shadow"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Poser ma question sur WhatsApp</span>
            </a>

            <a
              href={`tel:+${CFPMI_INFO.phonePrimaryClean}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-3.5 px-6 rounded-xl transition-all border border-white/20"
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

