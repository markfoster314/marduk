import { Box } from "@/components/Box/Box";
import { Text } from "@/components/Text/Text";
import { CSSProperties } from "react";
import { MenuItem } from "./Menu.types";
import "./Menu.css";

export interface MenuProps {
  items: MenuItem[];
  style?: CSSProperties;
}

export const Menu = ({ items, style }: MenuProps) => {
  return (
    <Box className="marduk-menu" role="menu" style={style}>
      {items.map((item, index) => {
        if (item.divider) {
          return <Box key={`divider-${index}`} className="marduk-menu-divider" role="separator" />;
        }

        return (
          <Box
            key={item.id}
            className={`marduk-menu-item ${item.disabled ? "marduk-menu-item--disabled" : ""}`}
            role="menuitem"
            onClick={item.disabled ? undefined : item.onClick}
            tabIndex={item.disabled ? -1 : 0}
            aria-disabled={item.disabled}
          >
            {item.icon && <Box className="marduk-menu-icon">{item.icon}</Box>}
            <Text className="marduk-menu-label">{item.label}</Text>
          </Box>
        );
      })}
    </Box>
  );
};
