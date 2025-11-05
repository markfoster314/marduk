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
  });

  describe("Size Variants", () => {
    it.each([
      ["xs", "marduk-text--size-xs"],
      ["sm", "marduk-text--size-sm"],
      ["md", "marduk-text--size-md"],
      ["lg", "marduk-text--size-lg"],
      ["xl", "marduk-text--size-xl"],
    ] as const)("applies %s size class", (size, expectedClass) => {
      render(<Text size={size}>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(expectedClass);
    });

    it("applies medium size by default", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--size-md");
    });
  });

  describe("Color Variants", () => {
    it.each([
      ["default", "marduk-text--variant-default"],
      ["primary", "marduk-text--variant-primary"],
      ["secondary", "marduk-text--variant-secondary"],
      ["success", "marduk-text--variant-success"],
      ["warning", "marduk-text--variant-warning"],
      ["danger", "marduk-text--variant-danger"],
      ["muted", "marduk-text--variant-muted"],
    ] as const)("applies %s variant class", (variant, expectedClass) => {
      render(<Text variant={variant}>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(expectedClass);
    });

    it("applies default variant by default", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-text--variant-default"
      );
    });
  });

  describe("Alignment", () => {
    it.each([
      ["left", "marduk-text--align-left"],
      ["center", "marduk-text--align-center"],
      ["right", "marduk-text--align-right"],
      ["justify", "marduk-text--align-justify"],
    ] as const)("applies %s alignment class", (align, expectedClass) => {
      render(<Text align={align}>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(expectedClass);
    });

    it("applies left alignment by default", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--align-left");
    });
  });

  describe("Weight Overrides", () => {
    it("does not apply weight class when not specified", () => {
      render(<Text>Test</Text>);
      const element = screen.getByText("Test");
      expect(element.className).not.toMatch(/marduk-text--weight-/);
    });

    it.each([
      ["normal", "marduk-text--weight-normal"],
      ["medium", "marduk-text--weight-medium"],
      ["semibold", "marduk-text--weight-semibold"],
      ["bold", "marduk-text--weight-bold"],
    ] as const)("applies %s weight class", (weight, expectedClass) => {
      render(<Text weight={weight}>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(expectedClass);
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

    it("can combine italic and underlined", () => {
      render(
        <Text italic underlined>
          Test
        </Text>
      );
      const element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-text--italic");
      expect(element).toHaveClass("marduk-text--underlined");
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

  describe("Color Prop", () => {
    it("applies custom color class and CSS variable", () => {
      render(<Text color="#ff0000">Text</Text>);
      const text = screen.getByText("Text");
      expect(text).toHaveClass("marduk-text--custom-color");
      expect(text).toHaveStyle({ "--marduk-text-custom-color": "#ff0000" });
    });

    it("works with CSS variables", () => {
      render(<Text color="var(--marduk-color-primary-500)">Text</Text>);
      const text = screen.getByText("Text");
      expect(text).toHaveClass("marduk-text--custom-color");
      expect(text).toHaveStyle({
        "--marduk-text-custom-color": "var(--marduk-color-primary-500)",
      });
    });

    it("does not apply custom color class when color prop is not provided", () => {
      render(<Text>Text</Text>);
      const text = screen.getByText("Text");
      expect(text).not.toHaveClass("marduk-text--custom-color");
      expect(text.getAttribute("style")).toBeNull();
    });

    it("merges with existing style prop", () => {
      render(
        <Text color="#ff0000" style={{ fontSize: "20px" }}>
          Text
        </Text>
      );
      const text = screen.getByText("Text");
      expect(text).toHaveClass("marduk-text--custom-color");
      expect(text).toHaveStyle({
        "--marduk-text-custom-color": "#ff0000",
        fontSize: "20px",
      });
    });

    it("applies custom color class alongside variant class", () => {
      render(
        <Text variant="primary" color="#00ff00">
          Text
        </Text>
      );
      const text = screen.getByText("Text");
      expect(text).toHaveClass("marduk-text--variant-primary");
      expect(text).toHaveClass("marduk-text--custom-color");
      expect(text).toHaveStyle({ "--marduk-text-custom-color": "#00ff00" });
    });

    it("applies RGB color values", () => {
      render(<Text color="rgb(255, 100, 50)">Text</Text>);
      const text = screen.getByText("Text");
      expect(text).toHaveClass("marduk-text--custom-color");
      expect(text).toHaveStyle({
        "--marduk-text-custom-color": "rgb(255, 100, 50)",
      });
    });

    it("applies named colors", () => {
      render(<Text color="rebeccapurple">Text</Text>);
      const text = screen.getByText("Text");
      expect(text).toHaveClass("marduk-text--custom-color");
      expect(text).toHaveStyle({
        "--marduk-text-custom-color": "rebeccapurple",
      });
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
        <Text variant="success" darkMode underlined>
          Dark Text
        </Text>
      );
      const element = screen.getByText("Dark Text");
      expect(element).toHaveClass("marduk-text--variant-success");
      expect(element).toHaveClass("marduk-text--dark");
      expect(element).toHaveClass("marduk-text--underlined");
    });
  });

  describe("Polymorphic Component (as prop)", () => {
    it("renders as paragraph by default", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test").tagName).toBe("P");
    });

    it.each([
      ["span", "SPAN"],
      ["div", "DIV"],
      ["label", "LABEL"],
      ["section", "SECTION"],
      ["article", "ARTICLE"],
    ] as const)("renders as %s element", (as, expectedTag) => {
      render(<Text as={as}>Test</Text>);
      expect(screen.getByText("Test").tagName).toBe(expectedTag);
    });

    it("renders as anchor with href", () => {
      render(
        <Text as="a" href="/test">
          Link
        </Text>
      );
      const link = screen.getByText("Link");
      expect(link.tagName).toBe("A");
      expect(link).toHaveAttribute("href", "/test");
    });

    it("renders as button with type", () => {
      render(
        <Text as="button" type="button">
          Button Text
        </Text>
      );
      const button = screen.getByText("Button Text");
      expect(button.tagName).toBe("BUTTON");
      expect(button).toHaveAttribute("type", "button");
    });

    it("applies all styling classes when using as prop", () => {
      render(
        <Text as="span" variant="primary" size="lg" weight="bold">
          Test
        </Text>
      );
      const element = screen.getByText("Test");
      expect(element.tagName).toBe("SPAN");
      expect(element).toHaveClass("marduk-text");
      expect(element).toHaveClass("marduk-text--variant-primary");
      expect(element).toHaveClass("marduk-text--size-lg");
      expect(element).toHaveClass("marduk-text--weight-bold");
    });

    it("applies custom className with as prop", () => {
      render(
        <Text as="div" className="custom">
          Test
        </Text>
      );
      const element = screen.getByText("Test");
      expect(element.tagName).toBe("DIV");
      expect(element).toHaveClass("marduk-text");
      expect(element).toHaveClass("custom");
    });

    it("forwards props correctly to polymorphic element", () => {
      render(
        <Text as="a" href="/link" target="_blank" rel="noopener">
          Link
        </Text>
      );
      const link = screen.getByText("Link");
      expect(link).toHaveAttribute("href", "/link");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener");
    });

    it("works with dark mode when using as prop", () => {
      render(
        <Text as="span" darkMode variant="primary">
          Test
        </Text>
      );
      const element = screen.getByText("Test");
      expect(element.tagName).toBe("SPAN");
      expect(element).toHaveClass("marduk-text--dark");
      expect(element).toHaveClass("marduk-text--variant-primary");
    });

    it("works with custom color when using as prop", () => {
      render(
        <Text as="div" color="#ff0000">
          Test
        </Text>
      );
      const element = screen.getByText("Test");
      expect(element.tagName).toBe("DIV");
      expect(element).toHaveClass("marduk-text--custom-color");
      expect(element).toHaveStyle({ "--marduk-text-custom-color": "#ff0000" });
    });

    it("works with italic and underlined when using as prop", () => {
      render(
        <Text as="span" italic underlined>
          Test
        </Text>
      );
      const element = screen.getByText("Test");
      expect(element.tagName).toBe("SPAN");
      expect(element).toHaveClass("marduk-text--italic");
      expect(element).toHaveClass("marduk-text--underlined");
    });

    it("renders as section with proper props", () => {
      render(
        <Text as="section" id="test-section">
          Section Text
        </Text>
      );
      const section = screen.getByText("Section Text");
      expect(section.tagName).toBe("SECTION");
      expect(section).toHaveAttribute("id", "test-section");
    });

    it("handles onClick when rendered as div", () => {
      const handleClick = jest.fn();
      render(
        <Text as="div" onClick={handleClick}>
          Clickable
        </Text>
      );
      const element = screen.getByText("Clickable");
      element.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Line Height Presets", () => {
    it("does not apply line height class by default", () => {
      render(<Text>Test</Text>);
      const element = screen.getByText("Test");
      expect(element.className).not.toMatch(/marduk-text--line-height-/);
    });

    it.each([
      ["tight", "marduk-text--line-height-tight"],
      ["normal", "marduk-text--line-height-normal"],
      ["relaxed", "marduk-text--line-height-relaxed"],
      ["loose", "marduk-text--line-height-loose"],
    ] as const)("applies %s line height class", (lineHeight, expectedClass) => {
      render(<Text lineHeight={lineHeight}>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(expectedClass);
    });

    it("applies data-line-height attribute", () => {
      render(<Text lineHeight="relaxed">Test</Text>);
      expect(screen.getByText("Test")).toHaveAttribute(
        "data-line-height",
        "relaxed"
      );
    });

    it("does not apply data-line-height when not specified", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).not.toHaveAttribute("data-line-height");
    });
  });

  describe("Text Truncation", () => {
    it("does not truncate by default", () => {
      render(<Text>Test</Text>);
      const element = screen.getByText("Test");
      expect(element).not.toHaveClass("marduk-text--truncate");
      expect(element).not.toHaveClass("marduk-text--clamp");
    });

    it("applies truncate class when truncate is true", () => {
      render(<Text truncate>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--truncate");
    });

    it("applies clamp class when clamp is true", () => {
      render(<Text clamp>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--clamp");
    });

    it("applies default maxLines of 2 when clamp is true", () => {
      render(<Text clamp>Test</Text>);
      const element = screen.getByText("Test");
      expect(element.getAttribute("style")).toContain("--text-max-lines: 2");
    });

    it("applies custom maxLines value", () => {
      render(
        <Text clamp maxLines={3}>
          Test
        </Text>
      );
      const element = screen.getByText("Test");
      expect(element.getAttribute("style")).toContain("--text-max-lines: 3");
    });

    it("applies data-truncate when truncate is true", () => {
      render(<Text truncate>Test</Text>);
      expect(screen.getByText("Test")).toHaveAttribute("data-truncate", "true");
    });

    it("does not apply data-truncate when truncate is false", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).not.toHaveAttribute("data-truncate");
    });

    it("applies data-clamp when clamp is true", () => {
      render(<Text clamp>Test</Text>);
      expect(screen.getByText("Test")).toHaveAttribute("data-clamp", "true");
    });

    it("does not apply data-clamp when clamp is false", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).not.toHaveAttribute("data-clamp");
    });

    it("applies data-max-lines when clamp is true", () => {
      render(
        <Text clamp maxLines={5}>
          Test
        </Text>
      );
      expect(screen.getByText("Test")).toHaveAttribute("data-max-lines", "5");
    });

    it("does not apply data-max-lines when clamp is false", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).not.toHaveAttribute("data-max-lines");
    });
  });

  describe("Letter Spacing", () => {
    it("does not apply spacing class by default", () => {
      render(<Text>Test</Text>);
      const element = screen.getByText("Test");
      expect(element.className).not.toMatch(/marduk-text--spacing-/);
    });

    it.each([
      ["tight", "marduk-text--spacing-tight"],
      ["normal", "marduk-text--spacing-normal"],
      ["wide", "marduk-text--spacing-wide"],
    ] as const)("applies %s spacing class", (spacing, expectedClass) => {
      render(<Text spacing={spacing}>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(expectedClass);
    });

    it("applies data-spacing attribute", () => {
      render(<Text spacing="wide">Test</Text>);
      expect(screen.getByText("Test")).toHaveAttribute("data-spacing", "wide");
    });

    it("does not apply data-spacing when not specified", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).not.toHaveAttribute("data-spacing");
    });
  });

  describe("Underline Decoration", () => {
    it("does not apply underlined by default", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).not.toHaveClass(
        "marduk-text--underlined"
      );
    });

    it("applies underlined class when underlined is true", () => {
      render(<Text underlined>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text--underlined");
    });

    it.each([
      ["solid", "marduk-text--underline-solid"],
      ["double", "marduk-text--underline-double"],
      ["dotted", "marduk-text--underline-dotted"],
      ["dashed", "marduk-text--underline-dashed"],
      ["wavy", "marduk-text--underline-wavy"],
    ] as const)(
      "applies %s underline style",
      (underlineStyle, expectedClass) => {
        render(
          <Text underlined underlineStyle={underlineStyle}>
            Test
          </Text>
        );
        expect(screen.getByText("Test")).toHaveClass(expectedClass);
      }
    );

    it("applies solid underline style by default", () => {
      render(<Text underlined>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-text--underline-solid"
      );
    });

    it("applies data-underlined attribute", () => {
      render(<Text underlined>Test</Text>);
      expect(screen.getByText("Test")).toHaveAttribute(
        "data-underlined",
        "true"
      );
    });

    it("does not apply data-underlined when not underlined", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).not.toHaveAttribute("data-underlined");
    });

    it("applies data-underline-style attribute", () => {
      render(
        <Text underlined underlineStyle="wavy">
          Test
        </Text>
      );
      expect(screen.getByText("Test")).toHaveAttribute(
        "data-underline-style",
        "wavy"
      );
    });

    it("does not apply underline style classes when not underlined", () => {
      render(<Text underlineStyle="wavy">Test</Text>);
      const element = screen.getByText("Test");
      expect(element).not.toHaveClass("marduk-text--underlined");
      expect(element).not.toHaveClass("marduk-text--underline-wavy");
    });
  });

  describe("Feature Combinations", () => {
    it.each([
      [
        "lineHeight",
        { lineHeight: "loose" as const },
        "marduk-text--line-height-loose",
      ],
      ["truncate", { truncate: true }, "marduk-text--truncate"],
      ["spacing", { spacing: "wide" as const }, "marduk-text--spacing-wide"],
      [
        "underlined",
        { underlined: true, underlineStyle: "double" as const },
        "marduk-text--underline-double",
      ],
    ])("%s works with all variants", (_featureName, props, expectedClass) => {
      render(
        <Text variant="primary" {...props}>
          Test
        </Text>
      );
      const element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-text--variant-primary");
      expect(element).toHaveClass(expectedClass);
    });

    it.each([
      [
        "lineHeight",
        { lineHeight: "tight" as const },
        "marduk-text--line-height-tight",
      ],
      ["clamp", { clamp: true, maxLines: 3 }, "marduk-text--clamp"],
      ["spacing", { spacing: "tight" as const }, "marduk-text--spacing-tight"],
      [
        "underlined",
        { underlined: true, underlineStyle: "wavy" as const },
        "marduk-text--underline-wavy",
      ],
    ])(
      "%s works with polymorphic rendering",
      (_featureName, props, expectedClass) => {
        render(
          <Text as="span" {...props}>
            Test
          </Text>
        );
        const element = screen.getByText("Test");
        expect(element.tagName).toBe("SPAN");
        expect(element).toHaveClass(expectedClass);
      }
    );
  });

  describe("CSS Specificity Control", () => {
    it("uses where() for dark mode variant combinations", () => {
      render(
        <Text darkMode variant="primary">
          Test
        </Text>
      );
      const element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-text--dark");
      expect(element).toHaveClass("marduk-text--variant-primary");
    });

    it("allows easy style overrides with simple selectors", () => {
      render(
        <Text className="custom-override" darkMode variant="success">
          Test
        </Text>
      );
      const element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-text--dark");
      expect(element).toHaveClass("marduk-text--variant-success");
      expect(element).toHaveClass("custom-override");
    });

    it("uses where() for custom color selector", () => {
      render(<Text color="#ff0000">Test</Text>);
      const element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-text");
      expect(element).toHaveClass("marduk-text--custom-color");
    });
  });

  describe("Accessibility", () => {
    it("applies marduk-text class for reduced motion targeting", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text");
    });

    it("applies marduk-text class for high contrast targeting", () => {
      render(<Text variant="primary">Test</Text>);
      expect(screen.getByText("Test")).toHaveClass("marduk-text");
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-text--variant-primary"
      );
    });

    it("renders with href for link testing", () => {
      const { container } = render(
        <Text as="a" href="#test">
          Link Text
        </Text>
      );
      const link = container.querySelector("a[href]");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "#test");
    });

    it("applies custom color class for high contrast targeting", () => {
      render(<Text color="#ff0000">Custom</Text>);
      expect(screen.getByText("Custom")).toHaveClass(
        "marduk-text--custom-color"
      );
    });

    it("applies underlined class for high contrast targeting", () => {
      render(<Text underlined>Underlined</Text>);
      expect(screen.getByText("Underlined")).toHaveClass(
        "marduk-text--underlined"
      );
    });

    it("applies variant class for high contrast targeting", () => {
      render(<Text variant="success">Success</Text>);
      expect(screen.getByText("Success")).toHaveClass(
        "marduk-text--variant-success"
      );
    });
  });

  describe("Data Attributes for Testing", () => {
    it.each([
      ["data-variant", { variant: "primary" as const }, "primary"],
      ["data-size", { size: "lg" as const }, "lg"],
      ["data-align", { align: "center" as const }, "center"],
    ])("applies %s attribute", (attrName, props, expectedValue) => {
      render(<Text {...props}>Test</Text>);
      expect(screen.getByText("Test")).toHaveAttribute(attrName, expectedValue);
    });

    it.each([
      ["data-weight", { weight: "bold" as const }, "bold"],
      ["data-line-height", { lineHeight: "relaxed" as const }, "relaxed"],
      ["data-spacing", { spacing: "wide" as const }, "wide"],
      [
        "data-underline-style",
        { underlined: true, underlineStyle: "wavy" as const },
        "wavy",
      ],
    ])(
      "applies %s attribute when specified",
      (attrName, props, expectedValue) => {
        render(<Text {...props}>Test</Text>);
        expect(screen.getByText("Test")).toHaveAttribute(
          attrName,
          expectedValue
        );
      }
    );

    it.each([
      ["data-weight", {}],
      ["data-line-height", {}],
      ["data-spacing", {}],
    ])("does not apply %s when not specified", (attrName, props) => {
      render(<Text {...props}>Test</Text>);
      expect(screen.getByText("Test")).not.toHaveAttribute(attrName);
    });

    it.each([
      ["data-italic", { italic: true }, "true"],
      ["data-dark-mode", { darkMode: true }, "true"],
      ["data-custom-color", { color: "#ff0000" }, "true"],
      ["data-truncate", { truncate: true }, "true"],
      ["data-clamp", { clamp: true }, "true"],
      ["data-underlined", { underlined: true }, "true"],
    ])("applies %s when enabled", (attrName, props, expectedValue) => {
      render(<Text {...props}>Test</Text>);
      expect(screen.getByText("Test")).toHaveAttribute(attrName, expectedValue);
    });

    it.each([
      ["data-italic", { italic: false }],
      ["data-dark-mode", { darkMode: false }],
      ["data-custom-color", {}],
      ["data-truncate", {}],
      ["data-clamp", {}],
      ["data-underlined", {}],
    ])(
      "does not apply %s when disabled or not specified",
      (attrName, props) => {
        render(<Text {...props}>Test</Text>);
        expect(screen.getByText("Test")).not.toHaveAttribute(attrName);
      }
    );

    it("applies data-max-lines when clamp is true", () => {
      render(
        <Text clamp maxLines={5}>
          Test
        </Text>
      );
      expect(screen.getByText("Test")).toHaveAttribute("data-max-lines", "5");
    });

    it("does not apply data-max-lines when clamp is false", () => {
      render(<Text>Test</Text>);
      expect(screen.getByText("Test")).not.toHaveAttribute("data-max-lines");
    });

    it("applies multiple data attributes together", () => {
      render(
        <Text
          variant="success"
          size="xl"
          align="right"
          weight="bold"
          italic
          underlined
          underlineStyle="wavy"
          darkMode
          color="#00ff00"
        >
          Combined
        </Text>
      );
      const element = screen.getByText("Combined");
      expect(element).toHaveAttribute("data-variant", "success");
      expect(element).toHaveAttribute("data-size", "xl");
      expect(element).toHaveAttribute("data-align", "right");
      expect(element).toHaveAttribute("data-weight", "bold");
      expect(element).toHaveAttribute("data-italic", "true");
      expect(element).toHaveAttribute("data-underlined", "true");
      expect(element).toHaveAttribute("data-underline-style", "wavy");
      expect(element).toHaveAttribute("data-dark-mode", "true");
      expect(element).toHaveAttribute("data-custom-color", "true");
    });

    it("applies default data attributes", () => {
      render(<Text>Test</Text>);
      const element = screen.getByText("Test");
      expect(element).toHaveAttribute("data-variant", "default");
      expect(element).toHaveAttribute("data-size", "md");
      expect(element).toHaveAttribute("data-align", "left");
    });
  });
});
