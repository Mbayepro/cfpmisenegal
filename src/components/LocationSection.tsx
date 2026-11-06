import React from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CFPMI_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";

export default function LocationSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#0A1128] via-[#0D183E] to-[#080E21] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cfpmi-orange">
                Localisation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Guédiawaye, Hamo 6 — Dakar
              </h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3.5 bg-[#121E4A] rounded-2xl border border-blue-800/70">
                <div className="p-2 bg-red-500/20 text-rose-400 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{CFPMI_INFO.address}</p>
                  <p className="text-xs text-slate-300">À proximité du BRT et terminus Guédiawaye</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-[#121E4A] rounded-2xl border border-blue-800/70">
                <div className="p-2 bg-blue-500/20 text-cfpmi-sky rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{CFPMI_INFO.phonePrimary} / {CFPMI_INFO.phoneSecondary}</p>
                  <p className="text-xs text-slate-300">Appels & WhatsApp</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-[#121E4A] rounded-2xl border border-blue-800/70">
                <div className="p-2 bg-orange-500/20 text-cfpmi-orange rounded-xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{CFPMI_INFO.openingHours}</p>
                  <p className="text-xs text-slate-300">Cours du Jour & Cours du Soir</p>
                </div>
              </div>
            </div>

            {/* 2 Horizontal Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("CFPMI Hamo 6 Guediawaye Dakar Senegal")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#162762] hover:bg-[#1C327A] text-white font-bold text-xs sm:text-sm px-4 py-3.5 rounded-xl border border-blue-700/60 shadow-lg transition-colors"
              >
                <Navigation className="w-4 h-4 text-cfpmi-sky shrink-0" />
                <span>Google Maps</span>
              </a>

              <a
                href={generateWhatsAppLink("Bonjour CFPMI, pouvez-vous m'envoyer la localisation exacte à Hamo 6 ?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm px-4 py-3.5 rounded-xl shadow-lg transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                <span>Contacter</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden border-2 border-blue-800/80 shadow-2xl bg-slate-900">
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
