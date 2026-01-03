import { ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
}
