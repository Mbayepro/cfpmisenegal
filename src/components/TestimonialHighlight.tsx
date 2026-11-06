import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Temoignage } from "@/lib/types";
import { Quote, ArrowRight, Video, ExternalLink } from "lucide-react";

interface Props {
  temoignages: Temoignage[];
}

export default function TestimonialHighlight({ temoignages }: Props) {
  const featured = temoignages.slice(0, 2);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#080E21] via-[#0E183D] to-[#0A1128] text-white border-b border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cfpmi-orange">
              Réussites CFPMI
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Ils ont appris leur métier chez nous
            </h2>
          </div>
          <Link
            href="/temoignages"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-cfpmi-sky hover:text-cfpmi-orange transition-colors"
          >
            <span>Voir tous les témoignages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((t) => (
            <div
              key={t.id}
              className="bg-[#121E4A] border border-blue-800/70 rounded-3xl p-6 shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-5"
            >
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-cfpmi-orange shrink-0 shadow-md">
                <Image
                  src={t.photo_url}
                  alt={t.nom}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 text-center sm:text-left space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-extrabold text-white">{t.nom}</h3>
                    <p className="text-xs font-bold text-cfpmi-sky">
                      {t.entreprise_creee_ou_poste}
                    </p>
                  </div>
                  {t.video_url && (
                    <a
                      href={t.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 text-[11px] font-bold text-white bg-cfpmi-orange hover:bg-orange-600 px-3 py-1 rounded-full transition-colors self-center sm:self-start"
                    >
                      <Video className="w-3 h-3" />
                      <span>Vidéo</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-200 italic line-clamp-3 leading-relaxed">
                  <Quote className="w-3.5 h-3.5 text-cfpmi-orange inline mr-1 -mt-1" />
                  {t.citation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
