// TODO: test non svg logos, update to work with variable logo sizes,
//       update css to work with different colors
import { LogoSvg } from "./LogoSvg";
import { Text } from "../Text/Text";
import { ReactElement, cloneElement } from "react";
import { LoadingScreenAnimation, TextVariant } from "../../types";
import "./LoadingScreen.css";

export interface LoadingScreenProps {
  animation?: LoadingScreenAnimation;
  showText?: boolean;
  text?: string;
  icon?: ReactElement;
  darkMode?: boolean;
  textVariant?: TextVariant;
}

export type { LoadingScreenAnimation, TextVariant };

export const LoadingScreen = ({
  animation = "pulse",
  showText = true,
  text = "Loading",
  icon,
  darkMode = false,
  textVariant = "default",
}: LoadingScreenProps) => {
  const defaultIcon = <LogoSvg />;
  const logoIcon = icon || defaultIcon;

  const iconWithClass = cloneElement(logoIcon, {
    className: `marduk-loading-screen-icon ${
      logoIcon.props.className || ""
    }`.trim(),
  });

  const containerClass = `marduk-loading-screen-container ${
    darkMode ? "marduk-loading-screen-container--dark" : ""
  }`.trim();

  return (
    <div className={containerClass}>
      <div className="marduk-loading-screen-content">
        <div
          className={`marduk-loading-screen-logo marduk-loading-screen-logo--${animation}`}
        >
          {iconWithClass}
        </div>
        {showText && (
          <Text
            darkMode={darkMode}
            variant={textVariant}
            className="marduk-loading-screen-text"
            as="div"
          >
            {text}
            <span className="marduk-loading-screen-dots">
              <span className="marduk-loading-screen-dot">.</span>
              <span className="marduk-loading-screen-dot">.</span>
              <span className="marduk-loading-screen-dot">.</span>
            </span>
          </Text>
        )}
      </div>
    </div>
  );
};
