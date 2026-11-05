"use client";

import React, { useState } from "react";
import Image from "next/image";
import { INITIAL_GALERIE } from "@/lib/data";
import { GalerieItem } from "@/lib/types";
import { Camera, Video, Sparkles, Filter, X, Eye, ExternalLink } from "lucide-react";

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("tous");
  const [activeMedia, setActiveMedia] = useState<GalerieItem | null>(null);

  const categories = [
    { key: "tous", label: "Tous les clichés & vidéos" },
    { key: "ateliers", label: "Ateliers & Savoir-faire" },
    { key: "chantiers", label: "Chantiers & Partenaires (CALD)" },
    { key: "remise_attestations", label: "Remises de Diplômes & Attestations" },
  ];

  const filteredItems =
    selectedCategory === "tous"
      ? INITIAL_GALERIE
      : INITIAL_GALERIE.filter((item) => item.categorie === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cfpmi-marine bg-blue-100/70 px-4 py-1.5 rounded-full">
            Immersion Visuelle & Vidéos
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Galerie de nos Ateliers & Événements
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Retrouvez en photos et vidéos la vie de nos ateliers : remise d&apos;attestation au Doyen Momar SECK, success story de Jafaridun (EFC), travaux pratiques et immersion terrain.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.key
                  ? "bg-cfpmi-marine text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Container with actual photo */}
              <div
                onClick={() => setActiveMedia(item)}
                className="relative h-64 w-full bg-slate-900 overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.media_url}
                  alt={item.titre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 bg-cfpmi-marine/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
                  {item.type_media === "video" ? <Video className="w-3 h-3 text-cfpmi-orange" /> : <Camera className="w-3 h-3 text-cfpmi-sky" />}
                  <span>{item.type_media === "video" ? "Vidéo" : "Photo"}</span>
                </span>

                {item.type_media === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Video className="w-6 h-6 fill-white" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Eye className="w-3 h-3 text-cfpmi-sky" />
                  <span>Agrandir</span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => setActiveMedia(item)}
                    className="font-bold text-slate-900 group-hover:text-cfpmi-marine transition-colors text-base line-clamp-2 cursor-pointer leading-snug"
                  >
                    {item.titre}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {item.video_url && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <a
                      href={item.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Visionner sur Facebook</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeMedia && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <h3 className="font-bold text-sm sm:text-base line-clamp-1">{activeMedia.titre}</h3>
                <button
                  onClick={() => setActiveMedia(null)}
                  className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative h-80 sm:h-96 w-full bg-slate-950">
                <Image
                  src={activeMedia.media_url}
                  alt={activeMedia.titre}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 space-y-3">
                <h4 className="font-bold text-slate-900 text-base">{activeMedia.titre}</h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeMedia.description}
                </p>

                {activeMedia.video_url && (
                  <div className="pt-2">
                    <a
                      href={activeMedia.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 px-5 rounded-xl shadow transition-all"
                    >
                      <Video className="w-4 h-4" />
                      <span>Ouvrir la vidéo officielle sur Facebook</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                )}

                <div className="pt-3 text-[11px] text-slate-400 font-medium border-t border-slate-100 flex items-center justify-between">
                  <span>CFPMI Sénégal — &laquo; Clé de la Réussite &raquo;</span>
                  <span className="font-bold text-cfpmi-marine">Guédiawaye Hamo 6</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
