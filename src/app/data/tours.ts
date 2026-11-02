import { contactEmail, contactPhoneDisplay } from "./contact";
import { photos, siteUrl, type SiteImage } from "./site";

export type PriceTier = {
  minPeople: number;
  maxPeople?: number;
  pricePerPerson: number;
};

export type TourStatus = "published" | "draft";

export type FaqItem = {
  question: string;
  answer: string;
  link?: {
    href: string;
    label: string;
  };
};

export type Tour = {
  slug: string;
  status: TourStatus;
  title: string;
  shortTitle: string;
  duration: string;
  durationDays: number;
  durationNights: number;
  departureCity: string;
  endingCity: string;
  tripType: "round-trip" | "one-way";
  tourType: "private" | "shared" | "both";
  startingPrice: number;
  /** Human-readable condition for the "From" price, e.g. "based on 5 or more travelers" */
  startingPriceCondition: string;
  heroImage: string;
  cardImage: string;
  gallery: SiteImage[];
  summary: string;
  positioning: string;
  bestFor: string[];
  route: string[];
  overnightStops: string[];
  highlights: string[];
  /** Quick-fact summary displayed at the top of the tour page */
  quickFacts: {
    start: string;
    finish: string;
    totalDistanceKm: string;
    longestDrivingDay: string;
    availability: string;
    accommodationNights: string;
    campCategories: string;
    mealsIncluded: string;
    majorExclusions: string;
    returnTime: string;
    customizable: boolean;
  };
  experience: {
    heading: string;
    body: string[];
  }[];
  itinerary: {
    day: string;
    title: string;
    description: string;
    stops: string[];
    drivingTime?: string;
  }[];
  included: string[];
  excluded: string[];
  priceTiers: PriceTier[];
  /** Tour-specific FAQs only (6–10 questions). General booking FAQs live on /faq. */
  faqs: FaqItem[];
  /** Slugs of related tours for cross-linking */
  relatedTourSlugs: string[];
  seo: {
    title: string;
    description: string;
  };
};

// ---------------------------------------------------------------------------
// Shared included / excluded lists
// ---------------------------------------------------------------------------

const commonIncluded = [
  "Air-conditioned transportation from Marrakech and back",
  "Professional local driver experienced with desert roads",
  "Breakfasts and dinners during overnight stays",
  "Desert camp accommodation in Merzouga",
  "Hotel or kasbah accommodation during the journey",
  "Scenic stops and photo opportunities throughout the route",
];

const commonExcluded = [
  "Lunches and drinks",
  "Personal expenses and travel insurance",
  "Optional quad biking, buggy rides, or extra 4x4 dune activities",
  "Local monument guides or entrance fees at Ait Ben Haddou and other sites (available on request)",
];

// ---------------------------------------------------------------------------
// Shared general FAQs — used on /faq page only, NOT injected into tour pages
// ---------------------------------------------------------------------------

