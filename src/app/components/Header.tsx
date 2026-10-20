"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/booking-policy", label: "Booking Policy" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  // Prevent background scrolling when the mobile menu is active
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    firstMenuLinkRef.current?.focus();

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-30 w-full bg-[#b8793c]/95 py-3 text-white shadow-lg backdrop-blur-md">
      <div className="relative z-30 mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="3 Days Merzouga home">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo-transparent.png"
              alt="3 Days Merzouga logo"
              width={72}
              height={88}
              priority
              className="h-9 w-8 object-contain"
            />
          </span>
          <span className="grid leading-none">
            <strong className="text-base font-black uppercase tracking-wider text-white sm:text-lg">3 Days Merzouga</strong>
            <span className="-mt-0.5 text-[0.66rem] font-bold uppercase tracking-[0.25em] text-orange-100">Desert tours</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-[0.72rem] font-bold uppercase tracking-wider md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 text-white transition hover:text-brand-slate">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/contact" className="shrink-0 rounded-xl bg-brand-slate px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition duration-300 hover:scale-105 hover:bg-[#213946]">
            Book Now
          </Link>

          <button
            ref={menuButtonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-5 w-5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute left-0 top-full z-20 w-full border-t border-white/10 bg-[#b8793c] shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              ref={index === 0 ? firstMenuLinkRef : undefined}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/15 hover:text-brand-slate"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-10 bg-stone-950/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
    </header>
  );
}
