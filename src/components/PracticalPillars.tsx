import React from "react";
import { Wrench, HardHat, Award, Rocket } from "lucide-react";

export default function PracticalPillars() {
  const pillars = [
    {
      icon: Wrench,
      title: "80% Pratique en Atelier",
      desc: "Manipulation directe sur compresseurs, armoires électriques et postes de soudure.",
      color: "bg-cfpmi-sky text-white shadow-sky-500/30",
      border: "border-sky-500/30",
    },
    {
      icon: HardHat,
      title: "Stage Chantier Garanti",
      desc: "Immersion sur le terrain à Dakar avec notre partenaire CALD Expertise.",
      color: "bg-cfpmi-orange text-white shadow-orange-500/30",
      border: "border-orange-500/30",
    },
    {
      icon: Award,
      title: "Diplômes Reconnus",
      desc: "CPS en 6 mois, CAP, BEP, BT en 3 ans et BTS.",
      color: "bg-emerald-600 text-white shadow-emerald-500/30",
      border: "border-emerald-500/30",
    },
    {
      icon: Rocket,
      title: "Emploi & Entrepreneuriat",
      desc: "Insertion rapide en entreprise ou accompagnement pour ouvrir votre atelier.",
      color: "bg-cfpmi-red text-white shadow-red-500/30",
      border: "border-red-500/30",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#0A1128] via-[#0D183E] to-[#080E21] text-white border-b border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Pourquoi choisir le CFPMI ?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className={`bg-[#121E4A] rounded-2xl p-5 border ${pillar.border} shadow-lg flex items-start gap-4`}
              >
                <div className={`w-11 h-11 rounded-xl ${pillar.color} flex items-center justify-center shrink-0 shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
