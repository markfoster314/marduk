import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import React from "react";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "muted",
      ],
      description: "Color variant",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Text size",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
      description: "Text alignment",
    },
    weight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold", "bold"],
      description: "Font weight override",
    },
    as: {
      control: { type: "select" },
      options: ["p", "span", "div", "label", "a"],
      description: "HTML element to render as",
    },
    italic: {
      control: { type: "boolean" },
      description: "Italic text style",
    },
    darkMode: {
      control: { type: "boolean" },
      description: "Enable dark mode styling",
    },
    color: {
      control: { type: "color" },
      description: "Custom text color",
    },
    lineHeight: {
      control: { type: "select" },
      options: ["tight", "normal", "relaxed", "loose"],
      description: "Line height preset",
    },
    spacing: {
      control: { type: "select" },
      options: ["tight", "normal", "wide"],
      description: "Letter spacing preset",
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
    underlined: {
      control: { type: "boolean" },
      description: "Enhanced underline decoration",
    },
    underlineStyle: {
      control: { type: "select" },
      options: ["solid", "double", "dotted", "dashed", "wavy"],
      description: "Underline style",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is a text component",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text size="xs">Extra Small (xs)</Text>
      <Text size="sm">Small (sm)</Text>
      <Text size="md">Medium (md) - Default</Text>
      <Text size="lg">Large (lg)</Text>
      <Text size="xl">Extra Large (xl)</Text>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text variant="default">Default variant</Text>
      <Text variant="primary">Primary variant</Text>
      <Text variant="secondary">Secondary variant</Text>
      <Text variant="success">Success variant</Text>
      <Text variant="danger">Danger variant</Text>
      <Text variant="warning">Warning variant</Text>
      <Text variant="muted">Muted variant</Text>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div
      style={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Text align="left">Left aligned text (default)</Text>
      <Text align="center">Center aligned text</Text>
      <Text align="right">Right aligned text</Text>
      <Text align="justify">
        Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore.
      </Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text weight="normal">Normal weight (default)</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
      <Text weight="bold">Bold weight</Text>
    </div>
  ),
};

export const StyleModifiers: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text italic>Italic text</Text>
      <Text underlined>Underlined text</Text>
      <Text underlined underlineStyle="wavy">
        Wavy underline
      </Text>
      <Text weight="bold" italic underlined>
        Bold, italic, and underlined
      </Text>
      <Text spacing="wide">Wide letter spacing</Text>
      <Text lineHeight="loose">Loose line height for readability</Text>
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
        <Text size="xs" variant="muted" style={{ marginBottom: "8px" }}>
          Single-line truncate:
        </Text>
        <Text truncate>
          This is a very long text that will be truncated with an ellipsis when
          it exceeds the container width
        </Text>
      </div>
      <div>
        <Text size="xs" variant="muted" style={{ marginBottom: "8px" }}>
          Multi-line clamp (3 lines):
        </Text>
        <Text clamp maxLines={3}>
          This is a longer text that will be clamped to exactly 3 lines with an
          ellipsis at the end. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </Text>
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
        gap: "12px",
      }}
    >
      <Text darkMode variant="primary">
        Primary text in dark mode
      </Text>
      <Text darkMode variant="success">
        Success text in dark mode
      </Text>
      <Text darkMode variant="danger">
        Danger text in dark mode
      </Text>
      <Text darkMode variant="muted">
        Muted text in dark mode
      </Text>
    </div>
  ),
};

export const Polymorphic: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text as="p">Paragraph element</Text>
      <Text as="span">Span element (inline)</Text>
      <Text as="label">Label element</Text>
      <Text as="a" href="#" variant="primary" underlined>
        Link element
      </Text>
      <Text
        as="button"
        variant="danger"
        weight="bold"
        style={{ cursor: "pointer" }}
        onClick={() => alert("Clicked!")}
      >
        Button element
      </Text>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <Text size="md" style={{ marginBottom: "12px" }}>
        Resize your viewport to see responsive sizing at 768px and 1024px
        breakpoints.
      </Text>
      <Text variant="muted" size="sm">
        Note: The text component scales automatically at tablet (768px) and
        desktop (1024px) breakpoints.
      </Text>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text color="#8b5cf6" weight="bold">
        Custom purple color
      </Text>
      <Text
        style={
          {
            "--text-underline-thickness": "3px",
            "--text-underline-offset": "6px",
          } as React.CSSProperties
        }
        underlined
        variant="primary"
      >
        Custom underline thickness via CSS variables
      </Text>
    </div>
  ),
};
