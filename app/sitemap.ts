import type { MetadataRoute } from "next";

const siteUrl = "https://wowtheworldlogistics.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/tourpackages", "/logistics", "/contact"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    }),
  );
}
