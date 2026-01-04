import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Alert } from "./Alert";
import { Text } from "@/components/Text/Text";

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

    it("renders with customTitle", () => {
      render(<Alert customTitle={<Text>Custom Title</Text>}>Message</Alert>);
      expect(screen.getByText("Custom Title")).toBeInTheDocument();
    });

    it("customTitle takes precedence over title", () => {
      render(
        <Alert title="String Title" customTitle={<Text>Custom Title</Text>}>
          Message
        </Alert>,
      );
      expect(screen.getByText("Custom Title")).toBeInTheDocument();
      expect(screen.queryByText("String Title")).not.toBeInTheDocument();
    });

    it("renders customTitle with Text component styling", () => {
      render(
        <Alert
          customTitle={
            <Text preset={["primary"]} size="sm" weight="semibold">
              Styled Custom Title
            </Text>
          }
        >
          Message
        </Alert>,
      );
      const customTitle = screen.getByText("Styled Custom Title");
      expect(customTitle).toBeInTheDocument();
      expect(customTitle.closest(".marduk-alert-title")).toBeInTheDocument();
    });

    it("renders with customText", () => {
      render(<Alert customText={<Text>Custom Text</Text>}>Default Message</Alert>);
      expect(screen.getByText("Custom Text")).toBeInTheDocument();
      expect(screen.queryByText("Default Message")).not.toBeInTheDocument();
    });

    it("customText takes precedence over children", () => {
      render(
        <Alert customText={<Text preset={["primary"]}>Custom Message</Text>}>
          This should be ignored
        </Alert>,
      );
      expect(screen.getByText("Custom Message")).toBeInTheDocument();
      expect(screen.queryByText("This should be ignored")).not.toBeInTheDocument();
    });

    it("renders customText with Text component styling", () => {
      render(
        <Alert
          customText={
            <Text preset={["success"]} size="md" weight="semibold">
              Styled Custom Text
            </Text>
          }
        >
          Message
        </Alert>,
      );
      const customText = screen.getByText("Styled Custom Text");
      expect(customText).toBeInTheDocument();
      expect(customText.closest(".marduk-alert-message")).toBeInTheDocument();
    });

    it("renders with customIcon", () => {
      render(<Alert customIcon={<span data-testid="custom-icon">🔔</span>}>Message</Alert>);
      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });

    it("customIcon replaces default variant icon", () => {
      const { container } = render(
        <Alert variant="error" customIcon={<span data-testid="custom-icon">⚠️</span>}>
          Message
        </Alert>,
      );
      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
      // Default error icon (SkullCrossbonesIcon) should not be present
      const defaultIcon = container.querySelector(".marduk-alert-icon svg");
      expect(defaultIcon).not.toBeInTheDocument();
    });

    it("renders customIcon with custom styling", () => {
      render(
        <Alert
          customIcon={
            <span data-testid="styled-icon" style={{ fontSize: "24px", color: "red" }}>
              🎯
            </span>
          }
        >
          Message
        </Alert>,
      );
      const customIcon = screen.getByTestId("styled-icon");
      expect(customIcon).toBeInTheDocument();
      expect(customIcon.closest(".marduk-alert-icon")).toBeInTheDocument();
    });

    it("renders with customButton when closable is true", () => {
      render(
        <Alert closable customButton={<button data-testid="custom-button">Close</button>}>
          Message
        </Alert>,
      );
      expect(screen.getByTestId("custom-button")).toBeInTheDocument();
    });

    it("customButton replaces default close button", () => {
      render(
        <Alert closable customButton={<button data-testid="custom-button">Dismiss</button>}>
          Message
        </Alert>,
      );
      expect(screen.getByTestId("custom-button")).toBeInTheDocument();
      expect(screen.queryByLabelText("Close alert")).not.toBeInTheDocument();
    });

    it("does not render customButton when closable is false", () => {
      render(
        <Alert closable={false} customButton={<button data-testid="custom-button">Close</button>}>
          Message
        </Alert>,
      );
      expect(screen.queryByTestId("custom-button")).not.toBeInTheDocument();
    });

    it("renders customButton with custom styling", () => {
      render(
        <Alert
          closable
          customButton={
            <button data-testid="styled-button" style={{ padding: "8px", fontSize: "14px" }}>
              Custom Close
            </button>
          }
        >
          Message
        </Alert>,
      );
      const customButton = screen.getByTestId("styled-button");
      expect(customButton).toBeInTheDocument();
      expect(customButton.closest(".marduk-alert-close")).toBeInTheDocument();
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

  describe("Close Animation", () => {
    it("does not apply close animation class by default", () => {
      const { container } = render(<Alert closable>Message</Alert>);
      const alert = container.querySelector(".marduk-alert");
      expect(alert).not.toHaveClass("marduk-alert--close-animation-fadeOutLeft");
      expect(alert).not.toHaveClass("marduk-alert--close-animation-fadeOutDown");
      expect(alert).not.toHaveAttribute("data-close-animation");
    });

    it("does not apply close animation class when closeAnimation is 'none'", () => {
      render(
        <Alert closable closeAnimation="none">
          Message
        </Alert>,
      );
      const alert = screen.getByRole("alert");
      expect(alert).not.toHaveClass("marduk-alert--close-animation-fadeOutLeft");
      expect(alert).not.toHaveClass("marduk-alert--close-animation-fadeOutDown");
      expect(alert).not.toHaveAttribute("data-close-animation");
    });

    test.each([["fadeOutLeft"], ["fadeOutDown"]] as const)(
      "applies %s close animation data attribute",
      (closeAnimation) => {
        render(
          <Alert closable closeAnimation={closeAnimation}>
            Message
          </Alert>,
        );
        const alert = screen.getByRole("alert");
        expect(alert).toHaveAttribute("data-close-animation", closeAnimation);
      },
    );

    it("applies fadeOutLeft animation class when closing", () => {
      const { container } = render(
        <Alert closable closeAnimation="fadeOutLeft">
          Message
        </Alert>,
      );
      const alert = container.querySelector(".marduk-alert");
      const closeButton = screen.getByLabelText("Close alert");

      fireEvent.click(closeButton);
      expect(alert?.className).toContain("marduk-alert--close-animation-fadeOutLeft");
    });

    it("applies fadeOutDown animation class when closing", () => {
      const { container } = render(
        <Alert closable closeAnimation="fadeOutDown">
          Message
        </Alert>,
      );
      const alert = container.querySelector(".marduk-alert");
      const closeButton = screen.getByLabelText("Close alert");

      fireEvent.click(closeButton);
      expect(alert?.className).toContain("marduk-alert--close-animation-fadeOutDown");
    });

    it("applies close animation and calls onClose after delay", () => {
      jest.useFakeTimers();
      const onClose = jest.fn();
      const { container } = render(
        <Alert closable closeAnimation="fadeOutLeft" onClose={onClose}>
          Message
        </Alert>,
      );
      const closeButton = screen.getByLabelText("Close alert");

      fireEvent.click(closeButton);
      const alert = container.querySelector(".marduk-alert");
      expect(screen.getByRole("alert")).toBeInTheDocument();
      expect(alert?.className).toContain("marduk-alert--close-animation-fadeOutLeft");
      expect(onClose).not.toHaveBeenCalled();

      jest.advanceTimersByTime(400);
      expect(onClose).toHaveBeenCalled();

      jest.useRealTimers();
    });

    it("removes alert immediately when closeAnimation is 'none'", () => {
      const onClose = jest.fn();
      render(
        <Alert closable closeAnimation="none" onClose={onClose}>
          Message
        </Alert>,
      );
      const closeButton = screen.getByLabelText("Close alert");

      fireEvent.click(closeButton);
      expect(onClose).toHaveBeenCalled();
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
