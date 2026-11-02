// Architecture preparation for future multilingual support (/fr/ and /es/).
// In accordance with project instructions: do NOT publish translated pages
// until verified, human-translated content, metadata, reciprocal hreflang,
// and language navigation are fully confirmed.

export const supportedLocales = ["en", "fr", "es"] as const;
export type Locale = (typeof supportedLocales)[number];
export const defaultLocale: Locale = "en";

export type LocalizedPath = {
  locale: Locale;
  path: string;
};

/** Build reciprocal hreflang alternate links for future multilingual deployment */
export function buildHreflangAlternates(basePath: string, domain = "https://3days-merzouga.com") {
  const cleanPath = basePath.startsWith("/") ? basePath : `/${basePath}`;
  return {
    canonical: `${domain}${cleanPath}`,
    languages: {
      en: `${domain}${cleanPath}`,
      fr: `${domain}/fr${cleanPath === "/" ? "" : cleanPath}`,
      es: `${domain}/es${cleanPath === "/" ? "" : cleanPath}`,
      "x-default": `${domain}${cleanPath}`,
    },
  };
}

