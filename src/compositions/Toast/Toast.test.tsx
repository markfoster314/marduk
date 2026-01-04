import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Toast } from "./Toast";
import { Text } from "@/components/Text/Text";

describe("Toast", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  describe("Rendering", () => {
    it("renders toast with message", () => {
      render(<Toast message="Test message" duration={0} />);
      expect(screen.getByText("Test message")).toBeInTheDocument();
    });

    it("renders close button", () => {
      render(<Toast message="Test" duration={0} />);
      expect(screen.getByLabelText("Close toast")).toBeInTheDocument();
    });
  });

  describe("Variants", () => {
    it("renders info variant by default", () => {
      render(<Toast message="Info" duration={0} />);
      const toast = screen.getByRole("alert");
      expect(toast.className).toContain("info");
    });

    it("renders success variant", () => {
      render(<Toast message="Success" variant="success" duration={0} />);
      const toast = screen.getByRole("alert");
      expect(toast.className).toContain("success");
    });

    it("renders warning variant", () => {
      render(<Toast message="Warning" variant="warning" duration={0} />);
      const toast = screen.getByRole("alert");
      expect(toast.className).toContain("warning");
    });

    it("renders error variant", () => {
      render(<Toast message="Error" variant="error" duration={0} />);
      const toast = screen.getByRole("alert");
      expect(toast.className).toContain("error");
    });

    it("displays correct icon for each variant", () => {
      const { rerender } = render(<Toast message="Test" variant="info" duration={0} />);
      const infoIcon = document.querySelector(".marduk-toast-icon");
      expect(infoIcon).toHaveTextContent("i");

      rerender(<Toast message="Test" variant="success" duration={0} />);
      const successIcon = document.querySelector(".marduk-toast-icon");
      expect(successIcon).toHaveTextContent("✓");

      rerender(<Toast message="Test" variant="warning" duration={0} />);
      const warningIcon = document.querySelector(".marduk-toast-icon");
      expect(warningIcon).toHaveTextContent("!");

      rerender(<Toast message="Test" variant="error" duration={0} />);
      const errorIcon = document.querySelector(".marduk-toast-icon");
      expect(errorIcon).toHaveTextContent("✕");
    });
  });

  describe("Positions", () => {
    it("applies top-right position by default", () => {
      render(<Toast message="Test" duration={0} />);
      const toast = screen.getByRole("alert");
      expect(toast.className).toContain("top-right");
    });

    it("applies custom position", () => {
      const positions = [
        "top-left",
        "bottom-right",
        "bottom-left",
        "top-center",
        "bottom-center",
      ] as const;

      positions.forEach((position) => {
        const { unmount } = render(<Toast message="Test" position={position} duration={0} />);
        const toast = screen.getByRole("alert");
        expect(toast.className).toContain(position);
        unmount();
      });
    });
  });

  describe("Auto Dismiss", () => {
    it("auto-dismisses after duration", async () => {
      const handleClose = jest.fn();
      render(<Toast message="Test" duration={3000} onClose={handleClose} />);

      expect(screen.getByText("Test")).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(3000);
      });

      await waitFor(() => {
        expect(handleClose).toHaveBeenCalled();
      });
    });

    it("does not auto-dismiss when duration is 0", () => {
      const handleClose = jest.fn();
      render(<Toast message="Test" duration={0} onClose={handleClose} />);

      act(() => {
        jest.advanceTimersByTime(10000);
      });

      expect(handleClose).not.toHaveBeenCalled();
      expect(screen.getByText("Test")).toBeInTheDocument();
    });
  });

  describe("Manual Close", () => {
    it("closes when close button is clicked", () => {
      render(<Toast message="Test" duration={0} />);

      const closeButton = screen.getByLabelText("Close toast");
      fireEvent.click(closeButton);

      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });

    it("calls onClose when manually closed", () => {
      const handleClose = jest.fn();
      render(<Toast message="Test" duration={0} onClose={handleClose} />);

      const closeButton = screen.getByLabelText("Close toast");
      fireEvent.click(closeButton);

      expect(handleClose).toHaveBeenCalled();
    });
  });

  describe("Custom Props", () => {
    it("renders customIcon when provided", () => {
      render(
        <Toast
          message="Test"
          customIcon={<span data-testid="custom-icon">Custom</span>}
          duration={0}
        />,
      );
      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });

    it("uses default icon when customIcon is not provided", () => {
      render(<Toast message="Test" variant="info" duration={0} />);
      const icon = document.querySelector(".marduk-toast-icon");
      expect(icon).toHaveTextContent("i");
    });

    it("customIcon takes precedence over default icon", () => {
      render(
        <Toast
          message="Test"
          variant="success"
          customIcon={<span data-testid="custom">X</span>}
          duration={0}
        />,
      );
      const iconContainer = document.querySelector(".marduk-toast-icon");
      expect(screen.getByTestId("custom")).toBeInTheDocument();
      expect(iconContainer).toHaveTextContent("X");
      expect(iconContainer).not.toHaveTextContent("✓");
    });

    it("renders customText when provided", () => {
      render(
        <Toast
          message="Default message"
          customText={<Text data-testid="custom-text">Custom text</Text>}
          duration={0}
        />,
      );
      expect(screen.getByTestId("custom-text")).toBeInTheDocument();
      expect(screen.queryByText("Default message")).not.toBeInTheDocument();
    });

    it("uses default message when customText is not provided", () => {
      render(<Toast message="Default message" duration={0} />);
      expect(screen.getByText("Default message")).toBeInTheDocument();
    });

    it("renders customButton when provided", () => {
      const handleCustomClose = jest.fn();
      render(
        <Toast
          message="Test"
          customButton={
            <button data-testid="custom-button" onClick={handleCustomClose}>
              Custom Close
            </button>
          }
          duration={0}
        />,
      );
      expect(screen.getByTestId("custom-button")).toBeInTheDocument();
      expect(screen.queryByLabelText("Close toast")).not.toBeInTheDocument();
    });

    it("uses default button when customButton is not provided", () => {
      render(<Toast message="Test" duration={0} />);
      expect(screen.getByLabelText("Close toast")).toBeInTheDocument();
    });

    it("customButton can be clicked", () => {
      const handleCustomClose = jest.fn();
      render(
        <Toast
          message="Test"
          customButton={
            <button data-testid="custom-button" onClick={handleCustomClose}>
              Close
            </button>
          }
          duration={0}
        />,
      );
      const customButton = screen.getByTestId("custom-button");
      fireEvent.click(customButton);
      expect(handleCustomClose).toHaveBeenCalled();
    });

    it("customButton does not trigger default onClose when clicked", () => {
      const handleClose = jest.fn();
      render(
        <Toast
          message="Test"
          onClose={handleClose}
          customButton={<button data-testid="custom-button">Close</button>}
          duration={0}
        />,
      );
      const customButton = screen.getByTestId("custom-button");
      fireEvent.click(customButton);
      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  describe("Auto Dismiss", () => {
    it("auto-dismisses after duration", async () => {
      const handleClose = jest.fn();
      render(<Toast message="Test" duration={3000} onClose={handleClose} />);

      expect(screen.getByText("Test")).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(3000);
      });

      await waitFor(() => {
        expect(handleClose).toHaveBeenCalled();
      });
    });

    it("does not auto-dismiss when duration is 0", () => {
      const handleClose = jest.fn();
      render(<Toast message="Test" duration={0} onClose={handleClose} />);

      act(() => {
        jest.advanceTimersByTime(10000);
      });

      expect(handleClose).not.toHaveBeenCalled();
      expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("removes toast from DOM after auto-dismiss", async () => {
      const handleClose = jest.fn();
      render(<Toast message="Test" duration={1000} onClose={handleClose} />);

      expect(screen.getByRole("alert")).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      await waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeInTheDocument();
      });
    });

    it("cleans up timer on unmount", () => {
      const handleClose = jest.fn();
      const { unmount } = render(<Toast message="Test" duration={5000} onClose={handleClose} />);

      unmount();

      act(() => {
        jest.advanceTimersByTime(5000);
      });

      expect(handleClose).not.toHaveBeenCalled();
    });

    it("updates timer when duration changes", async () => {
      const handleClose = jest.fn();
      const { rerender } = render(<Toast message="Test" duration={5000} onClose={handleClose} />);

      rerender(<Toast message="Test" duration={2000} onClose={handleClose} />);

      act(() => {
        jest.advanceTimersByTime(2000);
      });

      await waitFor(() => {
        expect(handleClose).toHaveBeenCalled();
      });
    });
  });

  describe("Accessibility", () => {
    it("has alert role", () => {
      render(<Toast message="Test" duration={0} />);
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("close button has proper aria-label", () => {
      render(<Toast message="Test" duration={0} />);
      expect(screen.getByLabelText("Close toast")).toBeInTheDocument();
    });

    it("has aria-live='assertive' for error variant", () => {
      render(<Toast message="Error" variant="error" duration={0} />);
      const toast = screen.getByRole("alert");
      expect(toast).toHaveAttribute("aria-live", "assertive");
    });

    it("has aria-live='polite' for non-error variants", () => {
      const { rerender } = render(<Toast message="Info" variant="info" duration={0} />);
      let toast = screen.getByRole("alert");
      expect(toast).toHaveAttribute("aria-live", "polite");

      rerender(<Toast message="Success" variant="success" duration={0} />);
      toast = screen.getByRole("alert");
      expect(toast).toHaveAttribute("aria-live", "polite");

      rerender(<Toast message="Warning" variant="warning" duration={0} />);
      toast = screen.getByRole("alert");
      expect(toast).toHaveAttribute("aria-live", "polite");
    });

    it("has aria-atomic='true'", () => {
      render(<Toast message="Test" duration={0} />);
      const toast = screen.getByRole("alert");
      expect(toast).toHaveAttribute("aria-atomic", "true");
    });

    it("has data-variant attribute", () => {
      const { rerender } = render(<Toast message="Test" variant="info" duration={0} />);
      let toast = screen.getByRole("alert");
      expect(toast).toHaveAttribute("data-variant", "info");

      rerender(<Toast message="Test" variant="error" duration={0} />);
      toast = screen.getByRole("alert");
      expect(toast).toHaveAttribute("data-variant", "error");
    });

    it("has data-position attribute", () => {
      const { rerender } = render(<Toast message="Test" position="top-right" duration={0} />);
      let toast = screen.getByRole("alert");
      expect(toast).toHaveAttribute("data-position", "top-right");

      rerender(<Toast message="Test" position="bottom-left" duration={0} />);
      toast = screen.getByRole("alert");
      expect(toast).toHaveAttribute("data-position", "bottom-left");
    });
  });

  describe("Edge Cases", () => {
    it("handles undefined onClose gracefully", () => {
      render(<Toast message="Test" duration={3000} />);

      act(() => {
        jest.advanceTimersByTime(3000);
      });

      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });

    it("handles rapid manual close after auto-dismiss starts", () => {
      const handleClose = jest.fn();
      const { unmount } = render(<Toast message="Test" duration={5000} onClose={handleClose} />);

      const closeButton = screen.getByLabelText("Close toast");
      fireEvent.click(closeButton);

      // Toast should be removed immediately
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
      expect(handleClose).toHaveBeenCalledTimes(1);

      // Unmount to ensure cleanup
      unmount();

      // Advance timer - onClose should not be called again since component is unmounted
      act(() => {
        jest.advanceTimersByTime(5000);
      });

      // Should still only be called once
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("handles customText with nested elements", () => {
      render(
        <Toast
          message="Default"
          customText={
            <div>
              <Text>Line 1</Text>
              <Text>Line 2</Text>
            </div>
          }
          duration={0}
        />,
      );
      expect(screen.getByText("Line 1")).toBeInTheDocument();
      expect(screen.getByText("Line 2")).toBeInTheDocument();
      expect(screen.queryByText("Default")).not.toBeInTheDocument();
    });
  });
});
