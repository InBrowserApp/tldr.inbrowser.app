import { getEntries } from "../zip/getEntries";

export async function getLastModifiedTime(): Promise<Date> {
  const entries = await getEntries();
  const zipEntry = entries[0];
  if (!zipEntry) throw new Error("tldr.zip not found");
  return zipEntry.lastModDate;
}
