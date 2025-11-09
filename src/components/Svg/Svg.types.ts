import { SVGAttributes, ReactNode } from "react";
import { Alignment } from "@/types/components";
import type { SvgPresets } from "./presets";

export type RotationAngle = 0 | 90 | 180 | 270;
export type FlipDirection = "horizontal" | "vertical" | "both";
export type SpinSpeed = "slow" | "normal" | "fast";
export type SvgAnimation = "heartpulse";

export interface SvgProps extends SVGAttributes<SVGSVGElement> {
  children: ReactNode;
  size?: "xs" | "small" | "medium" | "large" | "xl" | "2xl" | "3xl" | number;
  color?: string;
  viewBox?: string;
  preset?: (keyof SvgPresets)[];
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
