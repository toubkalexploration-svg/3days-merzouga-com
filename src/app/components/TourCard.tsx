import Image from "next/image";
import Link from "next/link";
import type { Tour } from "../data/tours";

type TourCardProps = {
  tour: Tour;
  priority?: boolean;
};

export function TourCard({ tour, priority = false }: TourCardProps) {
  return (
    <article className="group mx-auto w-full max-w-sm overflow-hidden rounded-md border border-stone-200 bg-white shadow-[0_14px_42px_rgba(32,25,19,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(32,25,19,0.14)] lg:max-w-none">
      <div className="relative aspect-video overflow-hidden bg-[#f1dfbf]">
        <Image
          src={tour.cardImage}
          alt={`${tour.title} landscape and route`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#f1dfbf]">Merzouga specialist route</p>
        </div>
      </div>
      <div className="grid gap-3.5 p-4 sm:p-5">
        <div>
          <h3 className="text-base font-black uppercase leading-tight tracking-tight text-[#201913] sm:text-lg">{tour.title}</h3>
          <p className="mt-2 overflow-hidden text-sm leading-6 text-[#6d6256] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">{tour.summary}</p>
        </div>
        <ul className="hidden gap-2 text-xs font-bold leading-5 text-[#2f6b58] lg:grid">
          {tour.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b5532f]" />
              {highlight}
            </li>
          ))}
        </ul>
        <div className="grid gap-3 border-t border-stone-200 pt-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="grid gap-1 text-xs font-black text-[#201913] sm:text-sm">
            <span className="uppercase tracking-[0.12em] text-[#6d6256]">Duration: {tour.duration}</span>
            <span>Starts from <span className="text-lg text-[#b5532f]">&euro;{tour.startingPrice}</span></span>
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            className="inline-flex w-full items-center justify-center rounded-full bg-[#132028] px-4 py-2.5 text-xs font-black text-white transition hover:bg-[#b5532f] sm:w-auto sm:text-sm"
          >
            View detail
            <span aria-hidden="true" className="ml-2">-&gt;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}