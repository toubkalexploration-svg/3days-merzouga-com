export const siteUrl = "https://3days-merzouga.com";

export const siteName = "3 Days Merzouga";

export const operatorName = "Atlas Toubkal Trek";
export const operatorUrl = "https://www.atlas-toubkal-trek.com/";
export const operatorGoogleProfileUrl = "https://maps.app.goo.gl/D2VD57C9oV4qTRv36?g_st=ic";

export const cloudinaryCloudName = "dg13m8nf0";

/**
 * Build a Cloudinary delivery URL from a public ID (including its file extension).
 * `transform` lets callers add cropping/sizing, e.g. "w_1200,h_630,c_fill".
 */
export function cloudinaryUrl(publicId: string, transform = "f_auto,q_auto:eco") {
  return `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/${transform}/${publicId}`;
}

/**
 * Base Cloudinary delivery URL without a baked transform. Use this for images
 * rendered through next/image so the custom loader can generate responsive,
 * right-sized variants per breakpoint.
 */
export function cloudinaryImage(publicId: string) {
  return `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/${publicId}`;
}

export type SiteImage = {
  src: string;
  alt: string;
};

/** Real Sahara tour photography with natural, descriptive alt text (no keyword stuffing). */
export const photos = {
  camelCaravanSunset: {
    src: cloudinaryImage("917C3B8D-00D1-4C57-96F8-03F8E28BF06A_sqfrg2.jpg"),
    alt: "Camel caravan trekking across golden Erg Chebbi sand dunes at sunset near Merzouga",
  },
  todraGorge: {
    src: cloudinaryImage("e3e8dc32-35a4-4775-8b62-6d5b451ef136_pe8cnn.jpg"),
    alt: "Towering limestone canyon walls of Todra Gorge near Tinghir",
  },
  travelerDunes: {
    src: cloudinaryImage("54014e9a-1ae6-41e3-a802-e663aee070be_z5igtk.jpg"),
    alt: "Traveler standing among the sweeping Erg Chebbi dunes in the Merzouga Sahara",
  },
  groupCamelTrek: {
    src: cloudinaryImage("12151785-89f0-4bbc-b592-72db7db6c34a_uj1pvw.jpg"),
    alt: "Group riding camels through the golden Sahara dunes near Merzouga",
  },
} satisfies Record<string, SiteImage>;

export const defaultOgImage = cloudinaryUrl(
  "917C3B8D-00D1-4C57-96F8-03F8E28BF06A_sqfrg2.jpg",
  "w_1200,h_630,c_fill,g_auto,f_auto,q_auto:eco",
);

// ---------------------------------------------------------------------------
// Trust & Operator Profile
// Fields marked with comments are prepared for user-provided data.
// Empty/undefined fields are NEVER displayed publicly.
// ---------------------------------------------------------------------------

export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  photoUrl?: string;
};

export type SocialProfile = {
  platform: string;
  url: string;
};

export type VerifiedReviewProfile = {
  platform: string;
  url: string;
  rating?: number;
  reviewCount?: number;
};

export type TrustArchitecture = {
  /** Real verified operator details */
  brandName: string;
  operatorName: string;
  operatorUrl: string;
  operatorGoogleProfileUrl: string;
  focusSummary: string;
  focusPoints: {
    title: string;
    description: string;
  }[];

  /** PREPARED FIELDS: Provide when verified details become available */
  teamMembers?: TeamMember[];
  officialRegistrationNumber?: string;
  tourismLicenseNumber?: string;
  physicalOfficeAddress?: string;
  socialProfiles?: SocialProfile[];
  verifiedReviewProfiles?: VerifiedReviewProfile[];
};

export const trustProfile: TrustArchitecture = {
  brandName: siteName,
  operatorName,
  operatorUrl,
  operatorGoogleProfileUrl,
  focusSummary:
    "We specialize exclusively in Marrakech, Fes, and Merzouga Sahara routes with private vehicles, dedicated drivers, and transparent pacing.",
  focusPoints: [
    {
      title: "Marrakech, Fes & Merzouga routes",
      description:
        "We keep our focus strictly on the classic southern routes: 3-day round trips, 4-day immersive Sahara stays, and one-way Marrakech-to-Fes crossings.",
    },
    {
      title: "Local road & mountain knowledge",
      description:
        "Our driving team is born and raised in Morocco with years of navigating the Tizi n'Tichka pass, Dades gorges, Todra canyon, and desert tracks.",
    },
    {
      title: "Private & small-group planning",
      description:
        "Every published tour is operated privately for your party, allowing personalized pacing, spontaneous photo stops, and family-friendly schedules.",
    },
    {
      title: "Camp & accommodation options",
      description:
        "We clearly distinguish between traditional standard Berber camps and luxury camps with private ensuite facilities so expectations match reality.",
    },
    {
      title: "Direct pre-departure communication",
      description:
        "You communicate directly with our team via WhatsApp and email before departure to verify luggage room, pickup points, and dietary needs.",
    },
    {
      title: "Honest driving times & realistic pace",
      description:
        "We never understate driving hours or hide the reality of long travel days. You receive truthful drive times and realistic arrival estimates.",
    },
  ],
  // Prepared fields: left undefined until verified by user
  teamMembers: undefined,
  officialRegistrationNumber: undefined,
  tourismLicenseNumber: undefined,
  physicalOfficeAddress: undefined,
  socialProfiles: undefined,
  verifiedReviewProfiles: undefined,
};
