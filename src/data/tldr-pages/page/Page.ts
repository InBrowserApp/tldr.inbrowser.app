export interface Page {
  readonly basename: string;
  readonly platform: string;
  readonly language: string;
  readonly path: string;
  readonly basenameLower: string;

  readonly githubURL: string;

  text: Promise<string>;
  command: Promise<string>;
  description: Promise<string>;
}

export interface PageInternal {
  readonly path: string;
  text: Promise<string>;
}

export class PageWrapper implements Page {
  private pageInternal: PageInternal;

  private commandPromise: Promise<string> | undefined = undefined;
  private descriptionPromise: Promise<string> | undefined = undefined;

  readonly basename: string;
  readonly platform: string;
  readonly language: string;
  readonly path: string;
  readonly basenameLower: string;

  constructor(page: PageInternal) {
    this.pageInternal = page;

    this.path = page.path;
    this.basename = basename(this.path);
    this.platform = platform(this.path);
    this.language = language(this.path);

    this.basenameLower = this.basename.toLowerCase();
  }

  get githubURL(): string {
    return `https://github.com/tldr-pages/tldr/blob/main${this.path}.md`;
  }

  get text(): Promise<string> {
    return this.pageInternal.text;
  }

  get command(): Promise<string> {
    if (this.commandPromise) return this.commandPromise;

    this.commandPromise = (async () => {
      const text = await this.text;
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
      const text = await this.text;

      // regex get > quote multi line
      const descriptionParts = [...text.matchAll(/\n> (.*)/g)];
      const description = descriptionParts.map((part) => part[1]).join(" ");
      return description;
    })();

    return this.descriptionPromise;
  }
}

function basename(path: string): string {
  const filenameParts = path.split("/");
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
