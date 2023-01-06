import type { Page } from "../Page";
import { getPagesMap } from "./getPagesMap";

export async function getPage(path: string): Promise<Page> {
  const pagesMap = await getPagesMap();
  const page = pagesMap.get(path);
  if (!page) throw new Error(`Page not found: ${path}`);
  return page;
}
