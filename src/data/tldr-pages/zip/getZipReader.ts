import { BlobReader, ZipReader } from "@zip.js/zip.js";

let zipReaderPromise: Promise<ZipReader<unknown>> | null = null;

export async function getZipReader(): Promise<ZipReader<unknown>> {
  if (zipReaderPromise) return await zipReaderPromise;

  zipReaderPromise = (async () => {
    const response = await fetch("/tldr-pages.zip");
    const zipFileBlob = await response.blob();
    const zipFileReader = new BlobReader(zipFileBlob);
    const zipReader = new ZipReader(zipFileReader);
    return zipReader;
  })();

  return await zipReaderPromise;
}
