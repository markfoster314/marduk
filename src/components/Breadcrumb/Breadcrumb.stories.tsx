import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";
import { Title } from "../Title/Title";
import React from "react";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  argTypes: {
    separator: {
      control: { type: "text" },
    },
    maxItems: {
      control: { type: "number" },
    },
    onItemClick: { action: "item clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

const sampleItems: BreadcrumbItem[] = [
  { label: "Home" },
  { label: "Products" },
  { label: "Electronics" },
  { label: "Computers" },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const WithCustomSeparator: Story = {
  args: {
    items: sampleItems,
    separator: ">",
  },
};

export const WithArrowSeparator: Story = {
  args: {
    items: sampleItems,
    separator: "→",
  },
};

export const WithClickHandler: Story = {
  args: {
    items: sampleItems,
    onItemClick: (item: BreadcrumbItem, index: number) => {
      alert(`Clicked on "${item.label}" at index ${index}`);
    },
  },
};

export const WithMaxItems: Story = {
  args: {
    items: [
      { label: "Home" },
      { label: "Category" },
      { label: "Subcategory" },
      { label: "Product Type" },
      { label: "Brand" },
      { label: "Model" },
      { label: "Details" },
    ],
    maxItems: 4,
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: "Home", icon: "☇" },
      { label: "Documents", icon: "☉" },
      { label: "Projects", icon: "☎" },
      { label: "Reports", icon: "☖" },
    ],
  },
};

export const ShortPath: Story = {
  args: {
    items: [{ label: "Home" }, { label: "Dashboard" }],
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: "Home" }],
  },
};

export const LongLabels: Story = {
  args: {
    items: [
      { label: "Home" },
      { label: "Very Long Category Name" },
      { label: "Even Longer Subcategory Name" },
      { label: "Product Details" },
    ],
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const items: BreadcrumbItem[] = [
      { label: "Home", icon: "☇" },
      { label: "Products", icon: "☉" },
      { label: "Electronics", icon: "☎" },
      { label: "Laptops", icon: "☖" },
    ];

    const handleClick = (item: BreadcrumbItem, index: number) => {
      console.log(`Navigating to: ${item.label}`);
    };

    return (
      <div>
        <Title level={3}>
          Click on any breadcrumb item (except the last one)
        </Title>
        <Breadcrumb items={items} onItemClick={handleClick} separator=">" />
      </div>
    );
  },
};

export const DifferentSeparators: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <p>
          <strong>Default separator (/):</strong>
        </p>
        <Breadcrumb items={sampleItems} />
      </div>
      <div>
        <p>
          <strong>Greater than (&gt;):</strong>
        </p>
        <Breadcrumb items={sampleItems} separator=">" />
      </div>
      <div>
        <p>
          <strong>Arrow (→):</strong>
        </p>
        <Breadcrumb items={sampleItems} separator="→" />
      </div>
      <div>
        <p>
          <strong>Chevron (»):</strong>
        </p>
        <Breadcrumb items={sampleItems} separator="»" />
      </div>
      <div>
        <p>
          <strong>Dot (•):</strong>
        </p>
        <Breadcrumb items={sampleItems} separator="•" />
      </div>
    </div>
  ),
};
