import { ElementType, ComponentPropsWithoutRef, ReactNode, CSSProperties } from "react";
import {
  SpacingSize,
  DisplayType,
  FlexDirection,
  FlexJustify,
  FlexAlign,
  FlexWrap,
  BorderRadius,
} from "./Box.types";
import { getPreset, BoxPresets, BoxPresetConfig } from "./presets";
import "./Box.css";

type BoxOwnProps<E extends ElementType = ElementType> = {
  children?: ReactNode;
  as?: E;
  preset?: (keyof BoxPresets | string)[];
  padding?: SpacingSize;
  margin?: SpacingSize;
  display?: DisplayType;
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: SpacingSize;
  wrap?: FlexWrap;
  width?: string;
  height?: string;
  borderRadius?: BorderRadius;
  backgroundColor?: string;
  style?: CSSProperties;
};

export type BoxProps<E extends ElementType = "div"> = BoxOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof BoxOwnProps>;

export type {
  SpacingSize,
  DisplayType,
  FlexDirection,
  FlexJustify,
  FlexAlign,
  FlexWrap,
  BorderRadius,
};

const defaultElement = "div";

export const Box = <E extends ElementType = typeof defaultElement>({
  children,
  as,
  preset,
  padding,
  margin,
  display,
  direction,
  justify,
  align,
  gap,
  wrap,
  width,
  height,
  borderRadius,
  backgroundColor,
  className,
  style,
  ...props
}: BoxProps<E>) => {
  const Component = as || defaultElement;

  let mergedPresetConfig: BoxPresetConfig = {};

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

  const resolvedPadding = padding ?? mergedPresetConfig.padding;
  const resolvedMargin = margin ?? mergedPresetConfig.margin;
  const resolvedDisplay = display ?? mergedPresetConfig.display;
  const resolvedDirection = direction ?? mergedPresetConfig.direction;
  const resolvedJustify = justify ?? mergedPresetConfig.justify;
  const resolvedAlign = align ?? mergedPresetConfig.align;
  const resolvedGap = gap ?? mergedPresetConfig.gap;
  const resolvedWrap = wrap ?? mergedPresetConfig.wrap;
  const resolvedWidth = width ?? mergedPresetConfig.width;
  const resolvedHeight = height ?? mergedPresetConfig.height;
  const resolvedBorderRadius = borderRadius ?? mergedPresetConfig.borderRadius;
  const resolvedBackgroundColor = backgroundColor ?? mergedPresetConfig.backgroundColor;

  const classNames = [
    "marduk-box",
    resolvedPadding ? `marduk-box--padding-${resolvedPadding}` : "",
    resolvedMargin ? `marduk-box--margin-${resolvedMargin}` : "",
    resolvedDisplay ? `marduk-box--display-${resolvedDisplay}` : "",
    resolvedDirection ? `marduk-box--flex-${resolvedDirection}` : "",
    resolvedJustify ? `marduk-box--justify-${resolvedJustify}` : "",
    resolvedAlign ? `marduk-box--align-${resolvedAlign}` : "",
    resolvedGap ? `marduk-box--gap-${resolvedGap}` : "",
    resolvedWrap ? `marduk-box--wrap-${resolvedWrap}` : "",
    resolvedBorderRadius ? `marduk-box--radius-${resolvedBorderRadius}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const presetStyle = mergedPresetConfig.style || {};
  const inlineStyles = {
    ...presetStyle,
    ...style,
    ...(resolvedWidth ? { width: resolvedWidth } : {}),
    ...(resolvedHeight ? { height: resolvedHeight } : {}),
    ...(resolvedBackgroundColor ? ({ "--box-bg": resolvedBackgroundColor } as CSSProperties) : {}),
  };

  const dataAttributes = {
    ...(preset && preset.length > 0 && { "data-preset": preset.join(",") }),
    ...(resolvedPadding && { "data-padding": resolvedPadding }),
    ...(resolvedMargin && { "data-margin": resolvedMargin }),
    ...(resolvedDisplay && { "data-display": resolvedDisplay }),
    ...(resolvedDisplay === "flex" && { "data-flex": true }),
  };

  return (
    <Component className={classNames} style={inlineStyles} {...dataAttributes} {...props}>
      {children}
    </Component>
  );
};
