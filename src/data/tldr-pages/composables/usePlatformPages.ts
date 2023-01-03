import type { Ref } from "vue";
import { getPages, type Page } from "@/data/tldr-pages/page";

import { computedAsync, get } from "@vueuse/core";
import { useLoadingBar } from "naive-ui";

export function usePlatformPages(
  language: Ref<string> | string,
  platform: Ref<string> | string
) {
  const loadingBar = useLoadingBar();

  const pages = computedAsync<Page[] | undefined | null>(async () => {
    try {
      loadingBar.start();
      const pages = await getPages();
      const filteredPages = pages.filter(
        (page) =>
          page.platform === get(platform) && page.language === get(language)
      );
      loadingBar.finish();
      return filteredPages;
    } catch (error) {
      loadingBar.error();
      return null;
    }
  }, undefined);

  return { pages };
}
