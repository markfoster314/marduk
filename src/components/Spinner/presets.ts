import type { SpinnerProps } from "./Spinner";

export type SpinnerPresetConfig = Partial<Omit<SpinnerProps<"div">, "as" | "className" | "preset">>;

export interface SpinnerPresets {
  primary: SpinnerPresetConfig;
  secondary: SpinnerPresetConfig;
  success: SpinnerPresetConfig;
  warning: SpinnerPresetConfig;
  danger: SpinnerPresetConfig;
  primaryDark: SpinnerPresetConfig;
  secondaryDark: SpinnerPresetConfig;
  successDark: SpinnerPresetConfig;
  warningDark: SpinnerPresetConfig;
  dangerDark: SpinnerPresetConfig;
}

let customPresets: Record<string, SpinnerPresetConfig> = {};

export const builtInPresets: SpinnerPresets = {
  primary: {
    style: {
      "--spinner-color": "var(--marduk-color-primary-500)",
    } as React.CSSProperties,
  },
  secondary: {
    style: {
      "--spinner-color": "var(--marduk-color-gray-500)",
    } as React.CSSProperties,
  },
  success: {
    style: {
      "--spinner-color": "var(--marduk-color-success-500)",
    } as React.CSSProperties,
  },
  warning: {
    style: {
      "--spinner-color": "var(--marduk-color-warning-500)",
    } as React.CSSProperties,
  },
  danger: {
    style: {
      "--spinner-color": "var(--marduk-color-error-500)",
    } as React.CSSProperties,
  },
  primaryDark: {
    style: {
      "--spinner-color": "var(--marduk-color-primary-300)",
    } as React.CSSProperties,
  },
  secondaryDark: {
    style: {
      "--spinner-color": "var(--marduk-color-dark-text-secondary)",
    } as React.CSSProperties,
  },
  successDark: {
    style: {
      "--spinner-color": "var(--marduk-color-success-300)",
    } as React.CSSProperties,
  },
  warningDark: {
    style: {
      "--spinner-color": "var(--marduk-color-warning-200)",
    } as React.CSSProperties,
  },
  dangerDark: {
    style: {
      "--spinner-color": "var(--marduk-color-error-200)",
    } as React.CSSProperties,
  },
};

export function defineSpinnerPresets(presets: Record<string, SpinnerPresetConfig>): void {
  customPresets = { ...customPresets, ...presets };
}

export function getPreset(name: string): SpinnerPresetConfig | undefined {
  return customPresets[name] || builtInPresets[name as keyof SpinnerPresets];
}

export function getAllPresets(): SpinnerPresets & Record<string, SpinnerPresetConfig> {
  return { ...builtInPresets, ...customPresets };
}

export function resetCustomPresets(): void {
  customPresets = {};
}
