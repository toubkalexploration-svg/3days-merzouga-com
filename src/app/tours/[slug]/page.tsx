import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingWidget } from "../../components/BookingWidget";
import { Header } from "../../components/Header";
import { JsonLd } from "../../components/JsonLd";
import { SectionHeading } from "../../components/SectionHeading";
import { TourImageSlider } from "../../components/TourImageSlider";
import { TourRouteMap } from "../../components/TourRouteMap";
import { blogPosts } from "../../data/blog";
import { contactWhatsAppUrl } from "../../data/contact";
import { siteName } from "../../data/site";
import { getRelatedTours, getTourBySlug, siteUrl, tours } from "../../data/tours";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatPeopleRange(minPeople: number, maxPeople?: number) {
  if (maxPeople === undefined) {
    return `${minPeople}+ people`;
  }
  if (minPeople === maxPeople) {
    return minPeople === 1 ? "1 person" : `${minPeople} people`;
  }
  return `${minPeople}–${maxPeople} people`;
}

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {};
  }

  return {
    title: `${tour.seo.title} | 3 Days Merzouga`,
    description: tour.seo.description,
    alternates: {
      canonical: `/tours/${tour.slug}`,
    },
    openGraph: {
      title: tour.seo.title,
      description: tour.seo.description,
      url: `${siteUrl}/tours/${tour.slug}`,
      siteName,
      type: "website",
      images: [{ url: tour.heroImage, width: 1200, height: 630, alt: tour.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: tour.seo.title,
      description: tour.seo.description,
      images: [tour.heroImage],
    },
  };
}

export default async function TourPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const relatedTours = getRelatedTours(tour.slug);
  const relatedGuides = blogPosts
    .filter((post) => post.primaryTourSlug === tour.slug || post.slug.includes("merzouga"))
    .slice(0, 4);

  // Requirement 7: Accurate, non-bloated schema (TouristTrip, Offer, BreadcrumbList)
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: tour.title,
      description: `${tour.summary} ${tour.positioning}`,
      url: `${siteUrl}/tours/${tour.slug}`,
      image: tour.gallery.map((image) => image.src),
      itinerary: tour.route.join(" - "),
      offers: tour.priceTiers.map((tier) => ({
        "@type": "Offer",
        priceCurrency: "EUR",
        price: tier.pricePerPerson,
        description: `Price per person based on ${formatPeopleRange(tier.minPeople, tier.maxPeople)}: €${tier.pricePerPerson}`,
        availability: "https://schema.org/InStock",
      })),
      provider: {
        "@type": "TravelAgency",
        name: "3 Days Merzouga",
        url: siteUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Tours", item: `${siteUrl}/tours` },
        { "@type": "ListItem", position: 3, name: tour.title, item: `${siteUrl}/tours/${tour.slug}` },
      ],
    },
  ];

  return (
    <main>
      <JsonLd data={schema} />
      <Header />

      {/* 1. Clear H1 and short value proposition */}
      <section className="relative isolate min-h-[64svh] overflow-hidden bg-[#132028] text-white">
        <Image
          src={tour.heroImage}
          alt={`${tour.title} route across southern Morocco to the Erg Chebbi dunes`}
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-brand-slate/65" />
        <div className="mx-auto flex min-h-[64svh] max-w-7xl items-end px-4 pb-12 pt-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/tours" className="text-xs font-bold uppercase tracking-wider text-white/70 transition hover:text-white">
              &larr; Back to all tours
            </Link>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.24em] text-[#e8b86f]">
              {tour.duration} &bull; Private Tour
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {tour.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85">
              {tour.positioning}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="rounded-full bg-[#b8793c] px-6 py-3 text-center text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#96612f]"
              >
                Check price &amp; book
              </a>
              <a
                href="#itinerary"
                className="rounded-full border border-white/50 bg-white/10 px-6 py-3 text-center text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white hover:bg-white/20"
              >
                View day-by-day itinerary
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick facts */}
      <section className="border-b border-slate-200 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8" aria-label="Quick tour facts">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-[11px] font-black uppercase tracking-wider text-brand-terracotta">Start &amp; Finish</p>
              <p className="mt-1 text-sm font-bold text-slate-900">{tour.quickFacts.start} &rarr; {tour.quickFacts.finish}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-[11px] font-black uppercase tracking-wider text-brand-terracotta">Total Distance</p>
              <p className="mt-1 text-sm font-bold text-slate-900">{tour.quickFacts.totalDistanceKm}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-[11px] font-black uppercase tracking-wider text-brand-terracotta">Longest Driving Day</p>
              <p className="mt-1 text-sm font-bold text-slate-900">{tour.quickFacts.longestDrivingDay}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-[11px] font-black uppercase tracking-wider text-brand-terracotta">Availability</p>
              <p className="mt-1 text-sm font-bold text-slate-900">{tour.quickFacts.availability}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-[11px] font-black uppercase tracking-wider text-brand-terracotta">Accommodation</p>
              <p className="mt-1 text-sm font-bold text-slate-900">{tour.quickFacts.accommodationNights}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-[11px] font-black uppercase tracking-wider text-brand-terracotta">Camp Category</p>
              <p className="mt-1 text-sm font-bold text-slate-900">{tour.quickFacts.campCategories}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-[11px] font-black uppercase tracking-wider text-brand-terracotta">Meals Included</p>
              <p className="mt-1 text-sm font-bold text-slate-900">{tour.quickFacts.mealsIncluded}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-[11px] font-black uppercase tracking-wider text-brand-terracotta">Customizable</p>
              <p className="mt-1 text-sm font-bold text-slate-900">
                {tour.quickFacts.customizable ? "Yes — private itinerary can be adjusted" : "Fixed route"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Price and group-size explanation & 4. Primary booking button */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8" id="pricing-summary">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-slate-200 bg-orange-50/40 p-6 sm:p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-brand-terracotta">Transparent Pricing</span>
              <div className="mt-2 flex flex-wrap items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">&euro;{tour.startingPrice}</span>
                <span className="text-sm font-bold text-slate-600">per person</span>
                <span className="text-xs font-semibold text-slate-500">({tour.startingPriceCondition})</span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
                All tours are operated privately for your group. The per-person rate drops as group size increases because the private vehicle and dedicated driver costs are shared across your party.
              </p>
            </div>
            <div className="mt-6 flex shrink-0 flex-col gap-2.5 sm:flex-row md:mt-0">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-xl bg-brand-terracotta px-6 py-3.5 text-center text-sm font-black text-white shadow-md transition hover:bg-brand-terracotta-dark"
              >
                Estimate price &amp; book
              </a>
              <a
                href={contactWhatsAppUrl}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-center text-sm font-bold text-slate-800 transition hover:border-brand-terracotta hover:text-brand-terracotta"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Honest tour description */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Tour Overview" title={`${tour.shortTitle}: What to know before you travel.`}>
            <p>{tour.summary}</p>
          </SectionHeading>

          <div className="mt-10 grid gap-8">
            {tour.experience.map((block) => (
              <article key={block.heading} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">{block.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                  {block.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 py-8 sm:px-6 lg:px-8" id="gallery">
        <TourImageSlider title={tour.title} images={tour.gallery} />
      </section>

      {/* 6. Detailed day-by-day itinerary */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8" id="itinerary">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Day-by-day itinerary" title="The complete route and daily rhythm.">
            <p>
              Detailed breakdown of driving segments, planned stops, overnight locations, and desert camp timing.
            </p>
          </SectionHeading>

          <div className="mt-10 grid gap-6">
            {tour.itinerary.map((day, index) => (
              <article
                key={day.day}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition sm:p-8"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-terracotta text-xs font-black text-white">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-brand-terracotta">{day.day}</p>
                      <h2 className="text-xl font-black text-slate-900">{day.title}</h2>
                    </div>
                  </div>
                  {day.drivingTime && (
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                      &#9201; {day.drivingTime}
                    </span>
                  )}
                </div>

                <p className="mt-4 leading-8 text-slate-700">{day.description}</p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Stops along the way:</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {day.stops.map((stop) => (
                      <li key={stop} className="rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1 text-xs font-bold text-amber-900">
                        {stop}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Route and distance information */}
      <section className="px-4 py-16 sm:px-6 lg:px-8" id="route-map">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Route &amp; distances" title="Driving geography at a glance.">
            <p>
              Visual map of the route with approximate road kilometers between pauses. Distinguishes between pure road driving hours and total day duration including visits, meals, and photo stops.
            </p>
          </SectionHeading>
          <div className="mt-8">
            <TourRouteMap route={tour.route} duration={tour.duration} overnightStops={tour.overnightStops} />
          </div>
        </div>
      </section>

      {/* 8. Included and not included */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="inclusions">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Inclusions" title="What is included and what costs extra.">
            <p>Clear, unambiguous breakdown of included travel services and personal expenses.</p>
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-black text-slate-900">Included in this tour</h2>
              <ul className="mt-5 space-y-3.5 text-sm text-slate-700">
                {tour.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="font-bold text-green-700">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-black text-slate-900">Not included</h2>
              <ul className="mt-5 space-y-3.5 text-sm text-slate-700">
                {tour.excluded.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="font-bold text-brand-terracotta">&times;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Accommodation and camp options */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8" id="accommodation">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Overnight stays" title="Camp categories and hotel standards.">
            <p>
              We provide transparent choices between traditional standard Berber camps and luxury desert camps.
            </p>
          </SectionHeading>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800">Option A</span>
              <h2 className="mt-3 text-lg font-black text-slate-900">Standard Desert Camp</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Authentic Berber tent accommodation with raised mattresses, warm bedding, dinner, communal campfire, traditional music, and shared sanitary facilities. Genuine desert atmosphere.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">Option B &bull; Upgrade</span>
              <h2 className="mt-3 text-lg font-black text-slate-900">Luxury Ensuite Camp</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Spacious private canvas suites with real beds, premium linens, private ensuite bathroom with shower and flush toilet, and a quieter location set deeper in the Erg Chebbi dunes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Who the tour is best for */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Suitability" title="Who is this tour best for?">
            <p>Match your group&apos;s schedule and travel style with the right Sahara itinerary.</p>
          </SectionHeading>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {tour.bestFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-800">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-terracotta text-[10px] font-black text-white">
                    +
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 11. Relevant tour-specific FAQs */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8" id="faq">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Tour FAQ" title="Common questions for this route." />
          <div className="mt-8 grid gap-3">
            {tour.faqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#d8b778]">
                <summary className="cursor-pointer font-black text-slate-900">{item.question}</summary>
                <p className="mt-4 leading-8 text-slate-700">
                  {item.answer}
                  {item.link ? (
                    <>
                      {" "}
                      <a href={item.link.href} className="font-black text-brand-terracotta underline underline-offset-4">
                        {item.link.label}
                      </a>
                    </>
                  ) : null}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Related guides */}
      <section className="px-4 py-16 sm:px-6 lg:px-8" id="related-guides">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Planning guides" title="Helpful articles for this Sahara route.">
            <p>Practical advice on packing, seasonal weather, driving times, and route decisions.</p>
          </SectionHeading>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-terracotta hover:shadow-md"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand-terracotta">{guide.readingTime}</p>
                <h2 className="mt-2 text-base font-bold text-slate-900 group-hover:text-brand-terracotta">{guide.title}</h2>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600">{guide.excerpt}</p>
                <span className="mt-4 text-xs font-black text-slate-900 group-hover:text-brand-terracotta">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Alternative tour comparison */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8" id="compare-tours">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Route comparison" title="Compare other Marrakech Sahara routes.">
            <p>Each itinerary solves a different travel requirement. Compare pace, destinations, and ending cities.</p>
          </SectionHeading>

          {/* Special 3-Day vs 4-Day dedicated comparison callout */}
          {tour.slug.includes("3-day-marrakech-to-merzouga") && (
            <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50/60 p-6 sm:p-8">
              <h2 className="text-xl font-black text-slate-900">Comparing 3-Day vs 4-Day Merzouga Tours</h2>
              <p className="mt-2 leading-7 text-slate-700">
                The 3-day round trip is the classic choice if your schedule is tight. The 4-day tour adds a full rest and discovery day in Merzouga, though the final return day to Marrakech remains a direct 8–9 hour drive.
              </p>
              <Link
                href="/tours/4-day-marrakech-to-merzouga-desert-tour"
                className="mt-4 inline-flex items-center text-sm font-black text-brand-terracotta underline decoration-brand-terracotta/40 underline-offset-4 hover:decoration-brand-terracotta"
              >
                Compare the 3-day and 4-day Merzouga tours &rarr;
              </Link>
            </div>
          )}

          {tour.slug.includes("4-day-marrakech-to-merzouga") && (
            <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50/60 p-6 sm:p-8">
              <h2 className="text-xl font-black text-slate-900">Comparing 4-Day vs 3-Day Merzouga Tours</h2>
              <p className="mt-2 leading-7 text-slate-700">
                The main benefit of the 4-day tour is more time in Merzouga — not a shorter return drive. Day 4 is a direct return to Marrakech (approx. 8–9 hours). If you only have three days, the classic 3-day tour covers the same core sights with one less night.
              </p>
              <Link
                href="/tours/3-day-marrakech-to-merzouga-desert-tour"
                className="mt-4 inline-flex items-center text-sm font-black text-brand-terracotta underline decoration-brand-terracotta/40 underline-offset-4 hover:decoration-brand-terracotta"
              >
                Compare the 3-day and 4-day Merzouga tours &rarr;
              </Link>
            </div>
          )}

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {relatedTours.map((related) => (
              <div
                key={related.slug}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-brand-terracotta">{related.duration}</p>
                  <h3 className="mt-2 text-lg font-black text-slate-900">{related.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{related.positioning}</p>
                  <p className="mt-3 text-xs font-bold text-slate-600">
                    From &euro;{related.startingPrice} per person ({related.startingPriceCondition})
                  </p>
                </div>
                <Link
                  href={`/tours/${related.slug}`}
                  className="mt-5 inline-flex items-center text-sm font-black text-slate-900 transition hover:text-brand-terracotta"
                >
                  Explore {related.shortTitle} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Final booking call to action */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="booking">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Price estimate &amp; booking" title="Private desert tour pricing by party size.">
              <p>
                Private transport and driver costs are shared across your party. The more travelers in your group, the lower the per-person rate.
              </p>
            </SectionHeading>
            <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-brand-slate px-5 py-3 text-xs font-black uppercase tracking-wider text-white">
                Price Breakdown
              </div>
              <div className="divide-y divide-slate-100">
                {tour.priceTiers.map((tier) => (
                  <div key={`${tier.minPeople}-${tier.maxPeople}`} className="flex items-center justify-between p-4 text-sm">
                    <span className="font-bold text-slate-800">{formatPeopleRange(tier.minPeople, tier.maxPeople)}</span>
                    <strong className="text-brand-terracotta">&euro;{tier.pricePerPerson} per person</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <BookingWidget tour={tour} />
        </div>
      </section>
    </main>
  );
}
