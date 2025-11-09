import type { LinkPresets } from "./presets";

declare module "./presets" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface LinkPresets {
    // Users can augment this interface with custom preset names
  }
}

export type { LinkPresets };
