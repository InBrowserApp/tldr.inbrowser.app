import type { Ref } from "vue";
import { getPage, type Page } from "@/data/tldr-pages/page";

import { computedAsync, get } from "@vueuse/core";

export function usePage(path: Ref<string> | string) {
  const page = computedAsync<Page | undefined | null>(async () => {
    try {
      const page = await getPage(get(path));
      return page;
    } catch (error) {
      return null;
    }
  }, undefined);

  const markdown = computedAsync<string | undefined | null>(async () => {
    if (page.value) {
      const text = await page.value.text();
      return text;
    } else {
      return page.value;
    }
  }, undefined);

  return { page, markdown };
}
