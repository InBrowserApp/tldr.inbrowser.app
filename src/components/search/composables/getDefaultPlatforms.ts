type Platform =
  | "android"
  | "common"
  | "freebsd"
  | "linux"
  | "netbsd"
  | "openbsd"
  | "osx"
  | "windows"
  | "sunos";

export function getDefaultPlatforms(): Platform[] {
  const platforms: Platform[] = ["common", "linux"];
  const navigatorPlatform = navigator?.platform?.toLowerCase();

  if (navigatorPlatform.includes("android")) {
    platforms.push("android");
  }

  if (navigatorPlatform.includes("freebsd")) {
    platforms.push("freebsd");
  }

  if (navigatorPlatform.includes("linux")) {
    platforms.push("linux");
  }

  if (navigatorPlatform.includes("mac")) {
    platforms.push("osx");
    return platforms;
  }

  if (navigatorPlatform.includes("netbsd")) {
    platforms.push("netbsd");
  }

  if (navigatorPlatform.includes("openbsd")) {
    platforms.push("openbsd");
    return platforms;
  }

  if (navigatorPlatform.includes("sunos")) {
    platforms.push("sunos");
  }

  if (navigatorPlatform) {
    if (navigatorPlatform.includes("win")) {
      platforms.push("windows");
      return platforms;
    }
  }

  const uaPlatform: string = (
    navigator as any
  )?.userAgentData?.platform?.toLowerCase();

  if (uaPlatform) {
    if (uaPlatform.includes("android")) {
      platforms.push("android");
    }

    if (uaPlatform.includes("freebsd")) {
      platforms.push("freebsd");
    }

    if (uaPlatform.includes("linux")) {
      platforms.push("linux");
    }

    if (uaPlatform.includes("mac")) {
      platforms.push("osx");
    }

    if (uaPlatform.includes("netbsd")) {
      platforms.push("netbsd");
    }

    if (uaPlatform.includes("openbsd")) {
      platforms.push("openbsd");
    }

    if (uaPlatform.includes("sunos")) {
      platforms.push("sunos");
    }

    if (uaPlatform.includes("win")) {
      platforms.push("windows");
    }
  }

  return [...new Set(platforms)];
}
