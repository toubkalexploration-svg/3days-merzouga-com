import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { SectionHeading } from "../components/SectionHeading";
import { defaultOgImage, siteName, siteUrl } from "../data/site";
import { sharedFaqs, tours } from "../data/tours";

export const metadata: Metadata = {
  title: "Merzouga Desert Tour FAQ",
  description:
    "Answers to common questions about Marrakech to Merzouga desert tours, camel trekking, Sahara camps, private tours, route timing, packing, and tour customization.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Merzouga Desert Tour FAQ",
    description:
      "Answers to common questions about Marrakech to Merzouga desert tours, camel trekking, Sahara camps, private routes, packing, and timing.",
    url: `${siteUrl}/faq`,
    siteName,
    type: "website",
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: "Merzouga desert tour FAQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merzouga Desert Tour FAQ",
    description:
      "Answers about Marrakech to Merzouga desert tours, camel trekking, Sahara camps, private routes, packing, and timing.",
    images: [defaultOgImage],
  },
};

export default function FaqPage() {
  const sharedQuestions = new Set(sharedFaqs.map((faq) => faq.question));
  const allFaqs = [
    ...tours.flatMap((tour) => tour.faqs.filter((faq) => !sharedQuestions.has(faq.question))),
    ...sharedFaqs,
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.link ? `${faq.answer} ${faq.link.label}: ${faq.link.href}` : faq.answer,
      },
    })),
  };

  return (
    <main>
      <JsonLd data={schema} />
      <Header />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="FAQ" title="Marrakech to Merzouga desert tour questions." level="h1">
            <p>
              Quick answers about private Sahara tours, camel trekking, desert camps, Marrakech to Fes routes, and 3-day versus 4-day itineraries.
            </p>
          </SectionHeading>

          <div className="mt-10 grid gap-8">
            {tours.map((tour) => {
              const tourFaqs = tour.faqs.filter((faq) => !sharedQuestions.has(faq.question));

              return (
                <section key={tour.slug} className="rounded-lg border border-stone-200 bg-white p-5 shadow-[0_18px_55px_rgba(32,25,19,0.08)] sm:p-6">
                  <div className="grid gap-4 border-b border-stone-200 pb-5 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b8793c]">{tour.duration}</p>
                      <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">{tour.title}</h2>
                    </div>
                    <Link href={`/tours/${tour.slug}`} className="inline-flex justify-center rounded-full bg-[#132028] px-5 py-3 text-sm font-black text-white transition hover:bg-[#b8793c]">
                      View tour
                    </Link>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {tourFaqs.map((faq) => (
                      <details key={faq.question} className="rounded-lg border border-stone-200 bg-white p-5 transition hover:border-[#d8b778]">
                        <summary className="cursor-pointer font-black text-slate-950">{faq.question}</summary>
                        <p className="mt-4 leading-8 text-slate-800">
                          {faq.answer}
                          {faq.link ? (
                            <>
                              {" "}
                              <a href={faq.link.href} className="font-black text-[#b8793c] underline underline-offset-4 transition hover:text-[#96612f]">
                                {faq.link.label}
                              </a>
                            </>
                          ) : null}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              );
            })}

            <section className="rounded-lg border border-stone-200 bg-white p-5 shadow-[0_18px_55px_rgba(32,25,19,0.08)] sm:p-6">
              <div className="border-b border-stone-200 pb-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b8793c]">All routes</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">General Merzouga desert tour questions</h2>
              </div>
              <div className="mt-5 grid gap-3">
                {sharedFaqs.map((faq) => (
                  <details key={faq.question} className="rounded-lg border border-stone-200 bg-white p-5 transition hover:border-[#d8b778]">
                    <summary className="cursor-pointer font-black text-slate-950">{faq.question}</summary>
                    <p className="mt-4 leading-8 text-slate-800">
                      {faq.answer}
                      {faq.link ? (
                        <>
                          {" "}
                          <a href={faq.link.href} className="font-black text-[#b8793c] underline underline-offset-4 transition hover:text-[#96612f]">
                            {faq.link.label}
                          </a>
                        </>
                      ) : null}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
