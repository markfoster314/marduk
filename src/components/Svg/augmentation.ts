import type { SvgPresets } from "./presets";

declare module "./presets" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface SvgPresets {
    // Users can augment this interface with custom preset names
  }
}

export type { SvgPresets };
