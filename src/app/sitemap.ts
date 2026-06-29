import type { MetadataRoute } from "next";
import { tours } from "./data/tours";

const siteUrl = "https://3days-merzouga.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/tours", "/contact", "/booking-policy"];

  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date("2026-06-29"),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.85,
    })),
    ...tours.map((tour) => ({
      url: `${siteUrl}/tours/${tour.slug}`,
      lastModified: new Date("2026-06-29"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}