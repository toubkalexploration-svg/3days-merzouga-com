import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "../../components/Header";
import { JsonLd } from "../../components/JsonLd";
import { getBlogPostBySlug, blogPosts } from "../../data/blog";
import { getTourBySlug, siteUrl } from "../../data/tours";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | 3 Days Merzouga`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt ?? post.publishedAt,
      images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.heroImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const primarySlug = post.primaryTourSlug ?? "3-day-marrakech-to-merzouga-desert-tour";
  const featuredTour = getTourBySlug(primarySlug);
  const altSlug =
    primarySlug === "3-day-marrakech-to-fes-desert-tour"
      ? "3-day-marrakech-to-merzouga-desert-tour"
      : "4-day-marrakech-to-merzouga-desert-tour";
  const alternativeTour = getTourBySlug(altSlug);

  const relatedArticles = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedModified = post.modifiedAt
    ? new Date(post.modifiedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.heroImage,
      datePublished: post.publishedAt,
      dateModified: post.modifiedAt ?? post.publishedAt,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${post.slug}` },
      inLanguage: "en",
      author: {
        "@type": "Organization",
        name: "3 Days Merzouga",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "3 Days Merzouga",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo-transparent.png`,
        },
      },
      citation: post.sourceLinks?.map((source) => source.href),
      url: `${siteUrl}/blog/${post.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
      ],
    },
  ];

  return (
    <main>
      <JsonLd data={schema} />
      <Header />
      <article>
        <section className="relative isolate overflow-hidden bg-[#132028] px-4 py-20 text-white sm:px-6 lg:px-8">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-brand-slate/75" />
          <div className="mx-auto max-w-4xl">
            <Link href="/blog" className="text-xs font-bold uppercase tracking-wider text-white/70 transition hover:text-white">
              &larr; Back to all guides
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-orange-200">
              <span className="uppercase tracking-[0.2em]">{post.readingTime}</span>
              <span aria-hidden="true">&bull;</span>
              <time dateTime={post.publishedAt}>Published {formattedDate}</time>
              {formattedModified && (
                <>
                  <span aria-hidden="true">&bull;</span>
                  <span>Updated {formattedModified}</span>
                </>
              )}
            </div>
            <h1 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/85">{post.excerpt}</p>
            <p className="mt-4 text-xs text-white/60">
              Written by 3 Days Merzouga Editorial Team &bull; Verified Sahara route operational advice
            </p>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-10">
              {post.sections.map((section) => (
                <section key={section.heading} className="border-t border-stone-200 py-7 first:border-t-0 first:pt-0 last:pb-0">
                  <h2 className="text-2xl font-black tracking-tight text-slate-900">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                    {section.body.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              {post.sourceLinks?.length ? (
                <section className="border-t border-stone-200 py-7 last:pb-0">
                  <h2 className="text-2xl font-black tracking-tight text-slate-900">Sources &amp; further reading</h2>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                    {post.sourceLinks.map((source) => (
                      <li key={source.href}>
                        <a
                          href={source.href}
                          className="font-bold text-brand-terracotta underline decoration-brand-terracotta/40 underline-offset-4 hover:decoration-brand-terracotta"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {/* Attribution */}
              <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 text-xs text-slate-600">
                <p className="font-bold text-slate-800">Editorial &amp; Review Standards</p>
                <p className="mt-1 leading-5">
                  This article is maintained by 3 Days Merzouga and verified against current southern Morocco road conditions, distance logs, and camp logistics.
                </p>
              </div>
            </div>

            {/* Sticky Sidebar: Recommended Tours from Central Data */}
            <aside className="space-y-6 lg:sticky lg:top-24">
              {featuredTour && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-terracotta">
                    Recommended Tour
                  </p>
                  <h3 className="mt-2 text-lg font-black text-slate-900">
                    {featuredTour.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {featuredTour.summary}
                  </p>
                  <div className="mt-4 border-t border-slate-100 pt-3">
                    <span className="block text-xs font-semibold text-slate-500">From</span>
                    <span className="text-xl font-black text-brand-slate">&euro;{featuredTour.startingPrice}</span>
                    <span className="text-xs text-slate-600"> per person</span>
                    <span className="block text-[11px] text-slate-500">({featuredTour.startingPriceCondition})</span>
                  </div>
                  <Link
                    href={`/tours/${featuredTour.slug}`}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-brand-slate px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand-terracotta"
                  >
                    View {featuredTour.shortTitle} &rarr;
                  </Link>
                </div>
              )}

              {alternativeTour && (
                <div className="rounded-2xl border border-stone-200 bg-slate-50 p-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                    Alternative Route
                  </p>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    {alternativeTour.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">{alternativeTour.duration}</p>
                  <p className="mt-2 text-xs text-brand-terracotta font-bold">
                    From &euro;{alternativeTour.startingPrice} / person
                  </p>
                  <Link
                    href={`/tours/${alternativeTour.slug}`}
                    className="mt-4 inline-flex items-center text-xs font-black text-slate-900 underline decoration-slate-400 underline-offset-4 hover:text-brand-terracotta"
                  >
                    Explore alternative &rarr;
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </section>

        {/* Related articles */}
        <section className="border-t border-slate-100 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-black text-slate-900">Related desert travel guides</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-terracotta hover:shadow-md"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-terracotta">{article.readingTime}</p>
                  <h3 className="mt-2 text-base font-bold text-slate-900 group-hover:text-brand-terracotta">{article.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
