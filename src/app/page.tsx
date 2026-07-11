import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "./components/Header";
import { JsonLd } from "./components/JsonLd";
import { SectionHeading } from "./components/SectionHeading";
import { TourCard } from "./components/TourCard";
import { contactEmail, contactPhoneDisplay } from "./data/contact";
import { photos } from "./data/site";
import { siteUrl, tours } from "./data/tours";

export const metadata: Metadata = {
  title: "Marrakech to Merzouga Desert Tours",
  description:
    "Book Marrakech to Merzouga desert tours with a specialist local team. Choose 3-day and 4-day Sahara trips with Dades Valley, Todra Gorge, Erg Chebbi camel trekking, private transport, and desert camps.",
  alternates: {
    canonical: "/",
  },
};

const trustItems = [
  "Specialists in Marrakech to Merzouga desert tours",
  "Professional local drivers for Atlas and Sahara roads",
  "Comfortable air-conditioned vehicles for long desert routes",
  "Small groups, private tours, and flexible pacing",
];

const reasons = [
  ["Merzouga Specialists", "We focus on Marrakech to Merzouga tours, Sahara camps, and the classic southern Morocco route."],
  ["Professional Drivers", "Calm, experienced drivers who know the High Atlas, Dades Valley, Todra Gorge, and desert roads."],
  ["Comfortable Vehicles", "Air-conditioned transport sized properly for your group, luggage, and long travel days."],
  ["Small Groups", "A quieter, more personal Sahara tour than crowded coach-style departures."],
  ["Flexible Private Tours", "Adjust pickup, hotel level, camp category, pace, and scenic stops when you book privately."],
  ["Fast Communication", "Clear answers before booking, with WhatsApp and email support for your Morocco itinerary."],
  ["Authentic Experiences", "Kasbahs, valleys, Erg Chebbi dunes, desert camp evenings, and meaningful local stops."],
  ["Clear Pricing", "Simple per-person prices with private upgrades and custom tour advice before you confirm."],
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "3 Days Merzouga",
    url: siteUrl,
    inLanguage: "en",
    publisher: { "@type": "Organization", name: "3 Days Merzouga", url: siteUrl },
  },
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "TravelAgency"],
    name: "3 Days Merzouga",
    url: siteUrl,
    logo: `${siteUrl}/logo-transparent.png`,
    image: `${siteUrl}/logo-transparent.png`,
    description:
      "Specialist Morocco desert tour company focused on Marrakech to Merzouga desert tours.",
    telephone: contactPhoneDisplay,
    email: contactEmail,
    areaServed: ["Marrakech", "Merzouga", "Dades Valley", "Todra Gorge", "Erg Chebbi"],
    sameAs: ["https://www.instagram.com/", "https://www.facebook.com/"],
    makesOffer: tours.map((tour) => ({
      "@type": "Offer",
      priceCurrency: "EUR",
      price: tour.startingPrice,
      itemOffered: {
        "@type": "TouristTrip",
        name: tour.title,
        description: tour.summary,
        url: `${siteUrl}/tours/${tour.slug}`,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd data={schema} />
      <Header />
      <section className="relative isolate flex min-h-[86svh] items-center justify-center overflow-hidden bg-brand-slate text-white">
        <Image
          src={photos.camelCaravanSunset.src}
          alt={photos.camelCaravanSunset.alt}
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 inline-flex items-center rounded-full bg-brand-slate/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-100 shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm">
              Morocco Sahara tour company
            </p>
            <h1 className="mx-auto max-w-4xl text-4xl font-black uppercase leading-[1.12] tracking-normal text-white drop-shadow-[0_5px_18px_rgba(0,0,0,0.65)] sm:text-5xl md:text-6xl">
              Marrakech to <span className="text-brand-terracotta">Merzouga</span> desert tours
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-relaxed text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.75)] md:text-lg">
              Compare focused 3-day and 4-day Sahara tours from Marrakech to Merzouga, including Dades Valley, Todra Gorge, Erg Chebbi camel trekking, comfortable transport, private or shared options, and authentic desert camp nights.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="w-full rounded-xl border border-brand-terracotta bg-brand-terracotta px-8 py-4 text-center text-sm font-black uppercase tracking-wider text-white shadow-[0_18px_45px_rgba(0,0,0,0.34)] ring-2 ring-white/20 transition-all duration-300 hover:scale-105 hover:bg-brand-terracotta-dark sm:w-auto">
                Book Now
              </Link>
              <Link href="/tours" className="w-full rounded-xl border border-brand-terracotta bg-brand-terracotta px-8 py-4 text-center text-sm font-black uppercase tracking-wider text-white shadow-[0_18px_45px_rgba(0,0,0,0.34)] ring-2 ring-white/20 transition-all duration-300 hover:scale-105 hover:bg-brand-terracotta-dark sm:w-auto">
                View Tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-4 -mt-10 rounded-2xl border-y border-slate-100 bg-white py-10 shadow-[0_24px_80px_rgba(28,45,55,0.04)] lg:mx-auto lg:max-w-7xl" aria-label="Tour highlights">
        <div className="mx-auto grid gap-8 px-6 md:grid-cols-3">
          {[
            ["Local desert experts", "Native Moroccan driving team for the Atlas and Sahara road"],
            ["Erg Chebbi camps", "Camel trekking, sunset dunes, and Merzouga camp nights"],
            ["Flexible planning", "Private routes, small groups, and clear custom support"],
          ].map(([title, text], index) => (
            <div key={title} className={`flex items-center gap-4 ${index === 1 ? "md:border-x md:border-slate-100 md:px-8" : ""}`}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-terracotta/10 text-sm font-black text-brand-terracotta">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">{title}</h2>
                <p className="mt-0.5 text-xs leading-5 text-slate-800">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background px-4 py-24 sm:px-6 lg:px-8" id="about">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <SectionHeading eyebrow="Welcome to 3 Days Merzouga" title="A local team for clear, comfortable Sahara travel.">
            <p>
              We specialize in Marrakech to Merzouga desert tours because a focused route creates better trips. Families get comfort, safety, and clear planning from the first message. Solo travelers can ask about shared desert tour departures, while couples and small groups can choose private pacing or camp upgrades. Our local drivers know the High Atlas road, the valleys, and the desert rhythm, so every itinerary is practical, memorable, and easy to book with confidence.
            </p>
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map((item, index) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_30px_rgba(28,45,55,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(28,45,55,0.06)]">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-terracotta/10 text-sm font-black text-brand-terracotta">0{index + 1}</span>
                <p className="mt-4 text-base font-bold leading-snug text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8" id="tours">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Merzouga Desert Tours" title="Choose your Marrakech to Merzouga desert tour." center>
            <p>Find the Sahara itinerary that fits your time: a 3-day Marrakech to Fes desert tour, a classic 3-day Marrakech to Merzouga desert tour, or a slower 4-day private Sahara trip with Dades Valley, Todra Gorge, Erg Chebbi camel trekking, and desert camp accommodation.</p>
          </SectionHeading>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {tours.map((tour, index) => <TourCard key={tour.slug} tour={tour} priority={index === 0} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#132028] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e8b86f]">Why choose us</p>
            <h2 className="mt-3 text-2xl font-black uppercase tracking-tight sm:text-3xl">Why choose 3 Days Merzouga for your Marrakech desert tour?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65">With local drivers, flexible booking, clear communication, and proven Sahara routes, we organize Merzouga experiences that feel safe, warm, and memorable.</p>
          </div>
          <div className="mt-7 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-[0_22px_70px_rgba(0,0,0,0.16)] sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([title, text], index) => (
              <div key={title} className="bg-[#132028] p-4 transition hover:bg-[#182a34] sm:p-5">
                <div className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-[#b8793c] text-xs font-black text-white shadow-[0_10px_24px_rgba(184,121,60,0.28)]">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="text-base font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/62">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <article className="grid gap-6 rounded-lg border border-stone-200 bg-white/95 p-7 shadow-[0_20px_65px_rgba(32,25,19,0.1)] ring-1 ring-white/80 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b8793c]">Private custom tours</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Need a private Morocco desert tour?</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-800">
                Tell us your dates, route idea, hotel level, camp style, and group needs. We can shape a private Marrakech to Merzouga desert tour with tailored pacing, family comfort, solo traveler support, and extra nights where they make sense.
              </p>
            </div>
            <Link href="/contact" className="inline-flex justify-center rounded-full bg-[#132028] px-6 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(19,32,40,0.18)] transition hover:-translate-y-0.5 hover:bg-[#b8793c]">
              Request custom tour
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="tripadvisor-rating">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 rounded-lg border border-stone-200 bg-white p-7 text-center shadow-[0_18px_55px_rgba(32,25,19,0.08)] sm:grid-cols-[auto_1fr] sm:items-center sm:text-left lg:p-8">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white p-4 shadow-[0_12px_35px_rgba(32,25,19,0.08)] sm:mx-0">
              <Image
                src="/tripadvisor.png"
                alt="Tripadvisor"
                width={88}
                height={88}
                className="h-auto w-full object-contain"
              />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2f6b58]">Tripadvisor rating</p>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end">
                <h2 id="tripadvisor-rating" className="text-4xl font-black leading-none text-slate-950">5.0</h2>
                <div className="flex justify-center gap-1 pb-1 text-xl font-black tracking-[0.12em] text-[#2f6b58] sm:justify-start" aria-label="5 out of 5 rating">
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                </div>
              </div>
              <p className="mt-3 text-base font-black text-slate-950">Our customers love us!</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-800">
                Travelers choose us for clear communication, careful driving, comfortable pacing, and memorable Merzouga desert tour experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-lg bg-[linear-gradient(135deg,#b8793c,#96612f)] p-8 text-white shadow-[0_26px_80px_rgba(150,97,47,0.24)] md:grid-cols-[1fr_auto] md:items-center lg:p-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f1dfbf]">Ready when you are</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">Tell us your dates. We will shape the right Merzouga desert route.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/78">Fast answers, clear pricing, and honest advice on the best Marrakech to Merzouga itinerary for your time.</p>
          </div>
          <Link href="/contact" className="rounded-full bg-white px-7 py-4 text-center font-black text-slate-950 transition hover:bg-slate-100">
            Start Booking
          </Link>
        </div>
      </section>
    </main>
  );
}
