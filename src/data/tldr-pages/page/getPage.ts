import type { Page } from "./Page";
import { getPage as getPageFromGithub } from "./github";
import { getPage as getPageFromZip, isReady as isZipReady } from "./zip";
import { promiseAny } from "./promise.any";

export async function getPage(path: string): Promise<Page> {
  // if zip is ready or network is offline, get page from zip
  if (isZipReady || !navigator.onLine) {
    return await getPageFromZip(path);
  }

  const controller = new AbortController();

  // FIXME: This is a temporary solution
  // https://caniuse.com/mdn-javascript_builtins_promise_any
  const page = await promiseAny([
    getPageFromZip(path),
    getPageFromGithub(path, controller.signal),
  ]);

  controller.abort();
  return page;
}
