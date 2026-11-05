import React from "react";
import { Users, Award, Briefcase, Wrench } from "lucide-react";

export default function KeyFigures() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Techniciens Formés",
      subtext: "Opérationnels sur le marché",
      color: "text-cfpmi-marine",
      bg: "bg-blue-50",
    },
    {
      icon: Briefcase,
      value: "94%",
      label: "Taux d'Insertion",
      subtext: "Emploi ou création d'entreprise",
      color: "text-cfpmi-orange",
      bg: "bg-orange-50",
    },
    {
      icon: Wrench,
      value: "100%",
      label: "Pratique en Atelier",
      subtext: "Sur équipements professionnels",
      color: "text-cfpmi-sky",
      bg: "bg-sky-50",
    },
    {
      icon: Award,
      value: "100%",
      label: "Stages Terrain Assurés",
      subtext: "Partenariats (CALD Expertise...)",
      color: "text-cfpmi-red",
      bg: "bg-red-50",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-5 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-200 text-center flex flex-col items-center"
              >
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} mb-3`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
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

