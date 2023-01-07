import type { Page } from "../Page";
import { PageFromGithub } from "./PageFromGithub";
import { PageWrapper } from "../Page";

export async function getPage(
  path: string,
  signal?: AbortSignal
): Promise<Page> {
  const url = getAPIURL(path);
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`Failed to fetch ${url}`);
  const text = await response.text();
  const pageInternal = new PageFromGithub(path, text);
  const page = new PageWrapper(pageInternal);
  return page;
}

function getAPIURL(path: string) {
  return `https://raw.githubusercontent.com/tldr-pages/tldr/main${path}.md`;
}
