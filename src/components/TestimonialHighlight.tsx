import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Temoignage } from "@/lib/types";
import { Quote, ArrowRight, Building, Award, CheckCircle, ExternalLink, Video, Sparkles } from "lucide-react";

interface Props {
  temoignages: Temoignage[];
}

export default function TestimonialHighlight({ temoignages }: Props) {
  const jafaridun = temoignages.find((t) => t.id === "tem-jafaridun") || temoignages[0];
  const momarSeck = temoignages.find((t) => t.id === "tem-momar-seck") || temoignages[1];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cfpmi-marine/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cfpmi-orange/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cfpmi-orange bg-orange-950/70 border border-orange-800/60 px-3.5 py-1 rounded-full">
            Témoignages & Réussites Réelles
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Des parcours qui inspirent toute une communauté
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Diplômes reconnus : <strong>CPS (6 mois), CAP, BEP, BT (3 ans) et BTS</strong>. Découvrez les histoires authentiques de nos apprenants.
          </p>
        </div>

        {/* Featured Card 1 : JAFARIDUN (Dakar aux Comores) */}
        {jafaridun && (
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm max-w-5xl mx-auto mb-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              
              <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                <div className="relative w-36 h-36 rounded-3xl overflow-hidden border-2 border-cfpmi-orange shadow-xl mb-3">
                  <Image
                    src={jafaridun.photo_url}
                    alt={jafaridun.nom}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-white">{jafaridun.nom}</h3>
                <span className="text-xs font-semibold text-cfpmi-sky flex items-center gap-1 mt-0.5">
                  De Dakar aux Comores 🇸🇳➡️🇰🇲
                </span>

                <div className="mt-3 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-300 flex items-center gap-1.5 text-center">
                  <Building className="w-3.5 h-3.5 text-cfpmi-orange shrink-0" />
                  <span>{jafaridun.entreprise_creee_ou_poste}</span>
                </div>
              </div>

              <div className="w-full md:w-2/3 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Quote className="w-7 h-7 text-cfpmi-orange shrink-0 opacity-80" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {jafaridun.filiere_suivie}
                    </span>
                  </div>
                  {jafaridun.video_url && (
                    <a
                      href={jafaridun.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-full transition-colors shadow"
                    >
                      <Video className="w-3.5 h-3.5 text-white" />
                      <span>Voir la vidéo Facebook</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  )}
                </div>

                <blockquote className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed italic">
                  &laquo; {jafaridun.citation} &raquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4 whitespace-pre-line">
                  {jafaridun.histoire_complete}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-emerald-400 pt-2">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Stage terrain avec CALD Expertise
                  </span>
                  <span>•</span>
                  <span>Entreprise EFC opérationnelle aux Comores</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Featured Card 2 : DOYEN MOMAR SECK (« Il n'y a pas d'âge pour apprendre ») */}
        {momarSeck && (
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-xl backdrop-blur-sm max-w-5xl mx-auto mb-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              
              <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                <div className="relative w-36 h-36 rounded-3xl overflow-hidden border-2 border-cfpmi-sky shadow-xl mb-3">
                  <Image
                    src={momarSeck.photo_url}
                    alt={momarSeck.nom}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-white">{momarSeck.nom}</h3>
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1 mt-0.5">
                  🎓 Attestation de Formation
                </span>

                <div className="mt-3 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-cfpmi-sky shrink-0" />
                  <span>{momarSeck.entreprise_creee_ou_poste}</span>
                </div>
              </div>

              <div className="w-full md:w-2/3 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Quote className="w-7 h-7 text-cfpmi-sky shrink-0 opacity-80" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      « Il n&apos;y a pas d&apos;âge pour apprendre »
                    </span>
                  </div>
                  {momarSeck.video_url && (
                    <a
                      href={momarSeck.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-full transition-colors shadow"
                    >
                      <Video className="w-3.5 h-3.5 text-white" />
                      <span>Voir la remise en vidéo</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  )}
                </div>

                <blockquote className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed italic">
                  &laquo; {momarSeck.citation} &raquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
                  {momarSeck.histoire_complete}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 pt-1">
                  <span>Remise par M. Gorgui FAYE, Directeur du CFPMI</span>
                </div>
              </div>

            </div>
          </div>
        )}

        <div className="text-center pt-4">
          <Link
            href="/temoignages"
            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cfpmi-orange transition-colors"
          >
            <span>Voir tous les témoignages et réussites de nos apprenants</span>
            <ArrowRight className="w-4 h-4 text-cfpmi-orange" />
          </Link>
        </div>

      </div>
    </section>
  );
}
