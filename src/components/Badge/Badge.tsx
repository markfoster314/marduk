import { ElementType, ComponentPropsWithoutRef, ReactNode, CSSProperties } from "react";
import { BadgeSize, BadgePosition } from "./Badge.types";
import { getPreset, BadgePresets, BadgePresetConfig } from "./presets";
import "./Badge.css";

type BadgeOwnProps<E extends ElementType = ElementType> = {
  children?: ReactNode;
  as?: E;
  preset?: (keyof BadgePresets | string)[];
  size?: BadgeSize;
  dot?: boolean;
  count?: number;
  position?: BadgePosition;
  style?: CSSProperties;
};

export type BadgeProps<E extends ElementType = "span"> = BadgeOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof BadgeOwnProps>;

export type { BadgeSize, BadgePosition };

const defaultElement = "span";

export const Badge = <E extends ElementType = typeof defaultElement>({
  children,
  preset = [],
  size,
  dot,
  count,
  position,
  as,
  className,
  style,
  ...props
}: BadgeProps<E>) => {
  const Component = as || defaultElement;

  // Merge presets in order with deep style merging
  let mergedConfig: BadgePresetConfig = {};

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

  // Resolve values with preset defaults
  const resolvedSize = size ?? mergedConfig.size ?? "medium";
  const resolvedDot = dot ?? mergedConfig.dot ?? false;
  const resolvedCount = count !== undefined ? count : mergedConfig.count;
  const resolvedPosition = position ?? mergedConfig.position ?? "standalone";

  // Format count display
  const formattedCount =
    resolvedCount !== undefined && resolvedCount > 99 ? "99+" : resolvedCount?.toString();

  // Determine what to display
  const displayContent = resolvedDot ? null : formattedCount || children;

  const classNames = [
    "marduk-badge",
    `marduk-badge--size-${resolvedSize}`,
    `marduk-badge--position-${resolvedPosition}`,
    resolvedDot && "marduk-badge--dot",
    resolvedCount !== undefined && "marduk-badge--count",
    ...(preset.length > 0 ? preset.map((p) => `marduk-badge--${p}`) : []),
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
    "data-position": resolvedPosition,
    ...(resolvedDot && { "data-dot": true }),
    ...(resolvedCount !== undefined && { "data-count": resolvedCount }),
    ...(preset.length > 0 && { "data-preset": preset.join(",") }),
  };

  // Accessibility attributes
  const ariaAttributes =
    resolvedCount !== undefined
      ? {
          role: "status",
          "aria-label": `${resolvedCount} items`,
        }
      : resolvedDot
        ? {
            role: "status",
            "aria-label": "Status indicator",
          }
        : {};

  return (
    <Component
      className={classNames}
      style={combinedStyle}
      {...dataAttributes}
      {...ariaAttributes}
      {...props}
    >
      {displayContent}
    </Component>
  );
};
