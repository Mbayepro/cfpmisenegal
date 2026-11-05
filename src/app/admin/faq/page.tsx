"use client";

import React, { useState, useEffect } from "react";
import { FAQItem } from "@/lib/types";
import { INITIAL_FAQ } from "@/lib/data";
import { HelpCircle, Plus, Edit, Trash2, X } from "lucide-react";

export default function AdminFAQPage() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<FAQItem | null>(null);

  useEffect(() => {
    const local = localStorage.getItem("cfpmi_admin_faq");
    if (local) {
      setFaqs(JSON.parse(local));
    } else {
      setFaqs(INITIAL_FAQ);
    }
  }, []);

  const saveList = (list: FAQItem[]) => {
    setFaqs(list);
    localStorage.setItem("cfpmi_admin_faq", JSON.stringify(list));
  };

  const handleAddNew = () => {
    setEditingItem({
      id: "faq-" + Date.now(),
      question: "",
      reponse: "",
      categorie: "Général",
      ordre: faqs.length + 1,
    });
    setIsModalOpen(true);
  };

  const handleEdit = (item: FAQItem) => {
    setEditingItem({ ...item });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Supprimer cette question FAQ ?")) {
      const updated = faqs.filter((f) => f.id !== id);
      saveList(updated);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    const exists = faqs.find((f) => f.id === editingItem.id);
    let updated: FAQItem[];
    if (exists) {
      updated = faqs.map((f) => (f.id === editingItem.id ? editingItem : f));
    } else {
      updated = [...faqs, editingItem];
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
            Gestion de la FAQ (Foire Aux Questions)
          </h2>
          <p className="text-xs text-slate-500">
            Répondez aux interrogations courantes sur les inscriptions, frais, adresses et diplômes.
          </p>
        </div>

        <button
          onClick={handleAddNew}
          className="inline-flex items-center gap-2 bg-cfpmi-orange hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Ajouter une Question</span>
        </button>
      </div>

      <div className="space-y-3">
        {faqs.map((f) => (
          <div key={f.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex justify-between items-start gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-cfpmi-marine bg-blue-50 px-2 py-0.5 rounded">
                {f.categorie}
              </span>
              <h3 className="font-bold text-slate-900 text-sm">{f.question}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{f.reponse}</p>
            </div>

            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => handleEdit(f)}
                className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs"
              >
                <Edit className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleDelete(f.id)}
                className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && editingItem && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl text-xs">
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="font-bold text-base">Question FAQ</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="block font-bold mb-1">Catégorie</label>
                <select
                  value={editingItem.categorie}
                  onChange={(e) => setEditingItem({ ...editingItem, categorie: e.target.value })}
                  className="w-full p-2 bg-slate-50 border rounded-xl"
                >
                  <option value="Général">Général</option>
                  <option value="Inscriptions">Inscriptions</option>
                  <option value="Formations">Formations</option>
                  <option value="Tarifs & Paiement">Tarifs & Paiement</option>
                  <option value="Stages & Emploi">Stages & Emploi</option>
                </select>
              </div>

              <div>
                <label className="block font-bold mb-1">Question posée *</label>
                <input
                  type="text"
                  required
                  value={editingItem.question}
                  onChange={(e) => setEditingItem({ ...editingItem, question: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Réponse détaillée *</label>
                <textarea
                  rows={4}
                  required
                  value={editingItem.reponse}
                  onChange={(e) => setEditingItem({ ...editingItem, reponse: e.target.value })}
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

