import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { Box, Button, Text } from "@/index";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  tags: ["autodocs", "status:ready"],
  argTypes: {
    children: {
      control: "text",
      description: "Badge content",
    },
    preset: {
      control: { type: "multi-select" },
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "primaryDark",
        "secondaryDark",
        "successDark",
        "warningDark",
        "dangerDark",
        "infoDark",
      ],
      description: "Preset configurations (select multiple)",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Badge size",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    dot: {
      control: { type: "boolean" },
      description: "Show as dot indicator",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    count: {
      control: { type: "number" },
      description: "Number to display (overrides children)",
    },
    position: {
      control: { type: "select" },
      options: ["standalone", "overlay"],
      description: "Positioning mode",
      table: {
        defaultValue: { summary: "standalone" },
      },
    },
    as: {
      control: { type: "select" },
      options: ["span", "div", "label"],
      description: "HTML element to render as",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Presets: Story = {
  render: () => (
    <Box preset={["stack"]} gap="xl">
      <Box preset={["stack"]} gap="md">
        <Text weight="semibold">Light Mode</Text>
        <Box preset={["hstack"]} gap="md" wrap="wrap">
          <Badge preset={["primary"]}>Primary</Badge>
          <Badge preset={["secondary"]}>Secondary</Badge>
          <Badge preset={["success"]}>Success</Badge>
          <Badge preset={["warning"]}>Warning</Badge>
          <Badge preset={["danger"]}>Danger</Badge>
          <Badge preset={["info"]}>Info</Badge>
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text weight="semibold">Dark Mode</Text>
        <Box
          preset={["hstack"]}
          gap="md"
          wrap="wrap"
          padding="md"
          backgroundColor="#1a1a1a"
          borderRadius="md"
        >
          <Badge preset={["primaryDark"]}>Primary</Badge>
          <Badge preset={["secondaryDark"]}>Secondary</Badge>
          <Badge preset={["successDark"]}>Success</Badge>
          <Badge preset={["warningDark"]}>Warning</Badge>
          <Badge preset={["dangerDark"]}>Danger</Badge>
          <Badge preset={["infoDark"]}>Info</Badge>
        </Box>
      </Box>
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box preset={["hstack"]} gap="md" align="center">
      <Badge preset={["primary"]} size="small">
        Small
      </Badge>
      <Badge preset={["primary"]} size="medium">
        Medium
      </Badge>
      <Badge preset={["primary"]} size="large">
        Large
      </Badge>
    </Box>
  ),
};

export const WithCount: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Box preset={["hstack"]} gap="md" align="center">
        <Text size="sm">Single digit:</Text>
        <Badge preset={["danger"]} count={1} />
        <Badge preset={["danger"]} count={5} />
        <Badge preset={["danger"]} count={9} />
      </Box>

      <Box preset={["hstack"]} gap="md" align="center">
        <Text size="sm">Double digit:</Text>
        <Badge preset={["primary"]} count={10} />
        <Badge preset={["primary"]} count={42} />
        <Badge preset={["primary"]} count={99} />
      </Box>

      <Box preset={["hstack"]} gap="md" align="center">
        <Text size="sm">Large numbers (99+):</Text>
        <Badge preset={["success"]} count={100} />
        <Badge preset={["success"]} count={150} />
        <Badge preset={["success"]} count={999} />
      </Box>
    </Box>
  ),
};

export const DotIndicator: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Box preset={["hstack"]} gap="md" align="center">
        <Text size="sm">Status indicators:</Text>
        <Badge preset={["success"]} dot />
        <Badge preset={["warning"]} dot />
        <Badge preset={["danger"]} dot />
      </Box>

      <Box preset={["hstack"]} gap="md" align="center">
        <Text size="sm">Sizes:</Text>
        <Badge preset={["primary"]} size="small" dot />
        <Badge preset={["primary"]} size="medium" dot />
        <Badge preset={["primary"]} size="large" dot />
      </Box>
    </Box>
  ),
};

