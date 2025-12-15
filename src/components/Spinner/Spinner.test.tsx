import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Spinner } from "./Spinner";
import { defineSpinnerPresets, resetCustomPresets } from "./presets";

describe("Spinner", () => {
  describe("Core", () => {
    it("renders with base class and default size", () => {
      render(<Spinner />);
      const spinner = screen.getByRole("status");
      expect(spinner).toBeInTheDocument();
      expect(spinner.tagName).toBe("DIV");
      expect(spinner).toHaveClass("marduk-spinner");
      expect(spinner).toHaveClass("marduk-spinner--size-medium");
      expect(spinner).toHaveClass("marduk-spinner--speed-normal");
    });

    it("renders circle element", () => {
      render(<Spinner />);
      const circle = document.querySelector(".marduk-spinner__circle");
      expect(circle).toBeInTheDocument();
    });
  });

  describe("Props", () => {
    test.each([
      ["small", "marduk-spinner--size-small"],
      ["medium", "marduk-spinner--size-medium"],
      ["large", "marduk-spinner--size-large"],
    ] as const)("applies %s size", (size, expectedClass) => {
      render(<Spinner size={size} />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveClass(expectedClass);
      expect(spinner).toHaveAttribute("data-size", size);
    });

    test.each([
      ["slow", "marduk-spinner--speed-slow"],
      ["normal", "marduk-spinner--speed-normal"],
      ["fast", "marduk-spinner--speed-fast"],
    ] as const)("applies %s speed", (speed, expectedClass) => {
      render(<Spinner speed={speed} />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveClass(expectedClass);
      expect(spinner).toHaveAttribute("data-speed", speed);
    });

    it("displays label when provided", () => {
      render(<Spinner label="Loading data" />);
      expect(screen.getByText("Loading data")).toBeInTheDocument();
      expect(screen.getByText("Loading data")).toHaveClass("marduk-spinner__label");
    });

    it("does not display label when not provided", () => {
      render(<Spinner />);
      const label = document.querySelector(".marduk-spinner__label");
      expect(label).not.toBeInTheDocument();
    });

    it("handles empty string label", () => {
      render(<Spinner label="" />);
      const label = document.querySelector(".marduk-spinner__label");
      // Empty string is falsy, so label should not be rendered
      expect(label).not.toBeInTheDocument();
    });

    it("handles long label text", () => {
      const longLabel = "A".repeat(100);
      render(<Spinner label={longLabel} />);
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });

    it("applies custom aria-label when label provided", () => {
      render(<Spinner label="Loading data" />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveAttribute("aria-label", "Loading data");
    });

    it("applies default aria-label when no label", () => {
      render(<Spinner />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveAttribute("aria-label", "Loading");
    });
  });

  describe("Presets", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    test.each([["primary"], ["success"], ["danger"], ["primaryDark"]] as const)(
      "applies %s preset",
      (preset) => {
        render(<Spinner preset={[preset]} />);
        const spinner = screen.getByRole("status");
        expect(spinner).toHaveAttribute("data-preset", preset);
        expect(spinner).toHaveClass(`marduk-spinner--${preset}`);
      },
    );

    it("props override presets", () => {
      render(<Spinner preset={["primary"]} size="large" />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveClass("marduk-spinner--size-large");
    });

    it("merges multiple presets", () => {
      defineSpinnerPresets({
        base: { size: "small" },
        override: { size: "large" },
      });
      render(<Spinner preset={["base", "override"]} />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveClass("marduk-spinner--size-large");
    });

    it("deep merges style objects from presets", () => {
      defineSpinnerPresets({
        style1: { style: { opacity: "0.8" } as React.CSSProperties },
        style2: { style: { "--spinner-color": "red" } as React.CSSProperties },
      });
      render(<Spinner preset={["style1", "style2"]} />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveStyle({ opacity: "0.8" });
      expect(spinner).toHaveStyle({ "--spinner-color": "red" } as Record<string, string>);
    });

    it("preset size is overridden by prop", () => {
      defineSpinnerPresets({
        custom: { size: "small" },
      });
      render(<Spinner preset={["custom"]} size="large" />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveClass("marduk-spinner--size-large");
    });

    it("preset speed is overridden by prop", () => {
      defineSpinnerPresets({
        custom: { speed: "slow" },
      });
      render(<Spinner preset={["custom"]} speed="fast" />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveClass("marduk-spinner--speed-fast");
    });

    it("merges preset styles with prop styles", () => {
      defineSpinnerPresets({
        custom: {
          style: {
            opacity: "0.8",
          } as React.CSSProperties,
        },
      });
      render(
        <Spinner
          preset={["custom"]}
          style={
            {
              "--spinner-color": "blue",
            } as React.CSSProperties
          }
        />,
      );
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveStyle({ opacity: "0.8" });
      expect(spinner).toHaveStyle({ "--spinner-color": "blue" } as Record<string, string>);
    });

    it("supports custom presets", () => {
      defineSpinnerPresets({ premium: { size: "large" } });
      render(<Spinner preset={["premium"]} />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveClass("marduk-spinner--size-large");
    });
  });

  describe("Polymorphic", () => {
    it("renders as custom element", () => {
      render(<Spinner as="span" />);
      expect(screen.getByRole("status").tagName).toBe("SPAN");
    });

    it("maintains all classes with polymorphic rendering", () => {
      render(<Spinner as="span" preset={["primary"]} size="large" />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveClass("marduk-spinner");
      expect(spinner).toHaveClass("marduk-spinner--primary");
      expect(spinner).toHaveClass("marduk-spinner--size-large");
    });
  });

  describe("Edge Cases", () => {
    it("forwards props and className", () => {
      render(<Spinner data-testid="spinner" className="custom" />);
      const spinner = screen.getByTestId("spinner");
      expect(spinner).toHaveClass("custom");
    });

    it("forwards data attributes", () => {
      render(<Spinner data-custom="value" />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveAttribute("data-custom", "value");
    });

    it("combines all features together", () => {
      render(<Spinner preset={["success"]} size="large" speed="fast" label="Processing" />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveClass("marduk-spinner--success");
      expect(spinner).toHaveClass("marduk-spinner--size-large");
      expect(spinner).toHaveClass("marduk-spinner--speed-fast");
      expect(screen.getByText("Processing")).toBeInTheDocument();
    });

    it("handles empty preset array", () => {
      render(<Spinner preset={[]} />);
      const spinner = screen.getByRole("status");
      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveClass("marduk-spinner");
    });

    it("handles undefined preset gracefully", () => {
      render(<Spinner />);
      const spinner = screen.getByRole("status");
      expect(spinner).toBeInTheDocument();
    });

    it("renders circle element", () => {
      render(<Spinner />);
      const circle = document.querySelector(".marduk-spinner__circle");
      expect(circle).toBeInTheDocument();
    });

    it("renders circle element with label", () => {
      render(<Spinner label="Loading" />);
      const circle = document.querySelector(".marduk-spinner__circle");
      expect(circle).toBeInTheDocument();
      expect(screen.getByText("Loading")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("applies status role", () => {
      render(<Spinner />);
      const spinner = screen.getByRole("status");
      expect(spinner).toBeInTheDocument();
    });

    it("applies aria-live polite", () => {
      render(<Spinner />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveAttribute("aria-live", "polite");
    });

    it("uses custom aria-label when label provided", () => {
      render(<Spinner label="Loading users" />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveAttribute("aria-label", "Loading users");
    });

    it("uses default aria-label when no label", () => {
      render(<Spinner />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveAttribute("aria-label", "Loading");
    });

    it("applies accessibility attributes to polymorphic elements", () => {
      render(<Spinner as="span" />);
      const spinner = screen.getByRole("status");
      expect(spinner.tagName).toBe("SPAN");
      expect(spinner).toHaveAttribute("aria-label", "Loading");
    });
  });

  describe("Data Attributes", () => {
    it("includes data-size attribute", () => {
      render(<Spinner size="large" />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveAttribute("data-size", "large");
    });

    it("includes data-speed attribute", () => {
      render(<Spinner speed="fast" />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveAttribute("data-speed", "fast");
    });

    it("includes data-preset attribute", () => {
      render(<Spinner preset={["primary", "success"]} />);
      const spinner = screen.getByRole("status");
      expect(spinner).toHaveAttribute("data-preset", "primary,success");
    });
  });
});
