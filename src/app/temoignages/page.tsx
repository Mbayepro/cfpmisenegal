import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getTemoignages } from "@/lib/supabase";
import { Quote, Building, Award, CheckCircle2, GraduationCap, Sparkles, ArrowRight, Video, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Témoignages & Réussites | Jafaridun (EFC), Doyen Momar Seck",
  description:
    "Découvrez les parcours authentiques de nos diplômés : de Jafaridun (fondateur d'EFC, Comores) à la remise d'attestation du Doyen Momar SECK avec le Directeur M. Gorgui FAYE.",
};

export const revalidate = 60;

export default async function TemoignagesPage() {
  const temoignages = await getTemoignages();

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cfpmi-orange bg-orange-100/70 px-4 py-1.5 rounded-full">
            Témoignages Réels • CFPMI Sénégal
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ils se sont formés au CFPMI, voici leur réussite
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Diplômes préparés : <strong>CPS (6 mois), CAP, BEP, BT (3 ans) et BTS</strong>. Des histoires vraies de passion, de reconversion et d&apos;entrepreneuriat à Dakar et au-delà des frontières.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {temoignages.map((t) => (
            <div
              key={t.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                t.est_en_vedette
                  ? "border-2 border-cfpmi-marine ring-4 ring-blue-50"
                  : "border-slate-200"
              }`}
            >
              <div>
                {/* Header profile */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md shrink-0">
                      <Image
                        src={t.photo_url}
                        alt={t.nom}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{t.nom}</h3>
                      <p className="text-xs font-semibold text-cfpmi-orange">
                        {t.origine}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {t.filiere_suivie} • {t.annee_promotion}
                      </p>
                    </div>
                  </div>

                  {t.est_en_vedette && (
                    <span className="text-[10px] font-bold text-cfpmi-marine bg-blue-100 px-2.5 py-1 rounded-full uppercase">
                      À la Une
                    </span>
                  )}
                </div>

                {/* Company / Position */}
                <div className="mt-4 inline-flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-800">
                  <Building className="w-4 h-4 text-cfpmi-orange shrink-0" />
                  <span>{t.entreprise_creee_ou_poste}</span>
                </div>

                {/* Citation */}
                <blockquote className="mt-5 text-sm sm:text-base font-semibold text-slate-800 italic leading-relaxed">
                  &laquo; {t.citation} &raquo;
                </blockquote>

                {/* Story */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 whitespace-pre-line">
                  {t.histoire_complete}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                {t.video_url ? (
                  <a
                    href={t.video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-xl shadow-xs"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Regarder la vidéo sur Facebook</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    Formation certifiée CFPMI
                  </span>
                )}

                <span className="text-slate-400 font-normal">Hamo 6, Dakar</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cfpmi-marine to-blue-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl space-y-6">
          <span className="inline-flex items-center gap-1 bg-cfpmi-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Votre Tour de Réussir
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Prêt à devenir le prochain témoignage de réussite du CFPMI ?
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
            Diplômes d&apos;État et attestations : CPS (6 mois), CAP, BEP, BT (3 ans) et BTS. Les cours démarrent ce lundi 17 novembre 2026 à Guédiawaye Hamo 6.
          </p>
          <div>
            <Link
              href="/inscription"
              className="inline-flex items-center gap-2 bg-cfpmi-orange hover:bg-orange-600 text-white font-extrabold text-sm sm:text-base py-4 px-8 rounded-2xl shadow-lg transition-all"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Je m&apos;inscris pour la rentrée</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
