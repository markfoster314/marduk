import { ChangeEvent, useState, useEffect, useRef, InputHTMLAttributes } from "react";
import "./Toggle.css";

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  labelPosition?: "left" | "right";
}

export const Toggle = ({
  label,
  checked,
  onChange,
  disabled = false,
  size = "medium",
  labelPosition = "right",
  ...props
}: ToggleProps) => {
  const [internalChecked, setInternalChecked] = useState(false);
  const [isFocusFading, setIsFocusFading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isControlled = checked !== undefined;
  const checkedValue = isControlled ? checked : internalChecked;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(event.target.checked);
    }
    onChange?.(event);
  };

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const handleFocus = () => {
      setIsFocusFading(false);

      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }

      fadeTimeoutRef.current = setTimeout(() => {
        setIsFocusFading(true);
      }, 500);
    };

    const handleBlur = () => {
      setIsFocusFading(false);
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };

    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);

    return () => {
      input.removeEventListener("focus", handleFocus);
      input.removeEventListener("blur", handleBlur);
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  const toggleClasses = [
    "marduk-toggle",
    `marduk-toggle--${size}`,
    disabled ? "marduk-toggle--disabled" : "",
    isFocusFading ? "marduk-toggle--focus-fading" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const labelClasses = [
    "marduk-toggle-label",
    `marduk-toggle-label--${labelPosition}`,
    disabled ? "marduk-toggle-label--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const dataAttributes = {
    "data-size": size,
    "data-label-position": labelPosition,
    ...(disabled && { "data-disabled": true }),
    ...(checkedValue && { "data-checked": true }),
  };

  const toggleContent = (
    <>
      <input
        ref={inputRef}
        type="checkbox"
        className="marduk-toggle-input"
        checked={checkedValue}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      <span className="marduk-toggle-track">
        <span className="marduk-toggle-thumb"></span>
      </span>
    </>
  );

  return (
    <label className={labelClasses} {...dataAttributes}>
      {label && labelPosition === "left" && <span className="marduk-toggle-text">{label}</span>}
      <div className={toggleClasses}>{toggleContent}</div>
      {label && labelPosition === "right" && <span className="marduk-toggle-text">{label}</span>}
    </label>
  );
};
