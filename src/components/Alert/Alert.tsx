import { HTMLAttributes, ReactNode, useState } from "react";
import { AlertVariant, AlertAnimation } from "../../types";
import {
  SkullCrossbonesIcon,
  TriangleExclamationIcon,
  ThumbsUpIcon,
  CircleInfoIcon,
} from "../../icons";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
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
    info: <CircleInfoIcon />,
    success: <ThumbsUpIcon />,
    warning: <TriangleExclamationIcon />,
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

  const getButtonVariant = () => {
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
          size="sm"
        >
          {children}
        </Text>
      </div>
      {closable && (
        <Button
          type="button"
          variant={getButtonVariant()}
          appearance="text"
          size="small"
          onClick={handleClose}
          aria-label="Close alert"
          darkMode={darkMode}
          className="marduk-alert-close"
        >
          ✕
        </Button>
      )}
    </div>
  );
};
