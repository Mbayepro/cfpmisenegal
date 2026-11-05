import { MetadataRoute } from "next";
import { CFPMI_INFO } from "@/lib/constants";
import { INITIAL_FILIERES, INITIAL_ACTUALITES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = CFPMI_INFO.siteUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/formations",
    "/inscription",
    "/brochure",
    "/temoignages",
    "/galerie",
    "/actualites",
    "/faq",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const formationRoutes: MetadataRoute.Sitemap = INITIAL_FILIERES.map((f) => ({
    url: `${baseUrl}/formations/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const actualiteRoutes: MetadataRoute.Sitemap = INITIAL_ACTUALITES.map((a) => ({
    url: `${baseUrl}/actualites/${a.slug}`,
    lastModified: new Date(a.date_publication),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...formationRoutes, ...actualiteRoutes];
}

