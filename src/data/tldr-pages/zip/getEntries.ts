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
