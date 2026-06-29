export type PriceTier = {
  minPeople: number;
  maxPeople?: number;
  pricePerPerson: number;
};

export type Tour = {
  slug: string;
  title: string;
  shortTitle: string;
  duration: string;
  startingPrice: number;
  heroImage: string;
  cardImage: string;
  gallery: string[];
  summary: string;
  positioning: string;
  route: string[];
  highlights: string[];
  itinerary: {
    day: string;
    title: string;
    description: string;
    stops: string[];
  }[];
  included: string[];
  excluded: string[];
  priceTiers: PriceTier[];
  faqs: {
    question: string;
    answer: string;
  }[];
  seo: {
    title: string;
    description: string;
  };
};

const commonIncluded = [
  "Air-conditioned transportation from Marrakech and back",
  "Professional local driver experienced with desert roads",
  "Breakfasts and dinners during overnight stays",
  "Desert camp accommodation in Merzouga",
  "Hotel or kasbah accommodation during the journey",
  "Guided visits and scenic stops throughout the route",
];

const commonExcluded = [
  "Lunches and drinks",
  "Personal expenses and travel insurance",
  "Optional quad biking, buggy rides, or extra 4x4 dune activities",
  "Entrance fees or local guides requested outside the planned program",
];

const commonFaqs = [
  {
    question: "Can this Merzouga desert tour be private?",
    answer:
      "Yes. Every itinerary can be arranged privately with flexible stops, pickup time, accommodation level, and pace for couples, families, or small groups.",
  },
  {
    question: "Can you adapt the itinerary?",
    answer:
      "Yes. We can adjust stops, add extra time in Dades Valley or Merzouga, upgrade the desert camp, or create a custom route around your flights and hotel plans.",
  },
  {
    question: "What should I pack for the desert?",
    answer:
      "Bring comfortable walking shoes, sunglasses, sunscreen, a warm layer for the evening, a small overnight bag for camp, and any personal medication you need.",
  },
];

