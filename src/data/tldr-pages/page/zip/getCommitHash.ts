import { getEntries, getZipReader } from "./zipLib";

export async function getCommitHash(): Promise<string> {
  // make sure zip is parsed
  await getEntries();

  const reader = await getZipReader();
  const commentBuffer = reader.comment;
  const string = new TextDecoder().decode(commentBuffer);
  return string;
}
