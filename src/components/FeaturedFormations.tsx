import React from "react";
import Link from "next/link";
import { Filiere } from "@/lib/types";
import {
  ArrowRight,
  Clock,
  GraduationCap,
  Snowflake,
  Zap,
  Wrench,
  Flame,
  Briefcase,
  Building2,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { generateWhatsAppLink } from "@/lib/utils";

interface Props {
  filieres: Filiere[];
}

function getFiliereConfig(slug: string) {
  switch (slug) {
    case "bt-froid-et-climatisation-3ans":
      return {
        icon: GraduationCap,
        badge: "Diplôme d'État • 3 ans",
        tagColor: "bg-amber-500/20 text-amber-300 border-amber-400/40",
        iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-orange-500/30",
        barGradient: "from-amber-500 via-cfpmi-orange to-cfpmi-marine",
        cardBorder: "border-amber-500/30 hover:border-amber-400",
        highlight: "Alternative technique au Bac après le BFEM",
      };
    case "froid-et-climatisation":
      return {
        icon: Snowflake,
        badge: "CPS • 6 mois",
        tagColor: "bg-sky-500/20 text-sky-300 border-sky-400/40",
        iconBg: "bg-gradient-to-br from-cfpmi-sky to-blue-700 text-white shadow-sky-500/30",
        barGradient: "from-cfpmi-sky via-blue-500 to-cfpmi-marine",
        cardBorder: "border-sky-500/30 hover:border-sky-400",
        highlight: "Montage, dépannage clim & froid industriel",
      };
    case "electricite-batiment-industrielle":
      return {
        icon: Zap,
        badge: "CPS • 6 mois",
        tagColor: "bg-orange-500/20 text-orange-300 border-orange-400/40",
        iconBg: "bg-gradient-to-br from-cfpmi-orange to-red-600 text-white shadow-orange-500/30",
        barGradient: "from-cfpmi-orange via-amber-500 to-cfpmi-marine",
        cardBorder: "border-orange-500/30 hover:border-orange-400",
        highlight: "Câblage armoires, photovoltaïque & bâtiment",
      };
    case "plomberie-sanitaire":
      return {
        icon: Wrench,
        badge: "CPS • 6 mois",
        tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
        iconBg: "bg-gradient-to-br from-teal-500 to-emerald-700 text-white shadow-emerald-500/30",
        barGradient: "from-emerald-500 via-teal-600 to-cfpmi-sky",
        cardBorder: "border-emerald-500/30 hover:border-emerald-400",
        highlight: "Réseaux sanitaires, tuyauterie moderne & chantiers",
      };
    case "soudure-metallique":
      return {
        icon: Flame,
        badge: "CPS • 6 mois",
        tagColor: "bg-rose-500/20 text-rose-300 border-rose-400/40",
        iconBg: "bg-gradient-to-br from-cfpmi-red to-orange-700 text-white shadow-red-500/30",
        barGradient: "from-cfpmi-red via-orange-600 to-cfpmi-orange",
        cardBorder: "border-rose-500/30 hover:border-rose-400",
        highlight: "Procédés ARC (MMA), TIG inox & charpente",
      };
    default:
      return {
        icon: Briefcase,
        badge: "Sur Mesure",
        tagColor: "bg-purple-500/20 text-purple-300 border-purple-400/40",
        iconBg: "bg-gradient-to-br from-indigo-600 to-purple-800 text-white shadow-purple-500/30",
        barGradient: "from-purple-600 via-indigo-600 to-cfpmi-sky",
        cardBorder: "border-purple-500/30 hover:border-purple-400",
        highlight: "Modules pratiques pour professionnels & entreprises",
      };
  }
}

export default function FeaturedFormations({ filieres }: Props) {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#080E21] via-[#0D183E] to-[#0A1128] text-white relative overflow-hidden" id="formations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Short Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nos Filières de Formation
          </h2>
          <p className="text-sm text-slate-300">
            Choisissez votre métier : 100% pratique à Guédiawaye Hamo 6 avec stage garanti.
          </p>
        </div>

        {/* Clean & Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filieres.map((filiere) => {
            const config = getFiliereConfig(filiere.slug);
            const Icon = config.icon;

            return (
              <div
                key={filiere.id}
                className={`bg-[#121E4A] rounded-3xl border ${config.cardBorder} shadow-xl shadow-black/30 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1`}
              >
                <div className={`h-2 w-full bg-gradient-to-r ${config.barGradient}`} />

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className={`w-11 h-11 rounded-2xl p-2.5 flex items-center justify-center shadow-md ${config.iconBg}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${config.tagColor}`}>
                        {config.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/formations/${filiere.slug}`}>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-cfpmi-sky transition-colors leading-snug">
                        {filiere.titre}
                      </h3>
                    </Link>

                    {/* 1-Line Highlight */}
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2">
                      {config.highlight}
                    </p>

                    {/* 2 Key Badges */}
                    <div className="mt-4 pt-3 border-t border-blue-900/60 flex items-center justify-between text-xs text-slate-200">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-cfpmi-sky shrink-0" />
                        {filiere.duree}
                      </span>
                      <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                        <Building2 className="w-3.5 h-3.5 shrink-0" />
                        Stage garanti
                      </span>
                    </div>
                  </div>

                  {/* 2 Horizontal Action Buttons : S'inscrire & Contacter */}
                  <div className="mt-5 pt-4 border-t border-blue-900/60 space-y-2.5">
                    <div className="grid grid-cols-2 gap-2.5">
                      <Link
                        href={`/inscription?filiere=${filiere.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-extrabold text-white bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 py-3 px-3 rounded-xl transition-all text-center shadow-md shadow-orange-500/20"
                      >
                        <GraduationCap className="w-4 h-4 shrink-0" />
                        <span>S&apos;inscrire</span>
                      </Link>

                      <a
                        href={generateWhatsAppLink(
                          `Bonjour CFPMI Sénégal, je souhaite des informations sur la formation ${filiere.titre}.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] py-3 px-3 rounded-xl transition-all text-center shadow-md"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                        <span>Contacter</span>
                      </a>
                    </div>

                    <Link
                      href={`/formations/${filiere.slug}`}
                      className="w-full inline-flex items-center justify-center gap-1 text-[11px] font-bold text-cfpmi-sky hover:text-white pt-1 transition-colors"
                    >
                      <span>Voir les détails du programme</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
