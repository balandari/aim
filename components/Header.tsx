"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-gentle ${
        scrolled
          ? "bg-stone-950/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-stone-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Antiques in Moore logo"
              width={40}
              height={40}
              className="md:w-11 md:h-11"
              priority
            />
            <span className="font-display text-xl md:text-2xl text-cream-50 tracking-wide group-hover:text-brass transition-colors duration-250">
              Antiques <span className="text-brass">in</span> Moore
            </span>
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
                  className="text-sm font-sans tracking-[0.1em] uppercase transition-colors duration-250 ease-gentle text-cream-200/80 hover:text-brass"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-sans tracking-[0.1em] uppercase transition-colors duration-250 ease-gentle ${
                    isActive(link.href)
                      ? "text-brass font-semibold"
                      : "text-cream-200/80 hover:text-brass"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-cream-200 hover:text-brass transition-colors duration-250"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
            <span className="block w-6 h-5 relative">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-250 ease-gentle ${
                  mobileOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition-opacity duration-250 ${
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

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-350 ease-gentle ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className={`relative bg-stone-950 border-t border-brass/20 shadow-2xl transition-transform duration-350 ease-gentle ${
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
                  className="block py-3 text-lg font-sans tracking-wide text-cream-200 hover:text-brass transition-colors duration-250"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 text-lg font-sans tracking-wide transition-colors duration-250 ${
                    isActive(link.href)
                      ? "text-brass font-semibold"
                      : "text-cream-200 hover:text-brass"
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
