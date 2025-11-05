import { MouseEvent, ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonVariant, ButtonAppearance, ComponentSize } from "../../types";
import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  appearance?: ButtonAppearance;
  size?: ComponentSize;
  disabled?: boolean;
  loading?: boolean;
  darkMode?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export type { ButtonVariant, ButtonAppearance, ComponentSize };

export const Button = ({
  children,
  variant = "primary",
  appearance = "filled",
  size = "medium",
  disabled = false,
  loading = false,
  darkMode = false,
  onClick,
  type = "button",
  className,
  ...props
}: ButtonProps) => {
  const classNames = [
    "marduk-button",
    `marduk-button--${variant}`,
    `marduk-button--appearance-${appearance}`,
    `marduk-button--${size}`,
    disabled ? "marduk-button--disabled" : "",
    loading ? "marduk-button--loading" : "",
    darkMode ? "marduk-button--dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || loading}
      onClick={onClick}
      {...(loading && { "aria-busy": true })}
      {...props}
    >
      {loading && <span className="marduk-button-spinner" aria-hidden="true" />}
      <span className={loading ? "marduk-button-content--loading" : ""}>
        {children}
      </span>
    </button>
  );
};
