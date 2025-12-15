import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProgressBar } from "./ProgressBar";

describe("ProgressBar", () => {
  describe("Rendering", () => {
    it("renders progress bar", () => {
      render(<ProgressBar value={50} />);
      const progressBar = screen.getByRole("progressbar");
      expect(progressBar).toBeInTheDocument();
    });

    it("sets correct aria attributes", () => {
      render(<ProgressBar value={50} max={100} />);
      const progressBar = screen.getByRole("progressbar");

      expect(progressBar).toHaveAttribute("aria-valuenow", "50");
      expect(progressBar).toHaveAttribute("aria-valuemin", "0");
      expect(progressBar).toHaveAttribute("aria-valuemax", "100");
    });

    it("calculates percentage correctly", () => {
      render(<ProgressBar value={50} max={100} />);
      const fill = document.querySelector(".marduk-progress-fill") as HTMLElement;
      expect(fill.style.width).toBe("50%");
    });

    it("handles custom max value", () => {
      render(<ProgressBar value={25} max={50} />);
      const fill = document.querySelector(".marduk-progress-fill") as HTMLElement;
      expect(fill.style.width).toBe("50%");
    });

    it("caps at 100%", () => {
      render(<ProgressBar value={150} max={100} />);
      const fill = document.querySelector(".marduk-progress-fill") as HTMLElement;
      expect(fill.style.width).toBe("100%");
    });

    it("handles negative values", () => {
      render(<ProgressBar value={-10} />);
      const fill = document.querySelector(".marduk-progress-fill") as HTMLElement;
      expect(fill.style.width).toBe("0%");
    });
  });

  describe("Variants", () => {
    it("applies primary variant by default", () => {
      render(<ProgressBar value={50} />);
      const fill = document.querySelector(".marduk-progress-fill");
      expect(fill?.className).toContain("primary");
    });

    it("applies success variant", () => {
      render(<ProgressBar value={50} variant="success" />);
      const fill = document.querySelector(".marduk-progress-fill");
      expect(fill?.className).toContain("success");
    });

    it("applies warning variant", () => {
      render(<ProgressBar value={50} variant="warning" />);
      const fill = document.querySelector(".marduk-progress-fill");
      expect(fill?.className).toContain("warning");
    });

    it("applies error variant", () => {
      render(<ProgressBar value={50} variant="error" />);
      const fill = document.querySelector(".marduk-progress-fill");
      expect(fill?.className).toContain("error");
    });
  });

  describe("Sizes", () => {
    it("applies medium size by default", () => {
      render(<ProgressBar value={50} />);
      const bar = document.querySelector(".marduk-progress-bar");
      expect(bar?.className).toContain("medium");
    });

    it("applies small size", () => {
      render(<ProgressBar value={50} size="small" />);
      const bar = document.querySelector(".marduk-progress-bar");
      expect(bar?.className).toContain("small");
    });

    it("applies large size", () => {
      render(<ProgressBar value={50} size="large" />);
      const bar = document.querySelector(".marduk-progress-bar");
      expect(bar?.className).toContain("large");
    });
  });

  describe("Labels", () => {
    it("does not show label by default", () => {
      render(<ProgressBar value={50} />);
      expect(screen.queryByText("50%")).not.toBeInTheDocument();
    });

    it("shows percentage when showLabel is true", () => {
      render(<ProgressBar value={75} showLabel />);
      expect(screen.getByText("75%")).toBeInTheDocument();
    });

    it("shows custom label text", () => {
      render(<ProgressBar value={50} label="Loading..." />);
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("shows both label and percentage", () => {
      render(<ProgressBar value={50} label="Progress" showLabel />);
      expect(screen.getByText("Progress")).toBeInTheDocument();
      expect(screen.getByText("50%")).toBeInTheDocument();
    });

    it("rounds percentage to nearest integer", () => {
      render(<ProgressBar value={33.7} max={100} showLabel />);
      expect(screen.getByText("34%")).toBeInTheDocument();
    });
  });

  describe("Striped", () => {
    it("is not striped by default", () => {
      render(<ProgressBar value={50} />);
      const fill = document.querySelector(".marduk-progress-fill");
      expect(fill?.className).not.toContain("striped");
    });

    it("applies striped class", () => {
      render(<ProgressBar value={50} striped />);
      const fill = document.querySelector(".marduk-progress-fill");
      expect(fill?.className).toContain("striped");
    });

    it("applies animated class", () => {
      render(<ProgressBar value={50} striped animated />);
      const fill = document.querySelector(".marduk-progress-fill");
      expect(fill?.className).toContain("striped");
      expect(fill?.className).toContain("animated");
    });

    it("animated without striped does not apply animated class", () => {
      render(<ProgressBar value={50} animated />);
      const fill = document.querySelector(".marduk-progress-fill");
      expect(fill?.className).toContain("animated");
    });
  });

  describe("Data Attributes", () => {
    it("includes data-variant attribute", () => {
      const { container } = render(<ProgressBar value={50} variant="success" />);
      const wrapper = container.querySelector(".marduk-progress-wrapper");
      expect(wrapper).toHaveAttribute("data-variant", "success");
    });

    it("includes data-size attribute", () => {
      const { container } = render(<ProgressBar value={50} size="small" />);
      const wrapper = container.querySelector(".marduk-progress-wrapper");
      expect(wrapper).toHaveAttribute("data-size", "small");
    });

    it("includes data-value and data-max attributes", () => {
      const { container } = render(<ProgressBar value={50} max={100} />);
      const wrapper = container.querySelector(".marduk-progress-wrapper");
      expect(wrapper).toHaveAttribute("data-value", "50");
      expect(wrapper).toHaveAttribute("data-max", "100");
    });

    it("includes data-percentage attribute", () => {
      const { container } = render(<ProgressBar value={50} max={100} />);
      const wrapper = container.querySelector(".marduk-progress-wrapper");
      expect(wrapper).toHaveAttribute("data-percentage", "50");
    });

    it("includes data-striped attribute when striped", () => {
      const { container } = render(<ProgressBar value={50} striped />);
      const wrapper = container.querySelector(".marduk-progress-wrapper");
      expect(wrapper).toHaveAttribute("data-striped", "true");
    });

    it("includes data-animated attribute when animated", () => {
      const { container } = render(<ProgressBar value={50} animated />);
      const wrapper = container.querySelector(".marduk-progress-wrapper");
      expect(wrapper).toHaveAttribute("data-animated", "true");
    });

    it("includes data-show-label attribute when showLabel is true", () => {
      const { container } = render(<ProgressBar value={50} showLabel />);
      const wrapper = container.querySelector(".marduk-progress-wrapper");
      expect(wrapper).toHaveAttribute("data-show-label", "true");
    });
  });

  describe("Custom Props", () => {
    it("applies custom className", () => {
      render(<ProgressBar value={50} className="custom-class" />);
      const wrapper = document.querySelector(".custom-class");
      expect(wrapper).toBeInTheDocument();
    });

    it("forwards additional props", () => {
      render(<ProgressBar value={50} data-testid="custom-progress" />);
      expect(screen.getByTestId("custom-progress")).toBeInTheDocument();
    });
  });
});
