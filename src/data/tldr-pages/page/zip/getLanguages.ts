import { getPages } from "./getPages";

let languagesPromise: Promise<Set<string>> | null = null;

export async function getLanguages(): Promise<Set<string>> {
  if (languagesPromise) return await languagesPromise;

  languagesPromise = (async () => {
    const pages = await getPages();
    const languages = new Set(pages.map((page) => page.language));
    return languages;
  })();

  return await languagesPromise;
}
