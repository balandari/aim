"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { galleryImages } from "@/data/gallery";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

const highlightLayouts = [
  "sm:col-span-2 lg:col-span-7 aspect-[4/3] lg:aspect-[7/5]",
  "lg:col-span-5 aspect-square",
  "lg:col-span-4 aspect-square",
  "lg:col-span-4 aspect-square",
  "lg:col-span-4 aspect-square",
  "lg:col-span-5 aspect-square",
  "sm:col-span-2 lg:col-span-7 aspect-[7/5]",
  "lg:col-span-6 aspect-[4/3]",
  "lg:col-span-6 aspect-[4/3]",
] as const;

export default function StoreHighlights() {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
        {galleryImages.map((image, index) => (
          <div
            key={image.src}
            className={highlightLayouts[index] ?? "lg:col-span-4 aspect-square"}
          >
            <button
              type="button"
              onClick={() => handleImageClick(index)}
              className="group relative block w-full h-full overflow-hidden rounded-sm border border-stone-800 bg-stone-900 shadow-lg shadow-black/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 focus:ring-offset-stone-950"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                className="object-cover transition-transform duration-350 ease-gentle group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-350 ease-gentle flex items-end">
                <span className="px-4 py-3 text-cream-50 font-sans text-sm tracking-wide translate-y-1 group-hover:translate-y-0 transition-transform duration-350 ease-gentle">
                  {image.caption}
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </>
  );
}
