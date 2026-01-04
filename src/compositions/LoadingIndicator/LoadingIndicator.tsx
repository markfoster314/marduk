import { LogoSvg } from "./LogoSvg";
import { Text } from "@/components/Text/Text";
import { Box } from "@/components/Box/Box";
import { ReactElement, CSSProperties } from "react";
import { LoadingIndicatorAnimation, LoadingIndicatorPosition } from "./LoadingIndicator.types";
import "./LoadingIndicator.css";

type TextVariant = "default" | "primary" | "secondary" | "success" | "danger" | "warning" | "muted";

export interface LoadingIndicatorProps {
  animation?: LoadingIndicatorAnimation;
  showText?: boolean;
  text?: string;
  customText?: ReactElement;
  icon?: ReactElement;
  darkMode?: boolean;
  textVariant?: TextVariant;
  position?: LoadingIndicatorPosition;
  fullscreen?: boolean;
  style?: CSSProperties;
}

export type { LoadingIndicatorAnimation, LoadingIndicatorPosition };

const Dots = () => (
  <span className="marduk-loading-indicator-dots" aria-hidden="true">
    <span className="marduk-loading-indicator-dot">.</span>
    <span className="marduk-loading-indicator-dot">.</span>
    <span className="marduk-loading-indicator-dot">.</span>
  </span>
);

const getTextPreset = (variant: TextVariant, darkMode: boolean): string => {
  if (darkMode) {
    return `${variant}Dark`;
  }
  return variant;
};

export const LoadingIndicator = ({
  animation = "pulse",
  showText = true,
  text = "Loading",
  customText,
  icon,
  darkMode = false,
  textVariant = "default",
  position = "middle-center",
  fullscreen = false,
  style,
}: LoadingIndicatorProps) => {
  const logoIcon = icon || <LogoSvg />;

  const containerClass = [
    "marduk-loading-indicator-container",
    darkMode && "marduk-loading-indicator-container--dark",
    position && `marduk-loading-indicator-container--${position}`,
    fullscreen && "marduk-loading-indicator-container--fullscreen",
    !fullscreen && "marduk-loading-indicator-container--relative",
  ]
    .filter(Boolean)
    .join(" ");

  const dataAttributes = {
    "data-animation": animation,
    "data-show-text": showText,
    "data-position": position,
    "data-fullscreen": fullscreen,
    ...(darkMode && { "data-dark-mode": true }),
    ...(textVariant !== "default" && { "data-text-variant": textVariant }),
  };

  const textPreset = getTextPreset(textVariant, darkMode);

  const indicatorContent = (
    <Box
      className={containerClass}
      style={style}
      role="status"
      aria-live="polite"
      aria-busy={true}
      aria-label={showText ? undefined : text}
      {...dataAttributes}
    >
      <Box
        className="marduk-loading-indicator-content"
        display="flex"
        direction="column"
        align="center"
        gap="md"
        style={{
          gap: "var(--loading-indicator-gap)",
        }}
      >
        <Box
          className={`marduk-loading-indicator-logo marduk-loading-indicator-logo--${animation}`}
          display="flex"
          align="center"
          justify="center"
          style={{
            position: "relative",
          }}
          aria-hidden="true"
        >
          {logoIcon}
        </Box>
        {showText &&
          (customText ? (
            <Box className="marduk-loading-indicator-text">{customText}</Box>
          ) : (
            <Text preset={[textPreset]} className="marduk-loading-indicator-text" as="div">
              {text}
              <Dots />
            </Text>
          ))}
      </Box>
    </Box>
  );

  // When not fullscreen, wrap in a relative container
  if (!fullscreen) {
    return (
      <Box
        className="marduk-loading-indicator-wrapper"
        style={
          {
            "--loading-indicator-wrapper-position": "relative",
            "--loading-indicator-wrapper-width": "100%",
            "--loading-indicator-wrapper-height": "100%",
            "--loading-indicator-wrapper-min-height": "200px",
          } as CSSProperties
        }
      >
        {indicatorContent}
      </Box>
    );
  }

  return indicatorContent;
};
