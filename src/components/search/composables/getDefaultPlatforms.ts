type Platform = "common" | "openbsd" | "osx" | "linux" | "windows" | "android" | "sunos";

export function getDefaultPlatforms(): Platform[] {
  const platforms: Platform[] = ["common"];
  const navigatorPlatform = navigator?.platform?.toLowerCase();

  if (navigatorPlatform) {
    if (navigatorPlatform.includes("win")) {
      platforms.push("windows");
      return platforms;
    }

    if (navigatorPlatform.includes("openbsd")){
      platforms.push("openbsd");
      return platforms;
    }

    if (navigatorPlatform.includes("mac")) {
      platforms.push("osx");
      return platforms;
    }

    if (navigatorPlatform.includes("linux")) {
      platforms.push("linux");
    }

    if (navigatorPlatform.includes("android")) {
      platforms.push("android");
    }

    if (navigatorPlatform.includes("sunos")) {
      platforms.push("sunos");
    }
  }

  const uaPlatform: string = (
    navigator as any
  )?.userAgentData?.platform?.toLowerCase();

  if (uaPlatform) {
    if (uaPlatform.includes("win")) {
      platforms.push("windows");
    }

    if (uaPlatform.includes("openbsd")){
      platforms.push("openbsd");
    }

    if (uaPlatform.includes("mac")) {
      platforms.push("osx");
    }

    if (uaPlatform.includes("linux")) {
      platforms.push("linux");
    }

    if (uaPlatform.includes("android")) {
      platforms.push("android");
    }

    if (uaPlatform.includes("sunos")) {
      platforms.push("sunos");
    }
  }

  return [...new Set(platforms)];
}
