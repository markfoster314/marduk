import { Box } from "@/components/Box/Box";
import { Text } from "@/components/Text/Text";
import { CSSProperties, useState } from "react";
import { AccordionItem } from "./Accordion.types";
import "./Accordion.css";

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  style?: CSSProperties;
}

export const Accordion = ({ items, allowMultiple = false, style }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(items.filter((item) => item.defaultOpen).map((item) => item.id)),
  );

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (allowMultiple) {
          next.add(id);
        } else {
          return new Set([id]);
        }
      }
      return next;
    });
  };

  return (
    <Box className="marduk-accordion" style={style}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <Box key={item.id} className="marduk-accordion-item">
            <Box
              id={`accordion-header-${item.id}`}
              className={`marduk-accordion-header ${isOpen ? "marduk-accordion-header--open" : ""}`}
              onClick={() => toggleItem(item.id)}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleItem(item.id);
                }
              }}
            >
              <Text className="marduk-accordion-title">{item.title}</Text>
              <Box className="marduk-accordion-icon" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </Box>
            </Box>
            {isOpen && (
              <Box
                id={`accordion-content-${item.id}`}
                className="marduk-accordion-content"
                role="region"
                aria-labelledby={`accordion-header-${item.id}`}
              >
                {item.content}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};
