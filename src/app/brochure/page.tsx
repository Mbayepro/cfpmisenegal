"use client";

import React, { useState } from "react";
import { submitLeadBrochure } from "@/lib/supabase";
import { CFPMI_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  FileText,
  Download,
  CheckCircle,
  Sparkles,
  Phone,
  ShieldCheck,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export default function BrochurePage() {
  const [nomComplet, setNomComplet] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [filiereInteret, setFiliereInteret] = useState("Froid et Climatisation");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomComplet.trim() || !whatsapp.trim()) return;

    setIsSubmitting(true);
    try {
      await submitLeadBrochure({
        nom_complet: nomComplet,
        whatsapp,
        filiere_interet: filiereInteret,
      });

      setIsDownloaded(true);

      // Trigger automatic download of brochure document
      const blob = new Blob(
        [
          `CFPMI SÉNÉGAL - CLÉ DE LA RÉUSSITE
Centre de Formation Professionnelle aux Métiers de l'Industrie
Guédiawaye, Hamo 6, Dakar
Tél / WhatsApp : +221 77 694 78 71 / +221 76 461 14 63
Email : cfpmidakar@gmail.com
--------------------------------------------------------------------------------
BROCHURE OFFICIELLE & PROGRAMME DÉTAILLÉ (SESSION 2026 - 2027)

FILIÈRES CERTIFIANTES (100% PRATIQUE EN ATELIER) :
1. Froid et Climatisation (Domestique, Commerciale et Industrielle)
   - Durée : 6 mois accéléré + Stage terrain (CALD Expertise)
   - Frais d'inscription : 35 000 FCFA
   - Mensualité : 45 000 FCFA
   - Débouchés : Frigoriste d'intervention, installateur VRV, mainteneur chambres froides.

2. Électricité Bâtiment & Industrielle
   - Durée : 6 mois accéléré + Stage terrain
   - Frais d'inscription : 35 000 FCFA
   - Mensualité : 40 000 FCFA
   - Débouchés : Électricien bâtiment, câbleur d'armoires industrielles, solaire.

3. Plomberie Sanitaire & Réseaux
   - Durée : 6 mois accéléré + Stage terrain
   - Frais d'inscription : 35 000 FCFA
   - Mensualité : 40 000 FCFA
   - Débouchés : Installateur sanitaire moderne, poseur surpresseurs, artisan indépendant.

4. Soudure Métallique & Tuyauterie
   - Durée : 6 mois intensif + Stage terrain
   - Frais d'inscription : 35 000 FCFA
   - Mensualité : 45 000 FCFA
   - Débouchés : Soudeur ARC (MMA), TIG inox, métallurgie et charpente.

5. Formations à la Carte / Entreprises (1 à 3 mois sur mesure).

CONDITIONS D'ADMISSION :
- Avoir au minimum 16 ans
- Savoir lire et écrire
- Dossier : Photocopie CNI, 2 photos, fiche d'inscription.

PROCHAINE RENTRÉE : LUNDI 17 NOVEMBRE 2026 !
Rejoignez-nous à Hamo 6, Guédiawaye, Dakar.
`,
        ],
        { type: "text/plain;charset=utf-8" }
      );
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CFPMI_Brochure_Formations_2026_2027.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cfpmi-marine bg-blue-100/70 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-cfpmi-orange" />
            Documentation Gratuite
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Téléchargez la Brochure Complète du CFPMI
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Retrouvez le programme détaillé des cours, la liste du matériel fourni en atelier, les horaires et les débouchés professionnels au Sénégal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left: Presentation & Perks */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-cfpmi-marine to-blue-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
              <div className="p-3 bg-white/10 rounded-2xl w-fit">
                <BookOpen className="w-8 h-8 text-cfpmi-sky" />
              </div>
              <h3 className="text-xl font-bold">
                Ce que contient la brochure :
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cfpmi-orange shrink-0 mt-0.5" />
                  <span>Programmes complets des 5 filières techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cfpmi-orange shrink-0 mt-0.5" />
                  <span>Grille tarifaire détaillée et échéanciers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cfpmi-orange shrink-0 mt-0.5" />
                  <span>Modalités de stages avec CALD Expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cfpmi-orange shrink-0 mt-0.5" />
                  <span>Calendrier de rentrée du 17 novembre 2026</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-blue-800 text-xs text-blue-200 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cfpmi-sky" />
                <span>Format immédiat & direct</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              {isDownloaded ? (
                <div className="text-center space-y-6 py-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Merci {nomComplet} !
                    </h3>
                    <p className="text-sm text-slate-600 mt-2">
                      Le téléchargement de votre brochure a démarré. Notre équipe pédagogique vous contactera sur WhatsApp au <strong>{whatsapp}</strong> pour répondre à toutes vos questions.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col gap-3">
                    <a
                      href={generateWhatsAppLink(
                        `Bonjour CFPMI Sénégal, je viens de télécharger la brochure pour la filière ${filiereInteret}. Mon nom est ${nomComplet}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow transition-all"
                    >
                      <WhatsAppIcon className="w-5 h-5 fill-white" />
                      <span>Échanger directement sur WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Remplissez vos coordonnées
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Accédez instantanément au guide des formations.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Votre Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={nomComplet}
                      onChange={(e) => setNomComplet(e.target.value)}
                      placeholder="Ex: Babacar Ndiaye"
                      className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-cfpmi-marine focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Numéro WhatsApp joignable *
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Ex: 77 694 78 71"
                      className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-cfpmi-marine focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Filière qui vous intéresse le plus
                    </label>
                    <select
                      value={filiereInteret}
                      onChange={(e) => setFiliereInteret(e.target.value)}
                      className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-cfpmi-marine focus:outline-none"
                    >
                      <option value="Froid et Climatisation">Froid et Climatisation</option>
                      <option value="Électricité Bâtiment & Industrielle">Électricité Bâtiment & Industrielle</option>
                      <option value="Plomberie Sanitaire">Plomberie Sanitaire</option>
                      <option value="Soudure Métallique">Soudure Métallique</option>
                      <option value="Formation à la Carte">Formation sur mesure</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm py-4 px-6 rounded-xl shadow-lg transition-all"
                  >
                    <Download className="w-5 h-5" />
                    <span>{isSubmitting ? "Préparation du document..." : "Télécharger la brochure gratuite"}</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    Vos données sont strictement confidentielles et utilisées uniquement par le CFPMI.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

