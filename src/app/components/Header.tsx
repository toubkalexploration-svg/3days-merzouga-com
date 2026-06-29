import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/booking-policy", label: "Booking Policy" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-stone-200/70 bg-white/92 text-stone-950 shadow-[0_14px_45px_rgba(32,25,19,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="3 Days Merzouga home">
          <Image
            src="/logo-transparent.png"
            alt="3 Days Merzouga logo"
            width={72}
            height={88}
            priority
            className="h-12 w-10 object-contain sm:h-14 sm:w-12"
          />
          <span className="grid leading-none">
            <span className="text-[0.66rem] font-black uppercase tracking-[0.24em] text-[#b5532f]">Merzouga</span>
            <strong className="text-base font-black uppercase tracking-tight sm:text-lg">Desert Tours</strong>
          </span>
        </Link>

        <div className="order-3 flex w-full items-center gap-3 md:order-none md:w-auto">
          <nav className="flex min-w-0 flex-1 gap-2 overflow-x-auto rounded-full border border-stone-200 bg-[#fbf7ef]/75 p-1 text-[0.72rem] font-black uppercase tracking-[0.1em] md:flex-none md:overflow-visible" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="shrink-0 rounded-full px-3 py-2 text-[#3c332b] transition hover:bg-white hover:text-[#b5532f] hover:shadow-sm">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="shrink-0 rounded-full bg-[#b5532f] px-4 py-2.5 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(181,83,47,0.25)] transition hover:-translate-y-0.5 hover:bg-[#8f3e27]">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
