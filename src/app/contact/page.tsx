import type { Metadata } from "next";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { SectionHeading } from "../components/SectionHeading";
import { contactEmail, contactMailtoUrl, contactPhoneDisplay, contactWhatsAppUrl } from "../data/contact";
import { siteUrl } from "../data/tours";

export const metadata: Metadata = {
  title: "Book a Marrakech to Merzouga Desert Tour",
  description:
    "Contact 3 Days Merzouga by WhatsApp, email, or booking form to plan a Marrakech to Merzouga desert tour, private Sahara trip, or custom Morocco itinerary.",
  keywords: [
    "book Merzouga desert tour",
    "contact Morocco desert tour company",
    "Marrakech to Merzouga private tour",
    "Sahara tour booking Morocco",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Book a Marrakech to Merzouga Desert Tour",
    description:
      "Contact page for Merzouga desert tour bookings, private Marrakech Sahara trips, and custom Morocco desert itineraries.",
    url: `${siteUrl}/contact`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactPhoneDisplay,
      email: contactEmail,
      contactType: "customer service",
      availableLanguage: ["English", "French", "Arabic"],
    },
  };

  return (
    <main>
      <JsonLd data={schema} />
      <Header />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Contact 3 Days Merzouga" title="Book your Marrakech to Merzouga desert tour." level="h1">
              <p>
                Send your travel dates, group size, preferred route, and hotel pickup location. We reply with availability, clear pricing, and the best private or shared Merzouga desert tour option for your travel rhythm.
              </p>
            </SectionHeading>
            <div className="mt-8 grid gap-4 text-sm font-bold">
              <a href={contactWhatsAppUrl} className="rounded-lg border border-stone-200 bg-white/95 p-5 shadow-[0_12px_34px_rgba(32,25,19,0.06)] transition hover:-translate-y-0.5 hover:border-[#b5532f]">WhatsApp: {contactPhoneDisplay}</a>
              <a href={contactMailtoUrl} className="rounded-lg border border-stone-200 bg-white/95 p-5 shadow-[0_12px_34px_rgba(32,25,19,0.06)] transition hover:-translate-y-0.5 hover:border-[#b5532f]">Email: {contactEmail}</a>
              <div className="rounded-lg border border-stone-200 bg-white/95 p-5 shadow-[0_12px_34px_rgba(32,25,19,0.06)]">Social: Instagram / Facebook</div>
            </div>
          </div>
          <form className="grid gap-4 rounded-lg bg-[linear-gradient(135deg,#132028,#213946)] p-5 text-white shadow-[0_30px_90px_rgba(19,32,40,0.2)] ring-1 ring-white/10 sm:p-6" action={contactMailtoUrl} method="post" encType="text/plain">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white/75">Full name<input name="Name" required className="min-h-12 rounded-md border border-white/10 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2" /></label>
              <label className="grid gap-2 text-sm font-bold text-white/75">Email<input name="Email" type="email" required className="min-h-12 rounded-md border border-white/10 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2" /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white/75">WhatsApp<input name="WhatsApp" className="min-h-12 rounded-md border border-white/10 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2" /></label>
              <label className="grid gap-2 text-sm font-bold text-white/75">Preferred date<input name="Date" type="date" className="min-h-12 rounded-md border border-white/10 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2" /></label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-white/75">Tour request<textarea name="Message" rows={6} placeholder="Tour name, group size, hotel or riad, pickup city, private or shared tour, camp preference, and custom route requests" className="rounded-md border border-white/10 bg-white px-4 py-3 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2" /></label>
            <button className="min-h-12 rounded-full bg-[#b5532f] px-6 font-black shadow-[0_16px_34px_rgba(181,83,47,0.25)] transition hover:-translate-y-0.5 hover:bg-[#8f3e27]" type="submit">Send Desert Tour Request</button>
          </form>
        </div>
      </section>
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-stone-200 bg-white shadow-[0_18px_55px_rgba(32,25,19,0.08)]">
          <iframe
            title="Marrakech map"
            src="https://www.google.com/maps?q=Marrakech%20Morocco&output=embed"
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
