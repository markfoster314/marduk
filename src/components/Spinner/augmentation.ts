import type { SpinnerPresets } from "./presets";

declare module "./presets" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface SpinnerPresets {
    // Users can augment this interface with custom preset names
  }
}
export type { SpinnerPresets };
