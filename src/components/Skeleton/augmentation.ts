import type { SkeletonPresets } from "./presets";

declare module "./presets" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface SkeletonPresets {
    // Users can augment this interface with custom preset names
  }
}

export type { SkeletonPresets };
