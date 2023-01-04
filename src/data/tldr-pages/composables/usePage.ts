import type { Ref } from "vue";
import { getPage, type Page } from "@/data/tldr-pages/page";
import { nextTick } from "vue";
import { computedAsync, get } from "@vueuse/core";
import { useLoadingBar } from "naive-ui";

export function usePage(path: Ref<string> | string) {
  const loadingBar = useLoadingBar();

  const page = computedAsync<Page | undefined | null>(async () => {
    try {
      loadingBar.start();
      const page = await getPage(get(path));
      return page;
    } catch (error) {
      nextTick(loadingBar.error);
      return null;
    }
  }, undefined);

  const markdown = computedAsync<string | undefined | null>(async () => {
    if (page.value) {
      const text = await page.value.text();
      nextTick(loadingBar.finish);
      return text;
    } else {
      return page.value;
    }
  }, undefined);

  return { page, markdown };
}
