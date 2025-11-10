import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Badge } from "./Badge";
import { defineBadgePresets, resetCustomPresets } from "./presets";

describe("Badge", () => {
  describe("Rendering", () => {
    it("renders children text", () => {
      render(<Badge>Test badge</Badge>);
      expect(screen.getByText("Test badge")).toBeInTheDocument();
    });

    it("renders as span by default", () => {
      render(<Badge>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge.tagName).toBe("SPAN");
    });

    it("applies base class", () => {
      render(<Badge>Test</Badge>);
      expect(screen.getByText("Test")).toHaveClass("marduk-badge");
    });
  });

  describe("Presets", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    test.each([
      ["primary"],
      ["secondary"],
      ["success"],
      ["warning"],
      ["danger"],
      ["info"],
      ["primaryDark"],
      ["secondaryDark"],
      ["successDark"],
      ["warningDark"],
      ["dangerDark"],
      ["infoDark"],
    ] as const)("applies %s preset correctly", (preset) => {
      render(<Badge preset={[preset]}>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveAttribute("data-preset", preset);
      expect(badge).toHaveClass(`marduk-badge--${preset}`);
    });

    it("props override preset values", () => {
      render(
        <Badge preset={["primary"]} size="large">
          Test
        </Badge>,
      );
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("marduk-badge--size-large");
    });

    it("applies custom preset after defineBadgePresets", () => {
      defineBadgePresets({
        custom: {
          size: "large",
        },
      });
      render(<Badge preset={["custom"]}>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("marduk-badge--size-large");
    });

    it("merges multiple presets in order", () => {
      defineBadgePresets({
        base: { size: "small" },
        override: { size: "large" },
      });
      render(<Badge preset={["base", "override"]}>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("marduk-badge--size-large");
    });

    it("merges style objects from multiple presets (deep merge)", () => {
      defineBadgePresets({
        stylePreset1: {
          style: { textTransform: "uppercase", letterSpacing: "0.05em" },
        },
        stylePreset2: {
          style: { fontWeight: "700" },
        },
      });
      render(<Badge preset={["stylePreset1", "stylePreset2"]}>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveStyle({ textTransform: "uppercase" });
      expect(badge).toHaveStyle({ letterSpacing: "0.05em" });
      expect(badge).toHaveStyle({ fontWeight: "700" });
    });

    it("last preset wins for conflicting style properties", () => {
      defineBadgePresets({
        boldStyle: {
          style: { fontWeight: "bold", fontSize: "14px" },
        },
        normalStyle: {
          style: { fontWeight: "normal" },
        },
      });
      render(<Badge preset={["boldStyle", "normalStyle"]}>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveStyle({ fontWeight: "normal" });
      expect(badge).toHaveStyle({ fontSize: "14px" });
    });
  });

  describe("Sizes", () => {
    test.each(["small", "medium", "large"] as const)("applies %s size class", (size) => {
      render(<Badge size={size}>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass(`marduk-badge--size-${size}`);
      expect(badge).toHaveAttribute("data-size", size);
    });

    it("applies medium size by default", () => {
      render(<Badge>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("marduk-badge--size-medium");
    });
  });

  describe("Dot Indicator", () => {
    it("renders as dot when dot is true", () => {
      render(<Badge dot>Should not show</Badge>);
      const badge = document.querySelector(".marduk-badge");
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass("marduk-badge--dot");
      expect(badge).toHaveAttribute("data-dot", "true");
      expect(screen.queryByText("Should not show")).not.toBeInTheDocument();
    });

    it("hides children when dot is true", () => {
      render(<Badge dot>Hidden text</Badge>);
      expect(screen.queryByText("Hidden text")).not.toBeInTheDocument();
    });

    it("applies accessible label for dot", () => {
      render(<Badge dot>Hidden</Badge>);
      const badge = document.querySelector(".marduk-badge");
      expect(badge).toHaveAttribute("role", "status");
      expect(badge).toHaveAttribute("aria-label", "Status indicator");
    });

    it("ignores count when dot is true", () => {
      render(
        <Badge dot count={5}>
          Test
        </Badge>,
      );
      const badge = document.querySelector(".marduk-badge");
      expect(badge).toHaveClass("marduk-badge--dot");
      expect(screen.queryByText("5")).not.toBeInTheDocument();
    });
  });

  describe("Count Display", () => {
    it("displays count when provided", () => {
      render(<Badge count={5}>Ignored</Badge>);
      expect(screen.getByText("5")).toBeInTheDocument();
      expect(screen.queryByText("Ignored")).not.toBeInTheDocument();
    });

    it("displays count of 0", () => {
      render(<Badge count={0}>Ignored</Badge>);
      expect(screen.getByText("0")).toBeInTheDocument();
    });

    it("displays count of 1", () => {
      render(<Badge count={1}>Test</Badge>);
      expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("displays count of 99", () => {
      render(<Badge count={99}>Test</Badge>);
      expect(screen.getByText("99")).toBeInTheDocument();
    });

    it("displays 99+ for count of 100", () => {
      render(<Badge count={100}>Test</Badge>);
      expect(screen.getByText("99+")).toBeInTheDocument();
    });

    it("displays 99+ for count greater than 100", () => {
      render(<Badge count={150}>Test</Badge>);
      expect(screen.getByText("99+")).toBeInTheDocument();
    });

    it("applies count class when count is provided", () => {
      render(<Badge count={5}>Test</Badge>);
      const badge = screen.getByText("5");
      expect(badge).toHaveClass("marduk-badge--count");
    });

    it("applies data-count attribute", () => {
      render(<Badge count={42}>Test</Badge>);
      const badge = screen.getByText("42");
      expect(badge).toHaveAttribute("data-count", "42");
    });

    it("applies accessible role and label for count", () => {
      render(<Badge count={5}>Test</Badge>);
      const badge = screen.getByText("5");
      expect(badge).toHaveAttribute("role", "status");
      expect(badge).toHaveAttribute("aria-label", "5 items");
    });
  });

  describe("Positioning", () => {
    it("applies standalone position by default", () => {
      render(<Badge>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("marduk-badge--position-standalone");
      expect(badge).toHaveAttribute("data-position", "standalone");
    });

    it("applies overlay position class", () => {
      render(<Badge position="overlay">Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("marduk-badge--position-overlay");
      expect(badge).toHaveAttribute("data-position", "overlay");
    });
  });

  describe("Polymorphic Rendering", () => {
    it("renders as span by default", () => {
      render(<Badge>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge.tagName).toBe("SPAN");
    });

    it("renders as div when as='div'", () => {
      render(<Badge as="div">Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge.tagName).toBe("DIV");
    });

    it("renders as custom element", () => {
      render(<Badge as="label">Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge.tagName).toBe("LABEL");
    });

    it("maintains all classes with polymorphic rendering", () => {
      render(
        <Badge as="div" preset={["primary"]} size="large">
          Test
        </Badge>,
      );
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("marduk-badge");
      expect(badge).toHaveClass("marduk-badge--primary");
      expect(badge).toHaveClass("marduk-badge--size-large");
    });
  });

  describe("Custom Styling", () => {
    it("applies custom className", () => {
      render(<Badge className="custom-class">Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("custom-class");
      expect(badge).toHaveClass("marduk-badge");
    });

    it("applies custom inline styles", () => {
      render(<Badge style={{ padding: "10px" }}>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveStyle({ padding: "10px" });
    });

    it("merges preset style with custom style prop", () => {
      render(
        <Badge preset={["primary"]} style={{ fontFamily: "monospace" }}>
          Test
        </Badge>,
      );
      const badge = screen.getByText("Test");
      expect(badge).toHaveStyle({ fontFamily: "monospace" });
    });
  });

  describe("Data Attributes", () => {
    it("includes size and position attributes", () => {
      render(
        <Badge size="small" position="overlay">
          Test
        </Badge>,
      );
      const badge = screen.getByText("Test");
      expect(badge).toHaveAttribute("data-size", "small");
      expect(badge).toHaveAttribute("data-position", "overlay");
    });

    it("includes preset attribute for single preset", () => {
      render(<Badge preset={["primary"]}>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveAttribute("data-preset", "primary");
    });

    it("includes comma-separated preset attribute for multiple presets", () => {
      render(<Badge preset={["primary", "success"]}>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveAttribute("data-preset", "primary,success");
    });
  });

  describe("Additional Props", () => {
    it("forwards additional props", () => {
      render(
        <Badge data-testid="custom-badge" title="Custom title">
          Test
        </Badge>,
      );
      const badge = screen.getByTestId("custom-badge");
      expect(badge).toHaveAttribute("title", "Custom title");
    });
  });

  describe("Combined Features", () => {
    it("combines preset, size, and position", () => {
      render(
        <Badge preset={["success"]} size="large" position="overlay">
          Test
        </Badge>,
      );
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("marduk-badge--success");
      expect(badge).toHaveClass("marduk-badge--size-large");
      expect(badge).toHaveClass("marduk-badge--position-overlay");
    });

    it("combines preset with dot indicator", () => {
      render(
        <Badge preset={["danger"]} dot>
          Hidden
        </Badge>,
      );
      const badge = document.querySelector(".marduk-badge");
      expect(badge).toHaveClass("marduk-badge--danger");
      expect(badge).toHaveClass("marduk-badge--dot");
    });

    it("combines count with overlay positioning", () => {
      render(
        <Badge preset={["primary"]} count={5} position="overlay">
          Test
        </Badge>,
      );
      expect(screen.getByText("5")).toBeInTheDocument();
      const badge = screen.getByText("5");
      expect(badge).toHaveClass("marduk-badge--position-overlay");
    });
  });

  describe("Preset System Functions", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    it("defineBadgePresets adds custom preset", () => {
      defineBadgePresets({
        custom: {
          size: "large",
        },
      });
      render(<Badge preset={["custom"]}>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("marduk-badge--size-large");
    });

    it("custom preset overrides built-in with same name", () => {
      defineBadgePresets({
        primary: {
          size: "small",
        },
      });
      render(<Badge preset={["primary"]}>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("marduk-badge--size-small");
    });

    it("resetCustomPresets clears custom presets", () => {
      defineBadgePresets({
        custom: { size: "large" },
      });
      resetCustomPresets();
      render(<Badge preset={["custom"]}>Test</Badge>);
      const badge = screen.getByText("Test");
      expect(badge).not.toHaveClass("marduk-badge--size-large");
    });
  });
});