export const sharedFaqs: FaqItem[] = [
  {
    question: "What types of Morocco desert tours do you offer?",
    answer:
      "We focus on Marrakech to Merzouga desert tours, including 3-day Sahara routes, Marrakech to Fes desert crossings, and a slower 4-day Erg Chebbi itinerary. Every tour is private, with a dedicated vehicle for your group.",
  },
  {
    question: "How many people can join a tour?",
    answer:
      "We can arrange tours for solo travelers, couples, families, friends, and larger private groups. Vehicle size and pricing depend on your group size, so share the number of travelers when you contact us.",
  },
  {
    question: "Are your desert tours suitable for children and families?",
    answer:
      "Yes. Families are welcome, and we can adjust the pace, stops, pickup time, and accommodation style around children. For younger children, the 4-day Merzouga tour is usually the most comfortable option because the driving is spread out.",
  },
  {
    question: "Is there a minimum number of participants?",
    answer:
      "Private tours can run for one traveler, subject to vehicle, accommodation, and camp availability for the requested date.",
  },
  {
    question: "Do you provide tours in different languages?",
    answer:
      "English and French are commonly available, and other languages may be possible on request. Tell us your preferred language early so we can match the right driver when available.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "Booking at least two weeks ahead is best, especially for spring, autumn, holidays, and luxury camp upgrades. Last-minute tours may still be possible if vehicles and camps are available.",
  },
  {
    question: "How do I book a Merzouga desert tour?",
    answer: `Send your preferred tour, travel date, group size, pickup location, and any special requests by email at ${contactEmail} or by phone/WhatsApp at ${contactPhoneDisplay}. We will confirm availability, price, and the best route before you reserve.`,
  },
  {
    question: "Can I reserve a specific travel date?",
    answer:
      "Yes. We organize tours around your preferred date when drivers, vehicles, and desert camp rooms are available. For peak dates, booking early gives you the best choice of camp category.",
  },
  {
    question: "Can I change my tour date after booking?",
    answer:
      "Date changes are often possible when requested early and when camps and vehicles are still available. Very late changes may depend on supplier rules, so contact us as soon as your plans shift.",
  },
  {
    question: "Do you offer discounts for groups?",
    answer:
      "Yes. Per-person pricing usually becomes lower as the group gets larger because transport costs are shared. Send your group size and route choice and we will prepare a clear quote.",
  },
  {
    question: "Is a deposit required to secure a reservation?",
    answer:
      "A deposit may be required to hold your vehicle, driver, and desert camp, especially during busy periods. We confirm the deposit amount and balance details before you book.",
  },
  {
    question: "Can I pay the remaining balance in cash?",
    answer:
      "Yes, cash balance payment is usually possible in Moroccan dirhams, euros, or US dollars. We will confirm the accepted currency and exact balance in your booking details.",
  },
  {
    question: "Do tours run during Ramadan?",
    answer:
      "Yes, desert tours can run during Ramadan. Some local services may adjust opening hours, but the main route, accommodation, meals, and camel trek can still be arranged. Let us know if you have timing or meal concerns.",
  },
  {
    question: "Do tours run during Eid holidays in Morocco?",
    answer:
      "Tours around Eid al-Fitr and Eid al-Adha depend on driver, camp, restaurant, and local service availability. If your dates fall close to a major holiday, contact us early so we can advise on the best plan.",
  },
  {
    question: "What types of desert camps are available in Merzouga?",
    answer:
      "Standard and upgraded desert camps can be arranged. Standard camps offer a traditional desert stay with comfortable bedding, while upgraded or luxury camps usually add larger tents, more privacy, and private bathroom options.",
  },
  {
    question: "Can I choose or upgrade my desert camp?",
    answer:
      "Yes. Tell us if you prefer a standard, upgraded, or luxury camp before booking. Upgrades depend on availability and may change the tour price.",
  },
  {
    question: "Can I book my own desert camp separately?",
    answer:
      "Yes, but please tell us before confirming the tour. We need to coordinate pickup, luggage, camel or 4x4 access, dinner timing, and the route so everything works smoothly.",
  },
  {
    question: "Are family tents available at the desert camp?",
    answer:
      "Family tents are often available on request, depending on the camp and date. Share your rooming preferences early so we can check the best option for your group.",
  },
  {
    question: "Do hotels and desert camps provide towels and toiletries?",
    answer:
      "Most hotels, riads, kasbahs, and upgraded camps provide towels and basic toiletries. For standard camps, we still recommend packing personal essentials and a small towel if you prefer to have your own.",
  },
  {
    question: "Where will I be picked up in Marrakech?",
    answer:
      "Pickup is normally from your hotel or riad when it is accessible by vehicle. If your riad is inside a pedestrian-only medina lane, we arrange a nearby meeting point that is easy to reach.",
  },
  {
    question: "Where will I be dropped off after the tour?",
    answer:
      "Drop-off is usually at your accommodation or the nearest accessible point. Some routes can also finish at an airport, train station, or another city such as Fes when arranged in advance.",
  },
  {
    question: "Will there be space for my luggage?",
    answer:
      "Yes, regular suitcases, backpacks, and carry-on bags can travel with you in the vehicle. For oversized luggage, sports equipment, or large camera cases, tell us before booking so we can plan the right vehicle.",
  },
  {
    question: "What time do tours usually return to Marrakech?",
    answer:
      "Return time depends on the route, stops, traffic, and season, but most Marrakech-return desert tours arrive in the evening, generally between 6 pm and 9 pm. Avoid booking a tight flight or train on the same night unless we have confirmed the timing with you in advance.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellation terms depend on the tour type, notice period, and supplier commitments already made for camps or hotels. We share the exact conditions before booking and encourage you to contact us early if your plans change.",
  },
  {
    question: "Are online payments secure?",
    answer:
      "When online payment is used, it is handled through secure payment methods rather than storing card details on our website. We confirm the payment link or method directly with you during booking.",
  },
  {
    question: "Can this Merzouga desert tour be private?",
    answer:
      "Yes. We operate private tours, with a dedicated vehicle and flexible stops, pickup time, accommodation level, and pace for solo travelers, couples, families, or groups.",
  },
  {
    question: "Can you adapt the itinerary?",
    answer:
      "Yes. We can adjust stops, add extra time in Dades Valley or Merzouga, upgrade the desert camp, or create a custom route around your flights and hotel plans.",
  },
  {
    question: "What should I pack for the desert?",
    answer:
      "Bring comfortable walking shoes, sunglasses, sunscreen, a warm layer for the evening, a small overnight bag for camp, and any personal medication you need. See our full packing guide for more detail.",
  },
];

// ---------------------------------------------------------------------------
// Published tours
// ---------------------------------------------------------------------------

