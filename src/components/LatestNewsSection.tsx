import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Actualite } from "@/lib/types";
import { Calendar, ArrowRight, User, Sparkles } from "lucide-react";

interface Props {
  actualites: Actualite[];
}

export default function LatestNewsSection({ actualites }: Props) {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cfpmi-red bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
              Annonces & Vie du Centre
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Dernières actualités du CFPMI
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Photos réelles des ateliers pratiques, orientations post-BFEM et annonces officielles.
            </p>
          </div>

          <Link
            href="/actualites"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cfpmi-marine hover:text-cfpmi-orange transition-colors"
          >
            <span>Voir tous les articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actualites.slice(0, 3).map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Actual Image preview */}
              <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={item.image_url}
                  alt={item.titre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 font-bold text-white bg-cfpmi-marine/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] uppercase">
                  <Sparkles className="w-3 h-3 text-cfpmi-orange" />
                  {item.categorie}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {new Date(item.date_publication).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <User className="w-3 h-3 text-slate-400" />
                      {item.auteur}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-cfpmi-marine transition-colors line-clamp-2 leading-snug">
                    {item.titre}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {item.resume}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/actualites/${item.slug}`}
                    className="text-xs font-bold text-cfpmi-orange hover:text-orange-700 flex items-center gap-1"
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
    </section>
  );
}
