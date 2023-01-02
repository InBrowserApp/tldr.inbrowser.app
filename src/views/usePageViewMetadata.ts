import type { Ref } from "vue";
import type { Page } from "@/data/tldr-pages/page";
import { computed } from "vue";
import { useHead } from "@vueuse/head";
import { computedAsync, get } from "@vueuse/core";

export function usePageViewMetadata(
  path: Ref<string> | string,
  page: Ref<Page | undefined | null>
) {
  const titleFromPath = computed(() => {
    const parts = get(path).split("/");
    return parts[parts.length - 1];
  });

  const titleRaw = computedAsync<string>(async () => {
    if (page.value) {
      const title = await page.value.command;
      return title;
    } else {
      return titleFromPath.value;
    }
  }, titleFromPath.value);

  const title = computed(() => `${titleRaw.value} | tldr InBrowser.App`);

  const description = computedAsync<string | undefined>(async () => {
    if (page.value?.description) {
      return await page.value.description;
    }
  }, undefined);

  const metas = computed(() => {
    if (description.value) {
      return [{ name: "description", content: description.value }];
    } else {
      return [];
    }
  });

  const head = computed(() => {
    return {
      title,
      meta: metas.value,
      link: [
        {
          rel: "canonical",
          href: `https://tldr.inbrowser.app${get(path)}`,
        },
      ],
    };
  });

  useHead(head);
}
