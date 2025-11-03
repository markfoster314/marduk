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
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-title--variant-default"
      );
    });

    it("applies primary variant class", () => {
      render(<Title variant="primary">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-title--variant-primary"
      );
    });

    it("applies secondary variant class", () => {
      render(<Title variant="secondary">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-title--variant-secondary"
      );
    });

    it("applies success variant class", () => {
      render(<Title variant="success">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-title--variant-success"
      );
    });

    it("applies danger variant class", () => {
      render(<Title variant="danger">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-title--variant-danger"
      );
    });
  });

  describe("Alignment", () => {
    it("applies left alignment by default", () => {
      render(<Title>Test</Title>);
      expect(screen.getByText("Test")).toHaveClass("marduk-title--align-left");
    });

    it("applies center alignment class", () => {
      render(<Title align="center">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-title--align-center"
      );
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
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-title--weight-normal"
      );
    });

    it("applies medium weight class", () => {
      render(<Title weight="medium">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-title--weight-medium"
      );
    });

    it("applies semibold weight class", () => {
      render(<Title weight="semibold">Test</Title>);
      expect(screen.getByText("Test")).toHaveClass(
        "marduk-title--weight-semibold"
      );
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
        </Title>
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
        </Title>
      );
      let element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-title--dark");
      expect(element).toHaveClass("marduk-title--variant-primary");

      rerender(
        <Title darkMode variant="success">
          Test
        </Title>
      );
      element = screen.getByText("Test");
      expect(element).toHaveClass("marduk-title--dark");
      expect(element).toHaveClass("marduk-title--variant-success");
    });
  });

  describe("Combined Props", () => {
    it("applies multiple prop classes together", () => {
      render(
        <Title
          level={3}
          variant="primary"
          align="center"
          size="large"
          weight="bold"
        >
          Combined
        </Title>
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
        </Title>
      );
      const element = screen.getByText("Dark Title");
      expect(element).toHaveClass("marduk-title--level-2");
      expect(element).toHaveClass("marduk-title--variant-primary");
      expect(element).toHaveClass("marduk-title--dark");
    });
  });
});
