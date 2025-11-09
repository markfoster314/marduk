import type { ButtonPresetConfig } from "./presets";

declare module "@markfoster314/marduk" {
  interface ButtonPresets {
    default: ButtonPresetConfig;
    primary: ButtonPresetConfig;
    secondary: ButtonPresetConfig;
    success: ButtonPresetConfig;
    danger: ButtonPresetConfig;
    warning: ButtonPresetConfig;
    defaultDark: ButtonPresetConfig;
    primaryDark: ButtonPresetConfig;
    secondaryDark: ButtonPresetConfig;
    successDark: ButtonPresetConfig;
    dangerDark: ButtonPresetConfig;
    warningDark: ButtonPresetConfig;
  }
}
