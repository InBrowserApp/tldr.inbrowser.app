const manualLanguageTag = {
  "": "en",
} as Record<string, string>;

export function languageTag(language: string) {
  const manual = manualLanguageTag?.[language];
  if (manual) {
    return manual;
  }

  return language.replace("_", "-");
}
