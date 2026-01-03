import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Popover } from "./Popover";

describe("Popover", () => {
  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(
        <Popover content="Popover content">
          <button>Trigger</button>
        </Popover>,
      );
      expect(container.querySelector(".marduk-popover-wrapper")).toBeInTheDocument();
    });

    it("renders children", () => {
      render(
        <Popover content="Content">
          <button>Trigger</button>
        </Popover>,
      );
      expect(screen.getByText("Trigger")).toBeInTheDocument();
    });

    it("renders popover when isOpen is true", () => {
      render(
        <Popover isOpen={true} content="Popover content">
          <button>Trigger</button>
        </Popover>,
      );
      expect(screen.getByText("Popover content")).toBeInTheDocument();
    });

    it("does not render popover when isOpen is false", () => {
      render(
        <Popover isOpen={false} content="Popover content">
          <button>Trigger</button>
        </Popover>,
      );
      expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
    });
  });
});
