import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "outline",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    darkMode: {
      control: { type: "boolean" },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success Button",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const DarkMode: Story = {
  args: {
    darkMode: true,
    children: "Dark Mode Button",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DarkModeVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        padding: "20px",
        backgroundColor: "#1e1e1e",
      }}
    >
      <Button variant="primary" darkMode>
        Primary
      </Button>
      <Button variant="secondary" darkMode>
        Secondary
      </Button>
      <Button variant="success" darkMode>
        Success
      </Button>
      <Button variant="warning" darkMode>
        Warning
      </Button>
      <Button variant="danger" darkMode>
        Danger
      </Button>
      <Button variant="outline" darkMode>
        Outline
      </Button>
    </div>
  ),
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DarkModeComparison: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <h3 style={{ marginBottom: "10px" }}>Light Mode</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: "10px" }}>Dark Mode</h3>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            padding: "20px",
            backgroundColor: "#1e1e1e",
            borderRadius: "8px",
          }}
        >
          <Button variant="primary" darkMode>
            Primary
          </Button>
          <Button variant="secondary" darkMode>
            Secondary
          </Button>
          <Button variant="success" darkMode>
            Success
          </Button>
          <Button variant="warning" darkMode>
            Warning
          </Button>
          <Button variant="danger" darkMode>
            Danger
          </Button>
          <Button variant="outline" darkMode>
            Outline
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <h3 style={{ marginBottom: "10px" }}>
          Responsive Buttons (resize browser to see changes)
        </h3>
        <p style={{ marginBottom: "20px", color: "#666", fontSize: "14px" }}>
          Buttons automatically adjust their size based on screen width:
          <br />
          Mobile (default) → Tablet (768px+) → Desktop (1024px+)
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <h4 style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}>
            Small Buttons
          </h4>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button size="small" variant="primary">
              Small Primary
            </Button>
            <Button size="small" variant="secondary">
              Small Secondary
            </Button>
            <Button size="small" variant="outline">
              Small Outline
            </Button>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}>
            Medium Buttons
          </h4>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button size="medium" variant="primary">
              Medium Primary
            </Button>
            <Button size="medium" variant="secondary">
              Medium Secondary
            </Button>
            <Button size="medium" variant="outline">
              Medium Outline
            </Button>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}>
            Large Buttons
          </h4>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button size="large" variant="primary">
              Large Primary
            </Button>
            <Button size="large" variant="secondary">
              Large Secondary
            </Button>
            <Button size="large" variant="outline">
              Large Outline
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};
