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
    color: "var(--color-primary)",
  },
  secondary: {
    color: "var(--color-secondary)",
  },
  success: {
    color: "var(--color-success)",
  },
  danger: {
    color: "var(--color-danger)",
  },
  warning: {
    color: "var(--color-warning)",
  },
  info: {
    color: "var(--color-info)",
  },
  muted: {
    color: "var(--color-muted)",
  },

  // Dark mode color presets
  primaryDark: {
    color: "var(--color-primary-dark)",
  },
  secondaryDark: {
    color: "var(--color-secondary-dark)",
  },
  successDark: {
    color: "var(--color-success-dark)",
  },
  dangerDark: {
    color: "var(--color-danger-dark)",
  },
  warningDark: {
    color: "var(--color-warning-dark)",
  },
  infoDark: {
    color: "var(--color-info-dark)",
  },
  mutedDark: {
    color: "var(--color-muted-dark)",
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
