import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";
import { Text } from "../Text/Text";
import React from "react";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: STORYBOOK_STATUS.WIP,
    },
  },
  tags: ["autodocs", "status:wip"],
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "div", "span", "p"],
      description: "Render as different element (polymorphic)",
    },
    level: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
      description: "Heading level (h1-h6)",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
      description: "Color variant",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Text alignment",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size override",
    },
    weight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold", "bold"],
      description: "Font weight override",
    },
    darkMode: {
      control: { type: "boolean" },
      description: "Enable dark mode styling",
    },
    color: {
      control: { type: "color" },
      description: "Custom title color",
    },
    truncate: {
      control: { type: "boolean" },
      description: "Single-line truncation with ellipsis",
    },
    clamp: {
      control: { type: "boolean" },
      description: "Multi-line truncation",
    },
    maxLines: {
      control: { type: "number" },
      description: "Max lines when clamping",
    },
    spacing: {
      control: { type: "select" },
      options: ["tight", "normal", "wide"],
      description: "Letter spacing preset",
    },
    underlined: {
      control: { type: "boolean" },
      description: "Add underline decoration",
    },
    underlineStyle: {
      control: { type: "select" },
      options: ["solid", "double", "dotted", "dashed", "wavy"],
      description: "Underline style",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: "This is a title",
    level: 1,
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Title level={1}>Heading 1</Title>
      <Title level={2}>Heading 2</Title>
      <Title level={3}>Heading 3</Title>
      <Title level={4}>Heading 4</Title>
      <Title level={5}>Heading 5</Title>
      <Title level={6}>Heading 6</Title>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Title level={2} variant="default">
        Default variant
      </Title>
      <Title level={2} variant="primary">
        Primary variant
      </Title>
      <Title level={2} variant="secondary">
        Secondary variant
      </Title>
      <Title level={2} variant="success">
        Success variant
      </Title>
      <Title level={2} variant="warning">
        Warning variant
      </Title>
      <Title level={2} variant="danger">
        Danger variant
      </Title>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div
      style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Title level={2} align="left">
        Left aligned (default)
      </Title>
      <Title level={2} align="center">
        Center aligned
      </Title>
      <Title level={2} align="right">
        Right aligned
      </Title>
    </div>
  ),
};

export const CustomSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Title level={3} size="small">
        Small size override
      </Title>
      <Title level={3} size="medium">
        Medium size override
      </Title>
      <Title level={3} size="large">
        Large size override
      </Title>
    </div>
  ),
};

export const StyleModifiers: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Title level={2} weight="normal">
        Normal weight
      </Title>
      <Title level={2} weight="bold">
        Bold weight
      </Title>
      <Title level={2} underlined>
        Underlined title
      </Title>
      <Title level={2} underlined underlineStyle="wavy">
        Wavy underline
      </Title>
      <Title level={2} spacing="wide">
        Wide letter spacing
      </Title>
    </div>
  ),
};

export const Truncation: Story = {
  render: () => (
    <div
      style={{
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div>
        <Text size="xs" style={{ marginBottom: "8px" }}>
          Single-line truncate:
        </Text>
        <Title level={3} truncate>
          This is a very long title that will be truncated with an ellipsis
        </Title>
      </div>
      <div>
        <Text size="xs" style={{ marginBottom: "8px" }}>
          Multi-line clamp (2 lines):
        </Text>
        <Title level={3} clamp maxLines={2}>
          This is a longer title that will be clamped to exactly 2 lines with an ellipsis at the end
          when it exceeds the specified number of lines
        </Title>
      </div>
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div
      style={{
        background: "#1a1a1a",
        padding: "30px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Title level={2} darkMode variant="primary">
        Primary title in dark mode
      </Title>
      <Title level={2} darkMode variant="success">
        Success title in dark mode
      </Title>
      <Title level={2} darkMode variant="danger">
        Danger title in dark mode
      </Title>
    </div>
  ),
};

export const Polymorphic: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Title level={2}>Default h2 element</Title>
      <Title level={2} as="div">
        Renders as div with h2 styling
      </Title>
      <Title level={3} as="p">
        Renders as p with h3 styling
      </Title>
      <Title as="h1" level={4}>
        Renders as h1 with h4 styling
      </Title>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <Title level={1} style={{ marginBottom: "12px" }}>
        Responsive Heading
      </Title>
      <Text size="sm">
        Resize your viewport to see responsive sizing at 768px and 1024px breakpoints. Titles scale
        automatically for better readability.
      </Text>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Title level={2} color="#8b5cf6">
        Custom purple color
      </Title>
      <Title
        level={2}
        style={
          {
            "--title-underline-thickness": "4px",
            "--title-underline-offset": "8px",
          } as React.CSSProperties
        }
        underlined
        variant="primary"
      >
        Custom underline via CSS variables
      </Title>
    </div>
  ),
};
