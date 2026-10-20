import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blog";
import { siteUrl } from "./data/site";
import { tours } from "./data/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/tours", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/booking-policy", priority: 0.55, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...tours.map((tour) => ({
      url: `${siteUrl}/tours/${tour.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
