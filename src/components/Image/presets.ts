import type { ImageProps } from "./Image";

export type ImagePresetConfig = Partial<Omit<ImageProps, "src" | "alt" | "className" | "preset">>;

export interface ImagePresets {
  rounded: ImagePresetConfig;
  circle: ImagePresetConfig;
  thumbnail: ImagePresetConfig;
  cover: ImagePresetConfig;
}

let customPresets: Record<string, ImagePresetConfig> = {};

export const builtInPresets: ImagePresets = {
  rounded: {
    style: {
      borderRadius: "var(--marduk-radius-md)",
    } as React.CSSProperties,
  },
  circle: {
    style: {
      borderRadius: "50%",
    } as React.CSSProperties,
  },
  thumbnail: {
    objectFit: "cover",
    aspectRatio: "1:1",
    width: "100px",
    height: "100px",
    style: {
      objectFit: "cover",
    } as React.CSSProperties,
  },
  cover: {
    objectFit: "cover",
    width: "100%",
    style: {
      objectFit: "cover",
      width: "100%",
    } as React.CSSProperties,
  },
};

export function defineImagePresets(presets: Record<string, ImagePresetConfig>): void {
  customPresets = { ...customPresets, ...presets };
}

export function getPreset(name: string): ImagePresetConfig | undefined {
  return customPresets[name] || builtInPresets[name as keyof ImagePresets];
}

export function getAllPresets(): ImagePresets & Record<string, ImagePresetConfig> {
  return { ...builtInPresets, ...customPresets };
}

export function resetCustomPresets(): void {
  customPresets = {};
}
