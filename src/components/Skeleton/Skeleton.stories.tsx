import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { Box, Text } from "@/index";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  tags: ["autodocs", "status:ready"],
  argTypes: {
    shape: {
      control: { type: "select" },
      options: ["text", "circle", "rectangle"],
      description: "Skeleton shape",
      table: {
        defaultValue: { summary: "text" },
      },
    },
    animation: {
      control: { type: "select" },
      options: ["pulse", "wave", "none"],
      description: "Animation type",
      table: {
        defaultValue: { summary: "pulse" },
      },
    },
    width: {
      control: "text",
      description: "Skeleton width",
    },
    height: {
      control: "text",
      description: "Skeleton height",
    },
    count: {
      control: { type: "number", min: 1, max: 10 },
      description: "Number of skeleton items",
      table: {
        defaultValue: { summary: "1" },
      },
    },
    preset: {
      control: { type: "multi-select" },
      options: ["text", "title", "avatar", "button"],
      description: "Preset configurations",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {},
};

export const Shapes: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Skeleton shape="text" width="200px" />
      <Skeleton shape="circle" width="50px" height="50px" />
      <Skeleton shape="rectangle" width="200px" height="100px" />
    </Box>
  ),
};

export const Animations: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Skeleton animation="pulse" width="200px" />
      <Skeleton animation="wave" width="200px" />
      <Skeleton animation="none" width="200px" />
    </Box>
  ),
};

export const Multiple: Story = {
  args: {
    count: 3,
  },
};

export const Presets: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Skeleton preset={["text"]} />
      <Skeleton preset={["title"]} />
      <Skeleton preset={["avatar"]} />
      <Skeleton preset={["button"]} />
    </Box>
  ),
};

export const Polymorphic: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Skeleton as="div" />
      <Skeleton as="span" />
    </Box>
  ),
};

export const Sizing: Story = {
  render: () => (
    <Box preset={["stack"]} gap="lg">
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Fixed Width:</Text>
        <Skeleton width="300px" />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Fixed Height:</Text>
        <Skeleton height="50px" width="200px" />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Percentage Width:</Text>
        <Box style={{ width: "400px" }}>
          <Skeleton width="75%" />
        </Box>
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Number Values:</Text>
        <Skeleton width={250} height={30} />
      </Box>
    </Box>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <Box preset={["stack"]} gap="xl" style={{ maxWidth: "600px" }}>
      <Box preset={["stack"]} gap="md">
        <Text weight="semibold" size="lg">
          Card Loading State
        </Text>
        <Box
          style={{
            border: "1px solid var(--marduk-color-gray-200)",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <Box preset={["hstack"]} gap="md" style={{ marginBottom: "16px" }}>
            <Skeleton preset={["avatar"]} />
            <Box preset={["stack"]} gap="xs" style={{ flex: 1 }}>
              <Skeleton preset={["title"]} />
              <Skeleton width="60%" />
            </Box>
          </Box>
          <Skeleton count={3} width="100%" style={{ marginBottom: "8px" }} />
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text weight="semibold" size="lg">
          List Loading State
        </Text>
        <Box preset={["stack"]} gap="md">
          {Array.from({ length: 3 }).map((_, i) => (
            <Box key={i} preset={["hstack"]} gap="md">
              <Skeleton shape="circle" width="40px" height="40px" />
              <Box preset={["stack"]} gap="xs" style={{ flex: 1 }}>
                <Skeleton width="80%" />
                <Skeleton width="60%" />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text weight="semibold" size="lg">
          Article Loading State
        </Text>
        <Box preset={["stack"]} gap="md">
          <Skeleton shape="rectangle" width="100%" height="200px" />
          <Skeleton preset={["title"]} />
          <Skeleton count={4} />
        </Box>
      </Box>
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
          Dark Mode Skeletons
        </Text>
        <Skeleton width="200px" />
        <Skeleton shape="circle" width="50px" height="50px" />
        <Skeleton shape="rectangle" width="200px" height="100px" />
      </Box>
      <Box preset={["stack"]} gap="md">
        <Text preset={["primaryDark"]} weight="semibold">
          Multiple Items
        </Text>
        <Skeleton count={3} width="100%" />
      </Box>
      <Box preset={["stack"]} gap="md">
        <Text preset={["primaryDark"]} weight="semibold">
          Animations
        </Text>
        <Skeleton animation="pulse" width="200px" />
        <Skeleton animation="wave" width="200px" />
        <Skeleton animation="none" width="200px" />
      </Box>
    </Box>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Box preset={["stack"]} gap="lg">
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Custom Color:</Text>
        <Skeleton
          width="200px"
          style={
            {
              "--skeleton-bg": "#e0e7ff",
              "--skeleton-highlight": "#c7d2fe",
            } as React.CSSProperties
          }
        />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Custom Border Radius:</Text>
        <Skeleton
          width="200px"
          height="50px"
          style={
            {
              borderRadius: "12px",
            } as React.CSSProperties
          }
        />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Custom Opacity:</Text>
        <Skeleton
          width="200px"
          style={
            {
              opacity: "0.5",
            } as React.CSSProperties
          }
        />
      </Box>
    </Box>
  ),
};
