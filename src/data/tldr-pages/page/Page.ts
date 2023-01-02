import type { Entry } from "@zip.js/zip.js";
import { TextWriter } from "@zip.js/zip.js";

export class Page {
  private readonly entry: Entry;
  private textCache: string | undefined = undefined;

  constructor(entry: Entry) {
    this.entry = entry;
  }

  async text(): Promise<string> {
    if (this.textCache) return this.textCache;
    const text = await this.entry.getData(new TextWriter());
    this.textCache = text;
    return text;
  }

  get path(): string {
    const filename = this.entry.filename;
    const prefix = "tldr-main";
    const suffix = ".md";

    return filename.slice(prefix.length, -suffix.length);
  }

  get filename(): string {
    return this.entry.filename;
  }

  get githubURL(): string {
    return `https://github.com/tldr-pages/tldr/blob/main${this.path}.md`;
  }

  get command(): string {
    const filenameParts = this.filename.split("/");
    const command = filenameParts[filenameParts.length - 1].split(".")[0];
    return command;
  }
}
