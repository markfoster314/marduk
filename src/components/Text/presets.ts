import type { TextProps } from "./Text";

export type TextPresetConfig = Partial<
  Omit<TextProps<"p">, "children" | "as" | "className" | "preset">
>;

export interface TextPresets {
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

let customPresets: Record<string, TextPresetConfig> = {};

export const builtInPresets: TextPresets = {
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

export function defineTextPresets(
  presets: Record<string, TextPresetConfig>
): void {
  customPresets = { ...customPresets, ...presets };
}

export function getPreset(name: string): TextPresetConfig | undefined {
  if (customPresets[name]) {
    return customPresets[name];
  }
  return builtInPresets[name as keyof TextPresets];
}

export function getAllPresets(): Record<string, TextPresetConfig> {
  return { ...builtInPresets, ...customPresets };
}

export function resetCustomPresets(): void {
  customPresets = {};
}