export const OverlayPositioning: Story = {
  render: () => (
    <Box preset={["hstack"]} gap="xl" wrap="wrap">
      <Box style={{ position: "relative", display: "inline-block" }}>
        <Button preset={["primary"]} appearance="filled">
          Messages
        </Button>
        <Badge preset={["danger"]} count={3} position="overlay" />
      </Box>

      <Box style={{ position: "relative", display: "inline-block" }}>
        <Button preset={["secondary"]} appearance="filled">
          Notifications
        </Button>
        <Badge preset={["primary"]} count={12} position="overlay" />
      </Box>

      <Box style={{ position: "relative", display: "inline-block" }}>
        <Button preset={["primary"]} appearance="outline">
          Inbox
        </Button>
        <Badge preset={["success"]} count={99} position="overlay" />
      </Box>

      <Box style={{ position: "relative", display: "inline-block" }}>
        <Button preset={["primary"]} appearance="outline">
          Updates
        </Button>
        <Badge preset={["danger"]} count={150} position="overlay" />
      </Box>

      <Box style={{ position: "relative", display: "inline-block" }}>
        <Button preset={["secondary"]} appearance="filled">
          Online
        </Button>
        <Badge preset={["success"]} dot position="overlay" />
      </Box>
    </Box>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Box
      preset={["stack"]}
      gap="xl"
      padding="xl"
      backgroundColor="#1a1a1a"
      borderRadius="md"
      style={{ minWidth: "500px" }}
    >
      <Box preset={["stack"]} gap="md">
        <Text preset={["primaryDark"]} weight="semibold">
          Dark Mode Badges
        </Text>
        <Box preset={["hstack"]} gap="md" wrap="wrap">
          <Badge preset={["primaryDark"]}>Primary</Badge>
          <Badge preset={["secondaryDark"]}>Secondary</Badge>
          <Badge preset={["successDark"]}>Success</Badge>
          <Badge preset={["warningDark"]}>Warning</Badge>
          <Badge preset={["dangerDark"]}>Danger</Badge>
          <Badge preset={["infoDark"]}>Info</Badge>
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text preset={["primaryDark"]} weight="semibold">
          With Counts
        </Text>
        <Box preset={["hstack"]} gap="md" wrap="wrap">
          <Badge preset={["primaryDark"]} count={5} />
          <Badge preset={["successDark"]} count={12} />
          <Badge preset={["dangerDark"]} count={99} />
          <Badge preset={["warningDark"]} count={100} />
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text preset={["primaryDark"]} weight="semibold">
          Dot Indicators
        </Text>
        <Box preset={["hstack"]} gap="md">
          <Badge preset={["successDark"]} dot />
          <Badge preset={["warningDark"]} dot />
          <Badge preset={["dangerDark"]} dot />
        </Box>
      </Box>
    </Box>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <Box preset={["stack"]} gap="xl">
      <Box preset={["stack"]} gap="md">
        <Text weight="semibold">Navigation with Notifications</Text>
        <Box preset={["hstack"]} gap="lg">
          <Box style={{ position: "relative" }}>
            <Button preset={["primary"]} appearance="text">
              Messages
            </Button>
            <Badge preset={["danger"]} count={5} position="overlay" size="small" />
          </Box>
          <Box style={{ position: "relative" }}>
            <Button preset={["primary"]} appearance="text">
              Inbox
            </Button>
            <Badge preset={["primary"]} count={23} position="overlay" size="small" />
          </Box>
          <Box style={{ position: "relative" }}>
            <Button preset={["primary"]} appearance="text">
              Updates
            </Button>
            <Badge preset={["success"]} dot position="overlay" size="small" />
          </Box>
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text weight="semibold">Status Labels</Text>
        <Box preset={["hstack"]} gap="md" wrap="wrap">
          <Badge preset={["success"]}>Active</Badge>
          <Badge preset={["warning"]}>Pending</Badge>
          <Badge preset={["danger"]}>Blocked</Badge>
          <Badge preset={["info"]}>Draft</Badge>
          <Badge preset={["secondary"]}>Archived</Badge>
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text weight="semibold">Product Tags</Text>
        <Box preset={["hstack"]} gap="sm" wrap="wrap">
          <Badge preset={["success"]} size="small">
            New
          </Badge>
          <Badge preset={["danger"]} size="small">
            Sale
          </Badge>
          <Badge preset={["primary"]} size="small">
            Featured
          </Badge>
          <Badge preset={["warning"]} size="small">
            Limited
          </Badge>
        </Box>
      </Box>
    </Box>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Badge
        preset={["primary"]}
        style={
          {
            "--badge-border-radius": "4px",
            "--badge-padding-x": "12px",
          } as React.CSSProperties
        }
      >
        Square Badge
      </Badge>

      <Badge
        style={
          {
            "--badge-bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "--badge-color": "white",
          } as React.CSSProperties
        }
      >
        Gradient Badge
      </Badge>

      <Badge
        preset={["danger"]}
        style={
          {
            "--badge-font-weight": "400",
            "--badge-border-width": "2px",
            "--badge-border-color": "currentColor",
          } as React.CSSProperties
        }
      >
        Custom Border
      </Badge>
    </Box>
  ),
};
