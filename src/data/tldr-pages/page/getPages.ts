import { getPagesEntries } from "../zip";
import { PageFromZip } from "./PageFromZip";
import type { Page } from "./Page";
import { PageWrapper } from "./Page";

let pagesPromise: Promise<Page[]> | null = null;

export async function getPages(): Promise<Page[]> {
  if (pagesPromise) return await pagesPromise;

  pagesPromise = (async () => {
    const entries = await getPagesEntries();
    const pages = entries.map(
      (entry) => new PageWrapper(new PageFromZip(entry))
    );
    return pages;
  })();

  return await pagesPromise;
}
