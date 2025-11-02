import { HTMLAttributes, ReactNode, Fragment } from "react";
import "./Breadcrumb.css";

export interface BreadcrumbItem {
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items?: BreadcrumbItem[];
  separator?: string | ReactNode;
  maxItems?: number;
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
}

export const Breadcrumb = ({
  items = [],
  separator = "/",
  maxItems,
  onItemClick,
  ...props
}: BreadcrumbProps) => {
  const handleClick = (item: BreadcrumbItem, index: number) => {
    if (onItemClick && !item.disabled && index < items.length - 1) {
      onItemClick(item, index);
    }
  };

  const renderItems = () => {
    let displayItems = [...items];

    if (maxItems && items.length > maxItems) {
      const firstItems = items.slice(0, 1);
      const lastItems = items.slice(-(maxItems - 2));
      displayItems = [
        ...firstItems,
        { label: "...", disabled: true },
        ...lastItems,
      ];
    }

    return displayItems.map((item, index) => {
      const isLast = index === displayItems.length - 1;
      const isClickable = !item.disabled && !isLast && onItemClick;

      const itemClasses = [
        "marduk-breadcrumb-item",
        isLast ? "marduk-breadcrumb-item--active" : "",
        isClickable ? "marduk-breadcrumb-item--clickable" : "",
        item.disabled ? "marduk-breadcrumb-item--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return (
        <Fragment key={index}>
          <span
            className={itemClasses}
            onClick={() => handleClick(item, index)}
            role={isClickable ? "button" : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onKeyDown={(e) => {
              if (isClickable && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                handleClick(item, index);
              }
            }}
          >
            {item.icon && (
              <span className="marduk-breadcrumb-icon">{item.icon}</span>
            )}
            {item.label}
          </span>
          {!isLast && (
            <span className="marduk-breadcrumb-separator">{separator}</span>
          )}
        </Fragment>
      );
    });
  };

  return (
    <nav className="marduk-breadcrumb" aria-label="breadcrumb" {...props}>
      <ol className="marduk-breadcrumb-list">{renderItems()}</ol>
    </nav>
  );
};
