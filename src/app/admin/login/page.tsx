"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Lock, Mail, ShieldCheck, ArrowRight, Sparkles, Key } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@cfpmi.sn");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      if (supabase) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          setErrorMsg(error.message);
          setLoading(false);
          return;
        }
      }

      // Mark session in localStorage
      localStorage.setItem("cfpmi_admin_auth", JSON.stringify({ email, loggedAt: Date.now() }));
      router.push("/admin");
    } catch (err: any) {
      setErrorMsg(err.message || "Erreur d'authentification");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoBypass = () => {
    localStorage.setItem(
      "cfpmi_admin_auth",
      JSON.stringify({ email: "admin@cfpmi.sn", role: "super_admin", loggedAt: Date.now() })
    );
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
        
        {/* Logo */}
        <div className="text-center space-y-2">
          <div className="relative w-44 h-12 mx-auto">
            <Image
              src="/images/logo.png"
              alt="CFPMI Sénégal"
              fill
              className="object-contain"
            />
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cfpmi-orange bg-orange-50 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Portail Sécurisé Administration</span>
          </div>
          <p className="text-xs text-slate-500">
            Réservé aux administrateurs et secrétaires du CFPMI Sénégal.
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">
              Email Administrateur
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@cfpmi.sn"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cfpmi-marine focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cfpmi-marine focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-cfpmi-marine hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-xl shadow transition-all"
          >
            <span>{loading ? "Connexion..." : "Se Connecter avec Supabase"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Demo Fast Access Button */}
        <div className="pt-2 border-t border-slate-100 text-center space-y-2">
          <p className="text-[11px] text-slate-400">
            Mode Démo / Test Local :
          </p>
          <button
            onClick={handleDemoBypass}
            className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2.5 px-4 rounded-xl transition-colors border border-slate-200"
          >
            <Key className="w-3.5 h-3.5 text-cfpmi-orange" />
            <span>Accès Démo Direct (Sans mot de passe)</span>
          </button>
        </div>

        <div className="text-center">
          <Link href="/" className="text-xs text-slate-500 hover:text-cfpmi-marine">
            &larr; Revenir au site public
          </Link>
        </div>

      </div>
    </div>
  );
}

