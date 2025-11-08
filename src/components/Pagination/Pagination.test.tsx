import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  describe("Rendering", () => {
    it("renders pagination", () => {
      render(<Pagination currentPage={1} totalPages={10} onPageChange={mockOnPageChange} />);
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("renders page numbers", () => {
      render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);

      expect(screen.getByLabelText("Page 1")).toBeInTheDocument();
      expect(screen.getByLabelText("Page 5")).toBeInTheDocument();
    });

    it("shows first/last buttons by default", () => {
      render(<Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />);

      expect(screen.getByLabelText("First page")).toBeInTheDocument();
      expect(screen.getByLabelText("Last page")).toBeInTheDocument();
    });

    it("hides first/last buttons when showFirstLast is false", () => {
      render(
        <Pagination
          currentPage={5}
          totalPages={10}
          onPageChange={mockOnPageChange}
          showFirstLast={false}
        />,
      );

      expect(screen.queryByLabelText("First page")).not.toBeInTheDocument();
      expect(screen.queryByLabelText("Last page")).not.toBeInTheDocument();
    });

    it("shows prev/next buttons", () => {
      render(<Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />);

      expect(screen.getByLabelText("Previous page")).toBeInTheDocument();
      expect(screen.getByLabelText("Next page")).toBeInTheDocument();
    });
  });

  describe("Page Numbers Display", () => {
    it("shows all pages when total is small", () => {
      render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);

      for (let i = 1; i <= 5; i++) {
        expect(screen.getByLabelText(`Page ${i}`)).toBeInTheDocument();
      }
    });

    it("shows ellipsis for many pages", () => {
      render(<Pagination currentPage={5} totalPages={20} onPageChange={mockOnPageChange} />);

      const ellipses = screen.getAllByText("...");
      expect(ellipses.length).toBeGreaterThan(0);
    });

    it("shows correct pages around current page", () => {
      render(<Pagination currentPage={10} totalPages={20} onPageChange={mockOnPageChange} />);

      expect(screen.getByLabelText("Page 1")).toBeInTheDocument();
      expect(screen.getByLabelText("Page 9")).toBeInTheDocument();
      expect(screen.getByLabelText("Page 10")).toBeInTheDocument();
      expect(screen.getByLabelText("Page 11")).toBeInTheDocument();
      expect(screen.getByLabelText("Page 20")).toBeInTheDocument();
    });
  });

  describe("Navigation", () => {
    it("calls onPageChange when page is clicked", () => {
      render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);

      const page3 = screen.getByLabelText("Page 3");
      fireEvent.click(page3);

      expect(mockOnPageChange).toHaveBeenCalledWith(3);
    });

    it("calls onPageChange when next is clicked", () => {
      render(<Pagination currentPage={2} totalPages={5} onPageChange={mockOnPageChange} />);

      const nextButton = screen.getByLabelText("Next page");
      fireEvent.click(nextButton);

      expect(mockOnPageChange).toHaveBeenCalledWith(3);
    });

    it("calls onPageChange when prev is clicked", () => {
      render(<Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />);

      const prevButton = screen.getByLabelText("Previous page");
      fireEvent.click(prevButton);

      expect(mockOnPageChange).toHaveBeenCalledWith(2);
    });

    it("calls onPageChange when first is clicked", () => {
      render(<Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />);

      const firstButton = screen.getByLabelText("First page");
      fireEvent.click(firstButton);

      expect(mockOnPageChange).toHaveBeenCalledWith(1);
    });

    it("calls onPageChange when last is clicked", () => {
      render(<Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />);

      const lastButton = screen.getByLabelText("Last page");
      fireEvent.click(lastButton);

      expect(mockOnPageChange).toHaveBeenCalledWith(10);
    });
  });

  describe("Disabled States", () => {
    it("disables prev and first when on first page", () => {
      render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);

      expect(screen.getByLabelText("Previous page")).toBeDisabled();
      expect(screen.getByLabelText("First page")).toBeDisabled();
    });

    it("disables next and last when on last page", () => {
      render(<Pagination currentPage={5} totalPages={5} onPageChange={mockOnPageChange} />);

      expect(screen.getByLabelText("Next page")).toBeDisabled();
      expect(screen.getByLabelText("Last page")).toBeDisabled();
    });

    it("disables all buttons when disabled prop is true", () => {
      render(
        <Pagination currentPage={2} totalPages={5} onPageChange={mockOnPageChange} disabled />,
      );

      const buttons = screen.getAllByRole("button");
      buttons.forEach((button) => {
        expect(button).toBeDisabled();
      });
    });

    it("does not call onPageChange when disabled", () => {
      render(
        <Pagination currentPage={2} totalPages={5} onPageChange={mockOnPageChange} disabled />,
      );

      const page3 = screen.getByLabelText("Page 3");
      fireEvent.click(page3);

      expect(mockOnPageChange).not.toHaveBeenCalled();
    });
  });

  describe("Active State", () => {
    it("marks current page as active", () => {
      render(<Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />);

      const currentPage = screen.getByLabelText("Page 3");
      expect(currentPage.className).toContain("active");
      expect(currentPage).toHaveAttribute("aria-current", "page");
    });
  });

  describe("Sizes", () => {
    it("applies medium size by default", () => {
      render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);

      const button = screen.getByLabelText("Page 1");
      expect(button.className).toContain("medium");
    });

    it("applies small size", () => {
      render(
        <Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} size="small" />,
      );

      const button = screen.getByLabelText("Page 1");
      expect(button.className).toContain("small");
    });

    it("applies large size", () => {
      render(
        <Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} size="large" />,
      );

      const button = screen.getByLabelText("Page 1");
      expect(button.className).toContain("large");
    });
  });

  describe("Accessibility", () => {
    it("has navigation role", () => {
      render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("has aria-label for navigation", () => {
      render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);
      expect(screen.getByLabelText("Pagination")).toBeInTheDocument();
    });

    it("has proper aria-labels for all buttons", () => {
      render(<Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />);

      expect(screen.getByLabelText("First page")).toBeInTheDocument();
      expect(screen.getByLabelText("Previous page")).toBeInTheDocument();
      expect(screen.getByLabelText("Next page")).toBeInTheDocument();
      expect(screen.getByLabelText("Last page")).toBeInTheDocument();
    });
  });
});
