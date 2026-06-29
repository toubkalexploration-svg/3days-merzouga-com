"use client";

import Image from "next/image";
import { useState } from "react";

type TourImageSliderProps = {
  title: string;
  images: string[];
};

export function TourImageSlider({ title, images }: TourImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  function goToPrevious() {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function goToNext() {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  if (!activeImage) {
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative overflow-hidden rounded-lg bg-[#f1dfbf] shadow-[0_24px_80px_rgba(32,25,19,0.16)] ring-1 ring-white/80">
        <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src={activeImage}
            alt={`${title} image ${activeIndex + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-4 text-white sm:p-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e8b86f]">Tour gallery</p>
              <p className="mt-1 text-sm font-bold text-white/85">
                {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-black/25 text-lg font-black transition hover:bg-white hover:text-[#201913]"
                aria-label="Previous image"
              >
                &lt;
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-black/25 text-lg font-black transition hover:bg-white hover:text-[#201913]"
                aria-label="Next image"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 sm:flex sm:flex-wrap">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-[4/3] overflow-hidden rounded-md border-2 bg-[#f1dfbf] shadow-sm transition sm:h-20 sm:w-28 ${
              index === activeIndex ? "border-[#b5532f] opacity-100 shadow-[0_10px_24px_rgba(181,83,47,0.18)]" : "border-white opacity-75 hover:opacity-100"
            }`}
            aria-label={`Show image ${index + 1}`}
          >
            <Image src={image} alt="" fill sizes="112px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
