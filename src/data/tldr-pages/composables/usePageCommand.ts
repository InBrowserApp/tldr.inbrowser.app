import type { Ref } from "vue";
import type { Page } from "@/data/tldr-pages/page";
import { computedAsync, get } from "@vueuse/core";

export function usePageCommand(page: Ref<Page> | Page) {
  const command = computedAsync(async () => {
    return await get(page).command;
  }, get(page).basename);

  return { command };
}

type PageOptional = Page | null | undefined;

export function usePageOptionalCommand(
  page: Ref<PageOptional> | PageOptional,
  fallback: Ref<string> | string
) {
  const command = computedAsync(async () => {
    const page_ = get(page);
    if (page_) {
      return await page_.command;
    } else {
      return get(fallback);
    }
  }, get(fallback));

  return { command };
}
