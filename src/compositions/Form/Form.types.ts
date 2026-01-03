import { ReactNode, FormEventHandler } from "react";

export interface FormProps {
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  method?: "get" | "post";
  action?: string;
}
