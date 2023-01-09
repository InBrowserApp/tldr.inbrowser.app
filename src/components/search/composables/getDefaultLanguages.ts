const langChoices = [
  "ar",
  "bn",
  "bs",
  "ca",
  "da",
  "de",
  "es",
  "fa",
  "fr",
  "hi",
  "id",
  "it",
  "ja",
  "ko",
  "lo",
  "ml",
  "ne",
  "nl",
  "no",
  "pl",
  "pt_BR",
  "pt_PT",
  "ro",
  "ru",
  "sh",
  "sr",
  "sv",
  "ta",
  "th",
  "tr",
  "uk",
  "uz",
  "zh",
  "zh_TW",
  //   "",
];

export function getDefaultLanguages(): string[] {
  const languages = [""];
  const navigatorLanguage = navigator?.language;
  if (!navigatorLanguage) {
    return languages;
  }

  // turn en-US into en_us
  const navigatorLanguageLower = navigatorLanguage.toLowerCase();

  const langChoicesDash = langChoices.map((lang) =>
    lang.toLowerCase().replace("_", "-")
  );

  if (langChoicesDash.includes(navigatorLanguageLower)) {
    languages.push(navigatorLanguage);
  }

  // en-US match en
  const naivgatorParts = navigatorLanguageLower.split("-");
  if (langChoicesDash.includes(naivgatorParts[0])) {
    languages.push(naivgatorParts[0]);
  }

  return [...new Set(languages)];
}
