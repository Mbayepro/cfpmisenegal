"use client";

import React, { useState } from "react";
import { submitContact } from "@/lib/supabase";
import { CFPMI_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Send,
  CheckCircle2,
  Navigation,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "Renseignements sur les formations",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nom || !formData.telephone || !formData.message) return;

    setIsSubmitting(true);
    try {
      await submitContact(formData);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cfpmi-marine bg-blue-100/70 px-4 py-1.5 rounded-full">
            À Votre Écoute
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contactez le CFPMI Sénégal
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Une question sur la rentrée, les programmes ou l&apos;accès à nos ateliers ? Écrivez-nous ou venez directement à Guédiawaye Hamo 6.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Coordinates Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Nos Coordonnées Directes
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 text-cfpmi-red rounded-2xl shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase">Adresse physique</h3>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{CFPMI_INFO.address}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Accessible via le BRT et les lignes de bus de Guédiawaye.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-cfpmi-marine rounded-2xl shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase">Lignes Téléphoniques</h3>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      <a href={`tel:+${CFPMI_INFO.phonePrimaryClean}`} className="hover:text-cfpmi-orange">
                        {CFPMI_INFO.phonePrimary}
                      </a>{" "}
                      (Principal / WhatsApp)
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      <a href={`tel:+${CFPMI_INFO.phoneSecondaryClean}`} className="hover:text-cfpmi-orange font-semibold">
                        {CFPMI_INFO.phoneSecondary}
                      </a>{" "}
                      (Ligne Inscriptions)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-50 text-cfpmi-orange rounded-2xl shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase">Courrier Électronique</h3>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      <a href={`mailto:${CFPMI_INFO.email}`} className="hover:underline">
                        {CFPMI_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase">Horaires d&apos;Ouverture</h3>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{CFPMI_INFO.openingHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-900/10 text-blue-900 rounded-2xl shrink-0 mt-0.5">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase">Réseaux Sociaux</h3>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      <a href={CFPMI_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-800">
                        facebook.com/cfpmisenegal
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href={generateWhatsAppLink("Bonjour CFPMI, je souhaite vous contacter pour des informations.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Démarrer un chat WhatsApp instantané</span>
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message envoyé avec succès !</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Merci {formData.nom}. Notre secrétariat prendra contact avec vous dans les plus brefs délais au {formData.telephone}.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-bold text-cfpmi-marine hover:underline"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-lg font-bold text-slate-900">
                      Envoyez-nous un Message
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Remplissez ce formulaire et nous vous répondrons sous 24 heures.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Ex: Fatou Ndiaye"
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-cfpmi-marine focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Numéro de téléphone *
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="Ex: 77 694 78 71"
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-cfpmi-marine focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Email (facultatif)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ex: contact@email.com"
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-cfpmi-marine focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Objet du message
                      </label>
                      <select
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleChange}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-cfpmi-marine focus:outline-none"
                      >
                        <option value="Renseignements sur les formations">Renseignements formations</option>
                        <option value="Inscription Rentrée 17 Novembre">Inscription rentrée imminente</option>
                        <option value="Devis entreprise / Formation à la carte">Devis entreprise / Formation à la carte</option>
                        <option value="Partenariat / Stage">Partenariat & Stages</option>
                        <option value="Autre demande">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Votre Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Posez votre question ou détaillez votre projet..."
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-cfpmi-marine focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cfpmi-marine to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white font-extrabold text-sm py-4 px-6 rounded-xl shadow-lg transition-all"
                  >
                    <Send className="w-4 h-4 text-cfpmi-orange" />
                    <span>{isSubmitting ? "Envoi en cours..." : "Envoyer mon message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Full Width Google Maps */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cfpmi-red" />
                Localisation Satellite & Itinéraire
              </h3>
              <p className="text-xs text-slate-500">
                Centre CFPMI à Guédiawaye, quartier Hamo 6, Dakar.
              </p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("CFPMI Hamo 6 Guediawaye Dakar")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cfpmi-marine bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors w-fit"
            >
              <Navigation className="w-4 h-4 text-cfpmi-sky" />
              <span>Ouvrir dans Google Maps App</span>
            </a>
          </div>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
            <iframe
              title="Google Maps Location CFPMI Hamo 6 Guédiawaye"
              src="https://maps.google.com/maps?q=Hamo%206,%20Guediawaye,%20Dakar,%20Senegal&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </div>
  );
}

