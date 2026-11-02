import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { SectionHeading } from "../components/SectionHeading";
import { contactEmail, contactPhoneDisplay, contactWhatsAppUrl } from "../data/contact";
import { operatorGoogleProfileUrl, operatorName, operatorUrl, photos, siteName, siteUrl, trustProfile } from "../data/site";

export const metadata: Metadata = {
  title: "About Our Local Morocco Desert Tour Team | 3 Days Merzouga",
  description:
    "Learn about 3 Days Merzouga, operated by Atlas Toubkal Trek: our focus on private Marrakech to Merzouga routes, local drivers, honest travel times, and desert camp standards.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About 3 Days Merzouga",
    description: "Learn about the local Morocco travel team operating our Marrakech to Merzouga desert tours.",
    url: `${siteUrl}/about`,
    siteName,
    type: "website",
    images: [{ url: photos.camelCaravanSunset.src, alt: photos.camelCaravanSunset.alt }],
  },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About 3 Days Merzouga",
    url: `${siteUrl}/about`,
    about: {
      "@type": "TravelAgency",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      parentOrganization: {
        "@type": "Organization",
        name: operatorName,
        url: operatorUrl,
        sameAs: [operatorGoogleProfileUrl],
      },
    },
  };

  return (
    <main>
      <JsonLd data={schema} />
      <Header />
      <section className="relative isolate overflow-hidden bg-brand-slate px-4 py-20 text-white sm:px-6 lg:px-8">
        <Image
          src={photos.camelCaravanSunset.src}
          alt={photos.camelCaravanSunset.alt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-brand-slate/75" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e8b86f]">About 3 Days Merzouga</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl">
            A local Morocco team focused on honest Sahara travel.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">
            {trustProfile.focusSummary}
          </p>
        </div>
      </section>

      {/* Operator Relationship */}
      <section className="border-b border-slate-100 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-terracotta">Operator Backing</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Operated by {operatorName}
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              3 Days Merzouga is operated by <a href={operatorUrl} className="font-bold text-brand-terracotta underline decoration-brand-terracotta/40 underline-offset-4 transition hover:decoration-brand-terracotta">{operatorName}</a>, an established Morocco travel organization with operating roots in Imlil and Marrakech.
            </p>
            <p className="mt-3 leading-7 text-slate-700">
              Our website exists to give travelers a dedicated, straightforward resource for the classic southern Sahara corridor — with realistic driving times, transparent per-person pricing, and private vehicle coordination.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={operatorGoogleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-brand-slate px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#213946]"
              >
                Read reviews on Google Maps
              </a>
              <a
                href={operatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-800 transition hover:border-brand-terracotta hover:text-brand-terracotta"
              >
                Visit Atlas Toubkal Trek
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Real Core Focus Points */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our operational focus" title="What defines how we organize Sahara journeys.">
            <p>
              We prioritize practical operational transparency over generic marketing claims. Every tour follows proven routes with realistic pacing.
            </p>
          </SectionHeading>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustProfile.focusPoints.map((point, index) => (
              <article key={point.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-terracotta/10 text-sm font-black text-brand-terracotta">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-black text-slate-900">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Departure Communication */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
          <h2 className="text-2xl font-black text-slate-900">How we communicate before departure</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Planning a multi-day road journey through the High Atlas and Sahara requires clear communication. Before any booking is confirmed, we discuss:
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="font-bold text-brand-terracotta">&bull;</span>
              <span>Exact hotel or riad pickup location in Marrakech (including meeting points for pedestrian-only medina areas).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-brand-terracotta">&bull;</span>
              <span>Luggage capacity and group vehicle sizing so everyone travels comfortably.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-brand-terracotta">&bull;</span>
              <span>Camp category preferences (standard Berber camp vs. luxury ensuite tent).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-brand-terracotta">&bull;</span>
              <span>Dietary restrictions (vegetarian, vegan, allergies) passed directly to our overnight accommodation partners.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-brand-terracotta">&bull;</span>
              <span>Realistic return arrival times in Marrakech or Fes so you can plan flights or trains without stress.</span>
            </li>
          </ul>
          <div className="mt-6 border-t border-slate-100 pt-6">
            <p className="text-sm font-bold text-slate-900">Direct contact channels:</p>
            <p className="mt-1 text-sm text-slate-700">
              WhatsApp: <a href={contactWhatsAppUrl} className="font-bold text-brand-terracotta">{contactPhoneDisplay}</a> | Email: <a href={`mailto:${contactEmail}`} className="font-bold text-brand-terracotta">{contactEmail}</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl bg-brand-slate p-8 text-white md:grid-cols-[1fr_auto] md:items-center lg:p-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e8b86f]">Plan with local drivers</p>
            <h2 className="mt-3 text-3xl font-black">Choose your Sahara route or ask for route advice.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              Tell us your travel dates, group size, and destination. We will advise you honestly on what is realistic for your time.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/tours" className="rounded-full bg-brand-terracotta px-6 py-3 text-center font-black transition hover:bg-brand-terracotta-dark">
              View tours
            </Link>
            <Link href="/contact" className="rounded-full border border-white/40 px-6 py-3 text-center font-black transition hover:bg-white/10">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
