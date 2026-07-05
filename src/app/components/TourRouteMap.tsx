import { getRouteGeometry } from "../data/routeGeo";

type TourRouteMapProps = {
  route: string[];
  duration: string;
  overnightStops?: string[];
};

const WIDTH = 800;
const HEIGHT = 540;
const PAD_X = 96;
const PAD_Y = 76;

function project(nx: number, ny: number) {
  return {
    x: PAD_X + nx * (WIDTH - PAD_X * 2),
    y: PAD_Y + ny * (HEIGHT - PAD_Y * 2),
  };
}

export function TourRouteMap({ route, duration, overnightStops = [] }: TourRouteMapProps) {
  const { points, totalKm } = getRouteGeometry(route);
  const overnightSet = new Set(overnightStops);
  const positioned = points.map((point) => ({ ...point, ...project(point.nx, point.ny) }));
  const linePath = positioned
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");

  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-stone-100 px-5 py-4 sm:px-6">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b5532f]">Route map</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] font-bold text-[#6d6256]">
          <span>From Marrakech</span>
          <span className="text-stone-300">|</span>
          <span>&asymp; {totalKm} km total</span>
          <span className="text-stone-300">|</span>
          <span>{positioned.length} pauses</span>
          <span className="text-stone-300">|</span>
          <span>{duration}</span>
        </div>
      </div>

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-auto w-full"
        role="img"
        aria-label={`Route map from Marrakech through ${route.join(", ")}`}
      >
        {/* soft desert backdrop */}
        <rect x="0" y="0" width={WIDTH} height={HEIGHT} fill="#fdfaf4" />
        <g stroke="#efe6d3" strokeWidth="1.5" fill="none" opacity="0.7">
          <path d="M40 150 C 220 110, 360 190, 560 140 S 760 180, 780 150" />
          <path d="M20 300 C 200 260, 380 340, 580 290 S 760 330, 790 300" />
          <path d="M40 430 C 220 390, 360 470, 560 420 S 760 460, 780 430" />
        </g>
        <g stroke="#f2ead9" strokeWidth="1" opacity="0.8">
          {[160, 320, 480, 640].map((x) => (
            <line key={`v${x}`} x1={x} y1="24" x2={x} y2={HEIGHT - 24} />
          ))}
          {[130, 270, 410].map((y) => (
            <line key={`h${y}`} x1="24" y1={y} x2={WIDTH - 24} y2={y} />
          ))}
        </g>

        {/* compass */}
        <g transform={`translate(${WIDTH - 58} 58)`}>
          <circle r="20" fill="#ffffff" stroke="#e7dcc6" strokeWidth="1.5" />
          <path d="M0 -14 L5 2 L0 -3 L-5 2 Z" fill="#b5532f" />
          <text x="0" y="17" textAnchor="middle" fontSize="9" fontWeight="800" fill="#6d6256">
            N
          </text>
        </g>

        {/* route line: soft underlay + dashed brand line */}
        <path d={linePath} fill="none" stroke="#e8c9b6" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d={linePath}
          fill="none"
          stroke="#b5532f"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1 9"
        />

        {/* stops and labels */}
        {positioned.map((point, index) => {
          const isStart = index === 0;
          const isEnd = index === positioned.length - 1;
          const labelBelow = point.y < 130 ? true : point.y > 430 ? false : index % 2 === 0;
          const labelY = labelBelow ? point.y + 26 : point.y - 30;
          const subY = labelBelow ? labelY + 15 : labelY + 15;

          return (
            <g key={point.name}>
              {isStart ? (
                <g>
                  <circle cx={point.x} cy={point.y} r="9" fill="#132028" />
                  <circle cx={point.x} cy={point.y} r="3.4" fill="#ffffff" />
                </g>
              ) : isEnd ? (
                <g>
                  <circle cx={point.x} cy={point.y} r="8" fill="#b5532f" />
                  <circle cx={point.x} cy={point.y} r="3" fill="#ffffff" />
                </g>
              ) : (
                <circle cx={point.x} cy={point.y} r="6" fill="#ffffff" stroke="#b5532f" strokeWidth="2.4" />
              )}

              <text
                x={point.x}
                y={labelY}
                textAnchor="middle"
                fontSize="15"
                fontWeight="800"
                fill="#201913"
              >
                {point.name}
              </text>
              <text x={point.x} y={subY} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#9a8b78">
                {isStart ? "Start" : `${point.cumulativeKm} km`}
              </text>

              {overnightSet.has(point.name) ? (
                <g transform={`translate(${point.x} ${point.y - 18})`}>
                  <circle r="9.5" fill="#ffffff" stroke="#d9c39e" strokeWidth="1.5" />
                  <path
                    d="M2.6 -4.4 A5 5 0 1 0 2.6 4.4 A3.6 3.6 0 1 1 2.6 -4.4 Z"
                    fill="#132028"
                  />
                </g>
              ) : null}
            </g>
          );
        })}
      </svg>

      <div className="flex items-center gap-2 border-t border-stone-100 px-5 py-3 sm:px-6">
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="#ffffff" stroke="#d9c39e" strokeWidth="1.6" />
          <path d="M13.4 6.8 A6.4 6.4 0 1 0 13.4 17.2 A4.7 4.7 0 1 1 13.4 6.8 Z" fill="#132028" />
        </svg>
        <span className="text-[11px] font-bold text-[#6d6256]">Moon marks an overnight stay</span>
      </div>
    </div>
  );
}
