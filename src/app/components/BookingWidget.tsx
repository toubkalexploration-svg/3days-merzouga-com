"use client";

import { useMemo, useState } from "react";
import { contactMailtoUrl } from "../data/contact";
import type { Tour } from "../data/tours";
import { getPriceForGroup } from "../data/tours";

type BookingWidgetProps = {
  tour: Tour;
};

export function BookingWidget({ tour }: BookingWidgetProps) {
  const [peopleInput, setPeopleInput] = useState("2");
  const people = useMemo(() => Math.max(1, Number.parseInt(peopleInput, 10) || 1), [peopleInput]);
  const tier = useMemo(() => getPriceForGroup(tour, people), [people, tour]);
  const total = tier.pricePerPerson * people;

  function updatePeopleInput(value: string) {
    const digits = value.replace(/\D/g, "");

    if (!digits) {
      setPeopleInput("");
      return;
    }

    setPeopleInput(String(Math.max(1, Number.parseInt(digits, 10))));
  }

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-[0_24px_80px_rgba(32,25,19,0.16)] ring-1 ring-stone-200/90 lg:sticky lg:top-24">
      <div className="bg-[linear-gradient(135deg,#132028,#213946)] p-5 text-white">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e8b86f]">Reserve your Sahara tour</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight">Book this Merzouga tour</h2>
        <p className="mt-2 text-sm leading-6 text-white/65">Enter your group size and travel details to estimate the price before we confirm availability.</p>
      </div>

      <form className="grid gap-4 bg-[#fffaf3] p-5" action={contactMailtoUrl} method="post" encType="text/plain">
        <input type="hidden" name="Tour" value={tour.title} />
        <input type="hidden" name="Estimated total" value={`EUR ${total}`} />
        <input type="hidden" name="Price per person" value={`EUR ${tier.pricePerPerson}`} />
        <div className="grid gap-2">
          <label htmlFor="people" className="text-sm font-bold text-[#6d6256]">Number of travelers</label>
          <div className="grid gap-3 rounded-lg border border-stone-200 bg-white p-2 shadow-inner sm:grid-cols-[1fr_auto] sm:items-center">
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
                  setPeopleInput("1");
                }
              }}
              onFocus={(event) => event.currentTarget.select()}
              className="min-h-11 rounded-md border border-stone-200 bg-[#fbf7ef] px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b5532f] focus:bg-white focus:ring-2"
              required
            />
            <div className="rounded-md bg-[#132028] px-4 py-3 text-left text-white ring-1 ring-stone-200 sm:min-w-40 sm:text-right">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-white/50">Estimate</p>
              <p className="mt-1 text-xl font-black text-[#e8b86f]">&euro;{total}</p>
              <p className="text-xs font-bold text-white/65">&euro;{tier.pricePerPerson} per person</p>
            </div>
          </div>
        </div>
        <label className="grid gap-2 text-sm font-bold text-[#6d6256]">
          Preferred date
          <input
            name="Date"
            type="date"
            className="min-h-12 rounded-md border border-stone-200 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b5532f] focus:ring-2"
            required
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-[#6d6256]">
            Full name
            <input name="Name" type="text" placeholder="Your name" className="min-h-12 rounded-md border border-stone-200 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b5532f] focus:ring-2" required />
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#6d6256]">
            Email
            <input name="Email" type="email" placeholder="you@example.com" className="min-h-12 rounded-md border border-stone-200 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b5532f] focus:ring-2" required />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-bold text-[#6d6256]">
          WhatsApp
          <input name="WhatsApp" type="tel" placeholder="+212 ..." className="min-h-12 rounded-md border border-stone-200 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b5532f] focus:ring-2" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#6d6256]">
          Tour notes
          <textarea name="Message" rows={4} placeholder="Hotel or riad, pickup location, private or shared tour, luxury camp upgrade, dietary needs, or custom route" className="rounded-md border border-stone-200 bg-white px-4 py-3 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b5532f] focus:ring-2" />
        </label>
        <button type="submit" className="min-h-12 rounded-full bg-[#b5532f] px-6 font-black text-white shadow-[0_16px_34px_rgba(181,83,47,0.24)] transition hover:-translate-y-0.5 hover:bg-[#8f3e27] hover:shadow-[0_18px_40px_rgba(181,83,47,0.32)]">
          Send Desert Tour Request
        </button>
        <p className="text-center text-xs leading-6 text-[#6d6256]">
          This sends an email request. We confirm availability, final price, pickup details, and any private tour adjustments before payment.
        </p>
      </form>
    </div>
  );
}
