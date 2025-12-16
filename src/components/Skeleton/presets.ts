import type { SkeletonProps } from "./Skeleton";

export type SkeletonPresetConfig = Partial<
  Omit<SkeletonProps<"div">, "as" | "className" | "preset">
>;

export interface SkeletonPresets {
  text: SkeletonPresetConfig;
  title: SkeletonPresetConfig;
  avatar: SkeletonPresetConfig;
  button: SkeletonPresetConfig;
}

let customPresets: Record<string, SkeletonPresetConfig> = {};

export const builtInPresets: SkeletonPresets = {
  text: {
    shape: "text",
    width: "100%",
    height: "1em",
    style: {
      borderRadius: "var(--marduk-radius-sm)",
    } as React.CSSProperties,
  },
  title: {
    shape: "text",
    width: "60%",
    height: "1.5em",
    style: {
      borderRadius: "var(--marduk-radius-sm)",
    } as React.CSSProperties,
  },
  avatar: {
    shape: "circle",
    width: "40px",
    height: "40px",
    style: {
      borderRadius: "50%",
    } as React.CSSProperties,
  },
  button: {
    shape: "rectangle",
    width: "120px",
    height: "40px",
    style: {
      borderRadius: "var(--marduk-radius-md)",
    } as React.CSSProperties,
  },
};

export function defineSkeletonPresets(presets: Record<string, SkeletonPresetConfig>): void {
  customPresets = { ...customPresets, ...presets };
}

export function getPreset(name: string): SkeletonPresetConfig | undefined {
  return customPresets[name] || builtInPresets[name as keyof SkeletonPresets];
}

export function getAllPresets(): SkeletonPresets & Record<string, SkeletonPresetConfig> {
  return { ...builtInPresets, ...customPresets };
}

export function resetCustomPresets(): void {
  customPresets = {};
}
