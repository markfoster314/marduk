import type { LinkProps } from "./Link";

export type LinkPresetConfig = Partial<
  Omit<LinkProps<"a">, "children" | "as" | "className" | "preset" | "href">
>;

export interface LinkPresets {
  default: LinkPresetConfig;
  primary: LinkPresetConfig;
  secondary: LinkPresetConfig;
  success: LinkPresetConfig;
  danger: LinkPresetConfig;
  warning: LinkPresetConfig;
  muted: LinkPresetConfig;
  defaultDark: LinkPresetConfig;
  primaryDark: LinkPresetConfig;
  secondaryDark: LinkPresetConfig;
  successDark: LinkPresetConfig;
  dangerDark: LinkPresetConfig;
  warningDark: LinkPresetConfig;
  mutedDark: LinkPresetConfig;
}

let customPresets: Record<string, LinkPresetConfig> = {};

export const builtInPresets: LinkPresets = {
  default: {
    underline: "always",
  },
  primary: {
    style: {
      color: "var(--marduk-color-primary-500)",
    },
    underline: "always",
  },
  secondary: {
    style: {
      color: "var(--marduk-color-gray-600)",
    },
    underline: "always",
  },
  success: {
    style: {
      color: "var(--marduk-color-success-500)",
    },
    underline: "always",
  },
  danger: {
    style: {
      color: "var(--marduk-color-error-400)",
    },
    underline: "always",
  },
  warning: {
    style: {
      color: "var(--marduk-color-warning-500)",
    },
    underline: "always",
  },
  muted: {
    style: {
      color: "var(--marduk-color-gray-500)",
    },
    underline: "always",
  },
  defaultDark: {
    style: {
      color: "var(--marduk-color-dark-text-primary)",
    },
    underline: "always",
  },
  primaryDark: {
    style: {
      color: "var(--marduk-color-primary-300)",
    },
    underline: "always",
  },
  secondaryDark: {
    style: {
      color: "var(--marduk-color-dark-text-secondary)",
    },
    underline: "always",
  },
  successDark: {
    style: {
      color: "var(--marduk-color-success-300)",
    },
    underline: "always",
  },
  dangerDark: {
    style: {
      color: "var(--marduk-color-error-200)",
    },
    underline: "always",
  },
  warningDark: {
    style: {
      color: "var(--marduk-color-warning-200)",
    },
    underline: "always",
  },
  mutedDark: {
    style: {
      color: "var(--marduk-color-dark-text-tertiary)",
    },
    underline: "always",
  },
};

export function defineLinkPresets(presets: Record<string, LinkPresetConfig>): void {
  customPresets = { ...customPresets, ...presets };
}

export function getPreset(name: string): LinkPresetConfig | undefined {
  return builtInPresets[name as keyof LinkPresets] || customPresets[name];
}

export function getAllPresets(): LinkPresets & Record<string, LinkPresetConfig> {
  return { ...builtInPresets, ...customPresets };
}

export function resetCustomPresets(): void {
  customPresets = {};
}
