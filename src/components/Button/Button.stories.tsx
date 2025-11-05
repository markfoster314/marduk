import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "warning", "danger"],
    },
    appearance: {
      control: { type: "select" },
      options: ["filled", "outline", "text"],
      description: "Visual style of the button",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
      description: "Shows loading spinner and disables button",
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

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading Button",
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

export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Loading State
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Buttons show a spinner and become disabled during loading
        </Text>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary" loading>
          Primary
        </Button>
        <Button variant="secondary" loading>
          Secondary
        </Button>
        <Button variant="success" loading>
          Success
        </Button>
        <Button variant="warning" loading>
          Warning
        </Button>
        <Button variant="danger" loading>
          Danger
        </Button>
      </div>
    </div>
  ),
};

export const LoadingAppearances: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Loading with Different Appearances
        </Title>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Filled
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" appearance="filled" loading>
            Saving...
          </Button>
          <Button variant="success" appearance="filled" loading>
            Processing...
          </Button>
          <Button variant="danger" appearance="filled" loading>
            Deleting...
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Outline
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" appearance="outline" loading>
            Saving...
          </Button>
          <Button variant="success" appearance="outline" loading>
            Processing...
          </Button>
          <Button variant="danger" appearance="outline" loading>
            Deleting...
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Text
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" appearance="text" loading>
            Loading...
          </Button>
          <Button variant="success" appearance="text" loading>
            Refreshing...
          </Button>
          <Button variant="danger" appearance="text" loading>
            Removing...
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const LoadingSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Loading with Different Sizes
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Spinner size automatically adjusts to button size
        </Text>
      </div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Button size="small" loading>
          Small Loading
        </Button>
        <Button size="medium" loading>
          Medium Loading
        </Button>
        <Button size="large" loading>
          Large Loading
        </Button>
      </div>
    </div>
  ),
};

export const LoadingInteractive: Story = {
  render: () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <Title level={3} style={{ marginBottom: "10px" }}>
            Interactive Loading Demo
          </Title>
          <Text
            style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}
          >
            Click the button to trigger a 2-second loading state
          </Text>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" loading={isLoading} onClick={handleClick}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
          <Button variant="success" loading={isLoading} onClick={handleClick}>
            {isLoading ? "Processing..." : "Submit"}
          </Button>
          <Button
            variant="danger"
            appearance="outline"
            loading={isLoading}
            onClick={handleClick}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
    );
  },
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
        <Title level={3} style={{ marginBottom: "10px" }}>
          Light Mode
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Dark Mode
        </Title>
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
        </div>
      </div>
    </div>
  ),
};

export const FilledAppearance: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Filled Buttons (Default)
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Solid background with white text
        </Text>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary" appearance="filled">
          Primary
        </Button>
        <Button variant="secondary" appearance="filled">
          Secondary
        </Button>
        <Button variant="success" appearance="filled">
          Success
        </Button>
        <Button variant="warning" appearance="filled">
          Warning
        </Button>
        <Button variant="danger" appearance="filled">
          Danger
        </Button>
      </div>
    </div>
  ),
};

export const OutlineAppearance: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Outline Buttons
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Transparent background with colored border and text
        </Text>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary" appearance="outline">
          Primary
        </Button>
        <Button variant="secondary" appearance="outline">
          Secondary
        </Button>
        <Button variant="success" appearance="outline">
          Success
        </Button>
        <Button variant="warning" appearance="outline">
          Warning
        </Button>
        <Button variant="danger" appearance="outline">
          Danger
        </Button>
      </div>
    </div>
  ),
};

export const TextAppearance: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Text Buttons
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Minimal style with just colored text, subtle hover effect
        </Text>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary" appearance="text">
          Primary
        </Button>
        <Button variant="secondary" appearance="text">
          Secondary
        </Button>
        <Button variant="success" appearance="text">
          Success
        </Button>
        <Button variant="warning" appearance="text">
          Warning
        </Button>
        <Button variant="danger" appearance="text">
          Danger
        </Button>
      </div>
    </div>
  ),
};

