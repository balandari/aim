"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Header with Navigation */}
      <header className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="font-serif text-neutral-800 text-2xl md:text-3xl lg:text-4xl font-normal">
                Antiques in Moore
              </h1>
              <p className="text-neutral-600 text-sm md:text-base mt-2">
                Moore, Oklahoma's destination for vintage finds and antique treasures
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-6 md:gap-8 text-sm">
              <a href="/events" className="text-neutral-700 hover:text-neutral-900 transition-colors">
                Events
              </a>
              <a href="/visit" className="text-neutral-700 hover:text-neutral-900 transition-colors">
                Visit
              </a>
              <a href="/about" className="text-neutral-700 hover:text-neutral-900 transition-colors">
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

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

            {/* RIGHT - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-neutral-100 aspect-[4/3] flex items-center justify-center">
                <p className="text-neutral-400 text-sm">[Store photo coming soon]</p>
              </div>
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
                  Drawing
                </h3>
                <p className="text-2xl font-serif text-neutral-900">Noon</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Stop by our booth to receive a complimentary entry. Winner will be contacted by phone or email.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    document
                      .getElementById("email-collection")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 text-sm tracking-wide uppercase transition-colors inline-flex items-center gap-2"
                >
                  Enter Online
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
                </button>
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

      {/* Email Collection Section */}
      <section id="email-collection" className="relative bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-neutral-900">
                Enter the giveaway online
              </h2>
              <p className="text-neutral-600 text-base md:text-lg max-w-2xl mx-auto">
                Can't make it to the March 7th event? Enter online for your chance to win the VIZIO 55" Smart TV.
              </p>
            </div>

            {/* Typeform Embed */}
            <div className="max-w-xl mx-auto">
              <div className="bg-neutral-50 border border-neutral-200 rounded p-8 md:p-10">
                {/* Typeform embed will go here */}
                <div className="space-y-6">
                  <div className="text-left space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-900">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-neutral-300 rounded text-base focus:outline-none focus:border-neutral-900 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="text-left space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-900">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-neutral-300 rounded text-base focus:outline-none focus:border-neutral-900 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="text-left space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900">
                      Phone Number <span className="text-neutral-500 font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-neutral-300 rounded text-base focus:outline-none focus:border-neutral-900 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-8 py-4 text-base uppercase tracking-wide transition-colors"
                  >
                    Submit Entry
                  </button>

                  <p className="text-xs text-neutral-500 leading-relaxed">
                    One entry per person. Must be 18 or older. Winner will be announced March 7th at noon. No purchase necessary.
                  </p>
                </div>
              </div>

              {/* Trust Signal */}
              <p className="text-sm text-neutral-500 mt-6">
                Your information will only be used to contact the winner. We respect your privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Location */}
      <footer className="border-t border-neutral-200 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-neutral-900 text-lg md:text-xl font-semibold mb-1">825 NW 24th Street</p>
          <p className="text-neutral-600 text-base">Moore, Oklahoma</p>
        </div>
      </footer>
    </div>
  );
}
