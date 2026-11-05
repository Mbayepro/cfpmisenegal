import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getTemoignages } from "@/lib/supabase";
import { Building, Quote, CheckCircle2, ArrowRight, Sparkles, ExternalLink, Video } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Témoignages & Réussites d'Anciens Apprenants | CFPMI Sénégal",
  description:
    "Découvrez les réussites authentiques du CFPMI Sénégal : Jafaridun (fondateur d'EFC aux Comores), Doyen Momar SECK, et bien d'autres professionnels formés à Guédiawaye.",
};

export const revalidate = 60;

export default async function TemoignagesPage() {
  const temoignages = await getTemoignages();

  return (
    <div className="bg-gradient-to-b from-[#080E21] via-[#0D183E] to-[#0A1128] text-white min-h-screen py-12 sm:py-20 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-80 bg-cfpmi-sky/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
          <div className="inline-flex items-center gap-2 bg-[#121E4A] border border-cfpmi-orange/40 px-4 py-1.5 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-cfpmi-orange" />
            <span className="text-xs font-bold uppercase tracking-wider text-cfpmi-orange">
              Témoignages Réels • CFPMI Sénégal
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ils se sont formés au CFPMI, voici leur réussite
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Diplômes préparés : <strong>CPS (6 mois), CAP, BEP, BT (3 ans) et BTS</strong>. Des histoires vraies de passion, de reconversion et d&apos;entrepreneuriat à Dakar et au-delà des frontières.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {temoignages.map((t) => (
            <div
              key={t.id}
              className={`bg-[#121E4A] hover:bg-[#16255C] rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between shadow-2xl shadow-black/40 hover:-translate-y-1 ${
                t.est_en_vedette
                  ? "border-2 border-cfpmi-orange shadow-orange-950/20"
                  : "border-blue-800/60 hover:border-cfpmi-sky/60"
              }`}
            >
              <div>
                {/* Header profile */}
                <div className="flex items-start justify-between gap-4 border-b border-blue-900/60 pb-5">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-cfpmi-sky/40 shadow-md shrink-0">
                      <Image
                        src={t.photo_url}
                        alt={t.nom}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{t.nom}</h3>
                      <p className="text-xs font-semibold text-cfpmi-orange">
                        {t.origine}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {t.filiere_suivie} • {t.annee_promotion}
                      </p>
                    </div>
                  </div>

                  {t.est_en_vedette && (
                    <span className="text-[10px] font-bold text-white bg-cfpmi-orange px-2.5 py-1 rounded-full uppercase shadow-xs">
                      À la Une
                    </span>
                  )}
                </div>

                {/* Company / Position */}
                <div className="mt-4 inline-flex items-center gap-2 bg-[#0E1738] border border-blue-800/60 px-3 py-1.5 rounded-xl text-xs font-bold text-cfpmi-sky">
                  <Building className="w-4 h-4 text-cfpmi-orange shrink-0" />
                  <span>{t.entreprise_creee_ou_poste}</span>
                </div>

                {/* Citation */}
                <blockquote className="mt-5 text-sm sm:text-base font-semibold text-white italic leading-relaxed border-l-2 border-cfpmi-orange pl-3">
                  &laquo; {t.citation} &raquo;
                </blockquote>

                {/* Story */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-blue-900/60 pt-4 whitespace-pre-line">
                  {t.histoire_complete}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-900/60 flex items-center justify-between text-xs">
                {t.video_url ? (
                  <a
                    href={t.video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#1877F2] hover:bg-blue-600 px-3 py-1.5 rounded-xl shadow-xs"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Regarder la vidéo sur Facebook</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    Formation certifiée CFPMI
                  </span>
                )}

                <span className="text-slate-400 font-normal">Hamo 6, Dakar</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="bg-[#121E4A] border-2 border-cfpmi-orange/70 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl space-y-6">
          <span className="inline-flex items-center gap-1 bg-cfpmi-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            Votre Tour de Réussir
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Prêt à devenir le prochain témoignage de réussite du CFPMI ?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Diplômes d&apos;État et attestations : CPS (6 mois), CAP, BEP, BT (3 ans) et BTS. Les cours démarrent ce lundi 17 novembre 2026 à Guédiawaye Hamo 6.
          </p>
          <div>
            <Link
              href="/inscription"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base py-4 px-8 rounded-2xl shadow-lg shadow-orange-500/30 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Réserver ma place pour la rentrée</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
