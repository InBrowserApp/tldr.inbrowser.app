import type { Page } from "./Page";
import { getPages } from "./getPages";

export async function getPage(path: string): Promise<Page> {
  const pages = await getPages();
  const page = pages.find((page) => page.path === path);
  if (!page) throw new Error(`Page not found: ${path}`);
  return page;
}
