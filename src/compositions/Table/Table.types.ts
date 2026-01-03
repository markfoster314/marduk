import { ReactNode } from "react";

export interface TableColumn<T = Record<string, unknown>> {
  key: string;
  header: string;
  accessor?: (row: T) => ReactNode;
  render?: (value: unknown, row: T) => ReactNode;
}

export interface TableProps<T = Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  keyExtractor?: (row: T, index: number) => string;
}
