"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Users, FileSpreadsheet, GraduationCap, CheckCircle2, Clock, XCircle, ArrowUpRight, MessageSquare, Download } from "lucide-react";
import { InscriptionDossier, LeadBrochure } from "@/lib/types";

export default function AdminDashboardPage() {
  const [inscriptions, setInscriptions] = useState<InscriptionDossier[]>([]);
  const [leads, setLeads] = useState<LeadBrochure[]>([]);

  useEffect(() => {
    // Load local or mock data
    const localInscriptions = JSON.parse(
      localStorage.getItem("cfpmi_inscriptions") || "[]"
    );
    const mockInscriptions: InscriptionDossier[] = [
      {
        id: "demo-1",
        code_dossier: "CFPMI-892401",
        filiere_nom: "Froid et Climatisation",
        session_souhaitee: "Rentrée 17 Novembre 2026",
        creneau: "jour",
        nom: "Sow",
        prenom: "Abdoulaye",
        telephone: "77 694 78 71",
        whatsapp: "77 694 78 71",
        sexe: "M",
        adresse: "Guédiawaye Hamo 6",
        ville: "Dakar",
        niveau_etude: "BFEM",
        statut: "en_etude",
        created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
      },
      {
        id: "demo-2",
        code_dossier: "CFPMI-541289",
        filiere_nom: "Électricité Bâtiment & Industrielle",
        session_souhaitee: "Rentrée 17 Novembre 2026",
        creneau: "soir",
        nom: "Faye",
        prenom: "Mariama",
        telephone: "76 461 14 63",
        whatsapp: "76 461 14 63",
        sexe: "F",
        adresse: "Pikine Tally Boumack",
        ville: "Dakar",
        niveau_etude: "BAC",
        statut: "recu",
        created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
      },
      {
        id: "demo-3",
        code_dossier: "CFPMI-329871",
        filiere_nom: "Plomberie Sanitaire",
        session_souhaitee: "Rentrée 17 Novembre 2026",
        creneau: "jour",
        nom: "Fall",
        prenom: "Cheikh Tidiane",
        telephone: "78 123 45 67",
        whatsapp: "78 123 45 67",
        sexe: "M",
        adresse: "Parcelles Assainies U24",
        ville: "Dakar",
        niveau_etude: "CAP",
        statut: "accepte",
        created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
      },
    ];

    setInscriptions([...localInscriptions, ...mockInscriptions]);

    const localLeads = JSON.parse(localStorage.getItem("cfpmi_leads") || "[]");
    const mockLeads: LeadBrochure[] = [
      {
        nom_complet: "Ousmane Ba",
        whatsapp: "77 555 44 33",
        filiere_interet: "Froid et Climatisation",
        statut_relance: "a_relancer",
        telecharge_a: new Date(Date.now() - 3600000 * 4).toISOString(),
      },
      {
        nom_complet: "Awa Diatta",
        whatsapp: "76 888 99 00",
        filiere_interet: "Électricité",
        statut_relance: "contacte",
        telecharge_a: new Date(Date.now() - 3600000 * 18).toISOString(),
      },
    ];
    setLeads([...localLeads, ...mockLeads]);
  }, []);

  const total = inscriptions.length;
  const enEtude = inscriptions.filter((i) => i.statut === "en_etude" || i.statut === "recu").length;
  const acceptes = inscriptions.filter((i) => i.statut === "accepte").length;

  const handleStatusChange = (index: number, newStatus: 'recu' | 'en_etude' | 'accepte' | 'refuse') => {
    const updated = [...inscriptions];
    updated[index].statut = newStatus;
    setInscriptions(updated);
  };

  return (
    <div className="space-y-8">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-cfpmi-marine to-blue-900 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cfpmi-orange bg-white/10 px-3 py-1 rounded-full">
            Tableau de Bord Administratif
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">
            Session Rentrée : Lundi 17 Novembre 2026
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 mt-1">
            Gestion en temps réel des candidatures, des leads et des contenus du CFPMI Sénégal.
          </p>
        </div>

        <div className="flex gap-2">
          <Link
            href="/admin/inscriptions"
            className="inline-flex items-center gap-2 bg-cfpmi-orange hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-colors"
          >
            <Users className="w-4 h-4" />
            <span>Traiter les dossiers</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-semibold uppercase">Total Inscriptions</span>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">{total}</div>
            <span className="text-[11px] text-slate-400">Dossiers reçus en ligne</span>
          </div>
          <div className="p-3 bg-blue-50 text-cfpmi-marine rounded-2xl">
            <Users className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-semibold uppercase">En Étude / Reçus</span>
            <div className="text-2xl font-extrabold text-amber-600 mt-1">{enEtude}</div>
            <span className="text-[11px] text-slate-400">À traiter par le secrétariat</span>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-semibold uppercase">Dossiers Acceptés</span>
            <div className="text-2xl font-extrabold text-emerald-600 mt-1">{acceptes}</div>
            <span className="text-[11px] text-slate-400">Prêts pour l&apos;intégration</span>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-semibold uppercase">Leads Brochure</span>
            <div className="text-2xl font-extrabold text-cfpmi-orange mt-1">{leads.length}</div>
            <span className="text-[11px] text-slate-400">Téléchargements PDF</span>
          </div>
          <div className="p-3 bg-orange-50 text-cfpmi-orange rounded-2xl">
            <FileSpreadsheet className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Recent Inscriptions Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Dernières Candidatures En Ligne
            </h3>
            <p className="text-xs text-slate-500">
              Mettez à jour les statuts d&apos;inscription et contactez les candidats sur WhatsApp.
            </p>
          </div>

          <Link
            href="/admin/inscriptions"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cfpmi-marine hover:underline"
          >
            <span>Voir et exporter toutes les inscriptions</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
                <th className="p-4">Code Dossier</th>
                <th className="p-4">Candidat</th>
                <th className="p-4">Filière</th>
                <th className="p-4">Créneau</th>
                <th className="p-4">Téléphone / WhatsApp</th>
                <th className="p-4">Statut</th>
                <th className="p-4 text-right">Action Rapide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {inscriptions.slice(0, 5).map((ins, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 font-mono font-bold text-cfpmi-marine">
                    {ins.code_dossier || "CFPMI-TEMP"}
                  </td>
                  <td className="p-4 font-semibold text-slate-900">
                    {ins.prenom} {ins.nom}
                  </td>
                  <td className="p-4 font-medium">{ins.filiere_nom}</td>
                  <td className="p-4 uppercase text-[10px] font-bold text-slate-600">
                    {ins.creneau}
                  </td>
                  <td className="p-4">
                    <a
                      href={`https://wa.me/221${ins.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{ins.whatsapp}</span>
                    </a>
                  </td>
                  <td className="p-4">
                    <select
                      value={ins.statut || "recu"}
                      onChange={(e) => handleStatusChange(idx, e.target.value as any)}
                      className={`text-xs font-bold rounded-lg px-2 py-1 border focus:outline-none ${
                        ins.statut === "accepte"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : ins.statut === "refuse"
                          ? "bg-red-50 text-red-700 border-red-200"
                          : ins.statut === "en_etude"
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
                    <a
                      href={`https://wa.me/221${ins.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                        `Bonjour ${ins.prenom}, le secrétariat du CFPMI vous contacte au sujet de votre dossier d'inscription ${ins.code_dossier} pour la filière ${ins.filiere_nom}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200"
                    >
                      Relancer WhatsApp
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

