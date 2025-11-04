import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Svg } from "./Svg";

describe("Svg", () => {
  const TestIcon = () => (
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  );

  describe("Rendering", () => {
    it("renders svg element", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders children correctly", () => {
      const { container } = render(
        <Svg>
          <circle cx="12" cy="12" r="10" />
        </Svg>
      );
      expect(container.querySelector("circle")).toBeInTheDocument();
    });

    it("applies marduk-svg class", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass("marduk-svg");
    });
  });

  describe("Sizes", () => {
    it("applies medium size by default", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("width", "24");
      expect(svg).toHaveAttribute("height", "24");
    });

    it("applies small size", () => {
      const { container } = render(
        <Svg size="small">
          <TestIcon />
        </Svg>
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("width", "16");
      expect(svg).toHaveAttribute("height", "16");
    });

    it("applies large size", () => {
      const { container } = render(
        <Svg size="large">
          <TestIcon />
        </Svg>
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("width", "32");
      expect(svg).toHaveAttribute("height", "32");
    });

    it("applies custom numeric size", () => {
      const { container } = render(
        <Svg size={48}>
          <TestIcon />
        </Svg>
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("width", "48");
      expect(svg).toHaveAttribute("height", "48");
    });
  });

  describe("ViewBox", () => {
    it("applies default viewBox", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveAttribute(
        "viewBox",
        "0 0 24 24"
      );
    });

    it("applies custom viewBox", () => {
      const { container } = render(
        <Svg viewBox="0 0 100 100">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveAttribute(
        "viewBox",
        "0 0 100 100"
      );
    });
  });

  describe("Color", () => {
    it("uses currentColor by default", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveAttribute(
        "fill",
        "currentColor"
      );
    });

    it("applies custom color", () => {
      const { container } = render(
        <Svg color="#ff0000">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveAttribute("fill", "#ff0000");
    });

    it("applies color variable", () => {
      const { container } = render(
        <Svg color="var(--marduk-color-primary-500)">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveAttribute(
        "fill",
        "var(--marduk-color-primary-500)"
      );
    });
  });

  describe("Dark Mode", () => {
    it("does not apply dark class by default", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).not.toHaveClass(
        "marduk-svg--dark"
      );
    });

    it("applies dark class when darkMode is true", () => {
      const { container } = render(
        <Svg darkMode>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass("marduk-svg--dark");
    });
  });

  describe("Alignment", () => {
    it("does not apply alignment class by default", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      const svg = container.querySelector("svg");
      expect(svg).not.toHaveClass("marduk-svg--align-left");
      expect(svg).not.toHaveClass("marduk-svg--align-center");
      expect(svg).not.toHaveClass("marduk-svg--align-right");
    });

    it("applies left alignment class", () => {
      const { container } = render(
        <Svg align="left">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--align-left"
      );
    });

    it("applies center alignment class", () => {
      const { container } = render(
        <Svg align="center">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--align-center"
      );
    });

    it("applies right alignment class", () => {
      const { container } = render(
        <Svg align="right">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--align-right"
      );
    });
  });

  describe("Rotation", () => {
    it("does not apply rotation class by default", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      const svg = container.querySelector("svg");
      expect(svg).not.toHaveClass("marduk-svg--rotate-90");
      expect(svg).not.toHaveClass("marduk-svg--rotate-180");
      expect(svg).not.toHaveClass("marduk-svg--rotate-270");
    });

    it("applies 90 degree rotation class", () => {
      const { container } = render(
        <Svg rotate={90}>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--rotate-90"
      );
    });

    it("applies 180 degree rotation class", () => {
      const { container } = render(
        <Svg rotate={180}>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--rotate-180"
      );
    });

    it("applies 270 degree rotation class", () => {
      const { container } = render(
        <Svg rotate={270}>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--rotate-270"
      );
    });

    it("does not apply rotation class for 0 degrees", () => {
      const { container } = render(
        <Svg rotate={0}>
          <TestIcon />
        </Svg>
      );
      const svg = container.querySelector("svg");
      expect(svg).not.toHaveClass("marduk-svg--rotate-0");
    });
  });

  describe("Flip", () => {
    it("does not apply flip class by default", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      const svg = container.querySelector("svg");
      expect(svg).not.toHaveClass("marduk-svg--flip-horizontal");
      expect(svg).not.toHaveClass("marduk-svg--flip-vertical");
      expect(svg).not.toHaveClass("marduk-svg--flip-both");
    });

    it("applies horizontal flip class", () => {
      const { container } = render(
        <Svg flip="horizontal">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--flip-horizontal"
      );
    });

    it("applies vertical flip class", () => {
      const { container } = render(
        <Svg flip="vertical">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--flip-vertical"
      );
    });

    it("applies both flip class", () => {
      const { container } = render(
        <Svg flip="both">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--flip-both"
      );
    });
  });

  describe("Spin Animation", () => {
    it("does not apply spin class by default", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).not.toHaveClass(
        "marduk-svg--spin"
      );
    });

    it("applies spin class when spin is true", () => {
      const { container } = render(
        <Svg spin>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass("marduk-svg--spin");
    });

    it("applies normal spin speed by default", () => {
      const { container } = render(
        <Svg spin>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--spin-normal"
      );
    });

    it("applies slow spin speed", () => {
      const { container } = render(
        <Svg spin spinSpeed="slow">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--spin-slow"
      );
    });

    it("applies fast spin speed", () => {
      const { container } = render(
        <Svg spin spinSpeed="fast">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--spin-fast"
      );
    });
  });

  describe("Custom Animation", () => {
    it("does not apply animation class by default", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).not.toHaveClass(
        "marduk-svg--animation-heartpulse"
      );
    });

    it("applies heartpulse animation class", () => {
      const { container } = render(
        <Svg animation="heartpulse">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--animation-heartpulse"
      );
    });
  });

  describe("Stroke Properties", () => {
    it("applies strokeWidth", () => {
      const { container } = render(
        <Svg strokeWidth={2}>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveAttribute(
        "stroke-width",
        "2"
      );
    });

    it("applies strokeLinecap", () => {
      const { container } = render(
        <Svg strokeWidth={2} strokeLinecap="round">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveAttribute(
        "stroke-linecap",
        "round"
      );
    });

    it("applies strokeLinejoin", () => {
      const { container } = render(
        <Svg strokeWidth={2} strokeLinejoin="round">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveAttribute(
        "stroke-linejoin",
        "round"
      );
    });

    it("applies stroke when strokeWidth is set", () => {
      const { container } = render(
        <Svg strokeWidth={2} color="#ff0000">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveAttribute(
        "stroke",
        "#ff0000"
      );
    });
  });

  describe("Hover Color", () => {
    it("does not apply hoverable class by default", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).not.toHaveClass(
        "marduk-svg--hoverable"
      );
    });

    it("applies hoverable class when hoverColor is set", () => {
      const { container } = render(
        <Svg hoverColor="#ff0000">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveClass(
        "marduk-svg--hoverable"
      );
    });

    it("sets CSS variable for hover color", () => {
      const { container } = render(
        <Svg hoverColor="#ff0000">
          <TestIcon />
        </Svg>
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveStyle({ "--hover-color": "#ff0000" });
    });
  });

  describe("Additional Props", () => {
    it("forwards additional props to svg element", () => {
      render(
        <Svg data-testid="custom-svg" aria-label="Custom Icon">
          <TestIcon />
        </Svg>
      );

      const svg = screen.getByTestId("custom-svg");
      expect(svg).toHaveAttribute("aria-label", "Custom Icon");
    });

    it("applies custom className along with component classes", () => {
      const { container } = render(
        <Svg className="custom-class">
          <TestIcon />
        </Svg>
      );
      const svg = container.querySelector("svg");

      expect(svg).toHaveClass("marduk-svg");
      expect(svg).toHaveClass("custom-class");
    });
  });

  describe("Accessibility", () => {
    it("includes xmlns attribute", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveAttribute(
        "xmlns",
        "http://www.w3.org/2000/svg"
      );
    });

    it("supports aria-label", () => {
      const { container } = render(
        <Svg aria-label="Home icon">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveAttribute(
        "aria-label",
        "Home icon"
      );
    });

    it("supports role attribute", () => {
      render(
        <Svg role="img" data-testid="role-svg">
          <TestIcon />
        </Svg>
      );
      expect(screen.getByTestId("role-svg")).toHaveAttribute("role", "img");
    });

    it("renders title element when title prop is provided", () => {
      const { container } = render(
        <Svg title="Home Icon">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("title")).toHaveTextContent("Home Icon");
    });

    it("renders desc element when description prop is provided", () => {
      const { container } = render(
        <Svg description="Navigate to home page">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("desc")).toHaveTextContent(
        "Navigate to home page"
      );
    });

    it("sets role to img when title or description is provided", () => {
      const { container } = render(
        <Svg title="Home Icon">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveAttribute("role", "img");
    });

    it("sets aria-hidden when decorative is true", () => {
      const { container } = render(
        <Svg decorative>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).toHaveAttribute(
        "aria-hidden",
        "true"
      );
    });

    it("does not set role when decorative is true", () => {
      const { container } = render(
        <Svg decorative title="Home">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).not.toHaveAttribute("role");
    });

    it("does not set aria-hidden by default", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("svg")).not.toHaveAttribute("aria-hidden");
    });

    it("renders both title and description together", () => {
      const { container } = render(
        <Svg title="Home Icon" description="Navigate to home page">
          <TestIcon />
        </Svg>
      );
      expect(container.querySelector("title")).toHaveTextContent("Home Icon");
      expect(container.querySelector("desc")).toHaveTextContent(
        "Navigate to home page"
      );
    });
  });
});
