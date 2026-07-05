"use client";

import { useEffect, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when the mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-stone-200/70 bg-white/92 text-stone-950 shadow-[0_14px_45px_rgba(32,25,19,0.08)] backdrop-blur-xl">
      <div className="relative z-30 mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
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

        {/* Desktop Navigation - hidden on mobile, visible on md and up */}
        <nav className="hidden md:flex items-center gap-2 rounded-full border border-stone-200 bg-[#fbf7ef]/75 p-1 text-[0.72rem] font-black uppercase tracking-[0.1em]" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 rounded-full px-3 py-2 text-[#3c332b] transition hover:bg-white hover:text-[#b5532f] hover:shadow-sm">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Group (Book Now + Mobile Menu Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/contact" className="shrink-0 rounded-full bg-[#b5532f] px-3.5 py-2 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(181,83,47,0.25)] transition hover:-translate-y-0.5 hover:bg-[#8f3e27] sm:px-4 sm:py-2.5">
            Book Now
          </Link>

          {/* Hamburger Icon Button for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-stone-200 bg-[#fbf7ef]/75 text-stone-900 transition hover:bg-white hover:text-[#b5532f] hover:shadow-sm focus:outline-none md:hidden"
            aria-expanded={isOpen}
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

      {/* Mobile Drawer Navigation Overlay */}
      <div
        className={`absolute top-full left-0 z-20 w-full border-b border-stone-200 bg-[#fbf7ef]/98 backdrop-blur-xl shadow-[0_20px_50px_rgba(32,25,19,0.15)] transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-[#3c332b] transition hover:bg-white hover:text-[#b5532f] hover:shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop overlay below header level */}
      <div
        className={`fixed inset-0 z-10 bg-stone-950/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
    </header>
  );
}
