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

    it("renders the default logo icon", () => {
      const { container } = render(<LoadingScreen />);
      expect(
        container.querySelector(".marduk-loading-screen-icon")
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

    it("hides text when showText is false", () => {
      render(<LoadingScreen showText={false} />);
      expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
    });

    it("shows text when showText is true", () => {
      render(<LoadingScreen showText={true} text="Loading data" />);
      expect(screen.getByText(/Loading data/i)).toBeInTheDocument();
    });
  });

  describe("Animation Variants", () => {
    it("applies pulse animation class by default", () => {
      const { container } = render(<LoadingScreen />);
      expect(
        container.querySelector(".marduk-loading-screen-logo--pulse")
      ).toBeInTheDocument();
    });

    it("applies rotate animation class", () => {
      const { container } = render(<LoadingScreen animation="rotate" />);
      expect(
        container.querySelector(".marduk-loading-screen-logo--rotate")
      ).toBeInTheDocument();
    });

    it("applies breathe animation class", () => {
      const { container } = render(<LoadingScreen animation="breathe" />);
      expect(
        container.querySelector(".marduk-loading-screen-logo--breathe")
      ).toBeInTheDocument();
    });

    it("applies glitch animation class", () => {
      const { container } = render(<LoadingScreen animation="glitch" />);
      expect(
        container.querySelector(".marduk-loading-screen-logo--glitch")
      ).toBeInTheDocument();
    });

    it("applies ripple animation class", () => {
      const { container } = render(<LoadingScreen animation="ripple" />);
      expect(
        container.querySelector(".marduk-loading-screen-logo--ripple")
      ).toBeInTheDocument();
    });

    it("applies bounce animation class", () => {
      const { container } = render(<LoadingScreen animation="bounce" />);
      expect(
        container.querySelector(".marduk-loading-screen-logo--bounce")
      ).toBeInTheDocument();
    });

    it("applies swing animation class", () => {
      const { container } = render(<LoadingScreen animation="swing" />);
      expect(
        container.querySelector(".marduk-loading-screen-logo--swing")
      ).toBeInTheDocument();
    });

    it("applies flip animation class", () => {
      const { container } = render(<LoadingScreen animation="flip" />);
      expect(
        container.querySelector(".marduk-loading-screen-logo--flip")
      ).toBeInTheDocument();
    });

    it("applies orbit animation class", () => {
      const { container } = render(<LoadingScreen animation="orbit" />);
      expect(
        container.querySelector(".marduk-loading-screen-logo--orbit")
      ).toBeInTheDocument();
    });

    it("applies shake animation class", () => {
      const { container } = render(<LoadingScreen animation="shake" />);
      expect(
        container.querySelector(".marduk-loading-screen-logo--shake")
      ).toBeInTheDocument();
    });
  });

  describe("Custom Icon", () => {
    it("renders custom icon when provided", () => {
      const CustomIcon = (
        <div className="custom-icon" data-testid="custom-icon">
          Custom
        </div>
      );
      render(<LoadingScreen icon={CustomIcon} />);
      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });

    it("applies loader-icon class to custom icon", () => {
      const CustomIcon = <div data-testid="custom-icon">Custom</div>;
      render(<LoadingScreen icon={CustomIcon} />);
      const icon = screen.getByTestId("custom-icon");
      expect(icon).toHaveClass("marduk-loading-screen-icon");
    });

    it("preserves existing className on custom icon", () => {
      const CustomIcon = (
        <div className="existing-class" data-testid="custom-icon">
          Custom
        </div>
      );
      render(<LoadingScreen icon={CustomIcon} />);
      const icon = screen.getByTestId("custom-icon");
      expect(icon).toHaveClass("marduk-loading-screen-icon");
      expect(icon).toHaveClass("existing-class");
    });
  });

  describe("Structure", () => {
    it("renders container with correct class", () => {
      const { container } = render(<LoadingScreen />);
      expect(
        container.querySelector(".marduk-loading-screen-container")
      ).toBeInTheDocument();
    });

    it("renders content wrapper with correct class", () => {
      const { container } = render(<LoadingScreen />);
      expect(
        container.querySelector(".marduk-loading-screen-content")
      ).toBeInTheDocument();
    });

    it("renders logo wrapper with correct class", () => {
      const { container } = render(<LoadingScreen />);
      expect(
        container.querySelector(".marduk-loading-screen-logo")
      ).toBeInTheDocument();
    });

    it("renders text with correct class", () => {
      const { container } = render(<LoadingScreen />);
      expect(
        container.querySelector(".marduk-loading-screen-text")
      ).toBeInTheDocument();
    });

    it("renders dots wrapper with correct class", () => {
      const { container } = render(<LoadingScreen />);
      expect(
        container.querySelector(".marduk-loading-screen-dots")
      ).toBeInTheDocument();
    });
  });

  describe("Dark Mode", () => {
    it("does not apply dark class by default", () => {
      const { container } = render(<LoadingScreen />);
      expect(
        container.querySelector(".marduk-loading-screen-container")
      ).not.toHaveClass("marduk-loading-screen-container--dark");
    });

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
    it("applies default variant by default", () => {
      const { container } = render(<LoadingScreen />);
      const textElement = container.querySelector(
        ".marduk-loading-screen-text"
      );
      expect(textElement).toHaveClass("marduk-text--variant-default");
    });

    it("applies primary variant", () => {
      const { container } = render(<LoadingScreen textVariant="primary" />);
      const textElement = container.querySelector(
        ".marduk-loading-screen-text"
      );
      expect(textElement).toHaveClass("marduk-text--variant-primary");
    });

    it("applies secondary variant", () => {
      const { container } = render(<LoadingScreen textVariant="secondary" />);
      const textElement = container.querySelector(
        ".marduk-loading-screen-text"
      );
      expect(textElement).toHaveClass("marduk-text--variant-secondary");
    });

    it("applies success variant", () => {
      const { container } = render(<LoadingScreen textVariant="success" />);
      const textElement = container.querySelector(
        ".marduk-loading-screen-text"
      );
      expect(textElement).toHaveClass("marduk-text--variant-success");
    });

    it("applies danger variant", () => {
      const { container } = render(<LoadingScreen textVariant="danger" />);
      const textElement = container.querySelector(
        ".marduk-loading-screen-text"
      );
      expect(textElement).toHaveClass("marduk-text--variant-danger");
    });

    it("applies warning variant", () => {
      const { container } = render(<LoadingScreen textVariant="warning" />);
      const textElement = container.querySelector(
        ".marduk-loading-screen-text"
      );
      expect(textElement).toHaveClass("marduk-text--variant-warning");
    });

    it("applies muted variant", () => {
      const { container } = render(<LoadingScreen textVariant="muted" />);
      const textElement = container.querySelector(
        ".marduk-loading-screen-text"
      );
      expect(textElement).toHaveClass("marduk-text--variant-muted");
    });
  });

  describe("Accessibility", () => {
    it("uses Text component for loading text", () => {
      render(<LoadingScreen text="Loading content" />);
      expect(screen.getByText(/Loading content/i)).toBeInTheDocument();
    });

    it("renders text as div element", () => {
      const { container } = render(<LoadingScreen />);
      const textElement = container.querySelector(
        ".marduk-loading-screen-text"
      );
      expect(textElement?.tagName.toLowerCase()).toBe("div");
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
});
