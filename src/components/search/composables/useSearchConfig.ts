import { useStorage } from "@vueuse/core";
import { getDefaultPlatforms } from "./getDefaultPlatforms";
import { getDefaultLanguages } from "./getDefaultLanguages";

export function useSearchConfig() {
  const config = useStorage(
    "tldr.inbrowser.app:search:config",
    {
      languages: getDefaultLanguages(),
      platforms: getDefaultPlatforms(),
    },
    undefined,
    { mergeDefaults: true }
  );

  return { config };
}
