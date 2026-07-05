import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getVendor, getVendorItems } from "@/lib/vendors";
import { aimvendorsVendorUrl } from "@/lib/config";
import type { Item, ItemPhoto } from "@/lib/types";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const vendor = await getVendor(id);
  if (!vendor) return { title: "Vendor Not Found | Antiques in Moore" };

  return {
    title: `${vendor.display_name} | Antiques in Moore`,
    description: `Browse items from ${vendor.display_name}${vendor.booth_number ? ` (Booth ${vendor.booth_number})` : ""} at Antiques in Moore.`,
  };
}

export const revalidate = 300;

function getItemPrimaryPhoto(item: Item): string | null {
  if (item.item_photos && item.item_photos.length > 0) {
    const primary = item.item_photos.find((p: ItemPhoto) => p.is_primary);
    if (primary) return primary.photo_url;
    const sorted = [...item.item_photos].sort(
      (a: ItemPhoto, b: ItemPhoto) => a.display_order - b.display_order
    );
    return sorted[0].photo_url;
  }
  return item.photo_url;
}

export default async function VendorDetailPage({ params }: PageProps) {
  const { id } = await params;
  const vendor = await getVendor(id);

  if (!vendor) {
    notFound();
  }

  const items = await getVendorItems(id);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-950 pt-20 md:pt-24">
        {/* Back link */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8">
          <Link
            href="/vendors"
            className="inline-flex items-center gap-2 text-sm font-sans text-cream-200/60 hover:text-brass transition-colors duration-250"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Vendors
          </Link>
        </div>

        {/* Vendor header */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h1 className="font-display text-cream-50 text-4xl md:text-5xl mb-2">
              {vendor.display_name}
            </h1>
            {vendor.booth_number && (
              <p className="text-cream-200/60 font-sans text-lg">
                Booth {vendor.booth_number}
              </p>
            )}
            <p className="mt-3 text-brass/80 font-sans text-sm">
              {items.length} {items.length === 1 ? "item" : "items"} available
            </p>
            {/* Handoff CTA: AIMVendors owns fresh item browsing */}
            <a
              href={aimvendorsVendorUrl(id)}
              className="mt-6 inline-flex items-center gap-2 rounded-sm border border-brass/40 bg-brass/10 px-5 py-2.5 font-sans text-sm font-semibold text-brass hover:bg-brass/20 hover:border-brass/60 transition-colors duration-250"
            >
              Browse the full collection on AIM Vendors
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            {/* Divider */}
            <div className="mt-8 flex items-center gap-3">
              <span className="block w-12 h-px bg-brass/40" />
              <span className="block w-1.5 h-1.5 rounded-full bg-brass/60" />
              <span className="block w-12 h-px bg-brass/40" />
            </div>
          </div>
        </section>

        {/* Items grid */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            {items.length === 0 ? (
              <p className="text-center text-cream-200/60 font-sans text-lg py-12">
                No items currently available from this vendor.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {items.map((item) => {
                  const photo = getItemPrimaryPhoto(item);
                  return (
                    <a
                      key={item.id}
                      href={aimvendorsVendorUrl(id)}
                      className="group block bg-stone-900/60 border border-stone-800 rounded-sm overflow-hidden shadow-lg shadow-black/20 hover:border-brass/30 hover:shadow-xl transition-all duration-250"
                    >
                      {/* Photo */}
                      <div className="relative aspect-square bg-stone-800 overflow-hidden">
                        {photo ? (
                          <Image
                            src={photo}
                            alt={item.title || "Item photo"}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-350 ease-gentle"
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                              className="w-10 h-10 text-stone-700"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-3 md:p-4">
                        {item.title && (
                          <h3 className="font-serif text-cream-50 text-sm md:text-base leading-tight mb-1 group-hover:text-brass transition-colors duration-250 line-clamp-2">
                            {item.title}
                          </h3>
                        )}
                        {item.price && (
                          <p className="text-brass font-sans font-semibold text-sm">
                            ${item.price}
                          </p>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
