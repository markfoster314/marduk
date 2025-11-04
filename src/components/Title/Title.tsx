import { HTMLAttributes, ReactNode } from "react";
import { TitleVariant, TitleSize, Alignment, FontWeight } from "../../types";
import "./Title.css";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: TitleVariant;
  align?: Alignment;
  size?: TitleSize;
  weight?: FontWeight;
  darkMode?: boolean;
}

export type { TitleVariant, TitleSize, Alignment, FontWeight };

export const Title = ({
  children,
  level = 1,
  variant = "default",
  align = "left",
  size,
  weight,
  darkMode = false,
  className,
  ...props
}: TitleProps) => {
  const classNames = [
    "marduk-title",
    `marduk-title--level-${level}`,
    `marduk-title--variant-${variant}`,
    `marduk-title--align-${align}`,
    size ? `marduk-title--size-${size}` : "",
    weight ? `marduk-title--weight-${weight}` : "",
    darkMode ? "marduk-title--dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  switch (level) {
    case 1:
      return (
        <h1 className={classNames} {...props}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={classNames} {...props}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={classNames} {...props}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={classNames} {...props}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={classNames} {...props}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={classNames} {...props}>
          {children}
        </h6>
      );
    default:
      return (
        <h1 className={classNames} {...props}>
          {children}
        </h1>
      );
  }
};
