import React from "react";
import { Wrench, HardHat, Award, Rocket } from "lucide-react";

export default function PracticalPillars() {
  const pillars = [
    {
      icon: Wrench,
      title: "100% Pratique en Atelier",
      desc: "Pas de cours magistraux interminables. Dès le premier jour, vous travaillez sur de vrais compresseurs, pompes à vide, armoires de distribution et postes de soudure.",
      color: "bg-cfpmi-sky text-white shadow-sky-500/30",
      border: "border-sky-500/30 hover:border-sky-400",
      accent: "text-cfpmi-sky",
    },
    {
      icon: HardHat,
      title: "Stages Terrain Assurés",
      desc: "Immersion directe sur de vrais chantiers à Dakar avec des partenaires de référence, notamment CALD Expertise, pour acquérir les réflexes du terrain.",
      color: "bg-cfpmi-orange text-white shadow-orange-500/30",
      border: "border-orange-500/30 hover:border-orange-400",
      accent: "text-cfpmi-orange",
    },
    {
      icon: Award,
      title: "Diplômes & Attestations",
      desc: "À l'issue de votre formation et de l'examen pratique, vous recevez un diplôme ou attestation reconnue (BT en 3 ans, CPS en 6 mois, CAP, BEP, BTS).",
      color: "bg-emerald-600 text-white shadow-emerald-500/30",
      border: "border-emerald-500/30 hover:border-emerald-400",
      accent: "text-emerald-400",
    },
    {
      icon: Rocket,
      title: "Accompagnement vers l'Emploi",
      desc: "Préparation aux entretiens, mise en relation avec notre réseau d'entreprises et coaching pour ceux qui souhaitent créer leur propre entreprise (comme Jafaridun).",
      color: "bg-cfpmi-red text-white shadow-red-500/30",
      border: "border-red-500/30 hover:border-red-400",
      accent: "text-rose-400",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0A1128] via-[#0D183E] to-[#080E21] text-white border-b border-blue-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cfpmi-sky bg-blue-950/80 px-3.5 py-1 rounded-full border border-blue-700/60">
            Méthode CFPMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pourquoi le CFPMI est la Clé de votre Réussite ?
          </h2>
          <p className="text-base text-slate-300">
            Une approche résolument tournée vers le résultat : vous rendre immédiatement opérationnel et capable de générer des revenus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className={`relative bg-[#121E4A] hover:bg-[#16255C] rounded-3xl p-6 sm:p-7 border ${pillar.border} shadow-xl shadow-black/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div>
                  <div className={`w-13 h-13 rounded-2xl ${pillar.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-105 transition-transform duration-200`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-blue-900/60 mt-5">
                  <span className={`text-xs font-bold ${pillar.accent}`}>
                    Garantie CFPMI &bull; Ateliers Hamo 6
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
