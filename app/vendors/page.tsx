import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getVendors } from "@/lib/vendors";

export const metadata: Metadata = {
  title: "Our Vendors | Antiques in Moore",
  description:
    "Browse vendors at Antiques in Moore. Discover unique antiques, vintage collectibles, and treasures from our talented vendors in Moore, Oklahoma.",
};

export const revalidate = 300; // Revalidate every 5 minutes

export default async function VendorsPage() {
  const vendors = await getVendors();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-950 pt-20 md:pt-24">
        {/* Page header */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
            <p className="text-brass text-xs font-sans font-semibold tracking-[0.25em] uppercase mb-4">
              Browse Our Collection
            </p>
            <h1 className="font-display text-cream-50 text-4xl md:text-5xl mb-4">
              Our Vendors
            </h1>
            <p className="text-cream-200/90 font-sans text-lg leading-relaxed max-w-2xl mx-auto">
              Each vendor brings their own unique eye for treasures. Browse their
              collections and find something that speaks to you.
            </p>
            {/* Ornamental divider */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="block w-12 h-px bg-brass/40" />
              <span className="block w-1.5 h-1.5 rounded-full bg-brass/60" />
              <span className="block w-12 h-px bg-brass/40" />
            </div>
          </div>
        </section>

        {/* Vendor grid */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            {vendors.length === 0 ? (
              <p className="text-center text-cream-200/60 font-sans text-lg">
                No vendors with active items at the moment. Check back soon!
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {vendors.map((vendor) => (
                  <Link
                    key={vendor.id}
                    href={`/vendors/${vendor.id}`}
                    className="group block bg-stone-900/60 border border-stone-800 rounded-sm overflow-hidden shadow-lg shadow-black/20 hover:border-brass/30 hover:shadow-xl transition-all duration-250"
                  >
                    {/* Preview image */}
                    <div className="relative aspect-[4/3] bg-stone-800 overflow-hidden">
                      {vendor.preview_photo ? (
                        <Image
                          src={vendor.preview_photo}
                          alt={`Items from ${vendor.display_name}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-350 ease-gentle"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-stone-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Card content */}
                    <div className="p-5 md:p-6">
                      <h2 className="font-serif text-cream-50 text-xl mb-1 group-hover:text-brass transition-colors duration-250">
                        {vendor.display_name}
                      </h2>
                      <div className="flex items-center gap-3 text-sm font-sans">
                        {vendor.booth_number && (
                          <span className="text-cream-200/60">
                            Booth {vendor.booth_number}
                          </span>
                        )}
                        <span className="text-brass/80">
                          {vendor.item_count}{" "}
                          {vendor.item_count === 1 ? "item" : "items"}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
