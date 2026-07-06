import type { ImageLoaderProps } from "next/image";

/**
 * Custom next/image loader that serves responsive, right-sized images directly
 * from the Cloudinary CDN. This avoids double-optimizing already-hosted images
 * through the built-in Next optimizer and lets Cloudinary generate correctly
 * sized variants (better LCP and smaller transfer sizes).
 *
 * Non-Cloudinary URLs are returned untouched.
 */
export default function cloudinaryLoader({ src, width }: ImageLoaderProps): string {
  if (!src.includes("res.cloudinary.com") || !src.includes("/upload/")) {
    return src;
  }

  const [base, rest] = src.split("/upload/");
  const transform = `c_limit,w_${width},q_auto,f_auto,dpr_auto`;

  return `${base}/upload/${transform}/${rest}`;
}
