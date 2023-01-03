import { useRoute } from "vue-router";
import { computed } from "vue";

export function useLanguage() {
  const route = useRoute();
  const languagePathPart = computed(() => {
    const language = route.params.language;
    return language as string;
  });
  const language = computed(() => languagePathPart.value.replace(".", ""));

  const languageDisplayName = computed(() => {
    if (language.value === "") {
      return "en";
    } else {
      return language.value;
    }
  });

  return {
    language,
    languageDisplayName,
  };
}
