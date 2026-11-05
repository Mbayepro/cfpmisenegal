import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Clock, ShieldCheck, ArrowUpRight, HelpCircle } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CFPMI_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-4 border-cfpmi-marine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 : Logo & Mission */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
              <div className="relative w-44 h-12">
                <Image
                  src="/images/logo.png"
                  alt="CFPMI Sénégal - Clé de la Réussite"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Le <strong className="text-white">CFPMI Sénégal</strong> forme des techniciens opérationnels en Froid, Électricité, Plomberie et Soudure. Diplômes préparés : CPS (6 mois), CAP, BEP, BT (3 ans) et BTS.
            </p>

            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-cfpmi-orange font-semibold">
              <ShieldCheck className="w-4 h-4 text-cfpmi-sky" />
              <span>Slogan : &laquo; Clé de la Réussite &raquo;</span>
            </div>
          </div>

          {/* Col 2 : Formations phares */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2 border-l-2 border-cfpmi-sky pl-2">
              Nos Filières Techniques
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/formations/bt-froid-et-climatisation-3ans" className="hover:text-cfpmi-sky transition-colors flex items-center justify-between group">
                  <span>BT Froid & Climatisation</span>
                  <span className="text-[10px] bg-blue-900 text-blue-200 px-2 py-0.5 rounded font-bold">3 ans</span>
                </Link>
              </li>
              <li>
                <Link href="/formations/froid-et-climatisation" className="hover:text-cfpmi-sky transition-colors flex items-center justify-between group">
                  <span>Froid & Climatisation (CPS)</span>
                  <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded">6 mois</span>
                </Link>
              </li>
              <li>
                <Link href="/formations/electricite-batiment-industrielle" className="hover:text-cfpmi-sky transition-colors flex items-center justify-between group">
                  <span>Électricité Bâtiment & Ind.</span>
                  <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded">6 mois</span>
                </Link>
              </li>
              <li>
                <Link href="/formations/plomberie-sanitaire" className="hover:text-cfpmi-sky transition-colors flex items-center justify-between group">
                  <span>Plomberie Sanitaire</span>
                  <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded">6 mois</span>
                </Link>
              </li>
              <li>
                <Link href="/formations/soudure-metallique" className="hover:text-cfpmi-sky transition-colors flex items-center justify-between group">
                  <span>Soudure Métallique (TIG/ARC)</span>
                  <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded">6 mois</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 : Accès Rapide & FAQ (FAQ placée dans le footer comme demandé) */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2 border-l-2 border-cfpmi-orange pl-2">
              Accès Rapide & FAQ
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/faq" className="text-cfpmi-orange hover:text-orange-400 font-bold transition-colors flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-cfpmi-orange" />
                  <span>Foire Aux Questions (FAQ)</span>
                </Link>
              </li>
              <li>
                <Link href="/inscription" className="hover:text-white transition-colors flex items-center gap-1 font-semibold">
                  <ArrowUpRight className="w-3.5 h-3.5 text-cfpmi-orange" />
                  <span>S&apos;inscrire en ligne</span>
                </Link>
              </li>
              <li>
                <Link href="/brochure" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Télécharger la brochure</span>
                </Link>
              </li>
              <li>
                <Link href="/temoignages" className="hover:text-white transition-colors">
                  Témoignages & Réussites (Jafaridun, Momar Seck...)
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-white transition-colors">
                  Galerie photos & vidéos des ateliers
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="hover:text-white transition-colors">
                  Actualités & vie du centre
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/admin" className="text-xs text-slate-500 hover:text-slate-400 underline">
                  Espace Administration (Accès réservé)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 : Contact Direct Guédiawaye */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2 border-l-2 border-cfpmi-red pl-2">
              Contact & Inscriptions
            </h4>
            
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-cfpmi-red shrink-0 mt-0.5" />
              <span>{CFPMI_INFO.address}</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-cfpmi-sky shrink-0" />
              <div className="flex flex-col">
                <a href={`tel:+${CFPMI_INFO.phonePrimaryClean}`} className="hover:text-white font-medium">
                  {CFPMI_INFO.phonePrimary}
                </a>
                <a href={`tel:+${CFPMI_INFO.phoneSecondaryClean}`} className="hover:text-white font-medium text-xs text-slate-400">
                  {CFPMI_INFO.phoneSecondary} (Inscriptions)
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-cfpmi-orange shrink-0" />
              <a href={`mailto:${CFPMI_INFO.email}`} className="hover:text-white">
                {CFPMI_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <Clock className="w-4 h-4 text-slate-500 shrink-0" />
              <span>{CFPMI_INFO.openingHours}</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={CFPMI_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook CFPMI"
                className="w-10 h-10 rounded-full bg-blue-900/60 hover:bg-blue-800 text-white flex items-center justify-center transition-colors border border-blue-700/50"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp CFPMI"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
              </a>
            </div>

          </div>

        </div>

        {/* Section FAQ Express directement dans le Footer */}
        <div className="py-8 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-cfpmi-orange" />
            <h5 className="text-white font-bold text-sm uppercase tracking-wider">
              FAQ Express • Questions Réponses Fréquentes
            </h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400">
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <strong className="text-slate-200 block mb-1">Où se trouve le centre ?</strong>
              Guédiawaye, Hamo 6, Dakar. Accessible par BRT et bus. Joignable au +221 77 694 78 71.
            </div>
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <strong className="text-slate-200 block mb-1">Faut-il le Bac pour s&apos;inscrire ?</strong>
              Non. Les formations accélérées de 6 mois (CPS) sont ouvertes à tous. Pour le BT en 3 ans, le BFEM suffit.
            </div>
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <strong className="text-slate-200 block mb-1">Y a-t-il des cours du soir ?</strong>
              Oui. Trois créneaux : Jour (8h30-13h), Soir (17h30-20h30 pour les travailleurs) et Samedi intensif.
            </div>
          </div>
        </div>

        {/* Partenariat & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} {CFPMI_INFO.name} — Tous droits réservés. Guédiawaye, Dakar, Sénégal.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Partenaire technique de référence :</span>
            <span className="text-slate-300 font-semibold">{CFPMI_INFO.partner}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
