import React from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CFPMI_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";

export default function LocationSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cfpmi-red bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
              Nos Locaux à Dakar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Venez visiter nos ateliers à Guédiawaye Hamo 6
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Nos ateliers sont ouverts du lundi au samedi pour vous accueillir, vous faire découvrir nos équipements et échanger avec nos formateurs techniques.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="p-2 bg-red-50 text-cfpmi-red rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase">Adresse exacte</h4>
                  <p className="text-sm font-bold text-slate-900">{CFPMI_INFO.address}</p>
                  <p className="text-xs text-slate-500 mt-0.5">À quelques minutes de la station BRT et des terminus bus de Guédiawaye.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="p-2 bg-blue-50 text-cfpmi-marine rounded-xl shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase">Téléphone & WhatsApp</h4>
                  <p className="text-sm font-bold text-slate-900">{CFPMI_INFO.phonePrimary} / {CFPMI_INFO.phoneSecondary}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Ligne directe pour guidage GPS et formalités d&apos;inscription.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="p-2 bg-amber-50 text-amber-700 rounded-xl shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase">Horaires d&apos;accueil</h4>
                  <p className="text-sm font-bold text-slate-900">{CFPMI_INFO.openingHours}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("CFPMI Hamo 6 Guediawaye Dakar Senegal")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-cfpmi-marine hover:bg-blue-900 text-white font-bold text-sm px-5 py-3 rounded-xl shadow transition-colors"
              >
                <Navigation className="w-4 h-4 text-cfpmi-sky" />
                <span>Ouvrir dans Google Maps</span>
              </a>

              <a
                href={generateWhatsAppLink("Bonjour CFPMI, je souhaite me rendre à votre centre à Hamo 6. Pouvez-vous me partager votre repère exact ?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-5 py-3 rounded-xl shadow transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Demander le repère WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-200">
              <iframe
                title="Carte Google Maps CFPMI Guédiawaye Hamo 6"
                src="https://maps.google.com/maps?q=Hamo%206,%20Guediawaye,%20Dakar,%20Senegal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-md border border-slate-200/80 flex items-center gap-2 pointer-events-none">
                <MapPin className="w-4 h-4 text-cfpmi-red" />
                <span className="text-xs font-bold text-slate-800">CFPMI Sénégal • Guédiawaye Hamo 6</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

