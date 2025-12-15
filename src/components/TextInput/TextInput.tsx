import { useState, ChangeEvent, InputHTMLAttributes } from "react";
import "./TextInput.css";

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  size?: "small" | "medium" | "large";
}

export const TextInput = ({
  label,
  placeholder = "",
  value,
  onChange,
  error,
  helperText,
  disabled = false,
  required = false,
  type = "text",
  size = "medium",
  ...props
}: TextInputProps) => {
  const [focused, setFocused] = useState(false);

  const inputClasses = [
    "marduk-input",
    `marduk-input--${size}`,
    error ? "marduk-input--error" : "",
    disabled ? "marduk-input--disabled" : "",
    focused ? "marduk-input--focused" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const dataAttributes = {
    "data-size": size,
    "data-type": type,
    ...(disabled && { "data-disabled": true }),
    ...(required && { "data-required": true }),
    ...(error && { "data-error": true }),
    ...(focused && { "data-focused": true }),
  };

  return (
    <div className="marduk-input-wrapper" {...dataAttributes}>
      {label && (
        <label className="marduk-input-label">
          {label}
          {required && <span className="marduk-input-required">*</span>}
        </label>
      )}
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {error && <span className="marduk-input-error-text">{error}</span>}
      {helperText && !error && <span className="marduk-input-helper-text">{helperText}</span>}
    </div>
  );
};
