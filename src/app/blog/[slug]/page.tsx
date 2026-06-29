import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "../../components/Header";
import { JsonLd } from "../../components/JsonLd";
import { getBlogPostBySlug, blogPosts } from "../../data/blog";
import { siteUrl } from "../../data/tours";

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
      images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.heroImage,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "3 Days Merzouga",
    },
    publisher: {
      "@type": "Organization",
      name: "3 Days Merzouga",
    },
    url: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <main>
      <JsonLd data={schema} />
      <Header />
      <article>
        <section className="relative isolate overflow-hidden bg-[#132028] px-4 py-20 text-white sm:px-6 lg:px-8">
          <Image src={post.heroImage} alt={post.title} fill priority sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(19,32,40,0.92),rgba(19,32,40,0.62)_52%,rgba(19,32,40,0.22)),linear-gradient(0deg,rgba(19,32,40,0.75),rgba(19,32,40,0.08))]" />
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
                  <h2 className="text-2xl font-black tracking-tight text-[#201913]">{section.heading}</h2>
                  <div className="mt-4 grid gap-4 text-base leading-8 text-[#6d6256]">
                    {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
              ))}
            </div>

            <aside className="rounded-lg border border-stone-200 bg-[#fffaf3] p-5 shadow-[0_14px_42px_rgba(32,25,19,0.06)] lg:sticky lg:top-24">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b5532f]">Research sources</p>
              <p className="mt-3 text-sm leading-7 text-[#6d6256]">
                This guide is original content informed by common route patterns found on major tour marketplaces.
              </p>
              <div className="mt-5 grid gap-3 text-sm font-bold">
                <a href={post.sourceUrl} className="text-[#132028] underline decoration-[#e8b86f] decoration-2 underline-offset-4 transition hover:text-[#b5532f]">
                  {post.sourceName}
                </a>
                {post.secondarySources.map((source) => (
                  <a key={source.url} href={source.url} className="text-[#132028] underline decoration-[#e8b86f] decoration-2 underline-offset-4 transition hover:text-[#b5532f]">
                    {source.label}
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </article>
    </main>
  );
}
