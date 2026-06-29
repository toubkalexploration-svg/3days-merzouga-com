import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingWidget } from "../../components/BookingWidget";
import { Header } from "../../components/Header";
import { JsonLd } from "../../components/JsonLd";
import { SectionHeading } from "../../components/SectionHeading";
import { TourImageSlider } from "../../components/TourImageSlider";
import { getTourBySlug, siteUrl, tours } from "../../data/tours";

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

  return `${minPeople}-${maxPeople} people`;
}

function ItineraryReadIcon() {
  return (
    <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d9c39e] bg-[#f8ebd0] text-[#8f3e27] shadow-sm transition group-open:border-[#b5532f] group-open:bg-[#b5532f] group-open:text-white">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 4h7l4 4v12H7z" />
        <path d="M14 4v4h4" />
        <path d="M10 12h5" />
        <path d="M10 15h5" />
        <path d="M10 18h3" />
      </svg>
    </span>
  );
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
    title: tour.seo.title,
    description: tour.seo.description,
    alternates: {
      canonical: `/tours/${tour.slug}`,
    },
    openGraph: {
      title: tour.seo.title,
      description: tour.seo.description,
      url: `${siteUrl}/tours/${tour.slug}`,
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

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: tour.title,
      description: tour.summary,
      url: `${siteUrl}/tours/${tour.slug}`,
      image: tour.gallery,
      itinerary: tour.route.join(" - "),
      offers: tour.priceTiers.map((tier) => ({
        "@type": "Offer",
        priceCurrency: "EUR",
        price: tier.pricePerPerson,
        description: formatPeopleRange(tier.minPeople, tier.maxPeople),
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
      "@type": "FAQPage",
      mainEntity: tour.faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
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
      <section className="relative isolate min-h-[68svh] overflow-hidden bg-[#132028] text-white">
        <Image
          src={tour.heroImage}
          alt={`${tour.title} from Marrakech`}
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(19,32,40,0.9),rgba(19,32,40,0.58)_54%,rgba(19,32,40,0.2)),linear-gradient(0deg,rgba(19,32,40,0.62),rgba(19,32,40,0.08))]" />
        <div className="mx-auto flex min-h-[68svh] max-w-7xl items-end px-4 pb-10 pt-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/tours" className="text-sm font-black text-white/70 transition hover:text-white">Back to tours</Link>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.24em] text-[#e8b86f]">{tour.duration}</p>
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">{tour.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">{tour.positioning}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#booking" className="rounded-full bg-[#b5532f] px-6 py-3 text-center text-sm font-black text-white transition hover:bg-[#8f3e27]">Book this tour</a>
              <a href="#itinerary" className="rounded-full border border-white/45 px-6 py-3 text-center text-sm font-black text-white transition hover:border-white hover:bg-white/10">View itinerary</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Tour description" title="A carefully paced desert itinerary.">
            <p>{tour.summary}</p>
          </SectionHeading>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8" id="gallery">
        <TourImageSlider title={tour.title} images={tour.gallery} />
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" id="itinerary">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <SectionHeading eyebrow="Itinerary" title="Day by day.">
            <p>{tour.summary}</p>
          </SectionHeading>
          <div className="grid gap-5">
            {tour.itinerary.map((day, index) => (
              <details key={day.day} open={index === 0} className="group rounded-md border border-stone-200 bg-white p-5 transition hover:border-[#d9c39e] sm:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#b5532f]">{day.day}</span>
                    <span className="mt-3 block text-xl font-black tracking-tight text-[#201913] sm:text-2xl">{day.title}</span>
                  </span>
                  <ItineraryReadIcon />
                </summary>
                <div className="mt-4 border-t border-stone-200 pt-4">
                  <p className="leading-7 text-[#6d6256]">{day.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {day.stops.map((stop) => <li key={stop} className="rounded-full bg-[#f1dfbf] px-3 py-2 text-xs font-black">{stop}</li>)}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-md bg-[#fbf7ef] p-6">
            <h2 className="text-xl font-black">Included</h2>
            <ul className="mt-5 grid gap-3">{tour.included.map((item) => <li key={item} className="border-t border-stone-200 pt-3 font-bold text-[#6d6256]">{item}</li>)}</ul>
          </div>
          <div className="rounded-md bg-[#fbf7ef] p-6">
            <h2 className="text-xl font-black">Excluded</h2>
            <ul className="mt-5 grid gap-3">{tour.excluded.map((item) => <li key={item} className="border-t border-stone-200 pt-3 font-bold text-[#6d6256]">{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" id="booking">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Pricing" title="The price updates with your group size.">
              <p>The larger the group, the lower the price per person. Select your number of travelers to see the live estimate before sending your request.</p>
            </SectionHeading>
            <div className="mt-7 overflow-hidden rounded-md border border-stone-200 bg-white">
              {tour.priceTiers.map((tier) => (
                <div key={`${tier.minPeople}-${tier.maxPeople}`} className="grid grid-cols-2 border-t border-stone-200 p-4 first:border-t-0">
                  <span className="font-bold text-[#6d6256]">{formatPeopleRange(tier.minPeople, tier.maxPeople)}</span>
                  <strong className="text-right">&euro;{tier.pricePerPerson} pp</strong>
                </div>
              ))}
            </div>
          </div>
          <BookingWidget tour={tour} />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="faq">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeading eyebrow="FAQ" title="Before you book." />
          <div className="grid gap-3">
            {tour.faqs.map((item) => (
              <details key={item.question} className="rounded-2xl border border-stone-200 bg-[#fbf7ef] p-5">
                <summary className="cursor-pointer font-black">{item.question}</summary>
                <p className="mt-4 leading-8 text-[#6d6256]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