export const AllAppearances: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          All Appearances × All Variants
        </Title>
        <Text style={{ marginBottom: "20px", color: "#666", fontSize: "14px" }}>
          The new appearance prop lets you combine any variant color with any
          visual style!
        </Text>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "12px", fontSize: "14px", color: "#555" }}
          >
            Filled
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button variant="primary" appearance="filled">
              Primary
            </Button>
            <Button variant="secondary" appearance="filled">
              Secondary
            </Button>
            <Button variant="success" appearance="filled">
              Success
            </Button>
            <Button variant="warning" appearance="filled">
              Warning
            </Button>
            <Button variant="danger" appearance="filled">
              Danger
            </Button>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "12px", fontSize: "14px", color: "#555" }}
          >
            Outline
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button variant="primary" appearance="outline">
              Primary
            </Button>
            <Button variant="secondary" appearance="outline">
              Secondary
            </Button>
            <Button variant="success" appearance="outline">
              Success
            </Button>
            <Button variant="warning" appearance="outline">
              Warning
            </Button>
            <Button variant="danger" appearance="outline">
              Danger
            </Button>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "12px", fontSize: "14px", color: "#555" }}
          >
            Text
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button variant="primary" appearance="text">
              Primary
            </Button>
            <Button variant="secondary" appearance="text">
              Secondary
            </Button>
            <Button variant="success" appearance="text">
              Success
            </Button>
            <Button variant="warning" appearance="text">
              Warning
            </Button>
            <Button variant="danger" appearance="text">
              Danger
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AppearancesWithSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Appearances with Different Sizes
        </Title>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Small Buttons
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button size="small" variant="success" appearance="filled">
            Filled
          </Button>
          <Button size="small" variant="success" appearance="outline">
            Outline
          </Button>
          <Button size="small" variant="success" appearance="text">
            Text
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Medium Buttons
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button size="medium" variant="primary" appearance="filled">
            Filled
          </Button>
          <Button size="medium" variant="primary" appearance="outline">
            Outline
          </Button>
          <Button size="medium" variant="primary" appearance="text">
            Text
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Large Buttons
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button size="large" variant="danger" appearance="filled">
            Filled
          </Button>
          <Button size="large" variant="danger" appearance="outline">
            Outline
          </Button>
          <Button size="large" variant="danger" appearance="text">
            Text
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const DarkModeAppearances: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        padding: "20px",
        backgroundColor: "#1e1e1e",
        borderRadius: "8px",
      }}
    >
      <div>
        <Title level={3} style={{ marginBottom: "10px" }} darkMode>
          Dark Mode Appearances
        </Title>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px" }}
          darkMode
          variant="secondary"
        >
          Filled
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" appearance="filled" darkMode>
            Primary
          </Button>
          <Button variant="secondary" appearance="filled" darkMode>
            Secondary
          </Button>
          <Button variant="success" appearance="filled" darkMode>
            Success
          </Button>
          <Button variant="danger" appearance="filled" darkMode>
            Danger
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px" }}
          darkMode
          variant="secondary"
        >
          Outline
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" appearance="outline" darkMode>
            Primary
          </Button>
          <Button variant="secondary" appearance="outline" darkMode>
            Secondary
          </Button>
          <Button variant="success" appearance="outline" darkMode>
            Success
          </Button>
          <Button variant="danger" appearance="outline" darkMode>
            Danger
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px" }}
          darkMode
          variant="secondary"
        >
          Text
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" appearance="text" darkMode>
            Primary
          </Button>
          <Button variant="secondary" appearance="text" darkMode>
            Secondary
          </Button>
          <Button variant="success" appearance="text" darkMode>
            Success
          </Button>
          <Button variant="danger" appearance="text" darkMode>
            Danger
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Responsive Buttons (resize browser to see changes)
        </Title>
        <Text style={{ marginBottom: "20px", color: "#666", fontSize: "14px" }}>
          Buttons automatically adjust their size based on screen width:
          <br />
          Mobile (default) → Tablet (768px+) → Desktop (1024px+)
        </Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Small Buttons
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button size="small" variant="primary">
              Small Primary
            </Button>
            <Button size="small" variant="success" appearance="outline">
              Small Outline
            </Button>
            <Button size="small" variant="danger" appearance="text">
              Small Text
            </Button>
          </div>
        </div>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Medium Buttons
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button size="medium" variant="primary">
              Medium Primary
            </Button>
            <Button size="medium" variant="success" appearance="outline">
              Medium Outline
            </Button>
            <Button size="medium" variant="danger" appearance="text">
              Medium Text
            </Button>
          </div>
        </div>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Large Buttons
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button size="large" variant="primary">
              Large Primary
            </Button>
            <Button size="large" variant="success" appearance="outline">
              Large Outline
            </Button>
            <Button size="large" variant="danger" appearance="text">
              Large Text
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};
