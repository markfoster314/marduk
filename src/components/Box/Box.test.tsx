import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Box } from "./Box";
import { defineBoxPresets, resetCustomPresets } from "./presets";

describe("Box", () => {
  describe("Rendering", () => {
    it("renders children", () => {
      render(<Box>Test content</Box>);
      expect(screen.getByText("Test content")).toBeInTheDocument();
    });

    it("renders as div by default", () => {
      render(<Box>Test</Box>);
      const element = screen.getByText("Test");
      expect(element.tagName).toBe("DIV");
    });

    it("applies base class", () => {
      render(<Box>Test</Box>);
      expect(screen.getByText("Test")).toHaveClass("marduk-box");
    });
  });

  describe("Polymorphic", () => {
    test.each([
      ["section", "SECTION"],
      ["article", "ARTICLE"],
      ["aside", "ASIDE"],
      ["nav", "NAV"],
    ] as const)("renders as %s element", (element, expectedTag) => {
      render(<Box as={element}>Test</Box>);
      const box = screen.getByText("Test");
      expect(box.tagName).toBe(expectedTag);
    });
  });

  describe("Spacing", () => {
    test.each([
      ["xs", "marduk-box--padding-xs"],
      ["sm", "marduk-box--padding-sm"],
      ["md", "marduk-box--padding-md"],
      ["lg", "marduk-box--padding-lg"],
      ["xl", "marduk-box--padding-xl"],
      ["2xl", "marduk-box--padding-2xl"],
      ["3xl", "marduk-box--padding-3xl"],
    ] as const)("applies %s padding class", (size, expectedClass) => {
      render(<Box padding={size}>Test</Box>);
      expect(screen.getByText("Test")).toHaveClass(expectedClass);
    });

    test.each([
      ["xs", "marduk-box--margin-xs"],
      ["sm", "marduk-box--margin-sm"],
      ["md", "marduk-box--margin-md"],
      ["lg", "marduk-box--margin-lg"],
      ["xl", "marduk-box--margin-xl"],
      ["2xl", "marduk-box--margin-2xl"],
      ["3xl", "marduk-box--margin-3xl"],
    ] as const)("applies %s margin class", (size, expectedClass) => {
      render(<Box margin={size}>Test</Box>);
      expect(screen.getByText("Test")).toHaveClass(expectedClass);
    });
  });

  describe("Display & Flex", () => {
    test.each([
      ["flex", "marduk-box--display-flex"],
      ["grid", "marduk-box--display-grid"],
      ["block", "marduk-box--display-block"],
      ["inline-block", "marduk-box--display-inline-block"],
      ["inline", "marduk-box--display-inline"],
      ["none", "marduk-box--display-none"],
    ] as const)("applies %s display class", (display, expectedClass) => {
      render(<Box display={display}>Test</Box>);
      expect(screen.getByText("Test")).toHaveClass(expectedClass);
    });

    it("applies flex direction, justify, and align", () => {
      render(
        <Box display="flex" direction="column" justify="center" align="center">
          Test
        </Box>,
      );
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box--display-flex");
      expect(box).toHaveClass("marduk-box--flex-column");
      expect(box).toHaveClass("marduk-box--justify-center");
      expect(box).toHaveClass("marduk-box--align-center");
    });

    test.each([
      ["xs", "marduk-box--gap-xs"],
      ["sm", "marduk-box--gap-sm"],
      ["md", "marduk-box--gap-md"],
      ["lg", "marduk-box--gap-lg"],
      ["xl", "marduk-box--gap-xl"],
      ["2xl", "marduk-box--gap-2xl"],
      ["3xl", "marduk-box--gap-3xl"],
    ] as const)("applies %s gap class", (size, expectedClass) => {
      render(
        <Box display="flex" gap={size}>
          Test
        </Box>,
      );
      expect(screen.getByText("Test")).toHaveClass(expectedClass);
    });

    test.each([
      ["nowrap", "marduk-box--wrap-nowrap"],
      ["wrap", "marduk-box--wrap-wrap"],
      ["wrap-reverse", "marduk-box--wrap-wrap-reverse"],
    ] as const)("applies %s wrap class", (wrap, expectedClass) => {
      render(
        <Box display="flex" wrap={wrap}>
          Test
        </Box>,
      );
      expect(screen.getByText("Test")).toHaveClass(expectedClass);
    });
  });

  describe("Dimensions", () => {
    it("applies width prop", () => {
      render(<Box width="200px">Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveStyle({ width: "200px" });
    });

    it("applies height prop", () => {
      render(<Box height="100px">Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveStyle({ height: "100px" });
    });

    it("applies both width and height", () => {
      render(
        <Box width="50%" height="auto">
          Test
        </Box>,
      );
      const box = screen.getByText("Test");
      expect(box).toHaveStyle({ width: "50%", height: "auto" });
    });
  });

  describe("Styling", () => {
    test.each([
      ["sm", "marduk-box--radius-sm"],
      ["md", "marduk-box--radius-md"],
      ["lg", "marduk-box--radius-lg"],
      ["full", "marduk-box--radius-full"],
    ] as const)("applies %s border radius", (radius, expectedClass) => {
      render(<Box borderRadius={radius}>Test</Box>);
      expect(screen.getByText("Test")).toHaveClass(expectedClass);
    });

    it("applies background color", () => {
      render(<Box backgroundColor="#ff0000">Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveStyle({ "--box-bg": "#ff0000" });
    });

    it("applies style prop with CSS variables", () => {
      render(
        <Box
          style={
            {
              "--box-padding": "2rem",
              "--box-bg": "blue",
            } as React.CSSProperties
          }
        >
          Test
        </Box>,
      );
      const box = screen.getByText("Test");
      expect(box).toHaveStyle({
        "--box-padding": "2rem",
        "--box-bg": "blue",
      });
    });

    it("applies custom className", () => {
      render(<Box className="custom-class">Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box");
      expect(box).toHaveClass("custom-class");
    });
  });

  describe("Data Attributes", () => {
    it("includes spacing data attributes", () => {
      render(
        <Box padding="md" margin="lg">
          Test
        </Box>,
      );
      const box = screen.getByText("Test");
      expect(box).toHaveAttribute("data-padding", "md");
      expect(box).toHaveAttribute("data-margin", "lg");
    });

    it("includes display data attributes", () => {
      render(<Box display="flex">Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveAttribute("data-display", "flex");
      expect(box).toHaveAttribute("data-flex", "true");
    });

    it("does not include data-flex when display is not flex", () => {
      render(<Box display="block">Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveAttribute("data-display", "block");
      expect(box).not.toHaveAttribute("data-flex");
    });

    it("includes preset data attribute", () => {
      render(<Box preset={["stack"]}>Test</Box>);
      expect(screen.getByText("Test")).toHaveAttribute("data-preset", "stack");
    });
  });

  describe("Accessibility", () => {
    it("forwards aria attributes", () => {
      render(
        <Box aria-label="Test box" role="region">
          Test
        </Box>,
      );
      const box = screen.getByText("Test");
      expect(box).toHaveAttribute("aria-label", "Test box");
      expect(box).toHaveAttribute("role", "region");
    });

    it("forwards additional props", () => {
      render(<Box data-testid="custom-box">Test</Box>);
      expect(screen.getByTestId("custom-box")).toBeInTheDocument();
    });
  });

  describe("Presets", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    test.each([
      ["stack", "marduk-box--display-flex", "marduk-box--flex-column", "marduk-box--gap-md"],
      ["hstack", "marduk-box--display-flex", "marduk-box--flex-row", "marduk-box--align-center"],
      [
        "center",
        "marduk-box--display-flex",
        "marduk-box--justify-center",
        "marduk-box--align-center",
      ],
      ["card", "marduk-box--padding-lg", "marduk-box--radius-md", undefined],
      ["darkCard", "marduk-box--padding-lg", "marduk-box--radius-md", undefined],
      [
        "spaceBetween",
        "marduk-box--display-flex",
        "marduk-box--justify-between",
        "marduk-box--align-center",
      ],
    ] as const)("applies %s preset correctly", (preset, class1, class2, class3) => {
      render(<Box preset={[preset]}>Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveClass(class1);
      expect(box).toHaveClass(class2);
      if (class3) {
        expect(box).toHaveClass(class3);
      }
      expect(box).toHaveAttribute("data-preset", preset);
    });

    it("props override preset values", () => {
      render(
        <Box preset={["stack"]} gap="xl">
          Test
        </Box>,
      );
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box--gap-xl");
      expect(box).not.toHaveClass("marduk-box--gap-md");
    });

    it("multiple props override multiple preset values", () => {
      render(
        <Box preset={["hstack"]} direction="column" gap="3xl" align="start">
          Test
        </Box>,
      );
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box--flex-column");
      expect(box).toHaveClass("marduk-box--gap-3xl");
      expect(box).toHaveClass("marduk-box--align-start");
      expect(box).not.toHaveClass("marduk-box--flex-row");
      expect(box).not.toHaveClass("marduk-box--gap-md");
      expect(box).not.toHaveClass("marduk-box--align-center");
    });

    it("applies custom preset after defineBoxPresets", () => {
      defineBoxPresets({
        custom: {
          padding: "xl",
          margin: "lg",
          display: "flex",
        },
      });
      render(<Box preset={["custom"]}>Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box--padding-xl");
      expect(box).toHaveClass("marduk-box--margin-lg");
      expect(box).toHaveClass("marduk-box--display-flex");
    });

    it("custom preset overrides built-in preset", () => {
      defineBoxPresets({
        stack: {
          gap: "3xl",
          direction: "row",
        },
      });
      render(<Box preset={["stack"]}>Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box--gap-3xl");
      expect(box).toHaveClass("marduk-box--flex-row");
    });

    it("handles preset with style object", () => {
      render(<Box preset={["grid2"]}>Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box--display-grid");
      expect(box).toHaveStyle({ gridTemplateColumns: "repeat(2, 1fr)" });
    });

    it("merges preset style with custom style prop", () => {
      render(
        <Box preset={["grid3"]} style={{ border: "1px solid red" }}>
          Test
        </Box>,
      );
      const box = screen.getByText("Test");
      expect(box).toHaveStyle({
        gridTemplateColumns: "repeat(3, 1fr)",
        border: "1px solid red",
      });
    });

    it("works with unknown preset name gracefully", () => {
      render(<Box preset={["nonexistent"]}>Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box");
      expect(box).toHaveAttribute("data-preset", "nonexistent");
    });
  });

  describe("Array Presets", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    it("applies single preset in array", () => {
      render(<Box preset={["stack"]}>Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box--display-flex");
      expect(box).toHaveClass("marduk-box--flex-column");
      expect(box).toHaveAttribute("data-preset", "stack");
    });

    it("merges multiple presets left-to-right", () => {
      render(<Box preset={["grid3", "spaceBetween"]}>Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box--display-flex");
      expect(box).toHaveClass("marduk-box--justify-between");
      expect(box).toHaveClass("marduk-box--align-center");
      expect(box).toHaveClass("marduk-box--gap-md");
      expect(box).toHaveStyle({ gridTemplateColumns: "repeat(3, 1fr)" });
    });

    it("merges style objects from multiple presets", () => {
      render(<Box preset={["grid2", "grid3"]}>Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveStyle({ gridTemplateColumns: "repeat(3, 1fr)" });
    });

    it("combines stack with card styling", () => {
      render(<Box preset={["stack", "card"]}>Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box--display-flex");
      expect(box).toHaveClass("marduk-box--flex-column");
      expect(box).toHaveClass("marduk-box--gap-md");
      expect(box).toHaveClass("marduk-box--padding-lg");
      expect(box).toHaveClass("marduk-box--radius-md");
    });

    it("props override merged preset values", () => {
      render(
        <Box preset={["stack", "card"]} gap="xl">
          Test
        </Box>,
      );
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box--gap-xl");
      expect(box).not.toHaveClass("marduk-box--gap-md");
    });

    it("data-preset shows comma-separated list", () => {
      render(<Box preset={["stack", "card", "center"]}>Test</Box>);
      expect(screen.getByText("Test")).toHaveAttribute("data-preset", "stack,card,center");
    });

    it("handles empty array gracefully", () => {
      render(<Box preset={[]}>Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box");
      expect(box).not.toHaveAttribute("data-preset");
    });

    it("skips unknown presets in array", () => {
      render(<Box preset={["stack", "unknown", "card"]}>Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box--display-flex");
      expect(box).toHaveClass("marduk-box--flex-column");
      expect(box).toHaveClass("marduk-box--padding-lg");
    });

    it("order matters for conflicting values", () => {
      render(<Box preset={["card", "hstack"]}>Test</Box>);
      const box = screen.getByText("Test");
      expect(box).toHaveClass("marduk-box--display-flex");
      expect(box).toHaveClass("marduk-box--flex-row");
      expect(box).toHaveClass("marduk-box--padding-lg");
    });
  });
});
