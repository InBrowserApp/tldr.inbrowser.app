import { getPages } from "./getPages";
import type { Page } from "../Page";

let pagesMapPromise: Promise<Map<string, Page>> | null = null;

export async function getPagesMap(): Promise<Map<string, Page>> {
  if (pagesMapPromise) return await pagesMapPromise;

  pagesMapPromise = (async () => {
    const pages = await getPages();
    const pagesMap = new Map(pages.map((page) => [page.path, page]));
    return pagesMap;
  })();

  return await pagesMapPromise;
}
