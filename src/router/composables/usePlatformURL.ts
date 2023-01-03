import { useRouter } from "vue-router";
import { computed } from "vue";
import type { Ref } from "vue";
import { get } from "@vueuse/core";

export function usePlatformURL(
  language: Ref<string> | string,
  platform: Ref<string> | string
) {
  const router = useRouter();

  const url = computed(() => {
    const languagePart = get(language) === "" ? "" : `.${get(language)}`;
    return `/pages${languagePart}/${get(platform)}`;
  });

  const push = () => {
    router.push(url.value);
  };

  return {
    url,
    push,
  };
}
