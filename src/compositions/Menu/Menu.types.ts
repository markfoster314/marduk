import { ReactNode } from "react";

export interface MenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
}
