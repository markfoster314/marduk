import { ReactNode } from "react";

export interface SidebarProps {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  position?: "left" | "right";
  width?: string;
}
