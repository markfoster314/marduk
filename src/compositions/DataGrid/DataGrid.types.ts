import { ReactNode } from "react";

export interface DataGridColumn<T = Record<string, unknown>> {
  key: string;
  header: string;
  accessor?: (row: T) => ReactNode;
  render?: (value: unknown, row: T) => ReactNode;
  sortable?: boolean;
  width?: string;
}

export interface DataGridProps<T = Record<string, unknown>> {
  columns: DataGridColumn<T>[];
  data: T[];
  keyExtractor?: (row: T, index: number) => string;
  sortable?: boolean;
  pagination?: boolean;
  pageSize?: number;
}
