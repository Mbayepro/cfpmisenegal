"use client";

import React, { useState, useEffect } from "react";
import { Temoignage } from "@/lib/types";
import { INITIAL_TEMOIGNAGES } from "@/lib/data";
import { Award, Plus, Edit, Trash2, Building, Star, X } from "lucide-react";

export default function AdminTemoignagesPage() {
  const [temoignages, setTemoignages] = useState<Temoignage[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Temoignage | null>(null);

  useEffect(() => {
    const local = localStorage.getItem("cfpmi_admin_temoignages");
    if (local) {
      setTemoignages(JSON.parse(local));
    } else {
      setTemoignages(INITIAL_TEMOIGNAGES);
    }
  }, []);

  const saveList = (list: Temoignage[]) => {
    setTemoignages(list);
    localStorage.setItem("cfpmi_admin_temoignages", JSON.stringify(list));
  };

  const handleAddNew = () => {
    setEditingItem({
      id: "tem-" + Date.now(),
      nom: "",
      origine: "Sénégal",
      filiere_suivie: "Froid & Climatisation",
      annee_promotion: "Promotion 2024",
      entreprise_creee_ou_poste: "Fondateur d'entreprise",
      photo_url: "/images/temoignages/jafaridun.jpg",
      citation: "",
      histoire_complete: "",
      est_en_vedette: false,
      ordre: temoignages.length + 1,
    });
    setIsModalOpen(true);
  };

  const handleEdit = (item: Temoignage) => {
    setEditingItem({ ...item });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Supprimer ce témoignage ?")) {
      const updated = temoignages.filter((t) => t.id !== id);
      saveList(updated);
    }
  };

  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    const exists = temoignages.find((t) => t.id === editingItem.id);
    let updated: Temoignage[];
    if (exists) {
      updated = temoignages.map((t) => (t.id === editingItem.id ? editingItem : t));
    } else {
      updated = [editingItem, ...temoignages];
    }
    saveList(updated);
    setIsModalOpen(false);
    setEditingItem(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Gestion des Témoignages & Réussites (CRUD)
          </h2>
          <p className="text-xs text-slate-500">
            Mettez en avant les parcours inspirants comme Jafaridun (EFC - Comores vers Dakar).
          </p>
        </div>

        <button
          onClick={handleAddNew}
          className="inline-flex items-center gap-2 bg-cfpmi-orange hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Ajouter un Témoignage</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {temoignages.map((t) => (
          <div key={t.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900 text-base">{t.nom}</h3>
                <span className="text-xs text-cfpmi-orange font-semibold">{t.origine}</span>
                <p className="text-xs text-slate-400 mt-0.5">{t.filiere_suivie} • {t.annee_promotion}</p>
              </div>

              {t.est_en_vedette && (
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  À la Une
                </span>
              )}
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700 italic">
              &laquo; {t.citation} &raquo;
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
              <span className="font-bold text-slate-800 flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-cfpmi-marine" />
                {t.entreprise_creee_ou_poste}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(t)}
                  className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs"
                >
                  <Edit className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && editingItem && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 space-y-4 shadow-2xl text-xs max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="font-bold text-base">Témoignage</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold mb-1">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={editingItem.nom}
                    onChange={(e) => setEditingItem({ ...editingItem, nom: e.target.value })}
                    className="w-full p-2 bg-slate-50 border rounded-xl font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Pays / Ville d&apos;origine</label>
                  <input
                    type="text"
                    value={editingItem.origine}
                    onChange={(e) => setEditingItem({ ...editingItem, origine: e.target.value })}
                    className="w-full p-2 bg-slate-50 border rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold mb-1">Entreprise créée ou poste actuel *</label>
                <input
                  type="text"
                  required
                  value={editingItem.entreprise_creee_ou_poste}
                  onChange={(e) => setEditingItem({ ...editingItem, entreprise_creee_ou_poste: e.target.value })}
                  placeholder="Ex: Fondateur d'EFC (Électricité, Froid et Confort)"
                  className="w-full p-2 bg-slate-50 border rounded-xl font-medium"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Citation courte *</label>
                <textarea
                  rows={2}
                  required
                  value={editingItem.citation}
                  onChange={(e) => setEditingItem({ ...editingItem, citation: e.target.value })}
                  className="w-full p-2 bg-slate-50 border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Histoire complète du parcours</label>
                <textarea
                  rows={4}
                  value={editingItem.histoire_complete}
                  onChange={(e) => setEditingItem({ ...editingItem, histoire_complete: e.target.value })}
                  className="w-full p-2 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="vedette"
                  checked={editingItem.est_en_vedette}
                  onChange={(e) => setEditingItem({ ...editingItem, est_en_vedette: e.target.checked })}
                  className="rounded text-cfpmi-marine"
                />
                <label htmlFor="vedette" className="font-bold text-slate-700">
                  Mettre en vedette sur la page d&apos;accueil
                </label>
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
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

