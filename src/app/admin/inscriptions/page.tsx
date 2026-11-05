"use client";

import React, { useState, useEffect } from "react";
import { InscriptionDossier } from "@/lib/types";
import {
  Users,
  Search,
  Filter,
  Download,
  MessageSquare,
  Eye,
  X,
  FileText,
  CheckCircle2,
  Phone,
  Clock,
  Sparkles,
} from "lucide-react";

export default function AdminInscriptionsPage() {
  const [inscriptions, setInscriptions] = useState<InscriptionDossier[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedDossier, setSelectedDossier] = useState<InscriptionDossier | null>(null);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("cfpmi_inscriptions") || "[]");
    const demo: InscriptionDossier[] = [
      {
        id: "1",
        code_dossier: "CFPMI-892401",
        filiere_nom: "Froid et Climatisation",
        session_souhaitee: "Rentrée 17 Novembre 2026",
        creneau: "jour",
        nom: "Sow",
        prenom: "Abdoulaye",
        telephone: "77 694 78 71",
        whatsapp: "77 694 78 71",
        email: "abdoulaye.sow@gmail.com",
        sexe: "M",
        adresse: "Guédiawaye Hamo 6",
        ville: "Dakar",
        niveau_etude: "BFEM",
        statut: "en_etude",
        cni_url: "https://storage.supabase.co/cni_sow.jpg",
        diplome_url: "https://storage.supabase.co/diplome_sow.pdf",
        created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
      },
      {
        id: "2",
        code_dossier: "CFPMI-541289",
        filiere_nom: "Électricité Bâtiment & Industrielle",
        session_souhaitee: "Rentrée 17 Novembre 2026",
        creneau: "soir",
        nom: "Faye",
        prenom: "Mariama",
        telephone: "76 461 14 63",
        whatsapp: "76 461 14 63",
        email: "mariama.faye@gmail.com",
        sexe: "F",
        adresse: "Pikine Tally Boumack",
        ville: "Dakar",
        niveau_etude: "BAC",
        statut: "recu",
        created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
      },
      {
        id: "3",
        code_dossier: "CFPMI-329871",
        filiere_nom: "Plomberie Sanitaire",
        session_souhaitee: "Rentrée 17 Novembre 2026",
        creneau: "jour",
        nom: "Fall",
        prenom: "Cheikh Tidiane",
        telephone: "78 123 45 67",
        whatsapp: "78 123 45 67",
        email: "cheikh.fall@gmail.com",
        sexe: "M",
        adresse: "Parcelles Assainies U24",
        ville: "Dakar",
        niveau_etude: "CAP",
        statut: "accepte",
        created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
      },
    ];
    setInscriptions([...local, ...demo]);
  }, []);

  const handleStatusChange = (codeDossier: string, newStatus: any) => {
    const updated = inscriptions.map((item) =>
      item.code_dossier === codeDossier ? { ...item, statut: newStatus } : item
    );
    setInscriptions(updated);
    if (selectedDossier && selectedDossier.code_dossier === codeDossier) {
      setSelectedDossier({ ...selectedDossier, statut: newStatus });
    }
  };

  const exportCSV = () => {
    const headers = [
      "Code Dossier",
      "Date Inscription",
      "Nom",
      "Prenom",
      "Telephone",
      "WhatsApp",
      "Email",
      "Filiere",
      "Creneau",
      "Session",
      "Adresse",
      "Niveau Etude",
      "Statut",
    ];

    const rows = inscriptions.map((i) => [
      i.code_dossier || "",
      i.created_at || "",
      `"${i.nom}"`,
      `"${i.prenom}"`,
      `"${i.telephone}"`,
      `"${i.whatsapp}"`,
      `"${i.email || ""}"`,
      `"${i.filiere_nom}"`,
      `"${i.creneau}"`,
      `"${i.session_souhaitee}"`,
      `"${i.adresse}, ${i.ville}"`,
      `"${i.niveau_etude}"`,
      `"${i.statut}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `CFPMI_Inscriptions_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filtered = inscriptions.filter((item) => {
    const matchSearch =
      item.nom.toLowerCase().includes(search.toLowerCase()) ||
      item.prenom.toLowerCase().includes(search.toLowerCase()) ||
      item.filiere_nom.toLowerCase().includes(search.toLowerCase()) ||
      (item.code_dossier || "").toLowerCase().includes(search.toLowerCase()) ||
      item.telephone.includes(search);

    const matchStatus = statusFilter === "all" || item.statut === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Gestion des Inscriptions & Candidatures
          </h2>
          <p className="text-xs text-slate-500">
            Suivi des statuts (reçu, en étude, accepté, refusé), consultation des pièces et export.
          </p>
        </div>

        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Exporter CSV (Excel)</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Rechercher par nom, code dossier, téléphone, filière..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-cfpmi-marine focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none"
          >
            <option value="all">Tous les statuts</option>
            <option value="recu">Reçu</option>
            <option value="en_etude">En étude</option>
            <option value="accepte">Accepté</option>
            <option value="refuse">Refusé</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
                <th className="p-4">Dossier</th>
                <th className="p-4">Date</th>
                <th className="p-4">Candidat</th>
                <th className="p-4">Filière</th>
                <th className="p-4">Créneau</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Statut</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 font-mono font-bold text-cfpmi-marine">
                    {item.code_dossier}
                  </td>
                  <td className="p-4 text-slate-400">
                    {item.created_at ? new Date(item.created_at).toLocaleDateString("fr-FR") : "Récent"}
                  </td>
                  <td className="p-4 font-semibold text-slate-900">
                    {item.prenom} {item.nom}
                  </td>
                  <td className="p-4 font-medium">{item.filiere_nom}</td>
                  <td className="p-4 uppercase text-[10px] font-bold text-slate-600">
                    {item.creneau}
                  </td>
                  <td className="p-4">
                    <a
                      href={`https://wa.me/221${item.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3 text-emerald-600" />
                      <span>{item.whatsapp}</span>
                    </a>
                  </td>
                  <td className="p-4">
                    <select
                      value={item.statut || "recu"}
                      onChange={(e) => handleStatusChange(item.code_dossier || "", e.target.value)}
                      className={`text-xs font-bold rounded-lg px-2 py-1 border focus:outline-none ${
                        item.statut === "accepte"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : item.statut === "refuse"
                          ? "bg-red-50 text-red-700 border-red-200"
                          : item.statut === "en_etude"
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }`}
                    >
                      <option value="recu">Reçu</option>
                      <option value="en_etude">En étude</option>
                      <option value="accepte">Accepté</option>
                      <option value="refuse">Refusé</option>
                    </select>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setSelectedDossier(item)}
                      className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors inline-flex items-center gap-1"
                      title="Voir le dossier complet"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-semibold">Détails</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dossier Detail Modal */}
      {selectedDossier && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase text-cfpmi-orange">
                  Dossier d&apos;inscription
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedDossier.prenom} {selectedDossier.nom} — {selectedDossier.code_dossier}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDossier(null)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block">Filière souhaitée :</span>
                <strong className="text-slate-900 font-bold">{selectedDossier.filiere_nom}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Créneau & Session :</span>
                <strong className="text-slate-900 font-bold">{selectedDossier.session_souhaitee} ({selectedDossier.creneau})</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Téléphone Appel :</span>
                <strong className="text-slate-900 font-bold">{selectedDossier.telephone}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Numéro WhatsApp :</span>
                <strong className="text-slate-900 font-bold">{selectedDossier.whatsapp}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Adresse & Ville :</span>
                <strong className="text-slate-900 font-bold">{selectedDossier.adresse}, {selectedDossier.ville}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Niveau d&apos;études :</span>
                <strong className="text-slate-900 font-bold">{selectedDossier.niveau_etude}</strong>
              </div>
            </div>

            {/* Uploaded Documents */}
            <div className="border-t border-slate-100 pt-4 space-y-2">
              <span className="text-xs font-bold text-slate-700 block">Pièces justificatives :</span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={selectedDossier.cni_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cfpmi-marine bg-blue-50 border border-blue-200 px-3 py-2 rounded-xl hover:bg-blue-100"
                >
                  <FileText className="w-4 h-4 text-cfpmi-orange" />
                  <span>Télécharger CNI / Passeport</span>
                </a>

                <a
                  href={selectedDossier.diplome_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cfpmi-marine bg-blue-50 border border-blue-200 px-3 py-2 rounded-xl hover:bg-blue-100"
                >
                  <FileText className="w-4 h-4 text-cfpmi-sky" />
                  <span>Télécharger Diplôme / Bulletin</span>
                </a>
              </div>
            </div>

            {/* Statut Selector & Direct WhatsApp in Modal */}
            <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600">Statut :</span>
                <select
                  value={selectedDossier.statut || "recu"}
                  onChange={(e) => handleStatusChange(selectedDossier.code_dossier || "", e.target.value)}
                  className="text-xs font-bold p-2 bg-slate-50 border rounded-xl"
                >
                  <option value="recu">Reçu</option>
                  <option value="en_etude">En étude</option>
                  <option value="accepte">Accepté</option>
                  <option value="refuse">Refusé</option>
                </select>
              </div>

              <a
                href={`https://wa.me/221${selectedDossier.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                  `Bonjour ${selectedDossier.prenom}, votre dossier ${selectedDossier.code_dossier} pour la filière ${selectedDossier.filiere_nom} au CFPMI Sénégal a été ${selectedDossier.statut === "accepte" ? "accepté ! Veuillez passer au secrétariat à Hamo 6 pour finaliser l'inscription." : "reçu et est en cours d'étude."}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Notifier le candidat par WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

