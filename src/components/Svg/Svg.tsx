import { SVGAttributes, ReactNode } from "react";
import { SvgAnimation } from "../../types";
import "./Svg.css";

export interface SvgProps extends SVGAttributes<SVGSVGElement> {
  children: ReactNode;
  size?: "xs" | "small" | "medium" | "large" | "xl" | "2xl" | "3xl" | number;
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
  animation?: SvgAnimation;
  strokeWidth?: number | string;
  strokeLinecap?: "butt" | "round" | "square";
  strokeLinejoin?: "miter" | "round" | "bevel";
  hoverColor?: string;
  responsive?: boolean;
  aspectRatio?: "1:1" | "16:9" | "4:3" | "3:2" | "21:9" | string;
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
  aspectRatio,
  filter,
  className,
  style,
  ...props
}: SvgProps) => {
  const getSizeValue = () => {
    if (typeof size === "number") return size;
    const sizeMap = {
      xs: 12,
      small: 16,
      medium: 24,
      large: 32,
      xl: 48,
      "2xl": 64,
      "3xl": 96,
    };
    return sizeMap[size];
  };

  const getAspectRatioDimensions = (baseSize: number) => {
    if (!aspectRatio) {
      return { width: baseSize, height: baseSize };
    }

    const [widthRatio, heightRatio] = aspectRatio
      .split(":")
      .map((n) => parseFloat(n));

    if (!widthRatio || !heightRatio) {
      return { width: baseSize, height: baseSize };
    }

    // Base the calculation on the larger dimension
    if (widthRatio >= heightRatio) {
      const width = baseSize;
      const height = Math.round((baseSize * heightRatio) / widthRatio);
      return { width, height };
    } else {
      const height = baseSize;
      const width = Math.round((baseSize * widthRatio) / heightRatio);
      return { width, height };
    }
  };

  const sizeValue = getSizeValue();
  const isCustomSize = typeof size === "number";
  const { width: svgWidth, height: svgHeight } =
    getAspectRatioDimensions(sizeValue);

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
    ...(hoverColor && ({ "--hover-color": hoverColor } as any)),
    ...(isCustomSize &&
      ({
        "--svg-custom-size": `${sizeValue}px`,
      } as any)),
    ...(filter && ({ filter } as any)),
    ...(aspectRatio &&
      !isCustomSize && {
        width: `${svgWidth}px`,
        height: `${svgHeight}px`,
      }),
  };

  const dataAttributes = {
    "data-size": typeof size === "number" ? "custom" : size,
    ...(typeof size === "number" && { "data-custom-size": size }),
    ...(responsive && isCustomSize && { "data-responsive": true }),
    ...(aspectRatio && { "data-aspect-ratio": aspectRatio }),
    ...(filter && { "data-filter": true }),
    ...(darkMode && { "data-dark-mode": true }),
    ...(align && { "data-align": align }),
    ...(rotate && { "data-rotate": rotate }),
    ...(flip && { "data-flip": flip }),
    ...(spin && { "data-spin": true }),
    ...(spin && { "data-spin-speed": spinSpeed }),
    ...(animation && { "data-animation": animation }),
    ...(decorative && { "data-decorative": true }),
    ...(color && { "data-custom-color": true }),
    ...(hoverColor && { "data-hoverable": true }),
    ...(strokeWidth && { "data-stroke-width": strokeWidth }),
  };

  const ariaHidden = decorative ? true : undefined;

  return (
    <svg
      className={classNames}
      width={isCustomSize ? svgWidth : undefined}
      height={isCustomSize ? svgHeight : undefined}
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
      {...dataAttributes}
      {...props}
    >
      {title && <title>{title}</title>}
      {description && <desc>{description}</desc>}
      {children}
    </svg>
  );
};
