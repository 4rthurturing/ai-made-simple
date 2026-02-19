import { MetadataRoute } from "next";
import { articles } from "./blog/articles";

const BASE = "https://hellosage.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${BASE}/`, lastModified: "2026-02-19", priority: 1.0 },
    { url: `${BASE}/what-is-ai`, lastModified: "2026-02-19", priority: 0.9 },
    { url: `${BASE}/stay-safe`, lastModified: "2026-02-19", priority: 0.8 },
    { url: `${BASE}/practical-uses`, lastModified: "2026-02-19", priority: 0.8 },
    { url: `${BASE}/ai-you-already-use`, lastModified: "2026-02-19", priority: 0.7 },
    { url: `${BASE}/common-fears`, lastModified: "2026-02-19", priority: 0.7 },
    { url: `${BASE}/glossary`, lastModified: "2026-02-19", priority: 0.7 },
    { url: `${BASE}/for-families`, lastModified: "2026-02-19", priority: 0.7 },
    { url: `${BASE}/learn`, lastModified: "2026-02-19", priority: 0.8 },
    { url: `${BASE}/try-ai-now`, lastModified: "2026-02-19", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: "2026-02-19", priority: 0.8 },
  ];

  const blogPages = articles.map((article) => ({
    url: `${BASE}/blog/${article.slug}`,
    lastModified: article.date,
    priority: 0.7 as const,
  }));

  return [...staticPages, ...blogPages];
}
