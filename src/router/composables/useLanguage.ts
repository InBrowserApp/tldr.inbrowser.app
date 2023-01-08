import { computed } from "vue";
import { useRouteParams } from "@vueuse/router";

export function useLanguage() {
  const languagePathPart = useRouteParams<string>("language");
  const language = computed(() => languagePathPart.value.replace(".", ""));

  return {
    language,
  };
}
