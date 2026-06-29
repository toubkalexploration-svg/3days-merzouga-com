import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "./components/Header";
import { JsonLd } from "./components/JsonLd";
import { SectionHeading } from "./components/SectionHeading";
import { TourCard } from "./components/TourCard";
import { contactEmail, contactPhoneDisplay } from "./data/contact";
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
    "@type": ["Organization", "LocalBusiness", "TravelAgency"],
    name: "3 Days Merzouga",
    url: siteUrl,
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
      <section className="relative isolate min-h-[76svh] overflow-hidden bg-[#132028] text-white">
        <Image
          src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1900&q=82"
          alt="Golden Erg Chebbi dunes near Merzouga at sunset"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(19,32,40,0.9),rgba(19,32,40,0.62)_46%,rgba(19,32,40,0.2)),linear-gradient(0deg,rgba(19,32,40,0.68),rgba(19,32,40,0.04))]" />
        <div className="mx-auto grid min-h-[76svh] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div className="max-w-3xl text-center sm:text-left">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#e8b86f]">Morocco Sahara tour company</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
              Marrakech to Merzouga desert tours
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/82">
              Compare focused 3-day and 4-day Sahara tours from Marrakech to Merzouga, including Dades Valley, Todra Gorge, Erg Chebbi camel trekking, comfortable transport, private or shared options, and authentic desert camp nights.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:justify-start">
              <Link href="/contact" className="rounded-full bg-[#b5532f] px-6 py-3 text-center text-sm font-black text-white shadow-[0_18px_40px_rgba(0,0,0,0.26)] transition hover:-translate-y-0.5 hover:bg-[#8f3e27]">
                Book Now
              </Link>
              <Link href="/tours" className="rounded-full border border-white/45 bg-white/5 px-6 py-3 text-center text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white hover:bg-white/15">
                View Tours
              </Link>
            </div>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 text-sm backdrop-blur sm:grid-cols-3">
              <div className="bg-[#132028]/55 p-3"><dt className="text-[11px] font-black uppercase text-white/55">Focus</dt><dd className="mt-1 font-black">Merzouga tours</dd></div>
              <div className="bg-[#132028]/55 p-3"><dt className="text-[11px] font-black uppercase text-white/55">Route</dt><dd className="mt-1 font-black">Marrakech to Sahara</dd></div>
              <div className="bg-[#132028]/55 p-3"><dt className="text-[11px] font-black uppercase text-white/55">Style</dt><dd className="mt-1 font-black">Small groups</dd></div>
            </dl>
          </div>
          <aside className="hidden rounded-lg border border-white/15 bg-white/12 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur lg:block">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e8b86f]">Route snapshot</p>
            <div className="mt-5 grid gap-3">
              {[
                ["01", "High Atlas", "Tizi n'Tichka road and mountain villages"],
                ["02", "Kasbahs and valleys", "Ait Ben Haddou, Dades Valley, Todra Gorge"],
                ["03", "Erg Chebbi dunes", "Camel trek, sunset, Sahara desert camp"],
              ].map(([number, title, text]) => (
                <div key={title} className="grid grid-cols-[auto_1fr] gap-4 rounded-md bg-[#132028]/62 p-4 ring-1 ring-white/10">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#b5532f] text-xs font-black text-white">{number}</span>
                  <span>
                    <strong className="block text-lg font-black text-white">{title}</strong>
                    <span className="mt-1 block text-sm leading-6 text-white/65">{text}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-md bg-white p-4 text-[#201913]">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#6d6256]">Tours from</p>
                <p className="mt-1 text-2xl font-black text-[#b5532f]">&euro;115</p>
              </div>
              <div className="rounded-md bg-white p-4 text-[#201913]">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#6d6256]">Duration</p>
                <p className="mt-1 text-2xl font-black text-[#132028]">3-4 days</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white/80 px-4 py-16 sm:px-6 lg:px-8" id="about">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <SectionHeading eyebrow="Welcome to 3 Days Merzouga" title="A local team for clear, comfortable Sahara travel.">
            <p>
              We specialize in Marrakech to Merzouga desert tours because a focused route creates better trips. Families get comfort, safety, and clear planning from the first message. Solo travelers can ask about shared desert tour departures, while couples and small groups can choose private pacing or camp upgrades. Our local drivers know the High Atlas road, the valleys, and the desert rhythm, so every itinerary is practical, memorable, and easy to book with confidence.
            </p>
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map((item, index) => (
              <div key={item} className="rounded-lg border border-stone-200 bg-[linear-gradient(180deg,#fffaf3,#fbf7ef)] p-6 shadow-[0_14px_40px_rgba(32,25,19,0.06)] transition hover:-translate-y-1 hover:border-[#d8b778]">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#132028] text-sm font-black text-[#e8b86f]">0{index + 1}</span>
                <p className="mt-4 text-base font-black leading-snug text-[#201913]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" id="tours">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Merzouga Desert Tours" title="Choose your Marrakech to Merzouga desert tour.">
            <p>Find the Sahara itinerary that fits your time: a 3-day Marrakech to Fes desert tour, a classic 3-day Marrakech to Merzouga desert tour, or a slower 4-day private Sahara trip with Dades Valley, Todra Gorge, Erg Chebbi camel trekking, and desert camp accommodation.</p>
          </SectionHeading>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
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
                <div className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-[#b5532f] text-xs font-black text-white shadow-[0_10px_24px_rgba(181,83,47,0.28)]">{String(index + 1).padStart(2, "0")}</div>
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
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b5532f]">Private custom tours</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-[#201913] sm:text-3xl">Need a private Morocco desert tour?</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6d6256]">
                Tell us your dates, route idea, hotel level, camp style, and group needs. We can shape a private Marrakech to Merzouga desert tour with tailored pacing, family comfort, solo traveler support, and extra nights where they make sense.
              </p>
            </div>
            <Link href="/contact" className="inline-flex justify-center rounded-full bg-[#132028] px-6 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(19,32,40,0.18)] transition hover:-translate-y-0.5 hover:bg-[#b5532f]">
              Request custom tour
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="tripadvisor-rating">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 rounded-lg border border-stone-200 bg-[#fbf7ef] p-7 text-center shadow-[0_18px_55px_rgba(32,25,19,0.08)] sm:grid-cols-[auto_1fr] sm:items-center sm:text-left lg:p-8">
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
                <h2 id="tripadvisor-rating" className="text-4xl font-black leading-none text-[#201913]">5.0</h2>
                <div className="flex justify-center gap-1 pb-1 text-xl font-black tracking-[0.12em] text-[#2f6b58] sm:justify-start" aria-label="5 out of 5 rating">
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                  <span>*</span>
                </div>
              </div>
              <p className="mt-3 text-base font-black text-[#201913]">Our customers love us!</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#6d6256]">
                Travelers choose us for clear communication, careful driving, comfortable pacing, and memorable Merzouga desert tour experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-lg bg-[linear-gradient(135deg,#b5532f,#8f3e27)] p-8 text-white shadow-[0_26px_80px_rgba(143,62,39,0.24)] md:grid-cols-[1fr_auto] md:items-center lg:p-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f1dfbf]">Ready when you are</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">Tell us your dates. We will shape the right Merzouga desert route.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/78">Fast answers, clear pricing, and honest advice on the best Marrakech to Merzouga itinerary for your time.</p>
          </div>
          <Link href="/contact" className="rounded-full bg-white px-7 py-4 text-center font-black text-[#201913] transition hover:bg-[#f1dfbf]">
            Start Booking
          </Link>
        </div>
      </section>
    </main>
  );
}
