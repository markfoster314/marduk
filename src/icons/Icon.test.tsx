import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Icon } from "./Icon";

describe("Icon", () => {
  describe("Rendering", () => {
    it("renders icon with valid name", () => {
      const { container } = render(<Icon name="user" />);
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });

    it("renders null for invalid icon name", () => {
      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      const { container } = render(<Icon name={"invalid" as any} />);
      expect(container.firstChild).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith('Icon "invalid" not found');
      consoleSpy.mockRestore();
    });

    it("renders icon paths", () => {
      const { container } = render(<Icon name="user" />);
      const paths = container.querySelectorAll("path");
      expect(paths.length).toBeGreaterThan(0);
    });

    it("handles array of paths", () => {
      const { container } = render(<Icon name="user" />);
      const paths = container.querySelectorAll("path");
      expect(paths.length).toBeGreaterThan(0);
    });
  });

  describe("ViewBox", () => {
    it("uses default viewBox when not provided", () => {
      const { container } = render(<Icon name="user" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("uses custom viewBox when provided", () => {
      const { container } = render(<Icon name="user" viewBox="0 0 32 32" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("viewBox", "0 0 32 32");
    });

    it("uses icon's viewBox when available", () => {
      // Assuming iconData has a viewBox property
      const { container } = render(<Icon name="user" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("viewBox");
    });
  });

  describe("Data Attributes", () => {
    it("includes data-icon-name attribute", () => {
      const { container } = render(<Icon name="user" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("data-icon-name", "user");
    });

    it("includes data-viewbox attribute when viewBox is provided", () => {
      const { container } = render(<Icon name="user" viewBox="0 0 32 32" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("data-viewbox", "0 0 32 32");
    });
  });

  describe("Props Forwarding", () => {
    it("forwards props to Svg component", () => {
      const { container } = render(<Icon name="user" size="large" color="red" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("marduk-svg--size-large");
    });

    it("forwards className", () => {
      const { container } = render(<Icon name="user" className="custom-class" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("custom-class");
    });

    it("forwards style", () => {
      const { container } = render(<Icon name="user" style={{ opacity: 0.5 }} />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveStyle({ opacity: "0.5" });
    });
  });

  describe("Accessibility", () => {
    it("supports decorative prop", () => {
      const { container } = render(<Icon name="user" decorative />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("supports title prop", () => {
      const { container } = render(<Icon name="user" title="User icon" />);
      const title = container.querySelector("title");
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent("User icon");
    });

    it("supports description prop", () => {
      const { container } = render(<Icon name="user" description="User profile icon" />);
      const desc = container.querySelector("desc");
      expect(desc).toBeInTheDocument();
      expect(desc).toHaveTextContent("User profile icon");
    });
  });
});
