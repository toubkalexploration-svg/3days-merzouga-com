import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import "./globals.css";

const siteUrl = "https://3days-merzouga.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marrakech to Merzouga Desert Tours | 3 Days Merzouga",
    template: "%s | 3 Days Merzouga",
  },
  description:
    "Book Marrakech to Merzouga desert tours with local specialists. Compare 3-day and 4-day Sahara itineraries, Erg Chebbi camel treks, Dades Valley, Todra Gorge, private transport, and desert camps.",
  applicationName: "3 Days Merzouga",
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
    siteName: "3 Days Merzouga",
    title: "Marrakech to Merzouga Desert Tours | 3 Days Merzouga",
    description:
      "Compare focused Morocco Sahara tours from Marrakech to Merzouga, including Erg Chebbi camel trekking, Dades Valley, Todra Gorge, private options, and desert camp nights.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&h=630&q=80",
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
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&h=630&q=80",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbf7ef] text-[#201913]">
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
