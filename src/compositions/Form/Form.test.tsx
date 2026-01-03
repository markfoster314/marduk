import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Form } from "./Form";

describe("Form", () => {
  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<Form>Content</Form>);
      expect(container.querySelector(".marduk-form")).toBeInTheDocument();
    });

    it("renders children", () => {
      render(<Form>Form content</Form>);
      expect(screen.getByText("Form content")).toBeInTheDocument();
    });

    it("renders as form element", () => {
      const { container } = render(<Form>Content</Form>);
      expect(container.querySelector("form")).toBeInTheDocument();
    });
  });
});
