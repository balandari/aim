import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function VisitPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Title */}
        <section className="border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">
              Plan Your Visit
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              We're open weekends with plenty of parking and easy access. Come spend a few hours browsing treasures from dozens of independent vendors.
            </p>
          </div>
        </section>

        {/* Hours & Location */}
        <section className="border-b border-neutral-200 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Hours */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-6">
                  Hours
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-neutral-200 pb-4">
                    <p className="text-neutral-500 text-sm uppercase tracking-wider mb-2">
                      Weekend
                    </p>
                    <p className="text-neutral-900 text-xl font-serif">
                      Saturday & Sunday
                    </p>
                    <p className="text-neutral-700 text-lg">9:00 AM – 5:00 PM</p>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm uppercase tracking-wider mb-2">
                      Weekdays
                    </p>
                    <p className="text-neutral-700 text-lg">Closed</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-6">
                  Location
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-neutral-900 text-xl font-serif mb-2">
                      825 NW 24th Street
                    </p>
                    <p className="text-neutral-700 text-lg">Moore, Oklahoma 73160</p>
                  </div>
                  <div className="pt-4">
                    <p className="text-neutral-600 leading-relaxed">
                      Located just off I-35, convenient to south Oklahoma City and the entire metro area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store Photo */}
        <section className="border-b border-neutral-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="space-y-8">
              <h2 className="font-serif text-2xl md:text-3xl text-neutral-900">
                Our Location
              </h2>
              <Image
                src="/store-exterior.png"
                alt="Antiques in Moore storefront at 825 NW 24th Street"
                width={1200}
                height={900}
                className="w-full h-auto border border-neutral-200"
              />
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-8">
              What to Expect
            </h2>
            <div className="space-y-6 text-neutral-700 text-lg leading-relaxed">
              <p>
                Antiques in Moore is a curated marketplace featuring dozens of independent vendors under one roof. Each vendor brings their own specialty—from furniture and jewelry to collectibles and home décor.
              </p>
              <p>
                Plan to spend at least an hour browsing. Our vendors restock frequently, so every visit brings new discoveries.
              </p>
              <p>
                Plenty of parking available. The space is climate-controlled and accessible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-neutral-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-8">
              Questions?
            </h2>
            <p className="text-neutral-700 text-lg leading-relaxed mb-6">
              Feel free to call Mike during business hours or stop by this weekend. We're happy to help you find what you're looking for.
            </p>
            <div className="space-y-2">
              <p className="text-neutral-600 text-sm uppercase tracking-wider">
                Phone
              </p>
              <p className="text-neutral-900 text-xl font-serif">
                (405) 623-8698
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
