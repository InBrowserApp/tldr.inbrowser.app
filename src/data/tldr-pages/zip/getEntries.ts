import { getZipReader } from "./getZipReader";
import type { Entry } from "@zip.js/zip.js";

export async function getEntries(): Promise<Entry[]> {
  const zipReader = await getZipReader();
  const entries = await zipReader.getEntries();
  return entries;
}
