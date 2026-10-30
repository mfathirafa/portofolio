import type { MetadataRoute } from "next";

const base = "https://www.muhammadfathirafa.my.id";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects/siap-pro", "/projects/simpb"].map((path) => ({
    url: `${base}${path}`,
  }));
}