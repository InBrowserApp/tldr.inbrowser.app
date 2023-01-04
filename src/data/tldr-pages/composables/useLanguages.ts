import { languagesEmbed } from "../languages";
import { computedAsync } from "@vueuse/core";
import { getLanguages } from "../page";

export function useLanguages() {
  const languages = computedAsync(
    async () => [...(await getLanguages())],
    languagesEmbed
  );
  return { languages };
}
