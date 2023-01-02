import { BlobReader, ZipReader } from "@zip.js/zip.js";

let zipReaderCache: ZipReader<unknown> | null = null;

export async function getZipReader(): Promise<ZipReader<unknown>> {
  if (zipReaderCache) return zipReaderCache;

  const response = await fetch("/tldr-pages.zip");
  const zipFileBlob = await response.blob();
  const zipFileReader = new BlobReader(zipFileBlob);
  const zipReader = new ZipReader(zipFileReader);
  zipReaderCache = zipReader;
  return zipReader;
}
