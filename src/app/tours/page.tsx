import type { Metadata } from "next";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { SectionHeading } from "../components/SectionHeading";
import { TourCard } from "../components/TourCard";
import { siteUrl, tours } from "../data/tours";

export const metadata: Metadata = {
  title: "Merzouga Desert Tours from Marrakech",
  description:
    "Browse premium Merzouga Desert Tours from Marrakech including Marrakech to Fes, 3-day Merzouga, and 4-day Sahara adventure itineraries.",
  alternates: {
    canonical: "/tours",
  },
};

export default function ToursPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Merzouga Desert Tours from Marrakech",
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
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="All tours" title="Focused Merzouga tours, clearly compared." center level="h1">
            <p>
              We keep the catalog small on purpose. Each route exists because it serves a real traveler need: limited time, classic Sahara, or deeper Merzouga immersion.
            </p>
          </SectionHeading>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {tours.map((tour, index) => <TourCard key={tour.slug} tour={tour} priority={index === 0} />)}
          </div>
        </div>
      </section>
    </main>
  );
}