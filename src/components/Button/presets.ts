import type { ButtonProps } from "./Button";

export type ButtonPresetConfig = Partial<
  Omit<ButtonProps<"button">, "children" | "as" | "className" | "preset" | "appearance">
>;

export interface ButtonPresets {
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

let customPresets: Record<string, ButtonPresetConfig> = {};

export const builtInPresets: ButtonPresets = {
  default: {},
  primary: {},
  secondary: {},
  success: {},
  danger: {},
  warning: {},
  defaultDark: {},
  primaryDark: {},
  secondaryDark: {},
  successDark: {},
  dangerDark: {},
  warningDark: {},
};

export function defineButtonPresets(presets: Record<string, ButtonPresetConfig>): void {
  customPresets = { ...customPresets, ...presets };
}

export function getPreset(name: string): ButtonPresetConfig | undefined {
  if (customPresets[name]) {
    return customPresets[name];
  }
  return builtInPresets[name as keyof ButtonPresets];
}

export function getAllPresets(): Record<string, ButtonPresetConfig> {
  return { ...builtInPresets, ...customPresets };
}

export function resetCustomPresets(): void {
  customPresets = {};
}
