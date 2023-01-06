export interface Page {
  readonly basename: string;
  readonly platform: string;
  readonly language: string;
  readonly path: string;
  readonly filename: string;
  readonly basenameLower: string;

  readonly githubURL: string;

  text(): Promise<string>;
  command: Promise<string>;
  description: Promise<string>;
}
