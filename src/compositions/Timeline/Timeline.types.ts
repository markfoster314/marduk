import { ReactNode } from "react";

export interface TimelineItem {
  id: string;
  title: string;
  content: ReactNode;
  timestamp?: string;
  icon?: ReactNode;
}
