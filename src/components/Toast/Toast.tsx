import { useState, useEffect } from "react";
import "./Toast.css";

export interface ToastProps {
  message: string;
  variant?: "info" | "success" | "warning" | "error";
  duration?: number;
  onClose?: () => void;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
}

export const Toast = ({
  message,
  variant = "info",
  duration = 5000,
  onClose,
  position = "top-right",
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  const toastClasses = ["marduk-toast", `marduk-toast--${variant}`, `marduk-toast--${position}`]
    .filter(Boolean)
    .join(" ");

  const icons = {
    info: "i",
    success: "✓",
    warning: "!",
    error: "✕",
  };

  return (
    <div className={toastClasses} role="alert">
      <div className="marduk-toast-icon">{icons[variant]}</div>
      <div className="marduk-toast-message">{message}</div>
      <button
        type="button"
        className="marduk-toast-close"
        onClick={handleClose}
        aria-label="Close toast"
      >
        &#10005;
      </button>
    </div>
  );
};
