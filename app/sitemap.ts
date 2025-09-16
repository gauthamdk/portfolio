import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gautham.dk",
      lastModified: new Date(),
    },
  ];
}
