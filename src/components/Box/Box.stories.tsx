import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";
import { Text } from "@/index";
import type { CSSProperties } from "react";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs", "status:ready"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "Content to render inside the Box",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    padding: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
    },
    margin: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
    },
    display: {
      control: "select",
      options: ["flex", "grid", "block", "inline-block", "inline", "none"],
    },
    direction: {
      control: "select",
      options: ["row", "column", "row-reverse", "column-reverse"],
    },
    justify: {
      control: "select",
      options: ["start", "end", "center", "between", "around", "evenly"],
    },
    align: {
      control: "select",
      options: ["start", "end", "center", "baseline", "stretch"],
    },
    gap: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    borderRadius: {
      control: "select",
      options: ["sm", "md", "lg", "full"],
    },
    preset: {
      control: { type: "multi-select" },
      options: [
        "stack",
        "hstack",
        "center",
        "card",
        "darkCard",
        "grid2",
        "grid3",
        "spaceBetween",
        "sidebar",
        "header",
        "footer",
      ],
      description: "Preset configurations (select multiple)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    padding: "md",
    children: <Text>Box content</Text>,
  },
};

export const Layouts: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Box preset={["hstack"]} padding="md" backgroundColor="#e3f2fd">
        <Text>Left</Text>
        <Text>Right</Text>
      </Box>

      <Box preset={["center"]} height="100px" backgroundColor="#fef3c7">
        <Text>Centered</Text>
      </Box>

      <Box preset={["spaceBetween"]} padding="md" backgroundColor="#e0e7ff">
        <Text>Start</Text>
        <Text>End</Text>
      </Box>
    </Box>
  ),
};

export const Presets: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Box preset={["card"]}>
        <Text>Card preset</Text>
      </Box>

      <Box preset={["stack", "card"]} gap="sm">
        <Text>Composed presets</Text>
        <Text>Stack + Card</Text>
      </Box>

      <Box preset={["stack"]} gap="xl" padding="md" backgroundColor="#f0f9ff">
        <Text>Preset with overrides</Text>
        <Text>Custom gap and background</Text>
      </Box>
    </Box>
  ),
};

export const Polymorphic: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Box as="article" preset={["card"]}>
        <Text>Box as article</Text>
      </Box>

      <Box as="section" padding="md" backgroundColor="#e3f2fd">
        <Text>Box as section</Text>
      </Box>

      <Box as="nav" preset={["hstack"]}>
        <Text>Nav</Text>
        <Text>Item</Text>
      </Box>
    </Box>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Box
        padding="lg"
        style={
          {
            "--box-bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
          } as CSSProperties
        }
      >
        <Text>CSS variable override</Text>
      </Box>

      <Box padding="md" backgroundColor="#f8fafc" borderRadius="md">
        <Text>Prop-based styling</Text>
      </Box>
    </Box>
  ),
};
