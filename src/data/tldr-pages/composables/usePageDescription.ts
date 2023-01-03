import type { Ref } from "vue";
import type { Page } from "@/data/tldr-pages/page";
import { computedAsync, get } from "@vueuse/core";

export function usePageDescription(page: Ref<Page> | Page) {
  const description = computedAsync(async () => {
    return await get(page).description;
  }, undefined);

  return { description };
}
