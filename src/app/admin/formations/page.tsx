"use client";

import React, { useState, useEffect } from "react";
import { Filiere } from "@/lib/types";
import { INITIAL_FILIERES } from "@/lib/data";
import { formatPriceFCFA } from "@/lib/utils";
import { GraduationCap, Plus, Edit, Trash2, Check, X, Sparkles } from "lucide-react";

export default function AdminFormationsPage() {
  const [filieres, setFilieres] = useState<Filiere[]>([]);
  const [editingFiliere, setEditingFiliere] = useState<Filiere | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem("cfpmi_admin_filieres");
    if (local) {
      setFilieres(JSON.parse(local));
    } else {
      setFilieres(INITIAL_FILIERES);
    }
  }, []);

  const saveFilieres = (newList: Filiere[]) => {
    setFilieres(newList);
    localStorage.setItem("cfpmi_admin_filieres", JSON.stringify(newList));
  };

  const handleEdit = (f: Filiere) => {
    setEditingFiliere({ ...f });
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingFiliere({
      id: "f-" + Date.now(),
      slug: "nouvelle-formation-" + Date.now(),
      titre: "",
      sous_titre: "",
      description_courte: "",
      description_complete: "",
      categorie: "technique",
      duree: "6 mois",
      horaires: "Jour (08h30 - 13h00) | Soir (17h30 - 20h30)",
      frais_inscription: 35000,
      mensualite: 40000,
      debouches: ["Technicien d'intervention", "Chef d'équipe BTP"],
      matieres: ["Technologie appliquée", "Travaux pratiques en atelier"],
      materiel: ["Outillage fourni"],
      avantages: ["Stage garanti (CALD Expertise)"],
      image_url: "/images/formations/froid-clim.jpg",
      statut: "ouvert",
      ordre: filieres.length + 1,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette filière ?")) {
      const updated = filieres.filter((f) => f.id !== id);
      saveFilieres(updated);
    }
  };

  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFiliere) return;

    const exists = filieres.find((f) => f.id === editingFiliere.id);
    let updated: Filiere[];
    if (exists) {
      updated = filieres.map((f) => (f.id === editingFiliere.id ? editingFiliere : f));
    } else {
      updated = [...filieres, editingFiliere];
    }
    saveFilieres(updated);
    setIsModalOpen(false);
    setEditingFiliere(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Gestion des Filières de Formation (CRUD)
          </h2>
          <p className="text-xs text-slate-500">
            Modifiez les tarifs, programmes, débouchés et statuts sans toucher au code source.
          </p>
        </div>

        <button
          onClick={handleAddNew}
          className="inline-flex items-center gap-2 bg-cfpmi-orange hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Ajouter une Filière</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filieres.map((f) => (
          <div
            key={f.id}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-cfpmi-marine bg-blue-50 px-2.5 py-0.5 rounded-full uppercase">
                  {f.categorie}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    f.statut === "ouvert"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {f.statut === "ouvert" ? "Ouvert" : "Complet"}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">{f.titre}</h3>
              {f.sous_titre && (
                <p className="text-xs font-semibold text-cfpmi-orange mt-0.5">{f.sous_titre}</p>
              )}
              <p className="text-xs text-slate-600 mt-2 line-clamp-2">{f.description_courte}</p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px]">Mensualité</span>
                  <strong className="text-cfpmi-marine font-bold">{formatPriceFCFA(f.mensualite)}</strong>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 block text-[10px]">Inscription</span>
                  <strong className="text-slate-800 font-bold">{formatPriceFCFA(f.frais_inscription)}</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => handleEdit(f)}
                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors inline-flex items-center gap-1 text-xs font-semibold"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Modifier</span>
              </button>
              <button
                onClick={() => handleDelete(f.id)}
                className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                title="Supprimer"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isModalOpen && editingFiliere && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-lg text-slate-900">
                {editingFiliere.titre ? `Modifier : ${editingFiliere.titre}` : "Nouvelle Filière"}
              </h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Titre de la formation *</label>
                <input
                  type="text"
                  required
                  value={editingFiliere.titre}
                  onChange={(e) => setEditingFiliere({ ...editingFiliere, titre: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl font-semibold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Sous-titre / Spécialités</label>
                <input
                  type="text"
                  value={editingFiliere.sous_titre || ""}
                  onChange={(e) => setEditingFiliere({ ...editingFiliere, sous_titre: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Frais d&apos;inscription (FCFA)</label>
                  <input
                    type="number"
                    value={editingFiliere.frais_inscription}
                    onChange={(e) => setEditingFiliere({ ...editingFiliere, frais_inscription: Number(e.target.value) })}
                    className="w-full p-2.5 bg-slate-50 border rounded-xl font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mensualité (FCFA)</label>
                  <input
                    type="number"
                    value={editingFiliere.mensualite}
                    onChange={(e) => setEditingFiliere({ ...editingFiliere, mensualite: Number(e.target.value) })}
                    className="w-full p-2.5 bg-slate-50 border rounded-xl font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Durée</label>
                  <input
                    type="text"
                    value={editingFiliere.duree}
                    onChange={(e) => setEditingFiliere({ ...editingFiliere, duree: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Statut d&apos;inscription</label>
                  <select
                    value={editingFiliere.statut}
                    onChange={(e) => setEditingFiliere({ ...editingFiliere, statut: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-50 border rounded-xl font-semibold"
                  >
                    <option value="ouvert">Ouvert (Inscriptions en cours)</option>
                    <option value="bientot">Bientôt</option>
                    <option value="complet">Complet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Description courte</label>
                <textarea
                  rows={2}
                  value={editingFiliere.description_courte}
                  onChange={(e) => setEditingFiliere({ ...editingFiliere, description_courte: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="pt-3 border-t flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 rounded-xl font-semibold"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-cfpmi-marine text-white rounded-xl font-bold shadow"
                >
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

