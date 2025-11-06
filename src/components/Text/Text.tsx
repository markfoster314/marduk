import {
  ElementType,
  ComponentPropsWithoutRef,
  ReactNode,
  CSSProperties,
} from "react";
import { TextVariant, TextSize, TextAlignment } from "./Text.types";
import {
  FontWeight,
  LineHeight,
  LetterSpacing,
  UnderlineStyle,
} from "../../types/components";
import "./Text.css";

type TextOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode;
  as?: E;
  variant?: TextVariant;
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
  darkMode?: boolean;
  color?: string;
};

export type TextProps<E extends ElementType = "p"> = TextOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof TextOwnProps>;

export type {
  TextVariant,
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
  variant = "default",
  size = "md",
  weight,
  align = "left",
  lineHeight,
  spacing,
  truncate = false,
  clamp = false,
  maxLines = 2,
  italic = false,
  underlined = false,
  underlineStyle = "solid",
  darkMode = false,
  as,
  color,
  className,
  style,
  ...props
}: TextProps<E>) => {
  const Component = as || defaultElement;

  const classNames = [
    "marduk-text",
    `marduk-text--variant-${variant}`,
    `marduk-text--size-${size}`,
    `marduk-text--align-${align}`,
    weight ? `marduk-text--weight-${weight}` : "",
    lineHeight ? `marduk-text--line-height-${lineHeight}` : "",
    spacing ? `marduk-text--spacing-${spacing}` : "",
    truncate ? "marduk-text--truncate" : "",
    clamp ? "marduk-text--clamp" : "",
    italic ? "marduk-text--italic" : "",
    underlined ? "marduk-text--underlined" : "",
    underlined && underlineStyle
      ? `marduk-text--underline-${underlineStyle}`
      : "",
    darkMode ? "marduk-text--dark" : "",
    color ? "marduk-text--custom-color" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const combinedStyle = {
    ...style,
    ...(color
      ? ({ "--marduk-text-custom-color": color } as CSSProperties)
      : {}),
    ...(clamp && maxLines
      ? ({ "--text-max-lines": maxLines } as CSSProperties)
      : {}),
  };

  const dataAttributes = {
    "data-variant": variant,
    "data-size": size,
    "data-align": align,
    ...(weight && { "data-weight": weight }),
    ...(lineHeight && { "data-line-height": lineHeight }),
    ...(spacing && { "data-spacing": spacing }),
    ...(truncate && { "data-truncate": true }),
    ...(clamp && { "data-clamp": true }),
    ...(clamp && maxLines && { "data-max-lines": maxLines }),
    ...(italic && { "data-italic": true }),
    ...(underlined && { "data-underlined": true }),
    ...(underlined &&
      underlineStyle && { "data-underline-style": underlineStyle }),
    ...(darkMode && { "data-dark-mode": true }),
    ...(color && { "data-custom-color": true }),
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
