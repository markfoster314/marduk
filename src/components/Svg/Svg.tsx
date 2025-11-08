import { SVGAttributes, ReactNode, CSSProperties } from "react";
import { RotationAngle, FlipDirection, SpinSpeed, SvgAnimation } from "./Svg.types";
import { Alignment } from "@/types/components";
import "./Svg.css";

export interface SvgProps extends SVGAttributes<SVGSVGElement> {
  children: ReactNode;
  size?: "xs" | "small" | "medium" | "large" | "xl" | "2xl" | "3xl" | number;
  color?: string;
  viewBox?: string;
  darkMode?: boolean;
  align?: Alignment;
  rotate?: RotationAngle;
  flip?: FlipDirection;
  title?: string;
  description?: string;
  decorative?: boolean;
  spin?: boolean;
  spinSpeed?: SpinSpeed;
  animation?: SvgAnimation;
  strokeWidth?: number | string;
  strokeLinecap?: "butt" | "round" | "square";
  strokeLinejoin?: "miter" | "round" | "bevel";
  hoverColor?: string;
  responsive?: boolean;
  filter?: string;
}

export const Svg = ({
  children,
  size = "medium",
  color,
  viewBox = "0 0 24 24",
  darkMode = false,
  align,
  rotate,
  flip,
  title,
  description,
  decorative = false,
  spin = false,
  animation,
  spinSpeed = "normal",
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
  hoverColor,
  responsive = false,
  filter,
  className,
  style,
  ...props
}: SvgProps) => {
  const sizeMap: Record<string, number> = {
    xs: 12,
    small: 16,
    medium: 24,
    large: 32,
    xl: 48,
    "2xl": 64,
    "3xl": 96,
  };
  const sizeValue = typeof size === "number" ? size : sizeMap[size];
  const isCustomSize = typeof size === "number";

  const classNames = [
    "marduk-svg",
    !isCustomSize ? `marduk-svg--size-${size}` : "",
    responsive && isCustomSize ? "marduk-svg--responsive" : "",
    darkMode ? "marduk-svg--dark" : "",
    align ? `marduk-svg--align-${align}` : "",
    rotate ? `marduk-svg--rotate-${rotate}` : "",
    flip ? `marduk-svg--flip-${flip}` : "",
    spin ? `marduk-svg--spin marduk-svg--spin-${spinSpeed}` : "",
    animation ? `marduk-svg--animation-${animation}` : "",
    hoverColor ? "marduk-svg--hoverable" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inlineStyles = {
    ...style,
    ...(hoverColor && { "--hover-color": hoverColor }),
    ...(isCustomSize && {
      "--svg-custom-size": `${sizeValue}px`,
    }),
    ...(filter && { filter }),
  } as CSSProperties;

  const dataAttributes = {
    "data-size": typeof size === "number" ? "custom" : size,
    ...(typeof size === "number" && { "data-custom-size": size }),
    ...(responsive && isCustomSize && { "data-responsive": true }),
    ...(filter && { "data-filter": true }),
    ...(darkMode && { "data-dark-mode": true }),
    ...(align && { "data-align": align }),
    ...(rotate && { "data-rotate": rotate }),
    ...(flip && { "data-flip": flip }),
    ...(spin && { "data-spin": true, "data-spin-speed": spinSpeed }),
    ...(animation && { "data-animation": animation }),
    ...(decorative && { "data-decorative": true }),
    ...(color && { "data-custom-color": true }),
    ...(hoverColor && { "data-hoverable": true }),
    ...(strokeWidth && { "data-stroke-width": strokeWidth }),
  };

  return (
    <svg
      className={classNames}
      viewBox={viewBox}
      fill={color || "currentColor"}
      stroke={strokeWidth ? color || "currentColor" : undefined}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={decorative ? true : undefined}
      style={inlineStyles}
      {...dataAttributes}
      {...props}
    >
      {title && <title>{title}</title>}
      {description && <desc>{description}</desc>}
      {children}
    </svg>
  );
};
