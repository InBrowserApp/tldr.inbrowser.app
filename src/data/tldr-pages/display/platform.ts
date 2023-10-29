const displayMap = {
  android: "Android",
  common: "Common",
  freebsd: "FreeBSD",
  linux: "Linux",
  netbsd: "NetBSD",
  openbsd: "OpenBSD",
  osx: "macOS",
  sunos: "SunOS",
  windows: "Windows",
} as Record<string, string>;

export function getPlatformDisplay(platform: string) {
  return displayMap?.[platform] || platform;
}
