import Image from "next/image";
import Link from "next/link";
import type { Tour } from "../data/tours";

type TourCardProps = {
  tour: Tour;
  priority?: boolean;
  sizes?: string;
};

export function TourCard({
  tour,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw",
}: TourCardProps) {
  return (
    <article className="group mx-auto flex h-full w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md lg:max-w-none">
      <div className="flex min-h-full w-full flex-col">
        <div className="relative aspect-video overflow-hidden bg-slate-100">
          <Image
            src={tour.cardImage}
            alt={`${tour.title} landscape and desert route`}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 rounded-full bg-brand-slate/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-sm">
            {tour.duration}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full border border-orange-200/70 bg-orange-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-900">
              Merzouga route
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
              Private tour
            </span>
          </div>

          <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-brand-terracotta">
            <Link href={`/tours/${tour.slug}`}>
              {tour.title}
            </Link>
          </h3>
          <p className="mb-4 flex-1 overflow-hidden text-sm leading-relaxed text-slate-700 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
            {tour.summary}
          </p>

          <div className="mb-4 border-t border-slate-100 pt-4">
            <ul className="space-y-1.5 text-xs text-slate-600">
              {tour.route.slice(0, 3).map((stop) => (
                <li key={stop} className="flex items-start gap-1.5">
                  <span className="mt-0.5 font-bold text-brand-terracotta">&bull;</span>
                  <span className="line-clamp-1">{stop}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                Starting from
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-brand-slate">&euro;{tour.startingPrice}</span>
                <span className="text-xs font-semibold uppercase text-slate-600">/ person</span>
              </div>
              <span className="block text-[11px] text-slate-500">
                {tour.startingPriceCondition}
              </span>
            </div>
            <Link
              href={`/tours/${tour.slug}`}
              className="inline-flex items-center justify-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 transition-all duration-200 hover:border-brand-terracotta hover:bg-brand-terracotta hover:text-white"
            >
              <span>View tour</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
