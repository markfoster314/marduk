import { Box } from "@/components/Box/Box";
import { Text } from "@/components/Text/Text";
import { CSSProperties, useState } from "react";
import { TabItem } from "./Tabs.types";
import "./Tabs.css";

export interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  style?: CSSProperties;
}

export const Tabs = ({ items, defaultTab, style }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTab || items.find((item) => !item.disabled)?.id || items[0]?.id || "",
  );

  const activeItem = items.find((item) => item.id === activeTab);

  return (
    <Box className="marduk-tabs" style={style}>
      <Box className="marduk-tabs-list" role="tablist">
        {items.map((item) => (
          <Box
            key={item.id}
            className={`marduk-tabs-tab ${activeTab === item.id ? "marduk-tabs-tab--active" : ""} ${
              item.disabled ? "marduk-tabs-tab--disabled" : ""
            }`}
            role="tab"
            aria-selected={activeTab === item.id}
            aria-controls={`tab-panel-${item.id}`}
            aria-disabled={item.disabled}
            tabIndex={item.disabled ? -1 : 0}
            onClick={() => !item.disabled && setActiveTab(item.id)}
            onKeyDown={(e) => {
              if (!item.disabled && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                setActiveTab(item.id);
              }
            }}
          >
            <Text className="marduk-tabs-label">{item.label}</Text>
          </Box>
        ))}
      </Box>
      {activeItem && (
        <Box
          id={`tab-panel-${activeItem.id}`}
          className="marduk-tabs-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeItem.id}`}
        >
          {activeItem.content}
        </Box>
      )}
    </Box>
  );
};
