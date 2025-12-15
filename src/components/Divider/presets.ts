import type { DividerProps } from "./Divider";

export type DividerPresetConfig = Partial<Omit<DividerProps<"hr">, "as" | "className" | "preset">>;

export interface DividerPresets {
  subtle: DividerPresetConfig;
  bold: DividerPresetConfig;
  primary: DividerPresetConfig;
  dark: DividerPresetConfig;
}

let customPresets: Record<string, DividerPresetConfig> = {};

export const builtInPresets: DividerPresets = {
  subtle: {
    thickness: "thin",
    style: {
      "--divider-color": "var(--marduk-color-gray-200)",
    } as React.CSSProperties,
  },
  bold: {
    thickness: "thick",
    style: {
      "--divider-color": "var(--marduk-color-gray-400)",
    } as React.CSSProperties,
  },
  primary: {
    thickness: "medium",
    style: {
      "--divider-color": "var(--marduk-color-primary-500)",
    } as React.CSSProperties,
  },
  dark: {
    thickness: "medium",
    style: {
      "--divider-color": "var(--marduk-color-dark-border)",
    } as React.CSSProperties,
  },
};

export function defineDividerPresets(presets: Record<string, DividerPresetConfig>): void {
  customPresets = { ...customPresets, ...presets };
}

export function getPreset(name: string): DividerPresetConfig | undefined {
  return customPresets[name] || builtInPresets[name as keyof DividerPresets];
}

export function getAllPresets(): DividerPresets & Record<string, DividerPresetConfig> {
  return { ...builtInPresets, ...customPresets };
}

export function resetCustomPresets(): void {
  customPresets = {};
}
