import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { SectionHeading } from "../components/SectionHeading";
import { SecureMailtoForm } from "../components/SecureMailtoForm";
import { contactEmail, contactMailtoUrl, contactPhoneDisplay, contactWhatsAppUrl } from "../data/contact";
import { defaultOgImage, siteName, siteUrl } from "../data/site";

export const metadata: Metadata = {
  title: "Book a Marrakech to Merzouga Desert Tour | 3 Days Merzouga",
  description:
    "Contact 3 Days Merzouga by WhatsApp, email, or booking form to plan a Marrakech to Merzouga desert tour, private Sahara trip, or custom Morocco itinerary.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Book a Marrakech to Merzouga Desert Tour",
    description:
      "Contact 3 Days Merzouga to plan a private Marrakech to Merzouga desert tour, Sahara camp, camel trek, or custom Morocco route.",
    url: `${siteUrl}/contact`,
    siteName,
    type: "website",
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: "Book a Marrakech to Merzouga desert tour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Marrakech to Merzouga Desert Tour",
    description:
      "Contact 3 Days Merzouga for private Marrakech to Merzouga desert tour planning.",
    images: [defaultOgImage],
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
                Send your travel dates, group size, preferred route, and hotel pickup location. We reply promptly with vehicle availability, transparent per-person pricing, and custom route advice.
              </p>
            </SectionHeading>
            <div className="mt-8 grid gap-4 text-sm font-bold">
              <a
                href={contactWhatsAppUrl}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#b8793c]"
              >
                <span className="block text-xs uppercase tracking-wider text-slate-500">Fast Consultation</span>
                <span className="mt-1 text-base text-slate-900">WhatsApp: {contactPhoneDisplay}</span>
              </a>
              <a
                href={contactMailtoUrl}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#b8793c]"
              >
                <span className="block text-xs uppercase tracking-wider text-slate-500">Email Inquiries</span>
                <span className="mt-1 text-base text-slate-900">Email: {contactEmail}</span>
              </a>
            </div>
          </div>

          <SecureMailtoForm
            className="grid gap-4 rounded-2xl bg-[linear-gradient(135deg,#132028,#213946)] p-6 text-white shadow-lg ring-1 ring-white/10 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white/85">
                Full name
                <input
                  name="Name"
                  required
                  placeholder="Your full name"
                  className="min-h-12 rounded-lg border border-white/10 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-white/85">
                Email
                <input
                  name="Email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="min-h-12 rounded-lg border border-white/10 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white/85">
                WhatsApp
                <input
                  name="WhatsApp"
                  placeholder="+1 / +44 / +33 / +212 ..."
                  className="min-h-12 rounded-lg border border-white/10 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-white/85">
                Preferred date
                <input
                  name="Date"
                  type="date"
                  className="min-h-12 rounded-lg border border-white/10 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white/85">
                Preferred tour
                <select
                  name="Tour"
                  defaultValue=""
                  className="min-h-12 rounded-lg border border-white/10 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2"
                >
                  <option value="" disabled>Select a tour</option>
                  <option>3-Day Marrakech to Merzouga Desert Tour</option>
                  <option>3-Day Marrakech to Fes Desert Tour</option>
                  <option>4-Day Marrakech to Merzouga Desert Tour</option>
                  <option>Custom Morocco desert tour</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-white/85">
                Number of travelers
                <input
                  name="Travelers"
                  type="number"
                  min="1"
                  defaultValue="2"
                  inputMode="numeric"
                  className="min-h-12 rounded-lg border border-white/10 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white/85">
                Pickup location
                <input
                  name="Pickup location"
                  type="text"
                  placeholder="Hotel, riad, or address in Marrakech"
                  className="min-h-12 rounded-lg border border-white/10 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-white/85">
                Camp preference
                <select
                  name="Camp preference"
                  defaultValue="Standard camp"
                  className="min-h-12 rounded-lg border border-white/10 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2"
                >
                  <option>Standard camp</option>
                  <option>Luxury ensuite camp</option>
                  <option>Not sure yet (advise me)</option>
                </select>
              </label>
            </div>
            <input type="hidden" name="Tour format" value="Private tour" />
            <label className="grid gap-2 text-sm font-bold text-white/85">
              Tour request &amp; questions
              <textarea
                name="Message"
                rows={4}
                placeholder="Preferred stops, accommodation needs, dietary requirements, return plans, and custom route requests"
                className="rounded-lg border border-white/10 bg-white px-4 py-3 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2"
              />
            </label>
            <button
              className="min-h-12 rounded-full bg-[#b8793c] px-6 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#96612f]"
              type="submit"
            >
              Send Desert Tour Request
            </button>
            <p className="text-xs leading-5 text-white/70">
              This form opens your email application; the website does not store your message. Read our <Link href="/privacy" className="font-bold text-[#e8b86f] underline underline-offset-2">privacy policy</Link>.
            </p>
          </SecureMailtoForm>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
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
