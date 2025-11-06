import type { TextPresetConfig } from "./presets";

// @ts-expect-error - Module augmentation for published package
declare module "@markfoster314/marduk" {
  interface TextPresets {
    // Built-in presets
    default: TextPresetConfig;
    primary: TextPresetConfig;
    secondary: TextPresetConfig;
    success: TextPresetConfig;
    danger: TextPresetConfig;
    warning: TextPresetConfig;
    muted: TextPresetConfig;
    defaultDark: TextPresetConfig;
    primaryDark: TextPresetConfig;
    secondaryDark: TextPresetConfig;
    successDark: TextPresetConfig;
    dangerDark: TextPresetConfig;
    warningDark: TextPresetConfig;
    mutedDark: TextPresetConfig;
  }
}

export type { TextPresetConfig };
