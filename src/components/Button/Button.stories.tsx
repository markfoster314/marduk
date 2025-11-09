import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { UserIcon, ThumbsUpIcon, TriangleExclamationIcon, CircleInfoIcon } from "@/icons";
import React from "react";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs", "status:ready"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  argTypes: {
    preset: {
      control: { type: "multi-select" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "defaultDark",
        "primaryDark",
        "secondaryDark",
        "successDark",
        "dangerDark",
        "warningDark",
      ],
      description: "Preset configurations (select multiple)",
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
    leftIcon: {
      control: { type: "select" },
      options: ["none", "user", "info", "warning", "thumbsup"],
      mapping: {
        none: undefined,
        user: <UserIcon size="small" />,
        info: <CircleInfoIcon size="small" />,
        warning: <TriangleExclamationIcon size="small" />,
        thumbsup: <ThumbsUpIcon size="small" />,
      },
      description: "Icon to display on the left",
    },
    rightIcon: {
      control: { type: "select" },
      options: ["none", "user", "info", "warning", "thumbsup"],
      mapping: {
        none: undefined,
        user: <UserIcon size="small" />,
        info: <CircleInfoIcon size="small" />,
        warning: <TriangleExclamationIcon size="small" />,
        thumbsup: <ThumbsUpIcon size="small" />,
      },
      description: "Icon to display on the right",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    preset: ["primary"],
  },
};

export const Presets: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button preset={["primary"]}>Primary</Button>
      <Button preset={["secondary"]}>Secondary</Button>
      <Button preset={["success"]}>Success</Button>
      <Button preset={["warning"]}>Warning</Button>
      <Button preset={["danger"]}>Danger</Button>
    </div>
  ),
};

export const Appearances: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button preset={["primary"]} appearance="filled">
          Filled
        </Button>
        <Button preset={["primary"]} appearance="outline">
          Outline
        </Button>
        <Button preset={["primary"]} appearance="text">
          Text
        </Button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button preset={["danger"]} appearance="filled">
          Filled
        </Button>
        <Button preset={["danger"]} appearance="outline">
          Outline
        </Button>
        <Button preset={["danger"]} appearance="text">
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
        <Button preset={["primary"]} leftIcon={<UserIcon />}>
          Left Icon
        </Button>
        <Button preset={["success"]} rightIcon={<ThumbsUpIcon />}>
          Right Icon
        </Button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          preset={["warning"]}
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
      <Button preset={["primary"]} iconOnly leftIcon={<UserIcon />} aria-label="User profile">
        Profile
      </Button>
      <Button preset={["success"]} iconOnly leftIcon={<ThumbsUpIcon />} aria-label="Like">
        Like
      </Button>
      <Button
        preset={["danger"]}
        iconOnly
        leftIcon={<TriangleExclamationIcon />}
        aria-label="Warning"
      >
        Warning
      </Button>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button preset={["primary"]} loading>
          Loading
        </Button>
        <Button preset={["success"]} loading loadingText="Saving...">
          Save
        </Button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button preset={["primary"]} appearance="outline" loading>
          Loading
        </Button>
        <Button preset={["danger"]} appearance="text" loading>
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
        <Button preset={["primary"]} onClickAsync={handleAsync}>
          Click me (2s async)
        </Button>
        <Button preset={["success"]} onClickAsync={handleAsync} loadingText="Processing...">
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
      <Button preset={["primary"]} fullWidth>
        Full Width Button
      </Button>
      <Button preset={["success"]} fullWidth appearance="outline">
        Full Width Outline
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button preset={["primary"]} disabled>
        Disabled
      </Button>
      <Button preset={["primary"]} appearance="outline" disabled>
        Disabled Outline
      </Button>
      <Button preset={["primary"]} appearance="text" disabled>
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
        <Button preset={["primaryDark"]}>Primary</Button>
        <Button preset={["successDark"]}>Success</Button>
        <Button preset={["dangerDark"]}>Danger</Button>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button preset={["primaryDark"]} appearance="outline">
          Outline
        </Button>
        <Button preset={["successDark"]} appearance="text">
          Text
        </Button>
      </div>
    </div>
  ),
};

export const Polymorphic: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Button preset={["primary"]}>Default button element</Button>
      <Button as="a" href="#" preset={["primary"]}>
        Renders as link
      </Button>
      <Button as="div" preset={["success"]}>
        Renders as div
      </Button>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button
        preset={["primary"]}
        style={
          {
            "--button-border-radius": "999px",
          } as React.CSSProperties
        }
      >
        Pill Button
      </Button>
      <Button
        preset={["success"]}
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
