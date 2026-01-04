import { useState, useEffect, ReactElement } from "react";
import { ToastVariant, ToastPosition } from "./Toast.types";
import { Box } from "@/components/Box/Box";
import { Button } from "@/components/Button/Button";
import { Text } from "@/components/Text/Text";
import "./Toast.css";

export interface ToastProps {
  message: string;
  variant?: ToastVariant;
  duration?: number;
  onClose?: () => void;
  position?: ToastPosition;
  customIcon?: ReactElement;
  customText?: ReactElement;
  customButton?: ReactElement;
}

export type { ToastVariant, ToastPosition };

export const Toast = ({
  message,
  variant = "info",
  duration = 5000,
  onClose,
  position = "top-right",
  customIcon,
  customText,
  customButton,
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

  const ariaLive = variant === "error" ? "assertive" : "polite";

  const dataAttributes = {
    "data-variant": variant,
    "data-position": position,
  };

  return (
    <Box
      className={toastClasses}
      role="alert"
      aria-live={ariaLive}
      aria-atomic="true"
      {...dataAttributes}
    >
      <Box className="marduk-toast-icon">{customIcon || icons[variant]}</Box>
      {customText ? (
        <Box className="marduk-toast-message">{customText}</Box>
      ) : (
        <Text className="marduk-toast-message">{message}</Text>
      )}
      {customButton ? (
        <Box className="marduk-toast-close">{customButton}</Box>
      ) : (
        <Button
          type="button"
          appearance="text"
          size="small"
          onClick={handleClose}
          aria-label="Close toast"
          className="marduk-toast-close"
        >
          &#10005;
        </Button>
      )}
    </Box>
  );
};
