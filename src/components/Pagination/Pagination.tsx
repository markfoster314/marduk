import "./Pagination.css";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number;
  showFirstLast?: boolean;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 7,
  showFirstLast = true,
  size = "medium",
  disabled = false,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftSiblingIndex = Math.max(currentPage - 1, 1);
      const rightSiblingIndex = Math.min(currentPage + 1, totalPages);

      const showLeftEllipsis = leftSiblingIndex > 2;
      const showRightEllipsis = rightSiblingIndex < totalPages - 1;

      if (!showLeftEllipsis && showRightEllipsis) {
        const leftPages = Math.min(maxVisible - 2, currentPage + 1);
        for (let i = 1; i <= leftPages; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (showLeftEllipsis && !showRightEllipsis) {
        pages.push(1);
        pages.push("...");
        const rightPages = Math.min(
          maxVisible - 2,
          totalPages - currentPage + 2
        );
        for (let i = totalPages - rightPages + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const buttonClasses = (isActive: boolean) =>
    [
      "marduk-pagination-button",
      `marduk-pagination-button--${size}`,
      isActive ? "marduk-pagination-button--active" : "",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <nav className="marduk-pagination" aria-label="Pagination">
      <ul className="marduk-pagination-list">
        {showFirstLast && (
          <li>
            <button
              className={buttonClasses(false)}
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1 || disabled}
              aria-label="First page"
            >
              «
            </button>
          </li>
        )}
        <li>
          <button
            className={buttonClasses(false)}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1 || disabled}
            aria-label="Previous page"
          >
            ‹
          </button>
        </li>
        {pageNumbers.map((page, index) =>
          typeof page === "number" ? (
            <li key={`page-${page}`}>
              <button
                className={buttonClasses(page === currentPage)}
                onClick={() => onPageChange(page)}
                disabled={disabled}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </button>
            </li>
          ) : (
            <li key={`ellipsis-${index}`}>
              <span className="marduk-pagination-ellipsis">...</span>
            </li>
          )
        )}
        <li>
          <button
            className={buttonClasses(false)}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages || disabled}
            aria-label="Next page"
          >
            ›
          </button>
        </li>
        {showFirstLast && (
          <li>
            <button
              className={buttonClasses(false)}
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages || disabled}
              aria-label="Last page"
            >
              »
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
