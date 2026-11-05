import React from "react";
import Link from "next/link";
import { getFilieres } from "@/lib/supabase";
import { generateWhatsAppLink } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  ArrowRight,
  Clock,
  GraduationCap,
  Sparkles,
  Snowflake,
  Zap,
  Wrench,
  Flame,
  Briefcase,
  CheckCircle2,
  Calendar,
  Building2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Formations Professionnelles 100% Pratiques | CFPMI Sénégal",
  description:
    "Catalogue officiel des formations certifiantes du CFPMI à Guédiawaye, Hamo 6 : Froid et Climatisation, Électricité bâtiment et industrielle, Plomberie sanitaire, Soudure métallique. Diplômes d'État BT, CPS, CAP, BEP et BTS.",
};

export const revalidate = 60;

function getFiliereConfig(slug: string) {
  switch (slug) {
    case "bt-froid-et-climatisation-3ans":
      return {
        icon: GraduationCap,
        badge: "Diplôme d'État • 3 ans",
        diplome: "Brevet de Technicien (BT)",
        tagColor: "bg-amber-500/20 text-amber-300 border-amber-400/40",
        iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-orange-500/30",
        barGradient: "from-amber-500 via-cfpmi-orange to-cfpmi-marine",
        cardBorder: "border-amber-500/30 hover:border-amber-400",
        highlight: "Cursus technique d'excellence après le BFEM",
      };
    case "froid-et-climatisation":
      return {
        icon: Snowflake,
        badge: "Filière N°1 Emploi",
        diplome: "Certificat Pro (CPS 6 mois)",
        tagColor: "bg-sky-500/20 text-sky-300 border-sky-400/40",
        iconBg: "bg-gradient-to-br from-cfpmi-sky to-blue-700 text-white shadow-sky-500/30",
        barGradient: "from-cfpmi-sky via-blue-500 to-cfpmi-marine",
        cardBorder: "border-sky-500/30 hover:border-sky-400",
        highlight: "Bancs d'essais réels, montage et dépannage",
      };
    case "electricite-batiment-industrielle":
      return {
        icon: Zap,
        badge: "Haute Employabilité",
        diplome: "Certificat Pro (CPS 6 mois)",
        tagColor: "bg-orange-500/20 text-orange-300 border-orange-400/40",
        iconBg: "bg-gradient-to-br from-cfpmi-orange to-red-600 text-white shadow-orange-500/30",
        barGradient: "from-cfpmi-orange via-amber-500 to-cfpmi-marine",
        cardBorder: "border-orange-500/30 hover:border-orange-400",
        highlight: "Câblage armoires industrielles & solaire",
      };
    case "plomberie-sanitaire":
      return {
        icon: Wrench,
        badge: "Métier Rentable & Indépendant",
        diplome: "Certificat Pro (CPS 6 mois)",
        tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
        iconBg: "bg-gradient-to-br from-teal-500 to-emerald-700 text-white shadow-emerald-500/30",
        barGradient: "from-emerald-500 via-teal-600 to-cfpmi-sky",
        cardBorder: "border-emerald-500/30 hover:border-emerald-400",
        highlight: "Réseaux sanitaires, tuyauterie moderne & chantiers",
      };
    case "soudure-metallique":
      return {
        icon: Flame,
        badge: "Précision Industrielle",
        diplome: "Certificat Pro (CPS 6 mois)",
        tagColor: "bg-rose-500/20 text-rose-300 border-rose-400/40",
        iconBg: "bg-gradient-to-br from-cfpmi-red to-orange-700 text-white shadow-red-500/30",
        barGradient: "from-cfpmi-red via-orange-600 to-cfpmi-orange",
        cardBorder: "border-rose-500/30 hover:border-rose-400",
        highlight: "Procédés ARC (MMA), TIG inox & charpente",
      };
    default:
      return {
        icon: Briefcase,
        badge: "Formation Continue Sur Mesure",
        diplome: "Attestation de Perfectionnement",
        tagColor: "bg-purple-500/20 text-purple-300 border-purple-400/40",
        iconBg: "bg-gradient-to-br from-indigo-600 to-purple-800 text-white shadow-purple-500/30",
        barGradient: "from-purple-600 via-indigo-600 to-cfpmi-sky",
        cardBorder: "border-purple-500/30 hover:border-purple-400",
        highlight: "Modules sur demande pour professionnels & entreprises",
      };
  }
}

