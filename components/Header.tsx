"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Link href="/">
              <h1 className="font-serif text-neutral-800 text-2xl md:text-3xl lg:text-4xl font-normal hover:text-neutral-600 transition-colors">
                Antiques in Moore
              </h1>
            </Link>
            <p className="text-neutral-600 text-sm md:text-base mt-2">
              Moore, Oklahoma's destination for vintage finds and antique treasures
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 md:gap-8 text-sm">
            <Link
              href="/events"
              className={`transition-colors ${
                pathname === "/events"
                  ? "text-neutral-900 font-semibold"
                  : "text-neutral-700 hover:text-neutral-900"
              }`}
            >
              Events
            </Link>
            <Link
              href="/visit"
              className={`transition-colors ${
                pathname === "/visit"
                  ? "text-neutral-900 font-semibold"
                  : "text-neutral-700 hover:text-neutral-900"
              }`}
            >
              Visit
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                pathname === "/about"
                  ? "text-neutral-900 font-semibold"
                  : "text-neutral-700 hover:text-neutral-900"
              }`}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
