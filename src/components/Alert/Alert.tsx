import { HTMLAttributes, ReactNode, useState } from "react";
import "./Alert.css";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "info" | "success" | "warning" | "error";
  onClose?: () => void;
  closable?: boolean;
  title?: string;
}

export const Alert = ({
  children,
  variant = "info",
  onClose,
  closable = false,
  title,
  className,
  ...props
}: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  const alertClasses = ["marduk-alert", `marduk-alert--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  const icons = {
    info: "i",
    success: "✓",
    warning: "!",
    error: "✕",
  };

  return (
    <div className={alertClasses} role="alert" {...props}>
      <div className="marduk-alert-icon">{icons[variant]}</div>
      <div className="marduk-alert-content">
        {title && <div className="marduk-alert-title">{title}</div>}
        <div className="marduk-alert-message">{children}</div>
      </div>
      {closable && (
        <button
          type="button"
          className="marduk-alert-close"
          onClick={handleClose}
          aria-label="Close alert"
        >
          ✕
        </button>
      )}
    </div>
  );
};
