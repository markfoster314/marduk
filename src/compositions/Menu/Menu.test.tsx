import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Menu } from "./Menu";

describe("Menu", () => {
  const sampleItems = [
    {
      id: "1",
      label: "First Item",
      onClick: jest.fn(),
    },
    {
      id: "2",
      label: "Second Item",
      onClick: jest.fn(),
    },
  ];

  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<Menu items={sampleItems} />);
      expect(container.querySelector(".marduk-menu")).toBeInTheDocument();
    });

    it("renders all menu items", () => {
      render(<Menu items={sampleItems} />);
      expect(screen.getByText("First Item")).toBeInTheDocument();
      expect(screen.getByText("Second Item")).toBeInTheDocument();
    });

    it("renders dividers", () => {
      const itemsWithDivider = [
        ...sampleItems,
        {
          id: "divider",
          label: "",
          divider: true,
        },
      ];
      const { container } = render(<Menu items={itemsWithDivider} />);
      expect(container.querySelector(".marduk-menu-divider")).toBeInTheDocument();
    });
  });
});
