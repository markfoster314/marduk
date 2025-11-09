import { SvgProps } from "./Svg.types";

export type SvgPresetConfig = Partial<Omit<SvgProps, "children" | "preset">>;

export interface SvgPresets {
  [key: string]: SvgPresetConfig;
}

const builtInPresets: SvgPresets = {
  // Base presets
  default: {
    size: "medium",
    color: "currentColor",
  },
  icon: {
    size: "medium",
    decorative: true,
  },
  loading: {
    spin: true,
    spinSpeed: "normal",
  },

  // Color presets (light mode)
  primary: {
    color: "var(--marduk-color-primary-500)",
  },
  secondary: {
    color: "var(--marduk-color-gray-600)",
  },
  success: {
    color: "var(--marduk-color-success-500)",
  },
  danger: {
    color: "var(--marduk-color-error-400)",
  },
  warning: {
    color: "var(--marduk-color-warning-500)",
  },
  info: {
    color: "var(--marduk-color-primary-400)",
  },
  muted: {
    color: "var(--marduk-color-gray-500)",
  },

  // Dark mode color presets
  primaryDark: {
    color: "var(--marduk-color-primary-300)",
  },
  secondaryDark: {
    color: "var(--marduk-color-dark-text-secondary)",
  },
  successDark: {
    color: "var(--marduk-color-success-300)",
  },
  dangerDark: {
    color: "var(--marduk-color-error-200)",
  },
  warningDark: {
    color: "var(--marduk-color-warning-200)",
  },
  infoDark: {
    color: "var(--marduk-color-primary-200)",
  },
  mutedDark: {
    color: "var(--marduk-color-dark-text-tertiary)",
  },

  // Size presets
  large: {
    size: "large",
  },
  xl: {
    size: "xl",
  },
};

let customPresets: SvgPresets = {};

export function defineSvgPresets(presets: SvgPresets): void {
  customPresets = { ...customPresets, ...presets };
}

export function getPreset(name: string): SvgPresetConfig | undefined {
  return builtInPresets[name] || customPresets[name];
}

export function getAllPresets(): SvgPresets {
  return { ...builtInPresets, ...customPresets };
}

export function resetCustomPresets(): void {
  customPresets = {};
}
