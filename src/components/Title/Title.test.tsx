import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Title } from "./Title";

describe("Title", () => {
  describe("Rendering", () => {
    it("renders children text", () => {
      render(<Title>Test Title</Title>);
      expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("renders as h1 by default", () => {
      render(<Title>Heading</Title>);
      const heading = screen.getByText("Heading");
      expect(heading.tagName).toBe("H1");
    });
  });

  describe("Heading Levels", () => {
    it("renders as h1 when level is 1", () => {
      render(<Title level={1}>Level 1</Title>);
      expect(screen.getByText("Level 1").tagName).toBe("H1");
    });

    it("renders as h2 when level is 2", () => {
      render(<Title level={2}>Level 2</Title>);
      expect(screen.getByText("Level 2").tagName).toBe("H2");
    });

    it("renders as h3 when level is 3", () => {
      render(<Title level={3}>Level 3</Title>);
      expect(screen.getByText("Level 3").tagName).toBe("H3");
    });

    it("renders as h4 when level is 4", () => {
      render(<Title level={4}>Level 4</Title>);
      expect(screen.getByText("Level 4").tagName).toBe("H4");
    });

    it("renders as h5 when level is 5", () => {
      render(<Title level={5}>Level 5</Title>);
      expect(screen.getByText("Level 5").tagName).toBe("H5");
    });

    it("renders as h6 when level is 6", () => {
      render(<Title level={6}>Level 6</Title>);
      expect(screen.getByText("Level 6").tagName).toBe("H6");
    });

    it("applies level class", () => {
      render(<Title level={2}>Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--level-2");
    });
  });

  describe("Variants", () => {
    it("applies default variant by default", () => {
      render(<Title>Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--variant-default");
    });

    it("applies primary variant class", () => {
      render(<Title variant="primary">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--variant-primary");
    });

    it("applies secondary variant class", () => {
      render(<Title variant="secondary">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--variant-secondary");
    });

    it("applies success variant class", () => {
      render(<Title variant="success">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--variant-success");
    });

    it("applies warning variant class", () => {
      render(<Title variant="warning">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--variant-warning");
    });

    it("applies danger variant class", () => {
      render(<Title variant="danger">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--variant-danger");
    });
  });

  describe("Alignment", () => {
    it("applies left alignment by default", () => {
      render(<Title>Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--align-left");
    });

    it("applies center alignment class", () => {
      render(<Title align="center">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--align-center");
    });

    it("applies right alignment class", () => {
      render(<Title align="right">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--align-right");
    });
  });

  describe("Size Overrides", () => {
    it("does not apply size class when not specified", () => {
      render(<Title>Test</Title>);
      const element = screen.getByText("Test");
      expect(element.className).not.toMatch(/marduk-title--size-/);
    });

    it("applies small size class", () => {
      render(<Title size="small">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--size-small");
    });

    it("applies medium size class", () => {
      render(<Title size="medium">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--size-medium");
    });

    it("applies large size class", () => {
      render(<Title size="large">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--size-large");
    });
  });

  describe("Weight Overrides", () => {
    it("does not apply weight class when not specified", () => {
      render(<Title>Test</Title>);
      const element = screen.getByText("Test");
      expect(element.className).not.toMatch(/marduk-title--weight-/);
    });

    it("applies normal weight class", () => {
      render(<Title weight="normal">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--weight-normal");
    });

    it("applies medium weight class", () => {
      render(<Title weight="medium">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--weight-medium");
    });

    it("applies semibold weight class", () => {
      render(<Title weight="semibold">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--weight-semibold");
    });

    it("applies bold weight class", () => {
      render(<Title weight="bold">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--weight-bold");
    });
  });

  describe("Additional Props", () => {
    it("forwards additional props to heading element", () => {
      render(
        <Title data-testid="custom-title" id="main-title">
          Test
        </Title>,
      );
      const title = screen.getByTestId("custom-title");
      expect(title).toHaveAttribute("id", "main-title");
    });

    it("merges custom className with component classes", () => {
      render(<Title className="custom-class">Test</Title>);
      const element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-title");
      expect(element).toHaveClass("custom-class");
    });
  });

  describe("Accessibility", () => {
    it("renders semantic heading elements", () => {
      const { rerender } = render(<Title level={1}>Test</Title>);
      expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();

      rerender(<Title level={2}>Test</Title>);
      expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

      rerender(<Title level={3}>Test</Title>);
      expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
    });

    it("supports aria attributes", () => {
      render(<Title aria-label="Main heading">Test</Title>);
      expect(screen.getByLabelText("Main heading")).toBeInTheDocument();
    });

    it("applies marduk-title class for reduced motion targeting", () => {
      render(<Title>Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title");
    });

    it("applies marduk-title class for high contrast targeting", () => {
      render(<Title variant="primary">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title");
      expect(screen.getByText("Test")).toHaveClass("marduk-title--variant-primary");
    });

    it("renders with href for link testing", () => {
      const { container } = render(
        <Title as="a" href="#test">
          Link Title
        </Title>,
      );
      const link = container.querySelector("a[href]");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "#test");
    });

    it("applies custom color class for high contrast targeting", () => {
      render(<Title color="#ff0000">Custom</Title>);
      expect(screen.getByText("Custom")).toHaveClass("marduk-title--custom-color");
    });

    it("applies underlined class for high contrast targeting", () => {
      render(<Title underlined>Underlined</Title>);
      expect(screen.getByText("Underlined")).toHaveClass("marduk-title--underlined");
    });
  });

  describe("Dark Mode", () => {
    it("does not apply dark mode class by default", () => {
      render(<Title>Test</Title>);
      const element = screen.getByText("Test");
      expect(element).not.toHaveClass("marduk-title--dark");
    });

    it("applies dark mode class when darkMode is true", () => {
      render(<Title darkMode>Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--dark");
    });

    it("does not apply dark mode class when darkMode is false", () => {
      render(<Title darkMode={false}>Test</Title>);
      expect(screen.getByText("Test")).not.toHaveClass("marduk-title--dark");
    });

    it("works with all variants in dark mode", () => {
      const { rerender } = render(
        <Title darkMode variant="primary">
          Test
        </Title>,
      );
      let element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-title--dark");
      expect(element).toHaveClass("marduk-title--variant-primary");

      rerender(
        <Title darkMode variant="success">
          Test
        </Title>,
      );
      element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-title--dark");
      expect(element).toHaveClass("marduk-title--variant-success");
    });
  });

  describe("Color Prop", () => {
    it("applies custom color class and CSS variable", () => {
      render(<Title color="#ff0000">Test</Title>);
      const title = screen.getByText("Test");
      expect(title).toHaveClass("marduk-title--custom-color");
      expect(title).toHaveStyle({ "--marduk-title-custom-color": "#ff0000" });
    });

    it("works with CSS variables", () => {
      render(<Title color="var(--marduk-color-primary-500)">Test</Title>);
      const title = screen.getByText("Test");
      expect(title).toHaveClass("marduk-title--custom-color");
      expect(title).toHaveStyle({
        "--marduk-title-custom-color": "var(--marduk-color-primary-500)",
      });
    });

    it("does not apply custom color class when color prop is not provided", () => {
      render(<Title>Test</Title>);
      const title = screen.getByText("Test");
      expect(title).not.toHaveClass("marduk-title--custom-color");
      expect(title.getAttribute("style")).toBeNull();
    });

    it("merges with existing style prop", () => {
      render(
        <Title color="#ff0000" style={{ fontSize: "20px" }}>
          Test
        </Title>,
      );
      const title = screen.getByText("Test");
      expect(title).toHaveClass("marduk-title--custom-color");
      expect(title).toHaveStyle({
        "--marduk-title-custom-color": "#ff0000",
        fontSize: "20px",
      });
    });

    it("applies custom color class alongside variant class", () => {
      render(
        <Title variant="primary" color="#00ff00">
          Test
        </Title>,
      );
      const title = screen.getByText("Test");
      expect(title).toHaveClass("marduk-title--variant-primary");
      expect(title).toHaveClass("marduk-title--custom-color");
      expect(title).toHaveStyle({ "--marduk-title-custom-color": "#00ff00" });
    });

    it("applies RGB color values", () => {
      render(<Title color="rgb(255, 100, 50)">Test</Title>);
      const title = screen.getByText("Test");
      expect(title).toHaveClass("marduk-title--custom-color");
      expect(title).toHaveStyle({
        "--marduk-title-custom-color": "rgb(255, 100, 50)",
      });
    });

    it("applies named colors", () => {
      render(<Title color="rebeccapurple">Test</Title>);
      const title = screen.getByText("Test");
      expect(title).toHaveClass("marduk-title--custom-color");
      expect(title).toHaveStyle({
        "--marduk-title-custom-color": "rebeccapurple",
      });
    });

    it("works with all heading levels", () => {
      const { rerender } = render(
        <Title level={1} color="#ff0000">
          Test
        </Title>,
      );
      let title = screen.getByRole("heading", { level: 1 });
      expect(title).toHaveClass("marduk-title--custom-color");
      expect(title).toHaveStyle({ "--marduk-title-custom-color": "#ff0000" });

      rerender(
        <Title level={6} color="#00ff00">
          Test
        </Title>,
      );
      title = screen.getByRole("heading", { level: 6 });
      expect(title).toHaveClass("marduk-title--custom-color");
      expect(title).toHaveStyle({ "--marduk-title-custom-color": "#00ff00" });
    });
  });

  describe("Combined Props", () => {
    it("applies multiple prop classes together", () => {
      render(
        <Title level={3} variant="primary" align="center" size="large" weight="bold">
          Combined
        </Title>,
      );
      const element = screen.getByText("Combined");
      expect(element).toHaveClass("marduk-title--level-3");
      expect(element).toHaveClass("marduk-title--variant-primary");
      expect(element).toHaveClass("marduk-title--align-center");
      expect(element).toHaveClass("marduk-title--size-large");
      expect(element).toHaveClass("marduk-title--weight-bold");
    });

    it("applies dark mode with other props", () => {
      render(
        <Title level={2} variant="primary" darkMode>
          Dark Title
        </Title>,
      );
      const element = screen.getByText("Dark Title");
      expect(element).toHaveClass("marduk-title--level-2");
      expect(element).toHaveClass("marduk-title--variant-primary");
      expect(element).toHaveClass("marduk-title--dark");
    });
  });

  describe("Data Attributes for Testing", () => {
    it("applies data-level attribute", () => {
      render(<Title level={3}>Test</Title>);
      expect(screen.getByText("Test")).toHaveAttribute("data-level", "3");
    });

    it("applies data-variant attribute", () => {
      render(<Title variant="primary">Test</Title>);
      expect(screen.getByText("Test")).toHaveAttribute("data-variant", "primary");
    });

    it("applies data-align attribute", () => {
      render(<Title align="center">Test</Title>);
      expect(screen.getByText("Test")).toHaveAttribute("data-align", "center");
    });

    it("applies data-size when size is specified", () => {
      render(<Title size="large">Test</Title>);
      expect(screen.getByText("Test")).toHaveAttribute("data-size", "large");
    });

    it("does not apply data-size when size is not specified", () => {
      render(<Title>Test</Title>);
      expect(screen.getByText("Test")).not.toHaveAttribute("data-size");
    });

    it("applies data-weight when weight is specified", () => {
      render(<Title weight="bold">Test</Title>);
      expect(screen.getByText("Test")).toHaveAttribute("data-weight", "bold");
    });

    it("does not apply data-weight when weight is not specified", () => {
      render(<Title>Test</Title>);
      expect(screen.getByText("Test")).not.toHaveAttribute("data-weight");
    });

    it("applies data-dark-mode when darkMode is true", () => {
      render(<Title darkMode>Test</Title>);
      expect(screen.getByText("Test")).toHaveAttribute("data-dark-mode", "true");
    });

    it("does not apply data-dark-mode when darkMode is false", () => {
      render(<Title darkMode={false}>Test</Title>);
      expect(screen.getByText("Test")).not.toHaveAttribute("data-dark-mode");
    });

    it("applies data-custom-color when color prop is provided", () => {
      render(<Title color="#ff0000">Test</Title>);
      expect(screen.getByText("Test")).toHaveAttribute("data-custom-color", "true");
    });

    it("does not apply data-custom-color when color prop is not provided", () => {
      render(<Title>Test</Title>);
      expect(screen.getByText("Test")).not.toHaveAttribute("data-custom-color");
    });

    it("applies multiple data attributes together", () => {
      render(
        <Title
          level={2}
          variant="success"
          align="right"
          size="small"
          weight="semibold"
          darkMode
          color="#00ff00"
        >
          Full Test
        </Title>,
      );
      const element = screen.getByText("Full Test");
      expect(element).toHaveAttribute("data-level", "2");
      expect(element).toHaveAttribute("data-variant", "success");
      expect(element).toHaveAttribute("data-align", "right");
      expect(element).toHaveAttribute("data-size", "small");
      expect(element).toHaveAttribute("data-weight", "semibold");
      expect(element).toHaveAttribute("data-dark-mode", "true");
      expect(element).toHaveAttribute("data-custom-color", "true");
    });

    it("applies default data attributes", () => {
      render(<Title>Default</Title>);
      const element = screen.getByText("Default");
      expect(element).toHaveAttribute("data-level", "1");
      expect(element).toHaveAttribute("data-variant", "default");
      expect(element).toHaveAttribute("data-align", "left");
    });
  });

  describe("Polymorphic Component (as prop)", () => {
    it("renders as h1 by default", () => {
      const { container } = render(<Title>Default</Title>);
      expect(container.querySelector("h1")).toBeInTheDocument();
      expect(screen.getByText("Default").tagName).toBe("H1");
    });

    it("renders as specified heading level when no as prop", () => {
      const { container } = render(<Title level={3}>Level 3</Title>);
      expect(container.querySelector("h3")).toBeInTheDocument();
      expect(screen.getByText("Level 3").tagName).toBe("H3");
    });

    it("renders as div when as='div'", () => {
      const { container } = render(
        <Title as="div" level={2}>
          Div Title
        </Title>,
      );
      expect(container.querySelector("div.marduk-title")).toBeInTheDocument();
      expect(screen.getByText("Div Title").tagName).toBe("DIV");
    });

    it("renders as span when as='span'", () => {
      const { container } = render(
        <Title as="span" level={4}>
          Span Title
        </Title>,
      );
      expect(container.querySelector("span.marduk-title")).toBeInTheDocument();
      expect(screen.getByText("Span Title").tagName).toBe("SPAN");
    });

    it("renders as p when as='p'", () => {
      const { container } = render(
        <Title as="p" level={3}>
          Paragraph Title
        </Title>,
      );
      expect(container.querySelector("p.marduk-title")).toBeInTheDocument();
      expect(screen.getByText("Paragraph Title").tagName).toBe("P");
    });

    it("adds aria-level and role when using non-heading element", () => {
      render(
        <Title as="div" level={2}>
          Non-Heading
        </Title>,
      );
      const element = screen.getByText("Non-Heading");
      expect(element).toHaveAttribute("aria-level", "2");
      expect(element).toHaveAttribute("role", "heading");
    });

    it("does not add aria-level for semantic heading elements", () => {
      render(<Title level={2}>Semantic</Title>);
      const element = screen.getByText("Semantic");
      expect(element).not.toHaveAttribute("aria-level");
      expect(element).not.toHaveAttribute("role");
    });

    it("applies all styling classes when using as prop", () => {
      render(
        <Title as="div" level={2} variant="primary" align="center" size="large">
          Styled Div
        </Title>,
      );
      const element = screen.getByText("Styled Div");
      expect(element).toHaveClass("marduk-title");
      expect(element).toHaveClass("marduk-title--level-2");
      expect(element).toHaveClass("marduk-title--variant-primary");
      expect(element).toHaveClass("marduk-title--align-center");
      expect(element).toHaveClass("marduk-title--size-large");
    });

    it("applies custom className with as prop", () => {
      render(
        <Title as="div" className="custom-class">
          Custom
        </Title>,
      );
      const element = screen.getByText("Custom");
      expect(element).toHaveClass("marduk-title");
      expect(element).toHaveClass("custom-class");
    });

    it("forwards props correctly to polymorphic element", () => {
      render(
        <Title as="div" data-testid="custom-div" id="test-id">
          Test
        </Title>,
      );
      const element = screen.getByTestId("custom-div");
      expect(element).toHaveAttribute("id", "test-id");
    });

    it("works with dark mode when using as prop", () => {
      render(
        <Title as="span" darkMode>
          Dark Span
        </Title>,
      );
      const element = screen.getByText("Dark Span");
      expect(element).toHaveClass("marduk-title--dark");
      expect(element).toHaveAttribute("data-dark-mode", "true");
    });

    it("works with custom color when using as prop", () => {
      render(
        <Title as="p" color="#ff0000">
          Colored Para
        </Title>,
      );
      const element = screen.getByText("Colored Para");
      expect(element).toHaveClass("marduk-title--custom-color");
      expect(element).toHaveStyle({ "--marduk-title-custom-color": "#ff0000" });
    });

    it("maintains level styling when rendering as different element", () => {
      render(
        <Title as="div" level={1}>
          H1 Styled Div
        </Title>,
      );
      const element = screen.getByText("H1 Styled Div");
      expect(element).toHaveClass("marduk-title--level-1");
      expect(element).toHaveAttribute("data-level", "1");
    });

    it("renders as anchor with proper props", () => {
      const { container } = render(
        <Title as="a" href="#section" level={3}>
          Link Title
        </Title>,
      );
      const link = container.querySelector("a");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "#section");
      expect(link).toHaveClass("marduk-title");
    });

    it("respects as prop over level for element selection", () => {
      const { container } = render(
        <Title as="div" level={6}>
          Override
        </Title>,
      );
      expect(container.querySelector("div")).toBeInTheDocument();
      expect(container.querySelector("h6")).not.toBeInTheDocument();
    });
  });

  describe("Text Truncation", () => {
    it("does not truncate by default", () => {
      render(<Title>Normal Title</Title>);
      const element = screen.getByText("Normal Title");
      expect(element).not.toHaveClass("marduk-title--truncate");
      expect(element).not.toHaveClass("marduk-title--clamp");
    });

    it("applies truncate class when truncate is true", () => {
      render(<Title truncate>Truncated Title</Title>);
      const element = screen.getByText("Truncated Title");
      expect(element).toHaveClass("marduk-title--truncate");
    });

    it("applies clamp class when clamp is true", () => {
      render(<Title clamp>Clamped Title</Title>);
      const element = screen.getByText("Clamped Title");
      expect(element).toHaveClass("marduk-title--clamp");
    });

    it("applies default maxLines of 2 when clamp is true", () => {
      render(<Title clamp>Clamped Title</Title>);
      const element = screen.getByText("Clamped Title");
      expect(element.getAttribute("style")).toContain("--title-max-lines: 2");
    });

    it("applies custom maxLines value", () => {
      render(
        <Title clamp maxLines={3}>
          Clamped Title
        </Title>,
      );
      const element = screen.getByText("Clamped Title");
      expect(element.getAttribute("style")).toContain("--title-max-lines: 3");
    });

    it("applies maxLines value of 1", () => {
      render(
        <Title clamp maxLines={1}>
          Single Line Clamp
        </Title>,
      );
      const element = screen.getByText("Single Line Clamp");
      expect(element.getAttribute("style")).toContain("--title-max-lines: 1");
    });

    it("applies maxLines value of 5", () => {
      render(
        <Title clamp maxLines={5}>
          Five Line Clamp
        </Title>,
      );
      const element = screen.getByText("Five Line Clamp");
      expect(element.getAttribute("style")).toContain("--title-max-lines: 5");
    });

    it("does not apply truncate and clamp together", () => {
      render(
        <Title truncate clamp>
          Both Props
        </Title>,
      );
      const element = screen.getByText("Both Props");
      expect(element).toHaveClass("marduk-title--truncate");
      expect(element).toHaveClass("marduk-title--clamp");
    });

    it("applies data-truncate when truncate is true", () => {
      render(<Title truncate>Truncated</Title>);
      expect(screen.getByText("Truncated")).toHaveAttribute("data-truncate", "true");
    });

    it("does not apply data-truncate when truncate is false", () => {
      render(<Title>Normal</Title>);
      expect(screen.getByText("Normal")).not.toHaveAttribute("data-truncate");
    });

    it("applies data-clamp when clamp is true", () => {
      render(<Title clamp>Clamped</Title>);
      expect(screen.getByText("Clamped")).toHaveAttribute("data-clamp", "true");
    });

    it("does not apply data-clamp when clamp is false", () => {
      render(<Title>Normal</Title>);
      expect(screen.getByText("Normal")).not.toHaveAttribute("data-clamp");
    });

    it("applies data-max-lines when clamp is true", () => {
      render(
        <Title clamp maxLines={4}>
          Clamped
        </Title>,
      );
      expect(screen.getByText("Clamped")).toHaveAttribute("data-max-lines", "4");
    });

    it("does not apply data-max-lines when clamp is false", () => {
      render(<Title>Normal</Title>);
      expect(screen.getByText("Normal")).not.toHaveAttribute("data-max-lines");
    });

    it("works with all variants when truncated", () => {
      render(
        <Title truncate variant="primary">
          Truncated Primary
        </Title>,
      );
      const element = screen.getByText("Truncated Primary");
      expect(element).toHaveClass("marduk-title--truncate");
      expect(element).toHaveClass("marduk-title--variant-primary");
    });

    it("works with all levels when clamped", () => {
      render(
        <Title clamp level={3} maxLines={3}>
          Clamped H3
        </Title>,
      );
      const element = screen.getByText("Clamped H3");
      expect(element).toHaveClass("marduk-title--clamp");
      expect(element).toHaveClass("marduk-title--level-3");
      expect(element.getAttribute("style")).toContain("--title-max-lines: 3");
    });

    it("works with polymorphic rendering", () => {
      render(
        <Title as="div" truncate>
          Truncated Div
        </Title>,
      );
      const element = screen.getByText("Truncated Div");
      expect(element.tagName).toBe("DIV");
      expect(element).toHaveClass("marduk-title--truncate");
    });

    it("works with dark mode", () => {
      render(
        <Title clamp maxLines={2} darkMode>
          Dark Clamped
        </Title>,
      );
      const element = screen.getByText("Dark Clamped");
      expect(element).toHaveClass("marduk-title--clamp");
      expect(element).toHaveClass("marduk-title--dark");
    });
  });

  describe("Letter Spacing", () => {
    it("does not apply spacing class by default", () => {
      render(<Title>Test</Title>);
      const element = screen.getByText("Test");
      expect(element.className).not.toMatch(/marduk-title--spacing-/);
    });

    it("applies tight spacing class", () => {
      render(<Title spacing="tight">Tight</Title>);
      expect(screen.getByText("Tight")).toHaveClass("marduk-title--spacing-tight");
    });

    it("applies normal spacing class", () => {
      render(<Title spacing="normal">Normal</Title>);
      expect(screen.getByText("Normal")).toHaveClass("marduk-title--spacing-normal");
    });

    it("applies wide spacing class", () => {
      render(<Title spacing="wide">Wide</Title>);
      expect(screen.getByText("Wide")).toHaveClass("marduk-title--spacing-wide");
    });

    it("applies data-spacing attribute", () => {
      render(<Title spacing="wide">Test</Title>);
      expect(screen.getByText("Test")).toHaveAttribute("data-spacing", "wide");
    });

    it("does not apply data-spacing when not specified", () => {
      render(<Title>Test</Title>);
      expect(screen.getByText("Test")).not.toHaveAttribute("data-spacing");
    });

    it("works with all variants", () => {
      render(
        <Title spacing="wide" variant="primary">
          Wide Primary
        </Title>,
      );
      const element = screen.getByText("Wide Primary");
      expect(element).toHaveClass("marduk-title--spacing-wide");
      expect(element).toHaveClass("marduk-title--variant-primary");
    });

    it("works with polymorphic rendering", () => {
      render(
        <Title as="div" spacing="tight">
          Tight Div
        </Title>,
      );
      const element = screen.getByText("Tight Div");
      expect(element.tagName).toBe("DIV");
      expect(element).toHaveClass("marduk-title--spacing-tight");
    });
  });

  describe("Underline Decoration", () => {
    it("does not apply underline by default", () => {
      render(<Title>Test</Title>);
      const element = screen.getByText("Test");
      expect(element).not.toHaveClass("marduk-title--underlined");
    });

    it("applies underlined class when underlined is true", () => {
      render(<Title underlined>Underlined</Title>);
      expect(screen.getByText("Underlined")).toHaveClass("marduk-title--underlined");
    });

    it("applies solid underline style by default", () => {
      render(<Title underlined>Solid</Title>);
      const element = screen.getByText("Solid");
      expect(element).toHaveClass("marduk-title--underlined");
      expect(element).toHaveClass("marduk-title--underline-solid");
    });

    it("applies double underline style", () => {
      render(
        <Title underlined underlineStyle="double">
          Double
        </Title>,
      );
      const element = screen.getByText("Double");
      expect(element).toHaveClass("marduk-title--underlined");
      expect(element).toHaveClass("marduk-title--underline-double");
    });

    it("applies dotted underline style", () => {
      render(
        <Title underlined underlineStyle="dotted">
          Dotted
        </Title>,
      );
      const element = screen.getByText("Dotted");
      expect(element).toHaveClass("marduk-title--underlined");
      expect(element).toHaveClass("marduk-title--underline-dotted");
    });

    it("applies dashed underline style", () => {
      render(
        <Title underlined underlineStyle="dashed">
          Dashed
        </Title>,
      );
      const element = screen.getByText("Dashed");
      expect(element).toHaveClass("marduk-title--underlined");
      expect(element).toHaveClass("marduk-title--underline-dashed");
    });

    it("applies wavy underline style", () => {
      render(
        <Title underlined underlineStyle="wavy">
          Wavy
        </Title>,
      );
      const element = screen.getByText("Wavy");
      expect(element).toHaveClass("marduk-title--underlined");
      expect(element).toHaveClass("marduk-title--underline-wavy");
    });

    it("applies data-underlined attribute", () => {
      render(<Title underlined>Test</Title>);
      expect(screen.getByText("Test")).toHaveAttribute("data-underlined", "true");
    });

    it("does not apply data-underlined when not underlined", () => {
      render(<Title>Test</Title>);
      expect(screen.getByText("Test")).not.toHaveAttribute("data-underlined");
    });

    it("applies data-underline-style attribute", () => {
      render(
        <Title underlined underlineStyle="wavy">
          Test
        </Title>,
      );
      expect(screen.getByText("Test")).toHaveAttribute("data-underline-style", "wavy");
    });

    it("does not apply underline style classes when not underlined", () => {
      render(<Title underlineStyle="wavy">Test</Title>);
      const element = screen.getByText("Test");
      expect(element).not.toHaveClass("marduk-title--underlined");
      expect(element).not.toHaveClass("marduk-title--underline-wavy");
    });

    it("works with all variants", () => {
      render(
        <Title underlined underlineStyle="wavy" variant="primary">
          Underlined Primary
        </Title>,
      );
      const element = screen.getByText("Underlined Primary");
      expect(element).toHaveClass("marduk-title--underlined");
      expect(element).toHaveClass("marduk-title--underline-wavy");
      expect(element).toHaveClass("marduk-title--variant-primary");
    });

    it("works with custom colors", () => {
      render(
        <Title underlined underlineStyle="double" color="#ff0000">
          Underlined Custom
        </Title>,
      );
      const element = screen.getByText("Underlined Custom");
      expect(element).toHaveClass("marduk-title--underlined");
      expect(element).toHaveClass("marduk-title--underline-double");
      expect(element).toHaveClass("marduk-title--custom-color");
    });

    it("works with polymorphic rendering", () => {
      render(
        <Title as="div" underlined underlineStyle="dashed">
          Underlined Div
        </Title>,
      );
      const element = screen.getByText("Underlined Div");
      expect(element.tagName).toBe("DIV");
      expect(element).toHaveClass("marduk-title--underlined");
      expect(element).toHaveClass("marduk-title--underline-dashed");
    });
  });

  describe("Combined Features", () => {
    it("combines spacing and underline", () => {
      render(
        <Title spacing="wide" underlined underlineStyle="wavy">
          Combined
        </Title>,
      );
      const element = screen.getByText("Combined");
      expect(element).toHaveClass("marduk-title--spacing-wide");
      expect(element).toHaveClass("marduk-title--underlined");
      expect(element).toHaveClass("marduk-title--underline-wavy");
    });

    it("combines truncation with spacing", () => {
      render(
        <Title truncate spacing="tight">
          Truncated Tight
        </Title>,
      );
      const element = screen.getByText("Truncated Tight");
      expect(element).toHaveClass("marduk-title--truncate");
      expect(element).toHaveClass("marduk-title--spacing-tight");
    });

    it("combines all typography features", () => {
      render(
        <Title
          level={2}
          variant="primary"
          spacing="wide"
          underlined
          underlineStyle="wavy"
          weight="bold"
          size="large"
        >
          All Features
        </Title>,
      );
      const element = screen.getByText("All Features");
      expect(element).toHaveClass("marduk-title--level-2");
      expect(element).toHaveClass("marduk-title--variant-primary");
      expect(element).toHaveClass("marduk-title--spacing-wide");
      expect(element).toHaveClass("marduk-title--underlined");
      expect(element).toHaveClass("marduk-title--underline-wavy");
      expect(element).toHaveClass("marduk-title--weight-bold");
      expect(element).toHaveClass("marduk-title--size-large");
    });
  });
});