export const tours: Tour[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. 3-Day Marrakech to Fes
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "3-day-marrakech-to-fes-desert-tour",
    status: "published",
    title: "3-Day Marrakech to Fes Desert Tour",
    shortTitle: "Marrakech to Fes Tour",
    duration: "3 days / 2 nights",
    durationDays: 3,
    durationNights: 2,
    departureCity: "Marrakech",
    endingCity: "Fes",
    tripType: "one-way",
    tourType: "private",
    startingPrice: 220,
    startingPriceCondition: "per person, based on 5 or more travelers",
    heroImage: photos.camelCaravanSunset.src,
    cardImage: photos.todraGorge.src,
    gallery: [photos.todraGorge],
    summary:
      "A complete 3-day Marrakech to Fes desert tour via Merzouga, with Ait Ben Haddou, Dades Valley, Todra Gorge, Erg Chebbi camel trekking, and a Sahara camp night.",
    positioning:
      "Best for travelers who want to travel from Marrakech to Fes through the Sahara Desert instead of returning by the same road.",
    bestFor: [
      "Travelers flying into Marrakech and out of Fes (or the reverse)",
      "Anyone who wants to see the Sahara without backtracking the same road twice",
      "First-time visitors combining Erg Chebbi with the imperial city of Fes",
      "Couples and small groups happy with two full travel days for big scenery",
    ],
    route: ["Marrakech", "Ait Ben Haddou", "Dades Valley", "Todra Gorge", "Merzouga", "Fes"],
    overnightStops: ["Dades Valley", "Merzouga"],
    highlights: [
      "Cross the High Atlas Mountains by the Tizi n'Tichka Pass",
      "Visit Ait Ben Haddou and Ouarzazate on the road south",
      "Sleep one night in Dades Valley and one night in a Berber desert camp",
      "Ride camels across the Erg Chebbi dunes at sunset",
      "Continue through Ziz Valley, Midelt, Ifrane, and the Middle Atlas to Fes",
    ],
    quickFacts: {
      start: "Marrakech (hotel or riad pickup)",
      finish: "Fes (hotel or riad drop-off)",
      totalDistanceKm: "Approximately 1,050–1,100 km over 3 days",
      longestDrivingDay: "Day 1 (Marrakech to Dades Valley, approx. 7 hrs) and Day 3 (Merzouga to Fes, approx. 7–8 hrs)",
      availability: "Private tour — dedicated vehicle for your group",
      accommodationNights: "1 night hotel or kasbah (Dades Valley), 1 night desert camp (Merzouga)",
      campCategories: "Standard or upgraded Berber desert camp (your choice at booking)",
      mealsIncluded: "2 breakfasts, 2 dinners (camp and hotel)",
      majorExclusions: "Lunches, drinks, entrance fees, optional activities, travel insurance",
      returnTime: "Late afternoon or early evening arrival in Fes on Day 3",
      customizable: true,
    },
    experience: [
      {
        heading: "Why finish in Fes instead of returning to Marrakech",
        body: [
          "The 3-day Marrakech to Fes desert tour is built around one simple advantage: you never drive the same road twice. Instead of looping back to Marrakech after the dunes, you keep heading north through the Ziz Valley and the Middle Atlas and finish in Fes. That turns what would be a there-and-back trip into a genuine south-to-north crossing of Morocco, and it saves you a full day compared with returning to Marrakech and then transferring to Fes separately.",
          "This works especially well if your flights are split — for example arriving in Marrakech and departing from Fes. You cover Ait Ben Haddou, the Dades Valley, Todra Gorge and Erg Chebbi in a single line, and you step out of the car in Fes ready for the medina rather than facing another long transfer.",
        ],
      },
      {
        heading: "Honest drive times and how the days feel",
        body: [
          "This is a real road-trip itinerary, so it helps to know the driving up front. Day one from Marrakech to the Dades Valley is roughly 7 hours of driving broken by the Tizi n'Tichka pass, Ait Ben Haddou, and Ouarzazate. Day two from Dades to Merzouga is around 5 hours with the Todra Gorge walk and tea stops in between. Day three from Merzouga to Fes is the longest at about 7 to 8 hours through the Ziz Valley, Midelt, the cedar forest and Ifrane.",
          "Because the scenery changes constantly and we stop for photos, viewpoints, mint tea and legs-stretching breaks, the hours pass more easily than the numbers suggest. Travelers who strongly dislike long driving days often prefer the slower 4-day Merzouga tour instead, which stays in Marrakech at the end.",
        ],
      },
      {
        heading: "The night in the Sahara at Erg Chebbi",
        body: [
          "The heart of the trip is the late-afternoon camel trek into the Erg Chebbi dunes. You ride out as the light turns gold, watch the sun set over the sand sea, and reach a Berber desert camp for dinner, drumming around the fire and a night under an unusually clear sky. In the morning you wake early for sunrise over the dunes before riding back to Merzouga for breakfast.",
          "If you would rather not ride a camel, we can arrange a 4x4 transfer to the camp instead. Standard or upgraded camp categories can be requested when you book.",
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Marrakech to Dades Valley",
        description:
          "Your 3-Day Marrakech to Fes Desert Tour begins with pickup from your hotel or riad in Marrakech. Travel through the High Atlas Mountains via the Tizi n'Tichka Pass, passing traditional Amazigh villages and mountain scenery. Visit the UNESCO World Heritage Site of Ait Ben Haddou, then continue to Ouarzazate for a stop at Taourirt Kasbah before crossing the Valley of Roses toward Dades Valley. Upon arrival, enjoy a light walk near the river and the Dades Gorges before dinner and overnight at your hotel or kasbah.",
        stops: ["Marrakech", "Tizi n'Tichka Pass", "Ait Ben Haddou", "Taourirt Kasbah", "Dades Gorges"],
        drivingTime: "Approximately 7 hours driving",
      },
      {
        day: "Day 2",
        title: "Dades Valley to Merzouga and Erg Chebbi",
        description:
          "After breakfast in Dades Valley, follow the road toward Todra Gorge with comfortable stops for mint tea, photos, and short breaks along the desert route. Take time for a walk inside Todra Gorge, where dramatic limestone cliffs rise above the riverbed, then continue through oasis towns toward Merzouga. In the late afternoon, begin your camel trek across the Erg Chebbi dunes, watch sunset over the Sahara, and reach your Berber desert camp for dinner, local music, and a night beneath the stars.",
        stops: ["Dades Valley", "Todra Gorge", "Desert route stops", "Merzouga", "Erg Chebbi camp"],
        drivingTime: "Approximately 5 hours driving",
      },
      {
        day: "Day 3",
        title: "Merzouga to Fes",
        description:
          "Wake early to witness sunrise over the Sahara Desert, then ride back to Merzouga for breakfast. Continue through the lush Ziz Valley, cross the Middle Atlas, stop in Midelt, and pass cedar forests where Barbary macaques can often be seen. Before arriving in Fes, pass through Ifrane, known for its alpine-style architecture. The tour ends in the late afternoon or early evening with drop-off at your accommodation in Fes. This is a long final day — plan to rest on arrival rather than rushing onward.",
        stops: ["Merzouga", "Ziz Valley", "Midelt", "Cedar Forest", "Ifrane", "Fes"],
        drivingTime: "Approximately 7–8 hours driving",
      },
    ],
    included: [
      "Hotel or riad pickup in Marrakech",
      "Comfortable air-conditioned vehicle",
      "Professional local driver",
      "Camel trek across the Erg Chebbi dunes",
      "1 night in a hotel or kasbah in Dades Valley",
      "1 night in a traditional Berber desert camp",
      "Breakfasts and dinners",
      "Drop-off at your accommodation in Fes",
    ],
    excluded: [
      ...commonExcluded,
      "Ticket to enter Ait Ben Haddou ksar (payable at the site)",
    ],
    priceTiers: [
      { minPeople: 1, maxPeople: 1, pricePerPerson: 515 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 360 },
      { minPeople: 3, maxPeople: 4, pricePerPerson: 270 },
      { minPeople: 5, pricePerPerson: 220 },
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
          "All three days involve significant driving: roughly 7 hours on Day 1, 5 hours on Day 2, and 7–8 hours on Day 3. The route is designed with viewpoints, kasbahs, Dades Valley, Todra Gorge, Ziz Valley, and short comfort stops to break up the road time, but this is genuinely an active road-trip itinerary.",
      },
      {
        question: "Can you drop me at my riad or the airport in Fes?",
        answer:
          "Yes. We drop you wherever suits your plans in Fes — whether that is a riad inside the medina, a hotel in the new town, or Fes-Saiss airport for an onward flight. Just share the address when you book.",
      },
      {
        question: "What time does the tour usually reach Fes on Day 3?",
        answer:
          "Most groups arrive in Fes in the late afternoon or early evening, depending on stops and the season. If you have an evening flight or dinner reservation, tell us in advance so we can plan the pace of the final day.",
      },
      {
        question: "Is the Marrakech to Fes route better than a return tour to Marrakech?",
        answer:
          "It depends on your flights. If you are leaving from Fes or continuing north to Chefchaouen, the one-way route saves a full backtracking day. If you must return to Marrakech, the classic 3-Day Marrakech to Merzouga Tour is the better fit.",
      },
      {
        question: "When is the best time of year for this desert crossing?",
        answer:
          "Spring (March to May) and autumn (September to November) are ideal, with warm days and comfortable desert nights. Summer is hot in the Sahara but still popular, and winter brings cold nights at camp and the chance of snow on the Middle Atlas near Ifrane.",
      },
      {
        question: "Is a local guide included at Ait Ben Haddou?",
        answer:
          "A local monument guide is not included in the standard tour price. Our driver will accompany you to the site, but a dedicated local guide for the ksar is optional and available for an additional fee. If you would like one arranged in advance, let us know when booking.",
      },
    ],
    relatedTourSlugs: [
      "3-day-marrakech-to-merzouga-desert-tour",
      "4-day-marrakech-to-merzouga-desert-tour",
    ],
    seo: {
      title: "3-Day Marrakech to Fes Desert Tour via Merzouga",
      description:
        "Book a 3-day Marrakech to Fes desert tour via Merzouga, Ait Ben Haddou, Dades Valley, Todra Gorge, Erg Chebbi camel trek, and Sahara desert camp.",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. 3-Day Marrakech to Merzouga (classic round trip)
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "3-day-marrakech-to-merzouga-desert-tour",
    status: "published",
    title: "3-Day Marrakech to Merzouga Desert Tour",
    shortTitle: "3-Day Merzouga Tour",
    duration: "3 days / 2 nights",
    durationDays: 3,
    durationNights: 2,
    departureCity: "Marrakech",
    endingCity: "Marrakech",
    tripType: "round-trip",
    tourType: "private",
    startingPrice: 200,
    startingPriceCondition: "per person, based on 5 or more travelers",
    heroImage: photos.camelCaravanSunset.src,
    cardImage: photos.travelerDunes.src,
    gallery: [photos.travelerDunes],
    summary:
      "Our classic 3-day Marrakech to Merzouga desert tour with Dades Valley, Todra Gorge, Erg Chebbi camel trekking, and a Sahara camp night.",
    positioning:
      "The best first Merzouga tour from Marrakech for travelers who want the full Sahara Desert experience in three carefully organized days.",
    bestFor: [
      "First-time visitors who want the classic Sahara loop from Marrakech",
      "Travelers on a tight schedule who still want a real desert-camp night",
      "Couples, friends and solo travelers who want a private vehicle and flexible pace",
      "Anyone returning to Marrakech for an onward flight or riad stay",
    ],
    route: ["Marrakech", "Ait Ben Haddou", "Dades Valley", "Todra Gorge", "Merzouga", "Marrakech"],
    overnightStops: ["Dades Valley", "Merzouga"],
    highlights: [
      "Visit Ait Ben Haddou and Ouarzazate on the way south",
      "Sleep in Dades Valley before crossing Todra Gorge",
      "Ride camels at sunset in Erg Chebbi",
      "Spend the night in a Merzouga desert camp",
      "Return to Marrakech through pre-Sahara landscapes",
    ],
    quickFacts: {
      start: "Marrakech (hotel or riad pickup)",
      finish: "Marrakech (hotel or riad drop-off)",
      totalDistanceKm: "Approximately 1,100–1,150 km round trip over 3 days",
      longestDrivingDay: "Day 3 (Merzouga to Marrakech, approx. 8–9 hrs) — plan a relaxed evening on return",
      availability: "Private tour — dedicated vehicle for your group",
      accommodationNights: "1 night hotel or kasbah (Dades Valley), 1 night desert camp (Merzouga)",
      campCategories: "Standard or upgraded Berber desert camp (your choice at booking)",
      mealsIncluded: "2 breakfasts, 2 dinners (camp and hotel)",
      majorExclusions: "Lunches, drinks, entrance fees, optional activities, travel insurance",
      returnTime: "Evening arrival in Marrakech on Day 3, typically between 6 pm and 9 pm",
      customizable: true,
    },
    experience: [
      {
        heading: "The most efficient way to reach Erg Chebbi from Marrakech",
        body: [
          "Merzouga sits roughly 560 km from Marrakech, and there is no shortcut across the mountains and pre-Sahara that makes it a day trip. Three days is the sweet spot: enough time to cross the High Atlas, see Ait Ben Haddou and the Dades Valley, walk in Todra Gorge, ride into the Erg Chebbi dunes and sleep in a desert camp, then return — without adding nights you may not have.",
          "This is the itinerary most first-time visitors are really looking for when they search for a Marrakech to Merzouga desert tour. It covers the landmark stops in a logical line and gets you to the big dunes — the ones that actually look like the Sahara from the photos — rather than the smaller dunes closer to Marrakech.",
        ],
      },
      {
        heading: "An honest look at the driving",
        body: [
          "Day one to the Dades Valley is the longest outbound push — roughly 7 hours of driving spread across the Tizi n'Tichka pass, Ait Ben Haddou and Ouarzazate. Day two to Merzouga is around 5 hours with the Todra Gorge walk in the middle. Day three back to Marrakech is another long day of about 8 to 9 hours, so plan a relaxed evening once you return rather than booking a tight flight or late activity.",
          "If the return-day drive sounds like too much, the 4-day Marrakech to Merzouga tour spreads the same route over an extra night and adds a full day in the desert. It is the better choice for families with young children and anyone who prefers a slower pace.",
        ],
      },
      {
        heading: "Camel trek, sunset and the desert camp",
        body: [
          "You reach Merzouga in the late afternoon of day two, which is exactly the right time to begin the camel trek. The ride into the dunes takes about an hour, timed so you are among the sand as the sun goes down. Dinner, Berber music and a sky full of stars follow at the camp, and you wake for sunrise before riding back.",
          "Camp comfort is flexible. A standard camp is more than enough for most travelers, while an upgraded or luxury camp adds better bedding, larger tents and private bathrooms. Tell us your preference and group size when you enquire and we will confirm what is available for your dates.",
        ],
      },
      {
        heading: "How private-tour pricing works",
        body: [
          "Prices on this page are per person and drop as your private group grows, because the vehicle and driver cost is divided among the people booking together. Two people pay more each than a private group of five.",
          "Every departure is private, giving your group its own vehicle, flexible pickup, customized stops, and freedom to adjust the pace. Send us your dates and group size and we will provide a clear quote before you commit.",
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Marrakech to Dades Valley",
        description:
          "Start your 3-day Marrakech to Merzouga desert tour by crossing the High Atlas Mountains and the Tizi n'Tichka road toward Ait Ben Haddou. After the kasbah visit, continue to Ouarzazate for Taourirt Kasbah, then travel through palm valleys and the Valley of Roses. Arrive in Dades Valley in time for a light walk near the river and Dades Gorges before dinner at your hotel or kasbah.",
        stops: ["High Atlas", "Ait Ben Haddou", "Taourirt Kasbah", "Dades Valley", "Dades Gorges"],
        drivingTime: "Approximately 7 hours driving",
      },
      {
        day: "Day 2",
        title: "Dades Valley to Merzouga",
        description:
          "Leave Dades Valley after breakfast and follow the classic road to Merzouga with comfortable stops for tea, photos, and short breaks before the desert. Walk through Todra Gorge near Tinghir, then continue through Erfoud and the pre-Sahara landscapes to Merzouga. Your Erg Chebbi camel trek begins in the late afternoon, followed by sunset dunes, dinner, and a night in the Merzouga desert camp.",
        stops: ["Dades Valley", "Todra Gorge", "Tinghir", "Erfoud", "Erg Chebbi"],
        drivingTime: "Approximately 5 hours driving",
      },
      {
        day: "Day 3",
        title: "Merzouga to Marrakech",
        description:
          "Wake for sunrise over the dunes, return from camp for breakfast, then begin the long return journey to Marrakech. The road crosses the pre-Sahara landscapes and High Atlas Mountains with scenic stops along the way. Expect to arrive in Marrakech in the evening — plan a relaxed night rather than a tight onward connection.",
        stops: ["Merzouga", "Rissani", "Pre-Sahara route", "High Atlas", "Marrakech"],
        drivingTime: "Approximately 8–9 hours driving",
      },
    ],
    included: commonIncluded,
    excluded: [
      ...commonExcluded,
      "Ticket to enter Ait Ben Haddou ksar (payable at the site)",
    ],
    priceTiers: [
      { minPeople: 1, maxPeople: 1, pricePerPerson: 475 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 330 },
      { minPeople: 3, maxPeople: 4, pricePerPerson: 250 },
      { minPeople: 5, pricePerPerson: 200 },
    ],
    faqs: [
      {
        question: "Is three days enough for Merzouga from Marrakech?",
        answer:
          "Yes. Three days is the classic route for travelers who want Erg Chebbi dunes, Dades Valley, Todra Gorge, and a real desert camp without adding extra nights. The driving days are long, particularly the return on Day 3 (around 8–9 hours), so plan a relaxed evening back in Marrakech.",
      },
      {
        question: "Does this 3-day Merzouga tour return to Marrakech?",
        answer:
          "Yes. This itinerary starts in Marrakech and returns to Marrakech on Day 3, usually through pre-Sahara valleys and the High Atlas road. If you would prefer to finish in Fes, see the 3-Day Marrakech to Fes Desert Tour instead.",
      },
      {
        question: "How long is the drive from Marrakech to Merzouga?",
        answer:
          "Merzouga is about 560 km from Marrakech, or roughly 8 to 9 hours of pure driving. That is why the trip is split across two days with an overnight stop in Dades Valley — so you actually enjoy the Atlas, valleys and gorges along the way.",
      },
      {
        question: "Can I upgrade the Merzouga desert camp?",
        answer:
          "Yes. Standard and upgraded camp options can be arranged depending on availability, including more comfortable tents and private bathroom options when requested in advance.",
      },
      {
        question: "What if I don't want to ride a camel?",
        answer:
          "That is no problem. The camel trek is the classic way into the dunes, but we can arrange a 4x4 transfer directly to the desert camp instead, which also suits travelers with back or knee concerns.",
      },
      {
        question: "Can you cater to vegetarian or other dietary needs?",
        answer:
          "Yes. Moroccan cooking is very vegetable-friendly, and the camp and hotel kitchens can prepare vegetarian, halal and simple options. Let us know about allergies or specific requirements in advance so we can pass them on.",
      },
      {
        question: "When is the best time to do this Merzouga tour?",
        answer:
          "March to May and September to November offer the most comfortable balance of warm days and cool desert nights. Summer days are very hot in the Sahara, and winter nights at camp are cold, so pack a warm layer whatever the season.",
      },
      {
        question: "Is a local guide included at Ait Ben Haddou?",
        answer:
          "A local monument guide is not included in the standard tour price. Our driver will accompany you to the site. A dedicated local guide for the ksar is optional and available for an additional fee — let us know when booking if you would like one arranged.",
      },
    ],
    relatedTourSlugs: [
      "4-day-marrakech-to-merzouga-desert-tour",
      "3-day-marrakech-to-fes-desert-tour",
    ],
    seo: {
      title: "3-Day Marrakech to Merzouga Desert Tour",
      description:
        "Book the specialist 3-day Marrakech to Merzouga desert tour with Dades Valley, Todra Gorge, Erg Chebbi camel trekking, Sahara camp, and private options.",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. 4-Day Marrakech to Merzouga
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "4-day-marrakech-to-merzouga-desert-tour",
    status: "published",
    title: "4-Day Marrakech to Merzouga Desert Tour",
    shortTitle: "4-Day Merzouga Tour",
    duration: "4 days / 3 nights",
    durationDays: 4,
    durationNights: 3,
    departureCity: "Marrakech",
    endingCity: "Marrakech",
    tripType: "round-trip",
    tourType: "private",
    startingPrice: 270,
    startingPriceCondition: "per person, based on 5 or more travelers",
    heroImage: photos.camelCaravanSunset.src,
    cardImage: photos.groupCamelTrek.src,
    gallery: [photos.groupCamelTrek],
    summary:
      "A 4-day Marrakech to Merzouga desert tour with a full extra day in the Sahara, giving more time around Erg Chebbi before the long return to Marrakech.",
    positioning:
      "Best for travelers who want the Marrakech to Merzouga route to feel immersive rather than rushed, with a full discovery day in the desert before the final return.",
    bestFor: [
      "Families with children who benefit from a gentler daily pace",
      "Photographers who want sunrise, sunset and golden-hour time in the dunes",
      "Travelers who want more than a single overnight in the Sahara",
      "Anyone who wants to meet local Berber communities near Merzouga",
    ],
    route: ["Marrakech", "Ait Ben Haddou", "Dades Valley", "Todra Gorge", "Merzouga", "Marrakech"],
    overnightStops: ["Dades Valley", "Merzouga", "Merzouga"],
    highlights: [
      "A calmer four-day pace with a full desert discovery day",
      "Explore Dades Valley, Todra Gorge, and Erg Chebbi at a relaxed pace",
      "A full day based in Merzouga — sunrise, sunset, and optional desert activities",
      "More time around the dunes for families and photographers",
      "Private upgrades and custom accommodation available",
    ],
    quickFacts: {
      start: "Marrakech (hotel or riad pickup)",
      finish: "Marrakech (hotel or riad drop-off)",
      totalDistanceKm: "Approximately 1,100–1,150 km round trip over 4 days",
      longestDrivingDay: "Day 4 (Merzouga to Marrakech direct, approx. 8–9 hrs) — a long final day",
      availability: "Private tour — dedicated vehicle for your group",
      accommodationNights: "1 night hotel or kasbah (Dades Valley), 2 nights desert camp or Merzouga accommodation",
      campCategories: "Standard or upgraded Berber desert camp (your choice at booking)",
      mealsIncluded: "3 breakfasts, 3 dinners (camp and hotel)",
      majorExclusions: "Lunches, drinks, entrance fees, optional activities (quad, sandboard, buggy), travel insurance",
      returnTime: "Evening arrival in Marrakech on Day 4, typically between 6 pm and 9 pm",
      customizable: true,
    },
    experience: [
      {
        heading: "What the extra day actually buys you",
        body: [
          "The 4-day Marrakech to Merzouga tour follows the same route as the 3-day version but adds a full day based in Merzouga. Instead of turning around the morning after you arrive at the dunes, you get an entire day to explore the area at your own pace. That single extra day changes the whole feel of the trip: more time to walk, photograph, and rest in the desert rather than passing through it.",
          "For many travelers this is the difference between ticking the Sahara off a list and genuinely experiencing it. It is the version we most often recommend to families, couples on honeymoon, and anyone travelling with a camera.",
        ],
      },
      {
        heading: "The Merzouga desert discovery day in detail",
        body: [
          "The bonus day around Erg Chebbi is yours to shape. Popular options include visiting Khamlia to hear the Gnawa music of a community with West African roots, exploring the old caravan town and Sunday market at Rissani, and seeing the fossil workshops near Erfoud where ancient marine fossils are cut from the rock.",
          "You can also drive 4x4 tracks to meet nomad families still living near the dunes, walk to a quieter stretch of sand for sunset, or simply slow down at camp. Optional activities such as quad biking, sandboarding and buggy rides can be added locally.",
        ],
      },
      {
        heading: "Be prepared for a long Day 4 return",
        body: [
          "The main benefit of the 4-day tour is more time in the desert — not a shorter driving day on the return. Day 4 is a direct drive from Merzouga back to Marrakech, which takes approximately 8 to 9 hours. This is the same long return leg as the 3-day version.",
          "The difference is that you arrive at Day 4 having had a genuine rest day rather than facing the return immediately after the dunes. Most travelers find this makes the final day far easier to manage, but you should still plan a relaxed evening in Marrakech and avoid tight onward connections on Day 4.",
        ],
      },
      {
        heading: "A calmer pace for families and photographers",
        body: [
          "Spread across four days, the outbound driving is more manageable: Day 1 to Dades Valley, Day 2 to Merzouga, Day 3 fully in the desert. This gives families with children more room to stop, rest, and adjust the pace without the constant pressure of the next drive.",
          "Because you have two chances at the dunes — sunset on your arrival evening and sunrise the next morning — plus a flexible day for golden-hour photography, the 4-day tour is the stronger choice for anyone who wants to photograph the desert seriously.",
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Marrakech to Dades Valley",
        description:
          "Cross the Atlas Mountains from Marrakech and visit Ait Ben Haddou before continuing to Ouarzazate for Taourirt Kasbah. Continue through Skoura, palm groves, and the Valley of Roses toward Dades Valley. After arrival, enjoy a gentle walk near the river and the Dades Gorges in the evening, then settle in for dinner and overnight in Dades Valley.",
        stops: ["Ait Ben Haddou", "Taourirt Kasbah", "Skoura", "Dades Valley", "Dades Gorges"],
        drivingTime: "Approximately 7 hours driving",
      },
      {
        day: "Day 2",
        title: "Dades Valley to Merzouga camp",
        description:
          "Travel from Dades Valley toward Merzouga at a comfortable pace, with stops for tea, viewpoints, and short breaks that make the desert road easier. Walk inside Todra Gorge before continuing through oasis towns, Erfoud, and the desert gateway villages. Reach Merzouga for camel trekking, sunset in Erg Chebbi, dinner, and a desert camp night.",
        stops: ["Dades Valley", "Todra Gorge", "Erfoud", "Merzouga", "Desert camp"],
        drivingTime: "Approximately 5 hours driving",
      },
      {
        day: "Day 3",
        title: "Merzouga desert discovery day",
        description:
          "A full day based around Merzouga with optional visits to Khamlia village, Rissani market, the fossil workshops near Erfoud, nomad tracks near the dunes, and relaxed time at or near the camp. Optional quad biking, sandboarding, or buggy rides can be arranged locally. This is the day that distinguishes the 4-day tour from the 3-day version — no driving commitment, just desert time.",
        stops: ["Khamlia", "Rissani", "Erg Chebbi", "Merzouga"],
        drivingTime: "No long driving — this is your Merzouga discovery day",
      },
      {
        day: "Day 4",
        title: "Merzouga to Marrakech",
        description:
          "The final day is a direct return from Merzouga to Marrakech, crossing the pre-Sahara valleys and High Atlas road with stops chosen around the pace of your group. This is a long driving day of approximately 8 to 9 hours — plan a relaxed evening in Marrakech and avoid scheduling a tight flight or onward connection the same night.",
        stops: ["Merzouga", "Pre-Sahara route", "Ouarzazate area", "High Atlas", "Marrakech"],
        drivingTime: "Approximately 8–9 hours driving",
      },
    ],
    included: commonIncluded,
    excluded: [
      ...commonExcluded,
      "Ticket to enter Ait Ben Haddou ksar (payable at the site)",
    ],
    priceTiers: [
      { minPeople: 1, maxPeople: 1, pricePerPerson: 605 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 420 },
      { minPeople: 3, maxPeople: 4, pricePerPerson: 330 },
      { minPeople: 5, pricePerPerson: 270 },
    ],
    faqs: [
      {
        question: "Why choose four days instead of three?",
        answer:
          "Four days gives you a full Merzouga discovery day — time to explore the dunes, visit Khamlia, Rissani, and nomad areas without being rushed back to Marrakech the next morning. The outbound route is the same, but you arrive at the long return drive feeling properly rested in the desert.",
      },
      {
        question: "Is Day 4 really a long drive?",
        answer:
          "Yes. Day 4 is a direct return from Merzouga to Marrakech, which takes approximately 8 to 9 hours of driving with scenic stops. The benefit of 4 days is not a shorter return — it is more time in the Sahara before that return. Plan a relaxed evening in Marrakech and avoid tight onward flights on the same night.",
      },
      {
        question: "What happens on the Merzouga desert discovery day?",
        answer:
          "The extra desert day can include Khamlia village, Rissani, nomad-area 4x4 tracks, palm groves, relaxed dune time, or optional adventure activities such as quad biking and sandboarding — depending on your interests and the pace your group prefers.",
      },
      {
        question: "Is this 4-day tour better for families?",
        answer:
          "Yes. The calmer outbound pace and full rest day in Merzouga make this the most family-friendly Sahara option we offer. We can also provide car seats on request and adjust stops around nap and meal times.",
      },
      {
        question: "Is the 4-day tour suitable for young children?",
        answer:
          "It is our most comfortable Sahara itinerary for children. Days 1 and 2 are structured the same as the 3-day tour, but the rest day on Day 3 removes the back-to-back pressure. Day 4 is still a long return, so plan accordingly.",
      },
      {
        question: "Can we add quad biking, sandboarding, or a buggy ride?",
        answer:
          "Yes. These are optional local activities that fit naturally into the desert discovery day. Tell us who wants to take part and we will arrange it near the camp so it does not disrupt the rest of the group.",
      },
      {
        question: "How does the price compare to the 3-day tour?",
        answer:
          "The 4-day tour costs more because it adds a night, meals, and a full extra day of transport and local services. For travelers who want real time in the desert rather than a quick overnight, most find the extra day worth it. See our 3-Day vs 4-Day comparison guide for a full breakdown.",
      },
      {
        question: "Can the 4-day tour end in Fes instead of Marrakech?",
        answer:
          "Yes. We can reshape the four days into a Marrakech-to-Fes crossing with an extra desert day, so you enjoy the slower pace and still finish in Fes. Ask us for a custom quote with your flight details.",
      },
    ],
    relatedTourSlugs: [
      "3-day-marrakech-to-merzouga-desert-tour",
      "3-day-marrakech-to-fes-desert-tour",
    ],
    seo: {
      title: "4-Day Marrakech to Merzouga Desert Tour",
      description:
        "Book a 4-day Merzouga desert tour from Marrakech with a full Sahara discovery day, Dades Valley, Todra Gorge, Erg Chebbi camp, and private options.",
    },
  },
];

// ---------------------------------------------------------------------------
// Draft future tours (not published, not in sitemap, not rendered)
// ---------------------------------------------------------------------------

export type DraftTourStub = {
  slug: string;
  status: "draft";
  title: string;
  duration: string;
  durationDays: number;
  departureCity: string;
  endingCity: string;
  tripType: "round-trip" | "one-way";
  tourType: "private" | "shared" | "both";
  route: string[];
  notes: string;
};

export const draftTours: DraftTourStub[] = [
  {
    slug: "3-day-fes-to-merzouga-to-fes-desert-tour",
    status: "draft",
    title: "3-Day Fes to Merzouga to Fes Desert Tour",
    duration: "3 days / 2 nights",
    durationDays: 3,
    departureCity: "Fes",
    endingCity: "Fes",
    tripType: "round-trip",
    tourType: "private",
    route: ["Fes", "Ifrane", "Midelt", "Merzouga", "Fes"],
    notes:
      "TODO: Confirm itinerary, accommodation partners, prices, and inclusions before publishing. Do not create a commercial page until confirmed.",
  },
  {
    slug: "3-day-fes-to-merzouga-to-marrakech-desert-tour",
    status: "draft",
    title: "3-Day Fes to Merzouga to Marrakech Desert Tour",
    duration: "3 days / 2 nights",
    durationDays: 3,
    departureCity: "Fes",
    endingCity: "Marrakech",
    tripType: "one-way",
    tourType: "private",
    route: ["Fes", "Merzouga", "Dades Valley", "Marrakech"],
    notes:
      "TODO: Confirm itinerary, accommodation partners, prices, and inclusions before publishing.",
  },
  {
    slug: "4-day-marrakech-to-merzouga-to-fes-desert-tour",
    status: "draft",
    title: "4-Day Marrakech to Merzouga to Fes Desert Tour",
    duration: "4 days / 3 nights",
    durationDays: 4,
    departureCity: "Marrakech",
    endingCity: "Fes",
    tripType: "one-way",
    tourType: "private",
    route: ["Marrakech", "Ait Ben Haddou", "Dades Valley", "Merzouga", "Fes"],
    notes:
      "TODO: Confirm itinerary, prices, and inclusions before publishing. One extra desert day before north leg to Fes.",
  },
  {
    slug: "5-day-marrakech-dades-merzouga-draa-marrakech-tour",
    status: "draft",
    title: "5-Day Marrakech – Dades – Merzouga – Draa Valley – Marrakech",
    duration: "5 days / 4 nights",
    durationDays: 5,
    departureCity: "Marrakech",
    endingCity: "Marrakech",
    tripType: "round-trip",
    tourType: "private",
    route: ["Marrakech", "Dades Valley", "Todra Gorge", "Merzouga", "Draa Valley", "Marrakech"],
    notes:
      "TODO: Confirm the Draa Valley return leg is genuinely operational. Confirm accommodation at each stop, prices, and inclusions before publishing.",
  },
  {
    slug: "2-day-fes-to-merzouga-to-fes-desert-tour",
    status: "draft",
    title: "2-Day Fes to Merzouga to Fes Desert Tour (Short)",
    duration: "2 days / 1 night",
    durationDays: 2,
    departureCity: "Fes",
    endingCity: "Fes",
    tripType: "round-trip",
    tourType: "private",
    route: ["Fes", "Merzouga", "Fes"],
    notes:
      "TODO: Confirm feasibility, total distance, and honest driving time. Do not publish without confirming this is genuinely comfortable from Fes. A 2-day Marrakech–Merzouga commercial page must NOT be created.",
  },
];

// ---------------------------------------------------------------------------
// Helper exports
// ---------------------------------------------------------------------------

export { siteUrl };

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug && tour.status === "published");
}

export function getRelatedTours(slug: string) {
  const tour = getTourBySlug(slug);
  if (!tour) return tours.filter((t) => t.slug !== slug && t.status === "published");
  return tour.relatedTourSlugs
    .map((s) => getTourBySlug(s))
    .filter((t): t is Tour => t !== undefined);
}

export function getPriceForGroup(tour: Tour, people: number) {
  const tier = tour.priceTiers.find(
    (priceTier) =>
      people >= priceTier.minPeople &&
      (priceTier.maxPeople === undefined || people <= priceTier.maxPeople),
  );

  return tier ?? tour.priceTiers[tour.priceTiers.length - 1];
}
