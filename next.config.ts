import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/cloudinaryLoader.ts",
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.3days-merzouga.com" }],
        destination: "https://3days-merzouga.com/:path*",
        permanent: true,
      },
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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Content-Security-Policy", value: "upgrade-insecure-requests;" },
        ],
      },
    ];
  },
};

export default nextConfig;
