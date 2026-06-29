import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { SectionHeading } from "../components/SectionHeading";
import { blogPosts } from "../data/blog";
import { siteUrl } from "../data/tours";

export const metadata: Metadata = {
  title: "Morocco Desert Tour Blog",
  description:
    "Read practical Morocco desert tour guides about Marrakech to Merzouga routes, Erg Chebbi camel trekking, Sahara camps, and private desert tour planning.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "3 Days Merzouga Blog",
    url: `${siteUrl}/blog`,
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.publishedAt,
    })),
  };

  return (
    <main>
      <JsonLd data={schema} />
      <Header />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Blog" title="Morocco desert tour guides." level="h1">
            <p>
              Practical articles for travelers comparing Marrakech to Merzouga desert tours, Sahara camp options, camel trekking, private routes, and timing.
            </p>
          </SectionHeading>

          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-[0_18px_55px_rgba(32,25,19,0.08)]">
                <div className="relative aspect-[16/10] bg-[#f1dfbf]">
                  <Image src={post.heroImage} alt={post.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#b5532f]">{post.readingTime}</p>
                  <h2 className="mt-3 text-xl font-black leading-tight text-[#201913]">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#6d6256]">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex rounded-full bg-[#132028] px-5 py-3 text-sm font-black text-white transition hover:bg-[#b5532f]">
                    Read guide
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
