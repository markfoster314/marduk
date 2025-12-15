import { ElementType, ComponentPropsWithoutRef, ReactNode, CSSProperties, useState } from "react";
import { AvatarSize, AvatarShape, AvatarStatus } from "./Avatar.types";
import { getPreset, AvatarPresets, AvatarPresetConfig } from "./presets";
import { Text } from "@/index";
import "./Avatar.css";

type AvatarOwnProps<E extends ElementType = ElementType> = {
  as?: E;
  preset?: (keyof AvatarPresets | string)[];
  src?: string;
  alt: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  initials?: string;
  fallbackIcon?: ReactNode;
  style?: CSSProperties;
};

export type AvatarProps<E extends ElementType = "div"> = AvatarOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof AvatarOwnProps>;

export type { AvatarSize, AvatarShape, AvatarStatus };

const defaultElement = "div";

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

export const Avatar = <E extends ElementType = typeof defaultElement>({
  preset = [],
  src,
  alt,
  size,
  shape,
  status,
  initials,
  fallbackIcon,
  as,
  className,
  style,
  ...props
}: AvatarProps<E>) => {
  const Component = as || defaultElement;
  const [imageError, setImageError] = useState(false);

  let mergedConfig: AvatarPresetConfig = {};

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
  const resolvedShape = shape ?? mergedConfig.shape ?? "circle";
  const resolvedStatus = status ?? mergedConfig.status;
  // Ensure initials is a string or undefined (handle Storybook control edge cases)
  const validInitials =
    typeof initials === "string" && initials.trim() !== "" ? initials : undefined;
  const resolvedInitials = validInitials ?? (alt ? getInitials(alt) : undefined);

  const classNames = [
    "marduk-avatar",
    `marduk-avatar--size-${resolvedSize}`,
    `marduk-avatar--shape-${resolvedShape}`,
    resolvedStatus && `marduk-avatar--status-${resolvedStatus}`,
    imageError && "marduk-avatar--error",
    ...(preset.length > 0 ? preset.map((p) => `marduk-avatar--${p}`) : []),
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
    "data-shape": resolvedShape,
    ...(resolvedStatus && { "data-status": resolvedStatus }),
    ...(preset.length > 0 && { "data-preset": preset.join(",") }),
  };

  const ariaAttributes = {
    role: "img",
    "aria-label": alt,
  };

  return (
    <Component
      className={classNames}
      style={combinedStyle}
      {...dataAttributes}
      {...ariaAttributes}
      {...props}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          className="marduk-avatar__image"
          onError={() => setImageError(true)}
        />
      ) : resolvedInitials ? (
        <Text as="span" className="marduk-avatar__initials">
          {resolvedInitials}
        </Text>
      ) : fallbackIcon ? (
        <span className="marduk-avatar__icon">{fallbackIcon}</span>
      ) : (
        <Text as="span" className="marduk-avatar__fallback" aria-hidden="true">
          ?
        </Text>
      )}
      {resolvedStatus && (
        <span
          className={`marduk-avatar__status marduk-avatar__status--${resolvedStatus}`}
          aria-label={`Status: ${resolvedStatus}`}
        />
      )}
    </Component>
  );
};
