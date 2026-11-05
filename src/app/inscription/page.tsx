"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getFilieres, submitInscription } from "@/lib/supabase";
import { Filiere, InscriptionDossier } from "@/lib/types";
import { CFPMI_INFO } from "@/lib/constants";
import { generateWhatsAppLink, formatPriceFCFA } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  GraduationCap,
  User,
  Upload,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  Sparkles,
  Phone,
  FileText,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";

function InscriptionContent() {
  const searchParams = useSearchParams();
  const preselectedSlug = searchParams.get("filiere");

  const [filieres, setFilieres] = useState<Filiere[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [dossierCode, setDossierCode] = useState<string>("");
  const [copiedCode, setCopiedCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Form State
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
    adresse: "Guédiawaye",
    ville: "Dakar",
    niveau_etude: "Niveau Moyen / BFEM",
    cni_url: "",
    diplome_url: "",
  });

  // Local file state for uploads
  const [cniFileName, setCniFileName] = useState<string>("");
  const [diplomeFileName, setDiplomeFileName] = useState<string>("");

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: "cni" | "diplome") => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("La taille du fichier ne doit pas dépasser 5 Mo.");
        return;
      }
      if (field === "cni") {
        setCniFileName(file.name);
        setFormData((prev) => ({ ...prev, cni_url: `https://storage.supabase.co/cni_${file.name}` }));
      } else {
        setDiplomeFileName(file.name);
        setFormData((prev) => ({ ...prev, diplome_url: `https://storage.supabase.co/diplome_${file.name}` }));
      }
    }
  };

  const validateStep = (step: number): boolean => {
    setErrorMessage("");
    if (step === 1) {
      if (!formData.filiere_nom) {
        setErrorMessage("Veuillez sélectionner une filière.");
        return false;
      }
      return true;
    }
    if (step === 2) {
      if (!formData.nom.trim() || !formData.prenom.trim()) {
        setErrorMessage("Veuillez renseigner votre nom et prénom.");
        return false;
      }
      if (!formData.telephone.trim()) {
        setErrorMessage("Veuillez renseigner un numéro de téléphone joignable.");
        return false;
      }
      if (!formData.whatsapp.trim()) {
        // Auto fill whatsapp if missing
        setFormData((prev) => ({ ...prev, whatsapp: prev.telephone }));
      }
      return true;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await submitInscription(formData);
      if (res.success) {
        setDossierCode(res.codeDossier);
        setSubmissionSuccess(true);
      } else {
        setErrorMessage("Une erreur est survenue lors de l'enregistrement de votre dossier.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Une erreur réseau est survenue. Veuillez réessayer.");
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

  const selectedFiliereObj = filieres.find((f) => f.titre === formData.filiere_nom);

  return (
    <div className="bg-gradient-to-b from-[#080E21] via-[#0D183E] to-[#0A1128] text-white min-h-screen py-12 sm:py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cfpmi-orange bg-orange-950/80 border border-orange-500/40 px-4 py-1.5 rounded-full shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-cfpmi-orange" />
            Candidature En Ligne CFPMI
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formulaire d&apos;Inscription Officiel
          </h1>
          <p className="text-sm text-slate-300">
            Rentrée ce <strong>lundi 17 novembre 2026</strong>. Réservez votre place en quelques étapes simples.
          </p>
        </div>

        {/* Step Indicator */}
        {!submissionSuccess && (
          <div className="mb-10">
            <div className="flex items-center justify-between relative max-w-2xl mx-auto">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-950 w-full z-0" />
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-cfpmi-orange transition-all duration-300 z-0 shadow-lg shadow-orange-500/50"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              />

              {[
                { step: 1, label: "Filière & Session" },
                { step: 2, label: "Coordonnées" },
                { step: 3, label: "Documents" },
                { step: 4, label: "Validation" },
              ].map((item) => (
                <div key={item.step} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200 ${
                      currentStep >= item.step
                        ? "bg-gradient-to-r from-cfpmi-orange to-orange-600 text-white shadow-lg ring-4 ring-orange-500/30"
                        : "bg-[#0B1330] text-slate-400 border-2 border-blue-800"
                    }`}
                  >
                    {item.step}
                  </div>
                  <span className="hidden sm:block text-[11px] font-bold text-slate-300 mt-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-6 p-4 bg-red-950/80 border border-red-500/50 rounded-2xl flex items-center gap-3 text-red-200 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Success View */}
        {submissionSuccess ? (
          <div className="bg-[#121E4A] rounded-3xl p-8 sm:p-12 border-2 border-emerald-500 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Félicitations {formData.prenom} !
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto">
                Votre dossier d&apos;inscription pour la filière{" "}
                <strong className="text-cfpmi-sky">{formData.filiere_nom}</strong> a bien été reçu par le secrétariat du CFPMI.
              </p>
            </div>

            {/* Dossier Code Card */}
            <div className="bg-[#0B1330] border-2 border-dashed border-blue-700/80 rounded-2xl p-6 max-w-md mx-auto">
              <span className="text-xs font-bold text-cfpmi-orange uppercase tracking-wider block">
                Votre Code Dossier
              </span>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider font-mono">
                  {dossierCode}
                </span>
                <button
                  onClick={copyCode}
                  className="p-2 bg-[#162762] rounded-xl border border-blue-700/60 hover:bg-[#1C327A] transition-colors"
                  title="Copier le code"
                >
                  {copiedCode ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-slate-300" />}
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Conservez ce code pour le suivi au secrétariat à Guédiawaye Hamo 6.
              </p>
            </div>

            {/* Direct WhatsApp Confirmation Button */}
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
              <a
                href={generateWhatsAppLink(
                  `Bonjour CFPMI Sénégal, je viens de déposer mon dossier d'inscription en ligne avec le code dossier ${dossierCode} pour la formation en ${formData.filiere_nom}. Mon nom est ${formData.prenom} ${formData.nom}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm py-4 px-6 rounded-2xl shadow-lg transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Confirmer sur WhatsApp</span>
              </a>

              <a
                href={`tel:+${CFPMI_INFO.phoneSecondaryClean}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#162762] hover:bg-[#1C327A] text-white font-bold text-sm py-4 px-6 rounded-2xl border border-blue-700/60 transition-all"
              >
                <Phone className="w-4 h-4 text-cfpmi-sky" />
                <span>Appeler ({CFPMI_INFO.phoneSecondary})</span>
              </a>
            </div>

            <div className="pt-6 border-t border-blue-900/60 text-xs text-slate-400">
              📍 Adresse : {CFPMI_INFO.address} • Horaires : {CFPMI_INFO.openingHours}
            </div>
          </div>
        ) : (
          /* Multi-step Form Card */
          <div className="bg-[#121E4A] rounded-3xl p-6 sm:p-10 border border-blue-800/70 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* STEP 1: Filière & Session */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-cfpmi-orange" />
                      Étape 1 : Choix de la Filière & Session
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Sélectionnez la compétence que vous souhaitez acquérir.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                        Filière de formation *
                      </label>
                      <select
                        name="filiere_nom"
                        value={formData.filiere_nom}
                        onChange={handleInputChange}
                        className="w-full p-3.5 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm font-semibold text-white focus:ring-2 focus:ring-cfpmi-sky focus:outline-none"
                      >
                        {filieres.map((f) => (
                          <option key={f.id} value={f.titre}>
                            {f.titre} — {f.duree}
                          </option>
                        ))}
                      </select>
                    </div>

                    {selectedFiliereObj && (
                      <div className="p-4 bg-[#0E1738] border border-blue-900/80 rounded-2xl text-xs space-y-1.5">
                        <span className="font-bold text-cfpmi-sky block">
                          Détails de la filière sélectionnée :
                        </span>
                        <p className="text-slate-300">{selectedFiliereObj.description_courte}</p>
                        <div className="flex flex-wrap gap-4 pt-1 font-semibold text-slate-200">
                          <span>Durée : {selectedFiliereObj.duree}</span>
                          <span>•</span>
                          <span>Créneaux : {selectedFiliereObj.horaires}</span>
                          <span>•</span>
                          <span className="text-cfpmi-orange font-bold">Tarifs communiqués à la validation</span>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                          Session souhaitée
                        </label>
                        <select
                          name="session_souhaitee"
                          value={formData.session_souhaitee}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky"
                        >
                          <option value="Rentrée Lundi 17 Novembre 2026">
                            Rentrée Immédiate : Lundi 17 Novembre 2026
                          </option>
                          <option value="Session Janvier 2027">
                            Session Suivante : Janvier 2027
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                          Créneau horaire préféré *
                        </label>
                        <select
                          name="creneau"
                          value={formData.creneau}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-cfpmi-marine"
                        >
                          <option value="jour">Jour (Matin : 08h30 - 13h00)</option>
                          <option value="soir">Soir (17h30 - 20h30 pour travailleurs)</option>
                          <option value="weekend">Samedi intensif</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Infos Personnelles */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <User className="w-5 h-5 text-cfpmi-orange" />
                      Étape 2 : Vos Coordonnées
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Renseignez des coordonnées exactes pour que le secrétariat puisse vous joindre.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        required
                        value={formData.prenom}
                        onChange={handleInputChange}
                        placeholder="Ex: Moussa"
                        className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky"
                      >
                      </input>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Nom de famille *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleInputChange}
                        placeholder="Ex: Diallo"
                        className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky"
                      >
                      </input>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Téléphone Appel *
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        required
                        value={formData.telephone}
                        onChange={handleInputChange}
                        placeholder="Ex: 77 123 45 67"
                        className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky"
                      >
                      </input>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Numéro WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="Ex: 77 123 45 67"
                        className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky"
                      >
                      </input>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Adresse Email (facultatif)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ex: candidat@gmail.com"
                        className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky"
                      >
                      </input>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Sexe *
                      </label>
                      <select
                        name="sexe"
                        value={formData.sexe}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky"
                      >
                        <option value="M">Masculin</option>
                        <option value="F">Féminin</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Quartier / Adresse *
                      </label>
                      <input
                        type="text"
                        name="adresse"
                        required
                        value={formData.adresse}
                        onChange={handleInputChange}
                        placeholder="Ex: Guédiawaye, Pikine, Parcelles..."
                        className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky"
                      >
                      </input>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Niveau d&apos;études
                      </label>
                      <select
                        name="niveau_etude"
                        value={formData.niveau_etude}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-[#0B1330] border border-blue-800/80 rounded-xl text-sm text-white focus:ring-2 focus:ring-cfpmi-sky"
                      >
                        <option value="Niveau Moyen / BFEM">Niveau Moyen / BFEM</option>
                        <option value="Niveau Secondaire / BAC">Niveau Secondaire / BAC</option>
                        <option value="CAP / BEP">CAP / BEP technique</option>
                        <option value="Études supérieures">Études supérieures</option>
                        <option value="Autodidacte / Déscolarisé">Autodidacte / Déscolarisé</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Documents Upload */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Upload className="w-5 h-5 text-cfpmi-orange" />
                      Étape 3 : Pièces Justificatives (Optionnelles en ligne)
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Vous pouvez joindre vos pièces maintenant ou les déposer physiquement au secrétariat à Hamo 6.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* CNI */}
                    <div className="border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-2xl p-6 text-center bg-slate-50/50 transition-colors">
                      <FileText className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                      <h4 className="text-sm font-bold text-slate-800">
                        Pièce d&apos;Identité (CNI / Passeport)
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 mb-4">
                        Format JPG, PNG ou PDF (max 5 Mo)
                      </p>
                      <label className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold text-cfpmi-marine bg-white border border-slate-200 px-4 py-2 rounded-xl hover:bg-slate-50 shadow-xs">
                        <Upload className="w-4 h-4 text-cfpmi-orange" />
                        <span>{cniFileName || "Choisir un fichier"}</span>
                        <input
                          type="file"
                          accept="image/*,application/pdf"
                          onChange={(e) => handleFileUpload(e, "cni")}
                          className="hidden"
                        />
                      </label>
                      {cniFileName && (
                        <p className="text-xs text-emerald-600 font-medium mt-2 flex items-center justify-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Fichier sélectionné
                        </p>
                      )}
                    </div>

                    {/* Diplome / Bulletin */}
                    <div className="border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-2xl p-6 text-center bg-slate-50/50 transition-colors">
                      <FileText className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                      <h4 className="text-sm font-bold text-slate-800">
                        Dernier Diplôme ou Bulletin
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 mb-4">
                        Facultatif si non disponible immédiatement
                      </p>
                      <label className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold text-cfpmi-marine bg-white border border-slate-200 px-4 py-2 rounded-xl hover:bg-slate-50 shadow-xs">
                        <Upload className="w-4 h-4 text-cfpmi-orange" />
                        <span>{diplomeFileName || "Choisir un fichier"}</span>
                        <input
                          type="file"
                          accept="image/*,application/pdf"
                          onChange={(e) => handleFileUpload(e, "diplome")}
                          className="hidden"
                        />
                      </label>
                      {diplomeFileName && (
                        <p className="text-xs text-emerald-600 font-medium mt-2 flex items-center justify-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Fichier sélectionné
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-cfpmi-orange shrink-0 mt-0.5" />
                    <span>
                      <strong>Note pratique :</strong> Si vous n&apos;avez pas vos documents numérisés sous la main, vous pouvez tout de même valider l&apos;inscription et apporter vos photocopies lors de votre premier jour à Hamo 6.
                    </span>
                  </div>
                </div>
              )}

              {/* STEP 4: Récapitulatif */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      Étape 4 : Récapitulatif de votre Candidature
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Vérifiez vos informations avant de soumettre définitivement votre dossier.
                    </p>
                  </div>

                  <div className="bg-[#0B1330] rounded-2xl p-6 border border-blue-800/80 space-y-4 text-xs sm:text-sm text-slate-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-slate-400 block">Filière choisie :</span>
                        <strong className="font-bold text-sm sm:text-base text-cfpmi-sky">
                          {formData.filiere_nom}
                        </strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Session & Créneau :</span>
                        <strong className="text-white font-bold">
                          {formData.session_souhaitee} ({formData.creneau})
                        </strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Candidat :</span>
                        <strong className="text-white font-bold">
                          {formData.prenom} {formData.nom} ({formData.sexe})
                        </strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Téléphone / WhatsApp :</span>
                        <strong className="text-cfpmi-orange font-bold">
                          {formData.telephone} / {formData.whatsapp}
                        </strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Localisation :</span>
                        <strong className="text-white font-bold">
                          {formData.adresse}, {formData.ville}
                        </strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Niveau d&apos;études :</span>
                        <strong className="text-white font-bold">
                          {formData.niveau_etude}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-800">
                    ✅ En validant ce formulaire, votre place est pré-réservée. Un code de dossier vous sera délivré pour finaliser les formalités au secrétariat.
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="border-t border-slate-100 pt-6 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-5 py-3 rounded-xl transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Précédent</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white bg-cfpmi-marine hover:bg-blue-900 px-6 py-3 rounded-xl shadow transition-colors"
                  >
                    <span>Continuer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-white bg-cfpmi-orange hover:bg-orange-600 disabled:opacity-50 px-8 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all"
                  >
                    {isSubmitting ? (
                      <span>Enregistrement en cours...</span>
                    ) : (
                      <>
                        <GraduationCap className="w-5 h-5" />
                        <span>Valider mon inscription</span>
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}

export default function InscriptionPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-slate-500">Chargement du formulaire...</div>}>
      <InscriptionContent />
    </Suspense>
  );
}

