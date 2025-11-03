import { HTMLAttributes, ReactNode } from "react";
import "./Text.css";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "muted";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right" | "justify";
  italic?: boolean;
  underline?: boolean;
  darkMode?: boolean;
  as?: "p" | "span" | "div" | "label";
}

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
