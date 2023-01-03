import { computed } from "vue";
import type { Ref } from "vue";
import { get } from "@vueuse/core";

export function useLanguageURL(language: Ref<string> | string) {
  const url = computed(() => {
    const languagePart = get(language) === "" ? "" : `.${get(language)}`;
    return `/pages${languagePart}`;
  });

  return {
    url,
  };
}
