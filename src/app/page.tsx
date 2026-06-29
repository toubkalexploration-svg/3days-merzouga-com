import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "./components/Header";
import { JsonLd } from "./components/JsonLd";
import { SectionHeading } from "./components/SectionHeading";
import { TourCard } from "./components/TourCard";
import { siteUrl, tours } from "./data/tours";

export const metadata: Metadata = {
  title: "Merzouga Desert Tours from Marrakech",
  description:
    "Book premium Merzouga Desert Tours from Marrakech with a specialist local team, professional drivers, small groups, Dades Valley, Todra Gorge, and Erg Chebbi camps.",
  alternates: {
    canonical: "/",
  },
};

const trustItems = [
  "Years organizing Marrakech to Merzouga routes",
  "Professional local drivers and experienced desert guides",
  "Comfortable vehicles for long Sahara roads",
  "Small groups, private upgrades, and flexible pacing",
];

const reasons = [
  ["Local Experts", "Merzouga routes, desert camps, and valley stops are our daily work."],
  ["Professional Drivers", "Calm, experienced drivers who understand long Atlas and desert roads."],
  ["Comfortable Vehicles", "Air-conditioned transport sized properly for your group and luggage."],
  ["Small Groups", "A quieter, more personal experience than crowded coach-style tours."],
  ["Flexible Private Tours", "Adjust pickup, camp level, pace, and scenic stops when you book privately."],
  ["Fast Communication", "Clear answers before booking, with WhatsApp and email available."],
  ["Authentic Experiences", "Kasbahs, valleys, desert camp evenings, and meaningful local stops."],
  ["Excellent Reviews", "A booking experience designed around confidence, clarity, and care."],
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "TravelAgency"],
    name: "3 Days Merzouga",
    url: siteUrl,
    description:
      "Specialist Morocco desert tour company focused on Merzouga Desert Tours from Marrakech.",
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
      <section className="relative isolate min-h-[74svh] overflow-hidden bg-[#132028] text-white">
        <Image
          src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1900&q=82"
          alt="Golden Erg Chebbi dunes near Merzouga at sunset"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(19,32,40,0.88),rgba(19,32,40,0.58)_48%,rgba(19,32,40,0.18)),linear-gradient(0deg,rgba(19,32,40,0.58),rgba(19,32,40,0.08))]" />
        <div className="mx-auto flex min-h-[74svh] max-w-7xl items-center px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center sm:text-left">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#e8b86f]">Morocco desert tour company</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[1] tracking-tight sm:text-5xl lg:text-6xl">
              Merzouga desert tours from Marrakech
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/82">
              We do not try to sell every tour in Morocco. We dedicate our experience, drivers, guides, and organization to creating the best possible Merzouga Desert Tours from Marrakech.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:justify-start">
              <Link href="/contact" className="rounded-full bg-[#b5532f] px-6 py-3 text-center text-sm font-black text-white shadow-lg shadow-black/20 transition hover:bg-[#8f3e27]">
                Book Now
              </Link>
              <Link href="/tours" className="rounded-full border border-white/45 px-6 py-3 text-center text-sm font-black text-white transition hover:border-white hover:bg-white/10">
                View Tours
              </Link>
            </div>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 text-sm backdrop-blur sm:grid-cols-3">
              <div className="bg-[#132028]/55 p-3"><dt className="text-[11px] font-black uppercase text-white/55">Focus</dt><dd className="mt-1 font-black">Merzouga only</dd></div>
              <div className="bg-[#132028]/55 p-3"><dt className="text-[11px] font-black uppercase text-white/55">Route</dt><dd className="mt-1 font-black">Marrakech to Sahara</dd></div>
              <div className="bg-[#132028]/55 p-3"><dt className="text-[11px] font-black uppercase text-white/55">Style</dt><dd className="mt-1 font-black">Small groups</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="about">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <SectionHeading eyebrow="Welcome to 3 Days Merzouga" title="A trusted place for families and solo travelers.">
            <p>
              We specialize in Merzouga Desert Tours from Marrakech because focus creates better trips, especially for families who want comfort, safety, and clear planning from the first message. We also support solo travelers through our site by helping them join shared departures, making it easier to experience the Sahara with a well-matched group. Our local drivers know the Atlas road, our guides understand the desert rhythm, and our itineraries are paced to feel relaxed, memorable, and easy to book with confidence.
            </p>
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map((item, index) => (
              <div key={item} className="rounded-md border border-stone-200 bg-[#fbf7ef] p-6">
                <span className="text-sm font-black text-[#b5532f]">0{index + 1}</span>
                <p className="mt-4 text-base font-black leading-snug text-[#201913]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" id="tours">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Merzouga Desert Tours" title="Best Merzouga desert tours from Marrakech.">
            <p>Choose the Marrakech desert tour that fits your time, from Marrakech to Fes routes to classic Erg Chebbi camp experiences with Dades Valley, Todra Gorge, and camel trekking.</p>
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
            <h2 className="mt-3 text-2xl font-black uppercase tracking-tight sm:text-3xl">Why choose 3 Days Merzouga for your Sahara adventure?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65">With local drivers, flexible booking, clear communication, and authentic routes, we organize Merzouga experiences that feel safe, warm, and memorable.</p>
          </div>
          <div className="mt-7 grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([title, text], index) => (
              <div key={title} className="bg-[#132028] p-4 transition hover:bg-[#182a34] sm:p-5">
                <div className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-[#b5532f] text-xs font-black text-white">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="text-base font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/62">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <article className="grid gap-6 rounded-md border border-stone-200 bg-white p-7 shadow-[0_18px_55px_rgba(32,25,19,0.08)] md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b5532f]">Private custom tours</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-[#201913] sm:text-3xl">Can&apos;t find your tour?</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6d6256]">
                Tell us your dates, route idea, hotel level, camp style, and group needs. We can shape a private Merzouga desert tour with tailored pacing, family comfort, solo traveler support, and extra nights where they make sense.
              </p>
            </div>
            <Link href="/contact" className="inline-flex justify-center rounded-full bg-[#132028] px-6 py-3 text-sm font-black text-white transition hover:bg-[#b5532f]">
              Request custom tour
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="tripadvisor-rating">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 rounded-md border border-stone-200 bg-[#fbf7ef] p-7 text-center shadow-[0_18px_55px_rgba(32,25,19,0.08)] sm:grid-cols-[auto_1fr] sm:items-center sm:text-left lg:p-8">
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
                Travelers choose us for clear communication, careful driving, comfortable pacing, and memorable Merzouga desert experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] bg-[#b5532f] p-8 text-white md:grid-cols-[1fr_auto] md:items-center lg:p-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f1dfbf]">Ready when you are</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">Tell us your dates. We will shape the right Merzouga route.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/78">Fast answers, clear pricing, and honest advice if a different route fits you better.</p>
          </div>
          <Link href="/contact" className="rounded-full bg-white px-7 py-4 text-center font-black text-[#201913] transition hover:bg-[#f1dfbf]">
            Start Booking
          </Link>
        </div>
      </section>
    </main>
  );
}
