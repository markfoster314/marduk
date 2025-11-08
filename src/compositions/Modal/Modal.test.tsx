import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "./Modal";

describe("Modal", () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  describe("Rendering", () => {
    it("renders nothing when closed", () => {
      render(
        <Modal isOpen={false} onClose={mockOnClose}>
          <p>Modal content</p>
        </Modal>,
      );

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("renders modal when open", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Modal content</p>
        </Modal>,
      );

      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByText("Modal content")).toBeInTheDocument();
    });

    it("renders with title", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Modal Title">
          <p>Content</p>
        </Modal>,
      );

      expect(screen.getByText("Modal Title")).toBeInTheDocument();
    });

    it("renders without title", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    });

    it("shows close button by default", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      expect(screen.getByLabelText("Close modal")).toBeInTheDocument();
    });

    it("hides close button when showCloseButton is false", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} showCloseButton={false}>
          <p>Content</p>
        </Modal>,
      );

      expect(screen.queryByLabelText("Close modal")).not.toBeInTheDocument();
    });
  });

  describe("Sizes", () => {
    it("applies medium size by default", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      const modal = document.querySelector(".marduk-modal-content");
      expect(modal?.className).toContain("medium");
    });

    it("applies small size", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} size="small">
          <p>Content</p>
        </Modal>,
      );

      const modal = document.querySelector(".marduk-modal-content");
      expect(modal?.className).toContain("small");
    });

    it("applies large size", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} size="large">
          <p>Content</p>
        </Modal>,
      );

      const modal = document.querySelector(".marduk-modal-content");
      expect(modal?.className).toContain("large");
    });
  });

  describe("Close Functionality", () => {
    it("calls onClose when close button is clicked", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      const closeButton = screen.getByLabelText("Close modal");
      fireEvent.click(closeButton);

      expect(mockOnClose).toHaveBeenCalled();
    });

    it("calls onClose when overlay is clicked by default", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      const overlay = document.querySelector(".marduk-modal-overlay");
      fireEvent.click(overlay!);

      expect(mockOnClose).toHaveBeenCalled();
    });

    it("does not close when modal content is clicked", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      const content = screen.getByText("Content");
      fireEvent.click(content);

      expect(mockOnClose).not.toHaveBeenCalled();
    });

    it("does not call onClose when overlay clicked if closeOnOverlayClick is false", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} closeOnOverlayClick={false}>
          <p>Content</p>
        </Modal>,
      );

      const overlay = screen.getByRole("dialog");
      fireEvent.click(overlay);

      expect(mockOnClose).not.toHaveBeenCalled();
    });
  });

  describe("Keyboard Interactions", () => {
    it("calls onClose when Escape is pressed by default", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      fireEvent.keyDown(document, { key: "Escape" });

      expect(mockOnClose).toHaveBeenCalled();
    });

    it("does not call onClose when Escape is pressed if closeOnEscape is false", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} closeOnEscape={false}>
          <p>Content</p>
        </Modal>,
      );

      fireEvent.keyDown(document, { key: "Escape" });

      expect(mockOnClose).not.toHaveBeenCalled();
    });

    it("does not close on other keys", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      fireEvent.keyDown(document, { key: "Enter" });
      fireEvent.keyDown(document, { key: "Tab" });

      expect(mockOnClose).not.toHaveBeenCalled();
    });
  });

  describe("Body Scroll Lock", () => {
    it("prevents body scroll when modal is open", () => {
      const { unmount } = render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      expect(document.body.style.overflow).toBe("hidden");

      unmount();

      expect(document.body.style.overflow).toBe("unset");
    });

    it("restores body scroll when modal is closed", () => {
      const { rerender } = render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      expect(document.body.style.overflow).toBe("hidden");

      rerender(
        <Modal isOpen={false} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      expect(document.body.style.overflow).toBe("unset");
    });
  });

  describe("Accessibility", () => {
    it("has dialog role", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("has aria-modal attribute", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      const dialog = screen.getByRole("dialog");
      expect(dialog).toHaveAttribute("aria-modal", "true");
    });

    it("has aria-labelledby when title is provided", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose} title="Modal Title">
          <p>Content</p>
        </Modal>,
      );

      const dialog = screen.getByRole("dialog");
      expect(dialog).toHaveAttribute("aria-labelledby", "modal-title");

      const title = screen.getByText("Modal Title");
      expect(title).toHaveAttribute("id", "modal-title");
    });

    it("close button has proper aria-label", () => {
      render(
        <Modal isOpen={true} onClose={mockOnClose}>
          <p>Content</p>
        </Modal>,
      );

      expect(screen.getByLabelText("Close modal")).toBeInTheDocument();
    });
  });
});
