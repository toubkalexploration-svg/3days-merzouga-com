// Lightweight geography + approximate driving distances for the tour route maps.
// Coordinates are real (lat/lng); distances are approximate road kilometers.

export const placeCoordinates: Record<string, { lat: number; lng: number }> = {
  Marrakech: { lat: 31.63, lng: -7.99 },
  "Ait Ben Haddou": { lat: 31.05, lng: -7.13 },
  Ouarzazate: { lat: 30.92, lng: -6.89 },
  Skoura: { lat: 31.06, lng: -6.55 },
  "Dades Valley": { lat: 31.36, lng: -5.99 },
  "Todra Gorge": { lat: 31.51, lng: -5.53 },
  Merzouga: { lat: 31.1, lng: -4.01 },
  "Draa Valley": { lat: 30.7, lng: -6.45 },
  Fes: { lat: 34.04, lng: -5.0 },
};

// Approximate driving distances (km) between consecutive stops, keys sorted alphabetically.
const roadDistances: Record<string, number> = {
  "Ait Ben Haddou|Dades Valley": 145,
  "Ait Ben Haddou|Marrakech": 190,
  "Ait Ben Haddou|Ouarzazate": 30,
  "Dades Valley|Skoura": 95,
  "Dades Valley|Ouarzazate": 115,
  "Dades Valley|Todra Gorge": 55,
  "Merzouga|Todra Gorge": 200,
  "Fes|Merzouga": 470,
  "Draa Valley|Merzouga": 265,
  "Merzouga|Ouarzazate": 360,
  "Marrakech|Skoura": 235,
  "Marrakech|Ouarzazate": 200,
};

// Fixed map bounds covering southern/central Morocco used by every tour.
const bounds = { latMin: 30.5, latMax: 34.3, lngMin: -8.25, lngMax: -3.55 };

function haversineKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const earthRadius = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 + Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  return 2 * earthRadius * Math.asin(Math.sqrt(h));
}

export function roadDistanceKm(from: string, to: string) {
  const key = [from, to].sort().join("|");
  if (roadDistances[key] !== undefined) {
    return roadDistances[key];
  }
  const a = placeCoordinates[from];
  const b = placeCoordinates[to];
  if (!a || !b) {
    return 0;
  }
  // Fallback: straight-line distance with a road-winding factor, rounded to 5 km.
  return Math.round((haversineKm(a, b) * 1.3) / 5) * 5;
}

export type RoutePoint = {
  name: string;
  nx: number; // normalized 0..1 horizontal (west -> east)
  ny: number; // normalized 0..1 vertical (north -> south)
  legKm: number; // driving distance from the previous stop
  cumulativeKm: number; // driving distance from Marrakech along the route
};

export function getRouteGeometry(route: string[]): {
  points: RoutePoint[];
  totalKm: number;
} {
  let cumulative = 0;
  const points = route.map((name, index) => {
    const coordinates = placeCoordinates[name] ?? placeCoordinates.Marrakech;
    const legKm = index === 0 ? 0 : roadDistanceKm(route[index - 1], name);
    cumulative += legKm;
    return {
      name,
      nx: (coordinates.lng - bounds.lngMin) / (bounds.lngMax - bounds.lngMin),
      ny: (bounds.latMax - coordinates.lat) / (bounds.latMax - bounds.latMin),
      legKm,
      cumulativeKm: cumulative,
    };
  });

  return { points, totalKm: cumulative };
}
