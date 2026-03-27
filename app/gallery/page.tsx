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
      <main className="bg-cream min-h-screen">
        {/* Page heading */}
        <section className="pt-12 pb-8 md:pt-18 md:pb-12">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <span className="text-earth text-xs font-sans font-semibold tracking-[0.2em] uppercase">
              Browse Our Collection
            </span>
            <h1 className="mt-3 font-display text-stone-900 text-3xl md:text-4xl lg:text-5xl text-balance">
              Discover the Collection
            </h1>
            <p className="mt-4 max-w-2xl text-stone-600 font-sans text-lg leading-relaxed">
              Step inside 8,000 square feet of curated finds. From vintage jewelry and
              mid-century furniture to rare collectibles and fine art, every visit reveals
              something new.
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
                    className="group relative block w-full overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-earth focus:ring-offset-2 focus:ring-offset-cream"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="w-full h-auto transition-transform duration-350 ease-gentle group-hover:scale-[1.03]"
                    />
                    {/* Hover overlay with caption */}
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-350 ease-gentle flex items-end">
                      <span className="px-4 py-3 text-cream-50 font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-350 ease-gentle">
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
