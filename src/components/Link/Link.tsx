import {
  ElementType,
  ComponentPropsWithoutRef,
  ReactNode,
  ReactElement,
  CSSProperties,
} from "react";
import { TextSize, TextAlignment } from "../Text/Text.types";
import { FontWeight, LineHeight, LetterSpacing } from "@/types/components";
import { LinkUnderline, LinkTarget } from "./Link.types";
import { getPreset, LinkPresets, LinkPresetConfig } from "./presets";
import "./Link.css";

type LinkOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode;
  href: string;
  as?: E;
  preset?: (keyof LinkPresets | string)[];
  size?: TextSize;
  weight?: FontWeight;
  align?: TextAlignment;
  lineHeight?: LineHeight;
  spacing?: LetterSpacing;
  truncate?: boolean;
  clamp?: boolean;
  maxLines?: number;
  italic?: boolean;
  underline?: LinkUnderline;
  color?: string;
  external?: boolean;
  target?: LinkTarget;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  style?: CSSProperties;
};

export type LinkProps<E extends ElementType = "a"> = LinkOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof LinkOwnProps>;

export type {
  TextSize,
  TextAlignment,
  FontWeight,
  LineHeight,
  LetterSpacing,
  LinkUnderline,
  LinkTarget,
};

const defaultElement = "a";

export const Link = <E extends ElementType = typeof defaultElement>({
  children,
  href,
  preset = [],
  size,
  weight,
  align,
  lineHeight,
  spacing,
  truncate,
  clamp,
  maxLines,
  italic,
  underline,
  as,
  color,
  external = false,
  target,
  leftIcon,
  rightIcon,
  className,
  style,
  ...rest
}: LinkProps<E>) => {
  const Element: ElementType = as || defaultElement;

  // Merge presets in order with deep style merging
  let mergedConfig: LinkPresetConfig = {};

  if (preset && preset.length > 0) {
    for (const presetName of preset) {
      const config = getPreset(presetName as string);
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

  // Apply preset values with explicit props taking precedence
  const resolvedSize = size ?? mergedConfig.size;
  const resolvedWeight = weight ?? mergedConfig.weight;
  const resolvedAlign = align ?? mergedConfig.align;
  const resolvedLineHeight = lineHeight ?? mergedConfig.lineHeight;
  const resolvedSpacing = spacing ?? mergedConfig.spacing;
  const resolvedTruncate = truncate ?? mergedConfig.truncate;
  const resolvedClamp = clamp ?? mergedConfig.clamp;
  const resolvedMaxLines = maxLines ?? mergedConfig.maxLines;
  const resolvedItalic = italic ?? mergedConfig.italic;
  const resolvedUnderline = underline ?? mergedConfig.underline ?? "always";
  const resolvedColor = color ?? mergedConfig.color;
  const resolvedExternal = external ?? mergedConfig.external ?? false;
  const resolvedTarget = target ?? mergedConfig.target ?? (resolvedExternal ? "_blank" : "_self");
  const resolvedLeftIcon = leftIcon ?? mergedConfig.leftIcon;
  const resolvedRightIcon = rightIcon ?? mergedConfig.rightIcon;

  const classNames = [
    "marduk-link",
    resolvedSize && `marduk-link--size-${resolvedSize}`,
    resolvedWeight && `marduk-link--weight-${resolvedWeight}`,
    resolvedAlign && `marduk-link--align-${resolvedAlign}`,
    resolvedLineHeight && `marduk-link--line-height-${resolvedLineHeight}`,
    resolvedSpacing && `marduk-link--spacing-${resolvedSpacing}`,
    resolvedTruncate && "marduk-link--truncate",
    resolvedClamp && "marduk-link--clamp",
    resolvedItalic && "marduk-link--italic",
    resolvedUnderline && `marduk-link--underline-${resolvedUnderline}`,
    (resolvedLeftIcon || resolvedRightIcon) && "marduk-link--with-icon",
    ...(preset.length > 0 ? preset.map((p) => `marduk-link--${p}`) : []),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const presetStyle = mergedConfig.style || {};
  const inlineStyles = {
    ...presetStyle,
    ...style,
    ...(resolvedColor && { color: resolvedColor }),
    ...(resolvedMaxLines && {
      "--link-max-lines": resolvedMaxLines,
    }),
  } as CSSProperties;

  const dataAttributes = {
    ...(resolvedSize && { "data-size": resolvedSize }),
    ...(resolvedWeight && { "data-weight": resolvedWeight }),
    ...(resolvedAlign && { "data-align": resolvedAlign }),
    ...(resolvedLineHeight && { "data-line-height": resolvedLineHeight }),
    ...(resolvedSpacing && { "data-spacing": resolvedSpacing }),
    ...(resolvedTruncate && { "data-truncate": true }),
    ...(resolvedClamp && { "data-clamp": true }),
    ...(resolvedMaxLines && { "data-max-lines": resolvedMaxLines }),
    ...(resolvedItalic && { "data-italic": true }),
    ...(resolvedUnderline && { "data-underline": resolvedUnderline }),
    ...(resolvedExternal && { "data-external": true }),
    ...(preset.length > 0 && { "data-preset": preset.join(" ") }),
  };

  // External link security attributes
  const externalProps = resolvedExternal
    ? {
        target: resolvedTarget,
        rel: "noopener noreferrer",
      }
    : {
        target: resolvedTarget !== "_self" ? resolvedTarget : undefined,
      };

  return (
    <Element
      href={href}
      className={classNames}
      style={inlineStyles}
      {...dataAttributes}
      {...externalProps}
      {...rest}
    >
      {resolvedLeftIcon && (
        <span className="marduk-link__icon marduk-link__icon--left">{resolvedLeftIcon}</span>
      )}
      <span className="marduk-link__text">{children}</span>
      {resolvedRightIcon && (
        <span className="marduk-link__icon marduk-link__icon--right">{resolvedRightIcon}</span>
      )}
    </Element>
  );
};
