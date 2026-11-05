import { MetadataRoute } from "next";
import { CFPMI_INFO } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: `${CFPMI_INFO.siteUrl}/sitemap.xml`,
  };
}

