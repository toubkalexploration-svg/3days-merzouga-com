import type { Metadata } from "next";
import { Header } from "../components/Header";
import { SectionHeading } from "../components/SectionHeading";
import { defaultOgImage, siteName, siteUrl } from "../data/site";

export const metadata: Metadata = {
  title: "Merzouga Tour Booking and Refund Policy | 3 Days Merzouga",
  description:
    "Read the 3 Days Merzouga booking, refund, cancellation, included services, and custom tour policy for Marrakech to Merzouga desert tours.",
  alternates: {
    canonical: "/booking-policy",
  },
  openGraph: {
    title: "Merzouga Tour Booking and Refund Policy",
    description:
      "Booking, refund, cancellation, included services, and custom tour terms for Marrakech to Merzouga desert tours.",
    url: `${siteUrl}/booking-policy`,
    siteName,
    type: "website",
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: "Merzouga desert tour booking policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merzouga Tour Booking and Refund Policy",
    description:
      "Booking, refund, cancellation, and custom tour terms for Marrakech to Merzouga desert tours.",
    images: [defaultOgImage],
  },
};

const includedServices = [
  "Air-conditioned transportation for your private group from Marrakech",
  "Professional local driver experienced with High Atlas and Sahara roads",
  "Breakfasts and dinners during all overnight stays",
  "Desert camp accommodation in Merzouga (standard or luxury option)",
  "Hotel or kasbah accommodation during the journey (e.g. Dades Valley)",
  "Erg Chebbi camel trek at sunset and sunrise",
  "Scenic stops, photo opportunities, and rest breaks throughout the route",
];

const excludedServices = [
  "Midday lunches and beverages",
  "Personal travel insurance and personal shopping expenses",
  "Entrance fees at monuments (e.g. ticket to enter Ait Ben Haddou ksar)",
  "Licensed local monument guides at historical sites (available on request)",
  "Optional Sahara activities such as quad biking, sandboarding, or buggies",
  "Tips for the driver and desert camp staff",
];

export default function BookingPolicyPage() {
  return (
    <main>
      <Header />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Booking policy" title="Clear terms for Marrakech to Merzouga desert tours." level="h1">
            <p>
              This policy keeps expectations simple and transparent before we organize transport, accommodation, Sahara camp logistics, and local services for your Merzouga desert tour.
            </p>
          </SectionHeading>
          <div className="mt-10 grid gap-6">
            <section className="rounded-2xl border border-stone-200 bg-white/95 p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-black text-slate-900">Refund and cancellation policy</h2>
              <ul className="mt-5 grid gap-4 leading-8 text-slate-700">
                <li><strong className="text-slate-900">7+ days before departure:</strong> Full refund with no cancellation fee.</li>
                <li><strong className="text-slate-900">Late bookings (2–3 days before departure):</strong> May still be cancelled for a full refund before the tour begins.</li>
                <li><strong className="text-slate-900">Less than 4 days before departure:</strong> 50% refund for earlier confirmed bookings, as vehicle reservations, driver scheduling, and camp/hotel commitments have already been confirmed.</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-stone-200 bg-white/95 p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-black text-slate-900">Private and custom desert tours</h2>
              <p className="mt-5 leading-8 text-slate-700">
                Every commercial itinerary can be customized on request. We adapt hotel category, desert camp style (standard or luxury), route stops, departure timing, and extra rest nights in Dades Valley or Merzouga according to your party&apos;s preferences.
              </p>
            </section>

            <div className="grid gap-6 md:grid-cols-2">
              <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-slate-900">Included services</h2>
                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                  {includedServices.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="font-bold text-green-700">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-slate-900">Not included</h2>
                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                  {excludedServices.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="font-bold text-brand-terracotta">&times;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
