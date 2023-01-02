import type { Entry } from "@zip.js/zip.js";
import { TextWriter } from "@zip.js/zip.js";
import type { Page } from "./types";

export function EntryToPage(entry: Entry): Page {
  const filename = entry.filename;
  const prefix = "tldr-main";
  const suffix = ".md";

  const path = entry.filename.slice(prefix.length, -suffix.length);

  const getText = () => entry.getData(new TextWriter());
  const githubURL = `https://github.com/tldr-pages/tldr/blob/main${path}${suffix}`;
  const filenameParts = filename.split("/");
  const command = filenameParts[filenameParts.length - 1].split(".")[0];

  return {
    path,
    filename,
    getText,
    githubURL,
    command,
  };
}
