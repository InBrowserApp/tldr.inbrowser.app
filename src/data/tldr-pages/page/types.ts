export interface Page {
  filename: string;
  getText(): Promise<string>;
}
