import type { BoxProps } from "./Box";

export type BoxPresetConfig = Partial<
  Omit<BoxProps<"div">, "children" | "as" | "className" | "preset">
>;

export interface BoxPresets {
  stack: BoxPresetConfig;
  hstack: BoxPresetConfig;
  center: BoxPresetConfig;
  card: BoxPresetConfig;
  darkCard: BoxPresetConfig;
  grid2: BoxPresetConfig;
  grid3: BoxPresetConfig;
  spaceBetween: BoxPresetConfig;
  sidebar: BoxPresetConfig;
  header: BoxPresetConfig;
  footer: BoxPresetConfig;
}

let customPresets: Record<string, BoxPresetConfig> = {};

export const builtInPresets: BoxPresets = {
  stack: {
    display: "flex",
    direction: "column",
    gap: "md",
  },
  hstack: {
    display: "flex",
    direction: "row",
    gap: "md",
    align: "center",
  },
  center: {
    display: "flex",
    justify: "center",
    align: "center",
  },
  card: {
    padding: "lg",
    borderRadius: "md",
    backgroundColor: "var(--marduk-color-gray-50)",
  },
  darkCard: {
    padding: "lg",
    borderRadius: "md",
    backgroundColor: "var(--marduk-color-dark-bg-secondary)",
    style: {
      color: "var(--marduk-color-dark-text-primary)",
    } as React.CSSProperties,
  },
  grid2: {
    display: "grid",
    gap: "md",
    style: {
      gridTemplateColumns: "repeat(2, 1fr)",
    } as React.CSSProperties,
  },
  grid3: {
    display: "grid",
    gap: "md",
    style: {
      gridTemplateColumns: "repeat(3, 1fr)",
    } as React.CSSProperties,
  },
  spaceBetween: {
    display: "flex",
    justify: "between",
    align: "center",
  },
  sidebar: {
    display: "flex",
    direction: "column",
    gap: "md",
    padding: "lg",
    width: "250px",
  },
  header: {
    display: "flex",
    justify: "between",
    align: "center",
    padding: "md",
    borderRadius: "md",
  },
  footer: {
    display: "flex",
    justify: "center",
    align: "center",
    padding: "lg",
    gap: "md",
  },
};

export function defineBoxPresets<T extends Record<string, BoxPresetConfig>>(presets: T): void {
  customPresets = { ...customPresets, ...presets };
}

export function getPreset(name: string): BoxPresetConfig | undefined {
  return customPresets[name] || builtInPresets[name as keyof BoxPresets];
}

export function getAllPresets(): Record<string, BoxPresetConfig> {
  return { ...builtInPresets, ...customPresets };
}

// (useful for testing)
export function resetCustomPresets(): void {
  customPresets = {};
}
