import { CSSProperties } from "react";
import { SvgProps } from "./Svg.types";
import { getPreset } from "./presets";
import "./Svg.css";

export const Svg = ({
  children,
  size,
  color,
  viewBox = "0 0 24 24",
  preset = [],
  align,
  rotate,
  flip,
  title,
  description,
  decorative,
  spin,
  animation,
  spinSpeed,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
  hoverColor,
  responsive,
  filter,
  className,
  style,
  ...props
}: SvgProps) => {
  // Merge presets in order
  const mergedConfig = preset.reduce((acc, presetName) => {
    const config = getPreset(presetName as string);
    return config ? { ...acc, ...config } : acc;
  }, {} as Partial<SvgProps>);

  // Apply preset values with explicit props taking precedence
  const resolvedSize = size ?? mergedConfig.size ?? "medium";
  const resolvedColor = color ?? mergedConfig.color;
  const resolvedAlign = align ?? mergedConfig.align;
  const resolvedRotate = rotate ?? mergedConfig.rotate;
  const resolvedFlip = flip ?? mergedConfig.flip;
  const resolvedDecorative = decorative ?? mergedConfig.decorative ?? false;
  const resolvedSpin = spin ?? mergedConfig.spin ?? false;
  const resolvedSpinSpeed = spinSpeed ?? mergedConfig.spinSpeed ?? "normal";
  const resolvedAnimation = animation ?? mergedConfig.animation;
  const resolvedStrokeWidth = strokeWidth ?? mergedConfig.strokeWidth;
  const resolvedStrokeLinecap = strokeLinecap ?? mergedConfig.strokeLinecap;
  const resolvedStrokeLinejoin = strokeLinejoin ?? mergedConfig.strokeLinejoin;
  const resolvedHoverColor = hoverColor ?? mergedConfig.hoverColor;
  const resolvedResponsive = responsive ?? mergedConfig.responsive ?? false;
  const resolvedFilter = filter ?? mergedConfig.filter;
  const sizeMap: Record<string, number> = {
    xs: 12,
    small: 16,
    medium: 24,
    large: 32,
    xl: 48,
    "2xl": 64,
    "3xl": 96,
  };
  const sizeValue = typeof resolvedSize === "number" ? resolvedSize : sizeMap[resolvedSize];
  const isCustomSize = typeof resolvedSize === "number";

  const classNames = [
    "marduk-svg",
    !isCustomSize ? `marduk-svg--size-${resolvedSize}` : "",
    resolvedResponsive && isCustomSize ? "marduk-svg--responsive" : "",
    resolvedAlign ? `marduk-svg--align-${resolvedAlign}` : "",
    resolvedRotate ? `marduk-svg--rotate-${resolvedRotate}` : "",
    resolvedFlip ? `marduk-svg--flip-${resolvedFlip}` : "",
    resolvedSpin ? `marduk-svg--spin marduk-svg--spin-${resolvedSpinSpeed}` : "",
    resolvedAnimation ? `marduk-svg--animation-${resolvedAnimation}` : "",
    resolvedHoverColor ? "marduk-svg--hoverable" : "",
    ...(preset.length > 0 ? preset.map((p) => `marduk-svg--${p}`) : []),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inlineStyles = {
    ...style,
    ...(resolvedHoverColor && { "--hover-color": resolvedHoverColor }),
    ...(isCustomSize && {
      "--svg-custom-size": `${sizeValue}px`,
    }),
    ...(resolvedFilter && { filter: resolvedFilter }),
  } as CSSProperties;

  const dataAttributes = {
    "data-size": typeof resolvedSize === "number" ? "custom" : resolvedSize,
    ...(typeof resolvedSize === "number" && { "data-custom-size": resolvedSize }),
    ...(resolvedResponsive && isCustomSize && { "data-responsive": true }),
    ...(resolvedFilter && { "data-filter": true }),
    ...(preset.length > 0 && { "data-preset": preset.join(" ") }),
    ...(resolvedAlign && { "data-align": resolvedAlign }),
    ...(resolvedRotate && { "data-rotate": resolvedRotate }),
    ...(resolvedFlip && { "data-flip": resolvedFlip }),
    ...(resolvedSpin && { "data-spin": true, "data-spin-speed": resolvedSpinSpeed }),
    ...(resolvedAnimation && { "data-animation": resolvedAnimation }),
    ...(resolvedDecorative && { "data-decorative": true }),
    ...(resolvedColor && { "data-custom-color": true }),
    ...(resolvedHoverColor && { "data-hoverable": true }),
    ...(resolvedStrokeWidth && { "data-stroke-width": resolvedStrokeWidth }),
  };

  return (
    <svg
      className={classNames}
      viewBox={viewBox}
      fill={resolvedColor || "currentColor"}
      stroke={resolvedStrokeWidth ? resolvedColor || "currentColor" : undefined}
      strokeWidth={resolvedStrokeWidth}
      strokeLinecap={resolvedStrokeLinecap}
      strokeLinejoin={resolvedStrokeLinejoin}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={resolvedDecorative ? true : undefined}
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
