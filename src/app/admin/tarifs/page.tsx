"use client";

import React, { useState, useEffect } from "react";
import { TarifItem } from "@/lib/types";
import { INITIAL_TARIFS } from "@/lib/data";
import { formatPriceFCFA } from "@/lib/utils";
import { CreditCard, Edit, Check, X } from "lucide-react";

export default function AdminTarifsPage() {
  const [tarifs, setTarifs] = useState<TarifItem[]>([]);
  const [editingTarif, setEditingTarif] = useState<TarifItem | null>(null);

  useEffect(() => {
    const local = localStorage.getItem("cfpmi_admin_tarifs");
    if (local) {
      setTarifs(JSON.parse(local));
    } else {
      setTarifs(INITIAL_TARIFS);
    }
  }, []);

  const saveTarifs = (list: TarifItem[]) => {
    setTarifs(list);
    localStorage.setItem("cfpmi_admin_tarifs", JSON.stringify(list));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTarif) return;
    const updated = tarifs.map((t) => (t.id === editingTarif.id ? editingTarif : t));
    saveTarifs(updated);
    setEditingTarif(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Gestion de la Grille des Tarifs
        </h2>
        <p className="text-xs text-slate-500">
          Modifiez les montants d&apos;inscription et mensualités affichés sur le site public.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tarifs.map((t) => (
          <div key={t.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">{t.filiere_nom}</h3>
              <p className="text-xs text-slate-500">{t.niveau}</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Frais d&apos;inscription :</span>
                <strong className="text-slate-900 font-bold">{formatPriceFCFA(t.frais_inscription)}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Mensualité :</span>
                <strong className="text-cfpmi-marine font-bold">{formatPriceFCFA(t.mensualite)}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Durée :</span>
                <span className="text-slate-800 font-semibold">{t.duree}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setEditingTarif({ ...t })}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cfpmi-marine bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-xl transition-colors"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Modifier le tarif</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingTarif && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl text-xs">
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="font-bold text-base">Modifier le Tarif : {editingTarif.filiere_nom}</h3>
              <button onClick={() => setEditingTarif(null)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Frais d&apos;inscription (FCFA)</label>
                <input
                  type="number"
                  value={editingTarif.frais_inscription}
                  onChange={(e) => setEditingTarif({ ...editingTarif, frais_inscription: Number(e.target.value) })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Mensualité (FCFA)</label>
                <input
                  type="number"
                  value={editingTarif.mensualite}
                  onChange={(e) => setEditingTarif({ ...editingTarif, mensualite: Number(e.target.value) })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Matériel & Équipements Inclus</label>
                <textarea
                  rows={2}
                  value={editingTarif.materiel_inclus}
                  onChange={(e) => setEditingTarif({ ...editingTarif, materiel_inclus: e.target.value })}
                  className="w-full p-2 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="pt-3 border-t flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingTarif(null)}
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

