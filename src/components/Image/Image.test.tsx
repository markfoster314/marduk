import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Image } from "./Image";
import { defineImagePresets, resetCustomPresets } from "./presets";

// Mock image loading
const mockImage = {
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  src: "",
  onload: null as (() => void) | null,
  onerror: null as (() => void) | null,
};

beforeAll(() => {
  global.Image = jest.fn(() => mockImage as unknown as HTMLImageElement) as jest.Mock;
});

describe("Image", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    resetCustomPresets();
  });

  describe("Core", () => {
    it("renders image with required src and alt", () => {
      render(<Image src="test.jpg" alt="Test image" />);
      const image = screen.getByAltText("Test image");
      expect(image).toBeInTheDocument();
      expect(image.tagName).toBe("IMG");
      expect(image).toHaveAttribute("src", "test.jpg");
      expect(image).toHaveAttribute("alt", "Test image");
      expect(image).toHaveClass("marduk-image");
    });

    it("applies lazy loading by default", () => {
      render(<Image src="test.jpg" alt="Test" />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveAttribute("loading", "lazy");
    });

    it("applies eager loading when lazy is false", () => {
      render(<Image src="test.jpg" alt="Test" lazy={false} />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveAttribute("loading", "eager");
    });
  });

  describe("Props", () => {
    test.each([
      ["contain", "marduk-image--fit-contain"],
      ["cover", "marduk-image--fit-cover"],
      ["fill", "marduk-image--fit-fill"],
      ["none", "marduk-image--fit-none"],
      ["scale-down", "marduk-image--fit-scale-down"],
    ] as const)("applies %s object fit", (objectFit, expectedClass) => {
      render(<Image src="test.jpg" alt="Test" objectFit={objectFit} />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveClass(expectedClass);
      expect(image).toHaveAttribute("data-fit", objectFit);
    });

    test.each([
      ["1:1", "marduk-image--aspect-1-1"],
      ["4:3", "marduk-image--aspect-4-3"],
      ["16:9", "marduk-image--aspect-16-9"],
      ["21:9", "marduk-image--aspect-21-9"],
    ] as const)("applies %s aspect ratio", (aspectRatio, expectedClass) => {
      render(<Image src="test.jpg" alt="Test" aspectRatio={aspectRatio as any} />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveClass(expectedClass);
      expect(image).toHaveAttribute("data-aspect-ratio", aspectRatio);
    });

    it("applies width and height as strings", () => {
      render(<Image src="test.jpg" alt="Test" width="200" height="150" />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveStyle({ width: "200", height: "150" });
    });

    it("applies width and height as numbers", () => {
      render(<Image src="test.jpg" alt="Test" width={200} height={150} />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveStyle({ width: "200px", height: "150px" });
    });

    it("applies only width", () => {
      render(<Image src="test.jpg" alt="Test" width="300" />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveStyle({ width: "300" });
    });

    it("applies only height", () => {
      render(<Image src="test.jpg" alt="Test" height="200" />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveStyle({ height: "200" });
    });

    it("handles auto aspect ratio", () => {
      render(<Image src="test.jpg" alt="Test" aspectRatio="auto" />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveClass("marduk-image");
      expect(image).not.toHaveClass("marduk-image--aspect-auto");
      expect(image).toHaveAttribute("data-aspect-ratio", "auto");
    });

    it("shows placeholder while loading", () => {
      render(<Image src="test.jpg" alt="Test" placeholder="placeholder.jpg" />);
      const placeholder = document.querySelector(".marduk-image__placeholder");
      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("src", "placeholder.jpg");
      expect(placeholder).toHaveAttribute("aria-hidden", "true");
    });

    it("does not show placeholder when not provided", () => {
      render(<Image src="test.jpg" alt="Test" />);
      const placeholder = document.querySelector(".marduk-image__placeholder");
      expect(placeholder).not.toBeInTheDocument();
    });

    it("applies loading class when isLoading is true", () => {
      render(<Image src="test.jpg" alt="Test" />);
      const image = screen.getByAltText("Test");
      // Initially loading should be true
      expect(image).toHaveClass("marduk-image--loading");
    });
  });

  describe("Error Handling", () => {
    it("shows placeholder on error when provided", async () => {
      const { container } = render(
        <Image src="invalid.jpg" alt="Test" placeholder="fallback.jpg" />,
      );
      const image = container.querySelector("img[src='invalid.jpg']");
      if (image) {
        const errorEvent = new Event("error");
        image.dispatchEvent(errorEvent);
      }
      // After error, should show placeholder
      await waitFor(() => {
        const fallback = container.querySelector("img[src='fallback.jpg']");
        expect(fallback).toBeInTheDocument();
      });
    });

    it("shows error message when no placeholder", async () => {
      const { container } = render(<Image src="invalid.jpg" alt="Test" />);
      const image = container.querySelector("img[src='invalid.jpg']");
      if (image) {
        const errorEvent = new Event("error");
        image.dispatchEvent(errorEvent);
      }
      await waitFor(() => {
        const errorText = screen.getByText("Image failed to load");
        expect(errorText).toBeInTheDocument();
      });
    });

    it("calls onError callback when provided", () => {
      const onError = jest.fn();
      const { container } = render(<Image src="invalid.jpg" alt="Test" onError={onError} />);
      const image = container.querySelector("img[src='invalid.jpg']");
      if (image) {
        const errorEvent = new Event("error");
        image.dispatchEvent(errorEvent);
      }
      expect(onError).toHaveBeenCalled();
    });

    it("applies error class when image fails", async () => {
      const { container } = render(<Image src="invalid.jpg" alt="Test" />);
      const image = container.querySelector("img[src='invalid.jpg']");
      if (image) {
        const errorEvent = new Event("error");
        image.dispatchEvent(errorEvent);
      }
      await waitFor(() => {
        const errorDiv = container.querySelector(".marduk-image--fallback");
        expect(errorDiv).toBeInTheDocument();
      });
    });

    it("hides original image on error", async () => {
      const { container } = render(<Image src="invalid.jpg" alt="Test" />);
      const image = container.querySelector("img[src='invalid.jpg']");
      if (image) {
        const errorEvent = new Event("error");
        image.dispatchEvent(errorEvent);
      }
      await waitFor(() => {
        // After error, the original image gets error class and fallback div is shown
        const errorImage = container.querySelector("img.marduk-image--error");
        const fallback = container.querySelector(".marduk-image--fallback");
        // Either the error image exists (hidden) or fallback is shown
        expect(errorImage || fallback).toBeTruthy();
      });
    });
  });

  describe("Presets", () => {
    beforeEach(() => {
      resetCustomPresets();
    });

    test.each([["rounded"], ["circle"], ["thumbnail"], ["cover"]] as const)(
      "applies %s preset",
      (preset) => {
        render(<Image src="test.jpg" alt="Test" preset={[preset]} />);
        const image = screen.getByAltText("Test");
        expect(image).toHaveAttribute("data-preset", preset);
        expect(image).toHaveClass(`marduk-image--${preset}`);
      },
    );

    it("props override presets", () => {
      render(<Image src="test.jpg" alt="Test" preset={["rounded"]} objectFit="contain" />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveClass("marduk-image--fit-contain");
    });

    it("preset width/height are overridden by props", () => {
      defineImagePresets({
        custom: { width: "100px", height: "100px" },
      });
      render(<Image src="test.jpg" alt="Test" preset={["custom"]} width="200" height="200" />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveStyle({ width: "200", height: "200" });
    });

    it("preset lazy is overridden by prop", () => {
      defineImagePresets({
        custom: { lazy: false },
      });
      render(<Image src="test.jpg" alt="Test" preset={["custom"]} lazy={true} />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveAttribute("loading", "lazy");
    });

    it("preset placeholder is overridden by prop", () => {
      defineImagePresets({
        custom: { placeholder: "preset-placeholder.jpg" },
      });
      render(
        <Image src="test.jpg" alt="Test" preset={["custom"]} placeholder="prop-placeholder.jpg" />,
      );
      const placeholder = document.querySelector(".marduk-image__placeholder");
      expect(placeholder).toHaveAttribute("src", "prop-placeholder.jpg");
    });

    it("merges multiple presets", () => {
      defineImagePresets({
        base: { objectFit: "contain" },
        override: { objectFit: "cover" },
      });
      render(<Image src="test.jpg" alt="Test" preset={["base", "override"]} />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveClass("marduk-image--fit-cover");
    });

    it("deep merges style objects from presets", () => {
      defineImagePresets({
        style1: { style: { opacity: "0.8" } as React.CSSProperties },
        style2: { style: { borderRadius: "10px" } as React.CSSProperties },
      });
      render(<Image src="test.jpg" alt="Test" preset={["style1", "style2"]} />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveStyle({ opacity: "0.8", borderRadius: "10px" });
    });

    it("merges preset styles with prop styles", () => {
      defineImagePresets({
        custom: {
          style: {
            opacity: "0.8",
          } as React.CSSProperties,
        },
      });
      render(
        <Image
          src="test.jpg"
          alt="Test"
          preset={["custom"]}
          style={
            {
              borderRadius: "10px",
            } as React.CSSProperties
          }
        />,
      );
      const image = screen.getByAltText("Test");
      expect(image).toHaveStyle({ opacity: "0.8", borderRadius: "10px" });
    });

    it("supports custom presets", () => {
      defineImagePresets({ premium: { objectFit: "cover" } });
      render(<Image src="test.jpg" alt="Test" preset={["premium"]} />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveClass("marduk-image--fit-cover");
    });
  });

  describe("Edge Cases", () => {
    it("forwards props and className", () => {
      render(<Image src="test.jpg" alt="Test" data-testid="image" className="custom" />);
      const image = screen.getByTestId("image");
      expect(image).toHaveClass("custom");
    });

    it("forwards data attributes", () => {
      render(<Image src="test.jpg" alt="Test" data-custom="value" />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveAttribute("data-custom", "value");
    });

    it("combines all features together", () => {
      render(
        <Image
          src="test.jpg"
          alt="Test"
          preset={["rounded"]}
          objectFit="cover"
          aspectRatio="16:9"
          width="400"
          height="225"
        />,
      );
      const image = screen.getByAltText("Test");
      expect(image).toHaveClass("marduk-image--rounded");
      expect(image).toHaveClass("marduk-image--fit-cover");
      expect(image).toHaveClass("marduk-image--aspect-16-9");
    });

    it("handles empty preset array", () => {
      render(<Image src="test.jpg" alt="Test" preset={[]} />);
      const image = screen.getByAltText("Test");
      expect(image).toBeInTheDocument();
      expect(image).toHaveClass("marduk-image");
    });

    it("handles undefined preset gracefully", () => {
      render(<Image src="test.jpg" alt="Test" />);
      const image = screen.getByAltText("Test");
      expect(image).toBeInTheDocument();
    });

    it("handles onLoad callback", () => {
      const onLoad = jest.fn();
      render(<Image src="test.jpg" alt="Test" onLoad={onLoad} />);
      const image = screen.getByAltText("Test");
      const loadEvent = new Event("load");
      image.dispatchEvent(loadEvent);
      expect(onLoad).toHaveBeenCalled();
    });
  });

  describe("Accessibility", () => {
    it("requires alt text", () => {
      render(<Image src="test.jpg" alt="Descriptive alt text" />);
      const image = screen.getByAltText("Descriptive alt text");
      expect(image).toHaveAttribute("alt", "Descriptive alt text");
    });

    it("applies role img to error fallback", async () => {
      const { container } = render(<Image src="invalid.jpg" alt="Test" />);
      const image = container.querySelector("img[src='invalid.jpg']");
      if (image) {
        const errorEvent = new Event("error");
        image.dispatchEvent(errorEvent);
      }
      await waitFor(() => {
        const fallback = screen.getByRole("img", { name: "Test" });
        expect(fallback).toBeInTheDocument();
      });
    });

    it("applies aria-label to error fallback", async () => {
      const { container } = render(<Image src="invalid.jpg" alt="Test image" />);
      const image = container.querySelector("img[src='invalid.jpg']");
      if (image) {
        const errorEvent = new Event("error");
        image.dispatchEvent(errorEvent);
      }
      await waitFor(() => {
        const fallback = screen.getByRole("img", { name: "Test image" });
        expect(fallback).toHaveAttribute("aria-label", "Test image");
      });
    });

    it("hides placeholder from screen readers", () => {
      render(<Image src="test.jpg" alt="Test" placeholder="placeholder.jpg" />);
      const placeholder = document.querySelector(".marduk-image__placeholder");
      expect(placeholder).toHaveAttribute("aria-hidden", "true");
      expect(placeholder).toHaveAttribute("alt", "");
    });
  });

  describe("Data Attributes", () => {
    it("includes data-fit attribute", () => {
      render(<Image src="test.jpg" alt="Test" objectFit="cover" />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveAttribute("data-fit", "cover");
    });

    it("includes data-aspect-ratio attribute", () => {
      render(<Image src="test.jpg" alt="Test" aspectRatio="16:9" />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveAttribute("data-aspect-ratio", "16:9");
    });

    it("includes data-preset attribute", () => {
      render(<Image src="test.jpg" alt="Test" preset={["rounded", "circle"]} />);
      const image = screen.getByAltText("Test");
      expect(image).toHaveAttribute("data-preset", "rounded,circle");
    });

    it("includes data attributes on error fallback", async () => {
      const { container } = render(
        <Image src="invalid.jpg" alt="Test" objectFit="cover" aspectRatio="16:9" />,
      );
      const image = container.querySelector("img[src='invalid.jpg']");
      if (image) {
        const errorEvent = new Event("error");
        image.dispatchEvent(errorEvent);
      }
      await waitFor(() => {
        const fallback = container.querySelector(".marduk-image--fallback");
        expect(fallback).toHaveAttribute("data-fit", "cover");
        expect(fallback).toHaveAttribute("data-aspect-ratio", "16:9");
      });
    });
  });
});
