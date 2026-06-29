import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/tours/3-day-merzouga-desert-tour",
        destination: "/tours/3-day-marrakech-to-merzouga-desert-tour",
        permanent: true,
      },
      {
        source: "/tours/4-day-merzouga-desert-adventure",
        destination: "/tours/4-day-marrakech-to-merzouga-desert-tour",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
