import { ElementType, ComponentPropsWithoutRef, ReactNode, CSSProperties } from "react";
import { DividerOrientation, DividerThickness } from "./Divider.types";
import { getPreset, DividerPresets, DividerPresetConfig } from "./presets";
import "./Divider.css";

type DividerOwnProps<E extends ElementType = ElementType> = {
  as?: E;
  preset?: (keyof DividerPresets | string)[];
  orientation?: DividerOrientation;
  thickness?: DividerThickness;
  label?: ReactNode;
  spacing?: "none" | "small" | "medium" | "large";
  style?: CSSProperties;
};

export type DividerProps<E extends ElementType = "hr"> = DividerOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof DividerOwnProps>;

export type { DividerOrientation, DividerThickness };

const defaultElement = "hr";

export const Divider = <E extends ElementType = typeof defaultElement>({
  preset = [],
  orientation,
  thickness,
  label,
  spacing,
  as,
  className,
  style,
  ...props
}: DividerProps<E>) => {
  const Component = as || defaultElement;

  let mergedConfig: DividerPresetConfig = {};

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

  const resolvedOrientation = orientation ?? mergedConfig.orientation ?? "horizontal";
  const resolvedThickness = thickness ?? mergedConfig.thickness ?? "medium";
  const resolvedSpacing = spacing ?? mergedConfig.spacing ?? "medium";

  const classNames = [
    "marduk-divider",
    `marduk-divider--${resolvedOrientation}`,
    `marduk-divider--${resolvedThickness}`,
    resolvedSpacing !== "none" && `marduk-divider--spacing-${resolvedSpacing}`,
    label && "marduk-divider--with-label",
    ...(preset.length > 0 ? preset.map((p) => `marduk-divider--${p}`) : []),
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
    "data-orientation": resolvedOrientation,
    "data-thickness": resolvedThickness,
    ...(resolvedSpacing !== "none" && { "data-spacing": resolvedSpacing }),
    ...(preset.length > 0 && { "data-preset": preset.join(",") }),
  };

  const ariaAttributes = label
    ? {
        role: "separator",
        "aria-label": typeof label === "string" ? label : undefined,
      }
    : {
        role: "separator",
      };

  if (label) {
    return (
      <div className="marduk-divider-wrapper" {...dataAttributes} {...ariaAttributes}>
        <Component className={classNames} style={combinedStyle} {...props} />
        <span className="marduk-divider__label">{label}</span>
        <Component className={classNames} style={combinedStyle} />
      </div>
    );
  }

  return (
    <Component
      className={classNames}
      style={combinedStyle}
      {...dataAttributes}
      {...ariaAttributes}
      {...props}
    />
  );
};
