"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryImages } from "@/data/gallery";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});
import "yet-another-react-lightbox/styles.css";

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
        <rect x="4" y="0" width="5.66" height="5.66" rx="0.5" transform="rotate(45 4 4)" />
      </svg>
      <div className="w-8 h-px bg-brass/40" />
    </div>
  );
}

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = galleryImages.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  function handleImageClick(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  return (
    <>
      <Header />
      <main className="bg-stone-950 min-h-screen pt-20">
        {/* Page heading */}
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
              Step inside 8,000 square feet of curated finds. From vintage
              jewelry and mid-century furniture to rare collectibles and fine
              art, every visit reveals something new.
            </p>
          </div>
        </section>

        {/* Masonry grid */}
        <section className="pb-16 md:pb-22 lg:pb-26">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image.src}
                  className="mb-4"
                  style={{ breakInside: "avoid" }}
                >
                  <button
                    type="button"
                    onClick={() => handleImageClick(index)}
                    className="group relative block w-full overflow-hidden rounded-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 focus:ring-offset-stone-950"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="w-full h-auto transition-transform duration-350 ease-gentle group-hover:scale-[1.03]"
                    />
                    {/* Hover overlay — uses black so it works in both themes */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-350 ease-gentle flex items-end">
                      <span className="px-4 py-3 text-white font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-350 ease-gentle">
                        {image.caption}
                      </span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={slides}
        />
      </main>
      <Footer />
    </>
  );
}
