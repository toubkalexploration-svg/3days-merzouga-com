// Analytics integration prepared for Google Analytics 4 (GA4) and Google Search Console.
// Uses NEXT_PUBLIC_GA_MEASUREMENT_ID environment variable.
// Safe when no ID is configured — all tracking calls are non-blocking no-ops.

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function" && GA_MEASUREMENT_ID) {
    window.gtag("event", eventName, params);
  }
}

/** Track user clicking on WhatsApp consultation */
export function trackWhatsAppClick(location: string, tourSlug?: string) {
  trackEvent("whatsapp_click", {
    event_category: "contact",
    event_label: location,
    tour_slug: tourSlug ?? "general",
  });
}

/** Track user clicking on mailto email link */
export function trackEmailClick(location: string, tourSlug?: string) {
  trackEvent("email_click", {
    event_category: "contact",
    event_label: location,
    tour_slug: tourSlug ?? "general",
  });
}

/** Track tour booking CTA click */
export function trackTourBookingClick(tourTitle: string, location: string) {
  trackEvent("tour_booking_button_click", {
    event_category: "cta",
    tour_title: tourTitle,
    cta_location: location,
  });
}

/** Track booking form submission */
export function trackBookingSubmit(tourTitle: string, estimatedTotal?: number, travelers?: number) {
  trackEvent("booking_request_submitted", {
    event_category: "conversion",
    tour_title: tourTitle,
    value: estimatedTotal,
    currency: "EUR",
    travelers_count: travelers,
  });
}

