import type { ZipReader } from "@zip.js/zip.js";

let zipReaderPromise: Promise<ZipReader<unknown>> | null = null;

export async function getZipReader(): Promise<ZipReader<unknown>> {
  if (zipReaderPromise) return await zipReaderPromise;

  zipReaderPromise = (async () => {
    const zipLibPromise = import("./zip-js-lib");
    const response = await fetch("/tldr-pages.zip");
    const zipFileBlob = await response.blob();

    const { BlobReader, ZipReader } = await zipLibPromise;
    const zipFileReader = new BlobReader(zipFileBlob);
    const zipReader = new ZipReader(zipFileReader);
    return zipReader;
  })();

  return await zipReaderPromise;
}
