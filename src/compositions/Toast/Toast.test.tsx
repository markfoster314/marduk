import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Toast } from "./Toast";

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

  describe("Accessibility", () => {
    it("has alert role", () => {
      render(<Toast message="Test" duration={0} />);
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("close button has proper aria-label", () => {
      render(<Toast message="Test" duration={0} />);
      expect(screen.getByLabelText("Close toast")).toBeInTheDocument();
    });
  });
});
