"use client";

import React, { useState, useEffect } from "react";
import { LeadBrochure } from "@/lib/types";
import { FileSpreadsheet, Download, MessageSquare, Check, Phone, Search } from "lucide-react";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadBrochure[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("cfpmi_leads") || "[]");
    const demo: LeadBrochure[] = [
      {
        id: "l1",
        nom_complet: "Ousmane Ba",
        whatsapp: "77 555 44 33",
        filiere_interet: "Froid et Climatisation",
        statut_relance: "a_relancer",
        telecharge_a: new Date(Date.now() - 3600000 * 3).toISOString(),
      },
      {
        id: "l2",
        nom_complet: "Awa Diatta",
        whatsapp: "76 888 99 00",
        filiere_interet: "Électricité Bâtiment & Industrielle",
        statut_relance: "contacte",
        telecharge_a: new Date(Date.now() - 3600000 * 14).toISOString(),
      },
      {
        id: "l3",
        nom_complet: "Modou Gueye",
        whatsapp: "70 123 98 76",
        filiere_interet: "Soudure Métallique",
        statut_relance: "inscrit",
        telecharge_a: new Date(Date.now() - 3600000 * 48).toISOString(),
      },
    ];
    setLeads([...local, ...demo]);
  }, []);

  const handleStatusChange = (index: number, newStatus: any) => {
    const updated = [...leads];
    updated[index].statut_relance = newStatus;
    setLeads(updated);
  };

  const exportCSV = () => {
    const headers = ["Date", "Nom Complet", "WhatsApp", "Filiere Interet", "Statut Relance"];
    const rows = leads.map((l) => [
      l.telecharge_a || "",
      `"${l.nom_complet}"`,
      `"${l.whatsapp}"`,
      `"${l.filiere_interet || ""}"`,
      `"${l.statut_relance || ""}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encoded = encodeURI(csvContent);
    const link = document.createElement("a");
    link.href = encoded;
    link.download = `CFPMI_Leads_Brochure_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filtered = leads.filter(
    (l) =>
      l.nom_complet.toLowerCase().includes(search.toLowerCase()) ||
      l.whatsapp.includes(search) ||
      (l.filiere_interet || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Prospects & Leads Brochure PDF
          </h2>
          <p className="text-xs text-slate-500">
            Visiteurs ayant téléchargé la brochure. Relancez-les facilement sur WhatsApp.
          </p>
        </div>

        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Exporter Leads CSV</span>
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Rechercher un prospect par nom ou numéro WhatsApp..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-cfpmi-marine focus:outline-none"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
                <th className="p-4">Date Téléchargement</th>
                <th className="p-4">Nom Prospect</th>
                <th className="p-4">WhatsApp</th>
                <th className="p-4">Filière d&apos;Intérêt</th>
                <th className="p-4">Statut Relance</th>
                <th className="p-4 text-right">Action Directe</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.map((lead, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 text-slate-400">
                    {lead.telecharge_a ? new Date(lead.telecharge_a).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" }) : "Récent"}
                  </td>
                  <td className="p-4 font-bold text-slate-900">{lead.nom_complet}</td>
                  <td className="p-4 font-medium">{lead.whatsapp}</td>
                  <td className="p-4 font-semibold text-cfpmi-marine">{lead.filiere_interet}</td>
                  <td className="p-4">
                    <select
                      value={lead.statut_relance || "a_relancer"}
                      onChange={(e) => handleStatusChange(idx, e.target.value)}
                      className="p-1.5 bg-slate-50 border rounded-lg text-xs font-semibold"
                    >
                      <option value="a_relancer">À relancer</option>
                      <option value="contacte">Contacté</option>
                      <option value="inscrit">Inscrit</option>
                      <option value="abandon">Sans suite</option>
                    </select>
                  </td>
                  <td className="p-4 text-right">
                    <a
                      href={`https://wa.me/221${lead.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                        `Bonjour ${lead.nom_complet}, le CFPMI Sénégal vous contacte suite à votre téléchargement de la brochure pour la filière ${lead.filiere_interet}. Nos cours démarrent ce lundi 17 novembre 2026. Avez-vous des questions ?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-200"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Relancer sur WhatsApp</span>
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

