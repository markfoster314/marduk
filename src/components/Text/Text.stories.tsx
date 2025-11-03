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
      description: "Font weight override (optional)",
    },
    as: {
      control: { type: "select" },
      options: ["p", "span", "div", "label"],
      description: "HTML element to render as",
    },
    italic: {
      control: { type: "boolean" },
      description: "Italic text style",
    },
    underline: {
      control: { type: "boolean" },
      description: "Underlined text",
    },
    darkMode: {
      control: { type: "boolean" },
      description: "Enable dark mode styling",
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
      <Text size="xs">Extra Small Text (xs)</Text>
      <Text size="sm">Small Text (sm)</Text>
      <Text size="md">Medium Text (md) - Default</Text>
      <Text size="lg">Large Text (lg)</Text>
      <Text size="xl">Extra Large Text (xl)</Text>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text variant="default">Default variant text</Text>
      <Text variant="primary">Primary variant text</Text>
      <Text variant="secondary">Secondary variant text</Text>
      <Text variant="success">Success variant text</Text>
      <Text variant="danger">Danger variant text</Text>
      <Text variant="warning">Warning variant text</Text>
      <Text variant="muted">Muted variant text</Text>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "500px",
      }}
    >
      <Text align="left">
        This text is left aligned. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </Text>
      <Text align="center">
        This text is center aligned. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </Text>
      <Text align="right">
        This text is right aligned. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </Text>
      <Text align="justify">
        This text is justified. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </div>
  ),
};

export const StyleModifiers: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text>Regular text</Text>
      <Text italic>Italic text</Text>
      <Text underline>Underlined text</Text>
      <Text italic underline>
        Italic and underlined text
      </Text>
      <Text weight="bold" italic underline>
        Bold, italic, and underlined
      </Text>
    </div>
  ),
};

export const AsElements: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text as="p">Rendered as paragraph (p)</Text>
      <Text as="span">Rendered as span</Text>
      <Text as="div">Rendered as div</Text>
      <Text as="label">Rendered as label</Text>
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div
      style={{ background: "#1e1e1e", padding: "40px", borderRadius: "8px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Text darkMode>Default dark mode text</Text>
        <Text darkMode variant="primary">
          Primary in dark mode
        </Text>
        <Text darkMode variant="success">
          Success in dark mode
        </Text>
        <Text darkMode variant="warning">
          Warning in dark mode
        </Text>
        <Text darkMode variant="danger">
          Danger in dark mode
        </Text>
        <Text darkMode variant="muted">
          Muted in dark mode
        </Text>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const DarkModeComparison: Story = {
  render: () => (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
    >
      <div
        style={{ padding: "30px", background: "#ffffff", borderRadius: "8px" }}
      >
        <Text weight="bold" style={{ marginBottom: "16px" }}>
          Light Mode
        </Text>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Text variant="default">Default text color</Text>
          <Text variant="primary">Primary text color</Text>
          <Text variant="success">Success text color</Text>
          <Text variant="danger">Danger text color</Text>
          <Text variant="warning">Warning text color</Text>
          <Text variant="muted">Muted text color</Text>
        </div>
      </div>
      <div
        style={{ padding: "30px", background: "#1e1e1e", borderRadius: "8px" }}
      >
        <Text darkMode weight="bold" style={{ marginBottom: "16px" }}>
          Dark Mode
        </Text>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Text darkMode variant="default">
            Default text color
          </Text>
          <Text darkMode variant="primary">
            Primary text color
          </Text>
          <Text darkMode variant="success">
            Success text color
          </Text>
          <Text darkMode variant="danger">
            Danger text color
          </Text>
          <Text darkMode variant="warning">
            Warning text color
          </Text>
          <Text darkMode variant="muted">
            Muted text color
          </Text>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ width: "100%", padding: "20px" }}>
      <div style={{ marginBottom: "40px" }}>
        <Text size="sm" variant="muted" style={{ marginBottom: "20px" }}>
          Resize your browser window to see text sizes adapt automatically. Text
          scales up on larger screens for better readability.
        </Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <Text size="xs" weight="semibold">
            Extra Small (xs)
          </Text>
          <Text size="xs" variant="muted">
            Mobile: 10px → Tablet: 12px
          </Text>
        </div>
        <div>
          <Text size="sm" weight="semibold">
            Small (sm)
          </Text>
          <Text size="sm" variant="muted">
            Mobile: 12px → Tablet: 14px
          </Text>
        </div>
        <div>
          <Text size="md" weight="semibold">
            Medium (md)
          </Text>
          <Text size="md" variant="muted">
            Mobile: 14px → Tablet: 16px
          </Text>
        </div>
        <div>
          <Text size="lg" weight="semibold">
            Large (lg)
          </Text>
          <Text size="lg" variant="muted">
            Mobile: 16px → Tablet: 18px
          </Text>
        </div>
        <div>
          <Text size="xl" weight="semibold">
            Extra Large (xl)
          </Text>
          <Text size="xl" variant="muted">
            Mobile: 18px → Tablet: 20px
          </Text>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export const Paragraph: Story = {
  args: {
    children:
      "This is a paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export const PrimaryText: Story = {
  args: {
    children: "This is primary colored text",
    variant: "primary",
    weight: "semibold",
  },
};

export const ErrorMessage: Story = {
  args: {
    children: "Error: This field is required",
    variant: "danger",
    size: "sm",
  },
};

export const SuccessMessage: Story = {
  args: {
    children: "Success! Your changes have been saved",
    variant: "success",
    weight: "medium",
  },
};

export const WarningMessage: Story = {
  args: {
    children: "Warning: This action cannot be undone",
    variant: "warning",
    weight: "medium",
  },
};

export const MutedCaption: Story = {
  args: {
    children: "Last updated 2 hours ago",
    variant: "muted",
    size: "sm",
  },
};
