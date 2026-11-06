import React from "react";
import { Users, Award, Briefcase, Wrench } from "lucide-react";

export default function KeyFigures() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Techniciens Formés",
      color: "text-cfpmi-sky",
      badgeBg: "bg-blue-500/20 text-cfpmi-sky border border-blue-400/30",
    },
    {
      icon: Briefcase,
      value: "94%",
      label: "Insertion Pro",
      color: "text-cfpmi-orange",
      badgeBg: "bg-orange-500/20 text-cfpmi-orange border border-orange-400/30",
    },
    {
      icon: Wrench,
      value: "100%",
      label: "Pratique Atelier",
      color: "text-cyan-300",
      badgeBg: "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30",
    },
    {
      icon: Award,
      value: "100%",
      label: "Stages Garantis",
      color: "text-rose-400",
      badgeBg: "bg-rose-500/20 text-rose-300 border border-rose-400/30",
    },
  ];

  return (
    <section className="py-6 sm:py-8 bg-[#080E21] border-b border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-[#121E4A] rounded-2xl p-4 border border-blue-800/60 shadow-lg flex items-center gap-3.5"
              >
                <div className={`p-2.5 rounded-xl ${stat.badgeBg} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xl sm:text-2xl font-extrabold leading-none ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-1">
                    {stat.label}
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
