import { getEntries } from "../zip";
import { Page } from "./Page";

export async function getPage(path: string): Promise<Page> {
  const entries = await getEntries();
  const filename = `tldr-main${path}.md`;
  const entry = entries.find((entry) => entry.filename === filename);
  if (!entry) throw new Error(`Page not found: ${path}`);
  return new Page(entry);
}
