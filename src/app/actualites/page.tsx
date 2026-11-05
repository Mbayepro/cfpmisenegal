import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getActualites } from "@/lib/supabase";
import { Calendar, User, ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualités & Blog du CFPMI Sénégal",
  description:
    "Suivez les annonces officielles, les dates de rentrée, nos partenariats avec les entreprises (CALD Expertise) et les conseils d'insertion professionnelle.",
};

export const revalidate = 60;

export default async function ActualitesPage() {
  const actualites = await getActualites();

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
              Actualités & Blog Officiel
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Les Nouvelles du CFPMI
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Reportages d&apos;ateliers, orientations techniques après le BFEM, dates de rentrée et stages sur le terrain.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualites.map((item) => (
            <article
              key={item.id}
              className="bg-[#121E4A] hover:bg-[#16255C] rounded-3xl border border-blue-800/60 overflow-hidden shadow-2xl shadow-black/40 hover:border-cfpmi-sky/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={item.image_url}
                  alt={item.titre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121E4A] via-transparent to-transparent opacity-90" />
                <span className="absolute top-3 left-3 bg-cfpmi-orange text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase shadow-md">
                  {item.categorie}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-cfpmi-sky" />
                      {new Date(item.date_publication).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-cfpmi-sky" />
                      {item.auteur}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-cfpmi-sky transition-colors line-clamp-2 leading-snug">
                    {item.titre}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                    {item.resume}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-blue-900/60">
                  <Link
                    href={`/actualites/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cfpmi-orange group-hover:text-orange-400"
                  >
                    <span>Lire l&apos;article complet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
