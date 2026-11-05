"use client";

import React, { useState, useEffect } from "react";
import { Actualite } from "@/lib/types";
import { INITIAL_ACTUALITES } from "@/lib/data";
import { Newspaper, Plus, Edit, Trash2, Calendar, Sparkles, X } from "lucide-react";

export default function AdminActualitesPage() {
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Actualite | null>(null);

  useEffect(() => {
    const local = localStorage.getItem("cfpmi_admin_actualites");
    if (local) {
      setActualites(JSON.parse(local));
    } else {
      setActualites(INITIAL_ACTUALITES);
    }
  }, []);

  const saveNews = (list: Actualite[]) => {
    setActualites(list);
    localStorage.setItem("cfpmi_admin_actualites", JSON.stringify(list));
  };

  const handleAddNew = () => {
    setEditingItem({
      id: "actu-" + Date.now(),
      slug: "nouvelle-annonce-" + Date.now(),
      titre: "",
      resume: "",
      contenu: "",
      image_url: "/images/news/rentree.jpg",
      auteur: "Direction CFPMI",
      categorie: "Annonce",
      est_publie: true,
      date_publication: new Date().toISOString().slice(0, 10),
    });
    setIsModalOpen(true);
  };

  const handleEdit = (item: Actualite) => {
    setEditingItem({ ...item });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Supprimer cet article ?")) {
      const updated = actualites.filter((a) => a.id !== id);
      saveNews(updated);
    }
  };

  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    const exists = actualites.find((a) => a.id === editingItem.id);
    let updated: Actualite[];
    if (exists) {
      updated = actualites.map((a) => (a.id === editingItem.id ? editingItem : a));
    } else {
      updated = [editingItem, ...actualites];
    }
    saveNews(updated);
    setIsModalOpen(false);
    setEditingItem(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Gestion des Actualités & Annonces (CRUD)
          </h2>
          <p className="text-xs text-slate-500">
            Publiez les avis de rentrée, partenariats (CALD Expertise) et actualités d&apos;ateliers.
          </p>
        </div>

        <button
          onClick={handleAddNew}
          className="inline-flex items-center gap-2 bg-cfpmi-orange hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Nouvelle Actualité</span>
        </button>
      </div>

      <div className="space-y-4">
        {actualites.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-cfpmi-red bg-red-50 px-2 py-0.5 rounded">
                  {item.categorie}
                </span>
                <span className="text-slate-400">
                  {new Date(item.date_publication).toLocaleDateString("fr-FR")}
                </span>
                <span className="text-slate-500">• {item.auteur}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-base">{item.titre}</h3>
              <p className="text-xs text-slate-500 line-clamp-1">{item.resume}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleEdit(item)}
                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors inline-flex items-center gap-1 text-xs font-semibold"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Modifier</span>
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isModalOpen && editingItem && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto text-xs">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-base text-slate-900">
                {editingItem.titre ? "Modifier l'actualité" : "Créer une actualité"}
              </h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Titre de l&apos;actualité *</label>
                <input
                  type="text"
                  required
                  value={editingItem.titre}
                  onChange={(e) => setEditingItem({ ...editingItem, titre: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Catégorie</label>
                  <select
                    value={editingItem.categorie}
                    onChange={(e) => setEditingItem({ ...editingItem, categorie: e.target.value })}
                    className="w-full p-2 bg-slate-50 border rounded-xl font-medium"
                  >
                    <option value="Annonce">Annonce</option>
                    <option value="Insertion">Insertion & Emploi</option>
                    <option value="Ateliers">Vie des Ateliers</option>
                    <option value="Conseils">Conseils & Réussite</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Date de publication</label>
                  <input
                    type="date"
                    value={editingItem.date_publication}
                    onChange={(e) => setEditingItem({ ...editingItem, date_publication: e.target.value })}
                    className="w-full p-2 bg-slate-50 border rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Résumé court</label>
                <textarea
                  rows={2}
                  value={editingItem.resume}
                  onChange={(e) => setEditingItem({ ...editingItem, resume: e.target.value })}
                  className="w-full p-2 bg-slate-50 border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Contenu complet</label>
                <textarea
                  rows={6}
                  value={editingItem.contenu}
                  onChange={(e) => setEditingItem({ ...editingItem, contenu: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl font-sans"
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
                  Enregistrer et Publier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

