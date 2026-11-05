"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronRight, GraduationCap } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CFPMI_INFO, NAVIGATION_LINKS } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Slogan (Location text removed as requested) */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-40 sm:w-48 h-12 flex items-center">
              <Image
                src="/images/logo.png"
                alt="CFPMI Sénégal - Clé de la Réussite"
                fill
                priority
                className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-200"
              />
            </div>
          </Link>

          {/* Desktop Navigation (Without Tarifs, Without FAQ) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAVIGATION_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-cfpmi-marine bg-blue-50/80 font-bold"
                    : "text-slate-700 hover:text-cfpmi-marine hover:bg-slate-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 transform hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/inscription"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cfpmi-marine to-blue-800 text-white font-bold text-sm px-4 py-2.5 rounded-full shadow-md hover:shadow-lg hover:from-blue-900 hover:to-cfpmi-marine transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <GraduationCap className="w-4 h-4 text-cfpmi-orange" />
              <span>S&apos;inscrire</span>
            </Link>
          </div>

          {/* Mobile hamburger & WhatsApp button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter sur WhatsApp"
              className="p-2.5 text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-xs transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-cfpmi-marine hover:bg-slate-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isOpen ? <X className="w-6 h-6 text-cfpmi-red" /> : <Menu className="w-6 h-6 text-cfpmi-marine" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {NAVIGATION_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-50 text-cfpmi-marine font-bold"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/inscription"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-cfpmi-orange hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors text-center text-sm"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Formulaire d&apos;inscription en ligne</span>
            </Link>

            <a
              href={`tel:+${CFPMI_INFO.phonePrimaryClean}`}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 text-cfpmi-marine font-semibold py-2.5 px-4 rounded-xl text-center text-sm"
            >
              <Phone className="w-4 h-4 text-cfpmi-sky" />
              <span>Appeler le secrétariat ({CFPMI_INFO.phonePrimary})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
