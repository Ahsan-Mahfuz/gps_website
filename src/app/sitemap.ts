import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/data/products";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/product", "/about", "/cart", "/purchase", "/contact", "/support", "/privacy-policy", "/terms"].map(
    (path) => ({
      url: `${SITE.url}${path}`,
      lastModified: new Date(),
    })
  );
  const products = PRODUCTS.map((p) => ({
    url: `${SITE.url}/product/${p.slug}`,
    lastModified: new Date(),
  }));
  return [...routes, ...products];
}
