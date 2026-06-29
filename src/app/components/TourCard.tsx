import Image from "next/image";
import Link from "next/link";
import type { Tour } from "../data/tours";

type TourCardProps = {
  tour: Tour;
  priority?: boolean;
};

export function TourCard({ tour, priority = false }: TourCardProps) {
  const routePreview = tour.route.slice(0, 3).join(" to ");

  return (
    <article className="group mx-auto flex h-full w-full max-w-sm overflow-hidden rounded-lg border border-stone-200/80 bg-white/95 shadow-[0_18px_55px_rgba(32,25,19,0.08)] ring-1 ring-white/80 transition duration-300 hover:-translate-y-1.5 hover:border-[#d8b778] hover:shadow-[0_30px_80px_rgba(32,25,19,0.16)] lg:max-w-none">
      <div className="flex min-h-full w-full flex-col">
        <div className="relative aspect-[5/4] overflow-hidden bg-[#f1dfbf] sm:aspect-[16/12]">
          <Image
            src={tour.cardImage}
            alt={`${tour.title} landscape and route`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,32,40,0.1),rgba(19,32,40,0.04)_34%,rgba(19,32,40,0.86))]" />
          <div className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#b5532f] shadow-[0_8px_24px_rgba(32,25,19,0.16)] backdrop-blur">
            Merzouga route
          </div>
          <div className="absolute right-3 top-3 rounded-full bg-[#132028]/88 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-[0_8px_24px_rgba(32,25,19,0.16)] backdrop-blur">
            {tour.duration}
          </div>
          <div className="absolute bottom-4 right-4 rounded-md border border-white/18 bg-[#132028]/82 px-3 py-2 text-right text-white shadow-[0_12px_30px_rgba(0,0,0,0.26)] backdrop-blur-md">
            <p className="text-[9px] font-black uppercase tracking-[0.14em] text-white/58">From</p>
            <p className="mt-0.5 text-lg font-black leading-none text-[#e8b86f]">&euro;{tour.startingPrice}</p>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 pr-24">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#f1dfbf]">{routePreview}</p>
            <h3 className="mt-2 text-xl font-black uppercase leading-[1.05] tracking-tight text-white drop-shadow sm:text-2xl">
              {tour.shortTitle}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="grid gap-3">
            <div className="flex flex-wrap gap-2">
              {tour.route.slice(0, 4).map((stop) => (
                <span key={stop} className="rounded-full bg-[#fbf7ef] px-2.5 py-1 text-[11px] font-black text-[#6d6256] ring-1 ring-stone-200/80">
                  {stop}
                </span>
              ))}
            </div>
            <div>
              <h3 className="text-base font-black uppercase leading-tight tracking-tight text-[#201913] sm:text-lg">{tour.title}</h3>
              <p className="mt-2 overflow-hidden text-sm leading-6 text-[#6d6256] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">{tour.summary}</p>
            </div>
          </div>

          <div className="mt-auto pt-4">
            <div className="grid grid-cols-2 overflow-hidden rounded-lg border border-stone-200 bg-[#fffaf3]">
              <div className="border-r border-stone-200 p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#6d6256]">Duration</p>
                <p className="mt-1 text-sm font-black text-[#201913]">{tour.duration}</p>
              </div>
              <div className="p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#6d6256]">Style</p>
                <p className="mt-1 text-sm font-black text-[#201913]">Private / shared</p>
              </div>
            </div>

            <Link
              href={`/tours/${tour.slug}`}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#132028] px-5 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(19,32,40,0.18)] transition hover:bg-[#b5532f] hover:shadow-[0_16px_34px_rgba(181,83,47,0.28)] focus:outline-none focus:ring-2 focus:ring-[#b5532f] focus:ring-offset-2"
            >
              View tour
              <span aria-hidden="true" className="ml-2">-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
