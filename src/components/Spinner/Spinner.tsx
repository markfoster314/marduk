import { ElementType, ComponentPropsWithoutRef, CSSProperties } from "react";
import { SpinnerSize, SpinnerSpeed } from "./Spinner.types";
import { getPreset, SpinnerPresets, SpinnerPresetConfig } from "./presets";
import "./Spinner.css";

type SpinnerOwnProps<E extends ElementType = ElementType> = {
  as?: E;
  preset?: (keyof SpinnerPresets | string)[];
  size?: SpinnerSize;
  speed?: SpinnerSpeed;
  label?: string;
  style?: CSSProperties;
};

export type SpinnerProps<E extends ElementType = "div"> = SpinnerOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof SpinnerOwnProps>;

export type { SpinnerSize, SpinnerSpeed };

const defaultElement = "div";

export const Spinner = <E extends ElementType = typeof defaultElement>({
  preset = [],
  size,
  speed,
  label,
  as,
  className,
  style,
  ...props
}: SpinnerProps<E>) => {
  const Component = as || defaultElement;

  let mergedConfig: SpinnerPresetConfig = {};

  if (preset && preset.length > 0) {
    for (const presetName of preset) {
      const config = getPreset(presetName);
      if (config) {
        mergedConfig = {
          ...mergedConfig,
          ...config,
          style: {
            ...(mergedConfig.style || {}),
            ...(config.style || {}),
          },
        };
      }
    }
  }

  const resolvedSize = size ?? mergedConfig.size ?? "medium";
  const resolvedSpeed = speed ?? mergedConfig.speed ?? "normal";

  const classNames = [
    "marduk-spinner",
    `marduk-spinner--size-${resolvedSize}`,
    `marduk-spinner--speed-${resolvedSpeed}`,
    ...(preset.length > 0 ? preset.map((p) => `marduk-spinner--${p}`) : []),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const presetStyle = mergedConfig.style || {};
  const combinedStyle = {
    ...presetStyle,
    ...style,
  } as CSSProperties;

  const dataAttributes = {
    "data-size": resolvedSize,
    "data-speed": resolvedSpeed,
    ...(preset.length > 0 && { "data-preset": preset.join(",") }),
  };

  const ariaAttributes = label
    ? {
        role: "status",
        "aria-label": label,
        "aria-live": "polite",
      }
    : {
        role: "status",
        "aria-label": "Loading",
        "aria-live": "polite",
      };

  const componentProps = {
    className: classNames,
    style: combinedStyle,
    ...dataAttributes,
    ...ariaAttributes,
    ...props,
  } as ComponentPropsWithoutRef<E>;

  return (
    <Component {...componentProps}>
      <span className="marduk-spinner__circle"></span>
      {label && <span className="marduk-spinner__label">{label}</span>}
    </Component>
  );
};
