"use client";

import { useState } from "react";
import Link from "next/link";
import { contactEmail, contactPhoneDisplay, contactWhatsAppUrl } from "../data/contact";
import { trackEmailClick } from "../lib/analytics";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackEmailClick("contact_page_form");

    const formData = new FormData(event.currentTarget);
    const name = formData.get("Name")?.toString().trim() || "";
    const email = formData.get("Email")?.toString().trim() || "";
    const whatsapp = formData.get("WhatsApp")?.toString().trim() || "";
    const date = formData.get("Date")?.toString().trim() || "";
    const tour = formData.get("Tour")?.toString().trim() || "";
    const travelers = formData.get("Travelers")?.toString().trim() || "2";
    const pickup = formData.get("Pickup location")?.toString().trim() || "";
    const camp = formData.get("Camp preference")?.toString().trim() || "";
    const message = formData.get("Message")?.toString().trim() || "";

    const subject = `Morocco Desert Tour Inquiry: ${tour || "General"} (${travelers} travelers)`;
    const bodyLines = [
      `Hello 3 Days Merzouga Team,`,
      ``,
      `I would like to plan a Morocco desert tour with the following details:`,
      ``,
      `TOUR PREFERENCES:`,
      `- Preferred Tour: ${tour || "Not specified"}`,
      `- Number of travelers: ${travelers}`,
      `- Preferred Date: ${date || "To be confirmed"}`,
      `- Camp Preference: ${camp}`,
      `- Pickup Location: ${pickup || "To be confirmed"}`,
      ``,
      `CONTACT DETAILS:`,
      `- Full Name: ${name}`,
      `- Email: ${email}`,
      `- WhatsApp: ${whatsapp || "Not provided"}`,
      ``,
      `MESSAGE / SPECIAL REQUESTS:`,
      `${message || "None"}`,
      ``,
      `Please let me know your availability, pricing, and recommendations.`,
      ``,
      `Best regards,`,
      `${name}`,
    ];

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    setLastMailtoUrl(mailto);
    setSubmitted(true);

    // Safely open the user's default email client
    window.location.href = mailto;
  }

  return (
    <form
      className="grid gap-4 rounded-2xl bg-[linear-gradient(135deg,#132028,#213946)] p-6 text-white shadow-lg ring-1 ring-white/10 sm:p-8"
      onSubmit={handleSubmit}
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
            <option value="" disabled>
              Select a tour
            </option>
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
            className="min-h-12 rounded-lg border border-white/10 bg-white px-4 text-[#132028] outline-none ring-[#e8b86f] transition focus:border-[#b8793c] focus:ring-2"
          >
            <option>Standard camp</option>
            <option>Luxury ensuite camp</option>
            <option>Not sure yet (advise me)</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-white/85">
        Tour request &amp; questions
        <textarea
          name="Message"
          rows={4}
          placeholder="Preferred stops, accommodation needs, dietary requirements, return plans, and custom route requests"
          className="rounded-lg border border-white/10 bg-white px-4 py-3 text-[#132028] outline-none ring-[#e8b86f] transition focus:ring-2"
        />
      </label>

      {submitted ? (
        <div className="rounded-xl border border-green-400/30 bg-green-950/60 p-4 text-xs leading-5 text-green-100">
          <p className="font-bold text-white">Opening your email application...</p>
          <p className="mt-1 text-white/80">
            If your email app didn&apos;t open automatically,{" "}
            <a href={lastMailtoUrl} className="font-bold text-[#e8b86f] underline">
              click here to send email
            </a>{" "}
            or chat with us on{" "}
            <a href={contactWhatsAppUrl} className="font-bold text-green-300 underline">
              WhatsApp ({contactPhoneDisplay})
            </a>.
          </p>
        </div>
      ) : null}

      <button
        className="min-h-12 rounded-full bg-[#b8793c] px-6 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#96612f]"
        type="submit"
      >
        Send Desert Tour Request
      </button>
      <p className="text-xs leading-5 text-white/70">
        This form opens your email application with your request pre-filled. Read our{" "}
        <Link href="/privacy" className="font-bold text-[#e8b86f] underline underline-offset-2">
          privacy policy
        </Link>.
      </p>
    </form>
  );
}

