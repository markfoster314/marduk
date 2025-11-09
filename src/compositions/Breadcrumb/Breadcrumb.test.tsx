import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

describe("Breadcrumb", () => {
  const sampleItems: BreadcrumbItem[] = [
    { label: "Home" },
    { label: "Products" },
    { label: "Electronics" },
  ];

  describe("Rendering", () => {
    it("renders navigation element", () => {
      render(<Breadcrumb items={sampleItems} />);
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("renders all breadcrumb items", () => {
      render(<Breadcrumb items={sampleItems} />);
      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Products")).toBeInTheDocument();
      expect(screen.getByText("Electronics")).toBeInTheDocument();
    });

    it("renders with default separator", () => {
      const { container } = render(<Breadcrumb items={sampleItems} />);
      const separators = container.querySelectorAll(".marduk-breadcrumb-separator");
      expect(separators).toHaveLength(2); // n-1 separators for n items
      expect(separators[0]).toHaveTextContent("/");
    });

    it("renders with custom separator", () => {
      const { container } = render(<Breadcrumb items={sampleItems} separator=">" />);
      const separators = container.querySelectorAll(".marduk-breadcrumb-separator");
      expect(separators[0]).toHaveTextContent(">");
    });
  });

  describe("Items with Icons", () => {
    const itemsWithIcons: BreadcrumbItem[] = [
      { label: "Home", icon: "🏠" },
      { label: "Documents", icon: "📁" },
    ];

    it("renders icons when provided", () => {
      render(<Breadcrumb items={itemsWithIcons} />);
      expect(screen.getByText("🏠")).toBeInTheDocument();
      expect(screen.getByText("📁")).toBeInTheDocument();
    });

    it("renders items without icons correctly", () => {
      const mixedItems: BreadcrumbItem[] = [
        { label: "Home", icon: "🏠" },
        { label: "Products" }, // no icon
      ];
      render(<Breadcrumb items={mixedItems} />);
      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Products")).toBeInTheDocument();
    });
  });

  describe("Active Item", () => {
    it("applies active class to last item", () => {
      render(<Breadcrumb items={sampleItems} />);
      const lastItem = screen.getByText("Electronics").closest(".marduk-breadcrumb-item");
      expect(lastItem).toHaveClass("marduk-breadcrumb-item--active");
    });

    it("does not apply active class to non-last items", () => {
      render(<Breadcrumb items={sampleItems} />);
      const firstItem = screen.getByText("Home").closest(".marduk-breadcrumb-item");
      expect(firstItem).not.toHaveClass("marduk-breadcrumb-item--active");
    });
  });

  describe("Click Handler", () => {
    it("calls onItemClick when non-last item is clicked", () => {
      const handleClick = jest.fn();
      render(<Breadcrumb items={sampleItems} onItemClick={handleClick} />);

      fireEvent.click(screen.getByText("Home"));
      expect(handleClick).toHaveBeenCalledWith(sampleItems[0], 0);
    });

    it("does not call onItemClick when last item is clicked", () => {
      const handleClick = jest.fn();
      render(<Breadcrumb items={sampleItems} onItemClick={handleClick} />);

      fireEvent.click(screen.getByText("Electronics"));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("does not call onItemClick when disabled item is clicked", () => {
      const handleClick = jest.fn();
      const itemsWithDisabled: BreadcrumbItem[] = [
        { label: "Home" },
        { label: "Products", disabled: true },
        { label: "Details" },
      ];

      render(<Breadcrumb items={itemsWithDisabled} onItemClick={handleClick} />);
      fireEvent.click(screen.getByText("Products"));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("applies clickable class to clickable items", () => {
      render(<Breadcrumb items={sampleItems} onItemClick={() => {}} />);
      const firstItem = screen.getByText("Home").closest(".marduk-breadcrumb-item");
      expect(firstItem).toHaveClass("marduk-breadcrumb-item--clickable");
    });
  });

  describe("MaxItems", () => {
    const manyItems: BreadcrumbItem[] = [
      { label: "Home" },
      { label: "Level 1" },
      { label: "Level 2" },
      { label: "Level 3" },
      { label: "Level 4" },
      { label: "Current" },
    ];

    it("collapses items when maxItems is set", () => {
      render(<Breadcrumb items={manyItems} maxItems={4} />);

      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("...")).toBeInTheDocument();
      expect(screen.getByText("Current")).toBeInTheDocument();
    });

    it("shows all items when maxItems is not set", () => {
      render(<Breadcrumb items={manyItems} />);
      manyItems.forEach((item) => {
        expect(screen.getByText(item.label)).toBeInTheDocument();
      });
    });

    it("does not collapse when items count is less than maxItems", () => {
      render(<Breadcrumb items={sampleItems} maxItems={10} />);
      expect(screen.queryByText("...")).not.toBeInTheDocument();
      sampleItems.forEach((item) => {
        expect(screen.getByText(item.label)).toBeInTheDocument();
      });
    });
  });

  describe("Keyboard Navigation", () => {
    it("supports Enter key navigation", () => {
      const handleClick = jest.fn();
      render(<Breadcrumb items={sampleItems} onItemClick={handleClick} />);

      const firstItem = screen.getByText("Home");
      fireEvent.keyDown(firstItem, { key: "Enter" });
      expect(handleClick).toHaveBeenCalledWith(sampleItems[0], 0);
    });

    it("supports Space key navigation", () => {
      const handleClick = jest.fn();
      render(<Breadcrumb items={sampleItems} onItemClick={handleClick} />);

      const firstItem = screen.getByText("Home");
      fireEvent.keyDown(firstItem, { key: " " });
      expect(handleClick).toHaveBeenCalledWith(sampleItems[0], 0);
    });

    it("clickable items have proper role", () => {
      render(<Breadcrumb items={sampleItems} onItemClick={() => {}} />);
      const firstItem = screen.getByText("Home").closest(".marduk-breadcrumb-item");
      expect(firstItem).toHaveAttribute("role", "button");
    });

    it("clickable items have tabIndex", () => {
      render(<Breadcrumb items={sampleItems} onItemClick={() => {}} />);
      const firstItem = screen.getByText("Home").closest(".marduk-breadcrumb-item");
      expect(firstItem).toHaveAttribute("tabIndex", "0");
    });
  });

  describe("Disabled Items", () => {
    const itemsWithDisabled: BreadcrumbItem[] = [
      { label: "Home" },
      { label: "Disabled", disabled: true },
      { label: "Current" },
    ];

    it("applies disabled class to disabled items", () => {
      render(<Breadcrumb items={itemsWithDisabled} />);
      const disabledItem = screen.getByText("Disabled").closest(".marduk-breadcrumb-item");
      expect(disabledItem).toHaveClass("marduk-breadcrumb-item--disabled");
    });
  });

  describe("Empty State", () => {
    it("renders without items", () => {
      render(<Breadcrumb items={[]} />);
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("handles undefined items gracefully", () => {
      render(<Breadcrumb />);
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });
  });

  describe("Additional Props", () => {
    it("forwards additional props to nav element", () => {
      render(<Breadcrumb items={sampleItems} data-testid="custom-breadcrumb" />);
      expect(screen.getByTestId("custom-breadcrumb")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has proper aria-label", () => {
      render(<Breadcrumb items={sampleItems} />);
      expect(screen.getByLabelText("breadcrumb")).toBeInTheDocument();
    });

    it("renders as navigation landmark", () => {
      render(<Breadcrumb items={sampleItems} />);
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });
  });
});
