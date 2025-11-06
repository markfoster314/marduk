import type { BoxPresetConfig } from "./presets";

// @ts-expect-error - Module augmentation for published package
declare module "@markfoster314/marduk" {
  interface BoxPresets {
    // Built-in presets
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
}

export type { BoxPresetConfig };
