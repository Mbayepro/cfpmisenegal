"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileSpreadsheet,
  GraduationCap,
  CreditCard,
  Newspaper,
  Award,
  Image as ImageIcon,
  HelpCircle,
  MessageSquare,
  LogOut,
  ExternalLink,
  Shield,
} from "lucide-react";

export default function AdminNav() {
  const pathname = usePathname();

  const links = [
    { name: "Tableau de Bord", href: "/admin", icon: LayoutDashboard },
    { name: "Inscriptions", href: "/admin/inscriptions", icon: Users },
    { name: "Leads Brochure", href: "/admin/leads", icon: FileSpreadsheet },
    { name: "Filières / Formations", href: "/admin/formations", icon: GraduationCap },
    { name: "Tarifs & Frais", href: "/admin/tarifs", icon: CreditCard },
    { name: "Actualités & Annonces", href: "/admin/actualites", icon: Newspaper },
    { name: "Témoignages & EFC", href: "/admin/temoignages", icon: Award },
    { name: "Galerie Ateliers", href: "/admin/galerie", icon: ImageIcon },
    { name: "Foire Aux Questions", href: "/admin/faq", icon: HelpCircle },
  ];

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 min-h-screen flex flex-col justify-between border-r border-slate-800 shrink-0">
      <div>
        {/* Logo and Admin Tag */}
        <div className="p-6 border-b border-slate-800">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-36 h-10 bg-white p-1.5 rounded-xl">
              <Image
                src="/images/logo.png"
                alt="CFPMI Sénégal"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div className="mt-3 flex items-center gap-2 text-xs font-bold text-cfpmi-orange bg-slate-800/80 px-3 py-1 rounded-lg">
            <Shield className="w-3.5 h-3.5" />
            <span>Espace Administration</span>
          </div>
        </div>

        {/* Links */}
        <nav className="p-4 space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  active
                    ? "bg-cfpmi-marine text-white font-bold shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? "text-cfpmi-orange" : "text-slate-500"}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer controls */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          <span>Voir le site public</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>

        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              localStorage.removeItem("cfpmi_admin_auth");
              window.location.href = "/admin/login";
            }
          }}
          className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}

