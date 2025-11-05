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

  describe("Dark Mode", () => {
    it("does not apply dark class by default", () => {
      render(<Alert>Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).not.toHaveClass("marduk-alert--dark");
    });

    it("applies dark class when darkMode is true", () => {
      render(<Alert darkMode>Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).toHaveClass("marduk-alert--dark");
    });

    it("applies dark class with all variants", () => {
      const variants = ["info", "success", "warning", "error"] as const;

      variants.forEach((variant) => {
        const { container } = render(
          <Alert variant={variant} darkMode>
            Message
          </Alert>
        );
        const alert = screen.getByRole("alert");
        expect(alert).toHaveClass("marduk-alert--dark");
        expect(alert).toHaveClass(`marduk-alert--${variant}`);
        container.remove();
      });
    });
  });

  describe("Animation", () => {
    it("does not apply animation class by default", () => {
      render(<Alert>Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).not.toHaveClass("marduk-alert--animation-fadeInUp");
      expect(alert).not.toHaveClass("marduk-alert--animation-slideInRight");
    });

    it("does not apply animation class when animation is 'none'", () => {
      render(<Alert animation="none">Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).not.toHaveClass("marduk-alert--animation-fadeInUp");
      expect(alert).not.toHaveClass("marduk-alert--animation-slideInRight");
    });

    it("applies fadeInUp animation class", () => {
      render(<Alert animation="fadeInUp">Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).toHaveClass("marduk-alert--animation-fadeInUp");
    });

    it("applies slideInRight animation class", () => {
      render(<Alert animation="slideInRight">Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).toHaveClass("marduk-alert--animation-slideInRight");
    });

    it("works with all variants", () => {
      const { container } = render(
        <Alert variant="success" animation="fadeInUp">
          Message
        </Alert>
      );
      const alert = screen.getByRole("alert");
      expect(alert).toHaveClass("marduk-alert--success");
      expect(alert).toHaveClass("marduk-alert--animation-fadeInUp");
      container.remove();
    });

    it("works with dark mode", () => {
      render(
        <Alert animation="fadeInUp" darkMode>
          Message
        </Alert>
      );
      const alert = screen.getByRole("alert");
      expect(alert).toHaveClass("marduk-alert--dark");
      expect(alert).toHaveClass("marduk-alert--animation-fadeInUp");
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
