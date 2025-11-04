import { HTMLAttributes, ReactNode } from "react";
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
  className,
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
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
};
