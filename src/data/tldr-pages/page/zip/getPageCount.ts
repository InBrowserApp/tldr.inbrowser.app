import { getPages } from "./getPages";

export async function getPageCount(): Promise<number> {
  const pages = await getPages();
  return pages.length;
}
