import { SvgProps } from "../components/Svg/Svg";

// Base Interfaces
export interface BaseIconProps extends Omit<SvgProps, "children"> {}

// Variants (color/style variants)
export type TextVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "muted";

export type TitleVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type AlertVariant = "info" | "success" | "warning" | "error";

// Appearances
export type ButtonAppearance = "filled" | "outline" | "text";

// Sizes
export type ComponentSize = "small" | "medium" | "large";
export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
export type TitleSize = "small" | "medium" | "large";

// Alignments
export type Alignment = "left" | "center" | "right";
export type TextAlignment = "left" | "center" | "right" | "justify";

// Typography
export type FontWeight = "normal" | "medium" | "semibold" | "bold";
export type LetterSpacing = "tight" | "normal" | "wide";
export type LineHeight = "tight" | "normal" | "relaxed" | "loose";
export type UnderlineStyle = "solid" | "double" | "dotted" | "dashed" | "wavy";

// SVG stuff
export type RotationAngle = 0 | 90 | 180 | 270;
export type FlipDirection = "horizontal" | "vertical" | "both";
export type SpinSpeed = "slow" | "normal" | "fast";

// Animations
export type SvgAnimation = "heartpulse";

export type LoadingScreenAnimation =
  | "pulse"
  | "rotate"
  | "breathe"
  | "glitch"
  | "ripple"
  | "bounce"
  | "swing"
  | "flip"
  | "orbit"
  | "shake";

export type AlertAnimation = "none" | "fadeInUp" | "slideInRight";
