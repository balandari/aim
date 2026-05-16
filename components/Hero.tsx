import Image from "next/image";
import Link from "next/link";

function OrnamentDivider({ className = "", wide = false }: { className?: string; wide?: boolean }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div
        className={`h-px bg-gradient-to-r from-transparent to-brass/60 ${
          wide ? "w-16 md:w-24" : "w-10 md:w-16"
        }`}
      />
      <svg
        className="w-2.5 h-2.5 text-brass"
        viewBox="0 0 10 10"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect x="5" y="0" width="7.07" height="7.07" rx="1" transform="rotate(45 5 5)" />
      </svg>
      <div
        className={`h-px bg-gradient-to-l from-transparent to-brass/60 ${
          wide ? "w-16 md:w-24" : "w-10 md:w-16"
        }`}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative w-full"
      style={{ minHeight: "clamp(550px, 90vh, 950px)" }}
    >
      {/* Background image */}
      <Image
        src="/store-hero.png"
        alt="Inside Antiques in Moore — ornate framed painting of white peacock and cockatoo among flowers"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-stone-950/65" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(21,18,15,0.5)_100%)]" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          {/* Top ornament */}
          <OrnamentDivider className="mb-8" wide />

          {/* Title */}
          <h1 className="font-display text-cream-50 leading-[0.9] tracking-wide">
            <span
              className="block"
              style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}
            >
              ANTIQUES
            </span>
            <span
              className="block text-brass mt-1"
              style={{
                fontSize: "clamp(1.5rem, 4.5vw, 3.5rem)",
                letterSpacing: "0.3em",
              }}
            >
              IN MOORE
            </span>
          </h1>

          {/* Bottom ornament */}
          <OrnamentDivider className="mt-6 mb-8" />

          {/* Tagline */}
          <p className="text-cream-200/90 font-serif italic text-lg md:text-xl tracking-wide">
            Curated Vintage &amp; Collectibles Since 1998
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/gallery"
              className="inline-flex items-center px-8 py-3.5 bg-brass text-stone-950 font-sans font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:bg-brass-light transition-all duration-300 ease-gentle shadow-lg shadow-brass/20"
            >
              Browse Collection
            </Link>
            <a
              href="#events"
              className="inline-flex items-center px-8 py-3.5 border border-cream-200/30 text-cream-100 font-sans font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:border-brass/50 hover:text-brass transition-all duration-300 ease-gentle backdrop-blur-sm"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-900 to-transparent" />
    </section>
  );
}
