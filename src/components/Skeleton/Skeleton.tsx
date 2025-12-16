import { ElementType, ComponentPropsWithoutRef, CSSProperties } from "react";
import { SkeletonShape, SkeletonAnimation } from "./Skeleton.types";
import { getPreset, SkeletonPresets, SkeletonPresetConfig } from "./presets";
import "./Skeleton.css";

type SkeletonOwnProps<E extends ElementType = ElementType> = {
  as?: E;
  preset?: (keyof SkeletonPresets | string)[];
  shape?: SkeletonShape;
  animation?: SkeletonAnimation;
  width?: string | number;
  height?: string | number;
  count?: number;
  style?: CSSProperties;
};

export type SkeletonProps<E extends ElementType = "div"> = SkeletonOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof SkeletonOwnProps>;

export type { SkeletonShape, SkeletonAnimation };

const defaultElement = "div";

export const Skeleton = <E extends ElementType = typeof defaultElement>({
  preset = [],
  shape,
  animation,
  width,
  height,
  count = 1,
  as,
  className,
  style,
  ...props
}: SkeletonProps<E>) => {
  const Component = as || defaultElement;

  let mergedConfig: SkeletonPresetConfig = {};

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

  const resolvedShape = shape ?? mergedConfig.shape ?? "text";
  const resolvedAnimation = animation ?? mergedConfig.animation ?? "pulse";
  const resolvedWidth = width ?? mergedConfig.width;
  const resolvedHeight = height ?? mergedConfig.height;

  const classNames = [
    "marduk-skeleton",
    `marduk-skeleton--shape-${resolvedShape}`,
    `marduk-skeleton--animation-${resolvedAnimation}`,
    ...(preset.length > 0 ? preset.map((p) => `marduk-skeleton--${p}`) : []),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const presetStyle = mergedConfig.style || {};
  const combinedStyle = {
    ...presetStyle,
    ...style,
    ...(resolvedWidth && { width: resolvedWidth }),
    ...(resolvedHeight && { height: resolvedHeight }),
  } as CSSProperties;

  const dataAttributes = {
    "data-shape": resolvedShape,
    "data-animation": resolvedAnimation,
    ...(preset.length > 0 && { "data-preset": preset.join(",") }),
  };

  const ariaAttributes = {
    role: "status",
    "aria-label": "Loading content",
    "aria-live": "polite",
  };

  const componentProps = {
    className: classNames,
    style: combinedStyle,
    ...dataAttributes,
    ...ariaAttributes,
    ...props,
  } as ComponentPropsWithoutRef<E>;

  if (count === 1) {
    return <Component {...componentProps} />;
  }

  return (
    <>
      {Array.from({ length: count }).map((_, index) => {
        const skeletonProps =
          index === 0
            ? componentProps
            : {
                ...componentProps,
                role: undefined,
                "aria-label": undefined,
                "aria-live": undefined,
              };
        return <Component key={index} {...skeletonProps} />;
      })}
    </>
  );
};
