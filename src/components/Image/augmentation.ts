import type { ImagePresets } from "./presets";

declare module "./presets" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ImagePresets {
    // Users can augment this interface with custom preset names
  }
}

export type { ImagePresets };
