import type { PageInternal } from "../Page";

export class PageFromGithub implements PageInternal {
  readonly text: Promise<string>;
  readonly path: string;

  constructor(path: string, text: string) {
    this.text = Promise.resolve(text);
    this.path = path;
  }
}
