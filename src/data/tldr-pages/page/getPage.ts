import type { Page } from "./Page";
import { getPage as getPageFromGithub } from "./github";
import { getPage as getPageFromZip, isReady as isZipReady } from "./zip";
import { promiseAny } from "./promise.any";

export async function getPage(path: string): Promise<Page> {
  const online = navigator?.onLine ?? true;

  // if zip is ready or network is offline, get page from zip
  if (isZipReady || !online) {
    return await getPageFromZip(path);
  }

  // FIXME: This is a temporary solution
  // https://caniuse.com/mdn-javascript_builtins_promise_any
  const page = await promiseAny([
    getPageFromZip(path),
    getPageFromGithub(path),
  ]);
  return page;
}
