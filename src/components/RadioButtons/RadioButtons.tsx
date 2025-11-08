import { useState } from "react";
import "./RadioButtons.css";

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioButtonsProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  direction?: "horizontal" | "vertical";
  size?: "small" | "medium" | "large";
}

export const RadioButtons = ({
  name,
  options,
  value,
  onChange,
  label,
  error,
  helperText,
  disabled = false,
  required = false,
  direction = "vertical",
  size = "medium",
}: RadioButtonsProps) => {
  const [internalValue, setInternalValue] = useState("");

  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : internalValue;

  const handleChange = (optionValue: string) => {
    if (disabled) return;
    if (!isControlled) {
      setInternalValue(optionValue);
    }
    onChange?.(optionValue);
  };

  const groupClasses = ["marduk-radio-group", `marduk-radio-group--${direction}`]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="marduk-radio-wrapper">
      {label && (
        <label className="marduk-radio-label">
          {label}
          {required && <span className="marduk-radio-required">*</span>}
        </label>
      )}
      <div className={groupClasses} role="radiogroup" aria-label={label}>
        {options.map((option) => {
          const radioId = `${name}-${option.value}`;
          const isChecked = selectedValue === option.value;
          const isDisabled = disabled || option.disabled;

          const itemClasses = [
            "marduk-radio-item",
            `marduk-radio-item--${size}`,
            isDisabled ? "marduk-radio-item--disabled" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <label key={option.value} className={itemClasses}>
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={isChecked}
                onChange={() => handleChange(option.value)}
                disabled={isDisabled}
                className="marduk-radio-input"
                id={radioId}
              />
              <span className="marduk-radio-custom"></span>
              <span className="marduk-radio-text">{option.label}</span>
            </label>
          );
        })}
      </div>
      {error && <span className="marduk-radio-error-text">{error}</span>}
      {helperText && !error && <span className="marduk-radio-helper-text">{helperText}</span>}
    </div>
  );
};
