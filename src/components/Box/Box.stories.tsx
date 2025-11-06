import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";
import { Text } from "../Text/Text";
import React from "react";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
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
      control: "select",
      options: [
        "stack",
        "hstack",
        "center",
        "card",
        "darkCard",
        "grid2",
        "grid3",
        "spaceBetween",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    padding: "md",
    children: "Box content",
  },
};

export const Layouts: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Box preset={["hstack"]} padding="md" backgroundColor="#e3f2fd">
        <Text as="div">Left</Text>
        <Text as="div">Right</Text>
      </Box>

      <Box preset={["center"]} height="100px" backgroundColor="#fef3c7">
        <Text as="div">Centered</Text>
      </Box>

      <Box preset={["spaceBetween"]} padding="md" backgroundColor="#e0e7ff">
        <Text as="div">Start</Text>
        <Text as="div">End</Text>
      </Box>
    </Box>
  ),
};

export const Presets: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Box preset={["card"]}>
        <Text as="div">Card preset</Text>
      </Box>

      <Box preset={["stack", "card"]} gap="sm">
        <Text as="div">Composed presets</Text>
        <Text as="div">Stack + Card</Text>
      </Box>

      <Box preset={["stack"]} gap="xl" padding="md" backgroundColor="#f0f9ff">
        <Text as="div">Preset with overrides</Text>
        <Text as="div">Custom gap and background</Text>
      </Box>
    </Box>
  ),
};

export const Polymorphic: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Box as="article" preset={["card"]}>
        <Text as="div">Box as article</Text>
      </Box>

      <Box as="section" padding="md" backgroundColor="#e3f2fd">
        <Text as="div">Box as section</Text>
      </Box>

      <Box as="nav" preset={["hstack"]}>
        <Text as="div">Nav</Text>
        <Text as="div">Item</Text>
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
          } as React.CSSProperties
        }
      >
        <Text as="div">CSS variable override</Text>
      </Box>

      <Box padding="md" backgroundColor="#f8fafc" borderRadius="md">
        <Text as="div">Prop-based styling</Text>
      </Box>
    </Box>
  ),
};
