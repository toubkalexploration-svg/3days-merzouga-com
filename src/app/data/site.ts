export const siteUrl = "https://3days-merzouga.com";

export const siteName = "3 Days Merzouga";

export const cloudinaryCloudName = "dg13m8nf0";

/**
 * Build a Cloudinary delivery URL from a public ID (including its file extension).
 * `transform` lets callers add cropping/sizing, e.g. "w_1200,h_630,c_fill".
 */
export function cloudinaryUrl(publicId: string, transform = "f_auto,q_auto") {
  return `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/${transform}/${publicId}`;
}

export type SiteImage = {
  src: string;
  alt: string;
};

/** Real Sahara tour photography used across the site, each with SEO alt text. */
export const photos = {
  camelCaravanSunset: {
    src: cloudinaryUrl("917C3B8D-00D1-4C57-96F8-03F8E28BF06A_sqfrg2.jpg"),
    alt: "Camel caravan trekking across the golden Erg Chebbi dunes at sunset near Merzouga on a Marrakech Sahara desert tour",
  },
  todraGorge: {
    src: cloudinaryUrl("e3e8dc32-35a4-4775-8b62-6d5b451ef136_pe8cnn.jpg"),
    alt: "Towering limestone cliffs of Todra Gorge in southern Morocco, a scenic stop on the Marrakech to Merzouga desert tour",
  },
  travelerDunes: {
    src: cloudinaryUrl("54014e9a-1ae6-41e3-a802-e663aee070be_z5igtk.jpg"),
    alt: "Traveler standing among the golden Erg Chebbi sand dunes in the Merzouga Sahara desert",
  },
  groupCamelTrek: {
    src: cloudinaryUrl("12151785-89f0-4bbc-b592-72db7db6c34a_uj1pvw.jpg"),
    alt: "Group of travelers riding camels across the Sahara dunes on a Marrakech to Merzouga desert tour",
  },
} satisfies Record<string, SiteImage>;

export const defaultOgImage = cloudinaryUrl(
  "917C3B8D-00D1-4C57-96F8-03F8E28BF06A_sqfrg2.jpg",
  "w_1200,h_630,c_fill,g_auto,f_auto,q_auto",
);
