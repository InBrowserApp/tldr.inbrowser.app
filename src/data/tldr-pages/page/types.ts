export interface Page {
  path: string;
  filename: string;
  getText(): Promise<string>;
  githubURL: string;
  command: string;
}
