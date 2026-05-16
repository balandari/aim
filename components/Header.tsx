"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/#events" },
  { label: "Vendors", href: "https://aimvendors.com", external: true },
  { label: "Contact", href: "/#footer" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-350 ease-gentle ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-warm"
          : "bg-cream"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Text logo */}
          <Link
            href="/"
            className="font-display text-2xl md:text-3xl text-stone-900 hover:text-earth transition-colors duration-250 ease-gentle"
          >
            Antiques in Moore
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans tracking-wide transition-colors duration-250 ease-gentle text-stone-600 hover:text-earth"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-sans tracking-wide transition-colors duration-250 ease-gentle ${
                    isActive(link.href)
                      ? "text-earth font-semibold"
                      : "text-stone-600 hover:text-earth"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-stone-700 hover:text-earth transition-colors duration-250 ease-gentle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
            {/* Hamburger / X icon */}
            <span className="block w-6 h-5 relative">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-250 ease-gentle ${
                  mobileOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition-opacity duration-250 ease-gentle ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-250 ease-gentle ${
                  mobileOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-350 ease-gentle ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-stone-900/40"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <nav
          className={`relative bg-cream border-t border-stone-200 shadow-warm-lg transition-transform duration-350 ease-gentle ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-lg font-sans transition-colors duration-250 ease-gentle text-stone-700 hover:text-earth"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 text-lg font-sans transition-colors duration-250 ease-gentle ${
                    isActive(link.href)
                      ? "text-earth font-semibold"
                      : "text-stone-700 hover:text-earth"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
