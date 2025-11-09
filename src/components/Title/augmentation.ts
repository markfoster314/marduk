import type { TitlePresetConfig } from "./presets";

declare module "@markfoster314/marduk" {
  interface TitlePresets {
    default: TitlePresetConfig;
    primary: TitlePresetConfig;
    secondary: TitlePresetConfig;
    success: TitlePresetConfig;
    danger: TitlePresetConfig;
    warning: TitlePresetConfig;
    muted: TitlePresetConfig;
    defaultDark: TitlePresetConfig;
    primaryDark: TitlePresetConfig;
    secondaryDark: TitlePresetConfig;
    successDark: TitlePresetConfig;
    dangerDark: TitlePresetConfig;
    warningDark: TitlePresetConfig;
    mutedDark: TitlePresetConfig;
  }
}
