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
    <header className="sticky top-0 z-40 bg-[#080E21]/95 backdrop-blur-md border-b border-blue-900/60 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with White Pill Container for perfect contrast */}
          <Link href="/" className="flex items-center group">
            <div className="bg-white/95 hover:bg-white px-3 py-1.5 rounded-2xl shadow-md border border-white/20 transition-all duration-200 group-hover:scale-105">
              <div className="relative w-36 sm:w-44 h-11 flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="CFPMI Sénégal - Clé de la Réussite"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAVIGATION_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-cfpmi-orange bg-orange-500/10 border border-orange-500/30 shadow-xs"
                    : "text-slate-200 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={generateWhatsAppLink("Bonjour CFPMI, je souhaite me renseigner sur vos formations.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-md transition-all duration-200 transform hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/inscription"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cfpmi-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-md shadow-orange-500/20 transition-all duration-200 transform hover:scale-105"
            >
              <GraduationCap className="w-4 h-4" />
              <span>S&apos;inscrire</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0B1437] border-b border-blue-900/80 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          {NAVIGATION_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold ${
                isActive(item.href)
                  ? "bg-orange-500/10 text-cfpmi-orange border border-orange-500/30"
                  : "text-slate-200 hover:bg-white/5"
              }`}
            >
              <span>{item.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>
          ))}

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm py-3 rounded-xl shadow"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct (+221 77 694 78 71)</span>
            </a>

            <Link
              href="/inscription"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-cfpmi-orange text-white font-bold text-sm py-3 rounded-xl shadow"
            >
              <GraduationCap className="w-4 h-4" />
              <span>S&apos;inscrire en ligne</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
