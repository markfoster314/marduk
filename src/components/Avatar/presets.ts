import type { AvatarProps } from "./Avatar";

export type AvatarPresetConfig = Partial<
  Omit<AvatarProps<"div">, "as" | "className" | "preset" | "alt">
>;

export interface AvatarPresets {
  primary: AvatarPresetConfig;
  secondary: AvatarPresetConfig;
  success: AvatarPresetConfig;
  warning: AvatarPresetConfig;
  danger: AvatarPresetConfig;
  primaryDark: AvatarPresetConfig;
  secondaryDark: AvatarPresetConfig;
  successDark: AvatarPresetConfig;
  warningDark: AvatarPresetConfig;
  dangerDark: AvatarPresetConfig;
}

let customPresets: Record<string, AvatarPresetConfig> = {};

export const builtInPresets: AvatarPresets = {
  primary: {
    style: {
      "--avatar-bg": "var(--marduk-color-primary-500)",
      "--avatar-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  secondary: {
    style: {
      "--avatar-bg": "var(--marduk-color-gray-500)",
      "--avatar-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  success: {
    style: {
      "--avatar-bg": "var(--marduk-color-success-500)",
      "--avatar-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  warning: {
    style: {
      "--avatar-bg": "var(--marduk-color-warning-500)",
      "--avatar-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  danger: {
    style: {
      "--avatar-bg": "var(--marduk-color-error-500)",
      "--avatar-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  primaryDark: {
    style: {
      "--avatar-bg": "var(--marduk-color-primary-300)",
      "--avatar-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  secondaryDark: {
    style: {
      "--avatar-bg": "var(--marduk-color-dark-text-secondary)",
      "--avatar-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  successDark: {
    style: {
      "--avatar-bg": "var(--marduk-color-success-300)",
      "--avatar-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  warningDark: {
    style: {
      "--avatar-bg": "var(--marduk-color-warning-200)",
      "--avatar-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
  dangerDark: {
    style: {
      "--avatar-bg": "var(--marduk-color-error-200)",
      "--avatar-color": "var(--marduk-color-white)",
    } as React.CSSProperties,
  },
};

export function defineAvatarPresets(presets: Record<string, AvatarPresetConfig>): void {
  customPresets = { ...customPresets, ...presets };
}

export function getPreset(name: string): AvatarPresetConfig | undefined {
  return customPresets[name] || builtInPresets[name as keyof AvatarPresets];
}

export function getAllPresets(): AvatarPresets & Record<string, AvatarPresetConfig> {
  return { ...builtInPresets, ...customPresets };
}

export function resetCustomPresets(): void {
  customPresets = {};
}
