import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blog";
import { siteUrl } from "./data/site";
import { tours } from "./data/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastSiteAudit = new Date("2026-10-29");
  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const, lastModified: lastSiteAudit },
    { path: "/tours", priority: 0.95, changeFrequency: "weekly" as const, lastModified: lastSiteAudit },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const, lastModified: lastSiteAudit },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const, lastModified: lastSiteAudit },
    { path: "/faq", priority: 0.85, changeFrequency: "monthly" as const, lastModified: lastSiteAudit },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const, lastModified: lastSiteAudit },
    { path: "/booking-policy", priority: 0.55, changeFrequency: "yearly" as const, lastModified: lastSiteAudit },
    { path: "/privacy", priority: 0.5, changeFrequency: "yearly" as const, lastModified: lastSiteAudit },
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...tours.map((tour) => ({
      url: `${siteUrl}/tours/${tour.slug}`,
      lastModified: lastSiteAudit,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.modifiedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
