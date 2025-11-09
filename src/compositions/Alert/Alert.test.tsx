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
    test.each([
      ["info", "Info message", "info"],
      ["success", "Success message", "success"],
      ["warning", "Warning message", "warning"],
      ["error", "Error message", "error"],
    ] as const)("renders %s variant correctly", (variant, message, expectedClass) => {
      render(
        variant === "info" ? <Alert>{message}</Alert> : <Alert variant={variant}>{message}</Alert>,
      );
      const alert = screen.getByRole("alert");
      expect(alert.className).toContain(expectedClass);
      expect(alert).toHaveAttribute("data-variant", variant);
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
        </Alert>,
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
      expect(alert).not.toHaveAttribute("data-dark-mode");
    });

    it("applies dark class when darkMode is true", () => {
      render(<Alert darkMode>Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).toHaveClass("marduk-alert--dark");
      expect(alert).toHaveAttribute("data-dark-mode", "true");
    });

    test.each([["info"], ["success"], ["warning"], ["error"]] as const)(
      "applies dark class with %s variant",
      (variant) => {
        render(
          <Alert variant={variant} darkMode>
            Message
          </Alert>,
        );
        const alert = screen.getByRole("alert");
        expect(alert).toHaveClass("marduk-alert--dark");
        expect(alert).toHaveClass(`marduk-alert--${variant}`);
      },
    );
  });

  describe("Animation", () => {
    it("does not apply animation class by default", () => {
      render(<Alert>Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).not.toHaveClass("marduk-alert--animation-fadeInUp");
      expect(alert).not.toHaveClass("marduk-alert--animation-slideInRight");
      expect(alert).not.toHaveAttribute("data-animation");
    });

    it("does not apply animation class when animation is 'none'", () => {
      render(<Alert animation="none">Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).not.toHaveClass("marduk-alert--animation-fadeInUp");
      expect(alert).not.toHaveClass("marduk-alert--animation-slideInRight");
      expect(alert).not.toHaveAttribute("data-animation");
    });

    test.each([
      ["fadeInUp", "marduk-alert--animation-fadeInUp"],
      ["slideInRight", "marduk-alert--animation-slideInRight"],
    ] as const)("applies %s animation class", (animation, expectedClass) => {
      render(<Alert animation={animation}>Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).toHaveClass(expectedClass);
      expect(alert).toHaveAttribute("data-animation", animation);
    });

    it("works with variants and dark mode", () => {
      render(
        <Alert variant="success" animation="fadeInUp" darkMode>
          Message
        </Alert>,
      );
      const alert = screen.getByRole("alert");
      expect(alert).toHaveClass("marduk-alert--success");
      expect(alert).toHaveClass("marduk-alert--animation-fadeInUp");
      expect(alert).toHaveClass("marduk-alert--dark");
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

  describe("Data Attributes", () => {
    it("includes variant data attribute", () => {
      render(<Alert variant="success">Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).toHaveAttribute("data-variant", "success");
    });

    it("includes closable data attribute when closable is true", () => {
      render(<Alert closable>Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).toHaveAttribute("data-closable", "true");
    });

    it("does not include closable data attribute when closable is false", () => {
      render(<Alert>Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).not.toHaveAttribute("data-closable");
    });

    it("includes has-title data attribute when title is provided", () => {
      render(<Alert title="Test Title">Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).toHaveAttribute("data-has-title", "true");
    });

    it("does not include has-title data attribute when no title", () => {
      render(<Alert>Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).not.toHaveAttribute("data-has-title");
    });
  });

  describe("Style Prop", () => {
    it("applies custom styles", () => {
      render(<Alert style={{ border: "3px dashed red" }}>Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).toHaveStyle({ border: "3px dashed red" });
    });

    it("allows CSS variable overrides", () => {
      render(
        <Alert
          style={
            {
              "--alert-bg": "purple",
              "--alert-border-width": "5px",
            } as React.CSSProperties
          }
        >
          Message
        </Alert>,
      );
      const alert = screen.getByRole("alert");
      expect(alert).toHaveStyle({
        "--alert-bg": "purple",
        "--alert-border-width": "5px",
      });
    });
  });

  describe("Accessibility", () => {
    it("has alert role", () => {
      render(<Alert>Message</Alert>);
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("has aria-live polite for non-error variants", () => {
      render(<Alert variant="info">Message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).toHaveAttribute("aria-live", "polite");
    });

    it("has aria-live assertive for error variant", () => {
      render(<Alert variant="error">Error message</Alert>);
      const alert = screen.getByRole("alert");
      expect(alert).toHaveAttribute("aria-live", "assertive");
    });

    it("close button has proper aria-label", () => {
      render(<Alert closable>Message</Alert>);
      expect(screen.getByLabelText("Close alert")).toBeInTheDocument();
    });
  });

  describe("Title Presets", () => {
    it("uses primary preset for info variant", () => {
      render(
        <Alert variant="info" title="Info Title">
          Message
        </Alert>,
      );
      const title = screen.getByText("Info Title");
      expect(title).toHaveAttribute("data-preset", "primary");
    });

    it("uses success preset for success variant", () => {
      render(
        <Alert variant="success" title="Success Title">
          Message
        </Alert>,
      );
      const title = screen.getByText("Success Title");
      expect(title).toHaveAttribute("data-preset", "success");
    });

    it("uses warning preset for warning variant", () => {
      render(
        <Alert variant="warning" title="Warning Title">
          Message
        </Alert>,
      );
      const title = screen.getByText("Warning Title");
      expect(title).toHaveAttribute("data-preset", "warning");
    });

    it("uses danger preset for error variant", () => {
      render(
        <Alert variant="error" title="Error Title">
          Message
        </Alert>,
      );
      const title = screen.getByText("Error Title");
      expect(title).toHaveAttribute("data-preset", "danger");
    });

    it("uses dark presets when darkMode is true", () => {
      render(
        <Alert variant="info" title="Dark Title" darkMode>
          Message
        </Alert>,
      );
      const title = screen.getByText("Dark Title");
      expect(title).toHaveAttribute("data-preset", "primaryDark");
    });

    it("uses dark success preset", () => {
      render(
        <Alert variant="success" title="Dark Success" darkMode>
          Message
        </Alert>,
      );
      const title = screen.getByText("Dark Success");
      expect(title).toHaveAttribute("data-preset", "successDark");
    });

    it("uses dark warning preset", () => {
      render(
        <Alert variant="warning" title="Dark Warning" darkMode>
          Message
        </Alert>,
      );
      const title = screen.getByText("Dark Warning");
      expect(title).toHaveAttribute("data-preset", "warningDark");
    });

    it("uses dark danger preset for error variant", () => {
      render(
        <Alert variant="error" title="Dark Error" darkMode>
          Message
        </Alert>,
      );
      const title = screen.getByText("Dark Error");
      expect(title).toHaveAttribute("data-preset", "dangerDark");
    });
  });

  describe("Button Presets", () => {
    it("close button uses primary preset for info variant", () => {
      render(
        <Alert variant="info" closable>
          Message
        </Alert>,
      );
      const button = screen.getByLabelText("Close alert");
      expect(button).toHaveAttribute("data-preset", "primary");
    });

    it("close button uses success preset for success variant", () => {
      render(
        <Alert variant="success" closable>
          Message
        </Alert>,
      );
      const button = screen.getByLabelText("Close alert");
      expect(button).toHaveAttribute("data-preset", "success");
    });

    it("close button uses warning preset for warning variant", () => {
      render(
        <Alert variant="warning" closable>
          Message
        </Alert>,
      );
      const button = screen.getByLabelText("Close alert");
      expect(button).toHaveAttribute("data-preset", "warning");
    });

    it("close button uses danger preset for error variant", () => {
      render(
        <Alert variant="error" closable>
          Message
        </Alert>,
      );
      const button = screen.getByLabelText("Close alert");
      expect(button).toHaveAttribute("data-preset", "danger");
    });

    it("close button uses dark presets when darkMode is true", () => {
      render(
        <Alert variant="info" closable darkMode>
          Message
        </Alert>,
      );
      const button = screen.getByLabelText("Close alert");
      expect(button).toHaveAttribute("data-preset", "primaryDark");
    });

    it("close button uses dark success preset", () => {
      render(
        <Alert variant="success" closable darkMode>
          Message
        </Alert>,
      );
      const button = screen.getByLabelText("Close alert");
      expect(button).toHaveAttribute("data-preset", "successDark");
    });

    it("close button uses dark warning preset", () => {
      render(
        <Alert variant="warning" closable darkMode>
          Message
        </Alert>,
      );
      const button = screen.getByLabelText("Close alert");
      expect(button).toHaveAttribute("data-preset", "warningDark");
    });

    it("close button uses dark danger preset for error variant", () => {
      render(
        <Alert variant="error" closable darkMode>
          Message
        </Alert>,
      );
      const button = screen.getByLabelText("Close alert");
      expect(button).toHaveAttribute("data-preset", "dangerDark");
    });
  });
});
