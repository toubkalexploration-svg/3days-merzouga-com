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
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1800&q=82",
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
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
