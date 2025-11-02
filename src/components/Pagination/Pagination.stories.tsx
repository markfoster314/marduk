import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";
import { useState } from "react";
import React from "react";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const CurrentPageMiddle: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 50,
    totalPages: 100,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const WithoutFirstLast: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: false,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    disabled: true,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const Small: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    size: "small",
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const Large: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    size: "large",
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;
    const itemsPerPage = 10;

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(
      currentPage * itemsPerPage,
      totalPages * itemsPerPage
    );

    return (
      <div style={{ maxWidth: "600px" }}>
        <div
          style={{
            marginBottom: "24px",
            padding: "16px",
            backgroundColor: "#f7fafc",
            borderRadius: "4px",
          }}
        >
          <p style={{ margin: 0, fontSize: "14px", color: "#2d3748" }}>
            Showing items {startItem} - {endItem} of {totalPages * itemsPerPage}
          </p>
          <p
            style={{ margin: "8px 0 0 0", fontSize: "14px", color: "#718096" }}
          >
            Current page: <strong>{currentPage}</strong> of {totalPages}
          </p>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};
