import type { Metadata } from "next";
import { Header } from "../components/Header";
import { SectionHeading } from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Booking and Refund Policy",
  description:
    "Read the 3 Days Merzouga booking, refund, cancellation, included services, and custom tour policy for Merzouga Desert Tours from Marrakech.",
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
          <SectionHeading eyebrow="Booking policy" title="Clear cancellation, refund, and custom tour terms." level="h1">
            <p>
              This policy keeps expectations simple before we organize transport, accommodation, camp logistics, and local services for your Merzouga desert tour.
            </p>
          </SectionHeading>
          <div className="mt-10 grid gap-6">
            <section className="rounded-[1.4rem] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black">Refund Policy</h2>
              <ul className="mt-5 grid gap-4 leading-8 text-[#6d6256]">
                <li>Full refund if cancelled at least 7 days before departure.</li>
                <li>Tours booked only 2-3 days before departure may still be cancelled for a full refund before the tour starts.</li>
                <li>For bookings made earlier than 4 days before departure, cancellations made less than 4 days before departure receive a 50% refund because transportation, accommodation, and logistics have already been organized.</li>
              </ul>
            </section>
            <section className="rounded-[1.4rem] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black">Custom Tours</h2>
              <p className="mt-5 leading-8 text-[#6d6256]">
                Itineraries can be customized on request. We can adapt hotel level, desert camp category, route stops, pickup time, private pacing, and extra nights in Merzouga or the valleys.
              </p>
            </section>
            <section className="rounded-[1.4rem] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black">Included</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {included.map((item) => <li key={item} className="rounded-2xl bg-[#fbf7ef] p-4 font-bold text-[#201913]">{item}</li>)}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}