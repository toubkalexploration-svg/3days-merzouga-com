import Image from "next/image";
import Link from "next/link";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/contact", label: "Contact" },
  { href: "/booking-policy", label: "Booking Policy" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#101b22] text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">3 Days Merzouga footer</h2>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] md:items-start lg:px-8">
        <div className="max-w-md">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="3 Days Merzouga home">
            <Image
              src="/logo-transparent.png"
              alt="3 Days Merzouga logo"
              width={88}
              height={106}
              className="h-16 w-14 object-contain"
            />
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.18em] text-[#e8b86f]">3 Days Merzouga</span>
              <span className="mt-1 block text-xs font-bold text-white/55">Merzouga desert tours from Marrakech</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-white/62">
            Focused Merzouga Desert Tours from Marrakech for families, solo travelers, and private groups.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:gap-12">
          <nav className="grid gap-3 text-sm font-bold" aria-label="Footer pages">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/42">Quick Links</h3>
            {pageLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/72 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <address className="grid gap-3 text-sm font-bold not-italic text-white/72">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/42">Contact</h3>
            <a href="https://wa.me/212600000000" className="transition hover:text-white" aria-label="Contact 3 Days Merzouga on WhatsApp">
              WhatsApp: +212 600 000 000
            </a>
            <a href="mailto:info@3days-merzouga.com" className="break-words transition hover:text-white">
              info@3days-merzouga.com
            </a>
            <span>Marrakech, Morocco</span>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} 3 Days Merzouga. All rights reserved.</p>
          <Link href="/booking-policy" className="transition hover:text-white">Booking and refund policy</Link>
        </div>
      </div>
    </footer>
  );
}