export const tours: Tour[] = [
  {
    slug: "3-day-marrakech-to-fes-desert-tour",
    title: "3-Day Marrakech to Fes Desert Tour",
    shortTitle: "Marrakech to Fes Tour",
    duration: "3 days / 2 nights",
    startingPrice: 135,
    heroImage:
      "https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=1800&q=82",
    cardImage:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=1000&q=78",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=78",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1000&q=78",
    ],
    summary:
      "A complete 3-day Marrakech to Fes desert tour via Merzouga, with Ait Ben Haddou, Dades Valley, Todra Gorge, Erg Chebbi camel trekking, and a Sahara camp night.",
    positioning:
      "Best for travelers who want to travel from Marrakech to Fes through the Sahara Desert instead of returning by the same road.",
    route: ["Marrakech", "Ait Ben Haddou", "Dades Valley", "Todra Gorge", "Merzouga", "Fes"],
    highlights: [
      "Cross the High Atlas Mountains by the Tizi n'Tichka Pass",
      "Visit Ait Ben Haddou and Ouarzazate on the road south",
      "Sleep one night in Dades Valley and one night in a Berber desert camp",
      "Ride camels across the Erg Chebbi dunes at sunset",
      "Continue through Ziz Valley, Midelt, Ifrane, and the Middle Atlas to Fes",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Marrakech to Dades Valley",
        description:
          "Your 3-Day Marrakech to Fes Desert Tour begins with pickup from your hotel or riad in Marrakech. Travel through the High Atlas Mountains via the famous Tizi n'Tichka Pass, passing traditional Amazigh villages and enjoying mountain scenery along the way. Visit the UNESCO World Heritage Site of Ait Ben Haddou, then continue to Ouarzazate for a smart cultural stop at Taourirt Kasbah before crossing the Valley of Roses toward Dades Valley. Upon arrival, enjoy a light walk near the river and the Dades Gorges in the evening before dinner and a comfortable hotel night. Driving time is approximately 7 hours.",
        stops: ["Marrakech", "Tizi n'Tichka Pass", "Ait Ben Haddou", "Taourirt Kasbah", "Dades Gorges"],
      },
      {
        day: "Day 2",
        title: "Dades Valley to Merzouga and Erg Chebbi",
        description:
          "After breakfast in Dades Valley, follow the road toward Todra Gorge with several relaxed stops between Dades and Merzouga for mint tea, photos, local shopping if you are interested, and simple feet-stretching breaks along the desert route. Take time for a walk inside Todra Gorge, where dramatic limestone cliffs rise above the riverbed, then continue through oasis towns toward Merzouga. In the late afternoon, begin your camel trek across the Erg Chebbi dunes, watch sunset over the Sahara, and reach your Berber desert camp for dinner, local music, and a night beneath the stars. Driving time is approximately 5 hours.",
        stops: ["Dades Valley", "Todra Gorge walk", "Desert route stops", "Merzouga", "Erg Chebbi camp"],
      },
      {
        day: "Day 3",
        title: "Merzouga to Fes",
        description:
          "Wake early to witness sunrise over the Sahara Desert, then ride your camel back to Merzouga for breakfast. Continue through the lush Ziz Valley, cross the Middle Atlas Mountains, stop in Midelt, and pass cedar forests where Barbary macaques can often be seen. Before arriving in Fes, visit Ifrane, known for its alpine-style architecture. The tour ends in the late afternoon with drop-off at your accommodation in Fes. Driving time is approximately 7-8 hours.",
        stops: ["Merzouga", "Ziz Valley", "Midelt", "Cedar Forest", "Ifrane", "Fes"],
      },
    ],
    included: [
      "Hotel or riad pickup in Marrakech",
      "Comfortable air-conditioned vehicle",
      "Professional English-speaking driver",
      "Camel trek across the Erg Chebbi dunes",
      "1 night in a hotel in Dades Valley",
      "1 night in a traditional Berber desert camp",
      "Breakfasts and dinners",
      "Drop-off at your accommodation in Fes",
    ],
    excluded: commonExcluded,
    priceTiers: [
      { minPeople: 1, maxPeople: 1, pricePerPerson: 430 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 275 },
      { minPeople: 3, maxPeople: 4, pricePerPerson: 185 },
      { minPeople: 5, pricePerPerson: 135 },
    ],
    faqs: [
      {
        question: "Does this tour end in Fes?",
        answer:
          "Yes. This tour starts with pickup in Marrakech and finishes with drop-off at your accommodation in Fes, making it ideal for travelers continuing north after the Sahara.",
      },
      {
        question: "Is the camel trek included?",
        answer:
          "Yes. The camel trek across the Erg Chebbi dunes is included, with sunset on the dunes and one night in a traditional Berber desert camp.",
      },
      {
        question: "How much driving is involved on this Marrakech to Fes desert tour?",
        answer:
          "Expect long but scenic travel days. The route is designed with mountain viewpoints, kasbahs, Dades Valley, Todra Gorge, Ziz Valley, and short comfort stops to break up the road time.",
      },
      ...commonFaqs,
    ],
    seo: {
      title: "3-Day Marrakech to Fes Desert Tour via Merzouga",
      description:
        "Book a 3-day Marrakech to Fes desert tour via Merzouga, Ait Ben Haddou, Dades Valley, Todra Gorge, Erg Chebbi camel trek, and Sahara desert camp.",
    },
  },
  {
    slug: "3-day-marrakech-to-merzouga-desert-tour",
    title: "3-Day Marrakech to Merzouga Desert Tour",
    shortTitle: "3-Day Merzouga Tour",
    duration: "3 days / 2 nights",
    startingPrice: 115,
    heroImage:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1800&q=82",
    cardImage:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1000&q=78",
      "https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=1000&q=78",
      "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1000&q=78",
    ],
    summary:
      "Our classic 3-day Marrakech to Merzouga desert tour with Dades Valley, Todra Gorge, Erg Chebbi camel trekking, and a Sahara camp night.",
    positioning:
      "The best first Merzouga tour from Marrakech for travelers who want the full Sahara Desert experience in three carefully organized days.",
    route: ["Marrakech", "Ait Ben Haddou", "Dades Valley", "Todra Gorge", "Merzouga", "Draa Valley"],
    highlights: [
      "Visit Ait Ben Haddou and Ouarzazate on the way south",
      "Sleep in Dades Valley before crossing Todra Gorge",
      "Ride camels at sunset in Erg Chebbi",
      "Spend the night in a Merzouga desert camp",
      "Return through oasis landscapes and the Draa Valley",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Marrakech to Dades Valley",
        description:
          "Start your 3-day Marrakech to Merzouga desert tour by crossing the High Atlas Mountains and the Tizi n'Tichka road toward Ait Ben Haddou. After the kasbah visit, continue to Ouarzazate for Taourirt Kasbah, one of the most important historic stops on the route, then travel through palm valleys and the Valley of Roses. Arrive in Dades Valley in time for a light walk near the river and Dades Gorges before dinner at your hotel or kasbah.",
        stops: ["High Atlas", "Ait Ben Haddou", "Taourirt Kasbah", "Dades Valley", "Dades Gorges"],
      },
      {
        day: "Day 2",
        title: "Dades Valley to Merzouga",
        description:
          "Leave Dades Valley after breakfast and follow the classic road to Merzouga with comfortable stops for tea, photos, local shopping when desired, and short breaks to stretch before the desert. Walk through Todra Gorge near Tinghir, then continue through Erfoud and the pre-Sahara landscapes to Merzouga. Your Erg Chebbi camel trek begins in the late afternoon, followed by sunset dunes, dinner, and a night in the Merzouga desert camp.",
        stops: ["Dades Valley", "Todra Gorge walk", "Tinghir", "Erfoud", "Erg Chebbi"],
      },
      {
        day: "Day 3",
        title: "Merzouga to Marrakech",
        description:
          "Wake for sunrise over the dunes, return from camp, then cross the pre-Sahara and Atlas Mountains back to Marrakech with scenic stops along the way.",
        stops: ["Merzouga", "Rissani", "Draa Valley", "Marrakech"],
      },
    ],
    included: commonIncluded,
    excluded: commonExcluded,
    priceTiers: [
      { minPeople: 1, maxPeople: 1, pricePerPerson: 390 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 245 },
      { minPeople: 3, maxPeople: 4, pricePerPerson: 165 },
      { minPeople: 5, pricePerPerson: 115 },
    ],
    faqs: [
      {
        question: "Is three days enough for Merzouga from Marrakech?",
        answer:
          "Yes. Three days is the classic route for travelers who want Erg Chebbi dunes, Dades Valley, Todra Gorge, and a real desert camp without adding extra nights.",
      },
      {
        question: "Does this 3-day Merzouga tour return to Marrakech?",
        answer:
          "Yes. This itinerary starts in Marrakech and returns to Marrakech on day three, usually through pre-Sahara valleys, oasis landscapes, and the High Atlas road.",
      },
      {
        question: "Can I upgrade the Merzouga desert camp?",
        answer:
          "Yes. Standard and upgraded camp options can be arranged depending on availability, including more comfortable tents and private bathroom options when requested in advance.",
      },
      ...commonFaqs,
    ],
    seo: {
      title: "3-Day Marrakech to Merzouga Desert Tour",
      description:
        "Book the specialist 3-day Marrakech to Merzouga desert tour with Dades Valley, Todra Gorge, Erg Chebbi camel trekking, Sahara camp, and private options.",
    },
  },
  {
    slug: "4-day-marrakech-to-merzouga-desert-tour",
    title: "4-Day Marrakech to Merzouga Desert Tour",
    shortTitle: "4-Day Merzouga Adventure",
    duration: "4 days / 3 nights",
    startingPrice: 185,
    heroImage:
      "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1800&q=82",
    cardImage:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1000&q=78",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1000&q=78",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=78",
    ],
    summary:
      "A slower 4-day Marrakech to Merzouga desert adventure with more time for valleys, gorges, desert culture, sunrise dunes, and relaxed private pacing.",
    positioning:
      "Best for travelers who want the Marrakech to Merzouga route to feel immersive rather than rushed, with more time in the Sahara and southern valleys.",
    route: ["Marrakech", "Skoura", "Dades Valley", "Todra Gorge", "Merzouga", "Ouarzazate"],
    highlights: [
      "A calmer four-day pace with richer stops",
      "Explore Dades Valley, Todra Gorge, and Erg Chebbi",
      "Optional desert discovery around Merzouga",
      "More comfortable timing for families and photographers",
      "Private upgrades and custom accommodation available",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Marrakech to Dades Valley",
        description:
          "Cross the Atlas Mountains from Marrakech and visit Ait Ben Haddou before continuing to Ouarzazate for Taourirt Kasbah, a key heritage stop on many Morocco desert tours. Continue through Skoura, palm groves, and the Valley of Roses toward Dades Valley. After arrival, enjoy a gentle walk near the river and the Dades Gorges in the evening, then settle in for dinner and overnight in Dades Valley.",
        stops: ["Ait Ben Haddou", "Taourirt Kasbah", "Skoura", "Dades Valley", "Dades Gorges"],
      },
      {
        day: "Day 2",
        title: "Dades Valley to Merzouga camp",
        description:
          "Travel from Dades Valley toward Merzouga at a comfortable pace, with stops for tea, viewpoints, optional local shopping, and short breaks that make the desert road easier. Walk inside Todra Gorge before continuing through oasis towns, Erfoud, and the desert gateway villages. Reach Merzouga for camel trekking, sunset in Erg Chebbi, dinner, and a desert camp night.",
        stops: ["Dades Valley", "Todra Gorge walk", "Erfoud", "Merzouga", "Desert camp"],
      },
      {
        day: "Day 3",
        title: "Merzouga desert discovery",
        description:
          "Spend a deeper day around Merzouga with optional visits to Khamlia, nomad tracks, Rissani, palm groves, or relaxed time near the dunes.",
        stops: ["Khamlia", "Rissani", "Erg Chebbi", "Merzouga"],
      },
      {
        day: "Day 4",
        title: "Merzouga to Marrakech",
        description:
          "Return through pre-Sahara valleys, Ouarzazate, and the High Atlas road, with stops chosen around the pace of your group.",
        stops: ["Draa Valley", "Ouarzazate", "High Atlas", "Marrakech"],
      },
    ],
    included: commonIncluded,
    excluded: commonExcluded,
    priceTiers: [
      { minPeople: 1, maxPeople: 1, pricePerPerson: 520 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 335 },
      { minPeople: 3, maxPeople: 4, pricePerPerson: 245 },
      { minPeople: 5, pricePerPerson: 185 },
    ],
    faqs: [
      {
        question: "Why choose four days instead of three?",
        answer:
          "Four days reduces the rush, gives more space for Dades Valley, Todra Gorge, and Merzouga, and works especially well for private tours and families.",
      },
      {
        question: "What happens on the Merzouga desert discovery day?",
        answer:
          "The extra desert day can include Khamlia village, Rissani, nomad-area tracks, palm groves, relaxed dune time, or optional adventure activities depending on your interests.",
      },
      {
        question: "Is this 4-day tour better for families?",
        answer:
          "Yes. The slower pace helps families, photographers, and travelers who want fewer rushed transitions between the Atlas Mountains, valleys, gorges, and desert camp.",
      },
      ...commonFaqs,
    ],
    seo: {
      title: "4-Day Marrakech to Merzouga Desert Tour",
      description:
        "Book a premium 4-day Merzouga desert adventure from Marrakech with Dades Valley, Todra Gorge, Erg Chebbi camp, desert discovery, and private tour options.",
    },
  },
];

export const siteUrl = "https://3days-merzouga.com";

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function getPriceForGroup(tour: Tour, people: number) {
  const tier = tour.priceTiers.find(
    (priceTier) =>
      people >= priceTier.minPeople &&
      (priceTier.maxPeople === undefined || people <= priceTier.maxPeople),
  );

  return tier ?? tour.priceTiers[tour.priceTiers.length - 1];
}
