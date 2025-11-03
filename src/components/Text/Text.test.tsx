import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "./Text";

describe("Text", () => {
  describe("Rendering", () => {
    it("renders children text", () => {
      render(<Text>Test text content</Text>);
      expect(screen.getByText("Test text content")).toBeInTheDocument();
    });

    it("renders as paragraph by default", () => {
      render(<Text>Test</Text>);
      const element = screen.getByText("Test");
      expect(element.tagName).toBe("P");
    });

    it("renders as span when as prop is span", () => {
      render(<Text as="span">Test</Text>);
      const element = screen.getByText("Test");
      expect(element.tagName).toBe("SPAN");
    });

    it("renders as div when as prop is div", () => {
      render(<Text as="div">Test</Text>);
      const element = screen.getByText("Test");
      expect(element.tagName).toBe("DIV");
    });

    it("renders as label when as prop is label", () => {
      render(<Text as="label">Test</Text>);
      const element = screen.getByText("Test");
      expect(element.tagName).toBe("LABEL");
    });
  });

  describe("Size Variants", () => {
    it("applies medium size by default", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--size-md");
    });

    it("applies xs size class", () => {
      render(<Text size="xs">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--size-xs");
    });

    it("applies sm size class", () => {
      render(<Text size="sm">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--size-sm");
    });

    it("applies md size class", () => {
      render(<Text size="md">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--size-md");
    });

    it("applies lg size class", () => {
      render(<Text size="lg">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--size-lg");
    });

    it("applies xl size class", () => {
      render(<Text size="xl">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--size-xl");
    });
  });

  describe("Color Variants", () => {
    it("applies default variant by default", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-text--variant-default"
      );
    });

    it("applies primary variant class", () => {
      render(<Text variant="primary">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-text--variant-primary"
      );
    });

    it("applies secondary variant class", () => {
      render(<Text variant="secondary">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-text--variant-secondary"
      );
    });

    it("applies success variant class", () => {
      render(<Text variant="success">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-text--variant-success"
      );
    });

    it("applies danger variant class", () => {
      render(<Text variant="danger">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-text--variant-danger"
      );
    });

    it("applies muted variant class", () => {
      render(<Text variant="muted">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-text--variant-muted"
      );
    });
  });

  describe("Alignment", () => {
    it("applies left alignment by default", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--align-left");
    });

    it("applies center alignment class", () => {
      render(<Text align="center">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--align-center");
    });

    it("applies right alignment class", () => {
      render(<Text align="right">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--align-right");
    });

    it("applies justify alignment class", () => {
      render(<Text align="justify">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-text--align-justify"
      );
    });
  });

  describe("Weight Overrides", () => {
    it("does not apply weight class when not specified", () => {
      render(<Text>Test</Text>);
      const element = screen.getByText("Test");
      expect(element.className).not.toMatch(/marduk-text--weight-/);
    });

    it("applies normal weight class", () => {
      render(<Text weight="normal">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-text--weight-normal"
      );
    });

    it("applies medium weight class", () => {
      render(<Text weight="medium">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-text--weight-medium"
      );
    });

    it("applies semibold weight class", () => {
      render(<Text weight="semibold">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-text--weight-semibold"
      );
    });

    it("applies bold weight class", () => {
      render(<Text weight="bold">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--weight-bold");
    });
  });

  describe("Style Modifiers", () => {
    it("does not apply italic by default", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).not.toHaveClass("marduk-text--italic");
    });

    it("applies italic class when italic is true", () => {
      render(<Text italic>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--italic");
    });

    it("does not apply underline by default", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).not.toHaveClass(
        "marduk-text--underline"
      );
    });

    it("applies underline class when underline is true", () => {
      render(<Text underline>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--underline");
    });

    it("can combine italic and underline", () => {
      render(
        <Text italic underline>
          Test
        </Text>
      );
      const element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-text--italic");
      expect(element).toHaveClass("marduk-text--underline");
    });
  });

  describe("Dark Mode", () => {
    it("does not apply dark mode class by default", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).not.toHaveClass("marduk-text--dark");
    });

    it("applies dark mode class when darkMode is true", () => {
      render(<Text darkMode>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--dark");
    });

    it("does not apply dark mode class when darkMode is false", () => {
      render(<Text darkMode={false}>Test</Text>);
      expect(screen.getByText("Test")).not.toHaveClass("marduk-text--dark");
    });

    it("works with all variants in dark mode", () => {
      const { rerender } = render(
        <Text darkMode variant="primary">
          Test
        </Text>
      );
      let element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-text--dark");
      expect(element).toHaveClass("marduk-text--variant-primary");

      rerender(
        <Text darkMode variant="muted">
          Test
        </Text>
      );
      element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-text--dark");
      expect(element).toHaveClass("marduk-text--variant-muted");
    });
  });

  describe("Additional Props", () => {
    it("forwards additional props to element", () => {
      render(
        <Text data-testid="custom-text" id="main-text">
          Test
        </Text>
      );
      const text = screen.getByTestId("custom-text");
      expect(text).toHaveAttribute("id", "main-text");
    });

    it("merges custom className with component classes", () => {
      render(<Text className="custom-class">Test</Text>);
      const element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-text");
      expect(element).toHaveClass("custom-class");
    });
  });

  describe("Combined Props", () => {
    it("applies multiple prop classes together", () => {
      render(
        <Text size="lg" variant="primary" align="center" weight="bold" italic>
          Combined
        </Text>
      );
      const element = screen.getByText("Combined");
      expect(element).toHaveClass("marduk-text--size-lg");
      expect(element).toHaveClass("marduk-text--variant-primary");
      expect(element).toHaveClass("marduk-text--align-center");
      expect(element).toHaveClass("marduk-text--weight-bold");
      expect(element).toHaveClass("marduk-text--italic");
    });

    it("applies dark mode with other props", () => {
      render(
        <Text variant="success" darkMode underline>
          Dark Text
        </Text>
      );
      const element = screen.getByText("Dark Text");
      expect(element).toHaveClass("marduk-text--variant-success");
      expect(element).toHaveClass("marduk-text--dark");
      expect(element).toHaveClass("marduk-text--underline");
    });
  });
});
