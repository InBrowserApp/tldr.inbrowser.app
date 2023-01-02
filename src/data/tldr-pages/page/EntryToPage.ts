import type { Entry } from "@zip.js/zip.js";
import { TextWriter } from "@zip.js/zip.js";
import type { Page } from "./types";

export function EntryToPage(entry: Entry): Page {
  return {
    filename: entry.filename,
    async getText() {
      const text = await entry.getData(new TextWriter());
      return text;
    },
  };
}
