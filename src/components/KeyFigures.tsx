import React from "react";
import { Users, Award, Briefcase, Wrench } from "lucide-react";

export default function KeyFigures() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Techniciens Formés",
      subtext: "Opérationnels sur le marché",
      color: "text-cfpmi-sky",
      badgeBg: "bg-blue-500/20 text-cfpmi-sky border border-blue-400/30",
      cardBorder: "hover:border-cfpmi-sky/60",
    },
    {
      icon: Briefcase,
      value: "94%",
      label: "Taux d'Insertion",
      subtext: "Emploi ou création d'entreprise",
      color: "text-cfpmi-orange",
      badgeBg: "bg-orange-500/20 text-cfpmi-orange border border-orange-400/30",
      cardBorder: "hover:border-cfpmi-orange/60",
    },
    {
      icon: Wrench,
      value: "100%",
      label: "Pratique en Atelier",
      subtext: "Sur équipements professionnels",
      color: "text-cyan-300",
      badgeBg: "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30",
      cardBorder: "hover:border-cyan-400/60",
    },
    {
      icon: Award,
      value: "100%",
      label: "Stages Terrain Assurés",
      subtext: "Partenariats (CALD Expertise...)",
      color: "text-rose-400",
      badgeBg: "bg-rose-500/20 text-rose-300 border border-rose-400/30",
      cardBorder: "hover:border-rose-400/60",
    },
  ];

  return (
    <section className="py-12 bg-[#080E21] border-b border-blue-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`bg-[#121E4A] hover:bg-[#16255C] rounded-2xl p-6 border border-blue-800/60 shadow-xl shadow-blue-950/40 transition-all duration-300 text-center flex flex-col items-center group hover:-translate-y-1 ${stat.cardBorder}`}
              >
                <div className={`p-3 rounded-2xl ${stat.badgeBg} mb-3 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white mt-1.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
