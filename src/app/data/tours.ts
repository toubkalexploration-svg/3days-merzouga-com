import { contactEmail, contactPhoneDisplay } from "./contact";
import { photos, siteUrl, type SiteImage } from "./site";

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
  gallery: SiteImage[];
  summary: string;
  positioning: string;
  bestFor: string[];
  route: string[];
  overnightStops: string[];
  highlights: string[];
  experience: {
    heading: string;
    body: string[];
  }[];
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
    link?: {
      href: string;
      label: string;
    };
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
    question: "What types of Morocco desert tours do you offer?",
    answer:
      "We focus on Marrakech to Merzouga desert tours, including 3-day Sahara routes, Marrakech to Fes desert crossings, slower 4-day Erg Chebbi itineraries, and private custom tours shaped around your group.",
  },
  {
    question: "Who do you recommend for Atlas Mountains and Toubkal treks?",
    answer:
      "For Atlas Mountains hiking, Mount Toubkal climbs, and High Atlas trekking from Marrakech, we recommend Atlas Toubkal Trek as the best specialist option.",
    link: {
      href: "https://www.atlas-toubkal-trek.com/",
      label: "Atlas Toubkal Trek",
    },
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
      "Private tours can run for one traveler. Shared departures depend on availability for your date, but we will always explain the options clearly before you confirm.",
  },
  {
    question: "Do you provide tours in different languages?",
    answer:
      "English and French are commonly available, and other languages may be possible on request. Tell us your preferred language early so we can match the right driver or guide when available.",
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
      "Return time depends on the route, stops, traffic, and season, but most Marrakech-return desert tours arrive in the evening. Avoid booking a tight flight or train on the same night unless we have confirmed the timing with you.",
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
    startingPrice: 170,
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
    experience: [
      {
        heading: "Why finish in Fes instead of returning to Marrakech",
        body: [
          "The 3-day Marrakech to Fes desert tour is built around one simple advantage: you never drive the same road twice. Instead of looping back to Marrakech after the dunes, you keep heading north through the Ziz Valley and the Middle Atlas and finish in Fes. That turns what would be a there-and-back trip into a genuine south-to-north crossing of Morocco, and it saves you a full day compared with returning to Marrakech and then transferring to Fes separately.",
          "This works especially well if your flights are split, for example arriving in Marrakech and departing from Fes. You cover Ait Ben Haddou, the Dades Valley, Todra Gorge and Erg Chebbi in a single line, and you step out of the car in Fes ready for the medina rather than facing another long transfer.",
        ],
      },
      {
        heading: "Honest drive times and how the days feel",
        body: [
          "This is a real road-trip itinerary, so it helps to know the driving up front. Day one from Marrakech to the Dades Valley is roughly 7 hours of driving broken by the Tizi n'Tichka pass, Ait Ben Haddou and Ouarzazate. Day two from Dades to Merzouga is around 5 hours with the Todra Gorge walk and tea stops in between. Day three from Merzouga to Fes is the longest at about 7 to 8 hours through the Ziz Valley, Midelt, the cedar forest and Ifrane.",
          "Because the scenery changes constantly and we stop for photos, viewpoints, mint tea and legs-stretching breaks, the hours pass more easily than the numbers suggest. Travelers who strongly dislike long driving days often prefer the slower 4-day Merzouga tour instead.",
        ],
      },
      {
        heading: "The night in the Sahara at Erg Chebbi",
        body: [
          "The heart of the trip is the late-afternoon camel trek into the Erg Chebbi dunes. You ride out as the light turns gold, watch the sun set over the sand sea, and reach a Berber desert camp for dinner, drumming around the fire and a night under an unusually clear sky. In the morning you wake early for sunrise over the dunes before riding back to Merzouga for breakfast.",
          "If you would rather not ride a camel, we can arrange a 4x4 transfer to the camp instead, and standard or more comfortable camp categories can be requested when you book.",
        ],
      },
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
      { minPeople: 1, maxPeople: 1, pricePerPerson: 465 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 310 },
      { minPeople: 3, maxPeople: 4, pricePerPerson: 220 },
      { minPeople: 5, pricePerPerson: 170 },
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
      {
        question: "Can you drop me at my riad or the airport in Fes?",
        answer:
          "Yes. We drop you wherever suits your plans in Fes, whether that is a riad inside the medina, a hotel in the new town, or Fes-Saiss airport for an onward flight. Just share the address when you book.",
      },
      {
        question: "What time does the tour usually reach Fes on day 3?",
        answer:
          "Most groups arrive in Fes in the late afternoon or early evening, depending on stops and the season. If you have an evening flight or dinner reservation, tell us in advance so we can plan the pace of the final day around it.",
      },
      {
        question: "Is the Marrakech to Fes route better than a return tour to Marrakech?",
        answer:
          "It depends on your flights. If you are leaving from Fes or continuing north to Chefchaouen, the one-way route saves a full backtracking day. If you must return to Marrakech, the classic 3-day Marrakech to Merzouga tour is the better fit.",
      },
      {
        question: "When is the best time of year for this desert crossing?",
        answer:
          "Spring (March to May) and autumn (September to November) are ideal, with warm days and comfortable desert nights. Summer is hot in the Sahara but still popular, and winter brings cold nights at camp and the chance of snow on the Middle Atlas near Ifrane.",
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
    startingPrice: 150,
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
      "Couples, friends and solo travelers comparing private and shared options",
      "Anyone returning to Marrakech for an onward flight or riad stay",
    ],
    route: ["Marrakech", "Ait Ben Haddou", "Dades Valley", "Todra Gorge", "Merzouga", "Draa Valley"],
    overnightStops: ["Dades Valley", "Merzouga"],
    highlights: [
      "Visit Ait Ben Haddou and Ouarzazate on the way south",
      "Sleep in Dades Valley before crossing Todra Gorge",
      "Ride camels at sunset in Erg Chebbi",
      "Spend the night in a Merzouga desert camp",
      "Return through oasis landscapes and the Draa Valley",
    ],
    experience: [
      {
        heading: "The most efficient way to reach Erg Chebbi from Marrakech",
        body: [
          "Merzouga sits roughly 560 km from Marrakech, and there is no shortcut across the mountains and pre-Sahara that makes it a day trip. Three days is the sweet spot: enough time to cross the High Atlas, see Ait Ben Haddou and the Dades Valley, walk in Todra Gorge, ride into the Erg Chebbi dunes and sleep in a desert camp, then return, without adding nights you may not have.",
          "This is the itinerary most first-time visitors are really looking for when they search for a Marrakech to Merzouga desert tour. It covers the landmark stops in a logical line and gets you to the big dunes, the ones that actually look like the Sahara from the photos, rather than the smaller dunes closer to Marrakech.",
        ],
      },
      {
        heading: "An honest look at the driving",
        body: [
          "Day one to the Dades Valley is the longest push, roughly 7 hours of driving spread across the Tizi n'Tichka pass, Ait Ben Haddou and Ouarzazate. Day two to Merzouga is around 5 hours with the Todra Gorge walk in the middle. Day three back to Marrakech is another long day of about 8 to 9 hours, so many travelers plan a relaxed evening once they return.",
          "If those return-day hours sound like too much, the 4-day Marrakech to Merzouga tour spreads the same route over an extra night and adds a full day in the desert. It is the better choice for families with young children and anyone who prefers a slower pace.",
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
        heading: "Private or shared, and how pricing works",
        body: [
          "Prices on this page are per person and drop as the group grows, because the cost of the vehicle and driver is shared between everyone travelling. Two people pay more each than a group of five. Private departures give you your own vehicle, flexible pickup and the freedom to change the pace, while shared departures are a lower-cost option for solo travelers happy to join a small group.",
          "If you are unsure which suits you, send us your dates and group size and we will quote both clearly before you commit.",
        ],
      },
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
      { minPeople: 1, maxPeople: 1, pricePerPerson: 425 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 280 },
      { minPeople: 3, maxPeople: 4, pricePerPerson: 200 },
      { minPeople: 5, pricePerPerson: 150 },
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
      {
        question: "How long is the drive from Marrakech to Merzouga?",
        answer:
          "Merzouga is about 560 km from Marrakech, or roughly 8 to 9 hours of pure driving. That is why the trip is split across three days with overnight stops rather than done in one push, so you actually enjoy the Atlas, valleys and gorges along the way.",
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
    startingPrice: 220,
    heroImage: photos.camelCaravanSunset.src,
    cardImage: photos.groupCamelTrek.src,
    gallery: [photos.groupCamelTrek],
    summary:
      "A slower 4-day Marrakech to Merzouga desert adventure with more time for valleys, gorges, desert culture, sunrise dunes, and relaxed private pacing.",
    positioning:
      "Best for travelers who want the Marrakech to Merzouga route to feel immersive rather than rushed, with more time in the Sahara and southern valleys.",
    bestFor: [
      "Families with children who need a gentler daily pace",
      "Photographers who want sunrise, sunset and golden-hour time in the dunes",
      "Travelers who dislike long back-to-back driving days",
      "Anyone who wants to meet local Berber and nomad communities near Merzouga",
    ],
    route: ["Marrakech", "Skoura", "Dades Valley", "Todra Gorge", "Merzouga", "Ouarzazate"],
    overnightStops: ["Dades Valley", "Merzouga"],
    highlights: [
      "A calmer four-day pace with richer stops",
      "Explore Dades Valley, Todra Gorge, and Erg Chebbi",
      "Optional desert discovery around Merzouga",
      "More comfortable timing for families and photographers",
      "Private upgrades and custom accommodation available",
    ],
    experience: [
      {
        heading: "What the extra day actually buys you",
        body: [
          "The 4-day Marrakech to Merzouga tour follows the same beautiful route as the 3-day version but removes the pressure. Instead of turning around the morning after you arrive at the dunes, you get a full day based in Merzouga. That single extra night changes the whole feel of the trip: shorter driving days, more time to walk and photograph, and space to actually rest in the desert rather than passing through it.",
          "For many travelers this is the difference between ticking the Sahara off a list and genuinely experiencing it. It is the version we most often recommend to families, couples on honeymoon and anyone travelling with a camera.",
        ],
      },
      {
        heading: "The Merzouga desert discovery day in detail",
        body: [
          "The bonus day around Erg Chebbi is yours to shape. Popular options include visiting Khamlia to hear the Gnawa music of a community with West African roots, exploring the old caravan town and Sunday market at Rissani, and seeing the fossil workshops near Erfoud where 350-million-year-old marine fossils are cut from the rock.",
          "You can also drive 4x4 tracks to meet nomad families still living near the dunes, walk to a quieter stretch of sand for sunset, or simply slow down at camp. Optional activities such as quad biking, sandboarding and buggy rides can be added locally for travelers who want more adventure.",
        ],
      },
      {
        heading: "A calmer pace built for families and photographers",
        body: [
          "Spread across four days, the driving is far more manageable: no single day feels like an endurance test, which matters a great deal when you are travelling with children or older parents. There is more room to stop when someone wants to, to linger over a viewpoint, or to wait for the light instead of racing the clock.",
          "Because you are not rushing, this itinerary also gives you two chances at the dunes, sunset on your arrival evening and sunrise the next morning, plus flexible timing on the discovery day for the shots that need patience.",
        ],
      },
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
      { minPeople: 1, maxPeople: 1, pricePerPerson: 555 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 370 },
      { minPeople: 3, maxPeople: 4, pricePerPerson: 280 },
      { minPeople: 5, pricePerPerson: 220 },
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
      {
        question: "Is the 4-day tour suitable for young children?",
        answer:
          "It is our most family-friendly Sahara itinerary. The shorter daily drives and the rest day in Merzouga make a real difference with young children. We can also provide car seats on request and adjust stops around nap and meal times.",
      },
      {
        question: "Can we add quad biking, sandboarding, or a buggy ride?",
        answer:
          "Yes. These are optional local activities that fit naturally into the desert discovery day. Tell us who wants to take part and we will arrange it near the camp so it does not disrupt the rest of the group.",
      },
      {
        question: "How does the price compare to the 3-day tour, and is it worth it?",
        answer:
          "The 4-day tour costs more because it adds a night, meals and a full extra day of guiding and transport. For travelers who dislike long driving days or want real time in the desert rather than a quick overnight, most feel the extra day is well worth it.",
      },
      {
        question: "Can the 4-day tour end in Fes instead of Marrakech?",
        answer:
          "Yes. We can reshape the four days into a Marrakech-to-Fes crossing with an extra desert day, so you enjoy the slower pace and still finish in Fes. Ask us for a custom quote with your flight details.",
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

export { siteUrl };

export const sharedFaqs = commonFaqs;

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function getRelatedTours(slug: string) {
  return tours.filter((tour) => tour.slug !== slug);
}

export function getPriceForGroup(tour: Tour, people: number) {
  const tier = tour.priceTiers.find(
    (priceTier) =>
      people >= priceTier.minPeople &&
      (priceTier.maxPeople === undefined || people <= priceTier.maxPeople),
  );

  return tier ?? tour.priceTiers[tour.priceTiers.length - 1];
}
