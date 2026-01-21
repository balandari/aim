import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Title */}
        <section className="border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">
              Events
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              From seasonal pop-up markets to special giveaways, our events bring the community together to discover unique finds and celebrate the stories behind them.
            </p>
          </div>
        </section>

        {/* Featured Event - March 7 Giveaway */}
        <section className="border-b border-neutral-200 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <span className="inline-block text-primary text-xs md:text-sm font-bold tracking-[0.15em] uppercase mb-3">
              Upcoming Event
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-6">
              Outdoor Pop Up Market
            </h2>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Event Details */}
              <div className="space-y-6">
                <div className="space-y-4 text-neutral-700 text-base md:text-lg leading-relaxed">
                  <p>
                    Join us Friday, March 7th for our first outdoor market of the season. Browse vendor booths, discover unique finds, and enjoy the return of spring weather.
                  </p>
                  <p className="text-neutral-900 font-serif text-xl md:text-2xl italic">
                    One visitor will take home a 55" VIZIO Smart TV.
                  </p>
                </div>

                <div className="space-y-6 pt-4">
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
                </div>

                <div className="pt-4">
                  <Link
                    href="/visit"
                    className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 text-sm tracking-wide uppercase transition-colors"
                  >
                    Plan Your Visit
                    <svg
                      className="w-4 h-4"
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
                  </Link>
                </div>
              </div>

              {/* Prize Image */}
              <div className="bg-white p-8 md:p-10 border border-neutral-200">
                <Image
                  src="/vizio-tv.png"
                  alt="VIZIO 55 inch QLED Smart TV"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="mt-6 pt-6 border-t border-neutral-200 text-sm text-neutral-600">
                  <p className="font-serif text-lg text-neutral-900 mb-2">VIZIO 55" QLED</p>
                  <p>4K Ultra HD • Smart TV • 300+ Free Channels</p>
                  <p className="mt-2 text-neutral-500">Approximate retail value: $400</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Events */}
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-8">
              More Events Coming Soon
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              We host events a few times per year, from seasonal markets to special promotions. Check back here or follow us to stay updated on upcoming events.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
