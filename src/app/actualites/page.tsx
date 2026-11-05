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
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cfpmi-red bg-red-100/70 px-4 py-1.5 rounded-full">
            Actualités & Blog Officiel
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Les Nouvelles du CFPMI
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Reportages d&apos;ateliers, orientations techniques après le BFEM, dates de rentrée et stages sur le terrain.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualites.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={item.image_url}
                  alt={item.titre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-cfpmi-marine/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  {item.categorie}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {new Date(item.date_publication).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      {item.auteur}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-cfpmi-marine transition-colors line-clamp-2 leading-snug">
                    {item.titre}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {item.resume}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/actualites/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cfpmi-orange hover:text-orange-700"
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
