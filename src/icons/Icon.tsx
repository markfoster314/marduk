import React from "react";
import { Svg, SvgProps } from "../components/Svg/Svg";
import { iconData } from "./data";

export interface IconProps extends Omit<SvgProps, "children" | "viewBox"> {
  name: keyof typeof iconData;
  viewBox?: string;
}

export const Icon: React.FC<IconProps> = ({ name, viewBox, ...props }) => {
  const icon = iconData[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const paths = Array.isArray(icon.paths) ? icon.paths : [icon.paths];

  return (
    <Svg viewBox={viewBox || icon.viewBox || "0 0 24 24"} {...props}>
      {paths.map((path, index) => (
        <path key={index} d={path} />
      ))}
    </Svg>
  );
};

export type IconName = keyof typeof iconData;
