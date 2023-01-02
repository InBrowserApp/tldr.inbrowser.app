import { getPagesEntries } from "../zip";
import { Page } from "./Page";

let pagesCache: Page[] | null = null;

export async function getPages(): Promise<Page[]> {
  if (pagesCache) return pagesCache;

  const entries = await getPagesEntries();
  const pages = entries.map((entry) => new Page(entry));
  pagesCache = pages;

  return pagesCache;
}
