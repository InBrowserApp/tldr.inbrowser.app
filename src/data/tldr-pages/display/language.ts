import langmap from "langmap";

const additonalDisplayMap = {
  bs: langmap["bs-BA"].nativeName,
  lo: "ພາສາລາວ",
  sh: "Српскохрватски јазик",
} as Record<string, string>;

export function getLanguageDisplay(language: string): string {
  if (language === "") {
    return langmap["en"]["nativeName"];
  }

  // find in langmap
  // replace _ with -
  const languageWithDash = language.replace("_", "-");
  // get the language name from langmap
  const languageName = langmap?.[languageWithDash]?.nativeName;

  if (languageName) {
    return languageName;
  }

  return additonalDisplayMap?.[language] || language;
}
