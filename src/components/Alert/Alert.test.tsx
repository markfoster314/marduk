import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Alert } from "./Alert";

describe("Alert", () => {
  describe("Rendering", () => {
    it("renders alert with message", () => {
      render(<Alert>Test message</Alert>);
      expect(screen.getByText("Test message")).toBeInTheDocument();
    });

    it("renders with title", () => {
      render(<Alert title="Alert Title">Message</Alert>);
      expect(screen.getByText("Alert Title")).toBeInTheDocument();
    });

    it("renders without title", () => {
      render(<Alert>Message</Alert>);
      const titleElement = document.querySelector(".marduk-alert-title");
      expect(titleElement).not.toBeInTheDocument();
    });
  });

  describe("Variants", () => {
    it("renders info variant by default", () => {
      render(<Alert>Info message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert.className).toContain("info");
    });

    it("renders success variant", () => {
      render(<Alert variant="success">Success message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert.className).toContain("success");
    });

    it("renders warning variant", () => {
      render(<Alert variant="warning">Warning message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert.className).toContain("warning");
    });

    it("renders error variant", () => {
      render(<Alert variant="error">Error message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert.className).toContain("error");
    });

    it("displays correct icon for each variant", () => {
      const { rerender } = render(<Alert variant="info">Message</Alert>);
      expect(screen.getByText("i")).toBeInTheDocument();

      rerender(<Alert variant="success">Message</Alert>);
      expect(screen.getByText("✓")).toBeInTheDocument();

      rerender(<Alert variant="warning">Message</Alert>);
      expect(screen.getByText("!")).toBeInTheDocument();

      rerender(<Alert variant="error">Message</Alert>);
      expect(screen.getByText("✕")).toBeInTheDocument();
    });
  });

  describe("Closable", () => {
    it("does not show close button by default", () => {
      render(<Alert>Message</Alert>);
      expect(screen.queryByLabelText("Close alert")).not.toBeInTheDocument();
    });

    it("shows close button when closable is true", () => {
      render(<Alert closable>Message</Alert>);
      expect(screen.getByLabelText("Close alert")).toBeInTheDocument();
    });

    it("calls onClose when close button is clicked", () => {
      const handleClose = jest.fn();
      render(
        <Alert closable onClose={handleClose}>
          Message
        </Alert>
      );

      const closeButton = screen.getByLabelText("Close alert");
      fireEvent.click(closeButton);

      expect(handleClose).toHaveBeenCalled();
    });

    it("removes alert when closed", () => {
      render(<Alert closable>Message</Alert>);

      const closeButton = screen.getByLabelText("Close alert");
      fireEvent.click(closeButton);

      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
  });

  describe("Custom Props", () => {
    it("applies custom className", () => {
      render(<Alert className="custom-class">Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert.className).toContain("custom-class");
    });

    it("forwards additional props", () => {
      render(<Alert data-testid="custom-alert">Message</Alert>);
      expect(screen.getByTestId("custom-alert")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has alert role", () => {
      render(<Alert>Message</Alert>);
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("close button has proper aria-label", () => {
      render(<Alert closable>Message</Alert>);
      expect(screen.getByLabelText("Close alert")).toBeInTheDocument();
    });
  });
});
