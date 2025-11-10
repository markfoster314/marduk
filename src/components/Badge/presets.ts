import type { BadgeProps } from "./Badge";

export type BadgePresetConfig = Partial<
  Omit<BadgeProps<"span">, "children" | "as" | "className" | "preset">
>;

export interface BadgePresets {
  primary: BadgePresetConfig;
  secondary: BadgePresetConfig;
  success: BadgePresetConfig;
  warning: BadgePresetConfig;
  danger: BadgePresetConfig;
  info: BadgePresetConfig;
  primaryDark: BadgePresetConfig;
  secondaryDark: BadgePresetConfig;
  successDark: BadgePresetConfig;
  warningDark: BadgePresetConfig;
  dangerDark: BadgePresetConfig;
  infoDark: BadgePresetConfig;
}

let customPresets: Record<string, BadgePresetConfig> = {};

export const builtInPresets: BadgePresets = {
  primary: {
    style: {
      "--badge-bg": "var(--marduk-color-primary-500)",
      "--badge-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  secondary: {
    style: {
      "--badge-bg": "var(--marduk-color-gray-500)",
      "--badge-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  success: {
    style: {
      "--badge-bg": "var(--marduk-color-success-500)",
      "--badge-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  warning: {
    style: {
      "--badge-bg": "var(--marduk-color-warning-500)",
      "--badge-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  danger: {
    style: {
      "--badge-bg": "var(--marduk-color-error-500)",
      "--badge-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  info: {
    style: {
      "--badge-bg": "var(--marduk-color-primary-100)",
      "--badge-color": "var(--marduk-color-primary-800)",
    } as React.CSSProperties,
  },
  primaryDark: {
    style: {
      "--badge-bg": "var(--marduk-color-primary-300)",
      "--badge-color": "var(--marduk-color-dark-bg-primary)",
    } as React.CSSProperties,
  },
  secondaryDark: {
    style: {
      "--badge-bg": "var(--marduk-color-dark-text-secondary)",
      "--badge-color": "var(--marduk-color-dark-bg-primary)",
    } as React.CSSProperties,
  },
  successDark: {
    style: {
      "--badge-bg": "var(--marduk-color-success-300)",
      "--badge-color": "var(--marduk-color-dark-bg-primary)",
    } as React.CSSProperties,
  },
  warningDark: {
    style: {
      "--badge-bg": "var(--marduk-color-warning-200)",
      "--badge-color": "var(--marduk-color-dark-bg-primary)",
    } as React.CSSProperties,
  },
  dangerDark: {
    style: {
      "--badge-bg": "var(--marduk-color-error-200)",
      "--badge-color": "var(--marduk-color-dark-bg-primary)",
    } as React.CSSProperties,
  },
  infoDark: {
    style: {
      "--badge-bg": "var(--marduk-color-primary-800)",
      "--badge-color": "var(--marduk-color-primary-200)",
    } as React.CSSProperties,
  },
};

export function defineBadgePresets(presets: Record<string, BadgePresetConfig>): void {
  customPresets = { ...customPresets, ...presets };
}

export function getPreset(name: string): BadgePresetConfig | undefined {
  return customPresets[name] || builtInPresets[name as keyof BadgePresets];
}

export function getAllPresets(): BadgePresets & Record<string, BadgePresetConfig> {
  return { ...builtInPresets, ...customPresets };
}

export function resetCustomPresets(): void {
  customPresets = {};
}
