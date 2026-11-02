import { photos } from "./site";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  /** ISO date of the last substantial content change. Omit if unchanged since publishedAt. */
  modifiedAt?: string;
  readingTime: string;
  heroImage: string;
  heroImageAlt: string;
  /** Canonical internal link to the primary related tour slug */
  primaryTourSlug?: string;
  sourceLinks?: {
    label: string;
    href: string;
  }[];
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-3-day-marrakech-to-merzouga-tour-is-popular",
    title: "Why the 3-Day Marrakech to Merzouga Tour Became Morocco's Classic Sahara Route",
    excerpt:
      "Discover how historic caravan corridors, High Atlas landscapes, southern Morocco's oasis valleys, and the Erg Chebbi dunes shaped the popular 3-day Marrakech to Merzouga tour.",
    publishedAt: "2026-10-27",
    readingTime: "9 min read",
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
    heroImage: photos.camelCaravanSunset.src,
    heroImageAlt: "Private 3-day Marrakech to Merzouga tour reaching the Erg Chebbi dunes at sunset",
    sourceLinks: [
      {
        label: "UNESCO World Heritage Centre: Ksar of Ait-Ben-Haddou",
        href: "https://whc.unesco.org/en/list/444/",
      },
      {
        label: "French Ministry of Culture archaeology portal: Sijilmassa",
        href: "https://archeologie.culture.gouv.fr/fr/sijilmasa",
      },
      {
        label: "Moroccan National Tourist Office: Errachidia, Midelt and Merzouga",
        href: "https://www.visitmorocco.com/fr/voyage/errachidia-midelt-merzouga",
      },
      {
        label: "Morocco tourism roadmap: Desert and Oasis Adventure",
        href: "https://observatoiredutourisme.ma/en/a-propos/feuille-de-route-du-tourisme/",
      },
      {
        label: "Heritage and Tourism conference: the development of desert tourism in Merzouga",
        href: "https://sites.grenadine.uqam.ca/sites/patrimoine/en/patrimoine-et-tourisme-changer-de-regard/schedule/5096",
      },
    ],
    sections: [
      {
        heading: "Why is the 3-day Marrakech to Merzouga tour so popular?",
        body: [
          "The 3-day Marrakech to Merzouga tour became popular because it turns a limited Morocco itinerary into a complete journey across several different landscapes. In three days, travelers can leave Marrakech, cross the High Atlas Mountains, see fortified villages and oasis valleys, reach the Erg Chebbi dunes, ride into the desert around sunset, and spend a night near the Sahara before returning to Marrakech.",
          "Its appeal is not only the final night in Merzouga. The road links places with deep histories of movement, trade, farming, architecture, and settlement. The modern tour packages those layers into a route that is possible for visitors who cannot dedicate a full week to southern Morocco.",
        ],
      },
      {
        heading: "Is today's route an ancient caravan road?",
        body: [
          "Not exactly. It is more accurate to say that the modern Marrakech to Merzouga itinerary connects several historic corridors rather than following one unchanged caravan trail from beginning to end. Roads, passes, and overnight stops have changed, but the journey still crosses regions that linked Marrakech with pre-Saharan Morocco and connected oasis communities with wider trade networks.",
          "That distinction matters. The present tour uses modern paved roads and comfortable vehicles, while the historic landscape survives in the ksour, kasbahs, markets, irrigated valleys, and settlements encountered along the way. Understanding the route this way makes the journey richer without turning history into a travel myth.",
        ],
      },
      {
        heading: "Crossing the High Atlas from Marrakech",
        body: [
          "Leaving Marrakech, the route climbs into the High Atlas and crosses the Tizi n'Tichka corridor toward Ouarzazate. The current road is a modern construction rather than a medieval caravan track, but the mountain barrier is ancient. For centuries, communities used a network of passes to move between the Marrakech plain and the valleys of southern Morocco.",
          "Today the crossing is one reason the tour feels so dramatic. Red-earth villages, steep slopes, changing geology, and wide viewpoints replace the city within a few hours. It also explains why an experienced professional driver and a well-maintained air-conditioned vehicle matter: this is a long mountain-and-desert journey, not a simple transfer between two resorts.",
        ],
      },
      {
        heading: "Ait Ben Haddou and the old commercial landscape",
        body: [
          "Ait Ben Haddou gives travelers the clearest visible connection to the route's trading past. UNESCO describes the fortified ksar as one of the trading posts on the commercial route that linked ancient Sudan with Marrakech through the Draa Valley and the Tizi n'Telouet Pass. Its defensive walls, earthen houses, communal spaces, granary, and caravanserai show how travel, protection, storage, and daily life once met in southern Morocco.",
          "The oldest surviving structures are not considered earlier than the seventeenth century, but the building traditions are older. A private tour allows time to understand the site as more than a film location: it was part of a working cultural landscape shaped by trade and local communities.",
        ],
      },
      {
        heading: "Dades Valley and Todra Gorge were lived corridors",
        body: [
          "The road east through the Valley of Roses, Dades Valley, and Todra is often described only in terms of scenery. Yet these valleys are also places where water made agriculture, fortified settlements, and movement possible on the dry side of the Atlas. Villages and fields follow rivers because the rivers supported life, not because they were designed as tourist stops.",
          "For modern travelers, this creates the route's strongest contrast: mountain rock, green cultivation, earthen villages, palm oases, and increasingly arid plateaus appear in succession. The first hotel night around Dades also divides the drive into a more realistic rhythm before the approach to Merzouga on day two.",
        ],
      },
      {
        heading: "Tafilalt, Rissani, and the memory of Sijilmassa",
        body: [
          "Near Rissani, the journey enters the Tafilalt, a historic oasis region with a far larger role in trans-Saharan history than many short tours explain. The archaeological remains of Sijilmassa lie close to Rissani. Founded in the eighth century, Sijilmassa served for centuries as a major caravan port and commercial crossroads between the Maghreb and the Sahel before declining as trade routes shifted.",
          "The dunes at Merzouga should not be presented as if every caravan passed through today's tourist village. The stronger historical connection is regional: Erg Chebbi stands near the Tafilalt oasis system and the northern edge of a world once organized around desert crossings, markets, fortified settlements, and long-distance exchange.",
        ],
      },
      {
        heading: "How Merzouga became an international destination",
        body: [
          "Merzouga's modern fame grew from its position beside Erg Chebbi, one of Morocco's most recognizable dune fields. Research presented on tourism in the village describes local settlement near the dunes from the 1950s and increasing international tourism from the 1980s, followed by growing domestic tourism from the 2000s. Guesthouses, desert camps, guided camel outings, and other local services developed around that demand.",
          "Photography and online travel planning made the destination easier to recognize, but the landscape is the real reason interest endured. Erg Chebbi offers the high golden dunes many travelers imagine when they picture the Sahara, while Merzouga is reachable by road and can support camp stays, local guides, and organized transfers. Morocco's current tourism strategy also recognizes Desert and Oasis Adventure as one of the country's principal travel themes.",
        ],
      },
      {
        heading: "Why three days became the classic format",
        body: [
          "Three days is the shortest practical format that combines the major southern route with a genuine Erg Chebbi stay from Marrakech. Day one reaches Dades after the Atlas and kasbah region. Day two continues through Todra and the Tafilalt toward Merzouga. Day three returns to Marrakech by a southern route. It is still an energetic itinerary, but each night falls in a place that makes geographic sense.",
          "A two-day Merzouga tour from Marrakech would compress too much distance into too little time. Four days is more relaxed and gives more time around the desert, but three days remains popular because it fits neatly between city stays and international travel schedules while still reaching the large dunes.",
        ],
      },
      {
        heading: "Why we operate this route only as a private tour",
        body: [
          "3 Days Merzouga operates private tours rather than shared departures. Your group travels with a professional team in a comfortable air-conditioned vehicle, without being combined with unrelated travelers. This gives the driver and guests more control over pickup, rest breaks, viewpoints, meals, walking time, and the overall pace of a long route.",
          "Private travel is especially valuable for families, couples, photographers, friends, and travelers with specific accommodation or dietary needs. It also lets us customize the itinerary: camp category, room preferences, pickup point, return route, additional nights, and the balance between sightseeing and driving can all be discussed before departure.",
        ],
      },
      {
        heading: "What to expect from our private Marrakech to Merzouga tour",
        body: [
          "Our classic tour begins and ends in Marrakech and includes the High Atlas crossing, Ait Ben Haddou, the Dades region, Todra Gorge, Merzouga, an Erg Chebbi camel experience, and a desert camp night. Exact stops and timing depend on season, road conditions, your pickup location, and the pace agreed with your group.",
          "The goal is not to race through a checklist. It is to make a demanding route feel organized and personal. If three days matches your schedule, view our 3-Day Marrakech to Merzouga Desert Tour and send us your dates, group size, preferred camp level, and any custom requests. We will confirm the route, private vehicle, availability, and price before you book.",
        ],
      },
    ],
  },
  {
    slug: "3-day-marrakech-to-merzouga-desert-tour-guide",
    title: "3-Day Marrakech to Merzouga Desert Tour: What to Expect",
    excerpt:
      "A practical guide to the classic Marrakech to Merzouga route, including Ait Ben Haddou, Dades Valley, Todra Gorge, Erg Chebbi camel trekking, and a Sahara camp night.",
    publishedAt: "2026-06-29",
    readingTime: "5 min read",
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
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
          "Day three depends on the route you choose. Most travelers on the round-trip tour return directly to Marrakech via Rissani, the pre-Sahara corridor, and the High Atlas road, while others continue north toward Fes through Ziz Valley, Midelt, and Ifrane.",
          "If you are flying in and out of Marrakech, our 3-Day Marrakech to Merzouga Desert Tour is the version that starts and ends in Marrakech, with a direct 8–9 hour return drive on the final day.",
        ],
      },
      {
        heading: "Why choose a private tour, and should you upgrade the camp?",
        body: [
          "We operate this route as a private tour, with a dedicated vehicle for your group. That format works well for solo travelers, families, couples, photographers, and anyone who wants flexible stops, professional support, or a calmer pace.",
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
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
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
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
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
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
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
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
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
  {
    slug: "merzouga-vs-zagora-desert-tour",
    title: "Merzouga vs Zagora: Which Morocco Desert Tour Should You Choose?",
    excerpt:
      "A clear, honest comparison of Merzouga and Zagora desert tours from Marrakech, covering dunes, drive time, camp experience, budget, comfort, and which route is better for your trip.",
    publishedAt: "2026-07-14",
    readingTime: "8 min read",
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
    heroImage: photos.camelCaravanSunset.src,
    heroImageAlt: photos.camelCaravanSunset.alt,
    sourceLinks: [
      {
        label: "Moroccan National Tourist Office: Errachidia-Midelt-Merzouga",
        href: "https://www.visitmorocco.com/en/travel/errachidia-midelt-merzouga",
      },
      {
        label: "Erg Chebbi overview",
        href: "https://en.wikipedia.org/wiki/Erg_Chebbi",
      },
      {
        label: "Erg Chigaga overview",
        href: "https://en.wikipedia.org/wiki/Erg_Chigaga",
      },
    ],
    sections: [
      {
        heading: "The short answer",
        body: [
          "Choose Merzouga if you want the classic Sahara image: high golden dunes, a camel trek into Erg Chebbi, and a proper desert camp night that feels worth the long road from Marrakech. Choose Zagora if you only have two days, want a lower-cost route, or prefer a lighter desert taste without driving all the way to the far southeast.",
          "The mistake many travelers make is comparing them as if they are the same thing. They are not. Zagora is easier to reach, but the dunes are smaller and the experience is more about the Draa Valley and pre-Sahara atmosphere. Merzouga takes longer, but the Erg Chebbi dunes are the reason most people picture Morocco when they imagine a Sahara trip.",
        ],
      },
      {
        heading: "Dunes and desert feeling",
        body: [
          "Merzouga sits beside Erg Chebbi, one of Morocco's best-known dune fields. The dunes rise high enough to change the whole feeling of the landscape: when you walk or ride a camel between them, the village and road disappear quickly, and the silence becomes part of the experience.",
          "Zagora is different. It has desert scenery, palms, rocky plains, and a real southern-Morocco mood, but it does not usually deliver the same sea-of-sand feeling. Many Zagora camps use smaller dune areas or stony desert settings. That can still be beautiful, especially at sunset, but it is not the big Erg Chebbi postcard.",
        ],
      },
      {
        heading: "Driving time from Marrakech",
        body: [
          "Zagora is the easier option for time. A 2-day Marrakech to Zagora desert tour is still a long trip because you cross the High Atlas Mountains and continue through Ouarzazate and the Draa Valley, but it is possible as a fast overnight.",
          "Merzouga is farther. A comfortable Merzouga route needs at least three days from Marrakech, with the first night usually in Dades Valley and the second night in the desert camp. Our 3-Day Marrakech to Merzouga Desert Tour follows that structure because it breaks the road into realistic sections instead of turning the journey into one exhausting push.",
          "If you have four days, Merzouga becomes even better. The 4-Day Marrakech to Merzouga Desert Tour gives you the same big dunes with less pressure and more time around the desert itself.",
        ],
      },
      {
        heading: "Which is better for a first Morocco trip?",
        body: [
          "For most first-time visitors who have three or four days, Merzouga is the better choice. It answers the dream clearly: camels at sunset, orange dunes, stars, campfire music, sunrise over Erg Chebbi, and a road trip through Ait Ben Haddou, Dades Valley, and Todra Gorge.",
          "Zagora makes sense when your schedule is tight. If you only have one spare night and cannot add a third day, it is better to do Zagora calmly than to force Merzouga into two days. A rushed Merzouga trip from Marrakech is possible on paper, but it is not kind to your body or your holiday.",
        ],
      },
      {
        heading: "Private or shared changes the decision",
        body: [
          "A shared Zagora tour is often the cheapest desert experience from Marrakech. It works for backpackers, solo travelers, and anyone who mainly wants a simple overnight adventure. The tradeoff is less flexibility and a more fixed pace.",
          "A private Merzouga tour costs more, but it gives you control over pickup time, stops, accommodation level, camel or 4x4 camp transfer, and the route back. For couples, families, photographers, and travelers with limited Morocco time, that control often matters more than saving a small amount per day.",
        ],
      },
      {
        heading: "Camp comfort and expectations",
        body: [
          "Both routes can offer basic and upgraded camps, but Merzouga generally has a wider range because Erg Chebbi is a mature desert destination with many camp styles. You can keep it simple with a standard camp or choose a luxury camp with private bathroom comfort, better bedding, and a quieter setting.",
          "In Zagora, ask very clearly what the camp setting is like before booking. Some travelers expect large dunes and are disappointed because the landscape is flatter. That is not the camp's fault; it is a mismatch between expectation and geography.",
        ],
      },
      {
        heading: "Our honest recommendation",
        body: [
          "If your trip allows three days, choose Merzouga. If your trip allows four days, choose Merzouga even more confidently. The long road becomes part of the story because you are not only going to the dunes; you are crossing the High Atlas, kasbah country, palm valleys, gorges, and oasis towns.",
          "Choose Zagora only when time is the main limit. It is a good short desert break, but it should be sold honestly as a pre-Sahara experience rather than a substitute for Erg Chebbi.",
          "A simple rule works well: two days means Zagora, three or four days means Merzouga, and one-way travel from Marrakech to Fes means the 3-Day Marrakech to Fes Desert Tour via Merzouga.",
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // New high-intent articles
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "3-day-vs-4-day-marrakech-merzouga-tour",
    title: "3-Day vs 4-Day Marrakech to Merzouga Tour: Which Should You Choose?",
    excerpt:
      "A clear comparison of the 3-day and 4-day Marrakech to Merzouga desert tours, covering driving days, Sahara time, who each suits, and how to choose based on your schedule.",
    publishedAt: "2026-10-28",
    readingTime: "7 min read",
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
    heroImage: photos.groupCamelTrek.src,
    heroImageAlt: "Group of travelers on a camel trek across the Erg Chebbi dunes during a Marrakech to Merzouga desert tour",
    sections: [
      {
        heading: "The key difference in one sentence",
        body: [
          "The 3-day tour reaches Merzouga on Day 2 and returns to Marrakech on Day 3. The 4-day tour adds a full day based in Merzouga before that same long return. The route, the stops, and the driving are almost identical — what changes is how much time you spend in the desert itself.",
        ],
      },
      {
        heading: "What the itineraries actually look like",
        body: [
          "Both tours begin the same way. Day 1 from Marrakech crosses the High Atlas via Tizi n'Tichka, visits Ait Ben Haddou and Taourirt Kasbah in Ouarzazate, and ends with an overnight in Dades Valley — about 7 hours of driving. Day 2 from Dades Valley heads east through Todra Gorge, continues to Merzouga, and ends with a camel trek and camp night in Erg Chebbi — about 5 hours of driving.",
          "From there the tours diverge. On the 3-day version, Day 3 is the direct return to Marrakech: a long drive of approximately 8 to 9 hours with scenic stops. On the 4-day version, Day 3 is a free day based in Merzouga — visiting Khamlia, Rissani, nomad areas, or simply relaxing at the dunes. Day 4 is then the same long return to Marrakech.",
        ],
      },
      {
        heading: "Is Day 4 really less driving?",
        body: [
          "This is a common misconception. The 4-day tour does not reduce the total driving — it gives you more time in the desert before the long final day. Day 4 on the 4-day tour is roughly the same 8 to 9 hour return drive as Day 3 on the 3-day tour.",
          "What changes is how you feel when you board that return journey. On the 3-day tour, you leave the dunes the morning after you arrive. On the 4-day tour, you have had a full discovery day before the drive, so most travelers find the final return more manageable.",
        ],
      },
      {
        heading: "Who the 3-day tour suits",
        body: [
          "Three days is the right choice when your schedule is genuinely tight. It is also the natural fit for travelers who want the essential Sahara highlights — Ait Ben Haddou, Dades Valley, Todra Gorge, Erg Chebbi, camel trek, camp night — without adding nights they do not need.",
          "Three days works best when you are comfortable with long driving days and do not mind arriving back in Marrakech in the evening, tired but satisfied.",
        ],
      },
      {
        heading: "Who the 4-day tour suits",
        body: [
          "Four days is the better choice for families with young children, who benefit from the rest day in Merzouga and the extra flexibility. It is also strongly recommended for photographers who want sunrise, sunset, and golden-hour opportunities, and for couples who want a genuinely immersive desert stay.",
          "If you are traveling with anyone who struggles with long car journeys — elderly parents, motion sickness, or very young children — the extra day removes the back-to-back pressure that makes the 3-day itinerary tiring for some groups.",
        ],
      },
      {
        heading: "A simple decision guide",
        body: [
          "Choose the 3-day tour if you have a tight schedule, are comfortable with long driving days, or want a focused Sahara experience without extra nights.",
          "Choose the 4-day tour if you are traveling with children or older travelers, want real time in the desert rather than a quick overnight, are interested in the wider Merzouga area (Khamlia, Rissani, nomad tracks), or want two chances at the dunes.",
        ],
      },
    ],
  },
  {
    slug: "marrakech-to-merzouga-distance-driving-time",
    title: "Marrakech to Merzouga Distance and Driving Time: What to Expect",
    excerpt:
      "How far is Merzouga from Marrakech, and how long does the drive take? An honest breakdown of distances, driving hours, road quality, and why the trip needs at least three days.",
    publishedAt: "2026-10-28",
    readingTime: "6 min read",
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
    heroImage: photos.camelCaravanSunset.src,
    heroImageAlt: "Desert road approaching the Erg Chebbi dunes on the route from Marrakech to Merzouga",
    sections: [
      {
        heading: "The direct distance",
        body: [
          "Merzouga is approximately 560 km from Marrakech by road. The total round-trip distance is approximately 1,100 to 1,150 km over three days, depending on the return route. That number explains why a one-day drive is rarely a good idea and why the classic 3-day tour splits the journey with an overnight stop in Dades Valley.",
        ],
      },
      {
        heading: "Day 1: Marrakech to Dades Valley",
        body: [
          "The first day covers roughly 350 to 380 km and takes approximately 7 hours of driving, including the climb over the Tizi n'Tichka pass at around 2,260 m. Stops at Ait Ben Haddou and Ouarzazate add 1 to 2 hours to the schedule. An early departure from Marrakech (typically 7–8 am) allows you to reach Dades Valley before dark.",
        ],
      },
      {
        heading: "Day 2: Dades Valley to Merzouga",
        body: [
          "Day 2 covers approximately 200 to 220 km and takes roughly 4 to 5 hours with a stop at Todra Gorge near Tinghir. This is the shortest travel day. You should arrive in Merzouga in time for the late-afternoon camel trek as the light turns golden.",
        ],
      },
      {
        heading: "Day 3: Merzouga back to Marrakech",
        body: [
          "The return leg is approximately 560 km and 8 to 9 hours of driving with stops. Most groups arrive back in Marrakech between 6 pm and 9 pm. Plan a relaxed evening and avoid scheduling a tight onward flight or connection the same night.",
        ],
      },
      {
        heading: "Road quality",
        body: [
          "The main road (N9 then N10) is paved throughout. The Tizi n'Tichka pass can be affected by snow in winter. The final approach to Merzouga through Erfoud and Rissani uses smaller regional roads that are paved but quieter.",
        ],
      },
      {
        heading: "Can you do Merzouga in two days?",
        body: [
          "Technically yes, but the experience is very rushed — around 9 hours of driving each way with little time in the dunes. Three days is the realistic minimum for an enjoyable experience. If two days is all you have, Zagora (closer to Marrakech at around 360 km) is a far better choice.",
        ],
      },
    ],
  },
  {
    slug: "private-vs-shared-merzouga-tour",
    title: "Private vs Shared Merzouga Tour: Which Is Right for You?",
    excerpt:
      "A practical comparison of private and shared Marrakech to Merzouga desert tours, covering cost, flexibility, comfort, pace, and which format works for different types of travelers.",
    publishedAt: "2026-10-28",
    readingTime: "6 min read",
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
    heroImage: photos.travelerDunes.src,
    heroImageAlt: "Solo traveler on the Erg Chebbi dunes during a private Marrakech to Merzouga desert tour",
    sections: [
      {
        heading: "What private and shared mean in practice",
        body: [
          "On a shared tour, your vehicle is filled with travelers you have not met before. Pickup times and stops are fixed, and pace adjustments are limited. On a private tour, your group has an entire vehicle to itself, and stops, timing, pacing, and accommodation can all be adjusted around your needs.",
        ],
      },
      {
        heading: "Cost comparison",
        body: [
          "For solo travelers or couples, shared tours are often cheaper per person. For groups of three or more, the price difference narrows considerably. For groups of four or five, a private tour can be comparable to shared options in total cost while offering full itinerary control.",
        ],
      },
      {
        heading: "Flexibility and pace",
        body: [
          "On a private tour, if you want 90 minutes at Ait Ben Haddou instead of 45, you can. If you would rather skip the Ouarzazate stop, that is a conversation you can have with your driver. These adjustments seem small but add up significantly over three long travel days.",
        ],
      },
      {
        heading: "Families and special needs",
        body: [
          "Private tours are almost always the better choice for families with young children. Nap schedules, feeding stops, car seat requirements, and pace adjustments are much easier to manage when the driver is working only for your family. Travelers with mobility limitations or dietary restrictions also benefit from the flexibility of a private vehicle.",
        ],
      },
      {
        heading: "Camp and accommodation",
        body: [
          "On a shared tour, accommodation is usually fixed for the whole group. On a private tour, you can request a specific camp category (standard, upgraded, or luxury) and any hotel preferences. All our Marrakech to Merzouga tours are private — contact us with your group size and dates.",
        ],
      },
    ],
  },
  {
    slug: "standard-vs-luxury-merzouga-desert-camp",
    title: "Standard vs Luxury Merzouga Desert Camp: What Is the Difference?",
    excerpt:
      "A practical guide to the difference between standard and luxury desert camps at Erg Chebbi near Merzouga, covering facilities, comfort, price, and how to choose the right camp for your tour.",
    publishedAt: "2026-10-28",
    readingTime: "5 min read",
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
    heroImage: photos.camelCaravanSunset.src,
    heroImageAlt: "Desert camp tents under a starlit sky in the Erg Chebbi dunes near Merzouga",
    sections: [
      {
        heading: "What a standard desert camp includes",
        body: [
          "A standard Merzouga desert camp typically offers Berber tents with beds or mattresses on raised platforms, blankets, shared bathroom facilities, dinner, and a communal fire and music in the evening. The experience is genuine — the sky, the silence, and the sunrise are the same regardless of camp category.",
        ],
      },
      {
        heading: "What a luxury camp adds",
        body: [
          "An upgraded or luxury Merzouga camp typically features larger tents or permanent-structure canvas suites, proper beds with better mattresses and linen, en-suite or private bathroom facilities, better lighting, and quieter positioning with more space between tents. Luxury camps often cater to fewer guests, which means more privacy.",
        ],
      },
      {
        heading: "Private bathrooms: the deciding factor",
        body: [
          "For most travelers, the key difference is bathroom access. Standard camps use shared bathroom blocks. Upgraded camps provide bathrooms closer to or attached to each tent, which matters particularly on cold desert nights. If private bathrooms matter to your group, request a luxury or upgraded camp when booking.",
        ],
      },
      {
        heading: "Does camp category change the experience?",
        body: [
          "Not fundamentally. The dunes, the camel trek, the sunset, the stars, and the silence are the same. The choice is about how comfortable you sleep and whether you have a private bathroom — not about whether you experience the Sahara authentically.",
        ],
      },
      {
        heading: "How to choose",
        body: [
          "If you are there for the dunes and the desert experience, a standard camp is a perfectly good choice. If you value a private bathroom, better bedding, or are celebrating a special occasion, an upgraded camp is worth the extra cost. Tell us your preference when you enquire about a tour.",
        ],
      },
    ],
  },
  {
    slug: "how-much-does-a-merzouga-tour-cost",
    title: "How Much Does a Marrakech to Merzouga Tour Cost?",
    excerpt:
      "A clear breakdown of what you can expect to pay for a Marrakech to Merzouga desert tour, including per-person prices by group size, what is included, and what costs extra.",
    publishedAt: "2026-10-28",
    readingTime: "6 min read",
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
    heroImage: photos.travelerDunes.src,
    heroImageAlt: "Traveler at the Erg Chebbi dunes planning a private desert tour from Marrakech",
    sections: [
      {
        heading: "How pricing works on private tours",
        body: [
          "The cost of a Marrakech to Merzouga desert tour depends primarily on your group size. Private tours share the vehicle, driver, and operational costs among your group — so the more people you bring, the lower the per-person price. A solo traveler pays significantly more than someone in a group of five.",
        ],
      },
      {
        heading: "3-Day Marrakech to Merzouga (round trip)",
        body: [
          "Per-person prices: approximately €475 for 1 traveler, €330 for 2 travelers, €250 for 3–4 travelers, and €200 for 5 or more travelers. These prices include private vehicle, driver, hotel night in Dades Valley, desert camp night in Merzouga, camel trek, two breakfasts, and two dinners.",
        ],
      },
      {
        heading: "3-Day Marrakech to Fes (via Merzouga)",
        body: [
          "Per-person prices: approximately €515 for 1 traveler, €360 for 2 travelers, €270 for 3–4 travelers, and €220 for 5 or more travelers. Same inclusions as the round trip, finishing with drop-off in Fes.",
        ],
      },
      {
        heading: "4-Day Marrakech to Merzouga (with discovery day)",
        body: [
          "Per-person prices: approximately €605 for 1 traveler, €420 for 2 travelers, €330 for 3–4 travelers, and €270 for 5 or more travelers. Adds a third night, three breakfasts, three dinners, and a full desert discovery day.",
        ],
      },
      {
        heading: "What costs extra",
        body: [
          "Lunches and drinks (roughly €10–€20 per person per day), entrance fees at heritage sites, optional local activities (quad biking, sandboarding, buggy rides), a local monument guide at Ait Ben Haddou, luxury camp upgrades, and travel insurance are all additional costs not included in tour prices.",
        ],
      },
    ],
  },
  {
    slug: "can-you-visit-merzouga-from-marrakech-in-two-days",
    title: "Can You Visit Merzouga from Marrakech in Two Days?",
    excerpt:
      "An honest answer to whether a two-day Marrakech to Merzouga trip is realistic, including the total distance, driving burden, and why Zagora is often the smarter choice for a short desert break.",
    publishedAt: "2026-10-28",
    readingTime: "5 min read",
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
    heroImage: photos.groupCamelTrek.src,
    heroImageAlt: "Group on camels in the Erg Chebbi dunes — a destination that needs at least three days from Marrakech",
    sections: [
      {
        heading: "The honest answer",
        body: [
          "Yes, it is technically possible. It is not something we recommend. Merzouga is approximately 560 km from Marrakech. A two-day round trip means driving roughly 9 hours on Day 1, spending one night at a desert camp, and driving 9 hours back on Day 2 — approximately 1,100 km and 18 hours of driving with perhaps 2 to 3 hours actually at the dunes.",
        ],
      },
      {
        heading: "What a two-day trip would look like",
        body: [
          "You would leave Marrakech before 6 am, drive continuously through the High Atlas and the south with only brief stops, arrive in Merzouga in the late afternoon barely in time for the camel trek. Day 2: wake before sunrise, ride back from the dunes, and drive straight to Marrakech. Ait Ben Haddou would be a rushed photo stop, not a real visit. Most groups arrive back exhausted.",
        ],
      },
      {
        heading: "Why Zagora is often the better choice for two days",
        body: [
          "If you only have two days for a desert experience from Marrakech, Zagora is worth serious consideration. It is roughly 360 km from Marrakech — a comfortable two-day itinerary is realistic. The dunes near Zagora are smaller than Erg Chebbi, but the experience is genuine and the journey includes the Draa Valley. A two-day Zagora tour is far more honest than a rushed two-day Merzouga attempt.",
        ],
      },
      {
        heading: "Why three days is the minimum for Merzouga",
        body: [
          "The 3-Day Marrakech to Merzouga Desert Tour works because it splits the journey into three realistic segments: Day 1 to Dades Valley (7 hours), Day 2 to Merzouga (5 hours), Day 3 back to Marrakech (8–9 hours). Each day has a purpose and a comfortable overnight. The route becomes the experience.",
        ],
      },
      {
        heading: "Our recommendation",
        body: [
          "Two days for Merzouga: not recommended unless you cannot add a third day and understand the driving burden.",
          "Two days for Zagora: a good, honest desert experience.",
          "Three days for Merzouga: the right minimum. See the 3-Day Marrakech to Merzouga Desert Tour for the full itinerary.",
        ],
      },
    ],
  },
  {
    slug: "marrakech-to-fes-via-merzouga-desert-route",
    title: "Marrakech to Fes via Merzouga: Is the Desert Route Worth It?",
    excerpt:
      "A clear guide to the Marrakech to Fes via Merzouga desert route, covering the total distance, what you see, how it compares to a direct transfer, and who it suits.",
    publishedAt: "2026-10-28",
    readingTime: "7 min read",
    primaryTourSlug: "3-day-marrakech-to-fes-desert-tour",
    heroImage: photos.todraGorge.src,
    heroImageAlt: "Todra Gorge limestone cliffs, a key stop on the Marrakech to Fes desert route via Merzouga",
    sections: [
      {
        heading: "Why this route makes sense",
        body: [
          "The Marrakech to Fes via Merzouga route solves a common problem: you arrive in Marrakech and depart from Fes, and you want to see the Sahara in between without backtracking. Instead of driving the same mountain road twice, you continue north from Merzouga through the Ziz Valley and Middle Atlas to reach Fes from the south — a genuine south-to-north crossing of Morocco.",
        ],
      },
      {
        heading: "Total distance and daily driving",
        body: [
          "The route covers approximately 1,050 to 1,100 km over three days. Day 1: Marrakech to Dades Valley, around 350–380 km and 7 hours. Day 2: Dades to Merzouga, around 200–220 km and 5 hours with a Todra Gorge stop. Day 3: Merzouga to Fes, around 470 km and 7–8 hours through Ziz Valley, Midelt, cedar forests, and Ifrane. All three days involve substantial driving.",
        ],
      },
      {
        heading: "What the direct Marrakech–Fes road misses",
        body: [
          "The direct N8 road is around 500 km and 5 hours without stops, crossing fertile plains and the Middle Atlas. The desert route adds Tizi n'Tichka, Ait Ben Haddou, Ouarzazate, Dades Valley, Todra Gorge, Erg Chebbi, and the Ziz Valley. If you have 5 to 7 days in Morocco and want to see the south, this is one of the most efficient ways to do it.",
        ],
      },
      {
        heading: "Is it worth it?",
        body: [
          "For travelers with split flights — arriving in Marrakech and departing from Fes — the answer is almost always yes. The route is genuinely beautiful, and arriving in Fes from the south gives you a completely different sense of Moroccan geography.",
          "For travelers who strongly dislike long driving days, Day 3 (Merzouga to Fes, 7–8 hours) may feel demanding. Ask us about adding a fourth day to break the journey.",
        ],
      },
    ],
  },
  {
    slug: "what-is-included-on-a-merzouga-tour",
    title: "What Is Included and What Costs Extra on a Merzouga Tour?",
    excerpt:
      "A clear list of what is normally included in a Marrakech to Merzouga desert tour price — and what you should expect to pay extra for, so you can budget accurately before you book.",
    publishedAt: "2026-10-28",
    readingTime: "5 min read",
    primaryTourSlug: "3-day-marrakech-to-merzouga-desert-tour",
    heroImage: photos.camelCaravanSunset.src,
    heroImageAlt: "Camel trek across the Erg Chebbi dunes at sunset — included in all 3 Days Merzouga tour prices",
    sections: [
      {
        heading: "What is normally included",
        body: [
          "Our Marrakech to Merzouga desert tours include: private air-conditioned transport, a professional local driver, hotel or kasbah accommodation in Dades Valley, desert camp accommodation in Merzouga, the Erg Chebbi camel trek, and breakfasts and dinners during overnight stays. All tours are private — your group has a dedicated vehicle and driver for the full duration.",
        ],
      },
      {
        heading: "What is not included",
        body: [
          "Lunches and drinks are not included and purchased independently. Budget roughly €10–€20 per person per day. A local monument guide at Ait Ben Haddou is not included — our driver accompanies you to the site, but a dedicated guide costs extra and is available on request.",
        ],
      },
      {
        heading: "Optional activities",
        body: [
          "Optional activities in Merzouga — quad biking, sandboarding, or buggy rides — are not included and are paid locally. A 4x4 transfer to the camp (alternative to camel trek) may also involve a local cost. Let us know your preferences when booking.",
        ],
      },
      {
        heading: "Entrance fees",
        body: [
          "The entrance ticket to the Ait Ben Haddou ksar is payable at the site in Moroccan dirhams. Taourirt Kasbah in Ouarzazate may also have a small entrance fee. Carry local currency in small denominations for these payments.",
        ],
      },
      {
        heading: "Travel insurance and personal expenses",
        body: [
          "Travel insurance is not included and is strongly recommended. Tips for the driver and camp staff are not mandatory but are customary and appreciated. Personal shopping, souvenirs, and drinks are of course personal expenses.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

