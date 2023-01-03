import { useRoute } from "vue-router";
import { computed } from "vue";

export function usePlatform() {
  const route = useRoute();
  const platformPathPart = computed(() => {
    const platform = route.params.platform;
    return platform as string;
  });
  const platform = computed(() => platformPathPart.value.replace(".", ""));

  return {
    platform,
  };
}
