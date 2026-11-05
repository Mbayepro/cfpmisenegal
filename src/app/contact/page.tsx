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
  Sparkles,
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
    <div className="bg-gradient-to-b from-[#080E21] via-[#0D183E] to-[#0A1128] text-white min-h-screen py-12 sm:py-20 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-80 bg-cfpmi-sky/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
          <div className="inline-flex items-center gap-2 bg-[#121E4A] border border-cfpmi-orange/40 px-4 py-1.5 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-cfpmi-orange" />
            <span className="text-xs font-bold uppercase tracking-wider text-cfpmi-orange">
              À Votre Écoute • CFPMI Sénégal
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contactez le CFPMI Sénégal
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Une question sur les inscriptions, le programme des cours ou une visite de nos ateliers à Guédiawaye ? Notre équipe vous répond immédiatement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Coordinates Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121E4A] rounded-3xl p-6 sm:p-8 border border-blue-800/70 shadow-2xl space-y-6">
              <h2 className="text-xl font-bold text-white border-b border-blue-900/60 pb-4">
                Nos Coordonnées Directes
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/20 text-rose-400 rounded-2xl shrink-0 mt-0.5 border border-red-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-cfpmi-orange uppercase tracking-wider">Adresse physique</h3>
                    <p className="text-sm font-bold text-white mt-0.5">{CFPMI_INFO.address}</p>
                    <p className="text-xs text-slate-300 mt-1">
                      Accessible via le BRT et les lignes de bus de Guédiawaye.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 text-cfpmi-sky rounded-2xl shrink-0 mt-0.5 border border-blue-400/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-cfpmi-sky uppercase tracking-wider">Lignes Téléphoniques</h3>
                    <p className="text-sm font-bold text-white mt-0.5">
                      <a href={`tel:+${CFPMI_INFO.phonePrimaryClean}`} className="hover:text-cfpmi-orange">
                        {CFPMI_INFO.phonePrimary}
                      </a>{" "}
                      (Principal / WhatsApp)
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      <a href={`tel:+${CFPMI_INFO.phoneSecondaryClean}`} className="hover:text-cfpmi-orange font-semibold">
                        {CFPMI_INFO.phoneSecondary}
                      </a>{" "}
                      (Ligne Inscriptions)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/20 text-cfpmi-orange rounded-2xl shrink-0 mt-0.5 border border-orange-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-cfpmi-orange uppercase tracking-wider">Courrier Électronique</h3>
                    <p className="text-sm font-bold text-white mt-0.5">
                      <a href={`mailto:${CFPMI_INFO.email}`} className="hover:underline text-slate-200">
                        {CFPMI_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl shrink-0 mt-0.5 border border-emerald-500/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Horaires d&apos;Ouverture</h3>
                    <p className="text-sm font-bold text-white mt-0.5">{CFPMI_INFO.openingHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-900/30 text-blue-400 rounded-2xl shrink-0 mt-0.5 border border-blue-700/50">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Réseaux Sociaux</h3>
                    <p className="text-sm font-bold text-white mt-0.5">
                      <a href={CFPMI_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline text-cfpmi-sky">
                        facebook.com/cfpmisenegal
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-blue-900/60">
                <a
                  href={generateWhatsAppLink("Bonjour CFPMI, je souhaite vous contacter pour des informations.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Démarrer un chat WhatsApp instantané</span>
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#121E4A] rounded-3xl p-6 sm:p-10 border border-blue-800/70 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message envoyé avec succès !</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Merci {formData.nom}. Notre secrétariat prendra contact avec vous dans les plus brefs délais au {formData.telephone}.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-bold text-cfpmi-orange hover:underline"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-blue-900/60 pb-4">
                    <h3 className="text-lg font-bold text-white">
                      Envoyez-nous un Message
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Remplissez ce formulaire et nous vous répondrons sous 24 heures.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Ex: Fatou Ndiaye"
                        className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Numéro de téléphone *
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="Ex: 77 694 78 71"
                        className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Email (facultatif)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ex: contact@email.com"
                        className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Objet du message
                      </label>
                      <select
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleChange}
                        className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                      >
                        <option value="Renseignements sur les formations">Renseignements sur les formations</option>
                        <option value="Inscription session 17 novembre">Inscription session 17 novembre</option>
                        <option value="BT Froid et Climatisation (Post-BFEM)">BT Froid et Climatisation (Post-BFEM)</option>
                        <option value="Formation à la carte pour entreprise">Formation à la carte pour entreprise</option>
                        <option value="Partenariat de stage / Recrutement">Partenariat de stage / Recrutement</option>
                        <option value="Autre demande">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Votre Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Bonjour, je souhaite en savoir plus sur la formation en froid et climatisation..."
                      className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm py-4 px-6 rounded-xl shadow-lg shadow-orange-500/25 transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Envoi en cours..." : "Envoyer mon message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
