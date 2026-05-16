import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full px-6 md:px-10 pt-6 md:pt-10">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-2xl">
        {/* Hero image */}
        <div className="relative w-full" style={{ minHeight: "clamp(400px, 70vh, 800px)" }}>
          <Image
            src="/store-hero.png"
            alt="Inside Antiques in Moore -- ornate framed painting of white peacock and cockatoo among flowers"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />

          {/* Dark overlay gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/40 to-stone-900/20" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-6 md:px-10 pb-12 md:pb-18 lg:pb-22">
              {/* Headline */}
              <h1
                className="font-display text-cream-50 text-balance"
                style={{ fontSize: "clamp(2rem, min(5vw, 8vh), 3.5rem)" }}
              >
                Where the Past Meets the Present
              </h1>

              {/* Subtitle */}
              <p className="mt-4 max-w-xl text-cream-200 text-lg md:text-xl leading-relaxed font-sans">
                A curated antique marketplace with 20+ vendors under one roof in Moore, Oklahoma.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/gallery"
                  className="inline-flex items-center px-7 py-3 bg-earth text-cream-50 font-sans font-semibold text-sm tracking-wide rounded-lg hover:bg-earth-dark transition-colors duration-250 ease-gentle shadow-warm-md"
                >
                  Browse Gallery
                </Link>
                <a
                  href="#events"
                  className="inline-flex items-center px-7 py-3 bg-cream-50/15 text-cream-50 font-sans font-semibold text-sm tracking-wide rounded-lg border border-cream-200/30 hover:bg-cream-50/25 transition-colors duration-250 ease-gentle backdrop-blur-sm"
                >
                  Upcoming Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
