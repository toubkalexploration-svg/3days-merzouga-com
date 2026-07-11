import { photos } from "./site";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  heroImage: string;
  heroImageAlt: string;
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
    heroImageAlt: photos.camelCaravanSunset.alt,
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
    heroImageAlt: photos.groupCamelTrek.alt,
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
    heroImageAlt: photos.travelerDunes.alt,
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
  {
    slug: "language-in-morocco-travel-guide",
    title: "Language in Morocco: What Travelers Should Know",
    excerpt:
      "A practical guide to Arabic, Darija, Amazigh, French, Spanish, and English in Morocco, with simple language tips for Marrakech, the Atlas road, and Merzouga desert tours.",
    publishedAt: "2026-07-11",
    readingTime: "7 min read",
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Road_signs_Marina_Agadir.jpg/1200px-Road_signs_Marina_Agadir.jpg",
    heroImageAlt:
      "Free Wikimedia Commons photo of trilingual Moroccan road signs in Agadir showing Arabic, Amazigh Tifinagh, and French text",
    sections: [
      {
        heading: "The short answer",
        body: [
          "Morocco is multilingual. The official languages are Arabic and Amazigh, while Moroccan Arabic, usually called Darija, is the language you will hear most often in everyday conversation. French is common in business, administration, restaurants, hotels, and road signs, especially in cities. English is increasingly common in tourism, and Spanish is more visible in northern Morocco.",
          "For travelers joining a Marrakech to Merzouga desert tour, you do not need to speak Arabic or French to enjoy the trip. Still, learning a few words of Darija is warmly received and makes small moments on the road feel more personal.",
        ],
      },
      {
        heading: "Arabic, Darija, and Amazigh",
        body: [
          "Modern Standard Arabic is used in formal settings such as government, media, education, and official writing. It is important nationally, but it is not the way most people speak casually at home, in cafes, or in the market.",
          "Darija is Moroccan Arabic. It has Arabic roots but includes Amazigh, French, Spanish, and local expressions, so it can sound very different from Arabic spoken in the Middle East. If you learn one spoken language for a Morocco trip, basic Darija phrases are the most useful.",
          "Amazigh languages are part of Morocco's indigenous heritage and are spoken across different regions, including the Atlas Mountains and southern areas. You may see the Tifinagh script on public signs, and you may hear Amazigh languages on the road from Marrakech through mountain villages and toward the desert.",
        ],
      },
      {
        heading: "French, Spanish, and English",
        body: [
          "French is widely used in Moroccan cities, especially in business, higher education, banking, menus, and administration. In Marrakech, Casablanca, Rabat, and many tourist areas, a little French can be helpful for signs, prices, and simple requests.",
          "Spanish is strongest in northern Morocco, especially around Tangier, Tetouan, and Chefchaouen, because of historic links with Spain. You may hear less Spanish on the classic Marrakech to Merzouga route, but it remains part of Morocco's language mix.",
          "English is growing quickly among young Moroccans and is common in tourism. Many drivers, guides, riads, desert camps, and tour teams can communicate in English, especially on popular routes such as Marrakech, Dades Valley, Todra Gorge, Merzouga, and Fes.",
        ],
      },
      {
        heading: "Useful Darija phrases for travelers",
        body: [
          "Start with greetings. Salam means hello, shukran means thank you, la shukran means no thank you, and afak means please. You can also say labas? to ask how someone is, and bslama for goodbye.",
          "For shopping or market stops, useful phrases include shhal? for how much, ghali for expensive, and mzyan for good. Even if your pronunciation is not perfect, the effort often brings a smile.",
          "On a desert tour, simple words like ma for water, atay for tea, and wakha for okay can be handy during small stops. Your driver or guide can also teach you local expressions as you travel.",
        ],
      },
      {
        heading: "Language on a Marrakech to Merzouga tour",
        body: [
          "The Marrakech to Merzouga route passes through different linguistic landscapes. In Marrakech, you will hear Darija, French, and English in tourism settings. Crossing the High Atlas and southern valleys, Amazigh identity becomes more visible through villages, names, music, and local hospitality.",
          "By the time you reach Merzouga and Erg Chebbi, you may hear Darija, Amazigh languages, French, English, Spanish, Italian, or German depending on the camp team and guests. Tourism has made the desert remarkably multilingual, but the most meaningful language is often simple friendliness: greeting people, saying thank you, and being patient.",
        ],
      },
      {
        heading: "Do you need a translator?",
        body: [
          "For most organized Morocco desert tours, no translator is needed. A good driver or guide helps with hotel check-ins, camp arrangements, stops, meals, and local communication. If you have allergies, medical needs, or detailed custom requests, write them clearly in advance so your tour team can share them correctly.",
          "Offline translation apps can be useful in markets or free time, but they are not a replacement for local context. Some Darija expressions do not translate perfectly, and local people often appreciate a simple greeting more than a complicated translated sentence.",
        ],
      },
    ],
  },
  {
    slug: "kasbah-ait-ben-haddou-guide",
    title: "Kasbah Ait Ben Haddou: Guide to Morocco's Famous Ksar",
    excerpt:
      "A practical guide to Kasbah Ait Ben Haddou, the UNESCO-listed earthen ksar near Ouarzazate, including history, architecture, best time to visit, film locations, and how it fits into a Marrakech to Merzouga desert tour.",
    publishedAt: "2026-07-11",
    readingTime: "7 min read",
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ksar_A%C3%AFt_Benhaddou%2C_Marocco_%28%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%2C_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93%29.jpg/1200px-Ksar_A%C3%AFt_Benhaddou%2C_Marocco_%28%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%2C_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93%29.jpg",
    heroImageAlt:
      "Free Wikimedia Commons photo of Kasbah Ait Ben Haddou, the UNESCO earthen ksar near Ouarzazate in southern Morocco",
    sections: [
      {
        heading: "Why Kasbah Ait Ben Haddou matters",
        body: [
          "Kasbah Ait Ben Haddou, more accurately called the Ksar of Ait Ben Haddou, is one of the most important historic stops between Marrakech and the Sahara. Its earthen towers, fortified walls, and hillside layout make it one of the clearest examples of southern Moroccan architecture.",
          "For travelers heading from Marrakech to Merzouga, Ait Ben Haddou is usually the first major heritage stop after crossing the High Atlas Mountains. It turns the long desert road into something richer: not only scenery, but a real look at caravan history, village architecture, and Morocco's pre-Saharan culture.",
        ],
      },
      {
        heading: "A former caravan-route stronghold",
        body: [
          "Ait Ben Haddou sits in the Ounila Valley, close to Ouarzazate, on a historic route that connected Marrakech with the Dra'a Valley and the Sahara. Caravans once moved through this region carrying goods, stories, and cultural influences between the desert and the imperial cities.",
          "The ksar's position was practical. Built on a slope near the river, it offered visibility, protection, and access to fertile ground. Today, only a small number of families remain in the old village, while most residents live in the newer settlement across the river and work in agriculture, guiding, crafts, or tourism.",
        ],
      },
      {
        heading: "Earthen architecture and UNESCO status",
        body: [
          "Ait Ben Haddou is famous for its rammed-earth, adobe, clay-brick, and wooden construction. These materials suit the dry climate and create the warm ochre color that makes the village so photogenic, especially in early morning and late afternoon light.",
          "The buildings include homes, defensive walls, towers, community spaces, and a hilltop granary. The site was inscribed as a UNESCO World Heritage Site in 1987 because it preserves an outstanding example of traditional earthen architecture in southern Morocco.",
        ],
      },
      {
        heading: "Best time to visit Kasbah Ait Ben Haddou",
        body: [
          "The most comfortable months are usually April, May, September, and October, when the heat is manageable and the light is beautiful. Summer can be very hot in the middle of the day, while winter is cooler and can bring cold weather on the Atlas crossing.",
          "If your route allows it, arrive early in the morning or later in the afternoon. The site is quieter, the temperature is easier, and the clay walls glow in softer light. Midday visits are still possible, but bring water, sun protection, and comfortable shoes.",
        ],
      },
      {
        heading: "What to see inside the ksar",
        body: [
          "Give yourself time to cross the river or bridge, walk through the narrow lanes, and climb gradually toward the upper viewpoint. The higher you go, the better the view over the Ounila Valley, palm groves, and surrounding desert-colored hills.",
          "Look for the decorated earthen towers, old storage spaces, traditional dwellings, and the remains of the fortified granary at the top. A local guide can add context, but even a self-guided walk gives you a strong sense of why the place became so important.",
        ],
      },
      {
        heading: "Movies filmed at Ait Ben Haddou",
        body: [
          "Ait Ben Haddou is also famous because of cinema. Its timeless architecture and dramatic landscape have attracted international productions for decades, including films such as Lawrence of Arabia, Gladiator, The Mummy, Kingdom of Heaven, and Prince of Persia.",
          "The site was also used in Game of Thrones, which helped introduce it to a new generation of travelers. The film fame is fun, but it should not overshadow the deeper reason to visit: Ait Ben Haddou is a living piece of Morocco's architectural and caravan-route heritage.",
        ],
      },
      {
        heading: "How it fits into a Merzouga desert tour",
        body: [
          "On most Marrakech to Merzouga routes, Ait Ben Haddou is visited on day one after crossing Tizi n'Tichka. From there, travelers usually continue toward Ouarzazate, Skoura, the Valley of Roses, and Dades Valley before reaching Todra Gorge and Merzouga the next day.",
          "This makes Kasbah Ait Ben Haddou a natural opening chapter to a Sahara trip. You begin with the fortified architecture of the caravan route, then continue through valleys, gorges, oasis towns, and finally the Erg Chebbi dunes.",
        ],
      },
      {
        heading: "Simple visiting tips",
        body: [
          "Wear comfortable shoes, dress modestly, ask before photographing people, and carry small cash for a local guide, tea, crafts, or tips. Some paths are uneven and dusty, so take your time rather than rushing to the top.",
          "If someone offers help, agree clearly on whether it is paid before accepting. Most visits are smooth and welcoming when expectations are clear. Respect the families and workers who still depend on the village, and treat the site as heritage rather than a film set.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
