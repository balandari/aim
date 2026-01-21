"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white">
      {/* MAIN HERO - The Business */}
      <section className="relative bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 lg:py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* LEFT - What We Are */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-neutral-900 leading-tight">
                Where the past meets the present
              </h2>

              <div className="space-y-4 text-neutral-700 text-base md:text-lg leading-relaxed">
                <p>
                  A curated marketplace featuring dozens of independent vendors under one roof. From mid-century furniture to vintage jewelry, rare collectibles to everyday treasures.
                </p>
                <p>
                  Open weekends. Something new to discover every visit.
                </p>
              </div>

              <div className="pt-4 space-y-4">
                <div className="space-y-2">
                  <p className="text-neutral-500 text-xs uppercase tracking-[0.2em]">Location</p>
                  <p className="text-neutral-900 font-serif text-lg">825 NW 24th Street, Moore</p>
                </div>
                <div className="space-y-2">
                  <p className="text-neutral-500 text-xs uppercase tracking-[0.2em]">Hours</p>
                  <p className="text-neutral-900 font-serif text-lg">Saturday & Sunday, 9 AM – 5 PM</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT - Store Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/store-hero.png"
                alt="Antiques in Moore storefront at 825 NW 24th Street"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CURRENT EVENT - March 7th Giveaway */}
      <section className="relative bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">

          <div className="mb-12">
            <span className="inline-block text-primary text-xs md:text-sm font-bold tracking-[0.15em] uppercase mb-3">
              Upcoming Event
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-neutral-900 leading-tight">
              Outdoor Pop Up Market
            </h2>
          </div>

          {/* Event Announcement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <div className="space-y-4 text-neutral-700 text-base md:text-lg leading-relaxed">
              <p>
                Join us Friday, March 7th for our first outdoor market of the season. Browse vendor booths, discover unique finds, and enjoy the return of spring weather.
              </p>
              <p className="text-neutral-900 font-serif text-xl md:text-2xl italic mt-6">
                One visitor will take home a 55" VIZIO Smart TV.
              </p>
            </div>
          </motion.div>

          {/* Two Column - Event Info + Prize Detail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-start"
          >
            {/* LEFT - Event Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-neutral-500 text-xs uppercase tracking-[0.2em] mb-3">
                  Event Details
                </h3>
                <div className="space-y-3 text-neutral-900">
                  <p className="text-xl font-serif">Friday, March 7th, 2026</p>
                  <p className="text-base text-neutral-600">9:00 AM – 5:00 PM</p>
                  <p className="text-base text-neutral-600">825 NW 24th Street, Moore</p>
                </div>
              </div>

              <div>
                <h3 className="text-neutral-500 text-xs uppercase tracking-[0.2em] mb-3">
                  How to Enter
                </h3>
                <p className="text-2xl font-serif text-neutral-900">Visit in Person</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Stop by the store any weekend through March 7th and provide your email address to enter. Winner will be announced at noon on March 7th and contacted by email or phone.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="/visit"
                  className="group bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 text-sm tracking-wide uppercase transition-colors inline-flex items-center gap-2"
                >
                  Plan Your Visit
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* RIGHT - Prize Image */}
            <div>
              <div className="bg-white p-8 md:p-10 border border-neutral-200">
                <Image
                  src="/vizio-tv.png"
                  alt="VIZIO 55 inch QLED Smart TV"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-auto"
                />
                <div className="mt-6 pt-6 border-t border-neutral-200 text-sm text-neutral-600">
                  <p className="font-serif text-lg text-neutral-900 mb-2">VIZIO 55" QLED</p>
                  <p>4K Ultra HD • Smart TV • 300+ Free Channels</p>
                  <p className="mt-2 text-neutral-500">Approximate retail value: $400</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
