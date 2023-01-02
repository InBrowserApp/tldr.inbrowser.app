import { getPages } from "@/data/tldr-pages/page";

let languagesCache: Set<string> | null = null;

export async function getLanguages() {
  if (languagesCache) return languagesCache;

  const pages = await getPages();
  const languages = new Set(pages.map((page) => page.language));
  languagesCache = languages;
  return languages;
}
