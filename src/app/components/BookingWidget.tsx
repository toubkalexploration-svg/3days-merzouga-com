"use client";

import { useMemo, useState } from "react";
import { contactEmail } from "../data/contact";
import type { Tour } from "../data/tours";
import { getPriceForGroup } from "../data/tours";
import { trackBookingSubmit } from "../lib/analytics";

type BookingWidgetProps = {
  tour: Tour;
};

export function BookingWidget({ tour }: BookingWidgetProps) {
  const [peopleInput, setPeopleInput] = useState("2");
  const people = useMemo(() => Math.max(2, Number.parseInt(peopleInput, 10) || 2), [peopleInput]);
  const tier = useMemo(() => getPriceForGroup(tour, people), [people, tour]);
  const total = tier.pricePerPerson * people;

  function updatePeopleInput(value: string) {
    const digits = value.replace(/\D/g, "");

    if (!digits) {
      setPeopleInput("");
      return;
    }

    setPeopleInput(String(Math.max(2, Number.parseInt(digits, 10))));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackBookingSubmit(tour.title, total, people);

    const formData = new FormData(event.currentTarget);
    const subject = `Desert Tour Booking Request: ${tour.title} (${people} travelers)`;
    const body = [
      "Hello 3 Days Merzouga Team,",
      "",
      "I would like to request a booking:",
      `Tour: ${tour.title}`,
      `Travelers: ${people}`,
      `Estimated total: EUR ${total} (EUR ${tier.pricePerPerson} per person)`,
      `Preferred date: ${formData.get("Date") || "To be confirmed"}`,
      `Camp preference: ${formData.get("Camp preference") || "Not specified"}`,
      `Pickup location: ${formData.get("Pickup location") || "To be confirmed"}`,
      "",
      `Full name: ${formData.get("Name") || ""}`,
      `Email: ${formData.get("Email") || ""}`,
      `WhatsApp: ${formData.get("WhatsApp") || "Not provided"}`,
      "",
      "Special requests / route questions:",
      `${formData.get("Message") || "None"}`,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-stone-200/90 lg:sticky lg:top-24">
      <div className="bg-[linear-gradient(135deg,#132028,#213946)] p-6 text-white">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e8b86f]">Reserve your Sahara tour</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight">Book {tour.shortTitle}</h2>
        <p className="mt-2 text-sm leading-6 text-white/75">
          Enter your group size and travel dates to calculate the estimated price before we confirm availability.
        </p>
      </div>

      <form
        className="grid gap-4 bg-white p-6"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-2">
          <label htmlFor="people" className="text-sm font-bold text-slate-800">
            Number of travelers (private group)
          </label>
          <div className="grid gap-3 rounded-xl border border-stone-200 bg-white p-2 shadow-inner sm:grid-cols-[1fr_auto] sm:items-center">
            <input
              id="people"
              name="People"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={peopleInput}
              onChange={(event) => updatePeopleInput(event.target.value)}
              onBlur={() => {
                if (!peopleInput) {
                  setPeopleInput("2");
                }
              }}
              onFocus={(event) => event.currentTarget.select()}
              className="min-h-11 rounded-lg border border-stone-200 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b8793c] focus:bg-white focus:ring-2"
              required
            />
            <div className="rounded-lg bg-[#132028] px-4 py-3 text-left text-white ring-1 ring-stone-200 sm:min-w-44 sm:text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-white/60">Estimated Total</p>
              <p className="mt-1 text-2xl font-black text-[#e8b86f]">&euro;{total}</p>
              <p className="text-xs font-bold text-white/80">&euro;{tier.pricePerPerson} per person</p>
            </div>
          </div>
        </div>

        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Preferred departure date
          <input
            name="Date"
            type="date"
            className="min-h-12 rounded-lg border border-stone-200 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b8793c] focus:ring-2"
            required
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-slate-800">
            Full name
            <input
              name="Name"
              type="text"
              placeholder="Your full name"
              className="min-h-12 rounded-lg border border-stone-200 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b8793c] focus:ring-2"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-slate-800">
            Email address
            <input
              name="Email"
              type="email"
              placeholder="you@example.com"
              className="min-h-12 rounded-lg border border-stone-200 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b8793c] focus:ring-2"
              required
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-bold text-slate-800">
          WhatsApp number (optional for faster communication)
          <input
            name="WhatsApp"
            type="tel"
            placeholder="+1 / +44 / +33 / +212 ..."
            className="min-h-12 rounded-lg border border-stone-200 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b8793c] focus:ring-2"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-slate-800">
            Marrakech pickup location
            <input
              name="Pickup location"
              type="text"
              placeholder="Hotel, riad name, or address"
              className="min-h-12 rounded-lg border border-stone-200 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b8793c] focus:ring-2"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-slate-800">
            Camp preference
            <select
              name="Camp preference"
              defaultValue="Standard camp"
              className="min-h-12 rounded-lg border border-stone-200 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b8793c] focus:ring-2"
            >
              <option>Standard camp</option>
              <option>Luxury ensuite camp</option>
              <option>Not sure yet (advise me)</option>
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Special requests or route questions
          <textarea
            name="Message"
            rows={3}
            placeholder="Children's ages, dietary requirements (vegetarian/gluten-free), extra nights, or custom route adjustments..."
            className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b8793c] focus:ring-2"
          />
        </label>

        <button
          type="submit"
          className="min-h-12 rounded-full bg-[#b8793c] px-6 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#96612f] hover:shadow-lg"
        >
          Send Desert Tour Request
        </button>

        <p className="text-center text-xs leading-5 text-slate-600">
          This prepares your tour inquiry and opens your email application. We verify vehicle availability, hotel/camp space, and confirm exact pickup details before any payment is requested.
        </p>
      </form>
    </div>
  );
}
