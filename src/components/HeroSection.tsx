import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, CheckCircle, ArrowRight, Calendar, Sparkles, MapPin, Wrench, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CFPMI_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Decorative gradient background circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-cfpmi-marine/5 via-cfpmi-sky/10 to-cfpmi-orange/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column : Punchy Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 text-cfpmi-marine text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-xs">
              <Sparkles className="w-4 h-4 text-cfpmi-orange" />
              <span>CFPMI SÉNÉGAL • LA CLÉ DE LA RÉUSSITE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Formez-vous à un{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cfpmi-marine via-blue-700 to-cfpmi-sky">
                métier d&apos;avenir
              </span>
              , 100% pratique à Dakar.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Le <strong>CFPMI</strong> à Guédiawaye Hamo 6 forme des techniciens recherchés en{" "}
              <span className="text-cfpmi-marine font-semibold">Froid & Climatisation</span>,{" "}
              <span className="text-cfpmi-marine font-semibold">Électricité Bâtiment & Industrielle</span>,{" "}
              <span className="text-cfpmi-marine font-semibold">Plomberie</span> et{" "}
              <span className="text-cfpmi-marine font-semibold">Soudure</span>. Immersion en atelier, stages sur le terrain avec nos partenaires comme <em>CALD Expertise</em> et insertion rapide sur le marché de l&apos;emploi.
            </p>

            {/* Next intake highlight banner */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200/80 rounded-2xl p-4 text-left shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-cfpmi-orange text-white rounded-xl shadow-xs shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-cfpmi-red bg-red-100 px-2 py-0.5 rounded">
                      Rentrée Imminente
                    </span>
                    <span className="text-xs font-bold text-slate-700">Lundi 17 Novembre 2026</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mt-0.5">
                    Inscriptions en cours pour Froid/Clim et Électricité. Places limitées !
                  </p>
                </div>
              </div>
              <Link
                href="/inscription"
                className="text-xs font-bold text-white bg-cfpmi-orange hover:bg-orange-600 px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap shadow-xs"
              >
                Réserver ma place
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/inscription"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-base px-7 py-4 rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-5 py-4 rounded-xl border border-slate-200 shadow-xs transition-colors"
              >
                <span>Télécharger la brochure PDF</span>
              </Link>
            </div>

            {/* Trust checkmarks */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Pratique</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Stages terrain (CALD)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>CPS, CAP, BEP, BT, BTS</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Aide à l&apos;emploi</span>
              </div>
            </div>

          </div>

          {/* Right Column : Interactive Card with Logo & Workshop Highlights */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background badge shadow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cfpmi-marine to-cfpmi-sky rounded-3xl transform rotate-2 scale-[1.02] opacity-20 filter blur-xl" />

              {/* Main Card */}
              <div className="relative bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl">
                
                {/* Logo Banner */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div className="relative w-36 h-12">
                    <Image
                      src="/images/logo.png"
                      alt="CFPMI Sénégal"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="text-xs font-bold text-cfpmi-marine bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Dakar • Hamo 6
                  </span>
                </div>

                {/* Card Body Highlights */}
                <div className="py-6 space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="p-2 bg-blue-100 text-cfpmi-marine rounded-xl shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Ateliers Équipés Réels</h4>
                      <p className="text-xs text-slate-600">
                        Compresseurs, pompes à vide, planches de câblage industrielles, postes TIG et polyfuseuses PPR.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="p-2 bg-orange-100 text-cfpmi-orange rounded-xl shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Partenaires Chantiers</h4>
                      <p className="text-xs text-slate-600">
                        Immersion directe avec des entreprises de renom comme <strong>CALD Expertise</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Entrepreneuriat & Emploi</h4>
                      <p className="text-xs text-slate-600">
                        Nos diplômés créent leur propre entreprise (ex: Jafaridun / EFC) ou intègrent des chantiers BTP.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer Location */}
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-cfpmi-red" />
                    Guédiawaye, Hamo 6
                  </span>
                  <a
                    href={`tel:+${CFPMI_INFO.phoneSecondaryClean}`}
                    className="font-bold text-cfpmi-marine hover:underline"
                  >
                    {CFPMI_INFO.phoneSecondary}
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

