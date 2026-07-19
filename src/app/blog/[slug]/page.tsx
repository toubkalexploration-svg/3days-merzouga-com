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
    title: post.title,
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
      modifiedTime: post.publishedAt,
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

  const featuredTour = getTourBySlug("3-day-marrakech-to-merzouga-desert-tour");

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.heroImage,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
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
          <Image src={post.heroImage} alt={post.heroImageAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(19,32,40,0.7),rgba(19,32,40,0.42)_52%,rgba(19,32,40,0.11)),linear-gradient(0deg,rgba(19,32,40,0.46),rgba(19,32,40,0.03))]" />
          <div className="mx-auto max-w-4xl">
            <Link href="/blog" className="text-sm font-black text-white/70 transition hover:text-white">Back to blog</Link>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.22em] text-[#e8b86f]">{post.readingTime}</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/82">{post.excerpt}</p>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
            <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-[0_18px_55px_rgba(32,25,19,0.08)] sm:p-8">
              {post.sections.map((section) => (
                <section key={section.heading} className="border-t border-stone-200 py-7 first:border-t-0 first:pt-0 last:pb-0">
                  <h2 className="text-2xl font-black tracking-tight text-slate-950">{section.heading}</h2>
                  <div className="mt-4 grid gap-4 text-base leading-8 text-slate-800">
                    {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
              ))}
              {post.sourceLinks?.length ? (
                <section className="border-t border-stone-200 py-7 last:pb-0">
                  <h2 className="text-2xl font-black tracking-tight text-slate-950">Sources and further reading</h2>
                  <ul className="mt-4 grid gap-3 text-base leading-7 text-slate-800">
                    {post.sourceLinks.map((source) => (
                      <li key={source.href}>
                        <a
                          href={source.href}
                          className="font-bold text-[#b8793c] underline-offset-4 transition hover:text-[#132028] hover:underline"
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
            </div>

            <aside className="rounded-lg border border-stone-200 bg-white p-5 shadow-[0_14px_42px_rgba(32,25,19,0.06)] lg:sticky lg:top-24">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b8793c]">Recommended tour</p>
              <h2 className="mt-3 text-lg font-black leading-tight text-slate-950">
                {featuredTour?.title ?? "3-Day Marrakech to Merzouga Desert Tour"}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-800">
                Our classic Sahara loop that starts and ends in Marrakech, with Dades Valley, Todra Gorge, Erg Chebbi camel trekking, and a desert camp night.
              </p>
              {featuredTour ? (
                <p className="mt-4 text-sm font-black text-[#132028]">
                  From &euro;{featuredTour.startingPrice} per person
                </p>
              ) : null}
              <Link
                href="/tours/3-day-marrakech-to-merzouga-desert-tour"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#132028] px-5 py-3 text-sm font-black text-white transition hover:bg-[#b8793c]"
              >
                View this tour
              </Link>
            </aside>
          </div>
        </section>
      </article>
    </main>
  );
}
