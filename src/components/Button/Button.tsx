import { MouseEvent, ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonVariant, ComponentSize } from "../../types";
import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ComponentSize;
  disabled?: boolean;
  darkMode?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export type { ButtonVariant, ComponentSize };

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  darkMode = false,
  onClick,
  type = "button",
  className,
  ...props
}: ButtonProps) => {
  const classNames = [
    "marduk-button",
    `marduk-button--${variant}`,
    `marduk-button--${size}`,
    disabled ? "marduk-button--disabled" : "",
    darkMode ? "marduk-button--dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
