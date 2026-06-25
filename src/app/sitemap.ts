import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/content";

const base = "https://freeyourdisk.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/mentions-legales", "/confidentialite"];
  return LOCALES.flatMap((locale) =>
    paths.map((p) => ({
      url: `${base}/${locale}${p}`,
      priority: p === "" ? 1 : 0.3,
      changeFrequency: (p === "" ? "weekly" : "yearly") as "weekly" | "yearly",
    })),
  );
}
