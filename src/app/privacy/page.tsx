import type { Metadata } from "next";
import { Header } from "../components/Header";
import { SectionHeading } from "../components/SectionHeading";
import { contactEmail, contactMailtoUrl } from "../data/contact";
import { siteName, siteUrl } from "../data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How 3 Days Merzouga handles information sent through email, WhatsApp, and tour enquiries.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `Privacy Policy | ${siteName}`,
    description: "How 3 Days Merzouga handles information sent through email, WhatsApp, and tour enquiries.",
    url: `${siteUrl}/privacy`,
    siteName,
    type: "website",
  },
};

const sections = [
  {
    title: "Information you choose to send",
    text: "When you contact us, you may provide your name, email address, phone or WhatsApp number, travel dates, group size, pickup details, and tour preferences. Our website contact form opens your email application and does not save your message in a website database.",
  },
  {
    title: "How we use your information",
    text: "We use your information only to answer your enquiry, prepare a quote, arrange requested travel services, confirm booking details, and provide customer support. We do not sell your personal information.",
  },
  {
    title: "Service providers",
    text: "If you contact us through WhatsApp or use the embedded Google map, those providers process information under their own privacy policies. Website images and fonts may also be delivered by external hosting providers. Booking details may be shared only with drivers, accommodation providers, camps, or guides when needed to deliver your requested tour.",
  },
  {
    title: "Retention and your choices",
    text: "We keep enquiry and booking correspondence only as long as reasonably needed for customer service, legal, accounting, or operational purposes. You may ask us to correct or delete information we hold, subject to any information we must retain by law.",
  },
  {
    title: "Security",
    text: "The website uses HTTPS and browser security controls to protect data in transit. No internet service can guarantee absolute security, so please do not send passport copies, payment-card numbers, or other sensitive documents through the general enquiry form.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Your privacy" title="Privacy policy" level="h1">
            <p>This policy explains how {siteName} handles personal information when you enquire about or book a Morocco desert tour.</p>
          </SectionHeading>
          <p className="mt-6 text-sm font-bold text-slate-500">Last updated: October 15, 2026</p>
          <div className="mt-8 grid gap-5">
            {sections.map((section) => (
              <section key={section.title} className="rounded-lg border border-stone-200 bg-white/95 p-6 shadow-[0_14px_42px_rgba(32,25,19,0.06)]">
                <h2 className="text-xl font-black text-slate-950">{section.title}</h2>
                <p className="mt-3 leading-8 text-slate-800">{section.text}</p>
              </section>
            ))}
            <section className="rounded-lg border border-stone-200 bg-white/95 p-6 shadow-[0_14px_42px_rgba(32,25,19,0.06)]">
              <h2 className="text-xl font-black text-slate-950">Contact us about privacy</h2>
              <p className="mt-3 leading-8 text-slate-800">
                For a privacy request, email <a className="font-bold text-[#96612f] underline underline-offset-2" href={contactMailtoUrl}>{contactEmail}</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
