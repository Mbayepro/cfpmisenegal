import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, CheckCircle, ArrowRight, Calendar, Sparkles, MapPin, Wrench, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CFPMI_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#080E21] via-[#0E1738] to-[#0A1128] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-blue-900/60">
      {/* Decorative ambient glow orbs in logo colors */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cfpmi-sky/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cfpmi-orange/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cfpmi-marine/40 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column : Punchy Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-950/90 to-blue-900/60 border border-cfpmi-sky/40 text-cfpmi-sky text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg shadow-blue-950/40">
              <Sparkles className="w-4 h-4 text-cfpmi-orange" />
              <span>CFPMI SÉNÉGAL • LA CLÉ DE LA RÉUSSITE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Formez-vous à un{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cfpmi-sky via-blue-400 to-cfpmi-orange">
                métier d&apos;avenir
              </span>
              , 100% pratique à Dakar.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Le <strong>CFPMI</strong> à Guédiawaye Hamo 6 forme des techniciens recherchés en{" "}
              <span className="text-cfpmi-sky font-semibold">Froid & Climatisation</span>,{" "}
              <span className="text-cfpmi-orange font-semibold">Électricité Bâtiment & Industrielle</span>,{" "}
              <span className="text-cyan-300 font-semibold">Plomberie</span> et{" "}
              <span className="text-rose-400 font-semibold">Soudure</span>. Immersion en atelier, stages sur le terrain avec nos partenaires comme <em>CALD Expertise</em> et insertion rapide sur le marché de l&apos;emploi.
            </p>

            {/* Next intake highlight banner (Deep Marine + Orange Border) */}
            <div className="bg-[#121E4A] border-2 border-cfpmi-orange/70 rounded-2xl p-4 text-left shadow-xl shadow-orange-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-cfpmi-orange text-white rounded-xl shadow-md shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-cfpmi-red px-2 py-0.5 rounded shadow-xs">
                      Rentrée Imminente
                    </span>
                    <span className="text-xs font-extrabold text-cfpmi-sky">Lundi 17 Novembre 2026</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                    Inscriptions en cours pour Froid/Clim et Électricité. Places limitées en atelier !
                  </p>
                </div>
              </div>
              <Link
                href="/inscription"
                className="text-xs font-bold text-white bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap shadow-md shadow-orange-600/30"
              >
                Réserver ma place
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/inscription"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-base px-7 py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <GraduationCap className="w-5 h-5" />
                <span>S&apos;inscrire en ligne</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <a
                href={generateWhatsAppLink(
                  "Bonjour CFPMI, je souhaite m'inscrire pour la rentrée du 17 novembre 2026 en Froid & Climatisation ou Électricité."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base px-6 py-4 rounded-xl shadow-md transition-all duration-200 transform hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>WhatsApp ({CFPMI_INFO.phonePrimary})</span>
              </a>

              <Link
                href="/brochure"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#131F53] hover:bg-[#1A2A6C] text-slate-200 hover:text-white font-bold text-sm px-5 py-4 rounded-xl border border-blue-700/50 transition-colors"
              >
                <span>Télécharger la brochure</span>
              </Link>
            </div>

            {/* Diplomas Pills List */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-xs font-semibold text-slate-400 mr-1">Diplômes & Certifications :</span>
              {["BT en 3 ans (Post-BFEM)", "CPS (6 mois)", "CAP", "BEP", "BTS"].map((diplome) => (
                <span
                  key={diplome}
                  className="bg-[#121E4A] border border-blue-700/60 text-cfpmi-sky text-xs font-bold px-3 py-1 rounded-full shadow-xs"
                >
                  🎓 {diplome}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column : Visual Showcase Card (Workshop Photo & Badges) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Outer Card with Deep Marine + Glowing Gradient Border */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-cfpmi-sky/40 shadow-2xl shadow-blue-950/80 bg-[#121E4A]">

                {/* Real Workshop Photo */}
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/image1.jpeg"
                    alt="Travaux pratiques en froid et climatisation au CFPMI Dakar"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080E21] via-transparent to-transparent opacity-80" />
                </div>

                {/* Bottom Card Overlay Info */}
                <div className="p-6 bg-[#0E193F] border-t border-blue-800/60 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cfpmi-sky uppercase tracking-wider flex items-center gap-1.5">
                      <Wrench className="w-4 h-4 text-cfpmi-orange" />
                      Atelier Climatisation & Froid
                    </span>
                    <span className="text-xs font-bold text-white bg-cfpmi-orange px-2.5 py-0.5 rounded-full shadow-xs">
                      100% Pratique
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Montage, dépannage, détection de pannes et câblage sur bancs réels à Guédiawaye Hamo 6.
                  </p>

                  <div className="pt-2 border-t border-blue-900/60 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cfpmi-red" />
                      <span>Guédiawaye, Hamo 6</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Stages CALD Expertise</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Pill: Jafaridun Success Story */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#162762] border-2 border-cfpmi-orange p-3.5 rounded-2xl shadow-xl max-w-xs flex items-center gap-3 animate-in zoom-in-95 duration-500">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20">
                  <Image
                    src="/images/image2.jpeg"
                    alt="Jafaridun - Fondateur d'EFC"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Jafaridun 🇸🇳➡️🇰🇲</p>
                  <p className="text-[11px] text-slate-300">Formé au CFPMI, créateur d&apos;EFC aux Comores</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
