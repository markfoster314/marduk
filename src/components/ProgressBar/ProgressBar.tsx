import { HTMLAttributes } from "react";
import "./ProgressBar.css";

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  variant?: "primary" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
  showLabel?: boolean;
  label?: string;
  striped?: boolean;
  animated?: boolean;
}

export const ProgressBar = ({
  value,
  max = 100,
  variant = "primary",
  size = "medium",
  showLabel = false,
  label,
  striped = false,
  animated = false,
  className,
  ...props
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const wrapperClasses = ["marduk-progress-wrapper", className].filter(Boolean).join(" ");

  const barClasses = ["marduk-progress-bar", `marduk-progress-bar--${size}`]
    .filter(Boolean)
    .join(" ");

  const fillClasses = [
    "marduk-progress-fill",
    `marduk-progress-fill--${variant}`,
    striped ? "marduk-progress-fill--striped" : "",
    animated ? "marduk-progress-fill--animated" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const dataAttributes = {
    "data-variant": variant,
    "data-size": size,
    "data-value": value,
    "data-max": max,
    "data-percentage": Math.round(percentage),
    ...(striped && { "data-striped": true }),
    ...(animated && { "data-animated": true }),
    ...(showLabel && { "data-show-label": true }),
  };

  return (
    <div className={wrapperClasses} {...dataAttributes} {...props}>
      {(label || showLabel) && (
        <div className="marduk-progress-label-container">
          {label && <span className="marduk-progress-label">{label}</span>}
          {showLabel && (
            <span className="marduk-progress-percentage">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div
        className={barClasses}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div className={fillClasses} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};
