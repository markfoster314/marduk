import { SvgProps } from "../components/Svg/Svg";

// Icon Props
export interface BaseIconProps extends Omit<SvgProps, "children"> {}

// Variant Types
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

export type ButtonAppearance = "filled" | "outline" | "text";

export type AlertVariant = "info" | "success" | "warning" | "error";

// Size Types
export type ComponentSize = "small" | "medium" | "large";

export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";

export type TitleSize = "small" | "medium" | "large";

// Alignment Types

export type Alignment = "left" | "center" | "right";

export type TextAlignment = "left" | "center" | "right" | "justify";

// Font Weight Types
export type FontWeight = "normal" | "medium" | "semibold" | "bold";

// Transformation Types
export type RotationAngle = 0 | 90 | 180 | 270;

export type FlipDirection = "horizontal" | "vertical" | "both";

export type SpinSpeed = "slow" | "normal" | "fast";

// Animation Types
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
