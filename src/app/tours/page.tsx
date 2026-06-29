import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { SectionHeading } from "../components/SectionHeading";
import { TourCard } from "../components/TourCard";
import { siteUrl, tours } from "../data/tours";

export const metadata: Metadata = {
  title: "Marrakech to Merzouga Desert Tours",
  description:
    "Compare Marrakech to Merzouga desert tours, including a 3-day Marrakech to Fes Sahara route, classic 3-day Marrakech to Merzouga tour, and slower 4-day Erg Chebbi desert adventure.",
  keywords: [
    "Marrakech to Merzouga desert tour",
    "Merzouga desert tours from Marrakech",
    "3 day Merzouga desert tour",
    "Marrakech to Fes desert tour",
    "4 day Merzouga desert tour",
    "Erg Chebbi desert camp",
    "private Marrakech to Merzouga tour",
    "shared Merzouga desert tour",
  ],
  alternates: {
    canonical: "/tours",
  },
};

export default function ToursPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Marrakech to Merzouga Desert Tours",
    description:
      "A focused collection of Morocco Sahara tours from Marrakech to Merzouga, Erg Chebbi, Dades Valley, Todra Gorge, and Fes.",
    url: `${siteUrl}/tours`,
    mainEntity: tours.map((tour) => ({
      "@type": "TouristTrip",
      name: tour.title,
      description: tour.summary,
      url: `${siteUrl}/tours/${tour.slug}`,
    })),
  };

  return (
    <main>
      <JsonLd data={schema} />
      <Header />
      <section className="relative isolate overflow-hidden bg-[#132028] px-4 py-20 text-white sm:px-6 lg:px-8">
        <Image
          src="https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=1800&q=82"
          alt="Sahara desert dunes on a Merzouga tour from Marrakech"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(19,32,40,0.92),rgba(19,32,40,0.62)_52%,rgba(19,32,40,0.24)),linear-gradient(0deg,rgba(19,32,40,0.72),rgba(19,32,40,0.08))]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#e8b86f] backdrop-blur">
              All Marrakech desert tours
            </p>
            <h1 className="mt-5 text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              Compare Merzouga desert tours from Marrakech
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82">
              Three focused Sahara routes: Marrakech to Fes, the classic 3-day Marrakech to Merzouga desert tour, and a slower 4-day Erg Chebbi adventure with more time in the dunes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#tour-list" className="rounded-full bg-[#b5532f] px-6 py-3 text-center text-sm font-black text-white shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-[#8f3e27]">
                View tours
              </Link>
              <Link href="/contact" className="rounded-full border border-white/45 bg-white/5 px-6 py-3 text-center text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white hover:bg-white/15">
                Ask for advice
              </Link>
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 text-sm shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur">
            {[
              ["Best for connection", "Marrakech to Fes via Merzouga"],
              ["Best classic route", "3 days to Erg Chebbi camp"],
              ["Best relaxed pace", "4 days with desert discovery"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#132028]/68 p-5">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/48">{label}</p>
                <p className="mt-2 text-lg font-black text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" id="tour-list">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Tour collection" title="Choose the Sahara route that fits your trip.">
            <p>
              We keep the catalog small on purpose. Each route solves a real travel need, with clear timing, route stops, and pricing before you send a booking request.
            </p>
          </SectionHeading>
          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {tours.map((tour, index) => <TourCard key={tour.slug} tour={tour} priority={index === 0} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
