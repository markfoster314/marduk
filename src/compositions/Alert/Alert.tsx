import { HTMLAttributes, ReactNode, useState, CSSProperties, ReactElement } from "react";
import { AlertVariant, AlertAnimation, AlertCloseAnimation } from "./Alert.types";
import {
  SkullCrossbonesIcon,
  TriangleExclamationIcon,
  ThumbsUpIcon,
  CircleInfoIcon,
} from "@/icons";
import { Text } from "@/components/Text/Text";
import { Title } from "@/components/Title/Title";
import { Button } from "@/components/Button/Button";
import { Box } from "@/components/Box/Box";
import "./Alert.css";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: AlertVariant;
  onClose?: () => void;
  closable?: boolean;
  title?: string;
  customTitle?: ReactElement;
  customText?: ReactElement;
  customIcon?: ReactElement;
  customButton?: ReactElement;
  darkMode?: boolean;
  animation?: AlertAnimation;
  closeAnimation?: AlertCloseAnimation;
  closeAnimiationDuration?: number;
  style?: CSSProperties;
}

export type { AlertVariant };

export const Alert = ({
  children,
  variant = "info",
  onClose,
  closable = false,
  title,
  customTitle,
  customText,
  customIcon,
  customButton,
  darkMode = false,
  animation = "none",
  closeAnimation = "none",
  closeAnimiationDuration = 400,
  className,
  style,
  ...props
}: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    if (closeAnimation !== "none") {
      setIsClosing(true);
      // Wait for animation to complete before removing
      const duration = closeAnimiationDuration; // Match CSS variable duration
      setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);
    } else {
      setIsVisible(false);
      onClose?.();
    }
  };

  if (!isVisible) return null;

  const alertClasses = [
    "marduk-alert",
    `marduk-alert--${variant}`,
    darkMode ? "marduk-alert--dark" : "",
    animation !== "none" ? `marduk-alert--animation-${animation}` : "",
    isClosing && closeAnimation !== "none" ? `marduk-alert--close-animation-${closeAnimation}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const hasTitle = customTitle || title;

  const dataAttributes = {
    "data-variant": variant,
    ...(closable && { "data-closable": true }),
    ...(darkMode && { "data-dark-mode": true }),
    ...(animation !== "none" && { "data-animation": animation }),
    ...(closeAnimation !== "none" && { "data-close-animation": closeAnimation }),
    ...(hasTitle && { "data-has-title": true }),
  };

  const icons = {
    info: <CircleInfoIcon />,
    success: <ThumbsUpIcon />,
    warning: <TriangleExclamationIcon />,
    error: <SkullCrossbonesIcon />,
  };

  const getTextPreset = () => {
    let basePreset: string;
    switch (variant) {
      case "success":
        basePreset = "success";
        break;
      case "warning":
        basePreset = "warning";
        break;
      case "error":
        basePreset = "danger";
        break;
      default:
        basePreset = "primary";
    }
    return darkMode ? `${basePreset}Dark` : basePreset;
  };

  const getTitlePreset = () => {
    let basePreset = "";
    switch (variant) {
      case "success":
        basePreset = "success";
        break;
      case "warning":
        basePreset = "warning";
        break;
      case "error":
        basePreset = "danger";
        break;
      default:
        basePreset = "primary";
    }
    return darkMode ? `${basePreset}Dark` : basePreset;
  };

  const getButtonPreset = () => {
    let basePreset = "";
    switch (variant) {
      case "success":
        basePreset = "success";
        break;
      case "warning":
        basePreset = "warning";
        break;
      case "error":
        basePreset = "danger";
        break;
      default:
        basePreset = "primary";
    }
    return darkMode ? `${basePreset}Dark` : basePreset;
  };

  const ariaLive = variant === "error" ? "assertive" : "polite";

  return (
    <Box
      className={alertClasses}
      role="alert"
      aria-live={ariaLive}
      style={style}
      {...dataAttributes}
      {...props}
    >
      <Box className="marduk-alert-icon">{customIcon || icons[variant]}</Box>
      <Box className="marduk-alert-content">
        {customTitle ? (
          <Box className="marduk-alert-title">{customTitle}</Box>
        ) : title ? (
          <Title level={6} preset={[getTitlePreset()]} className="marduk-alert-title">
            {title}
          </Title>
        ) : null}
        {customText ? (
          <Box className="marduk-alert-message">{customText}</Box>
        ) : (
          <Text preset={[getTextPreset()]} className="marduk-alert-message" size="sm">
            {children}
          </Text>
        )}
      </Box>
      {closable &&
        (customButton ? (
          <Box className="marduk-alert-close">{customButton}</Box>
        ) : (
          <Button
            type="button"
            preset={[getButtonPreset()]}
            appearance="text"
            size="small"
            onClick={handleClose}
            aria-label="Close alert"
            className="marduk-alert-close"
          >
            ✕
          </Button>
        ))}
    </Box>
  );
};
