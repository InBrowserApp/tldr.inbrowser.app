import { Page, getPages } from "../page";
import { filterByLanguageAndPlatform } from "./filter-language-platform";

export interface SearchOptions {
  size?: number;
  languages?: string[]; // ["", "de"]
  platforms?: string[]; // ["common", "linux"]
}

export async function searchPages(
  query_: string,
  options?: SearchOptions
): Promise<Page[]> {
  // normalize query
  const query = query_.trim().replace(" ", "-");
  const queryLower = query.toLowerCase();

  // get all pages
  const rawPages = await getPages();
  // filter by language and platform
  const pages = filterByLanguageAndPlatform(
    rawPages,
    options?.languages ?? [""],
    options?.platforms ?? ["common"]
  );

  // search with exact match, prefix match and any match
  const exactResult = pages.filter((page) => {
    return page.basenameLower === queryLower;
  });

  const sortedExactResult = sortPages(exactResult);

  const prefixResult = pages.filter((page) => {
    return page.basenameLower.startsWith(queryLower);
  });

  const sortedPrefixResult = sortPages(prefixResult);

  const anyResult = pages.filter((page) => {
    return page.basenameLower.includes(queryLower);
  });

  const sortedAnyResult = sortPages(anyResult);

  // merge results
  let result = [
    ...new Set([
      ...sortedExactResult,
      ...sortedPrefixResult,
      ...sortedAnyResult,
    ]),
  ];

  // limit entries size
  result = result.slice(0, options?.size ?? 20);

  return result;
}

const platformOrder = ["common", "linux", "osx", "windows"];

function sortPages(pages: Page[]): Page[] {
  return pages.sort((pageA, pageB) => {
    // sort by language
    const languageA = pageA.language;
    const languageB = pageB.language;
    const compareLanguage = languageA.localeCompare(languageB);
    if (compareLanguage !== 0) return compareLanguage;

    // sort by platform
    const platformA = pageA.platform;
    const platformB = pageB.platform;
    const indexA = platformOrder.indexOf(platformA);
    const indexB = platformOrder.indexOf(platformB);
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    const comparePlatform = platformA.localeCompare(platformB);
    if (comparePlatform !== 0) return comparePlatform;

    return 0;
  });
}
