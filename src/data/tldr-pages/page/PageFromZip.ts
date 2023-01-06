import type { Entry } from "@zip.js/zip.js";
import { getText } from "../zip";

export class PageFromZip {
  private readonly entry: Entry;

  private textPromise: Promise<string> | undefined = undefined;
  private commandPromise: Promise<string> | undefined = undefined;
  private descriptionPromise: Promise<string> | undefined = undefined;

  readonly basename: string;
  readonly platform: string;
  readonly language: string;
  readonly path: string;
  readonly filename: string;

  // for search
  readonly basenameLower: string;

  constructor(entry: Entry) {
    this.entry = entry;

    // pre-compute attributes
    this.filename = entry.filename;
    this.path = path(this.filename);
    this.basename = basename(this.filename);
    this.platform = platform(this.path);
    this.language = language(this.path);

    // for search
    this.basenameLower = this.basename.toLowerCase();
  }

  async text(): Promise<string> {
    if (this.textPromise) return this.textPromise;

    this.textPromise = getText(this.entry);

    return this.textPromise;
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

  get description(): Promise<string> {
    if (this.descriptionPromise) return this.descriptionPromise;

    this.descriptionPromise = (async () => {
      const text = await this.text();

      // regex get > quote multi line
      const descriptionParts = [...text.matchAll(/\n> (.*)/g)];
      const description = descriptionParts.map((part) => part[1]).join(" ");
      return description;
    })();

    return this.descriptionPromise;
  }
}

function path(filename: string): string {
  const prefix = "tldr-main";
  const suffix = ".md";

  return filename.slice(prefix.length, -suffix.length);
}

function basename(filename: string): string {
  const filenameParts = filename.split("/");
  const command = filenameParts[filenameParts.length - 1].split(".")[0];
  return command;
}

// path: /pages.zh/common/cat.md
// return "common"
function platform(path: string): string {
  return path.split("/")[2];
}

// path: /pages.zh/common/cat.md
// return "zh"
function language(path: string): string {
  const pageSection = path.split("/")[1];
  const languageParts = pageSection.split(".");
  if (languageParts.length !== 2) return "";
  const language = languageParts[1];
  return language;
}
