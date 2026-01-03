import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Table> = {
  title: "Compositions/Table",
  component: Table,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleData = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25 },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", age: 35 },
];

const sampleColumns = [
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "age", header: "Age" },
];

export const Default: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
  },
};

export const WithCustomRender: Story = {
  args: {
    columns: [
      { key: "name", header: "Name" },
      {
        key: "age",
        header: "Age",
        render: (value) => `${value} years old`,
      },
    ],
    data: sampleData,
  },
};
