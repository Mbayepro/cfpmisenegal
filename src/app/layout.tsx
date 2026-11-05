import type { Metadata } from "next";
import "./globals.css";
import AlertBanner from "@/components/AlertBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CFPMI_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(CFPMI_INFO.siteUrl),
  title: {
    default: "CFPMI Sénégal - Clé de la Réussite | Formation Professionnelle Dakar",
    template: "%s | CFPMI Sénégal",
  },
  description:
    "Centre de Formation Professionnelle aux Métiers de l'Industrie à Guédiawaye, Hamo 6, Dakar. Formations 100% pratiques en Froid & Climatisation, Électricité bâtiment et industrielle, Plomberie, Soudure. Stages garantis, attestation de compétence et emploi rapide.",
  keywords: [
    "CFPMI",
    "CFPMI Sénégal",
    "formation professionnelle Dakar",
    "Froid et climatisation Sénégal",
    "Électricité bâtiment Dakar",
    "Électricité industrielle",
    "Plomberie sanitaire",
    "Soudure métallique",
    "Guédiawaye Hamo 6",
    "formation pratique Sénégal",
    "CALD Expertise",
    "Clé de la Réussite",
  ],
  authors: [{ name: "CFPMI Sénégal" }],
  creator: "CFPMI Sénégal",
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: CFPMI_INFO.siteUrl,
    title: "CFPMI Sénégal - Clé de la Réussite | Formation Professionnelle Dakar",
    description:
      "Formez-vous aux métiers d'avenir au Sénégal : Froid & Climatisation, Électricité, Plomberie, Soudure. 100% Pratique, stages sur le terrain avec CALD Expertise, diplôme et accompagnement à l'emploi.",
    siteName: "CFPMI Sénégal",
    images: [
      {
        url: `${CFPMI_INFO.siteUrl}/images/og-image.png`,
        secureUrl: `${CFPMI_INFO.siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "CFPMI Sénégal - Centre de Formation Professionnelle aux Métiers de l'Industrie",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CFPMI Sénégal - Clé de la Réussite",
    description:
      "Formations 100% pratiques en Froid & Climatisation, Électricité, Plomberie et Soudure à Guédiawaye Hamo 6, Dakar. Rentrée 17 novembre 2026.",
    images: [`${CFPMI_INFO.siteUrl}/images/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data for EducationalOrganization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "CFPMI Sénégal",
    "alternateName": "Centre de Formation Professionnelle aux Métiers de l'Industrie",
    "description": "Centre de formation professionnelle accélérée 100% pratique en Froid & Climatisation, Électricité, Plomberie et Soudure à Dakar, Sénégal.",
    "slogan": "Clé de la Réussite",
    "url": CFPMI_INFO.siteUrl,
    "logo": `${CFPMI_INFO.siteUrl}/images/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hamo 6, Guédiawaye",
      "addressLocality": "Dakar",
      "addressRegion": "Dakar",
      "addressCountry": "SN"
    },
    "telephone": [CFPMI_INFO.phonePrimary, CFPMI_INFO.phoneSecondary],
    "email": CFPMI_INFO.email,
    "sameAs": [
      CFPMI_INFO.facebook
    ]
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 selection:bg-cfpmi-orange selection:text-white flex flex-col min-h-screen">
        <AlertBanner />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
