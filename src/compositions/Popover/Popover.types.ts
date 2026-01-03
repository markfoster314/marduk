import { ReactNode } from "react";

export interface PopoverProps {
  children: ReactNode;
  content: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  position?: "top" | "bottom" | "left" | "right";
}
