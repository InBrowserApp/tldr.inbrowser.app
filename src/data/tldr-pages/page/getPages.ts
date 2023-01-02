import { getPagesEntries } from "../zip";
import { Page } from "./Page";

let pagesPromise: Promise<Page[]> | null = null;

export async function getPages(): Promise<Page[]> {
  if (pagesPromise) return await pagesPromise;

  pagesPromise = (async () => {
    const entries = await getPagesEntries();
    const pages = entries.map((entry) => new Page(entry));
    return pages;
  })();

  return await pagesPromise;
}
