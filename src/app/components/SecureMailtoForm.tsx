"use client";

import type { FormEvent, ReactNode } from "react";
import { contactEmail } from "../data/contact";

type SecureMailtoFormProps = {
  children: ReactNode;
  className?: string;
};

export function SecureMailtoForm({ children, className }: SecureMailtoFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const tour = formData.get("Tour")?.toString().trim() || "Custom Morocco desert tour";
    const subject = `Desert Tour Request: ${tour}`;
    const body = [
      "Hello 3 Days Merzouga Team,",
      "",
      "I would like to request information about a desert tour.",
      "",
      `Full name: ${formData.get("Name") || ""}`,
      `Email: ${formData.get("Email") || ""}`,
      `WhatsApp: ${formData.get("WhatsApp") || "Not provided"}`,
      `Preferred date: ${formData.get("Date") || "To be confirmed"}`,
      `Tour: ${tour}`,
      `Travelers: ${formData.get("Travelers") || "Not specified"}`,
      `Pickup location: ${formData.get("Pickup location") || "To be confirmed"}`,
      `Camp preference: ${formData.get("Camp preference") || "Not specified"}`,
      "",
      "Tour request and questions:",
      `${formData.get("Message") || "None"}`,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
