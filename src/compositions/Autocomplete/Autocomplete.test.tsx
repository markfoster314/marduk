import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Autocomplete } from "./Autocomplete";
import userEvent from "@testing-library/user-event";

describe("Autocomplete", () => {
  const sampleOptions = [
    { value: "1", label: "Apple" },
    { value: "2", label: "Banana" },
  ];

  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<Autocomplete options={sampleOptions} />);
      expect(container.querySelector(".marduk-autocomplete")).toBeInTheDocument();
    });

    it("shows dropdown when typing", async () => {
      const user = userEvent.setup();
      render(<Autocomplete options={sampleOptions} />);
      const input = screen.getByPlaceholderText("Type to search...");
      await user.type(input, "a");
      expect(screen.getByText("Apple")).toBeInTheDocument();
    });
  });
});
