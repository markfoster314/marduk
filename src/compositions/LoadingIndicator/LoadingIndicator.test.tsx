import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoadingIndicator } from "./LoadingIndicator";
import { Text } from "@/components/Text/Text";

describe("LoadingIndicator", () => {
  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<LoadingIndicator />);
      expect(container.querySelector(".marduk-loading-indicator-container")).toBeInTheDocument();
    });

    it("renders loading text by default", () => {
      render(<LoadingIndicator />);
      expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    });

    it("renders animated dots", () => {
      const { container } = render(<LoadingIndicator />);
      const dots = container.querySelectorAll(".marduk-loading-indicator-dot");
      expect(dots).toHaveLength(3);
    });
  });

  describe("Text Prop", () => {
    it("displays custom text when provided", () => {
      render(<LoadingIndicator text="Please wait..." />);
      expect(screen.getByText(/Please wait.../i)).toBeInTheDocument();
    });

    test.each([
      [true, true],
      [false, false],
    ])("shows/hides text when showText=%s", (showText, shouldShow) => {
      render(<LoadingIndicator showText={showText} text="Loading data" />);
      const textQuery = screen.queryByText(/Loading data/i);
      if (shouldShow) {
        expect(textQuery).toBeInTheDocument();
      } else {
        expect(textQuery).not.toBeInTheDocument();
      }
    });
  });

  describe("Custom Text", () => {
    it("renders customText when provided", () => {
      render(
        <LoadingIndicator
          customText={<Text data-testid="custom-text">Custom loading message</Text>}
        />,
      );
      expect(screen.getByTestId("custom-text")).toBeInTheDocument();
      expect(screen.getByText("Custom loading message")).toBeInTheDocument();
    });

    it("customText takes precedence over text prop", () => {
      render(
        <LoadingIndicator
          text="Default text"
          customText={<Text data-testid="custom-text">Custom text</Text>}
        />,
      );
      expect(screen.getByTestId("custom-text")).toBeInTheDocument();
      expect(screen.getByText("Custom text")).toBeInTheDocument();
      expect(screen.queryByText("Default text")).not.toBeInTheDocument();
    });

    it("customText does not show dots", () => {
      const { container } = render(<LoadingIndicator customText={<Text>Custom message</Text>} />);
      const dots = container.querySelectorAll(".marduk-loading-indicator-dot");
      expect(dots).toHaveLength(0);
    });

    it("customText respects showText prop", () => {
      const { rerender } = render(
        <LoadingIndicator
          showText={true}
          customText={<Text data-testid="custom-text">Loading</Text>}
        />,
      );
      expect(screen.getByTestId("custom-text")).toBeInTheDocument();

      rerender(
        <LoadingIndicator
          showText={false}
          customText={<Text data-testid="custom-text">Loading</Text>}
        />,
      );
      expect(screen.queryByTestId("custom-text")).not.toBeInTheDocument();
    });

    it("customText can contain nested elements", () => {
      render(
        <LoadingIndicator
          customText={
            <div>
              <Text weight="bold">Processing</Text>
              <Text size="sm">This may take a moment</Text>
            </div>
          }
        />,
      );
      expect(screen.getByText("Processing")).toBeInTheDocument();
      expect(screen.getByText("This may take a moment")).toBeInTheDocument();
    });

    it("customText works with Text component styling", () => {
      render(
        <LoadingIndicator
          customText={
            <Text preset={["primary"]} size="md" weight="semibold" data-testid="styled-text">
              Styled Custom Text
            </Text>
          }
        />,
      );
      const customText = screen.getByTestId("styled-text");
      expect(customText).toBeInTheDocument();
      expect(customText.closest(".marduk-loading-indicator-text")).toBeInTheDocument();
    });

    it("uses default text when customText is not provided", () => {
      render(<LoadingIndicator text="Default message" />);
      expect(screen.getByText("Default message")).toBeInTheDocument();
      const { container } = render(<LoadingIndicator text="Default message" />);
      const dots = container.querySelectorAll(".marduk-loading-indicator-dot");
      expect(dots).toHaveLength(3);
    });
  });

  describe("Animation Variants", () => {
    test.each([
      ["pulse"],
      ["rotate"],
      ["breathe"],
      ["glitch"],
      ["ripple"],
      ["bounce"],
      ["swing"],
      ["flip"],
      ["orbit"],
      ["shake"],
    ] as const)("applies %s animation class", (animation) => {
      const { container } = render(<LoadingIndicator animation={animation} />);
      expect(
        container.querySelector(`.marduk-loading-indicator-logo--${animation}`),
      ).toBeInTheDocument();
    });

    it("applies pulse animation by default", () => {
      const { container } = render(<LoadingIndicator />);
      expect(container.querySelector(".marduk-loading-indicator-logo--pulse")).toBeInTheDocument();
    });
  });

  describe("Structure", () => {
    test.each([
      ["content wrapper", ".marduk-loading-indicator-content"],
      ["logo wrapper", ".marduk-loading-indicator-logo"],
      ["text", ".marduk-loading-indicator-text"],
      ["dots wrapper", ".marduk-loading-indicator-dots"],
    ])("renders %s with correct class", (_name, selector) => {
      const { container } = render(<LoadingIndicator />);
      expect(container.querySelector(selector)).toBeInTheDocument();
    });
  });

  describe("Custom Icon", () => {
    it("renders custom icon when provided", () => {
      const CustomIcon = <div data-testid="custom-icon">Icon</div>;
      render(<LoadingIndicator icon={CustomIcon} />);
      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });
  });

  describe("Dark Mode", () => {
    it("applies dark class when darkMode is true", () => {
      const { container } = render(<LoadingIndicator darkMode />);
      expect(container.querySelector(".marduk-loading-indicator-container")).toHaveClass(
        "marduk-loading-indicator-container--dark",
      );
    });

    it("passes darkMode to Text component", () => {
      const { container } = render(<LoadingIndicator darkMode text="Loading" />);
      const textElement = container.querySelector(".marduk-loading-indicator-text");
      expect(textElement).toHaveAttribute("data-preset", "defaultDark");
    });
  });

  describe("Text Variant", () => {
    test.each([
      ["default"],
      ["primary"],
      ["secondary"],
      ["success"],
      ["danger"],
      ["warning"],
      ["muted"],
    ] as const)("applies %s variant class", (variant) => {
      const { container } = render(<LoadingIndicator textVariant={variant} />);
      const textElement = container.querySelector(".marduk-loading-indicator-text");
      expect(textElement).toHaveAttribute("data-preset", variant);
    });
  });

  describe("Combined Props", () => {
    it("works with custom text and animation", () => {
      const { container } = render(<LoadingIndicator animation="rotate" text="Processing..." />);
      expect(screen.getByText(/Processing.../i)).toBeInTheDocument();
      expect(container.querySelector(".marduk-loading-indicator-logo--rotate")).toBeInTheDocument();
    });

    it("works with custom icon, text, and animation", () => {
      const CustomIcon = <div data-testid="custom">Icon</div>;
      const { container } = render(
        <LoadingIndicator icon={CustomIcon} animation="bounce" text="Loading data" />,
      );
      expect(screen.getByTestId("custom")).toBeInTheDocument();
      expect(screen.getByText(/Loading data/i)).toBeInTheDocument();
      expect(container.querySelector(".marduk-loading-indicator-logo--bounce")).toBeInTheDocument();
    });

    it("works with no text and custom animation", () => {
      const { container } = render(<LoadingIndicator showText={false} animation="glitch" />);
      expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
      expect(container.querySelector(".marduk-loading-indicator-logo--glitch")).toBeInTheDocument();
    });
  });

  describe("Position", () => {
    test.each([
      ["top-left"],
      ["top-center"],
      ["top-right"],
      ["middle-left"],
      ["middle-center"],
      ["middle-right"],
      ["bottom-left"],
      ["bottom-center"],
      ["bottom-right"],
    ] as const)("applies %s position class", (position) => {
      const { container } = render(<LoadingIndicator position={position} />);
      expect(
        container.querySelector(`.marduk-loading-indicator-container--${position}`),
      ).toBeInTheDocument();
    });

    it("applies middle-center position by default", () => {
      const { container } = render(<LoadingIndicator />);
      expect(
        container.querySelector(".marduk-loading-indicator-container--middle-center"),
      ).toBeInTheDocument();
    });

    it("sets data-position attribute", () => {
      const { container } = render(<LoadingIndicator position="top-left" />);
      const containerEl = container.querySelector(".marduk-loading-indicator-container");
      expect(containerEl).toHaveAttribute("data-position", "top-left");
    });
  });

  describe("Fullscreen", () => {
    it("renders wrapper when fullscreen is false", () => {
      const { container } = render(<LoadingIndicator fullscreen={false} />);
      expect(container.querySelector(".marduk-loading-indicator-wrapper")).toBeInTheDocument();
    });

    it("does not render wrapper when fullscreen is true", () => {
      const { container } = render(<LoadingIndicator fullscreen={true} />);
      expect(container.querySelector(".marduk-loading-indicator-wrapper")).not.toBeInTheDocument();
    });

    it("does not render wrapper by default (fullscreen=false)", () => {
      const { container } = render(<LoadingIndicator />);
      expect(container.querySelector(".marduk-loading-indicator-wrapper")).toBeInTheDocument();
    });

    it("applies relative class when fullscreen is false", () => {
      const { container } = render(<LoadingIndicator fullscreen={false} />);
      expect(
        container.querySelector(".marduk-loading-indicator-container--relative"),
      ).toBeInTheDocument();
    });

    it("applies fullscreen class when fullscreen is true", () => {
      const { container } = render(<LoadingIndicator fullscreen={true} />);
      expect(
        container.querySelector(".marduk-loading-indicator-container--fullscreen"),
      ).toBeInTheDocument();
    });

    it("sets data-fullscreen attribute to false by default", () => {
      const { container } = render(<LoadingIndicator />);
      const containerEl = container.querySelector(".marduk-loading-indicator-container");
      expect(containerEl).toHaveAttribute("data-fullscreen", "false");
    });

    it("sets data-fullscreen attribute to true when fullscreen is true", () => {
      const { container } = render(<LoadingIndicator fullscreen={true} />);
      const containerEl = container.querySelector(".marduk-loading-indicator-container");
      expect(containerEl).toHaveAttribute("data-fullscreen", "true");
    });
  });

  describe("Data Attributes", () => {
    it("sets data-animation attribute", () => {
      const { container } = render(<LoadingIndicator animation="pulse" />);
      const containerEl = container.querySelector(".marduk-loading-indicator-container");
      expect(containerEl).toHaveAttribute("data-animation", "pulse");
    });

    test.each([
      [true, "true"],
      [false, "false"],
    ])("sets data-show-text to %s when showText is %s", (showText, expected) => {
      const { container } = render(<LoadingIndicator showText={showText} />);
      const containerEl = container.querySelector(".marduk-loading-indicator-container");
      expect(containerEl).toHaveAttribute("data-show-text", expected);
    });

    test.each([
      ["darkMode", true, "data-dark-mode", "true"],
      ["textVariant", "primary", "data-text-variant", "primary"],
    ])("sets %s data attribute when provided", (prop, value, attr, expected) => {
      const { container } = render(<LoadingIndicator {...{ [prop]: value }} />);
      const containerEl = container.querySelector(".marduk-loading-indicator-container");
      expect(containerEl).toHaveAttribute(attr, expected);
    });

    test.each([
      ["darkMode", false, "data-dark-mode"],
      ["textVariant", "default", "data-text-variant"],
    ])("does not set %s when value is default", (prop, value, attr) => {
      const { container } = render(<LoadingIndicator {...{ [prop]: value }} />);
      const containerEl = container.querySelector(".marduk-loading-indicator-container");
      expect(containerEl).not.toHaveAttribute(attr);
    });

    it("sets multiple data attributes together", () => {
      const { container } = render(
        <LoadingIndicator
          animation="bounce"
          showText={true}
          darkMode={true}
          textVariant="success"
        />,
      );
      const containerEl = container.querySelector(".marduk-loading-indicator-container");
      expect(containerEl).toHaveAttribute("data-animation", "bounce");
      expect(containerEl).toHaveAttribute("data-show-text", "true");
      expect(containerEl).toHaveAttribute("data-dark-mode", "true");
      expect(containerEl).toHaveAttribute("data-text-variant", "success");
    });
  });

  describe("ARIA Attributes", () => {
    it("sets required ARIA attributes on container", () => {
      const { container } = render(<LoadingIndicator />);
      const containerEl = container.querySelector(".marduk-loading-indicator-container");
      expect(containerEl).toHaveAttribute("role", "status");
      expect(containerEl).toHaveAttribute("aria-live", "polite");
      expect(containerEl).toHaveAttribute("aria-busy");
    });

    test.each([
      [true, undefined],
      [false, "Processing"],
    ])("sets aria-label appropriately when showText=%s", (showText, expectedLabel) => {
      const { container } = render(<LoadingIndicator showText={showText} text="Processing" />);
      const containerEl = container.querySelector(".marduk-loading-indicator-container");
      if (expectedLabel) {
        expect(containerEl).toHaveAttribute("aria-label", expectedLabel);
      } else {
        expect(containerEl).not.toHaveAttribute("aria-label");
      }
    });

    it("sets aria-hidden on decorative elements", () => {
      const { container } = render(<LoadingIndicator showText={true} />);
      expect(container.querySelector(".marduk-loading-indicator-logo")).toHaveAttribute(
        "aria-hidden",
        "true",
      );
      expect(container.querySelector(".marduk-loading-indicator-dots")).toHaveAttribute(
        "aria-hidden",
        "true",
      );
    });
  });

  describe("Reduced Motion Accessibility", () => {
    it("maintains complete structure for accessibility", () => {
      const { container } = render(<LoadingIndicator animation="bounce" showText={true} />);
      expect(container.querySelector(".marduk-loading-indicator-logo--bounce")).toBeInTheDocument();
      expect(container.querySelectorAll(".marduk-loading-indicator-dot")).toHaveLength(3);
    });
  });

  describe("Style Prop", () => {
    it("applies custom styles to container", () => {
      const { container } = render(<LoadingIndicator style={{ opacity: "0.5" }} />);
      const containerEl = container.querySelector(".marduk-loading-indicator-container");
      expect(containerEl).toHaveStyle({ opacity: "0.5" });
    });

    it("allows overriding CSS variables", () => {
      const { container } = render(
        <LoadingIndicator
          style={
            {
              "--loading-indicator-bg-light": "#f0f0f0",
              "--loading-indicator-icon-size": "10rem",
            } as React.CSSProperties
          }
        />,
      );
      const containerEl = container.querySelector(".marduk-loading-indicator-container");
      expect(containerEl).toHaveStyle({
        "--loading-indicator-bg-light": "#f0f0f0",
        "--loading-indicator-icon-size": "10rem",
      });
    });

    it("merges custom styles with component classes", () => {
      const { container } = render(<LoadingIndicator darkMode style={{ padding: "20px" }} />);
      const containerEl = container.querySelector(".marduk-loading-indicator-container");
      expect(containerEl).toHaveClass("marduk-loading-indicator-container--dark");
      expect(containerEl).toHaveStyle({ padding: "20px" });
    });
  });
});
