import { Box } from "@/components/Box/Box";
import { CSSProperties, useEffect, useRef } from "react";
import { PopoverProps } from "./Popover.types";
import "./Popover.css";

export const Popover = ({
  children,
  content,
  isOpen,
  onClose,
  position = "bottom",
  ...props
}: PopoverProps & { style?: CSSProperties }) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && onClose) {
      const handleClickOutside = (event: MouseEvent) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
          onClose();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
    return undefined;
  }, [isOpen, onClose]);

  return (
    <Box className="marduk-popover-wrapper" style={props.style}>
      <div ref={popoverRef}>
        {children}
        {isOpen && (
          <Box className={`marduk-popover marduk-popover--${position}`} role="tooltip">
            {content}
          </Box>
        )}
      </div>
    </Box>
  );
};
