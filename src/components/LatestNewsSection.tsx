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
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#080E21] via-[#0D183E] to-[#0A1128] text-white border-b border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cfpmi-orange bg-orange-950/80 px-3.5 py-1 rounded-full border border-orange-500/40">
              Annonces & Vie du Centre
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Dernières actualités du CFPMI
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Photos réelles des ateliers pratiques, orientations post-BFEM et annonces officielles.
            </p>
          </div>

          <Link
            href="/actualites"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cfpmi-sky hover:text-cfpmi-orange transition-colors"
          >
            <span>Voir tous les articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actualites.slice(0, 3).map((item) => (
            <article
              key={item.id}
              className="bg-[#121E4A] hover:bg-[#16255C] rounded-3xl border border-blue-800/60 overflow-hidden shadow-xl shadow-black/40 hover:border-cfpmi-sky/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Actual Image preview */}
              <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={item.image_url}
                  alt={item.titre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121E4A] via-transparent to-transparent opacity-90" />
                
                <span className="absolute top-4 left-4 bg-cfpmi-orange text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                  {item.categorie}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-cfpmi-sky" />
                    <span>{new Date(item.date_publication).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cfpmi-sky transition-colors line-clamp-2 leading-snug">
                    {item.titre}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {item.resume}
                  </p>
                </div>

                <div className="pt-4 border-t border-blue-900/60 mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-cfpmi-sky" />
                    {item.auteur}
                  </span>

                  <Link
                    href={`/actualites/${item.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-cfpmi-orange group-hover:text-orange-400 group-hover:underline"
                  >
                    <span>Lire</span>
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
