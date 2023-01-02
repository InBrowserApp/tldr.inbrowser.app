import { getPages } from "../page";

export async function getPageCount(): Promise<number> {
  const pages = await getPages();
  return pages.length;
}
