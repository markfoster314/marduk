import { ReactNode } from "react";

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
}
