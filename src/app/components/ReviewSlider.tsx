"use client";

import { useCallback, useEffect, useState } from "react";

export type Review = {
  quote: string;
  name: string;
  meta: string;
};

type ReviewSliderProps = {
  reviews: Review[];
};

export function ReviewSlider({ reviews }: ReviewSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPreviousReview = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));
  }, [reviews.length]);

  const showNextReview = useCallback(() => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (reviews.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      showNextReview();
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [reviews.length, showNextReview]);

  if (reviews.length === 0) {
    return null;
  }

  const activeReview = reviews[activeIndex];

  return (
    <div className="mt-10 mx-auto max-w-4xl">
      <figure className="overflow-hidden rounded-md border border-stone-200 bg-[#fbf7ef] shadow-[0_18px_55px_rgba(32,25,19,0.08)]">
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-start">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-[#132028] text-xl font-black text-[#e8b86f]">
            {String(activeIndex + 1).padStart(2, "0")}
          </div>
          <div>
            <div className="text-sm font-black tracking-[0.22em] text-[#b5532f]" aria-label="5 star review">
              *****
            </div>
            <blockquote className="mt-4 text-lg font-black leading-8 text-[#201913] sm:text-xl sm:leading-9">
              &ldquo;{activeReview.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-stone-200 pt-5">
              <strong className="block text-[#201913]">{activeReview.name}</strong>
              <span className="text-sm font-bold text-[#6d6256]">{activeReview.meta}</span>
            </figcaption>
          </div>
        </div>
      </figure>
      <div className="mt-5 flex items-center justify-center gap-3" aria-label="Review slides">
        <button
          type="button"
          onClick={showPreviousReview}
          className="grid h-8 w-8 place-items-center rounded-full border border-stone-300 bg-white text-sm font-black text-[#201913] transition hover:border-[#b5532f] hover:bg-[#fbf7ef] hover:text-[#b5532f]"
          aria-label="Previous review"
        >
          &lt;
        </button>
        <div className="flex items-center gap-2">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition ${
                index === activeIndex ? "w-8 bg-[#b5532f]" : "w-2.5 bg-stone-300 hover:bg-stone-400"
              }`}
              aria-label={`Show review from ${review.name}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={showNextReview}
          className="grid h-8 w-8 place-items-center rounded-full border border-stone-300 bg-white text-sm font-black text-[#201913] transition hover:border-[#b5532f] hover:bg-[#fbf7ef] hover:text-[#b5532f]"
          aria-label="Next review"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
