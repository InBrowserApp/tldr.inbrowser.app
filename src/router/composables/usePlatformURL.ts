import { computed } from "vue";
import type { Ref } from "vue";
import { get } from "@vueuse/core";
import { useLanguageURL } from "./useLanguageURL";

export function usePlatformURL(
  language: Ref<string> | string,
  platform: Ref<string> | string
) {
  const { url: languageURL } = useLanguageURL(language);

  const url = computed(() => {
    return `${languageURL.value}/${get(platform)}`;
  });

  return {
    url,
  };
}
