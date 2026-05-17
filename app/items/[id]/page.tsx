import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/inquiry/InquiryForm";
import { getItem } from "@/lib/vendors";
import type { ItemPhoto } from "@/lib/types";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const item = await getItem(id);
  if (!item) return { title: "Item Not Found | Antiques in Moore" };

  const title = item.title || "Item";
  return {
    title: `${title} | ${item.vendors.display_name} | Antiques in Moore`,
    description: item.description
      ? item.description.slice(0, 160)
      : `${title} from ${item.vendors.display_name} at Antiques in Moore.`,
  };
}

export const revalidate = 300;

function getOrderedPhotos(
  item: { item_photos: ItemPhoto[]; photo_url: string | null }
): string[] {
  if (item.item_photos && item.item_photos.length > 0) {
    const sorted = [...item.item_photos].sort((a, b) => {
      // Primary first, then by display_order
      if (a.is_primary && !b.is_primary) return -1;
      if (!a.is_primary && b.is_primary) return 1;
      return a.display_order - b.display_order;
    });
    return sorted.map((p) => p.photo_url);
  }
  // Fall back to legacy photo_url
  if (item.photo_url) return [item.photo_url];
  return [];
}

export default async function ItemDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    notFound();
  }

  const photos = getOrderedPhotos(item);
  const vendor = item.vendors;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-950 pt-20 md:pt-24">
        {/* Back link */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8">
          <Link
            href={`/vendors/${vendor.id}`}
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
            Back to {vendor.display_name}
          </Link>
        </div>

        <section className="py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Photos */}
              <div>
                {photos.length > 0 ? (
                  <div className="space-y-3">
                    {/* Main photo */}
                    <div className="relative aspect-square bg-stone-800 rounded-sm overflow-hidden border border-stone-800">
                      <Image
                        src={photos[0]}
                        alt={item.title || "Item photo"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    </div>

                    {/* Thumbnail row */}
                    {photos.length > 1 && (
                      <div className="grid grid-cols-4 gap-2">
                        {photos.slice(1, 5).map((photo, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-square bg-stone-800 rounded-sm overflow-hidden border border-stone-800"
                          >
                            <Image
                              src={photo}
                              alt={`${item.title || "Item"} photo ${idx + 2}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 25vw, 12vw"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="aspect-square bg-stone-800 rounded-sm flex items-center justify-center border border-stone-800">
                    <svg
                      className="w-16 h-16 text-stone-700"
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

              {/* Item details */}
              <div>
                {item.title && (
                  <h1 className="font-display text-cream-50 text-3xl md:text-4xl mb-3">
                    {item.title}
                  </h1>
                )}

                {item.price && (
                  <p className="text-brass font-sans font-semibold text-2xl mb-6">
                    ${item.price}
                  </p>
                )}

                {item.is_sold && (
                  <div className="inline-block bg-earth/20 border border-earth/40 rounded-sm px-3 py-1.5 mb-6">
                    <span className="text-earth-light font-sans font-semibold text-sm uppercase tracking-wider">
                      Sold
                    </span>
                  </div>
                )}

                {item.description && (
                  <div className="mb-8">
                    <p className="text-cream-200/90 font-sans text-base leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                )}

                {/* Vendor info */}
                <div className="mb-8 p-4 bg-stone-900/40 border border-stone-800 rounded-sm">
                  <p className="text-cream-200/60 font-sans text-xs uppercase tracking-wider mb-1">
                    Vendor
                  </p>
                  <Link
                    href={`/vendors/${vendor.id}`}
                    className="font-serif text-cream-50 text-lg hover:text-brass transition-colors duration-250"
                  >
                    {vendor.display_name}
                  </Link>
                  {vendor.booth_number && (
                    <p className="text-cream-200/50 font-sans text-sm mt-0.5">
                      Booth {vendor.booth_number}
                    </p>
                  )}
                </div>

                {/* Inquiry form */}
                {vendor.allow_inquiries && !item.is_sold && (
                  <InquiryForm
                    itemId={item.id}
                    vendorName={vendor.display_name}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
