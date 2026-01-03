import type { Meta, StoryObj } from "@storybook/react";
import { DataGrid } from "./DataGrid";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof DataGrid> = {
  title: "Compositions/DataGrid",
  component: DataGrid,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

const sampleData = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  email: `item${i + 1}@example.com`,
  age: 20 + i,
}));

const sampleColumns = [
  { key: "id", header: "ID", sortable: true },
  { key: "name", header: "Name", sortable: true },
  { key: "email", header: "Email" },
  { key: "age", header: "Age", sortable: true },
];

export const Default: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
  },
};

export const WithPagination: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    pagination: true,
    pageSize: 10,
  },
};

export const Sortable: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    sortable: true,
  },
};
