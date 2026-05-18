"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { galleryImages } from "@/data/gallery";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

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
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={image.src} className="mb-4" style={{ breakInside: "avoid" }}>
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
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-350 ease-gentle flex items-end">
                <span className="px-4 py-3 text-white font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-350 ease-gentle">
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
