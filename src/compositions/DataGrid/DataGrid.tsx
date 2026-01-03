import { Box } from "@/components/Box/Box";
import { Text } from "@/components/Text/Text";
import { CSSProperties, useState, ReactNode } from "react";
import { DataGridProps, DataGridColumn } from "./DataGrid.types";
import "./DataGrid.css";

export const DataGrid = <T,>({
  columns,
  data,
  keyExtractor,
  sortable = false,
  pagination = false,
  pageSize = 10,
  ...props
}: DataGridProps<T> & { style?: CSSProperties }) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const getRowKey = (row: T, index: number): string => {
    if (keyExtractor) {
      return keyExtractor(row, index);
    }
    return `row-${index}`;
  };

  const getCellValue = (column: DataGridColumn<T>, row: T): ReactNode => {
    if (column.render) {
      const value = row[column.key as keyof T];
      return column.render(value, row);
    }
    if (column.accessor) {
      return column.accessor(row);
    }
    const value = row[column.key as keyof T];
    return value as ReactNode;
  };

  const handleSort = (columnKey: string) => {
    if (!sortable) return;
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  const sortedData =
    sortable && sortColumn
      ? [...data].sort((a, b) => {
          const aVal = a[sortColumn as keyof T];
          const bVal = b[sortColumn as keyof T];

          // Handle comparison with proper type checking
          if (aVal === bVal) return 0;
          if (aVal === null || aVal === undefined) return 1;
          if (bVal === null || bVal === undefined) return -1;

          const comparison = aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
          return sortDirection === "asc" ? comparison : -comparison;
        })
      : data;

  const paginatedData = pagination
    ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sortedData;

  const totalPages = pagination ? Math.ceil(sortedData.length / pageSize) : 1;

  return (
    <Box className="marduk-data-grid" {...props}>
      <Box className="marduk-data-grid-wrapper">
        <table className="marduk-data-grid-table">
          <thead className="marduk-data-grid-header">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`marduk-data-grid-header-cell ${sortable && column.sortable !== false ? "marduk-data-grid-header-cell--sortable" : ""} ${
                    sortColumn === column.key
                      ? `marduk-data-grid-header-cell--sorted-${sortDirection}`
                      : ""
                  }`}
                  style={column.width ? { width: column.width } : undefined}
                  onClick={() => sortable && column.sortable !== false && handleSort(column.key)}
                >
                  <Text className="marduk-data-grid-header-text">{column.header}</Text>
                  {sortable && column.sortable !== false && sortColumn === column.key && (
                    <Box className="marduk-data-grid-sort-icon">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </Box>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="marduk-data-grid-body">
            {paginatedData.map((row, index) => (
              <tr key={getRowKey(row, index)} className="marduk-data-grid-row">
                {columns.map((column) => (
                  <td key={column.key} className="marduk-data-grid-cell">
                    {getCellValue(column, row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
      {pagination && totalPages > 1 && (
        <Box className="marduk-data-grid-pagination">
          <Text size="sm">
            Page {currentPage} of {totalPages}
          </Text>
          <Box className="marduk-data-grid-pagination-controls">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </Box>
        </Box>
      )}
    </Box>
  );
};
