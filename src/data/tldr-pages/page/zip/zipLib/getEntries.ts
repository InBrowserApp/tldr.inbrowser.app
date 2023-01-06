import { getZipReader } from "./getZipReader";
import type { Entry } from "@zip.js/zip.js";

let entriesPromise: Promise<Entry[]> | null = null;

export async function getEntries(): Promise<Entry[]> {
  if (entriesPromise) return await entriesPromise;

  entriesPromise = (async () => {
    const zipReader = await getZipReader();
    const entries = await zipReader.getEntries();
    return entries;
  })();

  return await entriesPromise;
}

let pagesEntriesPromise: Promise<Entry[]> | null = null;

export async function getPagesEntries(): Promise<Entry[]> {
  if (pagesEntriesPromise) return await pagesEntriesPromise;

  pagesEntriesPromise = (async () => {
    const entries = await getEntries();
    const pagesEntries = entries.filter(
      (entry) =>
        entry.filename.startsWith("tldr-main/pages") &&
        entry.filename.endsWith(".md")
    );
    return pagesEntries;
  })();

  return await pagesEntriesPromise;
}
