import type { TitleProps } from "./Title";

export type TitlePresetConfig = Partial<
  Omit<TitleProps<"h1">, "children" | "as" | "className" | "preset">
>;

export interface TitlePresets {
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

let customPresets: Record<string, TitlePresetConfig> = {};

export const builtInPresets: TitlePresets = {
  default: {},
  primary: {
    style: {
      color: "var(--marduk-color-primary-500)",
    },
  },
  secondary: {
    style: {
      color: "var(--marduk-color-gray-600)",
    },
  },
  success: {
    style: {
      color: "var(--marduk-color-success-500)",
    },
  },
  danger: {
    style: {
      color: "var(--marduk-color-error-400)",
    },
  },
  warning: {
    style: {
      color: "var(--marduk-color-warning-500)",
    },
  },
  muted: {
    style: {
      color: "var(--marduk-color-gray-500)",
    },
  },
  defaultDark: {
    style: {
      color: "var(--marduk-color-dark-text-primary)",
    },
  },
  primaryDark: {
    style: {
      color: "var(--marduk-color-primary-300)",
    },
  },
  secondaryDark: {
    style: {
      color: "var(--marduk-color-dark-text-secondary)",
    },
  },
  successDark: {
    style: {
      color: "var(--marduk-color-success-300)",
    },
  },
  dangerDark: {
    style: {
      color: "var(--marduk-color-error-200)",
    },
  },
  warningDark: {
    style: {
      color: "var(--marduk-color-warning-200)",
    },
  },
  mutedDark: {
    style: {
      color: "var(--marduk-color-dark-text-tertiary)",
    },
  },
};

export function defineTitlePresets(presets: Record<string, TitlePresetConfig>): void {
  customPresets = { ...customPresets, ...presets };
}

export function getPreset(name: string): TitlePresetConfig | undefined {
  if (customPresets[name]) {
    return customPresets[name];
  }
  return builtInPresets[name as keyof TitlePresets];
}

export function getAllPresets(): Record<string, TitlePresetConfig> {
  return { ...builtInPresets, ...customPresets };
}

export function resetCustomPresets(): void {
  customPresets = {};
}
