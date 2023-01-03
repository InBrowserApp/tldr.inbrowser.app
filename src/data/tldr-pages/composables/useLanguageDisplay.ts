import type { Ref } from "vue";
import { computed } from "vue";
import { get } from "@vueuse/core";
import { getLanguageDisplay } from "../display/language";

export function useLanguageDisplay(language: Ref<string> | string) {
  const languageDisplay = computed(() => {
    return getLanguageDisplay(get(language));
  });

  return { languageDisplay };
}
