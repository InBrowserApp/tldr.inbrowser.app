import { getPages } from "@/data/tldr-pages/page";

let platformsCache: Set<string> | null = null;

export async function getPlatforms() {
  if (platformsCache) return platformsCache;

  const pages = await getPages();
  const platforms = new Set(pages.map((page) => page.platform));
  platformsCache = platforms;
  return platforms;
}
