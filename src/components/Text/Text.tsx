import { HTMLAttributes, ReactNode, CSSProperties } from "react";
import { TextVariant, TextSize, TextAlignment, FontWeight } from "../../types";
import "./Text.css";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: TextVariant;
  size?: TextSize;
  weight?: FontWeight;
  align?: TextAlignment;
  italic?: boolean;
  underline?: boolean;
  darkMode?: boolean;
  as?: "p" | "span" | "div" | "label";
  color?: string;
}

export type { TextVariant, TextSize, TextAlignment, FontWeight };

export const Text = ({
  children,
  variant = "default",
  size = "md",
  weight,
  align = "left",
  italic = false,
  underline = false,
  darkMode = false,
  as = "p",
  color,
  className,
  style,
  ...props
}: TextProps) => {
  const Component = as;

  const classNames = [
    "marduk-text",
    `marduk-text--variant-${variant}`,
    `marduk-text--size-${size}`,
    `marduk-text--align-${align}`,
    weight ? `marduk-text--weight-${weight}` : "",
    italic ? "marduk-text--italic" : "",
    underline ? "marduk-text--underline" : "",
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
  };

  return (
    <Component className={classNames} style={combinedStyle} {...props}>
      {children}
    </Component>
  );
};
