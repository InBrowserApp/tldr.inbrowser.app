import { computed } from "vue";
import { useRouteParams } from "@vueuse/router";

export function usePlatform() {
  const platformPathPart = useRouteParams<string>("platform");
  const platform = computed(() => platformPathPart.value.replace(".", ""));

  return {
    platform,
  };
}
