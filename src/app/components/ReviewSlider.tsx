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
      <figure className="overflow-hidden rounded-md border border-stone-200 bg-white shadow-[0_18px_55px_rgba(32,25,19,0.08)]">
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-start">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-[#132028] text-xl font-black text-[#e8b86f]">
            {String(activeIndex + 1).padStart(2, "0")}
          </div>
          <div>
            <div className="text-sm font-black tracking-[0.22em] text-[#b8793c]" aria-label="5 star review">
              *****
            </div>
            <blockquote className="mt-4 text-lg font-black leading-8 text-slate-950 sm:text-xl sm:leading-9">
              &ldquo;{activeReview.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-stone-200 pt-5">
              <strong className="block text-slate-950">{activeReview.name}</strong>
              <span className="text-sm font-bold text-slate-800">{activeReview.meta}</span>
            </figcaption>
          </div>
        </div>
      </figure>
      <div className="mt-5 flex items-center justify-center gap-3" aria-label="Review slides">
        <button
          type="button"
          onClick={showPreviousReview}
          className="grid h-8 w-8 place-items-center rounded-full border border-stone-300 bg-white text-sm font-black text-slate-950 transition hover:border-[#b8793c] hover:bg-white hover:text-[#b8793c]"
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
                index === activeIndex ? "w-8 bg-[#b8793c]" : "w-2.5 bg-stone-300 hover:bg-stone-400"
              }`}
              aria-label={`Show review from ${review.name}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={showNextReview}
          className="grid h-8 w-8 place-items-center rounded-full border border-stone-300 bg-white text-sm font-black text-slate-950 transition hover:border-[#b8793c] hover:bg-white hover:text-[#b8793c]"
          aria-label="Next review"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
