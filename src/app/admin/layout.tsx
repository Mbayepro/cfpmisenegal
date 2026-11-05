import React from "react";
import AdminNav from "@/components/AdminNav";

export const metadata = {
  title: "Administration | CFPMI Sénégal",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      <AdminNav />
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-bold text-slate-800">
              Système de Gestion CFPMI Sénégal
            </h1>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Supabase Connecté
            </span>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Session Sécurisée • Dakar, Hamo 6
          </div>
        </header>

        <main className="p-6 sm:p-8">{children}</main>
      </div>
    </div>
  );
}

