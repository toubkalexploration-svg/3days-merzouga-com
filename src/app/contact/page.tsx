import type { Metadata } from "next";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { SectionHeading } from "../components/SectionHeading";
import { siteUrl } from "../data/tours";

export const metadata: Metadata = {
  title: "Contact and Book a Merzouga Desert Tour",
  description:
    "Contact 3 Days Merzouga by WhatsApp, email, or booking form to plan a Merzouga Desert Tour from Marrakech.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact 3 Days Merzouga",
    url: `${siteUrl}/contact`,
  };

  return (
    <main>
      <JsonLd data={schema} />
      <Header />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Contact" title="Tell us your dates and group size." level="h1">
              <p>
                We reply with clear availability, route advice, and the best Merzouga tour option for your travel rhythm.
              </p>
            </SectionHeading>
            <div className="mt-8 grid gap-4 text-sm font-bold">
              <a href="https://wa.me/2126" className="rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-[#b5532f]">WhatsApp: +212 600 000 000</a>
              <a href="mailto:info@3days-merzouga.com" className="rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-[#b5532f]">Email: info@3days-merzouga.com</a>
              <div className="rounded-2xl border border-stone-200 bg-white p-5">Social: Instagram / Facebook</div>
            </div>
          </div>
          <form className="grid gap-4 rounded-[1.4rem] bg-[#132028] p-5 text-white shadow-[0_30px_90px_rgba(19,32,40,0.18)] sm:p-6" action="mailto:info@3days-merzouga.com" method="post" encType="text/plain">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white/75">Full name<input name="Name" required className="min-h-12 rounded-xl bg-white px-4 text-[#132028]" /></label>
              <label className="grid gap-2 text-sm font-bold text-white/75">Email<input name="Email" type="email" required className="min-h-12 rounded-xl bg-white px-4 text-[#132028]" /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white/75">WhatsApp<input name="WhatsApp" className="min-h-12 rounded-xl bg-white px-4 text-[#132028]" /></label>
              <label className="grid gap-2 text-sm font-bold text-white/75">Preferred date<input name="Date" type="date" className="min-h-12 rounded-xl bg-white px-4 text-[#132028]" /></label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-white/75">Message<textarea name="Message" rows={6} placeholder="Tell us the tour, group size, hotel, and any custom request" className="rounded-xl bg-white px-4 py-3 text-[#132028]" /></label>
            <button className="min-h-12 rounded-full bg-[#b5532f] px-6 font-black transition hover:bg-[#8f3e27]" type="submit">Send Request</button>
          </form>
        </div>
      </section>
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.4rem] border border-stone-200 bg-white">
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