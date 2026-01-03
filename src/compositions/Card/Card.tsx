import { Box } from "@/components/Box/Box";
import { Title } from "@/components/Title/Title";
import { CSSProperties } from "react";
import { CardProps } from "./Card.types";
import "./Card.css";

export const Card = ({
  title,
  children,
  footer,
  headerActions,
  style,
}: CardProps & { style?: CSSProperties }) => {
  return (
    <Box className="marduk-card" style={style}>
      {title && (
        <Box className="marduk-card-header">
          <Box className="marduk-card-title-wrapper">
            {typeof title === "string" ? (
              <Title level={3} className="marduk-card-title">
                {title}
              </Title>
            ) : (
              title
            )}
          </Box>
          {headerActions && <Box className="marduk-card-header-actions">{headerActions}</Box>}
        </Box>
      )}
      <Box className="marduk-card-body">{children}</Box>
      {footer && <Box className="marduk-card-footer">{footer}</Box>}
    </Box>
  );
};
