import {
  ElementType,
  ComponentPropsWithoutRef,
  ReactNode,
  CSSProperties,
} from "react";
import { TitleVariant, TitleSize } from "./Title.types";
import {
  Alignment,
  FontWeight,
  LetterSpacing,
  UnderlineStyle,
} from "../../types/components";
import "./Title.css";

type TitleOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode;
  as?: E;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: TitleVariant;
  align?: Alignment;
  size?: TitleSize;
  weight?: FontWeight;
  darkMode?: boolean;
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

export type {
  TitleVariant,
  TitleSize,
  Alignment,
  FontWeight,
  LetterSpacing,
  UnderlineStyle,
};

const defaultElement = "h1";

export const Title = <E extends ElementType = typeof defaultElement>({
  children,
  as,
  level = 1,
  variant = "default",
  align = "left",
  size,
  weight,
  darkMode = false,
  color,
  truncate = false,
  clamp = false,
  maxLines = 2,
  spacing,
  underlined = false,
  underlineStyle = "solid",
  className,
  style,
  ...props
}: TitleProps<E>) => {
  const classNames = [
    "marduk-title",
    `marduk-title--level-${level}`,
    `marduk-title--variant-${variant}`,
    `marduk-title--align-${align}`,
    size ? `marduk-title--size-${size}` : "",
    weight ? `marduk-title--weight-${weight}` : "",
    darkMode ? "marduk-title--dark" : "",
    color ? "marduk-title--custom-color" : "",
    truncate ? "marduk-title--truncate" : "",
    clamp ? "marduk-title--clamp" : "",
    spacing ? `marduk-title--spacing-${spacing}` : "",
    underlined ? "marduk-title--underlined" : "",
    underlined && underlineStyle
      ? `marduk-title--underline-${underlineStyle}`
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const combinedStyle = {
    ...style,
    ...(color
      ? ({ "--marduk-title-custom-color": color } as CSSProperties)
      : {}),
    ...(clamp && maxLines
      ? ({ "--title-max-lines": maxLines } as CSSProperties)
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

  const Component = as || getDefaultHeadingElement();

  const isHeadingElement =
    !as ||
    ["h1", "h2", "h3", "h4", "h5", "h6"].includes(
      typeof as === "string" ? as : ""
    );

  const dataAttributes = {
    "data-level": level,
    "data-variant": variant,
    "data-align": align,
    ...(size && { "data-size": size }),
    ...(weight && { "data-weight": weight }),
    ...(darkMode && { "data-dark-mode": true }),
    ...(color && { "data-custom-color": true }),
    ...(truncate && { "data-truncate": true }),
    ...(clamp && { "data-clamp": true }),
    ...(clamp && maxLines && { "data-max-lines": maxLines }),
    ...(spacing && { "data-spacing": spacing }),
    ...(underlined && { "data-underlined": true }),
    ...(underlined &&
      underlineStyle && { "data-underline-style": underlineStyle }),
  };

  const accessibilityProps = !isHeadingElement
    ? { "aria-level": level, role: "heading" }
    : {};

  const elementProps = {
    className: classNames,
    style: combinedStyle,
    ...dataAttributes,
    ...accessibilityProps,
    ...props,
  };

  return <Component {...elementProps}>{children}</Component>;
};
