import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { UserIcon, ThumbsUpIcon, TriangleExclamationIcon } from "@/icons";
import React from "react";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs", "status:wip"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.WIP,
    },
  },
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
    loadingText: {
      control: { type: "text" },
      description: "Text to show when loading",
    },
    onClickAsync: {
      description: "Async function that automatically manages loading state",
    },
    iconOnly: {
      control: { type: "boolean" },
      description: "Visually hides text for icon-only buttons",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Makes button take full width of container",
    },
    darkMode: {
      control: { type: "boolean" },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Variants: Story = {
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

export const Appearances: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button variant="primary" appearance="filled">
          Filled
        </Button>
        <Button variant="primary" appearance="outline">
          Outline
        </Button>
        <Button variant="primary" appearance="text">
          Text
        </Button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button variant="danger" appearance="filled">
          Filled
        </Button>
        <Button variant="danger" appearance="outline">
          Outline
        </Button>
        <Button variant="danger" appearance="text">
          Text
        </Button>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button variant="primary" leftIcon={<UserIcon />}>
          Left Icon
        </Button>
        <Button variant="success" rightIcon={<ThumbsUpIcon />}>
          Right Icon
        </Button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          variant="warning"
          leftIcon={<TriangleExclamationIcon />}
          rightIcon={<TriangleExclamationIcon />}
        >
          Both Icons
        </Button>
      </div>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button variant="primary" iconOnly leftIcon={<UserIcon />} aria-label="User profile">
        Profile
      </Button>
      <Button variant="success" iconOnly leftIcon={<ThumbsUpIcon />} aria-label="Like">
        Like
      </Button>
      <Button variant="danger" iconOnly leftIcon={<TriangleExclamationIcon />} aria-label="Warning">
        Warning
      </Button>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button variant="primary" loading>
          Loading
        </Button>
        <Button variant="success" loading loadingText="Saving...">
          Save
        </Button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button variant="primary" appearance="outline" loading>
          Loading
        </Button>
        <Button variant="danger" appearance="text" loading>
          Loading
        </Button>
      </div>
    </div>
  ),
};

export const AsyncOnClick: Story = {
  render: () => {
    const handleAsync = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Async operation completed!");
    };

    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <Button variant="primary" onClickAsync={handleAsync}>
          Click me (2s async)
        </Button>
        <Button variant="success" onClickAsync={handleAsync} loadingText="Processing...">
          Save Data
        </Button>
      </div>
    );
  },
};

export const FullWidth: Story = {
  render: () => (
    <div
      style={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Button variant="primary" fullWidth>
        Full Width Button
      </Button>
      <Button variant="success" fullWidth appearance="outline">
        Full Width Outline
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button variant="primary" disabled>
        Disabled
      </Button>
      <Button variant="primary" appearance="outline" disabled>
        Disabled Outline
      </Button>
      <Button variant="primary" appearance="text" disabled>
        Disabled Text
      </Button>
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
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button darkMode variant="primary">
          Primary
        </Button>
        <Button darkMode variant="success">
          Success
        </Button>
        <Button darkMode variant="danger">
          Danger
        </Button>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button darkMode variant="primary" appearance="outline">
          Outline
        </Button>
        <Button darkMode variant="success" appearance="text">
          Text
        </Button>
      </div>
    </div>
  ),
};

export const Polymorphic: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Button variant="primary">Default button element</Button>
      <Button as="a" href="#" variant="primary">
        Renders as link
      </Button>
      <Button as="div" variant="success">
        Renders as div
      </Button>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button
        variant="primary"
        style={
          {
            "--button-border-radius": "999px",
          } as React.CSSProperties
        }
      >
        Pill Button
      </Button>
      <Button
        variant="success"
        style={
          {
            "--button-active-scale": "1",
            "--button-padding-x": "32px",
          } as React.CSSProperties
        }
      >
        Custom Padding
      </Button>
    </div>
  ),
};
