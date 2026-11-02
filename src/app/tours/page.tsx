import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { SectionHeading } from "../components/SectionHeading";
import { TourCard } from "../components/TourCard";
import { defaultOgImage, photos, siteName } from "../data/site";
import { siteUrl, tours } from "../data/tours";

export const metadata: Metadata = {
  title: "Marrakech to Merzouga Desert Tours | 3 Days Merzouga",
  description:
    "Compare Marrakech to Merzouga desert tours: 3-day Marrakech to Fes route, classic 3-day Marrakech to Merzouga round trip, and slower 4-day Erg Chebbi desert adventure.",
  alternates: {
    canonical: "/tours",
  },
  openGraph: {
    title: "Marrakech to Merzouga Desert Tours",
    description:
      "Compare Marrakech to Merzouga desert tours, including Marrakech to Fes, 3-day Merzouga, and 4-day Erg Chebbi Sahara routes.",
    url: `${siteUrl}/tours`,
    siteName,
    type: "website",
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: "Marrakech to Merzouga desert tours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marrakech to Merzouga Desert Tours",
    description:
      "Compare Marrakech to Merzouga desert tours with Erg Chebbi camel trekking, Sahara camps, Dades Valley, and Todra Gorge.",
    images: [defaultOgImage],
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
          src={photos.camelCaravanSunset.src}
          alt={photos.camelCaravanSunset.alt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-brand-slate/75" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#e8b86f] backdrop-blur">
              All Marrakech desert tours
            </p>
            <h1 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Compare Merzouga desert tours from Marrakech
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85">
              Three focused Sahara routes: Marrakech to Fes, the classic 3-day Marrakech to Merzouga desert tour, and a slower 4-day Erg Chebbi adventure with a full discovery day in the dunes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#tour-list" className="rounded-full bg-[#b8793c] px-6 py-3 text-center text-sm font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#96612f]">
                View tours
              </Link>
              <Link href="/contact" className="rounded-full border border-white/45 bg-white/5 px-6 py-3 text-center text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white hover:bg-white/15">
                Ask for route advice
              </Link>
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 text-sm shadow-lg backdrop-blur">
            {[
              ["Best for north-bound trips", "Marrakech to Fes via Merzouga"],
              ["Best classic round trip", "3-Day Marrakech to Merzouga"],
              ["Best relaxed desert pace", "4-Day with Sahara discovery day"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#132028]/85 p-5">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#e8b86f]">{label}</p>
                <p className="mt-1 text-base font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" id="tour-list">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Tour collection" title="Choose the Sahara route that fits your trip.">
            <p>
              We keep the catalog focused on purpose. Every route is staffed by experienced local drivers with private vehicles, dedicated support, and verified pricing.
            </p>
          </SectionHeading>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {tours.map((tour, index) => (
              <TourCard
                key={tour.slug}
                tour={tour}
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
