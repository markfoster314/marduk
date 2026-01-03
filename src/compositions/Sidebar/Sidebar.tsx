import { Box } from "@/components/Box/Box";
import { CSSProperties, useEffect } from "react";
import { SidebarProps } from "./Sidebar.types";
import "./Sidebar.css";

export const Sidebar = ({
  children,
  isOpen = false,
  onClose,
  position = "left",
  width = "300px",
  ...props
}: SidebarProps & { style?: CSSProperties }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <Box className="marduk-sidebar-overlay" onClick={onClose} aria-hidden="true" />
      <Box
        className={`marduk-sidebar marduk-sidebar--${position} ${isOpen ? "marduk-sidebar--open" : ""}`}
        style={{ "--sidebar-width": width } as CSSProperties}
        role="complementary"
        aria-label="Sidebar"
        {...props}
      >
        {children}
      </Box>
    </>
  );
};
