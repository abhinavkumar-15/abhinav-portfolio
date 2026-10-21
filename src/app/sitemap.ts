import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://abhinavkumar.dev",
      lastModified: new Date("2026-10-19"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
