import {
  ElementType,
  ComponentPropsWithoutRef,
  ReactNode,
  CSSProperties,
} from "react";
import { TextSize, TextAlignment } from "./Text.types";
import {
  FontWeight,
  LineHeight,
  LetterSpacing,
  UnderlineStyle,
} from "../../types/components";
import { getPreset, TextPresets, TextPresetConfig } from "./presets";
import "./Text.css";

type TextOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode;
  as?: E;
  preset?: (keyof TextPresets | string)[];
  size?: TextSize;
  weight?: FontWeight;
  align?: TextAlignment;
  lineHeight?: LineHeight;
  spacing?: LetterSpacing;
  truncate?: boolean;
  clamp?: boolean;
  maxLines?: number;
  italic?: boolean;
  underlined?: boolean;
  underlineStyle?: UnderlineStyle;
  color?: string;
  style?: CSSProperties;
};

export type TextProps<E extends ElementType = "p"> = TextOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof TextOwnProps>;

export type {
  TextSize,
  TextAlignment,
  FontWeight,
  LineHeight,
  LetterSpacing,
  UnderlineStyle,
};

const defaultElement = "p";

export const Text = <E extends ElementType = typeof defaultElement>({
  children,
  preset,
  size,
  weight,
  align,
  lineHeight,
  spacing,
  truncate,
  clamp,
  maxLines,
  italic,
  underlined,
  underlineStyle,
  as,
  color,
  className,
  style,
  ...props
}: TextProps<E>) => {
  const Component = as || defaultElement;

  let mergedPresetConfig: TextPresetConfig = {};

  if (preset && preset.length > 0) {
    for (const presetName of preset) {
      const config = getPreset(presetName);
      if (config) {
        mergedPresetConfig = {
          ...mergedPresetConfig,
          ...config,
          style: {
            ...(mergedPresetConfig.style || {}),
            ...(config.style || {}),
          },
        };
      }
    }
  }

  const resolvedSize = size ?? mergedPresetConfig.size ?? "md";
  const resolvedWeight = weight ?? mergedPresetConfig.weight;
  const resolvedAlign = align ?? mergedPresetConfig.align ?? "left";
  const resolvedLineHeight = lineHeight ?? mergedPresetConfig.lineHeight;
  const resolvedSpacing = spacing ?? mergedPresetConfig.spacing;
  const resolvedTruncate = truncate ?? mergedPresetConfig.truncate ?? false;
  const resolvedClamp = clamp ?? mergedPresetConfig.clamp ?? false;
  const resolvedMaxLines = maxLines ?? mergedPresetConfig.maxLines ?? 2;
  const resolvedItalic = italic ?? mergedPresetConfig.italic ?? false;
  const resolvedUnderlined =
    underlined ?? mergedPresetConfig.underlined ?? false;
  const resolvedUnderlineStyle =
    underlineStyle ?? mergedPresetConfig.underlineStyle ?? "solid";
  const resolvedColor = color ?? mergedPresetConfig.color;

  const classNames = [
    "marduk-text",
    `marduk-text--size-${resolvedSize}`,
    `marduk-text--align-${resolvedAlign}`,
    resolvedWeight ? `marduk-text--weight-${resolvedWeight}` : "",
    resolvedLineHeight ? `marduk-text--line-height-${resolvedLineHeight}` : "",
    resolvedSpacing ? `marduk-text--spacing-${resolvedSpacing}` : "",
    resolvedTruncate ? "marduk-text--truncate" : "",
    resolvedClamp ? "marduk-text--clamp" : "",
    resolvedItalic ? "marduk-text--italic" : "",
    resolvedUnderlined ? "marduk-text--underlined" : "",
    resolvedUnderlined && resolvedUnderlineStyle
      ? `marduk-text--underline-${resolvedUnderlineStyle}`
      : "",
    resolvedColor ? "marduk-text--custom-color" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const presetStyle = mergedPresetConfig.style || {};
  const combinedStyle = {
    ...presetStyle,
    ...style,
    ...(resolvedColor
      ? ({ "--marduk-text-custom-color": resolvedColor } as CSSProperties)
      : {}),
    ...(resolvedClamp && resolvedMaxLines
      ? ({ "--text-max-lines": resolvedMaxLines } as CSSProperties)
      : {}),
  };

  const dataAttributes = {
    ...(preset && preset.length > 0 && { "data-preset": preset.join(",") }),
    "data-size": resolvedSize,
    "data-align": resolvedAlign,
    ...(resolvedWeight && { "data-weight": resolvedWeight }),
    ...(resolvedLineHeight && { "data-line-height": resolvedLineHeight }),
    ...(resolvedSpacing && { "data-spacing": resolvedSpacing }),
    ...(resolvedTruncate && { "data-truncate": true }),
    ...(resolvedClamp && { "data-clamp": true }),
    ...(resolvedClamp &&
      resolvedMaxLines && { "data-max-lines": resolvedMaxLines }),
    ...(resolvedItalic && { "data-italic": true }),
    ...(resolvedUnderlined && { "data-underlined": true }),
    ...(resolvedUnderlined &&
      resolvedUnderlineStyle && {
        "data-underline-style": resolvedUnderlineStyle,
      }),
    ...(resolvedColor && { "data-custom-color": true }),
  };

  return (
    <Component
      className={classNames}
      style={combinedStyle}
      {...dataAttributes}
      {...props}
    >
      {children}
    </Component>
  );
};
