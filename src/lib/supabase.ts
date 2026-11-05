import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { INITIAL_FILIERES, INITIAL_TARIFS, INITIAL_TEMOIGNAGES, INITIAL_ACTUALITES, INITIAL_FAQ, INITIAL_GALERIE } from "./data";
import { Filiere, TarifItem, Temoignage, Actualite, FAQItem, GalerieItem, InscriptionDossier, LeadBrochure, ContactMessage } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const isSupabaseConfigured =
  Boolean(supabaseUrl) &&
  Boolean(supabaseAnonKey) &&
  !supabaseUrl.includes("your-project") &&
  supabaseUrl.startsWith("http");

export const supabase = isSupabaseConfigured
  ? createSupabaseClient(supabaseUrl, supabaseAnonKey)
  : null;

// ==========================================
// FILIÈRES / FORMATIONS
// ==========================================
export async function getFilieres(): Promise<Filiere[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("filieres")
        .select("*")
        .order("ordre", { ascending: true });
      if (!error && data && data.length > 0) {
        return data as Filiere[];
      }
    } catch (err) {
      console.warn("Using fallback filieres data:", err);
    }
  }
  return INITIAL_FILIERES;
}

export async function getFiliereBySlug(slug: string): Promise<Filiere | null> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("filieres")
        .select("*")
        .eq("slug", slug)
        .single();
      if (!error && data) {
        return data as Filiere;
      }
    } catch (err) {
      console.warn("Using fallback filiere for slug:", slug, err);
    }
  }
  return INITIAL_FILIERES.find((f) => f.slug === slug) || null;
}

// ==========================================
// TARIFS
// ==========================================
export async function getTarifs(): Promise<TarifItem[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("tarifs")
        .select("*")
        .order("ordre", { ascending: true });
      if (!error && data && data.length > 0) {
        return data as TarifItem[];
      }
    } catch (err) {
      console.warn("Using fallback tarifs:", err);
    }
  }
  return INITIAL_TARIFS;
}

// ==========================================
// TÉMOIGNAGES
// ==========================================
export async function getTemoignages(): Promise<Temoignage[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("temoignages")
        .select("*")
        .order("ordre", { ascending: true });
      if (!error && data && data.length > 0) {
        return data as Temoignage[];
      }
    } catch (err) {
      console.warn("Using fallback temoignages:", err);
    }
  }
  return INITIAL_TEMOIGNAGES;
}

// ==========================================
// ACTUALITÉS
// ==========================================
export async function getActualites(): Promise<Actualite[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("actualites")
        .select("*")
        .eq("est_publie", true)
        .order("date_publication", { ascending: false });
      if (!error && data && data.length > 0) {
        return data as Actualite[];
      }
    } catch (err) {
      console.warn("Using fallback actualites:", err);
    }
  }
  return INITIAL_ACTUALITES;
}

export async function getActualiteBySlug(slug: string): Promise<Actualite | null> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("actualites")
        .select("*")
        .eq("slug", slug)
        .single();
      if (!error && data) {
        return data as Actualite;
      }
    } catch (err) {
      console.warn("Using fallback actualite for slug:", slug, err);
    }
  }
  return INITIAL_ACTUALITES.find((a) => a.slug === slug) || null;
}

// ==========================================
// FAQ
// ==========================================
export async function getFAQ(): Promise<FAQItem[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("faq")
        .select("*")
        .order("ordre", { ascending: true });
      if (!error && data && data.length > 0) {
        return data as FAQItem[];
      }
    } catch (err) {
      console.warn("Using fallback FAQ:", err);
    }
  }
  return INITIAL_FAQ;
}

// ==========================================
// GALERIE
// ==========================================
export async function getGalerie(): Promise<GalerieItem[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("galerie")
        .select("*")
        .order("ordre", { ascending: true });
      if (!error && data && data.length > 0) {
        return data as GalerieItem[];
      }
    } catch (err) {
      console.warn("Using fallback galerie:", err);
    }
  }
  return INITIAL_GALERIE;
}

// ==========================================
// MUTATIONS : INSCRIPTIONS & LEADS
// ==========================================
export async function submitInscription(dossier: InscriptionDossier) {
  const codeDossier = "CFPMI-" + Math.floor(100000 + Math.random() * 900000);
  const record = {
    ...dossier,
    code_dossier: codeDossier,
    statut: "recu" as const,
    created_at: new Date().toISOString(),
  };

  if (supabase) {
    try {
      const { data, error } = await supabase.from("inscriptions").insert([record]).select().single();
      if (error) {
        console.warn("Supabase insert inscription error, saving locally:", error);
      } else {
        return { success: true, codeDossier, record: data };
      }
    } catch (err) {
      console.warn("Error inserting to supabase:", err);
    }
  }

  // Fallback demo storage in sessionStorage/localStorage if in browser
  if (typeof window !== "undefined") {
    try {
      const existing = JSON.parse(localStorage.getItem("cfpmi_inscriptions") || "[]");
      existing.unshift(record);
      localStorage.setItem("cfpmi_inscriptions", JSON.stringify(existing));
    } catch (e) {
      // ignore
    }
  }

  return { success: true, codeDossier, record };
}

export async function submitLeadBrochure(lead: LeadBrochure) {
  const record = {
    ...lead,
    telecharge_a: new Date().toISOString(),
    statut_relance: "a_relancer" as const,
  };

  if (supabase) {
    try {
      const { data, error } = await supabase.from("leads_brochure").insert([record]).select().single();
      if (error) {
        console.warn("Supabase lead insert error:", error);
      } else {
        return { success: true, record: data };
      }
    } catch (err) {
      console.warn("Lead insert error:", err);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const existing = JSON.parse(localStorage.getItem("cfpmi_leads") || "[]");
      existing.unshift(record);
      localStorage.setItem("cfpmi_leads", JSON.stringify(existing));
    } catch (e) {
      // ignore
    }
  }

  return { success: true, record };
}

export async function submitContact(contact: ContactMessage) {
  const record = {
    ...contact,
    created_at: new Date().toISOString(),
    est_traite: false,
  };

  if (supabase) {
    try {
      const { data, error } = await supabase.from("contacts").insert([record]).select().single();
      if (!error) return { success: true, record: data };
    } catch (err) {
      console.warn("Contact insert error:", err);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const existing = JSON.parse(localStorage.getItem("cfpmi_contacts") || "[]");
      existing.unshift(record);
      localStorage.setItem("cfpmi_contacts", JSON.stringify(existing));
    } catch (e) {
      // ignore
    }
  }

  return { success: true, record };
}

