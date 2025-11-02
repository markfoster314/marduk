import {
  useState,
  useEffect,
  useRef,
  MouseEvent,
  ReactNode,
  ButtonHTMLAttributes,
} from "react";
import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  const [isFocusFading, setIsFocusFading] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const startFadeTimeout = () => {
      setIsFocusFading(false);

      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }

      fadeTimeoutRef.current = setTimeout(() => {
        setIsFocusFading(true);
      }, 500);
    };

    const handleFocus = () => {
      startFadeTimeout();
    };

    const handleClick = () => {
      startFadeTimeout();
    };

    const handleBlur = () => {
      setIsFocusFading(false);
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };

    button.addEventListener("focus", handleFocus);
    button.addEventListener("click", handleClick);
    button.addEventListener("blur", handleBlur);

    return () => {
      button.removeEventListener("focus", handleFocus);
      button.removeEventListener("click", handleClick);
      button.removeEventListener("blur", handleBlur);
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  const classNames = [
    "marduk-button",
    `marduk-button--${variant}`,
    `marduk-button--${size}`,
    disabled ? "marduk-button--disabled" : "",
    isFocusFading ? "marduk-button--focus-fading" : "",
    props.className,
  ]
    .filter(Boolean)
    .join(" ");

  const { className, ...restProps } = props;

  return (
    <button
      ref={buttonRef}
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};