export default async function FormationsPage() {
  const filieres = await getFilieres();

  return (
    <div className="bg-gradient-to-b from-[#080E21] via-[#0D183E] to-[#0A1128] text-white min-h-screen py-12 sm:py-20 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-80 bg-cfpmi-sky/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cfpmi-orange/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
          <div className="inline-flex items-center gap-2 bg-[#121E4A] border border-cfpmi-orange/40 px-4 py-1.5 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-cfpmi-orange" />
            <span className="text-xs font-bold uppercase tracking-wider text-cfpmi-orange">
              Catalogue Officiel 2026 - 2027 • Rentrée Lundi 17 Novembre 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Formations Professionnelles & Certifiantes
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Toutes nos filières sont dispensées en ateliers 100% équipés à <strong>Guédiawaye Hamo 6</strong> avec des stages garantis sur le terrain avec nos partenaires (<span className="text-cfpmi-sky font-semibold">CALD Expertise</span>).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {["CPS (6 mois)", "CAP", "BEP", "BT (3 ans)", "BTS"].map((diploma) => (
              <span
                key={diploma}
                className="bg-[#121E4A] border border-blue-700/60 text-cfpmi-sky font-semibold text-xs px-3.5 py-1 rounded-full shadow-xs"
              >
                🎓 {diploma}
              </span>
            ))}
          </div>
        </div>

        {/* List of Formations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 items-stretch">
          {filieres.map((filiere) => {
            const config = getFiliereConfig(filiere.slug);
            const Icon = config.icon;

            return (
              <div
                key={filiere.id}
                className={`bg-[#121E4A] rounded-3xl border ${config.cardBorder} shadow-2xl shadow-black/40 hover:shadow-blue-900/30 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 relative`}
              >
                {/* Top dynamic gradient line */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${config.barGradient}`} />

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Row: Icon + Badges */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className={`w-13 h-13 rounded-2xl p-3 flex items-center justify-center shadow-md ${config.iconBg} group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-7 h-7" />
                      </div>

                      <div className="flex flex-col items-end gap-1.5">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-xs ${config.tagColor}`}>
                          {config.badge}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Rentrée 17 Nov. 2026
                        </span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h2 className="text-2xl font-bold text-white group-hover:text-cfpmi-sky transition-colors line-clamp-2 leading-snug">
                      {filiere.titre}
                    </h2>
                    {filiere.sous_titre && (
                      <p className="text-xs font-semibold text-cfpmi-orange mt-1">
                        {filiere.sous_titre}
                      </p>
                    )}

                    {/* Highlight Box */}
                    <div className="mt-3.5 bg-[#0E1738] border border-blue-900/70 rounded-xl p-2.5 text-xs text-slate-200 font-medium flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-cfpmi-orange shrink-0 mt-0.5" />
                      <span>{config.highlight}</span>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                      {filiere.description_courte}
                    </p>

                    {/* Practical Info Grid */}
                    <div className="mt-5 space-y-2 border-t border-blue-900/60 pt-4 text-xs">
                      <div className="flex items-center gap-2 text-slate-200 font-semibold">
                        <Clock className="w-4 h-4 text-cfpmi-sky shrink-0" />
                        <span><strong>Durée :</strong> {filiere.duree}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Calendar className="w-4 h-4 text-cfpmi-orange shrink-0" />
                        <span><strong>Créneaux :</strong> {filiere.horaires}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span><strong>Immersion :</strong> Stage terrain garanti (CALD Expertise)</span>
                      </div>
                    </div>

                    {/* Débouchés clés au Sénégal */}
                    {filiere.debouches && filiere.debouches.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-blue-900/60">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2 tracking-wider">
                          Débouchés clés au Sénégal :
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {filiere.debouches.slice(0, 3).map((job, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-medium text-slate-200 bg-[#0E1738] hover:bg-[#152254] border border-blue-800/60 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span className="truncate max-w-[180px]">{job}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Pricing row + CTAs */}
                  <div className="mt-6 pt-5 border-t border-blue-900/60 space-y-3">
                    
                    {/* Tarifs sur demande bar */}
                    <div className="bg-[#0B1330] border border-blue-800/80 rounded-2xl p-3 flex items-center justify-between gap-2 shadow-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold block tracking-wider">
                          Tarifs & Modalités
                        </span>
                        <span className="text-xs font-bold text-cfpmi-sky">
                          Sur demande au secrétariat
                        </span>
                      </div>

                      <a
                        href={generateWhatsAppLink(
                          `Bonjour CFPMI Sénégal, je souhaite obtenir les tarifs et modalités d'inscription pour la formation : ${filiere.titre} (rentrée du 17 novembre 2026).`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-xs transition-transform hover:scale-105 whitespace-nowrap"
                        title="Demander les tarifs sur WhatsApp"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                        <span>Demander tarif</span>
                      </a>
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <Link
                        href={`/formations/${filiere.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-200 bg-[#162762] hover:bg-[#1C327A] hover:text-white py-3 px-3 rounded-xl border border-blue-700/60 transition-all text-center group/btn"
                      >
                        <span>Programme</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>

                      <Link
                        href={`/inscription?filiere=${filiere.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-extrabold text-white bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 py-3 px-3 rounded-xl transition-all text-center shadow-lg shadow-orange-500/25"
                      >
                        <GraduationCap className="w-4 h-4" />
                        <span>S&apos;inscrire</span>
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner for personalized guidance */}
        <div className="mt-16 bg-gradient-to-r from-[#121E4A] via-[#162762] to-[#121E4A] border border-blue-700/60 text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-cfpmi-orange bg-orange-500/20 border border-orange-500/40 px-3 py-1 rounded-full">
              Orientation Gratuite
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Vous hésitez entre plusieurs filières ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Passez visiter nos ateliers à Guédiawaye Hamo 6 ou échangez avec nos formateurs pour choisir le cursus le plus adapté à votre projet professionnel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={generateWhatsAppLink("Bonjour CFPMI, je souhaite être orienté pour choisir la formation la plus adaptée à mon profil.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-md transition-all whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Conseil WhatsApp</span>
            </a>

            <Link
              href="/inscription"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-lg shadow-orange-500/25 transition-all whitespace-nowrap"
            >
              <GraduationCap className="w-4 h-4" />
              <span>S&apos;inscrire en ligne</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
