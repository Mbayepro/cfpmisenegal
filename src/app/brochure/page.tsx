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
    if (!nomComplet || !whatsapp) return;

    setIsSubmitting(true);
    try {
      await submitLeadBrochure({
        nom_complet: nomComplet,
        whatsapp: whatsapp,
        filiere_interet: filiereInteret,
      });

      setIsDownloaded(true);

      const blob = new Blob(
        [
          `CFPMI SÉNÉGAL — GUIDE OFFICIEL DES FORMATIONS
Centre de Formation Professionnelle aux Métiers de l'Industrie
"Clé de la Réussite"
Guédiawaye, Hamo 6, Dakar
Tél / WhatsApp : +221 77 694 78 71 / +221 76 461 14 63
Email : cfpmidakar@gmail.com
--------------------------------------------------------------------------------
BROCHURE OFFICIELLE & PROGRAMME DÉTAILLÉ (SESSION 2026 - 2027)

FILIÈRES CERTIFIANTES (100% PRATIQUE EN ATELIER) :
1. BT Froid et Climatisation (Post-BFEM)
   - Durée : 3 ans (Brevet de Technicien d'État)
   - Alternative technique au Baccalauréat
   - Débouchés : Frigoriste certifié, technicien maintenance, poursuite BTS.

2. Froid et Climatisation (CPS Accéléré)
   - Durée : 6 mois accéléré + Stage terrain (CALD Expertise)
   - Débouchés : Frigoriste d'intervention, installateur VRV, mainteneur chambres froides.

3. Électricité Bâtiment & Industrielle
   - Durée : 6 mois accéléré + Stage terrain
   - Débouchés : Électricien bâtiment, câbleur d'armoires industrielles, solaire.

4. Plomberie Sanitaire & Réseaux
   - Durée : 6 mois accéléré + Stage terrain
   - Débouchés : Installateur sanitaire moderne, poseur surpresseurs, artisan indépendant.

5. Soudure Métallique & Tuyauterie
   - Durée : 6 mois intensif + Stage terrain
   - Débouchés : Soudeur ARC (MMA), TIG inox, métallurgie et charpente.

6. Formations à la Carte / Entreprises (1 à 3 mois sur mesure).

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
    <div className="bg-gradient-to-b from-[#080E21] via-[#0D183E] to-[#0A1128] text-white min-h-screen py-12 sm:py-20 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-80 bg-cfpmi-sky/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cfpmi-orange bg-orange-950/80 border border-orange-500/40 px-4 py-1.5 rounded-full shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-cfpmi-orange" />
            Documentation Gratuite • CFPMI
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Téléchargez la Brochure Complète du CFPMI
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Retrouvez le programme détaillé des cours, la liste du matériel fourni en atelier, les horaires et les débouchés professionnels au Sénégal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left: Presentation & Perks */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-[#121E4A] border border-blue-800/70 text-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
              <div className="p-3 bg-blue-500/20 rounded-2xl w-fit border border-blue-400/30">
                <BookOpen className="w-8 h-8 text-cfpmi-sky" />
              </div>
              <h3 className="text-xl font-bold">
                Ce que contient la brochure :
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cfpmi-orange shrink-0 mt-0.5" />
                  <span>Programmes complets des filières techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cfpmi-orange shrink-0 mt-0.5" />
                  <span>Modalités de stages avec CALD Expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cfpmi-orange shrink-0 mt-0.5" />
                  <span>Calendrier de rentrée du 17 novembre 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cfpmi-orange shrink-0 mt-0.5" />
                  <span>Cursus BT en 3 ans (Post-BFEM) et CPS (6 mois)</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-blue-900/60 text-xs text-cfpmi-sky flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cfpmi-sky" />
                <span>Format immédiat & direct</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-7">
            <div className="bg-[#121E4A] rounded-3xl p-6 sm:p-10 border border-blue-800/70 shadow-2xl">
              {isDownloaded ? (
                <div className="text-center space-y-6 py-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Merci {nomComplet} !
                    </h3>
                    <p className="text-sm text-slate-300 mt-2">
                      Le téléchargement de votre guide officiel CFPMI a démarré. Notre secrétariat reste à votre disposition.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col gap-3">
                    <a
                      href={generateWhatsAppLink(
                        `Bonjour CFPMI Sénégal, je viens de télécharger la brochure pour la filière ${filiereInteret}. Mon nom est ${nomComplet}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all"
                    >
                      <WhatsAppIcon className="w-5 h-5 fill-white" />
                      <span>Échanger directement sur WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Remplissez vos coordonnées
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Accédez instantanément au document complet au format texte.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Votre Nom Complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={nomComplet}
                      onChange={(e) => setNomComplet(e.target.value)}
                      placeholder="Ex: Babacar Diop"
                      className="w-full p-3.5 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Numéro WhatsApp (Sénégal) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                        +221
                      </span>
                      <input
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="77 694 78 71"
                        className="w-full p-3.5 pl-14 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Filière qui vous intéresse
                    </label>
                    <select
                      value={filiereInteret}
                      onChange={(e) => setFiliereInteret(e.target.value)}
                      className="w-full p-3.5 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                    >
                      <option value="BT Froid et Climatisation (Post-BFEM)">BT Froid et Climatisation (Post-BFEM - 3 ans)</option>
                      <option value="Froid et Climatisation">Froid et Climatisation (CPS - 6 mois)</option>
                      <option value="Électricité Bâtiment & Industrielle">Électricité Bâtiment & Industrielle (CPS - 6 mois)</option>
                      <option value="Plomberie Sanitaire">Plomberie Sanitaire (CPS - 6 mois)</option>
                      <option value="Soudure Métallique">Soudure Métallique (CPS - 6 mois)</option>
                      <option value="Formation à la carte">Formation continue à la carte</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm py-4 px-6 rounded-xl shadow-lg shadow-orange-500/25 transition-all disabled:opacity-50"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isSubmitting ? "Préparation du téléchargement..." : "Télécharger la brochure immédiatement"}</span>
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
