import type { AvatarPresets } from "./presets";

declare module "./presets" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface AvatarPresets {
    // Users can augment this interface with custom preset names
  }
}

export type { AvatarPresets };
