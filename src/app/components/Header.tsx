import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/contact", label: "Contact" },
  { href: "/booking-policy", label: "Booking Policy" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-stone-200/80 bg-white/95 text-stone-950 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 sm:py-3 lg:px-8">
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

        <nav className="order-3 flex w-full gap-4 overflow-x-auto text-[0.76rem] font-black uppercase tracking-[0.1em] md:order-none md:w-auto md:items-center md:gap-6 md:overflow-visible" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#b5532f]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}