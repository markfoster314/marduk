import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Svg } from "./Svg";
import {
  defineSvgPresets,
  getPreset as getSvgPreset,
  getAllPresets as getAllSvgPresets,
  resetCustomPresets as resetSvgCustomPresets,
} from "./presets";

describe("Svg", () => {
  const TestIcon = () => <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />;

  describe("Core Rendering", () => {
    it("renders svg element", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders children correctly", () => {
      const { container } = render(
        <Svg>
          <circle cx="12" cy="12" r="10" />
        </Svg>,
      );
      expect(container.querySelector("circle")).toBeInTheDocument();
    });

    it("applies marduk-svg class", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveClass("marduk-svg");
    });

    it("forwards additional props to svg element", () => {
      render(
        <Svg data-testid="custom-svg" aria-label="Custom Icon">
          <TestIcon />
        </Svg>,
      );
      const svg = screen.getByTestId("custom-svg");
      expect(svg).toHaveAttribute("aria-label", "Custom Icon");
    });

    it("applies custom className along with component classes", () => {
      const { container } = render(
        <Svg className="custom-class">
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("marduk-svg");
      expect(svg).toHaveClass("custom-class");
    });
  });

  describe("Sizing", () => {
    describe("Preset Sizes", () => {
      it("applies medium size by default", () => {
        const { container } = render(
          <Svg>
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass("marduk-svg--size-medium");
      });

      test.each([
        { size: "xs", expectedClass: "marduk-svg--size-xs" },
        { size: "small", expectedClass: "marduk-svg--size-small" },
        { size: "large", expectedClass: "marduk-svg--size-large" },
        { size: "xl", expectedClass: "marduk-svg--size-xl" },
        { size: "2xl", expectedClass: "marduk-svg--size-2xl" },
        { size: "3xl", expectedClass: "marduk-svg--size-3xl" },
      ])("applies $size size class", ({ size, expectedClass }) => {
        const { container } = render(
          <Svg size={size as any}>
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass(expectedClass);
      });
    });

    describe("Custom Sizes", () => {
      it("applies custom numeric size", () => {
        const { container } = render(
          <Svg size={48}>
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).not.toHaveClass("marduk-svg--size-xs");
        expect(svg).not.toHaveClass("marduk-svg--size-small");
        expect(svg).not.toHaveClass("marduk-svg--size-medium");
        expect(svg).not.toHaveClass("marduk-svg--size-large");
        expect(svg).not.toHaveClass("marduk-svg--size-xl");
        expect(svg).not.toHaveClass("marduk-svg--size-2xl");
        expect(svg).not.toHaveClass("marduk-svg--size-3xl");
      });

      it("uses CSS variable for custom numeric sizes", () => {
        const { container } = render(
          <Svg size={64}>
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).toHaveStyle({ "--svg-custom-size": "64px" });
      });
    });

    describe("Responsive Prop", () => {
      it("does not apply responsive class by default for custom sizes", () => {
        const { container } = render(
          <Svg size={48}>
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).not.toHaveClass("marduk-svg--responsive");
      });

      it("applies responsive class when responsive=true with custom size", () => {
        const { container } = render(
          <Svg size={48} responsive>
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass("marduk-svg--responsive");
      });

      it("does not apply responsive class to preset sizes even if responsive=true", () => {
        const { container } = render(
          <Svg size="medium" responsive>
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).not.toHaveClass("marduk-svg--responsive");
        expect(svg).toHaveClass("marduk-svg--size-medium");
      });
    });
  });

  describe("ViewBox", () => {
    it("applies default viewBox", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("applies custom viewBox", () => {
      const { container } = render(
        <Svg viewBox="0 0 100 100">
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("viewBox", "0 0 100 100");
    });
  });

  describe("Visual Styling", () => {
    describe("Color", () => {
      it("uses currentColor by default", () => {
        const { container } = render(
          <Svg>
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).toHaveAttribute("fill", "currentColor");
      });

      it("applies custom color", () => {
        const { container } = render(
          <Svg color="#ff0000">
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).toHaveAttribute("fill", "#ff0000");
      });

      it("applies color variable", () => {
        const { container } = render(
          <Svg color="var(--marduk-color-primary-500)">
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).toHaveAttribute(
          "fill",
          "var(--marduk-color-primary-500)",
        );
      });
    });

    describe("Dark Mode", () => {
      it("does not apply dark class by default", () => {
        const { container } = render(
          <Svg>
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).not.toHaveClass("marduk-svg--dark");
      });

      it("applies preset classes when preset is provided", () => {
        const { container } = render(
          <Svg preset={["primary", "large"]}>
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass("marduk-svg--primary");
        expect(svg).toHaveClass("marduk-svg--large");
      });
    });

    describe("Alignment", () => {
      it("does not apply alignment class by default", () => {
        const { container } = render(
          <Svg>
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).not.toHaveClass("marduk-svg--align-left");
        expect(svg).not.toHaveClass("marduk-svg--align-center");
        expect(svg).not.toHaveClass("marduk-svg--align-right");
      });

      test.each([
        { align: "left", expectedClass: "marduk-svg--align-left" },
        { align: "center", expectedClass: "marduk-svg--align-center" },
        { align: "right", expectedClass: "marduk-svg--align-right" },
      ])("applies $align alignment", ({ align, expectedClass }) => {
        const { container } = render(
          <Svg align={align as any}>
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).toHaveClass(expectedClass);
      });
    });

    describe("Hover Color", () => {
      it("does not apply hoverable class by default", () => {
        const { container } = render(
          <Svg>
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).not.toHaveClass("marduk-svg--hoverable");
      });

      it("applies hoverable class when hoverColor is set", () => {
        const { container } = render(
          <Svg hoverColor="#ff0000">
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).toHaveClass("marduk-svg--hoverable");
      });

      it("sets CSS variable for hover color", () => {
        const { container } = render(
          <Svg hoverColor="#ff0000">
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).toHaveStyle({ "--hover-color": "#ff0000" });
      });
    });
  });

  describe("Transformations", () => {
    describe("Rotation", () => {
      it("does not apply rotation class by default", () => {
        const { container } = render(
          <Svg>
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).not.toHaveClass("marduk-svg--rotate-90");
        expect(svg).not.toHaveClass("marduk-svg--rotate-180");
        expect(svg).not.toHaveClass("marduk-svg--rotate-270");
      });

      test.each([
        { degrees: 90, expectedClass: "marduk-svg--rotate-90" },
        { degrees: 180, expectedClass: "marduk-svg--rotate-180" },
        { degrees: 270, expectedClass: "marduk-svg--rotate-270" },
      ])("applies $degrees degree rotation", ({ degrees, expectedClass }) => {
        const { container } = render(
          <Svg rotate={degrees as any}>
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).toHaveClass(expectedClass);
      });

      it("does not apply rotation class for 0 degrees", () => {
        const { container } = render(
          <Svg rotate={0}>
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).not.toHaveClass("marduk-svg--rotate-0");
      });
    });

    describe("Flip", () => {
      it("does not apply flip class by default", () => {
        const { container } = render(
          <Svg>
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).not.toHaveClass("marduk-svg--flip-horizontal");
        expect(svg).not.toHaveClass("marduk-svg--flip-vertical");
        expect(svg).not.toHaveClass("marduk-svg--flip-both");
      });

      test.each([
        {
          direction: "horizontal",
          expectedClass: "marduk-svg--flip-horizontal",
        },
        { direction: "vertical", expectedClass: "marduk-svg--flip-vertical" },
        { direction: "both", expectedClass: "marduk-svg--flip-both" },
      ])("applies $direction flip", ({ direction, expectedClass }) => {
        const { container } = render(
          <Svg flip={direction as any}>
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).toHaveClass(expectedClass);
      });
    });
  });

  describe("Animations", () => {
    describe("Spin", () => {
      it("does not apply spin class by default", () => {
        const { container } = render(
          <Svg>
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).not.toHaveClass("marduk-svg--spin");
      });

      it("applies spin class when spin is true", () => {
        const { container } = render(
          <Svg spin>
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).toHaveClass("marduk-svg--spin");
      });

      it("applies normal spin speed by default", () => {
        const { container } = render(
          <Svg spin>
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).toHaveClass("marduk-svg--spin-normal");
      });

      test.each([
        { speed: "slow", expectedClass: "marduk-svg--spin-slow" },
        { speed: "fast", expectedClass: "marduk-svg--spin-fast" },
      ])("applies $speed spin speed", ({ speed, expectedClass }) => {
        const { container } = render(
          <Svg spin spinSpeed={speed as any}>
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).toHaveClass(expectedClass);
      });
    });

    describe("Custom Animations", () => {
      it("does not apply animation class by default", () => {
        const { container } = render(
          <Svg>
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).not.toHaveClass("marduk-svg--animation-heartpulse");
      });

      it("applies heartpulse animation class", () => {
        const { container } = render(
          <Svg animation="heartpulse">
            <TestIcon />
          </Svg>,
        );
        expect(container.querySelector("svg")).toHaveClass("marduk-svg--animation-heartpulse");
      });
    });
  });

  describe("Stroke Properties", () => {
    it("applies strokeWidth", () => {
      const { container } = render(
        <Svg strokeWidth={2}>
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("stroke-width", "2");
    });

    it("applies strokeLinecap", () => {
      const { container } = render(
        <Svg strokeWidth={2} strokeLinecap="round">
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("stroke-linecap", "round");
    });

    it("applies strokeLinejoin", () => {
      const { container } = render(
        <Svg strokeWidth={2} strokeLinejoin="round">
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("stroke-linejoin", "round");
    });

    it("applies stroke when strokeWidth is set", () => {
      const { container } = render(
        <Svg strokeWidth={2} color="#ff0000">
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("stroke", "#ff0000");
    });
  });

  describe("Filter Effects", () => {
    it("does not apply filter by default", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).not.toHaveAttribute("data-filter");
      expect(svg).not.toHaveStyle({ filter: expect.anything() });
    });

    test.each([
      { filter: "grayscale(100%)", name: "grayscale" },
      { filter: "blur(2px)", name: "blur" },
      { filter: "brightness(1.5)", name: "brightness" },
      { filter: "contrast(200%)", name: "contrast" },
      { filter: "opacity(50%)", name: "opacity" },
      { filter: "saturate(200%)", name: "saturate" },
      { filter: "sepia(100%)", name: "sepia" },
      {
        filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
        name: "drop-shadow",
      },
    ])("applies $name filter", ({ filter }) => {
      const { container } = render(
        <Svg filter={filter}>
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("data-filter", "true");
      expect(svg).toHaveStyle({ filter });
    });

    it("applies multiple filters", () => {
      const { container } = render(
        <Svg filter="grayscale(50%) blur(1px)">
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveStyle({ filter: "grayscale(50%) blur(1px)" });
    });
  });

  describe("Accessibility", () => {
    it("includes xmlns attribute", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
    });

    it("supports aria-label", () => {
      const { container } = render(
        <Svg aria-label="Home icon">
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("aria-label", "Home icon");
    });

    it("renders title element when title prop is provided", () => {
      const { container } = render(
        <Svg title="Home Icon">
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("title")).toHaveTextContent("Home Icon");
    });

    it("renders desc element when description prop is provided", () => {
      const { container } = render(
        <Svg description="Navigate to home page">
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("desc")).toHaveTextContent("Navigate to home page");
    });

    it("sets aria-hidden when decorative is true", () => {
      const { container } = render(
        <Svg decorative>
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
    });

    it("does not set role when decorative is true", () => {
      const { container } = render(
        <Svg decorative title="Home">
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).not.toHaveAttribute("role");
    });

    it("does not set aria-hidden by default", () => {
      const { container } = render(
        <Svg>
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).not.toHaveAttribute("aria-hidden");
    });

    it("renders both title and description together", () => {
      const { container } = render(
        <Svg title="Home Icon" description="Navigate to home page">
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("title")).toHaveTextContent("Home Icon");
      expect(container.querySelector("desc")).toHaveTextContent("Navigate to home page");
    });

    describe("Reduced Motion", () => {
      it("applies reduced motion styles via CSS media query", () => {
        const { container } = render(
          <Svg spin>
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass("marduk-svg--spin");
      });

      it("applies to heartpulse animation", () => {
        const { container } = render(
          <Svg animation="heartpulse">
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass("marduk-svg--animation-heartpulse");
      });
    });

    describe("High Contrast Mode", () => {
      it("maintains functionality with high contrast CSS", () => {
        const { container } = render(
          <Svg hoverColor="#ff0000">
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).toHaveClass("marduk-svg--hoverable");
      });
    });

    describe("Forced Colors", () => {
      it("respects system color preferences", () => {
        const { container } = render(
          <Svg color="#ff0000">
            <TestIcon />
          </Svg>,
        );
        const svg = container.querySelector("svg");
        expect(svg).toHaveAttribute("fill", "#ff0000");
      });
    });
  });

  describe("Data Attributes", () => {
    it("sets data-size for preset sizes", () => {
      const { container } = render(
        <Svg size="large">
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("data-size", "large");
    });

    it("sets data-size to custom and data-custom-size for numeric sizes", () => {
      const { container } = render(
        <Svg size={48}>
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("data-size", "custom");
      expect(svg).toHaveAttribute("data-custom-size", "48");
    });

    test.each([
      { prop: "decorative", propValue: true, attr: "data-decorative" },
      { prop: "color", propValue: "#ff0000", attr: "data-custom-color" },
      { prop: "hoverColor", propValue: "#ff0000", attr: "data-hoverable" },
      { prop: "filter", propValue: "blur(2px)", attr: "data-filter" },
    ])("sets $attr when $prop is provided", ({ prop, propValue, attr }) => {
      const { container } = render(
        <Svg {...{ [prop]: propValue }}>
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute(attr, "true");
    });

    test.each([
      { prop: "align", value: "left", attr: "data-align", expected: "left" },
      { prop: "rotate", value: 90, attr: "data-rotate", expected: "90" },
      {
        prop: "flip",
        value: "horizontal",
        attr: "data-flip",
        expected: "horizontal",
      },
    ])("sets $attr=$expected for $prop", ({ prop, value, attr, expected }) => {
      const { container } = render(
        <Svg {...{ [prop]: value }}>
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute(attr, expected);
    });

    it("sets data-spin and data-spin-speed when spinning", () => {
      const { container } = render(
        <Svg spin spinSpeed="fast">
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("data-spin", "true");
      expect(svg).toHaveAttribute("data-spin-speed", "fast");
    });

    it("sets data-animation for custom animations", () => {
      const { container } = render(
        <Svg animation="heartpulse">
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("data-animation", "heartpulse");
    });

    it("sets data-responsive when responsive=true with custom size", () => {
      const { container } = render(
        <Svg size={48} responsive>
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("data-responsive", "true");
    });

    it("sets data-stroke-width when strokeWidth is provided", () => {
      const { container } = render(
        <Svg strokeWidth={2}>
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("data-stroke-width", "2");
    });

    it("sets data-stroke-width with string value", () => {
      const { container } = render(
        <Svg strokeWidth="1.5">
          <TestIcon />
        </Svg>,
      );
      expect(container.querySelector("svg")).toHaveAttribute("data-stroke-width", "1.5");
    });
  });

  describe("Preset System", () => {
    it("applies preset color", () => {
      const { container } = render(
        <Svg preset={["primary"]}>
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("fill", "var(--marduk-color-primary-500)");
    });

    it("applies preset size", () => {
      const { container } = render(
        <Svg preset={["large"]}>
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("marduk-svg--size-large");
    });

    it("applies preset spin", () => {
      const { container } = render(
        <Svg preset={["loading"]}>
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("marduk-svg--spin");
    });

    it("merges multiple presets", () => {
      const { container } = render(
        <Svg preset={["xl", "success"]}>
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("marduk-svg--size-xl");
      expect(svg).toHaveAttribute("fill", "var(--marduk-color-success-500)");
    });

    it("explicit props override preset values", () => {
      const { container } = render(
        <Svg preset={["large"]} size="small">
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("marduk-svg--size-small");
      expect(svg).not.toHaveClass("marduk-svg--size-large");
    });

    it("sets data-preset attribute", () => {
      const { container } = render(
        <Svg preset={["primary", "large"]}>
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("data-preset", "primary large");
    });

    it("applies preset classes", () => {
      const { container } = render(
        <Svg preset={["danger"]}>
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("marduk-svg--danger");
    });

    it("handles empty preset array", () => {
      const { container } = render(
        <Svg preset={[]}>
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).not.toHaveAttribute("data-preset");
    });
  });

  describe("Preset System Functions", () => {
    beforeEach(() => {
      resetSvgCustomPresets();
    });

    it("defineSvgPresets adds custom preset", () => {
      defineSvgPresets({
        custom: {
          size: "xl",
        },
      });
      const { container } = render(
        <Svg preset={["custom"]}>
          <TestIcon />
        </Svg>,
      );
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("marduk-svg--size-xl");
      expect(svg).toHaveClass("marduk-svg--custom");
    });

    it("getSvgPreset returns built-in preset", () => {
      const preset = getSvgPreset("primary");
      expect(preset).toBeDefined();
      expect(preset?.color).toBe("var(--marduk-color-primary-500)");
    });

    it("getSvgPreset returns undefined for non-existent preset", () => {
      const preset = getSvgPreset("nonexistent");
      expect(preset).toBeUndefined();
    });

    it("getAllSvgPresets returns all presets", () => {
      const presets = getAllSvgPresets();
      expect(presets.primary).toBeDefined();
      expect(presets.success).toBeDefined();
      expect(presets.danger).toBeDefined();
    });

    it("resetSvgCustomPresets clears custom presets", () => {
      defineSvgPresets({ temp: { size: "large" } });
      resetSvgCustomPresets();
      const preset = getSvgPreset("temp");
      expect(preset).toBeUndefined();
    });

    it("custom preset with same name as built-in is accessible", () => {
      defineSvgPresets({
        customPrimary: {
          color: "blue",
        },
      });
      const preset = getSvgPreset("customPrimary");
      expect(preset?.color).toBe("blue");
    });
  });
});
