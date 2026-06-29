import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { SectionHeading } from "../components/SectionHeading";
import { tours } from "../data/tours";

export const metadata: Metadata = {
  title: "Merzouga Desert Tour FAQ",
  description:
    "Answers to common questions about Marrakech to Merzouga desert tours, camel trekking, Sahara camps, private tours, route timing, packing, and tour customization.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  const allFaqs = tours.flatMap((tour) => tour.faqs);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
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
              Quick answers for travelers comparing private and shared Sahara tours, camel trekking, desert camps, Marrakech to Fes routes, and 3-day versus 4-day itineraries.
            </p>
          </SectionHeading>

          <div className="mt-10 grid gap-8">
            {tours.map((tour) => (
              <section key={tour.slug} className="rounded-lg border border-stone-200 bg-white p-5 shadow-[0_18px_55px_rgba(32,25,19,0.08)] sm:p-6">
                <div className="grid gap-4 border-b border-stone-200 pb-5 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b5532f]">{tour.duration}</p>
                    <h2 className="mt-2 text-2xl font-black tracking-tight text-[#201913]">{tour.title}</h2>
                  </div>
                  <Link href={`/tours/${tour.slug}`} className="inline-flex justify-center rounded-full bg-[#132028] px-5 py-3 text-sm font-black text-white transition hover:bg-[#b5532f]">
                    View tour
                  </Link>
                </div>

                <div className="mt-5 grid gap-3">
                  {tour.faqs.map((faq) => (
                    <details key={faq.question} className="rounded-lg border border-stone-200 bg-[#fbf7ef] p-5 transition hover:border-[#d8b778]">
                      <summary className="cursor-pointer font-black text-[#201913]">{faq.question}</summary>
                      <p className="mt-4 leading-8 text-[#6d6256]">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
