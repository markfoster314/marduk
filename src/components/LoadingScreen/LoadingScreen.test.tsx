import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoadingScreen } from "./LoadingScreen";

describe("LoadingScreen", () => {
  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<LoadingScreen />);
      expect(
        container.querySelector(".marduk-loading-screen-container")
      ).toBeInTheDocument();
    });

    it("renders loading text by default", () => {
      render(<LoadingScreen />);
      expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    });

    it("renders animated dots", () => {
      const { container } = render(<LoadingScreen />);
      const dots = container.querySelectorAll(".marduk-loading-screen-dot");
      expect(dots).toHaveLength(3);
    });
  });

  describe("Text Prop", () => {
    it("displays custom text when provided", () => {
      render(<LoadingScreen text="Please wait..." />);
      expect(screen.getByText(/Please wait.../i)).toBeInTheDocument();
    });

    test.each([
      [true, true],
      [false, false],
    ])("shows/hides text when showText=%s", (showText, shouldShow) => {
      render(<LoadingScreen showText={showText} text="Loading data" />);
      const textQuery = screen.queryByText(/Loading data/i);
      shouldShow
        ? expect(textQuery).toBeInTheDocument()
        : expect(textQuery).not.toBeInTheDocument();
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
      const { container } = render(<LoadingScreen animation={animation} />);
      expect(
        container.querySelector(`.marduk-loading-screen-logo--${animation}`)
      ).toBeInTheDocument();
    });

    it("applies pulse animation by default", () => {
      const { container } = render(<LoadingScreen />);
      expect(
        container.querySelector(".marduk-loading-screen-logo--pulse")
      ).toBeInTheDocument();
    });
  });

  describe("Structure", () => {
    test.each([
      ["content wrapper", ".marduk-loading-screen-content"],
      ["logo wrapper", ".marduk-loading-screen-logo"],
      ["text", ".marduk-loading-screen-text"],
      ["dots wrapper", ".marduk-loading-screen-dots"],
    ])("renders %s with correct class", (_name, selector) => {
      const { container } = render(<LoadingScreen />);
      expect(container.querySelector(selector)).toBeInTheDocument();
    });
  });

  describe("Custom Icon", () => {
    it("renders custom icon when provided", () => {
      const CustomIcon = <div data-testid="custom-icon">Icon</div>;
      render(<LoadingScreen icon={CustomIcon} />);
      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });
  });

  describe("Dark Mode", () => {
    it("applies dark class when darkMode is true", () => {
      const { container } = render(<LoadingScreen darkMode />);
      expect(
        container.querySelector(".marduk-loading-screen-container")
      ).toHaveClass("marduk-loading-screen-container--dark");
    });

    it("passes darkMode to Text component", () => {
      const { container } = render(<LoadingScreen darkMode text="Loading" />);
      const textElement = container.querySelector(
        ".marduk-loading-screen-text"
      );
      expect(textElement).toHaveClass("marduk-text--dark");
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
      const { container } = render(<LoadingScreen textVariant={variant} />);
      const textElement = container.querySelector(
        ".marduk-loading-screen-text"
      );
      expect(textElement).toHaveClass(`marduk-text--variant-${variant}`);
    });
  });

  describe("Combined Props", () => {
    it("works with custom text and animation", () => {
      const { container } = render(
        <LoadingScreen animation="rotate" text="Processing..." />
      );
      expect(screen.getByText(/Processing.../i)).toBeInTheDocument();
      expect(
        container.querySelector(".marduk-loading-screen-logo--rotate")
      ).toBeInTheDocument();
    });

    it("works with custom icon, text, and animation", () => {
      const CustomIcon = <div data-testid="custom">Icon</div>;
      const { container } = render(
        <LoadingScreen
          icon={CustomIcon}
          animation="bounce"
          text="Loading data"
        />
      );
      expect(screen.getByTestId("custom")).toBeInTheDocument();
      expect(screen.getByText(/Loading data/i)).toBeInTheDocument();
      expect(
        container.querySelector(".marduk-loading-screen-logo--bounce")
      ).toBeInTheDocument();
    });

    it("works with no text and custom animation", () => {
      const { container } = render(
        <LoadingScreen showText={false} animation="glitch" />
      );
      expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
      expect(
        container.querySelector(".marduk-loading-screen-logo--glitch")
      ).toBeInTheDocument();
    });
  });

  describe("Data Attributes", () => {
    it("sets data-animation attribute", () => {
      const { container } = render(<LoadingScreen animation="pulse" />);
      const containerEl = container.querySelector(
        ".marduk-loading-screen-container"
      );
      expect(containerEl).toHaveAttribute("data-animation", "pulse");
    });

    test.each([
      [true, "true"],
      [false, "false"],
    ])(
      "sets data-show-text to %s when showText is %s",
      (showText, expected) => {
        const { container } = render(<LoadingScreen showText={showText} />);
        const containerEl = container.querySelector(
          ".marduk-loading-screen-container"
        );
        expect(containerEl).toHaveAttribute("data-show-text", expected);
      }
    );

    test.each([
      ["darkMode", true, "data-dark-mode", "true"],
      ["textVariant", "primary", "data-text-variant", "primary"],
    ])(
      "sets %s data attribute when provided",
      (prop, value, attr, expected) => {
        const { container } = render(<LoadingScreen {...{ [prop]: value }} />);
        const containerEl = container.querySelector(
          ".marduk-loading-screen-container"
        );
        expect(containerEl).toHaveAttribute(attr, expected);
      }
    );

    test.each([
      ["darkMode", false, "data-dark-mode"],
      ["textVariant", "default", "data-text-variant"],
    ])("does not set %s when value is default", (prop, value, attr) => {
      const { container } = render(<LoadingScreen {...{ [prop]: value }} />);
      const containerEl = container.querySelector(
        ".marduk-loading-screen-container"
      );
      expect(containerEl).not.toHaveAttribute(attr);
    });

    it("sets multiple data attributes together", () => {
      const { container } = render(
        <LoadingScreen
          animation="bounce"
          showText={true}
          darkMode={true}
          textVariant="success"
        />
      );
      const containerEl = container.querySelector(
        ".marduk-loading-screen-container"
      );
      expect(containerEl).toHaveAttribute("data-animation", "bounce");
      expect(containerEl).toHaveAttribute("data-show-text", "true");
      expect(containerEl).toHaveAttribute("data-dark-mode", "true");
      expect(containerEl).toHaveAttribute("data-text-variant", "success");
    });
  });

  describe("ARIA Attributes", () => {
    it("sets required ARIA attributes on container", () => {
      const { container } = render(<LoadingScreen />);
      const containerEl = container.querySelector(
        ".marduk-loading-screen-container"
      );
      expect(containerEl).toHaveAttribute("role", "status");
      expect(containerEl).toHaveAttribute("aria-live", "polite");
      expect(containerEl).toHaveAttribute("aria-busy");
    });

    test.each([
      [true, undefined],
      [false, "Processing"],
    ])(
      "sets aria-label appropriately when showText=%s",
      (showText, expectedLabel) => {
        const { container } = render(
          <LoadingScreen showText={showText} text="Processing" />
        );
        const containerEl = container.querySelector(
          ".marduk-loading-screen-container"
        );
        if (expectedLabel) {
          expect(containerEl).toHaveAttribute("aria-label", expectedLabel);
        } else {
          expect(containerEl).not.toHaveAttribute("aria-label");
        }
      }
    );

    it("sets aria-hidden on decorative elements", () => {
      const { container } = render(<LoadingScreen showText={true} />);
      expect(
        container.querySelector(".marduk-loading-screen-logo")
      ).toHaveAttribute("aria-hidden", "true");
      expect(
        container.querySelector(".marduk-loading-screen-dots")
      ).toHaveAttribute("aria-hidden", "true");
    });
  });

  describe("Reduced Motion Accessibility", () => {
    it("maintains complete structure for accessibility", () => {
      const { container } = render(
        <LoadingScreen animation="bounce" showText={true} />
      );
      expect(
        container.querySelector(".marduk-loading-screen-logo--bounce")
      ).toBeInTheDocument();
      expect(
        container.querySelectorAll(".marduk-loading-screen-dot")
      ).toHaveLength(3);
    });
  });

  describe("Style Prop", () => {
    it("applies custom styles to container", () => {
      const { container } = render(
        <LoadingScreen style={{ opacity: "0.5" }} />
      );
      const containerEl = container.querySelector(
        ".marduk-loading-screen-container"
      );
      expect(containerEl).toHaveStyle({ opacity: "0.5" });
    });

    it("allows overriding CSS variables", () => {
      const { container } = render(
        <LoadingScreen
          style={
            {
              "--loading-screen-bg-light": "#f0f0f0",
              "--loading-screen-icon-size": "10rem",
            } as React.CSSProperties
          }
        />
      );
      const containerEl = container.querySelector(
        ".marduk-loading-screen-container"
      );
      expect(containerEl).toHaveStyle({
        "--loading-screen-bg-light": "#f0f0f0",
        "--loading-screen-icon-size": "10rem",
      });
    });

    it("merges custom styles with component classes", () => {
      const { container } = render(
        <LoadingScreen darkMode style={{ padding: "20px" }} />
      );
      const containerEl = container.querySelector(
        ".marduk-loading-screen-container"
      );
      expect(containerEl).toHaveClass("marduk-loading-screen-container--dark");
      expect(containerEl).toHaveStyle({ padding: "20px" });
    });
  });
});
