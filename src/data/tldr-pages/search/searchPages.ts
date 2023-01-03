import { Page, getPages } from "../page";

export interface SearchOptions {
  size?: number;
  languages?: string[]; // ["", "de"]
  platforms?: string[]; // ["common", "linux"]
}

export async function searchPages(
  query_: string,
  options?: SearchOptions
): Promise<Page[]> {
  const query = query_.trim().replace(" ", "-");
  const pages = await getPages();
  const queryLower = query.toLowerCase();

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

  let result = [
    ...new Set([
      ...sortedExactResult,
      ...sortedPrefixResult,
      ...sortedAnyResult,
    ]),
  ];

  // filter by language
  if (options?.languages) {
    result = filterByLanguage(result, options.languages);
  }

  if (options?.platforms) {
    result = filterByPlatform(result, options.platforms);
  }

  // limit entries size
  result = result.slice(0, options?.size ?? 20);

  return result;
}

// filter by language
// for example: ["", "de"]
function filterByLanguage(pages: Page[], languages: string[]): Page[] {
  return pages.filter((page) => {
    for (const language of languages) {
      if (language === page.language) {
        return true;
      }
    }
    return false;
  });
}

// filter by platform
// for example: ["common", "linux"]
function filterByPlatform(pages: Page[], platforms: string[]): Page[] {
  return pages.filter((page) => {
    for (const platform of platforms) {
      if (platform === page.platform) {
        return true;
      }
    }
    return false;
  });
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
