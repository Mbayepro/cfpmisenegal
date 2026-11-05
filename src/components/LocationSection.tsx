import React from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CFPMI_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";

export default function LocationSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0A1128] via-[#0D183E] to-[#080E21] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cfpmi-orange bg-orange-950/80 px-3.5 py-1 rounded-full border border-orange-500/40">
              Nos Locaux à Dakar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Venez visiter nos ateliers à Guédiawaye Hamo 6
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Nos ateliers sont ouverts du lundi au samedi pour vous accueillir, vous faire découvrir nos équipements et échanger avec nos formateurs techniques.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-[#121E4A] rounded-2xl border border-blue-800/70 shadow-lg">
                <div className="p-2.5 bg-red-500/20 text-rose-400 rounded-xl shrink-0 mt-0.5 border border-red-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-cfpmi-orange uppercase tracking-wider">Adresse exacte</h4>
                  <p className="text-sm font-bold text-white mt-0.5">{CFPMI_INFO.address}</p>
                  <p className="text-xs text-slate-300 mt-1">À quelques minutes de la station BRT et des terminus bus de Guédiawaye.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#121E4A] rounded-2xl border border-blue-800/70 shadow-lg">
                <div className="p-2.5 bg-blue-500/20 text-cfpmi-sky rounded-xl shrink-0 mt-0.5 border border-blue-400/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-cfpmi-sky uppercase tracking-wider">Téléphone & WhatsApp</h4>
                  <p className="text-sm font-bold text-white mt-0.5">{CFPMI_INFO.phonePrimary} / {CFPMI_INFO.phoneSecondary}</p>
                  <p className="text-xs text-slate-300 mt-1">Ligne directe pour guidage GPS et formalités d&apos;inscription.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#121E4A] rounded-2xl border border-blue-800/70 shadow-lg">
                <div className="p-2.5 bg-orange-500/20 text-cfpmi-orange rounded-xl shrink-0 mt-0.5 border border-orange-500/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-cfpmi-orange uppercase tracking-wider">Horaires d&apos;ouverture</h4>
                  <p className="text-sm font-bold text-white mt-0.5">{CFPMI_INFO.openingHours}</p>
                  <p className="text-xs text-slate-300 mt-1">Créneaux de formation : Jour, Cours du Soir et Samedi intensif.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("CFPMI Hamo 6 Guediawaye Dakar Senegal")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#162762] hover:bg-[#1C327A] text-white font-bold text-sm px-5 py-3.5 rounded-xl border border-blue-700/60 shadow-lg transition-colors"
              >
                <Navigation className="w-4 h-4 text-cfpmi-sky" />
                <span>Ouvrir dans Google Maps</span>
              </a>

              <a
                href={generateWhatsAppLink("Bonjour CFPMI, je souhaite me rendre à votre centre à Hamo 6. Pouvez-vous me partager votre repère exact ?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-5 py-3.5 rounded-xl shadow-lg transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Demander le repère WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden border-2 border-blue-800/80 shadow-2xl bg-slate-900">
              <iframe
                title="Carte Google Maps CFPMI Guédiawaye Hamo 6"
                src="https://maps.google.com/maps?q=Hamo%206,%20Guediawaye,%20Dakar,%20Senegal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
