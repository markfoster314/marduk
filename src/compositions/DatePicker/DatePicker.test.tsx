import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DatePicker } from "./DatePicker";

describe("DatePicker", () => {
  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<DatePicker />);
      expect(container.querySelector(".marduk-date-picker")).toBeInTheDocument();
    });

    it("renders with placeholder", () => {
      render(<DatePicker placeholder="Select date" />);
      expect(screen.getByPlaceholderText("Select date")).toBeInTheDocument();
    });
  });
});
