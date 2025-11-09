import { ElementType, ComponentPropsWithoutRef, ReactNode, CSSProperties } from "react";
import { TitleSize } from "./Title.types";
import { Alignment, FontWeight, LetterSpacing, UnderlineStyle } from "@/types/components";
import { getPreset, TitlePresets, TitlePresetConfig } from "./presets";
import "./Title.css";

type TitleOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode;
  as?: E;
  preset?: (keyof TitlePresets | string)[];
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: Alignment;
  size?: TitleSize;
  weight?: FontWeight;
  color?: string;
  truncate?: boolean;
  clamp?: boolean;
  maxLines?: number;
  spacing?: LetterSpacing;
  underlined?: boolean;
  underlineStyle?: UnderlineStyle;
};

export type TitleProps<E extends ElementType = "h1"> = TitleOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof TitleOwnProps>;

export type { TitleSize, Alignment, FontWeight, LetterSpacing, UnderlineStyle };

export const Title = <E extends ElementType = "h1">({
  children,
  as,
  preset,
  level = 1,
  align,
  size,
  weight,
  color,
  truncate,
  clamp,
  maxLines,
  spacing,
  underlined,
  underlineStyle,
  className,
  style,
  ...props
}: TitleProps<E>) => {
  let mergedPresetConfig: TitlePresetConfig = {};

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

  const resolvedAlign = align ?? mergedPresetConfig.align ?? "left";
  const resolvedSize = size ?? mergedPresetConfig.size;
  const resolvedWeight = weight ?? mergedPresetConfig.weight;
  const resolvedColor = color ?? mergedPresetConfig.color;
  const resolvedTruncate = truncate ?? mergedPresetConfig.truncate ?? false;
  const resolvedClamp = clamp ?? mergedPresetConfig.clamp ?? false;
  const resolvedMaxLines = maxLines ?? mergedPresetConfig.maxLines ?? 2;
  const resolvedSpacing = spacing ?? mergedPresetConfig.spacing;
  const resolvedUnderlined = underlined ?? mergedPresetConfig.underlined ?? false;
  const resolvedUnderlineStyle = underlineStyle ?? mergedPresetConfig.underlineStyle ?? "solid";

  const classNames = [
    "marduk-title",
    `marduk-title--level-${level}`,
    `marduk-title--align-${resolvedAlign}`,
    resolvedSize ? `marduk-title--size-${resolvedSize}` : "",
    resolvedWeight ? `marduk-title--weight-${resolvedWeight}` : "",
    resolvedColor ? "marduk-title--custom-color" : "",
    resolvedTruncate ? "marduk-title--truncate" : "",
    resolvedClamp ? "marduk-title--clamp" : "",
    resolvedSpacing ? `marduk-title--spacing-${resolvedSpacing}` : "",
    resolvedUnderlined ? "marduk-title--underlined" : "",
    resolvedUnderlined && resolvedUnderlineStyle
      ? `marduk-title--underline-${resolvedUnderlineStyle}`
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const presetStyle = mergedPresetConfig.style || {};
  const combinedStyle = {
    ...presetStyle,
    ...style,
    ...(resolvedColor ? ({ "--marduk-title-custom-color": resolvedColor } as CSSProperties) : {}),
    ...(resolvedClamp && resolvedMaxLines
      ? ({ "--title-max-lines": resolvedMaxLines } as CSSProperties)
      : {}),
  };

  const getDefaultHeadingElement = (): ElementType => {
    switch (level) {
      case 1:
        return "h1";
      case 2:
        return "h2";
      case 3:
        return "h3";
      case 4:
        return "h4";
      case 5:
        return "h5";
      case 6:
        return "h6";
      default:
        return "h1";
    }
  };

  const Component = (as || getDefaultHeadingElement()) as ElementType;

  const isHeadingElement =
    !as || ["h1", "h2", "h3", "h4", "h5", "h6"].includes(typeof as === "string" ? as : "");

  const dataAttributes = {
    ...(preset && preset.length > 0 && { "data-preset": preset.join(",") }),
    "data-level": level,
    "data-align": resolvedAlign,
    ...(resolvedSize && { "data-size": resolvedSize }),
    ...(resolvedWeight && { "data-weight": resolvedWeight }),
    ...(resolvedColor && { "data-custom-color": true }),
    ...(resolvedTruncate && { "data-truncate": true }),
    ...(resolvedClamp && { "data-clamp": true }),
    ...(resolvedClamp && resolvedMaxLines && { "data-max-lines": resolvedMaxLines }),
    ...(resolvedSpacing && { "data-spacing": resolvedSpacing }),
    ...(resolvedUnderlined && { "data-underlined": true }),
    ...(resolvedUnderlined &&
      resolvedUnderlineStyle && { "data-underline-style": resolvedUnderlineStyle }),
  };

  const accessibilityProps = !isHeadingElement ? { "aria-level": level, role: "heading" } : {};

  const elementProps = {
    className: classNames,
    style: combinedStyle,
    ...dataAttributes,
    ...accessibilityProps,
    ...props,
  };

  return <Component {...elementProps}>{children}</Component>;
};
