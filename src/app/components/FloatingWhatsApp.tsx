import { contactPhoneDisplay, contactWhatsAppUrl } from "../data/contact";

export function FloatingWhatsApp() {
  return (
    <a
      href={contactWhatsAppUrl}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_18px_40px_rgba(18,140,82,0.34)] ring-4 ring-white/85 transition hover:-translate-y-1 hover:bg-[#1ebe5d] focus:outline-none focus:ring-[#e8b86f] sm:bottom-6 sm:right-6"
      aria-label={`Contact us on WhatsApp at ${contactPhoneDisplay}`}
      title={`WhatsApp ${contactPhoneDisplay}`}
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
        <path d="M16.02 3.2A12.64 12.64 0 0 0 5.18 22.34L3.7 28.8l6.6-1.54A12.62 12.62 0 1 0 16.02 3.2Zm0 22.92a10.33 10.33 0 0 1-5.25-1.44l-.38-.23-3.91.91.88-3.81-.25-.39a10.33 10.33 0 1 1 8.91 4.96Zm5.67-7.73c-.31-.16-1.84-.91-2.12-1.01-.28-.11-.49-.16-.7.16-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56 0 1.5 1.11 2.96 1.26 3.16.16.2 2.18 3.33 5.28 4.67.74.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.48-.08-.13-.28-.2-.59-.36Z" />
      </svg>
    </a>
  );
}
