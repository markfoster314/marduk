import { Box } from "@/components/Box/Box";
import { Text } from "@/components/Text/Text";
import { Title } from "@/components/Title/Title";
import { CSSProperties } from "react";
import { TimelineItem } from "./Timeline.types";
import "./Timeline.css";

export interface TimelineProps {
  items: TimelineItem[];
  style?: CSSProperties;
}

export const Timeline = ({ items, style }: TimelineProps) => {
  return (
    <Box className="marduk-timeline" style={style}>
      {items.map((item) => (
        <Box key={item.id} className="marduk-timeline-item">
          <Box className="marduk-timeline-marker">
            {item.icon || <Box className="marduk-timeline-dot" />}
          </Box>
          <Box className="marduk-timeline-content">
            {item.timestamp && (
              <Text className="marduk-timeline-timestamp" preset={["muted"]} size="sm">
                {item.timestamp}
              </Text>
            )}
            <Title level={4} className="marduk-timeline-title">
              {item.title}
            </Title>
            <Box className="marduk-timeline-body">{item.content}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
