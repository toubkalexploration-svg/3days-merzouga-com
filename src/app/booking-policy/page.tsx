import type { Metadata } from "next";
import { Header } from "../components/Header";
import { SectionHeading } from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Merzouga Tour Booking and Refund Policy",
  description:
    "Read the 3 Days Merzouga booking, refund, cancellation, included services, and custom tour policy for Marrakech to Merzouga desert tours.",
  keywords: [
    "Merzouga tour booking policy",
    "Morocco desert tour cancellation",
    "Marrakech to Merzouga refund policy",
    "private desert tour terms",
  ],
  alternates: {
    canonical: "/booking-policy",
  },
};

const included = [
  "Air-conditioned transportation from Marrakech and back",
  "Professional local driver",
  "Breakfasts",
  "Dinners",
  "Desert camp accommodation",
  "Hotel accommodation",
  "Guided visits",
  "Scenic stops throughout the journey",
  "Stops such as Ait Ben Haddou, Ouarzazate, Dades Valley, Todra Gorge, and Merzouga Desert",
];

export default function BookingPolicyPage() {
  return (
    <main>
      <Header />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Booking policy" title="Clear terms for Marrakech to Merzouga desert tours." level="h1">
            <p>
              This policy keeps expectations simple before we organize transport, accommodation, Sahara camp logistics, and local services for your Merzouga desert tour from Marrakech.
            </p>
          </SectionHeading>
          <div className="mt-10 grid gap-6">
            <section className="rounded-lg border border-stone-200 bg-white/95 p-6 shadow-[0_14px_42px_rgba(32,25,19,0.06)]">
              <h2 className="text-2xl font-black">Refund and cancellation policy</h2>
              <ul className="mt-5 grid gap-4 leading-8 text-[#6d6256]">
                <li>Full refund if cancelled at least 7 days before departure.</li>
                <li>Tours booked only 2-3 days before departure may still be cancelled for a full refund before the tour starts.</li>
                <li>For bookings made earlier than 4 days before departure, cancellations made less than 4 days before departure receive a 50% refund because transportation, accommodation, and logistics have already been organized.</li>
              </ul>
            </section>
            <section className="rounded-lg border border-stone-200 bg-white/95 p-6 shadow-[0_14px_42px_rgba(32,25,19,0.06)]">
              <h2 className="text-2xl font-black">Private and custom desert tours</h2>
              <p className="mt-5 leading-8 text-[#6d6256]">
                Marrakech to Merzouga itineraries can be customized on request. We can adapt hotel level, desert camp category, route stops, pickup time, private pacing, and extra nights in Merzouga, Dades Valley, or other southern Morocco stops.
              </p>
            </section>
            <section className="rounded-lg border border-stone-200 bg-white/95 p-6 shadow-[0_14px_42px_rgba(32,25,19,0.06)]">
              <h2 className="text-2xl font-black">Common services included</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {included.map((item) => <li key={item} className="rounded-lg border border-stone-200 bg-[#fbf7ef] p-4 font-bold text-[#201913]">{item}</li>)}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
