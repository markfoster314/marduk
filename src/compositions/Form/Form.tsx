import { Box } from "@/components/Box/Box";
import { CSSProperties } from "react";
import { FormProps } from "./Form.types";
import "./Form.css";

export const Form = ({
  children,
  onSubmit,
  method = "post",
  action,
  ...props
}: FormProps & { style?: CSSProperties }) => {
  return (
    <Box
      as="form"
      className="marduk-form"
      onSubmit={onSubmit}
      method={method}
      action={action}
      {...props}
    >
      {children}
    </Box>
  );
};
