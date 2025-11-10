import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Link } from "./Link";
import { defineLinkPresets, resetCustomPresets } from "./presets";

describe("Link", () => {
  describe("Rendering", () => {
    it("renders children text", () => {
      render(<Link href="/">Test link</Link>);
      expect(screen.getByText("Test link")).toBeInTheDocument();
    });

    it("renders as anchor by default", () => {
      render(<Link href="/">Test link</Link>);
      const link = screen.getByText("Test link").closest("a");
      expect(link).toBeInTheDocument();
      expect(link?.tagName).toBe("A");
    });

    it("applies base class", () => {
      render(<Link href="/">Test link</Link>);
      const link = screen.getByText("Test link").closest("a");
      expect(link).toHaveClass("marduk-link");
    });

    it("applies href attribute", () => {
      render(<Link href="/test">Test link</Link>);
      const link = screen.getByText("Test link").closest("a");
      expect(link).toHaveAttribute("href", "/test");
    });
  });

  describe("Presets", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    test.each([
      ["default"],
      ["primary"],
      ["secondary"],
      ["success"],
      ["danger"],
      ["warning"],
      ["muted"],
      ["defaultDark"],
      ["primaryDark"],
      ["secondaryDark"],
      ["successDark"],
      ["dangerDark"],
      ["warningDark"],
      ["mutedDark"],
    ] as const)("applies %s preset correctly", (preset) => {
      render(
        <Link href="/" preset={[preset]}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveAttribute("data-preset", preset);
      expect(link).toHaveClass(`marduk-link--${preset}`);
    });

    it("props override preset values", () => {
      render(
        <Link href="/" preset={["primary"]} size="xl">
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass("marduk-link--size-xl");
    });

    it("multiple props override multiple preset values", () => {
      render(
        <Link href="/" preset={["primary"]} size="lg" weight="bold">
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass("marduk-link--size-lg");
      expect(link).toHaveClass("marduk-link--weight-bold");
    });

    it("applies custom preset after defineLinkPresets", () => {
      defineLinkPresets({
        custom: {
          size: "xl",
          weight: "bold",
          italic: true,
        },
      });
      render(
        <Link href="/" preset={["custom"]}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass("marduk-link--size-xl");
      expect(link).toHaveClass("marduk-link--weight-bold");
      expect(link).toHaveClass("marduk-link--italic");
    });

    it("merges multiple presets in order", () => {
      defineLinkPresets({
        base: { size: "md" },
        override: { size: "xl" },
      });
      render(
        <Link href="/" preset={["base", "override"]}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass("marduk-link--size-xl");
    });

    it("merges style objects from multiple presets (deep merge)", () => {
      defineLinkPresets({
        stylePreset1: {
          style: { textTransform: "uppercase", letterSpacing: "0.05em" },
        },
        stylePreset2: {
          style: { color: "rgb(255, 0, 0)", fontWeight: "700" },
        },
      });
      render(
        <Link href="/" preset={["stylePreset1", "stylePreset2"]}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveStyle({ textTransform: "uppercase" });
      expect(link).toHaveStyle({ letterSpacing: "0.05em" });
      expect(link).toHaveStyle({ color: "rgb(255, 0, 0)" });
      expect(link).toHaveStyle({ fontWeight: "700" });
    });

    it("last preset wins for conflicting style properties", () => {
      defineLinkPresets({
        boldStyle: {
          style: { fontWeight: "bold", color: "rgb(0, 0, 255)" },
        },
        normalStyle: {
          style: { fontWeight: "normal", textDecoration: "underline" },
        },
      });
      render(
        <Link href="/" preset={["boldStyle", "normalStyle"]}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveStyle({ fontWeight: "normal" });
      expect(link).toHaveStyle({ color: "rgb(0, 0, 255)" });
      expect(link).toHaveStyle({ textDecoration: "underline" });
    });

    it("merges preset style with custom style prop", () => {
      render(
        <Link href="/" preset={["primary"]} style={{ fontFamily: "monospace" }}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveStyle({
        color: "var(--marduk-color-primary-500)",
        fontFamily: "monospace",
      });
    });

    it("props override merged preset values", () => {
      defineLinkPresets({
        bodyLink: {
          size: "lg",
        },
      });
      render(
        <Link href="/" preset={["primary", "bodyLink"]} size="sm">
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass("marduk-link--size-sm");
    });
  });

  describe("External Links", () => {
    it("adds target=_blank for external links", () => {
      render(
        <Link href="https://example.com" external>
          External link
        </Link>,
      );
      const link = screen.getByText("External link").closest("a");
      expect(link).toHaveAttribute("target", "_blank");
    });

    it("adds rel=noopener noreferrer for external links", () => {
      render(
        <Link href="https://example.com" external>
          External link
        </Link>,
      );
      const link = screen.getByText("External link").closest("a");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("sets data-external attribute", () => {
      render(
        <Link href="https://example.com" external>
          External link
        </Link>,
      );
      const link = screen.getByText("External link").closest("a");
      expect(link).toHaveAttribute("data-external", "true");
    });

    it("does not add external attributes for internal links", () => {
      render(<Link href="/internal">Internal link</Link>);
      const link = screen.getByText("Internal link").closest("a");
      expect(link).not.toHaveAttribute("rel");
      expect(link).not.toHaveAttribute("data-external");
    });

    it("respects custom target prop", () => {
      render(
        <Link href="https://example.com" target="_parent">
          Custom target
        </Link>,
      );
      const link = screen.getByText("Custom target").closest("a");
      expect(link).toHaveAttribute("target", "_parent");
    });
  });

  describe("Icons", () => {
    const TestIcon = () => <svg data-testid="test-icon" />;

    it("renders left icon", () => {
      render(
        <Link href="/" leftIcon={<TestIcon />}>
          With icon
        </Link>,
      );
      expect(screen.getByTestId("test-icon")).toBeInTheDocument();
      const iconWrapper = screen.getByTestId("test-icon").parentElement;
      expect(iconWrapper).toHaveClass("marduk-link__icon");
      expect(iconWrapper).toHaveClass("marduk-link__icon--left");
    });

    it("renders right icon", () => {
      render(
        <Link href="/" rightIcon={<TestIcon />}>
          With icon
        </Link>,
      );
      expect(screen.getByTestId("test-icon")).toBeInTheDocument();
      const iconWrapper = screen.getByTestId("test-icon").parentElement;
      expect(iconWrapper).toHaveClass("marduk-link__icon");
      expect(iconWrapper).toHaveClass("marduk-link__icon--right");
    });

    it("renders both icons", () => {
      render(
        <Link href="/" leftIcon={<TestIcon />} rightIcon={<svg data-testid="right-icon" />}>
          With icons
        </Link>,
      );
      expect(screen.getByTestId("test-icon")).toBeInTheDocument();
      expect(screen.getByTestId("right-icon")).toBeInTheDocument();
    });

    it("applies with-icon class when icons present", () => {
      render(
        <Link href="/" leftIcon={<TestIcon />}>
          With icon
        </Link>,
      );
      const link = screen.getByText("With icon").closest("a");
      expect(link).toHaveClass("marduk-link--with-icon");
    });
  });

  describe("Underline Styles", () => {
    it("applies always underline by default", () => {
      render(<Link href="/">Test</Link>);
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass("marduk-link--underline-always");
    });

    it("applies none underline", () => {
      render(
        <Link href="/" underline="none">
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass("marduk-link--underline-none");
      expect(link).toHaveAttribute("data-underline", "none");
    });

    it("applies always underline", () => {
      render(
        <Link href="/" underline="always">
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass("marduk-link--underline-always");
      expect(link).toHaveAttribute("data-underline", "always");
    });
  });

  describe("Size Variants", () => {
    test.each(["xs", "sm", "md", "lg", "xl"] as const)("applies %s size", (size) => {
      render(
        <Link href="/" size={size}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass(`marduk-link--size-${size}`);
      expect(link).toHaveAttribute("data-size", size);
    });
  });

  describe("Weight Variants", () => {
    test.each(["normal", "medium", "semibold", "bold"] as const)("applies %s weight", (weight) => {
      render(
        <Link href="/" weight={weight}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass(`marduk-link--weight-${weight}`);
      expect(link).toHaveAttribute("data-weight", weight);
    });
  });

  describe("Alignment", () => {
    test.each(["left", "center", "right", "justify"] as const)("applies %s alignment", (align) => {
      render(
        <Link href="/" align={align}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass(`marduk-link--align-${align}`);
      expect(link).toHaveAttribute("data-align", align);
    });
  });

  describe("Line Height", () => {
    test.each(["tight", "normal", "relaxed", "loose"] as const)(
      "applies %s line height",
      (lineHeight) => {
        render(
          <Link href="/" lineHeight={lineHeight}>
            Test
          </Link>,
        );
        const link = screen.getByText("Test").closest("a");
        expect(link).toHaveClass(`marduk-link--line-height-${lineHeight}`);
        expect(link).toHaveAttribute("data-line-height", lineHeight);
      },
    );
  });

  describe("Letter Spacing", () => {
    test.each(["tight", "normal", "wide"] as const)("applies %s letter spacing", (spacing) => {
      render(
        <Link href="/" spacing={spacing}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass(`marduk-link--spacing-${spacing}`);
      expect(link).toHaveAttribute("data-spacing", spacing);
    });
  });

  describe("Text Truncate", () => {
    it("applies truncate class", () => {
      render(
        <Link href="/" truncate>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass("marduk-link--truncate");
      expect(link).toHaveAttribute("data-truncate", "true");
    });
  });

  describe("Text Clamp", () => {
    it("applies clamp class", () => {
      render(
        <Link href="/" clamp>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass("marduk-link--clamp");
      expect(link).toHaveAttribute("data-clamp", "true");
    });

    it("applies max lines with clamp", () => {
      render(
        <Link href="/" clamp maxLines={5}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveStyle({ "--link-max-lines": "5" });
      expect(link).toHaveAttribute("data-max-lines", "5");
    });
  });

  describe("Italic", () => {
    it("applies italic class", () => {
      render(
        <Link href="/" italic>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass("marduk-link--italic");
      expect(link).toHaveAttribute("data-italic", "true");
    });
  });

  describe("Color", () => {
    it("applies custom color via inline style", () => {
      render(
        <Link href="/" color="#ff0000">
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveStyle({ color: "#ff0000" });
    });

    it("applies color from preset", () => {
      render(
        <Link href="/" preset={["primary"]}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveStyle({ color: "var(--marduk-color-primary-500)" });
    });
  });

  describe("Polymorphic Rendering", () => {
    it("renders as custom element", () => {
      render(
        <Link href="/" as="button">
          Button link
        </Link>,
      );
      const link = screen.getByText("Button link").closest("button");
      expect(link).toBeInTheDocument();
      expect(link?.tagName).toBe("BUTTON");
    });

    it("maintains href when rendered as button", () => {
      render(
        <Link href="/test" as="button">
          Button link
        </Link>,
      );
      const link = screen.getByText("Button link").closest("button");
      expect(link).toHaveAttribute("href", "/test");
    });
  });

  describe("Custom Styling", () => {
    it("applies custom className", () => {
      render(
        <Link href="/" className="custom-class">
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass("custom-class");
      expect(link).toHaveClass("marduk-link");
    });

    it("applies custom inline styles", () => {
      render(
        <Link href="/" style={{ padding: "10px" }}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveStyle({ padding: "10px" });
    });
  });

  describe("Additional Props", () => {
    it("forwards additional props", () => {
      render(
        <Link href="/" data-testid="custom-link" aria-label="Custom label">
          Test
        </Link>,
      );
      const link = screen.getByTestId("custom-link");
      expect(link).toHaveAttribute("aria-label", "Custom label");
    });
  });

  describe("Accessibility", () => {
    it("is keyboard focusable", () => {
      render(<Link href="/">Test</Link>);
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveAttribute("href");
    });

    it("supports aria-label", () => {
      render(
        <Link href="/" aria-label="Navigate to home">
          Home
        </Link>,
      );
      const link = screen.getByText("Home").closest("a");
      expect(link).toHaveAttribute("aria-label", "Navigate to home");
    });
  });

  describe("Preset System Functions", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    it("defineLinkPresets adds custom preset", () => {
      defineLinkPresets({
        custom: {
          size: "xl",
        },
      });
      render(
        <Link href="/" preset={["custom"]}>
          Test
        </Link>,
      );
      const link = screen.getByText("Test").closest("a");
      expect(link).toHaveClass("marduk-link--size-xl");
    });
  });
});
