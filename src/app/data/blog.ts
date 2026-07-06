import { photos } from "./site";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  heroImage: string;
  sourceName: string;
  sourceUrl: string;
  secondarySources: {
    label: string;
    url: string;
  }[];
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "3-day-marrakech-to-merzouga-desert-tour-guide",
    title: "3-Day Marrakech to Merzouga Desert Tour: What to Expect",
    excerpt:
      "A practical guide to the classic Marrakech to Merzouga route, including Ait Ben Haddou, Dades Valley, Todra Gorge, Erg Chebbi camel trekking, and a Sahara camp night.",
    publishedAt: "2026-06-29",
    readingTime: "5 min read",
    heroImage:
      photos.camelCaravanSunset.src,
    sourceName: "GetYourGuide Marrakech to Merzouga tour listings",
    sourceUrl: "https://www.getyourguide.com/s/?q=Marrakech%20Merzouga%203%20days",
    secondarySources: [
      {
        label: "Viator Marrakech to Merzouga tour listings",
        url: "https://www.viator.com/searchResults/all?text=Marrakech%20Merzouga%203%20days",
      },
      {
        label: "Erg Chebbi travel context",
        url: "https://en.wikipedia.org/wiki/Erg_Chebbi",
      },
    ],
    sections: [
      {
        heading: "Why this route is so popular",
        body: [
          "The 3-day Marrakech to Merzouga desert tour is popular because it gives travelers the main Sahara experience without needing a full week in Morocco. The route connects the High Atlas Mountains, Ait Ben Haddou, Dades Valley, Todra Gorge, and the Erg Chebbi dunes in one focused itinerary.",
          "Large tour marketplaces usually highlight the same core promise: a scenic road journey from Marrakech, a camel trek in the dunes, and an overnight stay in a desert camp. That pattern is useful because it reflects what most travelers are searching for before they book.",
        ],
      },
      {
        heading: "What normally happens day by day",
        body: [
          "Day one is usually the mountain and kasbah day. You leave Marrakech, cross the Tizi n'Tichka road, visit Ait Ben Haddou or Ouarzazate, and continue toward Dades Valley for the first night.",
          "Day two is the desert approach. Most itineraries include Todra Gorge, oasis towns, and arrival in Merzouga before sunset. This is when the Erg Chebbi camel trek and Sahara camp night usually happen.",
          "Day three depends on the route you choose. Some travelers return to Marrakech through the Draa Valley, while others continue north toward Fes through Ziz Valley, Midelt, and Ifrane.",
          "If you are flying in and out of the same city, our 3-Day Marrakech to Merzouga Desert Tour is the version that starts and ends in Marrakech, looping back through the Draa Valley on the final day.",
        ],
      },
      {
        heading: "Private, shared, or luxury camp?",
        body: [
          "Shared tours are useful for solo travelers and visitors who want a lower price. Private tours are better for families, couples, photographers, and anyone who wants flexible stops or a calmer pace.",
          "A standard desert camp is enough for many travelers, but a luxury camp upgrade can be worth it if you care about private bathroom comfort, better bedding, and a quieter camp setting.",
        ],
      },
      {
        heading: "Who should choose four days instead",
        body: [
          "Three days works well if your schedule is tight. Four days is better if you dislike long driving days, travel with children, want more time in Merzouga, or prefer to slow down around Dades Valley, Todra Gorge, and the dunes.",
          "If you are choosing between three and four days, the real question is not whether the Sahara is worth it. It is how much road time you want to absorb each day.",
        ],
      },
    ],
  },
  {
    slug: "best-time-to-visit-merzouga",
    title: "Best Time to Visit Merzouga: A Month-by-Month Sahara Guide",
    excerpt:
      "When is the best time for a Marrakech to Merzouga desert tour? A season-by-season guide to Erg Chebbi weather, camel trekking comfort, desert camp nights, and how to plan around the heat.",
    publishedAt: "2026-07-01",
    readingTime: "6 min read",
    heroImage: photos.groupCamelTrek.src,
    sourceName: "GetYourGuide Marrakech to Merzouga tour listings",
    sourceUrl: "https://www.getyourguide.com/s/?q=Marrakech%20Merzouga%20desert%20tour",
    secondarySources: [
      {
        label: "Viator Merzouga desert tour listings",
        url: "https://www.viator.com/searchResults/all?text=Merzouga%20desert%20tour",
      },
      {
        label: "Merzouga geography and climate context",
        url: "https://en.wikipedia.org/wiki/Merzouga",
      },
    ],
    sections: [
      {
        heading: "The short answer",
        body: [
          "The best time to visit Merzouga is spring, from March to May, and autumn, from September to November. In those months the Erg Chebbi dunes are warm and pleasant by day, the nights are cool but comfortable in a desert camp, and the long drive from Marrakech is far easier than during the peak of summer.",
          "Merzouga sits on the edge of the Sahara near the Erg Chebbi dunes, some of the tallest in Morocco. Because it is true desert, the gap between day and night temperatures is large all year. Planning around that swing matters more than chasing a single perfect month.",
        ],
      },
      {
        heading: "Spring: March to May",
        body: [
          "Spring is the most balanced season for a Marrakech to Merzouga desert tour. Days are warm without being punishing, the light on the dunes is soft in the morning and evening, and camel trekking to a Sahara camp feels relaxed rather than exhausting.",
          "This is also a scenic time for the road itself. The High Atlas can still hold snow on the peaks in March, while the Dades Valley and Todra Gorge oases turn green. If you want the classic postcard version of the route, spring delivers it.",
        ],
      },
      {
        heading: "Autumn: September to November",
        body: [
          "Autumn is the other prime window. The intense summer heat fades through September, and by October and November the desert settles into warm days and cool, clear nights that are excellent for stargazing from camp.",
          "Autumn is popular, so desert camps and private tours fill up around school holidays and long weekends. If you want a specific camp category or a private vehicle, it helps to confirm your Merzouga tour dates a few weeks ahead.",
        ],
      },
      {
        heading: "Summer: June to August",
        body: [
          "Summer in Merzouga is hot, often extremely so in the middle of the day. Tours still run, but the itinerary shifts around the heat: earlier starts, a camel trek timed for late afternoon or sunset, and more time resting in shade during the hottest hours.",
          "Summer can still work well for flexible travelers, especially with an air-conditioned vehicle and a private tour that lets you control the pace. Just pack sun protection seriously and drink far more water than you think you need.",
        ],
      },
      {
        heading: "Winter: December to February",
        body: [
          "Winter brings comfortable, mild days to the dunes and genuinely cold desert nights, sometimes near freezing after dark. The Sahara is beautiful and quiet in winter, and a well-equipped camp with proper blankets and heating handles the cold well.",
          "The main thing to watch in winter is the mountain crossing. The Tizi n'Tichka pass over the High Atlas can see snow, so a 3-day or 4-day tour in December to February benefits from an experienced driver who knows the road conditions.",
        ],
      },
      {
        heading: "How to choose your dates",
        body: [
          "If comfort is your priority, aim for April, May, October, or November. If you want fewer crowds and lower prices and you do not mind extremes, summer and winter both reward travelers who plan for the conditions.",
          "Whatever month you choose, our 3-Day Marrakech to Merzouga Desert Tour, which starts and ends in Marrakech, gives you time to enjoy the desert at its best hours, around sunrise and sunset, rather than the harsh midday. If you are unsure which season fits your plans, message us with your dates and we will tell you honestly what to expect.",
        ],
      },
    ],
  },
  {
    slug: "what-to-pack-for-merzouga-desert-tour",
    title: "What to Pack for a Merzouga Desert Tour: Sahara Packing List",
    excerpt:
      "A practical packing list for a Marrakech to Merzouga desert tour, covering layered clothing, footwear, sun and dust protection, overnight camp essentials, and what you can safely leave behind.",
    publishedAt: "2026-07-03",
    readingTime: "6 min read",
    heroImage: photos.travelerDunes.src,
    sourceName: "Viator Merzouga desert tour listings",
    sourceUrl: "https://www.viator.com/searchResults/all?text=Merzouga%20desert%20tour",
    secondarySources: [
      {
        label: "GetYourGuide Marrakech to Merzouga tour listings",
        url: "https://www.getyourguide.com/s/?q=Marrakech%20Merzouga%20desert%20tour",
      },
      {
        label: "Erg Chebbi and Sahara context",
        url: "https://en.wikipedia.org/wiki/Erg_Chebbi",
      },
    ],
    sections: [
      {
        heading: "Pack for a big temperature swing",
        body: [
          "The single most important rule for a Merzouga desert tour is to pack for both heat and cold. Desert days can be hot, but nights in the Sahara camp are much cooler, and the drive over the High Atlas can be cold at altitude. Layers solve this far better than one heavy item.",
          "Aim for a light daytime layer, a warm mid layer such as a fleece or sweater, and a windproof jacket for evenings at camp. Even in warm seasons, most travelers are glad they brought something warm for after sunset.",
        ],
      },
      {
        heading: "Clothing",
        body: [
          "Bring breathable, loosely fitting clothes for the daytime, ideally covering the shoulders and knees, which keeps sun off your skin and is respectful in the villages you pass through. Long sleeves and light trousers are more comfortable in the desert than they sound.",
          "Add a warm layer and a jacket for the evening, plus sleepwear that will keep you comfortable if the camp gets cold overnight. A scarf or light shawl is genuinely useful as sun cover, dust protection, and an extra warm layer all in one.",
        ],
      },
      {
        heading: "Footwear",
        body: [
          "Closed, comfortable shoes or trainers are best for the road stops, kasbahs, and gorges. For the dunes themselves, many travelers enjoy walking barefoot on the sand, but sandals that you can slip on and off around camp are handy.",
          "If you plan to walk much in the dunes or visit in cooler months, closed shoes keep sand and chill out. Whatever you bring, expect fine sand to get into everything, so nothing precious.",
        ],
      },
      {
        heading: "Sun and dust protection",
        body: [
          "Sun protection is not optional in the Sahara. Pack a high-SPF sunscreen, sunglasses, a hat or scarf that covers your head and neck, and lip balm. The reflection off the sand is strong even on cooler days.",
          "Dust is the other constant. A scarf you can wrap over your nose and mouth is useful on windy stretches, and a small dry bag or zip pouch keeps sand out of your phone, camera, and documents.",
        ],
      },
      {
        heading: "Overnight camp essentials",
        body: [
          "Desert camps provide bedding and blankets, but a few personal items make the night far more comfortable: a headlamp or small torch, a power bank since camp electricity can be limited, wet wipes, and any medication you need.",
          "Pack a small daypack with just what you need for the camp night, so you are not dragging a large suitcase across the sand. Leave the bulk of your luggage in the vehicle and carry the overnight bag on the camel trek.",
        ],
      },
      {
        heading: "What you can leave behind",
        body: [
          "You do not need heavy hiking gear, formal clothes, or a large hard suitcase. A soft duffel or backpack is easier to load into the vehicle and to carry at camp. Keep the packing light, since you move between hotels and the desert over a few days.",
          "Bring cash in small notes for tips, drinks, and small purchases along the route, as card payment is unreliable in remote areas. On our 3-Day Marrakech to Merzouga Desert Tour, which begins and ends in Marrakech, everything else is arranged for you, so pack for comfort, not for every possibility.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
