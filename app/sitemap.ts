import type { MetadataRoute } from "next";
import { services, siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/partners",
    "/contact",
    "/imprint",
    "/privacy",
    ...services.map((service) => service.href),
  ];

  return paths.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
