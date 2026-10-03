import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use for the homepage so the title template does not append the name twice. */
  absolute?: boolean;
};

export function pageMeta({ title, description, path, absolute = false }: PageMetaInput): Metadata {
  const fullTitle = absolute ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: siteConfig.hero.image,
          alt: siteConfig.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.hero.image],
    },
  };
}

export function organizationJsonLd(): Record<string, unknown> {
  const sameSite = siteConfig.url;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: sameSite,
    description: siteConfig.seo.defaultDescription,
    logo: new URL(siteConfig.logo.src, sameSite).toString(),
    knowsAbout: [
      "Energy engineering",
      "Industrial construction",
      "Refinery and process engineering",
      "Industrial automation",
    ],
  };

  return data;
}
