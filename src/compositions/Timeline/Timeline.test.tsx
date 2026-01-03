import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Timeline } from "./Timeline";

describe("Timeline", () => {
  const sampleItems = [
    {
      id: "1",
      title: "First Event",
      content: "First event content",
    },
    {
      id: "2",
      title: "Second Event",
      content: "Second event content",
    },
  ];

  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<Timeline items={sampleItems} />);
      expect(container.querySelector(".marduk-timeline")).toBeInTheDocument();
    });

    it("renders all timeline items", () => {
      render(<Timeline items={sampleItems} />);
      expect(screen.getByText("First Event")).toBeInTheDocument();
      expect(screen.getByText("Second Event")).toBeInTheDocument();
    });
  });
});
