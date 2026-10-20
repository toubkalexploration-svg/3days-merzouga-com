import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { SectionHeading } from "../components/SectionHeading";
import { operatorGoogleProfileUrl, operatorName, operatorUrl, photos, siteName, siteUrl } from "../data/site";

export const metadata: Metadata = {
  title: "About Our Local Morocco Desert Tour Team",
  description:
    "Meet the local team behind 3 Days Merzouga, operated by Atlas Toubkal Trek, and learn how we plan focused Marrakech to Merzouga desert tours.",
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

const values = [
  ["Focused routes", "We keep our tour collection small so each itinerary has a clear purpose, realistic timing, and a well-planned Sahara experience."],
  ["Local planning", "Our Morocco-based team understands the High Atlas road, southern valleys, desert camp logistics, and the practical details of traveling from Marrakech."],
  ["Flexible support", "Private pacing, family needs, camp preferences, pickup details, and route adjustments are discussed clearly before confirmation."],
];

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
      <section className="relative isolate overflow-hidden bg-brand-slate px-4 py-24 text-white sm:px-6 lg:px-8">
        <Image src={photos.camelCaravanSunset.src} alt={photos.camelCaravanSunset.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-brand-slate/75" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e8b86f]">About 3 Days Merzouga</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl">A local team focused on thoughtful Sahara travel.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/82">We organize focused Marrakech to Merzouga routes for travelers who want clear planning, comfortable pacing, and direct support from a Morocco-based team.</p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow="Our operator" title="Operated by Atlas Toubkal Trek.">
            <p>3 Days Merzouga is operated by Atlas Toubkal Trek, a local Morocco travel company based in Imlil. The relationship brings the same direct communication and local coordination to our specialist desert-tour website.</p>
            <p><a href={operatorUrl} className="font-black text-brand-terracotta underline underline-offset-4">Visit the Atlas Toubkal Trek website</a> or <a href={operatorGoogleProfileUrl} className="font-black text-brand-terracotta underline underline-offset-4">read the team&apos;s original Google reviews</a>.</p>
          </SectionHeading>
          <div className="grid gap-5">
            {values.map(([title, text], index) => (
              <article key={title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_12px_40px_rgba(28,45,55,0.05)] sm:grid sm:grid-cols-[auto_1fr] sm:gap-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-terracotta/10 text-sm font-black text-brand-terracotta">0{index + 1}</span>
                <div className="mt-4 sm:mt-0"><h2 className="text-xl font-black text-slate-950">{title}</h2><p className="mt-2 leading-7 text-slate-700">{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl bg-brand-slate p-8 text-white md:grid-cols-[1fr_auto] md:items-center lg:p-12">
          <div><p className="text-xs font-black uppercase tracking-[0.22em] text-[#e8b86f]">Plan with us</p><h2 className="mt-3 text-3xl font-black">Choose a route or ask for local advice.</h2><p className="mt-4 max-w-2xl leading-7 text-white/70">Tell us your dates, group size, preferred destination, and camp style. We will help you choose a realistic route.</p></div>
          <div className="flex flex-col gap-3 sm:flex-row"><Link href="/tours" className="rounded-full bg-brand-terracotta px-6 py-3 text-center font-black">View tours</Link><Link href="/contact" className="rounded-full border border-white/40 px-6 py-3 text-center font-black transition hover:bg-white/10">Contact the team</Link></div>
        </div>
      </section>
    </main>
  );
}
