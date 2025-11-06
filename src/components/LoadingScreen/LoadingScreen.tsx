import { LogoSvg } from "./LogoSvg";
import { Text } from "../Text/Text";
import { ReactElement, CSSProperties } from "react";
import { LoadingScreenAnimation } from "./LoadingScreen.types";
import "./LoadingScreen.css";

type TextVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "muted";

export interface LoadingScreenProps {
  animation?: LoadingScreenAnimation;
  showText?: boolean;
  text?: string;
  icon?: ReactElement;
  darkMode?: boolean;
  textVariant?: TextVariant;
  style?: CSSProperties;
}

export type { LoadingScreenAnimation };

const Dots = () => (
  <span className="marduk-loading-screen-dots" aria-hidden="true">
    <span className="marduk-loading-screen-dot">.</span>
    <span className="marduk-loading-screen-dot">.</span>
    <span className="marduk-loading-screen-dot">.</span>
  </span>
);

const getTextPreset = (
  variant: TextVariant,
  darkMode: boolean
): string => {
  if (darkMode) {
    return `${variant}Dark`;
  }
  return variant;
};

export const LoadingScreen = ({
  animation = "pulse",
  showText = true,
  text = "Loading",
  icon,
  darkMode = false,
  textVariant = "default",
  style,
}: LoadingScreenProps) => {
  const logoIcon = icon || <LogoSvg />;

  const containerClass = [
    "marduk-loading-screen-container",
    darkMode && "marduk-loading-screen-container--dark",
  ]
    .filter(Boolean)
    .join(" ");

  const dataAttributes = {
    "data-animation": animation,
    "data-show-text": showText,
    ...(darkMode && { "data-dark-mode": true }),
    ...(textVariant !== "default" && { "data-text-variant": textVariant }),
  };

  const textPreset = getTextPreset(textVariant, darkMode);

  return (
    <div
      className={containerClass}
      style={style}
      role="status"
      aria-live="polite"
      aria-busy={true}
      aria-label={showText ? undefined : text}
      {...dataAttributes}
    >
      <div className="marduk-loading-screen-content">
        <div
          className={`marduk-loading-screen-logo marduk-loading-screen-logo--${animation}`}
          aria-hidden="true"
        >
          {logoIcon}
        </div>
        {showText && (
          <Text preset={[textPreset]} className="marduk-loading-screen-text" as="div">
            {text}
            <Dots />
          </Text>
        )}
      </div>
    </div>
  );
};
