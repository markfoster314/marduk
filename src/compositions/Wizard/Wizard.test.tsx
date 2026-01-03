import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Wizard } from "./Wizard";
import userEvent from "@testing-library/user-event";

describe("Wizard", () => {
  const sampleSteps = [
    {
      id: "step1",
      title: "First Step",
      content: "First content",
    },
    {
      id: "step2",
      title: "Second Step",
      content: "Second content",
    },
  ];

  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<Wizard steps={sampleSteps} />);
      expect(container.querySelector(".marduk-wizard")).toBeInTheDocument();
    });

    it("renders all step titles", () => {
      render(<Wizard steps={sampleSteps} />);
      expect(screen.getByText("First Step")).toBeInTheDocument();
      expect(screen.getByText("Second Step")).toBeInTheDocument();
    });

    it("renders first step content by default", () => {
      render(<Wizard steps={sampleSteps} />);
      expect(screen.getByText("First content")).toBeInTheDocument();
    });
  });

  describe("Navigation", () => {
    it("navigates to next step", async () => {
      const user = userEvent.setup();
      render(<Wizard steps={sampleSteps} />);
      await user.click(screen.getByText("Next"));
      expect(screen.getByText("Second content")).toBeInTheDocument();
    });
  });
});
