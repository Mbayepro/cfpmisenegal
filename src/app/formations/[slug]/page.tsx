import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getFilieres, getFiliereBySlug } from "@/lib/supabase";
import { generateWhatsAppLink } from "@/lib/utils";
import { CFPMI_INFO } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  Clock,
  Calendar,
  CheckCircle,
  Briefcase,
  BookOpen,
  Wrench,
  GraduationCap,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const filieres = await getFilieres();
  return filieres.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const filiere = await getFiliereBySlug(params.slug);
  if (!filiere) return { title: "Formation non trouvée | CFPMI Sénégal" };

  return {
    title: `${filiere.titre} - Formation 100% Pratique à Dakar`,
    description: filiere.description_courte,
    openGraph: {
      title: `${filiere.titre} | CFPMI Sénégal`,
      description: filiere.description_courte,
    },
  };
}

export const revalidate = 60;

export default async function FiliereDetailPage({ params }: Props) {
  const filiere = await getFiliereBySlug(params.slug);

  if (!filiere) {
    notFound();
  }

  // Schema.org Course structure
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": filiere.titre,
    "description": filiere.description_courte,
    "provider": {
      "@type": "EducationalOrganization",
      "name": CFPMI_INFO.name,
      "sameAs": CFPMI_INFO.siteUrl
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-cfpmi-marine via-blue-900 to-cfpmi-marine text-white py-12 sm:py-16 border-b border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300 mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <Link href="/formations" className="hover:text-white">Formations</Link>
            <span>/</span>
            <span className="text-cfpmi-orange">{filiere.titre}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1 bg-cfpmi-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Formation 100% Pratique
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {filiere.titre}
            </h1>

            {filiere.sous_titre && (
              <p className="text-lg text-cfpmi-sky font-medium">
                {filiere.sous_titre}
              </p>
            )}

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {filiere.description_complete}
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Débouchés au Sénégal */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-2.5 bg-blue-100 text-cfpmi-marine rounded-2xl">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Débouchés Professionnels au Sénégal
                  </h2>
                  <p className="text-xs text-slate-500">
                    Métiers accessibles directement à la sortie de votre formation
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {filiere.debouches.map((debouche, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{debouche}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Matières Clés & Programme */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-2.5 bg-orange-100 text-cfpmi-orange rounded-2xl">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Matières Clés & Modules Techniques
                  </h2>
                  <p className="text-xs text-slate-500">
                    Apprentissage axé sur la maîtrise des gestes métiers
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                {filiere.matieres.map((matiere, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 text-sm text-slate-800"
                  >
                    <span className="w-6 h-6 rounded-full bg-cfpmi-marine text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-medium">{matiere}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Matériel & Équipements d'Atelier */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-2.5 bg-sky-100 text-cfpmi-sky rounded-2xl">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Équipements & Matériel d&apos;Atelier
                  </h2>
                  <p className="text-xs text-slate-500">
                    Des outils professionnels mis à votre disposition à Hamo 6
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {filiere.materiel.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs font-semibold text-slate-700 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-cfpmi-orange" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stages & Partenariats */}
            <div className="bg-gradient-to-r from-blue-900 to-cfpmi-marine text-white rounded-3xl p-6 sm:p-8 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-8 h-8 text-cfpmi-orange" />
                <div>
                  <h3 className="text-lg font-bold">Stage Garanti & Partenariats Chantiers</h3>
                  <p className="text-xs text-blue-200">Immersion professionnelle concrète</p>
                </div>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                Le CFPMI travaille main dans la main avec des acteurs majeurs comme <strong>CALD Expertise</strong>. Chaque apprenant est placé en stage pratique sur des installations réelles (immeubles, climatisation industrielle, usines) pour transformer ses acquis en expérience valorisable.
              </p>
            </div>

          </div>

          {/* Sidebar CTA & Tarifs (Right 4 cols) */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            
            {/* Pricing / Admission Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-cfpmi-marine shadow-xl space-y-6">
              
              <div className="border-b border-slate-100 pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-cfpmi-orange bg-orange-50 px-3 py-1 rounded-full">
                  Tarifs & Modalités
                </span>
                <div className="mt-4">
                  <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">Investissement Formation</span>
                  <span className="text-2xl font-extrabold text-cfpmi-marine">
                    Tarifs sur demande
                  </span>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Les frais d&apos;inscription et mensualités dépendent du cursus choisi (Formation accélérée pratique, CPS 6 mois, CAP, BT 3 ans, BTS ou formation continue à la carte).
                  </p>
                </div>
              </div>

              {/* Practical Details */}
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-medium">
                  <Clock className="w-4 h-4 text-cfpmi-sky shrink-0" />
                  <span><strong>Durée :</strong> {filiere.duree}</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Calendar className="w-4 h-4 text-cfpmi-orange shrink-0" />
                  <span><strong>Horaires :</strong> {filiere.horaires}</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <MapPin className="w-4 h-4 text-cfpmi-red shrink-0" />
                  <span><strong>Lieu :</strong> Guédiawaye, Hamo 6</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Diplômes :</strong> CPS, CAP, BEP, BT, BTS</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <Link
                  href={`/inscription?filiere=${filiere.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm py-4 px-4 rounded-xl shadow-lg transition-all text-center"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>S&apos;inscrire à cette filière</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={generateWhatsAppLink(
                    `Bonjour CFPMI, je souhaite connaître les tarifs et les modalités d'inscription pour la formation en ${filiere.titre} à Guédiawaye Hamo 6.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all text-center shadow-md hover:shadow-lg"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Demander le tarif sur WhatsApp</span>
                </a>
              </div>

              <div className="border-t border-slate-100 pt-4 text-center">
                <p className="text-[11px] text-slate-500">
                  Ou appelez directement le secrétariat au :<br />
                  <a href={`tel:+${CFPMI_INFO.phoneSecondaryClean}`} className="font-bold text-cfpmi-marine hover:underline text-xs">
                    {CFPMI_INFO.phoneSecondary}
                  </a>
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

