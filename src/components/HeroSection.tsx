import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Sparkles, MapPin, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { generateWhatsAppLink } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#080E21] via-[#0E1738] to-[#0A1128] text-white pt-8 pb-14 lg:pt-14 lg:pb-20 border-b border-blue-900/60">
      {/* Decorative ambient glow orbs in logo colors */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-cfpmi-sky/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cfpmi-orange/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column : Direct Headline & 2 Horizontal CTAs */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-[#121E4A] border border-cfpmi-sky/40 text-cfpmi-sky text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-cfpmi-orange" />
              <span>CFPMI SÉNÉGAL • GUÉDIAWAYE HAMO 6</span>
            </div>

            {/* Main Headline (Short & Punchy) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Apprenez un{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cfpmi-sky via-blue-400 to-cfpmi-orange">
                métier d&apos;avenir
              </span>
              , 100% pratique.
            </h1>

            {/* Short & Direct Subtitle */}
            <p className="text-sm sm:text-lg text-slate-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              <span className="text-cfpmi-sky font-bold">Froid & Climatisation</span> •{" "}
              <span className="text-cfpmi-orange font-bold">Électricité</span> •{" "}
              <span className="text-cyan-300 font-bold">Plomberie</span> •{" "}
              <span className="text-rose-400 font-bold">Soudure</span>.{" "}
              Ateliers équipés et stages chantiers garantis à Dakar.
            </p>

            {/* 2 Horizontal Buttons Side-by-Side (Mobile & Desktop) */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2 max-w-md mx-auto lg:mx-0">
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base px-4 sm:px-7 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <GraduationCap className="w-5 h-5 shrink-0" />
                <span>S&apos;inscrire</span>
              </Link>

              <a
                href={generateWhatsAppLink(
                  "Bonjour CFPMI Sénégal, je souhaite avoir des renseignements pour m'inscrire."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm sm:text-base px-4 sm:px-7 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                <span>Contacter</span>
              </a>
            </div>

            {/* Compact Diplomas Pills */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-1.5">
              {["CPS (6 mois)", "BT (3 ans)", "CAP", "BEP", "BTS"].map((diplome) => (
                <span
                  key={diplome}
                  className="bg-[#121E4A] border border-blue-700/60 text-cfpmi-sky text-[11px] font-bold px-2.5 py-1 rounded-full"
                >
                  🎓 {diplome}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column : Clean Visual Workshop Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border-2 border-cfpmi-sky/40 shadow-2xl shadow-blue-950/80 bg-[#121E4A]">
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src="/images/image1.jpeg"
                    alt="Travaux pratiques au CFPMI Dakar"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080E21] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-bold text-white bg-[#0E193F]/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-blue-700/50">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cfpmi-orange" />
                      Ateliers Hamo 6
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Stages garantis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
