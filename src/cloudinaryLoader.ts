import type { ImageLoaderProps } from "next/image";

/**
 * Custom next/image loader serving responsive, right-sized images directly
 * from Cloudinary with automatic format and economical compression.
 * Avoids serving massive 3840px assets to mobile devices and removes redundant transforms.
 */
export default function cloudinaryLoader({ src, width, quality }: ImageLoaderProps): string {
  if (!src.includes("res.cloudinary.com") || !src.includes("/upload/")) {
    return src;
  }

  const [base, rest] = src.split("/upload/");
  // Strip any existing inline transforms (e.g. f_auto,q_auto or w_1200...) from the public ID
  const segments = rest.split("/");
  const cleanSegments = segments.filter(
    (seg) => !/^(?:[a-z]{1,2}_[a-zA-Z0-9_.:-]+,?)+$/.test(seg)
  );
  const publicId = cleanSegments.join("/");

  const q = quality ? `q_${quality}` : "q_auto:eco";
  const transform = `c_limit,w_${width},${q},f_auto`;

  return `${base}/upload/${transform}/${publicId}`;
}
