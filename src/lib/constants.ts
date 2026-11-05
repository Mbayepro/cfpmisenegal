export const CFPMI_INFO = {
  name: "CFPMI Sénégal",
  fullName: "Centre de Formation Professionnelle aux Métiers de l'Industrie",
  slogan: "Clé de la Réussite",
  address: "Guédiawaye, Hamo 6, Dakar, Sénégal",
  phonePrimary: "+221 77 694 78 71",
  phoneSecondary: "+221 76 461 14 63",
  phonePrimaryClean: "221776947871",
  phoneSecondaryClean: "221764611463",
  whatsapp: "+221 77 694 78 71",
  whatsappClean: "221776947871",
  email: "cfpmidakar@gmail.com",
  facebook: "https://facebook.com/cfpmisenegal",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL &&
    !process.env.NEXT_PUBLIC_SITE_URL.includes("localhost")
      ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
      : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://cfpmisenegal.vercel.app",
  colors: {
    marine: "#1B2A7B",
    sky: "#2AA0E0",
    orange: "#F26A2E",
    red: "#E31E24",
    white: "#FFFFFF",
  },
  nextIntake: {
    title: "Prochaine Rentrée Officielle",
    dateText: "Lundi 17 Novembre 2026",
    description: "Inscriptions ouvertes ! Les cours démarrent ce lundi 17 novembre 2026 pour les filières Froid & Climatisation et Électricité.",
    badge: "Inscriptions Ouvertes - Places Limitées",
  },
  director: "M. Gorgui FAYE",
  diplomes: ["CPS (préparé en 6 mois)", "CAP", "BEP", "BT (3 ans)", "BTS"],
  openingHours: "Lundi - Samedi : 08h00 - 19h00 (Fermé le Dimanche)",
  partner: "CALD Expertise (Bureaux d'études & ingénierie technique)",
};

export const NAVIGATION_LINKS = [
  { name: "Accueil", href: "/" },
  { name: "Nos Formations", href: "/formations" },
  { name: "Témoignages", href: "/temoignages" },
  { name: "Galerie Ateliers", href: "/galerie" },
  { name: "Actualités", href: "/actualites" },
  { name: "Contact", href: "/contact" },
];

