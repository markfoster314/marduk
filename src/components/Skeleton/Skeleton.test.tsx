import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Skeleton } from "./Skeleton";
import { defineSkeletonPresets, resetCustomPresets } from "./presets";

describe("Skeleton", () => {
  describe("Core", () => {
    it("renders with base class and default shape", () => {
      render(<Skeleton />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toBeInTheDocument();
      expect(skeleton.tagName).toBe("DIV");
      expect(skeleton).toHaveClass("marduk-skeleton");
      expect(skeleton).toHaveClass("marduk-skeleton--shape-text");
      expect(skeleton).toHaveClass("marduk-skeleton--animation-pulse");
    });
  });

  describe("Props", () => {
    test.each([
      ["text", "marduk-skeleton--shape-text"],
      ["circle", "marduk-skeleton--shape-circle"],
      ["rectangle", "marduk-skeleton--shape-rectangle"],
    ] as const)("applies %s shape", (shape, expectedClass) => {
      render(<Skeleton shape={shape} />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveClass(expectedClass);
      expect(skeleton).toHaveAttribute("data-shape", shape);
    });

    test.each([
      ["pulse", "marduk-skeleton--animation-pulse"],
      ["wave", "marduk-skeleton--animation-wave"],
      ["none", "marduk-skeleton--animation-none"],
    ] as const)("applies %s animation", (animation, expectedClass) => {
      render(<Skeleton animation={animation} />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveClass(expectedClass);
      expect(skeleton).toHaveAttribute("data-animation", animation);
    });

    it("applies width and height as strings", () => {
      render(<Skeleton width="200px" height="50px" />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveStyle({ width: "200px", height: "50px" });
    });

    it("applies width and height as numbers", () => {
      render(<Skeleton width={200} height={50} />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveStyle({ width: "200px", height: "50px" });
    });

    it("applies only width", () => {
      render(<Skeleton width="300px" />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveStyle({ width: "300px" });
    });

    it("applies only height", () => {
      render(<Skeleton height="100px" />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveStyle({ height: "100px" });
    });

    it("renders multiple skeletons when count > 1", () => {
      const { container } = render(<Skeleton count={3} />);
      const skeletons = container.querySelectorAll(".marduk-skeleton");
      expect(skeletons).toHaveLength(3);
    });

    it("applies aria attributes only to first skeleton when count > 1", () => {
      const { container } = render(<Skeleton count={3} />);
      const skeletons = container.querySelectorAll(".marduk-skeleton");
      expect(skeletons[0]).toHaveAttribute("role", "status");
      expect(skeletons[0]).toHaveAttribute("aria-label", "Loading content");
      expect(skeletons[0]).toHaveAttribute("aria-live", "polite");
      expect(skeletons[1]).not.toHaveAttribute("role");
      expect(skeletons[2]).not.toHaveAttribute("role");
    });

    it("renders single skeleton when count is 1", () => {
      const { container } = render(<Skeleton count={1} />);
      const skeletons = container.querySelectorAll(".marduk-skeleton");
      expect(skeletons).toHaveLength(1);
    });

    it("renders single skeleton when count is not provided", () => {
      const { container } = render(<Skeleton />);
      const skeletons = container.querySelectorAll(".marduk-skeleton");
      expect(skeletons).toHaveLength(1);
    });
  });

  describe("Presets", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    test.each([["text"], ["title"], ["avatar"], ["button"]] as const)(
      "applies %s preset",
      (preset) => {
        render(<Skeleton preset={[preset]} />);
        const skeleton = screen.getByRole("status");
        expect(skeleton).toHaveAttribute("data-preset", preset);
        expect(skeleton).toHaveClass(`marduk-skeleton--${preset}`);
      },
    );

    it("props override presets", () => {
      render(<Skeleton preset={["text"]} shape="circle" />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveClass("marduk-skeleton--shape-circle");
    });

    it("merges multiple presets", () => {
      defineSkeletonPresets({
        base: { shape: "text" },
        override: { shape: "circle" },
      });
      render(<Skeleton preset={["base", "override"]} />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveClass("marduk-skeleton--shape-circle");
    });

    it("deep merges style objects from presets", () => {
      defineSkeletonPresets({
        style1: { style: { opacity: "0.8" } as React.CSSProperties },
        style2: { style: { borderRadius: "10px" } as React.CSSProperties },
      });
      render(<Skeleton preset={["style1", "style2"]} />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveStyle({ opacity: "0.8", borderRadius: "10px" });
    });

    it("preset width/height are overridden by props", () => {
      defineSkeletonPresets({
        custom: { width: "100px", height: "100px" },
      });
      render(<Skeleton preset={["custom"]} width="200px" height="200px" />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveStyle({ width: "200px", height: "200px" });
    });

    it("preset shape is overridden by prop", () => {
      defineSkeletonPresets({
        custom: { shape: "circle" },
      });
      render(<Skeleton preset={["custom"]} shape="rectangle" />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveClass("marduk-skeleton--shape-rectangle");
    });

    it("preset animation is overridden by prop", () => {
      defineSkeletonPresets({
        custom: { animation: "wave" },
      });
      render(<Skeleton preset={["custom"]} animation="pulse" />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveClass("marduk-skeleton--animation-pulse");
    });

    it("merges preset styles with prop styles", () => {
      defineSkeletonPresets({
        custom: {
          style: {
            opacity: "0.8",
          } as React.CSSProperties,
        },
      });
      render(
        <Skeleton
          preset={["custom"]}
          style={
            {
              borderRadius: "10px",
            } as React.CSSProperties
          }
        />,
      );
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveStyle({ opacity: "0.8", borderRadius: "10px" });
    });

    it("supports custom presets", () => {
      defineSkeletonPresets({ premium: { shape: "circle" } });
      render(<Skeleton preset={["premium"]} />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveClass("marduk-skeleton--shape-circle");
    });
  });

  describe("Polymorphic", () => {
    it("renders as custom element", () => {
      render(<Skeleton as="span" />);
      expect(screen.getByRole("status").tagName).toBe("SPAN");
    });

    it("maintains all classes with polymorphic rendering", () => {
      render(<Skeleton as="span" preset={["text"]} shape="circle" />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveClass("marduk-skeleton");
      expect(skeleton).toHaveClass("marduk-skeleton--text");
      expect(skeleton).toHaveClass("marduk-skeleton--shape-circle");
    });
  });

  describe("Edge Cases", () => {
    it("forwards props and className", () => {
      render(<Skeleton data-testid="skeleton" className="custom" />);
      const skeleton = screen.getByTestId("skeleton");
      expect(skeleton).toHaveClass("custom");
    });

    it("forwards data attributes", () => {
      render(<Skeleton data-custom="value" />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveAttribute("data-custom", "value");
    });

    it("combines all features together", () => {
      render(
        <Skeleton
          preset={["text"]}
          shape="rectangle"
          animation="wave"
          width="300px"
          height="20px"
        />,
      );
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveClass("marduk-skeleton--text");
      expect(skeleton).toHaveClass("marduk-skeleton--shape-rectangle");
      expect(skeleton).toHaveClass("marduk-skeleton--animation-wave");
      expect(skeleton).toHaveStyle({ width: "300px", height: "20px" });
    });

    it("handles empty preset array", () => {
      render(<Skeleton preset={[]} />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toBeInTheDocument();
      expect(skeleton).toHaveClass("marduk-skeleton");
    });

    it("handles undefined preset gracefully", () => {
      render(<Skeleton />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toBeInTheDocument();
    });

    it("handles count of 0", () => {
      const { container } = render(<Skeleton count={0} />);
      const skeletons = container.querySelectorAll(".marduk-skeleton");
      expect(skeletons).toHaveLength(0);
    });
  });

  describe("Accessibility", () => {
    it("applies status role", () => {
      render(<Skeleton />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toBeInTheDocument();
    });

    it("applies aria-live polite", () => {
      render(<Skeleton />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveAttribute("aria-live", "polite");
    });

    it("applies aria-label", () => {
      render(<Skeleton />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveAttribute("aria-label", "Loading content");
    });

    it("applies accessibility attributes to polymorphic elements", () => {
      render(<Skeleton as="span" />);
      const skeleton = screen.getByRole("status");
      expect(skeleton.tagName).toBe("SPAN");
      expect(skeleton).toHaveAttribute("aria-label", "Loading content");
    });
  });

  describe("Data Attributes", () => {
    it("includes data-shape attribute", () => {
      render(<Skeleton shape="circle" />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveAttribute("data-shape", "circle");
    });

    it("includes data-animation attribute", () => {
      render(<Skeleton animation="wave" />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveAttribute("data-animation", "wave");
    });

    it("includes data-preset attribute", () => {
      render(<Skeleton preset={["text", "title"]} />);
      const skeleton = screen.getByRole("status");
      expect(skeleton).toHaveAttribute("data-preset", "text,title");
    });

    it("includes data attributes on all skeletons when count > 1", () => {
      const { container } = render(<Skeleton count={3} shape="circle" animation="wave" />);
      const skeletons = container.querySelectorAll(".marduk-skeleton");
      skeletons.forEach((skeleton) => {
        expect(skeleton).toHaveAttribute("data-shape", "circle");
        expect(skeleton).toHaveAttribute("data-animation", "wave");
      });
    });
  });
});
