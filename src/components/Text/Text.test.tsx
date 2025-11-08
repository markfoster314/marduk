import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "./Text";
import { defineTextPresets, resetCustomPresets } from "./presets";

describe("Text", () => {
  describe("Rendering", () => {
    it("renders children text", () => {
      render(<Text>Test text</Text>);
      expect(screen.getByText("Test text")).toBeInTheDocument();
    });

    it("renders as paragraph by default", () => {
      render(<Text>Test text</Text>);
      const text = screen.getByText("Test text");
      expect(text.tagName).toBe("P");
    });

    it("applies base class", () => {
      render(<Text>Test text</Text>);
      expect(screen.getByText("Test text")).toHaveClass("marduk-text");
    });
  });

  describe("Presets", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    test.each([
      ["default", "--"],
      ["primary", "var(--marduk-color-primary-500)"],
      ["secondary", "var(--marduk-color-gray-600)"],
      ["success", "var(--marduk-color-success-500)"],
      ["danger", "var(--marduk-color-error-400)"],
      ["warning", "var(--marduk-color-warning-500)"],
      ["muted", "var(--marduk-color-gray-500)"],
      ["defaultDark", "var(--marduk-color-dark-text-primary)"],
      ["primaryDark", "var(--marduk-color-primary-300)"],
      ["secondaryDark", "var(--marduk-color-dark-text-secondary)"],
      ["successDark", "var(--marduk-color-success-300)"],
      ["dangerDark", "var(--marduk-color-error-200)"],
      ["warningDark", "var(--marduk-color-warning-200)"],
      ["mutedDark", "var(--marduk-color-dark-text-tertiary)"],
    ] as const)("applies %s preset correctly", (preset, expectedColor) => {
      render(<Text preset={[preset]}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveAttribute("data-preset", preset);
      if (expectedColor !== "--") {
        expect(text).toHaveStyle({ color: expectedColor });
      }
    });

    it("props override preset values", () => {
      render(
        <Text preset={["primary"]} size="xl">
          Test
        </Text>,
      );
      const text = screen.getByText("Test");
      expect(text).toHaveClass("marduk-text--size-xl");
    });

    it("multiple props override multiple preset values", () => {
      render(
        <Text preset={["primary"]} size="lg" weight="bold">
          Test
        </Text>,
      );
      const text = screen.getByText("Test");
      expect(text).toHaveClass("marduk-text--size-lg");
      expect(text).toHaveClass("marduk-text--weight-bold");
    });

    it("applies custom preset after defineTextPresets", () => {
      defineTextPresets({
        custom: {
          size: "xl",
          weight: "bold",
          italic: true,
        },
      });
      render(<Text preset={["custom"]}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveClass("marduk-text--size-xl");
      expect(text).toHaveClass("marduk-text--weight-bold");
      expect(text).toHaveClass("marduk-text--italic");
    });

    it("custom preset overrides built-in preset", () => {
      defineTextPresets({
        primary: {
          size: "lg",
          weight: "bold",
        },
      });
      render(<Text preset={["primary"]}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveClass("marduk-text--size-lg");
      expect(text).toHaveClass("marduk-text--weight-bold");
    });

    it("handles preset with style object", () => {
      render(<Text preset={["primary"]}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveStyle({ color: "var(--marduk-color-primary-500)" });
    });

    it("merges preset style with custom style prop", () => {
      render(
        <Text preset={["primary"]} style={{ fontFamily: "monospace" }}>
          Test
        </Text>,
      );
      const text = screen.getByText("Test");
      expect(text).toHaveStyle({
        color: "var(--marduk-color-primary-500)",
        fontFamily: "monospace",
      });
    });

    it("works with unknown preset name gracefully", () => {
      render(<Text preset={["nonexistent"]}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveClass("marduk-text");
      expect(text).toHaveAttribute("data-preset", "nonexistent");
    });
  });

  describe("Array Presets", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    it("applies single preset in array", () => {
      render(<Text preset={["primary"]}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveStyle({ color: "var(--marduk-color-primary-500)" });
      expect(text).toHaveAttribute("data-preset", "primary");
    });

    it("merges multiple presets left-to-right", () => {
      defineTextPresets({
        body: {
          size: "lg",
          lineHeight: "relaxed",
        },
      });
      render(<Text preset={["primary", "body"]}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveClass("marduk-text--size-lg");
      expect(text).toHaveClass("marduk-text--line-height-relaxed");
      expect(text).toHaveStyle({ color: "var(--marduk-color-primary-500)" });
    });

    it("merges style objects from multiple presets", () => {
      defineTextPresets({
        custom1: {
          style: { fontSize: "20px" },
        },
        custom2: {
          style: { fontWeight: "700" },
        },
      });
      render(<Text preset={["custom1", "custom2"]}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveStyle({ fontSize: "20px", fontWeight: "700" });
    });

    it("props override merged preset values", () => {
      defineTextPresets({
        body: {
          size: "lg",
        },
      });
      render(
        <Text preset={["primary", "body"]} size="sm">
          Test
        </Text>,
      );
      const text = screen.getByText("Test");
      expect(text).toHaveClass("marduk-text--size-sm");
    });

    it("data-preset shows comma-separated list", () => {
      render(<Text preset={["primary", "success", "default"]}>Test</Text>);
      expect(screen.getByText("Test")).toHaveAttribute("data-preset", "primary,success,default");
    });

    it("handles empty array gracefully", () => {
      render(<Text preset={[]}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveClass("marduk-text");
      expect(text).not.toHaveAttribute("data-preset");
    });

    it("skips unknown presets in array", () => {
      render(<Text preset={["primary", "unknown", "success"]}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveAttribute("data-preset", "primary,unknown,success");
    });

    it("order matters for conflicting values", () => {
      render(<Text preset={["primary", "danger"]}>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveStyle({ color: "var(--marduk-color-error-400)" });
    });
  });

  describe("Size", () => {
    test.each(["xs", "sm", "md", "lg", "xl"] as const)("applies %s size class", (size) => {
      render(<Text size={size}>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(`marduk-text--size-${size}`);
    });

    it("applies medium size by default", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--size-md");
    });
  });

  describe("Alignment", () => {
    test.each(["left", "center", "right", "justify"] as const)("applies %s alignment", (align) => {
      render(<Text align={align}>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(`marduk-text--align-${align}`);
    });

    it("applies left alignment by default", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--align-left");
    });
  });

  describe("Weight", () => {
    test.each(["normal", "medium", "semibold", "bold"] as const)("applies %s weight", (weight) => {
      render(<Text weight={weight}>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(`marduk-text--weight-${weight}`);
    });

    it("does not apply weight class when not specified", () => {
      render(<Text>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).not.toHaveClass("marduk-text--weight-normal");
    });
  });

  describe("Line Height", () => {
    test.each(["tight", "normal", "relaxed", "loose"] as const)(
      "applies %s line height",
      (lineHeight) => {
        render(<Text lineHeight={lineHeight}>Test</Text>);
        expect(screen.getByText("Test")).toHaveClass(`marduk-text--line-height-${lineHeight}`);
      },
    );
  });

  describe("Letter Spacing", () => {
    test.each(["tight", "normal", "wide"] as const)("applies %s spacing", (spacing) => {
      render(<Text spacing={spacing}>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(`marduk-text--spacing-${spacing}`);
    });
  });

  describe("Truncation", () => {
    it("applies truncate class when truncate is true", () => {
      render(<Text truncate>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--truncate");
    });

    it("applies clamp class when clamp is true", () => {
      render(<Text clamp>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--clamp");
    });

    it("applies custom maxLines value", () => {
      render(
        <Text clamp maxLines={3}>
          Test
        </Text>,
      );
      const text = screen.getByText("Test");
      expect(text).toHaveAttribute("data-max-lines", "3");
    });
  });

  describe("Style Modifiers", () => {
    it("applies italic class when italic is true", () => {
      render(<Text italic>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--italic");
    });

    it("applies underlined class when underlined is true", () => {
      render(<Text underlined>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--underlined");
    });

    test.each(["solid", "double", "dotted", "dashed", "wavy"] as const)(
      "applies %s underline style",
      (style) => {
        render(
          <Text underlined underlineStyle={style}>
            Test
          </Text>,
        );
        expect(screen.getByText("Test")).toHaveClass(`marduk-text--underline-${style}`);
      },
    );
  });

  describe("Custom Color", () => {
    it("applies custom color via CSS variable", () => {
      render(<Text color="#ff0000">Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveClass("marduk-text--custom-color");
      expect(text).toHaveStyle({ "--marduk-text-custom-color": "#ff0000" });
    });

    it("color prop overrides preset color", () => {
      render(
        <Text preset={["primary"]} color="#00ff00">
          Test
        </Text>,
      );
      const text = screen.getByText("Test");
      expect(text).toHaveStyle({ "--marduk-text-custom-color": "#00ff00" });
    });
  });

  describe("Polymorphic", () => {
    test.each(["span", "div", "label", "a"] as const)("renders as %s element", (element) => {
      render(<Text as={element}>Test</Text>);
      expect(screen.getByText("Test").tagName).toBe(element.toUpperCase());
    });

    it("applies all classes with polymorphic rendering", () => {
      render(
        <Text as="span" preset={["primary"]} size="lg">
          Test
        </Text>,
      );
      const text = screen.getByText("Test");
      expect(text).toHaveClass("marduk-text");
      expect(text).toHaveClass("marduk-text--size-lg");
    });
  });

  describe("Data Attributes", () => {
    it("includes size and align attributes", () => {
      render(<Text>Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveAttribute("data-size", "md");
      expect(text).toHaveAttribute("data-align", "left");
    });

    it("includes preset attribute for single preset", () => {
      render(<Text preset={["primary"]}>Test</Text>);
      expect(screen.getByText("Test")).toHaveAttribute("data-preset", "primary");
    });

    it("includes comma-separated preset attribute", () => {
      render(<Text preset={["primary", "success"]}>Test</Text>);
      expect(screen.getByText("Test")).toHaveAttribute("data-preset", "primary,success");
    });

    it("includes optional data attributes when specified", () => {
      render(
        <Text weight="bold" lineHeight="tight" spacing="wide">
          Test
        </Text>,
      );
      const text = screen.getByText("Test");
      expect(text).toHaveAttribute("data-weight", "bold");
      expect(text).toHaveAttribute("data-line-height", "tight");
      expect(text).toHaveAttribute("data-spacing", "wide");
    });
  });

  describe("Additional Props", () => {
    it("forwards additional props to element", () => {
      render(<Text data-testid="custom-text">Test</Text>);
      expect(screen.getByTestId("custom-text")).toBeInTheDocument();
    });

    it("merges custom className with component classes", () => {
      render(<Text className="custom-class">Test</Text>);
      const text = screen.getByText("Test");
      expect(text).toHaveClass("marduk-text");
      expect(text).toHaveClass("custom-class");
    });
  });

  describe("Accessibility", () => {
    it("forwards aria attributes", () => {
      render(<Text aria-label="Custom label">Test</Text>);
      expect(screen.getByText("Test")).toHaveAttribute("aria-label", "Custom label");
    });
  });
});
