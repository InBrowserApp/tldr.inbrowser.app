import { getPages } from "@/data/tldr-pages/page";

let platformsPromise: Promise<Set<string>> | null = null;

export async function getPlatforms(): Promise<Set<string>> {
  if (platformsPromise) return await platformsPromise;

  platformsPromise = (async () => {
    const pages = await getPages();
    const platforms = new Set(pages.map((page) => page.platform));
    return platforms;
  })();

  return await platformsPromise;
}
