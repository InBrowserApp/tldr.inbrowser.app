import type { Ref } from "vue";
import { computed } from "vue";
import { get } from "@vueuse/core";
import { getPlatformDisplay } from "../display/platform";

export function usePlatformDisplay(platform: Ref<string> | string) {
  const platformDisplay = computed(() => {
    return getPlatformDisplay(get(platform));
  });

  return { platformDisplay };
}
