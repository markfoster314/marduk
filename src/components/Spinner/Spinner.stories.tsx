import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";
import { Box, Text } from "@/index";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  tags: ["autodocs", "status:ready"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Spinner size",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    speed: {
      control: { type: "select" },
      options: ["slow", "normal", "fast"],
      description: "Animation speed",
      table: {
        defaultValue: { summary: "normal" },
      },
    },
    label: {
      control: "text",
      description: "Optional loading label",
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
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <Box preset={["hstack"]} gap="lg">
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </Box>
  ),
};

export const Speeds: Story = {
  render: () => (
    <Box preset={["hstack"]} gap="lg">
      <Spinner speed="slow" label="Slow" />
      <Spinner speed="normal" label="Normal" />
      <Spinner speed="fast" label="Fast" />
    </Box>
  ),
};

export const WithLabel: Story = {
  args: {
    label: "Loading...",
  },
};

export const Presets: Story = {
  render: () => (
    <Box preset={["stack"]} gap="lg">
      <Spinner preset={["primary"]} label="Primary" />
      <Spinner preset={["success"]} label="Success" />
      <Spinner preset={["warning"]} label="Warning" />
      <Spinner preset={["danger"]} label="Danger" />
    </Box>
  ),
};

export const Polymorphic: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Spinner as="div" />
      <Spinner as="span" />
    </Box>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Box
      preset={["stack"]}
      gap="lg"
      style={{
        background: "#1a1a1a",
        padding: "32px",
        borderRadius: "8px",
      }}
    >
      <Box preset={["stack"]} gap="md">
        <Text preset={["primaryDark"]} weight="semibold">
          Dark Mode Spinners
        </Text>
        <Box preset={["hstack"]} gap="lg">
          <Spinner preset={["primaryDark"]} />
          <Spinner preset={["successDark"]} />
          <Spinner preset={["warningDark"]} />
          <Spinner preset={["dangerDark"]} />
        </Box>
      </Box>
      <Box preset={["stack"]} gap="md">
        <Text preset={["primaryDark"]} weight="semibold">
          With Labels
        </Text>
        <Box preset={["stack"]} gap="md">
          <Spinner preset={["primaryDark"]} label="Loading data..." />
          <Spinner preset={["successDark"]} label="Processing..." />
        </Box>
      </Box>
      <Box preset={["stack"]} gap="md">
        <Text preset={["primaryDark"]} weight="semibold">
          Sizes
        </Text>
        <Box preset={["hstack"]} gap="lg" align="center">
          <Spinner preset={["primaryDark"]} size="small" />
          <Spinner preset={["primaryDark"]} size="medium" />
          <Spinner preset={["primaryDark"]} size="large" />
        </Box>
      </Box>
    </Box>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <Box preset={["stack"]} gap="xl" style={{ maxWidth: "600px" }}>
      <Box preset={["stack"]} gap="md">
        <Text weight="semibold" size="lg">
          Button Loading State
        </Text>
        <Box preset={["hstack"]} gap="md">
          <Box
            style={{
              border: "1px solid var(--marduk-color-gray-300)",
              borderRadius: "6px",
              padding: "8px 16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Spinner size="small" />
            <Text size="sm">Saving...</Text>
          </Box>
          <Box
            style={{
              background: "var(--marduk-color-primary-500)",
              color: "white",
              borderRadius: "6px",
              padding: "8px 16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Spinner size="small" preset={["primaryDark"]} />
            <Text size="sm" style={{ color: "white" }}>
              Processing...
            </Text>
          </Box>
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text weight="semibold" size="lg">
          Page Loading State
        </Text>
        <Box
          style={{
            border: "1px solid var(--marduk-color-gray-200)",
            borderRadius: "8px",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <Spinner size="large" label="Loading page content..." />
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text weight="semibold" size="lg">
          Inline Loading
        </Text>
        <Box preset={["hstack"]} gap="sm" align="center">
          <Text>Fetching data</Text>
          <Spinner size="small" />
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text weight="semibold" size="lg">
          Status Indicators
        </Text>
        <Box preset={["stack"]} gap="sm">
          <Box preset={["hstack"]} gap="sm" align="center">
            <Spinner preset={["success"]} size="small" />
            <Text size="sm">Connection established</Text>
          </Box>
          <Box preset={["hstack"]} gap="sm" align="center">
            <Spinner preset={["warning"]} size="small" />
            <Text size="sm">Syncing data...</Text>
          </Box>
          <Box preset={["hstack"]} gap="sm" align="center">
            <Spinner preset={["danger"]} size="small" />
            <Text size="sm">Error occurred</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Box preset={["stack"]} gap="lg">
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Custom Color:</Text>
        <Spinner
          style={
            {
              "--spinner-color": "#8b5cf6",
            } as React.CSSProperties
          }
        />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Custom Size (via style):</Text>
        <Spinner
          style={
            {
              width: "60px",
              height: "60px",
            } as React.CSSProperties
          }
        />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Custom Label Styling:</Text>
        <Spinner
          label="Custom styled"
          style={
            {
              "--spinner-label-color": "#10b981",
              "--spinner-label-font-weight": "600",
            } as React.CSSProperties
          }
        />
      </Box>
    </Box>
  ),
};
