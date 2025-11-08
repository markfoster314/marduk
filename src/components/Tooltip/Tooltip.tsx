import { useState, useRef, useEffect, ReactElement, ReactNode } from "react";
import "./Tooltip.css";

export interface TooltipProps {
  children: ReactElement;
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

export const Tooltip = ({ children, content, position = "top", delay = 200 }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // .filter(Boolean) javascript steeze
  // https://michaeluloth.com/javascript-filter-boolean
  const tooltipClasses = [
    "marduk-tooltip",
    `marduk-tooltip--${position}`,
    isVisible ? "marduk-tooltip--visible" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className="marduk-tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className={tooltipClasses} role="tooltip">
          {content}
        </div>
      )}
    </div>
  );
};
