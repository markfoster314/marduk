import { FC } from "react";
import { Svg } from "../components/Svg/Svg";
import { BaseIconProps } from "../types/icons";

export interface UserIconProps extends BaseIconProps {}

export const UserIcon: FC<UserIconProps> = (props) => {
  return (
    <Svg {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    </Svg>
  );
};
