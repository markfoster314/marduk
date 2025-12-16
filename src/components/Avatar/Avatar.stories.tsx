import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { Box } from "@/index";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs", "status:ready"],
  parameters: {
    layout: "centered",
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  argTypes: {
    alt: {
      control: "text",
      description: "Alt text (required)",
    },
    src: {
      control: "text",
      description: "Image source URL",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "small", "medium", "large", "xl"],
      description: "Avatar size",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    shape: {
      control: { type: "select" },
      options: ["circle", "square", "rounded"],
      description: "Avatar shape",
      table: {
        defaultValue: { summary: "circle" },
      },
    },
    status: {
      control: { type: "select" },
      options: ["online", "offline", "busy", "away"],
      description: "Status indicator",
    },
    initials: {
      control: "text",
      description: "Custom initials (overrides auto-generated)",
      ifUndefined: undefined,
    },
    preset: {
      control: { type: "multi-select" },
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "primaryDark",
        "secondaryDark",
        "successDark",
        "warningDark",
        "dangerDark",
      ],
      description: "Preset configurations",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    alt: "User name",
  },
};

export const Sizes: Story = {
  render: () => (
    <Box preset={["hstack"]} gap="md" align="end">
      <Avatar alt="XS" size="xs" />
      <Avatar alt="Small" size="small" />
      <Avatar alt="Medium" size="medium" />
      <Avatar alt="Large" size="large" />
      <Avatar alt="XL" size="xl" />
    </Box>
  ),
};

export const Shapes: Story = {
  render: () => (
    <Box preset={["hstack"]} gap="md">
      <Avatar alt="Circle" shape="circle" />
      <Avatar alt="Square" shape="square" />
      <Avatar alt="Rounded" shape="rounded" />
    </Box>
  ),
};

export const WithImage: Story = {
  args: {
    src: "https://via.placeholder.com/100",
    alt: "User avatar",
  },
};

export const WithStatus: Story = {
  render: () => (
    <Box preset={["hstack"]} gap="md">
      <Avatar alt="Online" status="online" />
      <Avatar alt="Offline" status="offline" />
      <Avatar alt="Busy" status="busy" />
      <Avatar alt="Away" status="away" />
    </Box>
  ),
};

export const Presets: Story = {
  render: () => (
    <Box preset={["hstack"]} gap="md">
      <Avatar alt="Primary" preset={["primary"]} />
      <Avatar alt="Success" preset={["success"]} />
      <Avatar alt="Warning" preset={["warning"]} />
      <Avatar alt="Danger" preset={["danger"]} />
    </Box>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Box
      preset={["stack"]}
      gap="md"
      style={{
        background: "#1a1a1a",
        padding: "30px",
        borderRadius: "8px",
      }}
    >
      <Box preset={["hstack"]} gap="md">
        <Avatar alt="Primary Dark" preset={["primaryDark"]} />
        <Avatar alt="Success Dark" preset={["successDark"]} />
        <Avatar alt="Danger Dark" preset={["dangerDark"]} />
      </Box>
      <Box preset={["hstack"]} gap="md">
        <Avatar alt="With Status" preset={["primaryDark"]} status="online" />
        <Avatar alt="Large" preset={["successDark"]} size="large" />
      </Box>
    </Box>
  ),
};

export const Polymorphic: Story = {
  render: () => (
    <Box preset={["hstack"]} gap="md">
      <Avatar alt="Div" as="div" />
      <Avatar alt="Span" as="span" />
    </Box>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Box preset={["hstack"]} gap="md">
      <Avatar
        alt="Custom"
        preset={["primary"]}
        style={
          {
            "--avatar-bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "--avatar-border": "3px solid #8b5cf6",
          } as React.CSSProperties
        }
      />
      <Avatar
        alt="Custom Size"
        size="large"
        style={
          {
            "--avatar-bg": "#10b981",
            "--avatar-color": "#ffffff",
          } as React.CSSProperties
        }
      />
    </Box>
  ),
};
