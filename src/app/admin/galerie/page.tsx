"use client";

import React, { useState, useEffect } from "react";
import { GalerieItem } from "@/lib/types";
import { INITIAL_GALERIE } from "@/lib/data";
import { Image as ImageIcon, Plus, Trash2, Camera, X } from "lucide-react";

export default function AdminGaleriePage() {
  const [items, setItems] = useState<GalerieItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState<GalerieItem>({
    id: "gal-" + Date.now(),
    titre: "",
    description: "",
    media_url: "/images/galerie/froid.jpg",
    type_media: "photo",
    categorie: "ateliers",
    ordre: 1,
  });

  useEffect(() => {
    const local = localStorage.getItem("cfpmi_admin_galerie");
    if (local) {
      setItems(JSON.parse(local));
    } else {
      setItems(INITIAL_GALERIE);
    }
  }, []);

  const saveList = (list: GalerieItem[]) => {
    setItems(list);
    localStorage.setItem("cfpmi_admin_galerie", JSON.stringify(list));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = [newItem, ...items];
    saveList(updated);
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Supprimer ce média de la galerie ?")) {
      const updated = items.filter((i) => i.id !== id);
      saveList(updated);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Gestion de la Galerie Ateliers & Chantiers
          </h2>
          <p className="text-xs text-slate-500">
            Ajoutez ou supprimez des photos et vidéos des ateliers de Guédiawaye Hamo 6.
          </p>
        </div>

        <button
          onClick={() => {
            setNewItem({
              id: "gal-" + Date.now(),
              titre: "",
              description: "",
              media_url: "/images/galerie/nouveau.jpg",
              type_media: "photo",
              categorie: "ateliers",
              ordre: items.length + 1,
            });
            setIsModalOpen(true);
          }}
          className="inline-flex items-center gap-2 bg-cfpmi-orange hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Ajouter un Média</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="h-40 bg-gradient-to-tr from-slate-900 to-blue-950 flex items-center justify-center text-white relative">
              <Camera className="w-8 h-8 text-cfpmi-orange opacity-70" />
              <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                {item.categorie}
              </span>
            </div>

            <div className="p-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">{item.titre}</h3>
              <p className="text-xs text-slate-500 line-clamp-2">{item.description}</p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl text-xs">
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="font-bold text-base">Ajouter à la Galerie</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleAdd} className="space-y-3">
              <div>
                <label className="block font-bold mb-1">Titre du média *</label>
                <input
                  type="text"
                  required
                  value={newItem.titre}
                  onChange={(e) => setNewItem({ ...newItem, titre: e.target.value })}
                  placeholder="Ex: Séance de brasure forte en atelier"
                  className="w-full p-2.5 bg-slate-50 border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Catégorie</label>
                <select
                  value={newItem.categorie}
                  onChange={(e) => setNewItem({ ...newItem, categorie: e.target.value as any })}
                  className="w-full p-2 bg-slate-50 border rounded-xl"
                >
                  <option value="ateliers">Ateliers Pratiques</option>
                  <option value="chantiers">Chantiers & Partenaires (CALD)</option>
                  <option value="remise_attestations">Remises de Diplômes</option>
                </select>
              </div>

              <div>
                <label className="block font-bold mb-1">Description</label>
                <textarea
                  rows={2}
                  value={newItem.description || ""}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  className="w-full p-2 bg-slate-50 border rounded-xl"
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
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

