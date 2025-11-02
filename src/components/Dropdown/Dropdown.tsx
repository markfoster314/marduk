import { ChangeEvent, SelectHTMLAttributes, useState } from "react";
import "./Dropdown.css";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  options: DropdownOption[];
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  size?: "small" | "medium" | "large";
}

export const Dropdown = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  error,
  helperText,
  disabled = false,
  required = false,
  size = "medium",
  ...props
}: DropdownProps) => {
  const [internalValue, setInternalValue] = useState("");

  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : internalValue;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!isControlled) {
      setInternalValue(event.target.value);
    }
    onChange?.(event);
  };

  const selectClasses = [
    "marduk-dropdown",
    `marduk-dropdown--${size}`,
    error ? "marduk-dropdown--error" : "",
    disabled ? "marduk-dropdown--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="marduk-dropdown-wrapper">
      {label && (
        <label className="marduk-dropdown-label">
          {label}
          {required && <span className="marduk-dropdown-required">*</span>}
        </label>
      )}
      <div className="marduk-dropdown-container">
        <select
          className={selectClasses}
          value={selectedValue}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <span className="marduk-dropdown-arrow">▼</span>
      </div>
      {error && <span className="marduk-dropdown-error-text">{error}</span>}
      {helperText && !error && (
        <span className="marduk-dropdown-helper-text">{helperText}</span>
      )}
    </div>
  );
};
