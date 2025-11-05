import { HTMLAttributes, ReactNode, useState } from "react";
import { AlertVariant, AlertAnimation } from "../../types";
import { SkullCrossbonesIcon } from "../../icons/SkullCrossbonesIcon";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import "./Alert.css";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: AlertVariant;
  onClose?: () => void;
  closable?: boolean;
  title?: string;
  darkMode?: boolean;
  animation?: AlertAnimation;
}

export type { AlertVariant };

export const Alert = ({
  children,
  variant = "info",
  onClose,
  closable = false,
  title,
  darkMode = false,
  animation = "none",
  className,
  ...props
}: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  const alertClasses = [
    "marduk-alert",
    `marduk-alert--${variant}`,
    darkMode ? "marduk-alert--dark" : "",
    animation !== "none" ? `marduk-alert--animation-${animation}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const icons = {
    info: "i",
    success: "✓",
    warning: "!",
    error: <SkullCrossbonesIcon />,
  };

  const getTextVariant = () => {
    if (darkMode) {
      return "secondary";
    }
    switch (variant) {
      case "success":
        return "success";
      case "warning":
        return "warning";
      case "error":
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <div className={alertClasses} role="alert" {...props}>
      <div className="marduk-alert-icon">{icons[variant]}</div>
      <div className="marduk-alert-content">
        {title && (
          <Title
            level={6}
            darkMode={darkMode}
            variant={getTextVariant()}
            className="marduk-alert-title"
          >
            {title}
          </Title>
        )}
        <Text
          darkMode={darkMode}
          variant={getTextVariant()}
          className="marduk-alert-message"
        >
          {children}
        </Text>
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
