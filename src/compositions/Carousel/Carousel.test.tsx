import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Carousel } from "./Carousel";

describe("Carousel", () => {
  const sampleItems = [<div key="1">Slide 1</div>, <div key="2">Slide 2</div>];

  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<Carousel items={sampleItems} />);
      expect(container.querySelector(".marduk-carousel")).toBeInTheDocument();
    });

    it("renders first slide by default", () => {
      render(<Carousel items={sampleItems} />);
      expect(screen.getByText("Slide 1")).toBeInTheDocument();
    });
  });
});
