import type { Entry } from "@zip.js/zip.js";
import { getText } from "../zip";
import type { PageInternal } from "./Page";

export class PageFromZip implements PageInternal {
  private readonly entry: Entry;

  private textPromise: Promise<string> | undefined = undefined;
  readonly path: string;
  readonly filename: string;

  constructor(entry: Entry) {
    this.entry = entry;

    // pre-compute attributes
    this.filename = entry.filename;
    this.path = path(this.filename);
  }

  get text(): Promise<string> {
    if (this.textPromise) return this.textPromise;

    this.textPromise = getText(this.entry);

    return this.textPromise;
  }
}

function path(filename: string): string {
  const prefix = "tldr-main";
  const suffix = ".md";

  return filename.slice(prefix.length, -suffix.length);
}
