const displayMap = {
  common: "Common",
  linux: "Linux",
  openbsd: "OpenBSD",
  osx: "macOS",
  windows: "Windows",
  android: "Android",
  sunos: "SunOS",
} as Record<string, string>;

export function getPlatformDisplay(platform: string) {
  return displayMap?.[platform] || platform;
}
