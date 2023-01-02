import { Page } from "../page";
import { getPagesEntries } from "../zip";
import type { Entry } from "@zip.js/zip.js";

export interface SearchOptions {
  size?: number;
  language?: string[]; // ["", "de"]
  platform?: string[]; // ["common", "linux"]
}

export async function searchPages(
  query_: string,
  options?: SearchOptions
): Promise<Page[]> {
  const query = query_.trim().replace(" ", "-");

  let entries = await getPagesEntries();
  entries = entries.filter((entry) => {
    return entry.filename.toLowerCase().includes(query.toLowerCase());
  });

  // filter by language
  if (options?.language) {
    entries = filterByLanguage(entries, options.language);
  }

  if (options?.platform) {
    entries = filterByPlatform(entries, options.platform);
  }

  // limit entries size
  entries = entries.slice(0, options?.size ?? 20);

  const pages = entries.map((entry) => new Page(entry));
  return pages;
}

// filter by language
// for example: ["", "de"]
function filterByLanguage(entries: Entry[], languages: string[]): Entry[] {
  return entries.filter((entry) => {
    for (const language of languages) {
      if (language === "") {
        if (entry.filename.includes("/pages/")) return true;
      }

      if (entry.filename.includes(`/pages.${language}/`)) return true;
    }
    return false;
  });
}

// filter by platform
// for example: ["common", "linux"]
function filterByPlatform(entries: Entry[], platforms: string[]): Entry[] {
  return entries.filter((entry) => {
    for (const platform of platforms) {
      if (entry.filename.includes(`/${platform}/`)) return true;
    }
    return false;
  });
}
