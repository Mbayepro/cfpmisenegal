"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getFilieres, submitInscription } from "@/lib/supabase";
import { Filiere, InscriptionDossier } from "@/lib/types";
import { CFPMI_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  GraduationCap,
  CheckCircle2,
  Sparkles,
  Phone,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";

function InscriptionContent() {
  const searchParams = useSearchParams();
  const preselectedSlug = searchParams.get("filiere");

  const [filieres, setFilieres] = useState<Filiere[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [dossierCode, setDossierCode] = useState<string>("");
  const [copiedCode, setCopiedCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [formData, setFormData] = useState<InscriptionDossier>({
    filiere_nom: "Froid et Climatisation",
    session_souhaitee: "Rentrée Lundi 17 Novembre 2026",
    creneau: "jour",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    whatsapp: "",
    sexe: "M",
    date_naissance: "",
    adresse: "Dakar",
    ville: "Dakar",
    niveau_etude: "Niveau Moyen / BFEM",
    cni_url: "",
    diplome_url: "",
  });

  useEffect(() => {
    async function load() {
      const data = await getFilieres();
      setFilieres(data);
      if (preselectedSlug) {
        const found = data.find((f) => f.slug === preselectedSlug);
        if (found) {
          setFormData((prev) => ({
            ...prev,
            filiere_id: found.id,
            filiere_nom: found.titre,
          }));
        }
      }
    }
    load();
  }, [preselectedSlug]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "telephone") {
      setFormData((prev) => ({ ...prev, telephone: value, whatsapp: value }));
    } else if (name === "filiere_nom") {
      const found = filieres.find((f) => f.titre === value);
      setFormData((prev) => ({
        ...prev,
        filiere_nom: value,
        filiere_id: found?.id,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.prenom.trim() || !formData.nom.trim()) {
      setErrorMessage("Veuillez indiquer votre prénom et votre nom.");
      return;
    }
    if (!formData.telephone.trim()) {
      setErrorMessage("Veuillez indiquer votre numéro de téléphone / WhatsApp.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitInscription({
        ...formData,
        whatsapp: formData.telephone,
      });
      if (res.success) {
        setDossierCode(res.codeDossier);
        setSubmissionSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Erreur réseau. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyCode = () => {
    if (dossierCode) {
      navigator.clipboard.writeText(dossierCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#080E21] via-[#0D183E] to-[#0A1128] text-white min-h-screen py-10 sm:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cfpmi-orange bg-orange-950/80 border border-orange-500/40 px-3.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-cfpmi-orange" />
            Inscription Rapide En 30 Secondes
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
            Réserver ma place au CFPMI
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Rentrée officielle : <strong className="text-cfpmi-sky">Lundi 17 Novembre 2026</strong> • Guédiawaye Hamo 6
          </p>
        </div>

        {errorMessage && (
          <div className="mb-6 p-4 bg-red-950/80 border border-red-500/50 rounded-2xl flex items-center gap-3 text-red-200 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
            <span>{errorMessage}</span>
          </div>
        )}

        {submissionSuccess ? (
          <div className="bg-[#121E4A] rounded-3xl p-6 sm:p-10 border-2 border-emerald-500 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1.5">
              <h2 className="text-2xl font-extrabold text-white">
                Inscription enregistrée, {formData.prenom} !
              </h2>
              <p className="text-sm text-slate-300">
                Filière choisie : <strong className="text-cfpmi-sky">{formData.filiere_nom}</strong>
              </p>
            </div>

            <div className="bg-[#0B1330] border-2 border-dashed border-blue-700/80 rounded-2xl p-4 max-w-sm mx-auto">
              <span className="text-[11px] font-bold text-cfpmi-orange uppercase tracking-wider block">
                Code Dossier
              </span>
              <div className="flex items-center justify-center gap-3 mt-1">
                <span className="text-2xl font-extrabold text-white font-mono">
                  {dossierCode}
                </span>
                <button
                  onClick={copyCode}
                  className="p-2 bg-[#162762] rounded-xl border border-blue-700/60 hover:bg-[#1C327A]"
                  title="Copier le code"
                >
                  {copiedCode ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-300" />
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={generateWhatsAppLink(
                  `Bonjour CFPMI Sénégal, je viens de m'inscrire en ligne (Code : ${dossierCode}) en ${formData.filiere_nom}. Nom : ${formData.prenom} ${formData.nom}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm py-3.5 px-5 rounded-xl shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Confirmer sur WhatsApp</span>
              </a>

              <a
                href={`tel:+${CFPMI_INFO.phonePrimaryClean}`}
                className="inline-flex items-center justify-center gap-2 bg-[#162762] hover:bg-[#1C327A] text-white font-bold text-sm py-3.5 px-5 rounded-xl border border-blue-700/60"
              >
                <Phone className="w-4 h-4 text-cfpmi-sky" />
                <span>Appeler le Centre</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-[#121E4A] rounded-3xl p-6 sm:p-8 border border-blue-800/70 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 1. Prénom & Nom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase mb-1.5">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    required
                    value={formData.prenom}
                    onChange={handleInputChange}
                    placeholder="Ex: Moussa"
                    className="w-full p-3.5 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white placeholder:text-slate-500 focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase mb-1.5">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleInputChange}
                    placeholder="Ex: Diop"
                    className="w-full p-3.5 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white placeholder:text-slate-500 focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                  />
                </div>
              </div>

              {/* 2. Téléphone / WhatsApp (1 seul champ) */}
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase mb-1.5">
                  Téléphone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telephone"
                  required
                  value={formData.telephone}
                  onChange={handleInputChange}
                  placeholder="Ex: 77 123 45 67"
                  className="w-full p-3.5 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white placeholder:text-slate-500 focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                />
              </div>

              {/* 3. Filière */}
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase mb-1.5">
                  Filière choisie *
                </label>
                <select
                  name="filiere_nom"
                  value={formData.filiere_nom}
                  onChange={handleInputChange}
                  className="w-full p-3.5 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm font-semibold text-white focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                >
                  {filieres.map((f) => (
                    <option key={f.id} value={f.titre}>
                      {f.titre} ({f.duree})
                    </option>
                  ))}
                </select>
              </div>

              {/* 4. Créneau & Niveau */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase mb-1.5">
                    Créneau horaire
                  </label>
                  <select
                    name="creneau"
                    value={formData.creneau}
                    onChange={handleInputChange}
                    className="w-full p-3.5 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                  >
                    <option value="jour">Cours du Jour (08h30 - 13h00)</option>
                    <option value="soir">Cours du Soir (17h30 - 20h30)</option>
                    <option value="weekend">Samedi intensif</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase mb-1.5">
                    Niveau d&apos;étude
                  </label>
                  <select
                    name="niveau_etude"
                    value={formData.niveau_etude}
                    onChange={handleInputChange}
                    className="w-full p-3.5 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                  >
                    <option value="Niveau Moyen / BFEM">Niveau Moyen / BFEM</option>
                    <option value="Niveau Secondaire / BAC">Niveau Secondaire / BAC</option>
                    <option value="CAP / BEP / BT">CAP / BEP / BT</option>
                    <option value="Sans diplôme (Apprentissage pratique)">Sans diplôme (Apprentissage)</option>
                    <option value="Professionnel en reconversion">Professionnel / Étudiant</option>
                  </select>
                </div>
              </div>

              {/* 2 Horizontal Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base py-4 px-5 rounded-xl shadow-lg shadow-orange-500/30 transition-all disabled:opacity-50"
                >
                  <GraduationCap className="w-5 h-5 shrink-0" />
                  <span>{isSubmitting ? "Envoi..." : "Valider mon inscription"}</span>
                </button>

                <a
                  href={generateWhatsAppLink(
                    `Bonjour CFPMI Sénégal, je souhaite m'inscrire en ${formData.filiere_nom} (${formData.creneau}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm sm:text-base py-4 px-5 rounded-xl shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                  <span>Par WhatsApp</span>
                </a>
              </div>

              <p className="text-center text-[11px] text-slate-400 pt-1">
                Aucun document scanné n&apos;est requis en ligne. Les pièces (photocopie CNI et photos) se déposent directement au secrétariat à Guédiawaye Hamo 6.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default function InscriptionPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#080E21] text-slate-300 text-sm">
          Chargement du formulaire...
        </div>
      }
    >
      <InscriptionContent />
    </Suspense>
  );
}
