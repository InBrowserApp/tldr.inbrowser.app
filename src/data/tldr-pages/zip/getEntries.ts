import { getZipReader } from "./getZipReader";
import type { Entry } from "@zip.js/zip.js";

let entriesCache: Entry[] | null = null;

export async function getEntries(): Promise<Entry[]> {
  if (entriesCache) return entriesCache;

  const zipReader = await getZipReader();
  const entries = await zipReader.getEntries();
  entriesCache = entries;
  return entries;
}

let pagesEntriesCache: Entry[] | null = null;

export async function getPagesEntries(): Promise<Entry[]> {
  if (pagesEntriesCache) return pagesEntriesCache;

  const entries = await getEntries();
  const pagesEntries = entries.filter(
    (entry) =>
      entry.filename.startsWith("tldr-main/pages") &&
      entry.filename.endsWith(".md")
  );
  pagesEntriesCache = pagesEntries;
  return pagesEntries;
}
