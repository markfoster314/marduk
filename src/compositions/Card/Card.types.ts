import { ReactNode } from "react";

export interface CardProps {
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  headerActions?: ReactNode;
}
