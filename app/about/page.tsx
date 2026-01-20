import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Title */}
        <section className="border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">
              About Us
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              More than just an antique mall—we're a community of collectors, vendors, and treasure hunters who believe the past has stories worth preserving.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="border-b border-neutral-200 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-8">
              Where the Past Meets the Present
            </h2>
            <div className="space-y-6 text-neutral-700 text-lg leading-relaxed">
              <p>
                Antiques in Moore has been a destination for vintage finds and antique treasures in the Oklahoma City metro area. Located in Moore, we bring together dozens of independent vendors under one roof, each specializing in different eras, styles, and collectibles.
              </p>
              <p>
                From mid-century furniture to vintage jewelry, rare collectibles to everyday treasures, our vendors curate their spaces with care. Every booth tells a story, and every visit brings new discoveries.
              </p>
              <p>
                We believe antiques aren't just objects—they're connections to the past, conversations between generations, and pieces of history you can hold in your hands.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vendors */}
        <section className="border-b border-neutral-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-8">
              Our Vendors
            </h2>
            <div className="space-y-6 text-neutral-700 text-lg leading-relaxed">
              <p>
                Antiques in Moore is home to dozens of independent vendors, each bringing their own expertise and passion to the marketplace.
              </p>
              <p>
                Our vendors are collectors, antique dealers, and enthusiasts who have spent years (sometimes decades) building their knowledge and inventory. They restock frequently, attend estate sales, and travel to find the best pieces for their booths.
              </p>
              <p>
                Whether you're looking for a specific era, hunting for rare collectibles, or just browsing for inspiration, our vendors are here to help. Many are on-site during weekend hours and happy to share the stories behind their finds.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="border-b border-neutral-200 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-8">
              What Makes Us Different
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="font-serif text-xl text-neutral-900 mb-3">
                  Curated Selection
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Our vendors are selective. You won't find garage sale castoffs—just quality antiques, vintage pieces, and genuine collectibles.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-neutral-900 mb-3">
                  Always Changing
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  New items arrive weekly. Regular visitors know that every trip brings fresh finds you haven't seen before.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-neutral-900 mb-3">
                  Community Events
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  From seasonal pop-up markets to special giveaways, we bring the community together beyond regular weekend hours.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-neutral-900 mb-3">
                  Local & Accessible
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Conveniently located off I-35 in Moore with plenty of parking and a climate-controlled space.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
