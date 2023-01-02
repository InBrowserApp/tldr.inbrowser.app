import type { Entry } from "@zip.js/zip.js";
import { TextWriter } from "@zip.js/zip.js";

export class Page {
  private readonly entry: Entry;

  private textPromise: Promise<string> | undefined = undefined;
  private commandPromise: Promise<string> | undefined = undefined;

  constructor(entry: Entry) {
    this.entry = entry;
  }

  async text(): Promise<string> {
    if (this.textPromise) return this.textPromise;

    this.textPromise = (async () => {
      const text = await this.entry.getData(new TextWriter());
      return text;
    })();

    return this.textPromise;
  }

  // example: /pages/common/cat
  get path(): string {
    const filename = this.entry.filename;
    const prefix = "tldr-main";
    const suffix = ".md";

    return filename.slice(prefix.length, -suffix.length);
  }

  // example: tldr-main/pages/common/cat.md
  get filename(): string {
    return this.entry.filename;
  }

  get githubURL(): string {
    return `https://github.com/tldr-pages/tldr/blob/main${this.path}.md`;
  }

  get command(): Promise<string> {
    if (this.commandPromise) return this.commandPromise;

    this.commandPromise = (async () => {
      const text = await this.text();
      // regex get # h1
      const command = text.match(/^# (.*)/)?.[1];
      if (!command) {
        return this.basename;
      }
      return command;
    })();

    return this.commandPromise;
  }

  get basename(): string {
    const filenameParts = this.filename.split("/");
    const command = filenameParts[filenameParts.length - 1].split(".")[0];
    return command;
  }

  // path: /pages.zh/common/cat.md
  // return "zh"
  get language(): string {
    const path = this.path;
    const pageSection = path.split("/")[1];
    const languageParts = pageSection.split(".");
    if (languageParts.length !== 2) return "";
    const language = languageParts[1];
    return language;
  }

  // path: /pages.zh/common/cat.md
  // return "common"
  get platform(): string {
    const path = this.path;
    return path.split("/")[2];
  }
}
