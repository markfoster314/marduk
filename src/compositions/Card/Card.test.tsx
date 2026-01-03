import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

describe("Card", () => {
  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<Card>Content</Card>);
      expect(container.querySelector(".marduk-card")).toBeInTheDocument();
    });

    it("renders children content", () => {
      render(<Card>Test content</Card>);
      expect(screen.getByText("Test content")).toBeInTheDocument();
    });

    it("renders title when provided", () => {
      render(<Card title="Card Title">Content</Card>);
      expect(screen.getByText("Card Title")).toBeInTheDocument();
    });

    it("renders footer when provided", () => {
      render(<Card footer="Footer content">Body</Card>);
      expect(screen.getByText("Footer content")).toBeInTheDocument();
    });

    it("renders header actions when provided", () => {
      render(
        <Card title="Title" headerActions={<button>Action</button>}>
          Content
        </Card>,
      );
      expect(screen.getByText("Action")).toBeInTheDocument();
    });
  });
});
