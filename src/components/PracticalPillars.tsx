import React from "react";
import { Wrench, HardHat, Award, Rocket, CheckCircle } from "lucide-react";

export default function PracticalPillars() {
  const pillars = [
    {
      icon: Wrench,
      title: "100% Pratique en Atelier",
      desc: "Pas de cours magistraux interminables. Dès le premier jour, vous travaillez sur de vrais compresseurs, pompes à vide, armoires de distribution et postes de soudure.",
      color: "bg-blue-600",
    },
    {
      icon: HardHat,
      title: "Stages Terrain avec nos Partenaires",
      desc: "Immersion directe sur de vrais chantiers à Dakar avec des partenaires de référence, notamment CALD Expertise, pour acquérir les réflexes du terrain.",
      color: "bg-cfpmi-orange",
    },
    {
      icon: Award,
      title: "Attestation Reconnue",
      desc: "À l'issue de votre formation et de l'examen pratique, vous recevez une Attestation de Compétence Professionnelle reconnue par les entreprises du secteur.",
      color: "bg-emerald-600",
    },
    {
      icon: Rocket,
      title: "Accompagnement vers l'Emploi",
      desc: "Préparation aux entretiens, mise en relation avec notre réseau d'entreprises et coaching pour ceux qui souhaitent créer leur propre atelier ou entreprise.",
      color: "bg-cfpmi-red",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cfpmi-marine bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Méthode CFPMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pourquoi le CFPMI est la Clé de votre Réussite ?
          </h2>
          <p className="text-base text-slate-600">
            Une approche résolument tournée vers le résultat : vous rendre immédiatement opérationnel et capable de générer des revenus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="relative bg-slate-50/80 rounded-3xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${pillar.color} text-white flex items-center justify-center shadow-md mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Standard certifié CFPMI</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

