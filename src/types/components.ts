import { SvgProps } from "../components/Svg/Svg";

export interface BaseIconProps extends Omit<SvgProps, "children"> {}

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

export type ComponentSize = "small" | "medium" | "large";

export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";

export type TitleSize = "small" | "medium" | "large";

export type Alignment = "left" | "center" | "right";

export type TextAlignment = "left" | "center" | "right" | "justify";

export type FontWeight = "normal" | "medium" | "semibold" | "bold";

export type LetterSpacing = "tight" | "normal" | "wide";

export type UnderlineStyle = "solid" | "double" | "dotted" | "dashed" | "wavy";

export type RotationAngle = 0 | 90 | 180 | 270;

export type FlipDirection = "horizontal" | "vertical" | "both";

export type SpinSpeed = "slow" | "normal" | "fast";

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
