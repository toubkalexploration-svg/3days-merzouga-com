import type { Metadata } from "next";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { defaultOgImage, siteName, siteUrl } from "./data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marrakech to Merzouga Desert Tours | 3 Days Merzouga",
    template: "%s | 3 Days Merzouga",
  },
  description:
    "Book Marrakech to Merzouga desert tours with local specialists. Compare 3-day and 4-day Sahara itineraries, Erg Chebbi camel treks, Dades Valley, Todra Gorge, private transport, and desert camps.",
  applicationName: "3 Days Merzouga",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "192x192" }],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "192x192" }],
  },
  authors: [{ name: "3 Days Merzouga" }],
  creator: "3 Days Merzouga",
  publisher: "3 Days Merzouga",
  keywords: [
    "Merzouga tour",
    "Merzouga from Marrakech",
    "Marrakech to Merzouga desert tour",
    "Marrakech to Merzouga 3 day desert tour",
    "3 days Marrakech to Merzouga",
    "Marrakech to Fes desert tour",
    "Merzouga 3 day tour",
    "Dades Valley tour",
    "Todra Gorge tour",
    "Erg Chebbi camel trek",
    "Sahara desert camp Morocco",
    "private desert tour Morocco",
    "shared Merzouga desert tour",
    "luxury desert camp Merzouga",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Marrakech to Merzouga Desert Tours | 3 Days Merzouga",
    description:
      "Compare focused Morocco Sahara tours from Marrakech to Merzouga, including Erg Chebbi camel trekking, Dades Valley, Todra Gorge, private options, and desert camp nights.",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Golden Sahara dunes for a Merzouga desert tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marrakech to Merzouga Desert Tours | 3 Days Merzouga",
    description:
      "Plan a focused Merzouga desert trip from Marrakech with Dades Valley, Todra Gorge, Erg Chebbi camel trekking, and Sahara camp nights.",
    images: [
      defaultOgImage,
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
