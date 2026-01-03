import { Box } from "@/components/Box/Box";
import { Text } from "@/components/Text/Text";
import { CSSProperties, ReactNode } from "react";
import { TableProps, TableColumn } from "./Table.types";
import "./Table.css";

export const Table = <T extends Record<string, unknown>>({
  columns,
  data,
  keyExtractor,
  ...props
}: TableProps<T> & { style?: CSSProperties }) => {
  const getRowKey = (row: T, index: number): string => {
    if (keyExtractor) {
      return keyExtractor(row, index);
    }
    return `row-${index}`;
  };

  const getCellValue = (column: TableColumn<T>, row: T): ReactNode => {
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

  return (
    <Box className="marduk-table-wrapper" {...props}>
      <table className="marduk-table">
        <thead className="marduk-table-header">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="marduk-table-header-cell">
                <Text className="marduk-table-header-text">{column.header}</Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="marduk-table-body">
          {data.map((row, index) => (
            <tr key={getRowKey(row, index)} className="marduk-table-row">
              {columns.map((column) => (
                <td key={column.key} className="marduk-table-cell">
                  {getCellValue(column, row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};
