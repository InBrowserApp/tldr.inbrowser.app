import type { Page } from "../page";

const cache = new Map<string, Page[]>();

export function filterByLanguageAndPlatform(
  pages: Page[],
  languages: string[],
  platforms: string[]
): Page[] {
  const cacheKey = getCacheKey(languages, platforms);
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const filtered = pages.filter(
    (page) =>
      languages.includes(page.language) && platforms.includes(page.platform)
  );

  cache.set(cacheKey, filtered);

  return filtered;
}

function getCacheKey(languages: string[], platforms: string[]): string {
  return `${languages.join(",")}:${platforms.join(",")}`;
}
