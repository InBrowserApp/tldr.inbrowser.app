import type { Ref } from "vue";
import { getPages } from "@/data/tldr-pages/page";
import { nextTick } from "vue";
import { computedAsync, get } from "@vueuse/core";
import { useLoadingBar } from "naive-ui";

export function useLanguagePlatforms(language: Ref<string> | string) {
  const loadingBar = useLoadingBar();

  const platformCounter = computedAsync<Map<string, number> | undefined | null>(
    async () => {
      try {
        loadingBar.start();
        const pages = await getPages();
        const filteredPages = pages.filter(
          (page) => page.language === get(language)
        );

        const platformCounter = new Map<string, number>();
        for (const page of filteredPages) {
          const count = platformCounter.get(page.platform);
          if (count) {
            platformCounter.set(page.platform, count + 1);
          } else {
            platformCounter.set(page.platform, 1);
          }
        }

        nextTick(loadingBar.finish);

        if (platformCounter.size === 0) {
          return null;
        }

        return platformCounter;
      } catch (error) {
        nextTick(loadingBar.error);
        return null;
      }
    },
    undefined
  );

  return { platformCounter };
}
