import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { SectionHeading } from "../components/SectionHeading";
import { blogPosts } from "../data/blog";
import { defaultOgImage, siteName, siteUrl } from "../data/site";

export const metadata: Metadata = {
  title: "Morocco Desert Tour Blog",
  description:
    "Read practical Morocco desert tour guides about Marrakech to Merzouga routes, Erg Chebbi camel trekking, Sahara camps, and private desert tour planning.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Morocco Desert Tour Blog",
    description:
      "Practical Marrakech to Merzouga desert tour guides covering Sahara camps, Erg Chebbi camel trekking, private routes, and timing.",
    url: `${siteUrl}/blog`,
    siteName,
    type: "website",
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: "Morocco Sahara desert tour blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morocco Desert Tour Blog",
    description:
      "Practical Marrakech to Merzouga desert tour guides for planning Sahara camps, camel trekking, and private desert routes.",
    images: [defaultOgImage],
  },
};

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "3 Days Merzouga Blog",
    url: `${siteUrl}/blog`,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "3 Days Merzouga",
      url: siteUrl,
      logo: `${siteUrl}/logo-transparent.png`,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.modifiedAt ?? post.publishedAt,
      image: post.heroImage,
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

          <div className="mt-9 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-2xl border border-stone-200/80 bg-white/70 p-3 transition duration-300 hover:-translate-y-1 hover:border-[#e8b86f] hover:bg-white hover:shadow-[0_26px_60px_rgba(32,25,19,0.12)]"
                >
                  <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden rounded-xl bg-[#f1dfbf]">
                    <Image
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#b8793c] shadow-[0_8px_20px_rgba(32,25,19,0.14)] backdrop-blur">
                      Guide
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                    <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#9c8a70]">
                      <time dateTime={post.publishedAt}>{formattedDate}</time>
                      <span aria-hidden="true" className="text-[#d8c39e]">&bull;</span>
                      <span>{post.readingTime}</span>
                    </p>
                    <h2 className="mt-3 text-xl font-black leading-snug tracking-tight text-slate-950 transition group-hover:text-[#b8793c]">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-800">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-2 border-t border-stone-200 pt-4 text-sm font-black text-[#b8793c] transition group-hover:gap-3"
                    >
                      Read guide
                      <span aria-hidden="true">-&gt;</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
