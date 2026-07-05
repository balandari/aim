import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreHighlights from "@/components/gallery/StoreHighlights";
import { getGalleryPhotos } from "@/lib/vendors";
import { aimvendorsVendorUrl } from "@/lib/config";
import type { GalleryPhoto } from "@/lib/types";
import "yet-another-react-lightbox/styles.css";

export const metadata: Metadata = {
  title: "Gallery | Vendor Finds & Store Highlights | Antiques in Moore",
  description:
    "Browse vendor-uploaded finds and curated store highlights from Antiques in Moore in Moore, Oklahoma.",
};

export const revalidate = 300;

function SectionOrnament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-8 h-px bg-brass/40" />
      <svg
        className="w-2 h-2 text-brass/60"
        viewBox="0 0 8 8"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="0"
          width="5.66"
          height="5.66"
          rx="0.5"
          transform="rotate(45 4 4)"
        />
      </svg>
      <div className="w-8 h-px bg-brass/40" />
    </div>
  );
}

function formatPrice(price: string) {
  return price.trim().startsWith("$") ? price.trim() : `$${price.trim()}`;
}

function GalleryCard({ photo }: { photo: GalleryPhoto }) {
  const formattedPrice = photo.price?.trim() ? formatPrice(photo.price) : null;
  const hasTitle = Boolean(photo.item_title?.trim());
  // Show the vendor name exactly once: as the heading when the item is
  // untitled, otherwise as the meta line beneath the title.
  const heading = hasTitle ? photo.item_title!.trim() : photo.vendor_name;

  return (
    <a
      href={aimvendorsVendorUrl(photo.vendor_id)}
      className="group block bg-stone-900/60 border border-stone-800 rounded-sm overflow-hidden shadow-lg shadow-black/20 hover:border-brass/30 hover:shadow-xl transition-all duration-250"
    >
      {/* always-dark pins the overlay to a dark scrim + light text regardless of
          the page theme (globals.css) -- without it, light theme inverts the
          tokens and the overlay text washes out over the photo. */}
      <div className="always-dark relative aspect-[4/5] bg-stone-800 overflow-hidden">
        <Image
          src={photo.photo_url}
          alt={heading}
          fill
          className="object-cover transition-transform duration-350 ease-gentle group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Readability scrim: dark near the text, fading up over the photo */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-stone-950 via-stone-950/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="font-serif text-cream-50 text-lg leading-tight line-clamp-2 group-hover:text-brass transition-colors duration-250">
            {heading}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-sans">
            {hasTitle && (
              <span className="text-cream-100/90">{photo.vendor_name}</span>
            )}
            {formattedPrice && (
              <span className="text-brass font-semibold">{formattedPrice}</span>
            )}
          </div>
          <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-[0.15em] text-brass/90 group-hover:text-brass transition-colors duration-250">
            Browse latest items
            <svg
              className="h-3.5 w-3.5"
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
          </span>
        </div>
      </div>
    </a>
  );
}

export default async function GalleryPage() {
  const vendorPhotos = await getGalleryPhotos();

  return (
    <>
      <Header />
      <main className="bg-stone-950 min-h-screen pt-20">
        <section className="pt-12 pb-8 md:pt-18 md:pb-12">
          <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
            <span className="text-brass text-xs font-sans font-semibold tracking-[0.25em] uppercase">
              Browse Our Collection
            </span>
            <h1 className="mt-4 font-display text-cream-50 text-3xl md:text-4xl lg:text-5xl text-balance tracking-wide">
              Discover the Collection
            </h1>
            <SectionOrnament className="mt-5 justify-center" />
            <p className="mt-6 max-w-2xl mx-auto text-cream-300/80 font-sans text-lg leading-relaxed">
              Explore fresh vendor finds alongside curated scenes from the store.
              New treasures appear as vendors add photos from their booths.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-22">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-8 md:mb-10">
              <p className="text-brass text-xs font-sans font-semibold tracking-[0.25em] uppercase">
                Fresh Finds
              </p>
              <h2 className="mt-3 font-display text-cream-50 text-3xl md:text-4xl tracking-wide">
                Vendor Showcase
              </h2>
              <p className="mt-3 max-w-2xl text-cream-300/75 font-sans text-base leading-relaxed">
                Recently posted vendor item photos. Tap any piece to browse that
                vendor&apos;s full collection on AIM Vendors.
              </p>
            </div>

            {vendorPhotos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                {vendorPhotos.map((photo) => (
                  <GalleryCard key={`${photo.item_id}-${photo.photo_url}`} photo={photo} />
                ))}
              </div>
            ) : (
              <div className="bg-stone-900/50 border border-brass/15 rounded-sm p-6 md:p-8">
                <p className="text-cream-300/80 font-sans text-base leading-relaxed">
                  Vendor photos are not available right now, but the curated
                  store highlights below are ready to browse.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="pb-16 md:pb-22 lg:pb-26">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-8 md:mb-10">
              <p className="text-brass text-xs font-sans font-semibold tracking-[0.25em] uppercase">
                Around the Store
              </p>
              <h2 className="mt-3 font-display text-cream-50 text-3xl md:text-4xl tracking-wide">
                Store Highlights
              </h2>
              <p className="mt-3 max-w-2xl text-cream-300/75 font-sans text-base leading-relaxed">
                A curated look at the aisles, displays, and details that make
                Antiques in Moore worth wandering.
              </p>
            </div>

            <StoreHighlights />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
