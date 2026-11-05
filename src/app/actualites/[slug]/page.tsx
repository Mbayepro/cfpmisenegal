import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getActualites, getActualiteBySlug } from "@/lib/supabase";
import { Calendar, User, ArrowLeft, ArrowRight, Share2, Sparkles, GraduationCap, Video, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const actualites = await getActualites();
  return actualites.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = await getActualiteBySlug(params.slug);
  if (!item) return { title: "Article non trouvé | CFPMI Sénégal" };

  return {
    title: item.titre,
    description: item.resume,
  };
}

export const revalidate = 60;

export default async function ActualiteDetailPage({ params }: Props) {
  const item = await getActualiteBySlug(params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/actualites"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-cfpmi-marine mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour aux actualités</span>
        </Link>

        <article className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xl space-y-8">
          
          <div className="space-y-4 border-b border-slate-100 pb-6">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-cfpmi-red bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              {item.categorie}
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {item.titre}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1 font-medium">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  Publié le{" "}
                  {new Date(item.date_publication).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-medium">
                  <User className="w-4 h-4 text-slate-400" />
                  Par {item.auteur}
                </span>
              </div>

              {item.video_url && (
                <a
                  href={item.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full shadow transition-all"
                >
                  <Video className="w-4 h-4 text-white" />
                  <span>Regarder la vidéo sur Facebook</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}
            </div>
          </div>

          {/* Main Photo Banner with rounded corners */}
          {item.image_url && (
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src={item.image_url}
                alt={item.titre}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 whitespace-pre-line">
            {item.contenu}
          </div>

          {/* Callout box for registrations */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200 space-y-3">
            <h3 className="font-bold text-slate-900 text-base">
              Ne manquez pas la rentrée de ce lundi 17 novembre 2026 !
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Les places en ateliers sont limitées pour garantir un suivi pratique de qualité à chaque apprenant.
            </p>
            <div className="pt-2">
              <Link
                href="/inscription"
                className="inline-flex items-center gap-2 bg-cfpmi-orange hover:bg-orange-600 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl shadow transition-all"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Remplir mon dossier en ligne</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </article>

      </div>
    </div>
  );
}
