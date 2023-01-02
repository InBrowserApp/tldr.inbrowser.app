import { getEntries } from "../zip";
import type { Page } from "./types";
import { EntryToPage } from "./EntryToPage";

export async function getPage(path: string): Promise<Page> {
  const entries = await getEntries();
  const filename = `tldr-main${path}.md`;
  const entry = entries.find((entry) => entry.filename === filename);
  if (!entry) throw new Error(`Page not found: ${path}`);
  return EntryToPage(entry);
}
