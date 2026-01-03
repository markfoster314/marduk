import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  describe("Rendering", () => {
    it("does not render when isOpen is false", () => {
      const { container } = render(<Sidebar isOpen={false}>Content</Sidebar>);
      expect(container.querySelector(".marduk-sidebar")).not.toBeInTheDocument();
    });

    it("renders when isOpen is true", () => {
      const { container } = render(<Sidebar isOpen={true}>Content</Sidebar>);
      expect(container.querySelector(".marduk-sidebar")).toBeInTheDocument();
    });

    it("renders children when open", () => {
      render(<Sidebar isOpen={true}>Sidebar content</Sidebar>);
      expect(screen.getByText("Sidebar content")).toBeInTheDocument();
    });
  });
});
