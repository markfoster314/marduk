import { SVGAttributes, ReactNode } from "react";
import "./Svg.css";

export interface SvgProps extends SVGAttributes<SVGSVGElement> {
  children: ReactNode;
  size?: "small" | "medium" | "large" | number;
  color?: string;
  viewBox?: string;
  darkMode?: boolean;
  align?: "left" | "center" | "right";
  rotate?: 0 | 90 | 180 | 270;
  flip?: "horizontal" | "vertical" | "both";
  title?: string;
  description?: string;
  decorative?: boolean;
  spin?: boolean;
  spinSpeed?: "slow" | "normal" | "fast";
  animation?: "heartpulse";
  strokeWidth?: number | string;
  strokeLinecap?: "butt" | "round" | "square";
  strokeLinejoin?: "miter" | "round" | "bevel";
  hoverColor?: string;
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
  className,
  style,
  ...props
}: SvgProps) => {
  const getSizeValue = () => {
    if (typeof size === "number") return size;
    const sizeMap = {
      small: 16,
      medium: 24,
      large: 32,
    };
    return sizeMap[size];
  };

  const sizeValue = getSizeValue();

  const classNames = [
    "marduk-svg",
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
    ...(hoverColor && ({ "--hover-color": hoverColor } as any)),
  };

  const ariaHidden = decorative ? true : undefined;

  return (
    <svg
      className={classNames}
      width={sizeValue}
      height={sizeValue}
      viewBox={viewBox}
      fill={color || "currentColor"}
      stroke={strokeWidth ? color || "currentColor" : undefined}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role={!decorative && (title || description) ? "img" : undefined}
      aria-hidden={ariaHidden}
      style={inlineStyles}
      {...props}
    >
      {title && <title>{title}</title>}
      {description && <desc>{description}</desc>}
      {children}
    </svg>
  );
};
