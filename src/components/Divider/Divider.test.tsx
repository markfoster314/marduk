import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Divider } from "./Divider";
import { defineDividerPresets, resetCustomPresets } from "./presets";

describe("Divider", () => {
  describe("Core", () => {
    it("renders with base class and default orientation", () => {
      render(<Divider />);
      const divider = screen.getByRole("separator");
      expect(divider).toBeInTheDocument();
      expect(divider.tagName).toBe("HR");
      expect(divider).toHaveClass("marduk-divider");
      expect(divider).toHaveClass("marduk-divider--horizontal");
      expect(divider).toHaveClass("marduk-divider--medium");
    });
  });

  describe("Props", () => {
    test.each([
      ["horizontal", "marduk-divider--horizontal"],
      ["vertical", "marduk-divider--vertical"],
    ] as const)("applies %s orientation", (orientation, expectedClass) => {
      render(<Divider orientation={orientation} />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveClass(expectedClass);
      expect(divider).toHaveAttribute("data-orientation", orientation);
    });

    test.each([
      ["thin", "marduk-divider--thin"],
      ["medium", "marduk-divider--medium"],
      ["thick", "marduk-divider--thick"],
    ] as const)("applies %s thickness", (thickness, expectedClass) => {
      render(<Divider thickness={thickness} />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveClass(expectedClass);
      expect(divider).toHaveAttribute("data-thickness", thickness);
    });

    it("applies none spacing", () => {
      render(<Divider spacing="none" />);
      const divider = screen.getByRole("separator");
      expect(divider).not.toHaveAttribute("data-spacing");
    });

    test.each([
      ["small", "marduk-divider--spacing-small"],
      ["medium", "marduk-divider--spacing-medium"],
      ["large", "marduk-divider--spacing-large"],
    ] as const)("applies %s spacing", (spacing, expectedClass) => {
      render(<Divider spacing={spacing} />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveClass(expectedClass);
      expect(divider).toHaveAttribute("data-spacing", spacing);
    });

    it("displays label when provided", () => {
      render(<Divider label="Section" />);
      expect(screen.getByText("Section")).toBeInTheDocument();
      expect(screen.getByText("Section")).toHaveClass("marduk-divider__label");
    });

    it("displays ReactNode label", () => {
      render(
        <Divider
          label={
            <span data-testid="custom-label">
              Custom <strong>Label</strong>
            </span>
          }
        />,
      );
      expect(screen.getByTestId("custom-label")).toBeInTheDocument();
      expect(screen.getByTestId("custom-label").parentElement).toHaveClass("marduk-divider__label");
    });

    it("handles empty string label", () => {
      render(<Divider label="" />);
      // Empty string is falsy, so wrapper should not be created
      const wrapper = document.querySelector(".marduk-divider-wrapper");
      // The component treats empty string as falsy, so no wrapper is created
      // Instead, it renders as a normal divider
      const divider = screen.getByRole("separator");
      expect(divider).toBeInTheDocument();
      expect(wrapper).not.toBeInTheDocument();
    });

    it("handles very long label", () => {
      const longLabel = "A".repeat(100);
      render(<Divider label={longLabel} />);
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });

    it("wraps divider with label in wrapper", () => {
      render(<Divider label="Section" />);
      const wrapper = document.querySelector(".marduk-divider-wrapper");
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveAttribute("role", "separator");
    });

    it("applies style prop correctly", () => {
      render(
        <Divider
          style={
            {
              "--divider-color": "#ff0000",
              opacity: "0.5",
            } as React.CSSProperties
          }
        />,
      );
      const divider = screen.getByRole("separator");
      expect(divider).toHaveStyle({ opacity: "0.5", "--divider-color": "#ff0000" });
    });

    it("merges style prop with preset styles", () => {
      defineDividerPresets({
        custom: {
          style: {
            "--divider-color": "blue",
          } as React.CSSProperties,
        },
      });
      render(
        <Divider
          preset={["custom"]}
          style={
            {
              "--divider-thickness": "5px",
            } as React.CSSProperties
          }
        />,
      );
      const divider = screen.getByRole("separator");
      expect(divider).toHaveStyle({ "--divider-color": "blue", "--divider-thickness": "5px" });
    });
  });

  describe("Presets", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    test.each([["subtle"], ["bold"], ["primary"], ["dark"]] as const)(
      "applies %s preset",
      (preset) => {
        render(<Divider preset={[preset]} />);
        const divider = screen.getByRole("separator");
        expect(divider).toHaveAttribute("data-preset", preset);
        expect(divider).toHaveClass(`marduk-divider--${preset}`);
      },
    );

    it("props override presets", () => {
      render(<Divider preset={["subtle"]} thickness="thick" />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveClass("marduk-divider--thick");
    });

    it("merges multiple presets", () => {
      defineDividerPresets({
        base: { thickness: "thin" },
        override: { thickness: "thick" },
      });
      render(<Divider preset={["base", "override"]} />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveClass("marduk-divider--thick");
    });

    it("deep merges style objects from presets", () => {
      defineDividerPresets({
        style1: { style: { opacity: "0.8" } as React.CSSProperties },
        style2: { style: { "--divider-color": "red" } as React.CSSProperties },
      });
      render(<Divider preset={["style1", "style2"]} />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveStyle({ opacity: "0.8" });
      expect(divider).toHaveStyle({ "--divider-color": "red" } as Record<string, string>);
    });

    it("supports custom presets", () => {
      defineDividerPresets({ premium: { thickness: "thick" } });
      render(<Divider preset={["premium"]} />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveClass("marduk-divider--thick");
    });

    it("preset spacing is overridden by prop", () => {
      defineDividerPresets({
        custom: { spacing: "small" },
      });
      render(<Divider preset={["custom"]} spacing="large" />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveClass("marduk-divider--spacing-large");
      expect(divider).not.toHaveClass("marduk-divider--spacing-small");
    });

    it("preset orientation is overridden by prop", () => {
      defineDividerPresets({
        custom: { orientation: "vertical" },
      });
      render(<Divider preset={["custom"]} orientation="horizontal" />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveClass("marduk-divider--horizontal");
      expect(divider).not.toHaveClass("marduk-divider--vertical");
    });

    it("handles preset with label", () => {
      defineDividerPresets({
        custom: { thickness: "thick" },
      });
      render(<Divider preset={["custom"]} label="Test" />);
      const wrapper = document.querySelector(".marduk-divider-wrapper");
      expect(wrapper).toBeInTheDocument();
      const dividers = wrapper?.querySelectorAll(".marduk-divider");
      expect(dividers).toHaveLength(2);
      dividers?.forEach((divider) => {
        expect(divider).toHaveClass("marduk-divider--thick");
      });
    });
  });

  describe("Polymorphic", () => {
    it("renders as custom element", () => {
      render(<Divider as="div" />);
      expect(screen.getByRole("separator").tagName).toBe("DIV");
    });

    it("renders as span element", () => {
      render(<Divider as="span" />);
      expect(screen.getByRole("separator").tagName).toBe("SPAN");
    });

    it("maintains all classes with polymorphic rendering", () => {
      render(<Divider as="div" preset={["primary"]} thickness="thick" />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveClass("marduk-divider");
      expect(divider).toHaveClass("marduk-divider--primary");
      expect(divider).toHaveClass("marduk-divider--thick");
    });

    it("polymorphic element works with label", () => {
      render(<Divider as="div" label="Test" />);
      const wrapper = document.querySelector(".marduk-divider-wrapper");
      expect(wrapper).toBeInTheDocument();
      const dividers = wrapper?.querySelectorAll(".marduk-divider");
      expect(dividers?.[0]?.tagName).toBe("DIV");
      expect(dividers?.[1]?.tagName).toBe("DIV");
    });
  });

  describe("Edge Cases", () => {
    it("forwards props and className", () => {
      render(<Divider data-testid="divider" className="custom" />);
      const divider = screen.getByTestId("divider");
      expect(divider).toHaveClass("custom");
    });

    it("forwards data attributes", () => {
      render(<Divider data-custom="value" />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveAttribute("data-custom", "value");
    });

    it("combines all features together", () => {
      render(
        <Divider preset={["primary"]} orientation="vertical" thickness="thick" spacing="large" />,
      );
      const divider = screen.getByRole("separator");
      expect(divider).toHaveClass("marduk-divider--primary");
      expect(divider).toHaveClass("marduk-divider--vertical");
      expect(divider).toHaveClass("marduk-divider--thick");
      expect(divider).toHaveClass("marduk-divider--spacing-large");
    });

    it("handles empty preset array", () => {
      render(<Divider preset={[]} />);
      const divider = screen.getByRole("separator");
      expect(divider).toBeInTheDocument();
      expect(divider).toHaveClass("marduk-divider");
    });

    it("handles undefined preset gracefully", () => {
      render(<Divider />);
      const divider = screen.getByRole("separator");
      expect(divider).toBeInTheDocument();
    });

    it("handles className with label", () => {
      render(<Divider label="Test" className="custom-wrapper" />);
      const wrapper = document.querySelector(".marduk-divider-wrapper");
      // Note: className goes to the divider elements, not wrapper
      const dividers = wrapper?.querySelectorAll(".marduk-divider");
      expect(dividers?.[0]).toHaveClass("custom-wrapper");
    });
  });

  describe("Accessibility", () => {
    it("applies separator role", () => {
      render(<Divider />);
      const divider = screen.getByRole("separator");
      expect(divider).toBeInTheDocument();
    });

    it("applies separator role to wrapper when label is present", () => {
      render(<Divider label="Section" />);
      const wrapper = document.querySelector(".marduk-divider-wrapper");
      expect(wrapper).toHaveAttribute("role", "separator");
    });

    it("applies aria-label when label is string", () => {
      render(<Divider label="Section divider" />);
      const wrapper = document.querySelector(".marduk-divider-wrapper");
      expect(wrapper).toHaveAttribute("aria-label", "Section divider");
    });

    it("does not apply aria-label when label is ReactNode", () => {
      render(<Divider label={<span>Custom</span>} />);
      const wrapper = document.querySelector(".marduk-divider-wrapper");
      expect(wrapper).not.toHaveAttribute("aria-label");
    });

    it("applies separator role to polymorphic elements", () => {
      render(<Divider as="div" />);
      const divider = screen.getByRole("separator");
      expect(divider.tagName).toBe("DIV");
    });
  });

  describe("Data Attributes", () => {
    it("includes data-orientation attribute", () => {
      render(<Divider orientation="vertical" />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveAttribute("data-orientation", "vertical");
    });

    it("includes data-thickness attribute", () => {
      render(<Divider thickness="thick" />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveAttribute("data-thickness", "thick");
    });

    it("includes data-spacing attribute when not none", () => {
      render(<Divider spacing="large" />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveAttribute("data-spacing", "large");
    });

    it("includes data-preset attribute", () => {
      render(<Divider preset={["primary", "bold"]} />);
      const divider = screen.getByRole("separator");
      expect(divider).toHaveAttribute("data-preset", "primary,bold");
    });

    it("includes data attributes on wrapper when label is present", () => {
      render(<Divider label="Test" orientation="horizontal" thickness="thick" />);
      const wrapper = document.querySelector(".marduk-divider-wrapper");
      expect(wrapper).toHaveAttribute("data-orientation", "horizontal");
      expect(wrapper).toHaveAttribute("data-thickness", "thick");
    });
  });
});
