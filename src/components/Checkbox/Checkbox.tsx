import { ChangeEvent, InputHTMLAttributes, useState, useRef, useEffect } from "react";
import "./Checkbox.css";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  size?: "small" | "medium" | "large";
  indeterminate?: boolean;
}

export const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false,
  error,
  helperText,
  size = "medium",
  indeterminate = false,
  ...props
}: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [internalChecked, setInternalChecked] = useState(false);
  const [isFocusFading, setIsFocusFading] = useState(false);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isControlled = checked !== undefined;
  const checkedValue = isControlled ? checked : internalChecked;

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  useEffect(() => {
    const checkbox = checkboxRef.current;
    if (!checkbox) return;

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

    checkbox.addEventListener("focus", handleFocus);
    checkbox.addEventListener("blur", handleBlur);

    return () => {
      checkbox.removeEventListener("focus", handleFocus);
      checkbox.removeEventListener("blur", handleBlur);
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(event.target.checked);
    }
    onChange?.(event);
  };

  const checkboxClasses = [
    "marduk-checkbox",
    `marduk-checkbox--${size}`,
    error ? "marduk-checkbox--error" : "",
    disabled ? "marduk-checkbox--disabled" : "",
    indeterminate ? "marduk-checkbox--indeterminate" : "",
    isFocusFading ? "marduk-checkbox--focus-fading" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const labelClasses = ["marduk-checkbox-label", disabled ? "marduk-checkbox-label--disabled" : ""]
    .filter(Boolean)
    .join(" ");

  const dataAttributes = {
    "data-size": size,
    ...(disabled && { "data-disabled": true }),
    ...(checkedValue && { "data-checked": true }),
    ...(indeterminate && { "data-indeterminate": true }),
    ...(error && { "data-error": true }),
  };

  return (
    <div className="marduk-checkbox-wrapper" {...dataAttributes}>
      <label className={labelClasses}>
        <input
          ref={checkboxRef}
          type="checkbox"
          className={checkboxClasses}
          checked={checkedValue}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
        <span className="marduk-checkbox-checkmark"></span>
        {label && <span className="marduk-checkbox-text">{label}</span>}
      </label>
      {error && <span className="marduk-checkbox-error-text">{error}</span>}
      {helperText && !error && <span className="marduk-checkbox-helper-text">{helperText}</span>}
    </div>
  );
};
