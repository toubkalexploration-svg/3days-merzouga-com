import Script from "next/script";
import { GA_MEASUREMENT_ID } from "../lib/analytics";

/**
 * Renders GA4 script ONLY when NEXT_PUBLIC_GA_MEASUREMENT_ID is configured in the environment.
 * Uses strategy="afterInteractive" to protect Largest Contentful Paint (LCP) and main-thread responsiveness.
 * Automatically delegates and tracks:
 * - WhatsApp consultation clicks (conversion event)
 * - Mailto email clicks
 * - Tour booking CTA button clicks
 */
export function Analytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            transport_type: 'beacon'
          });

          // Delegated event listener for conversion clicks (WhatsApp, Email, Tour CTA)
          document.addEventListener('click', function(e) {
            var el = e.target && e.target.closest ? e.target.closest('a, button') : null;
            if (!el) return;
            var href = el.getAttribute('href') || '';
            if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp.com') !== -1) {
              gtag('event', 'whatsapp_click', {
                event_category: 'contact',
                event_label: href,
                page: window.location.pathname
              });
            } else if (href.indexOf('mailto:') === 0) {
              gtag('event', 'email_click', {
                event_category: 'contact',
                event_label: href,
                page: window.location.pathname
              });
            } else if (href === '#booking' || href.indexOf('#booking') !== -1) {
              gtag('event', 'tour_booking_button_click', {
                event_category: 'cta',
                cta_location: href,
                page: window.location.pathname
              });
            }
          });
        `}
      </Script>
    </>
  );
}

