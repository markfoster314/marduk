import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";
import { Box, Text } from "@/index";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  tags: ["autodocs", "status:ready"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Divider orientation",
      table: {
        defaultValue: { summary: "horizontal" },
      },
    },
    thickness: {
      control: { type: "select" },
      options: ["thin", "medium", "thick"],
      description: "Divider thickness",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    spacing: {
      control: { type: "select" },
      options: ["none", "small", "medium", "large"],
      description: "Spacing around divider",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    label: {
      control: "text",
      description: "Optional label text or ReactNode",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    preset: {
      control: { type: "multi-select" },
      options: ["subtle", "bold", "primary", "dark"],
      description: "Preset configurations",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const Orientations: Story = {
  render: () => (
    <Box preset={["stack"]} gap="lg">
      <Text>Horizontal divider:</Text>
      <Divider orientation="horizontal" />
      <Box preset={["hstack"]} gap="md" style={{ height: "100px" }}>
        <Text>Vertical</Text>
        <Divider orientation="vertical" />
        <Text>divider</Text>
      </Box>
    </Box>
  ),
};

export const Thickness: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Divider thickness="thin" />
      <Divider thickness="medium" />
      <Divider thickness="thick" />
    </Box>
  ),
};

export const WithLabel: Story = {
  args: {
    label: "Section",
  },
};

export const Presets: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Divider preset={["subtle"]} />
      <Divider preset={["bold"]} />
      <Divider preset={["primary"]} />
    </Box>
  ),
};

export const Polymorphic: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Divider as="hr" />
      <Divider as="div" />
    </Box>
  ),
};

export const Spacing: Story = {
  render: () => (
    <Box preset={["stack"]} gap="lg">
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">No spacing:</Text>
        <Box style={{ background: "#f3f4f6", padding: "8px" }}>
          <Text size="sm">Content above</Text>
          <Divider spacing="none" />
          <Text size="sm">Content below</Text>
        </Box>
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Small spacing:</Text>
        <Box style={{ background: "#f3f4f6", padding: "8px" }}>
          <Text size="sm">Content above</Text>
          <Divider spacing="small" />
          <Text size="sm">Content below</Text>
        </Box>
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Medium spacing:</Text>
        <Box style={{ background: "#f3f4f6", padding: "8px" }}>
          <Text size="sm">Content above</Text>
          <Divider spacing="medium" />
          <Text size="sm">Content below</Text>
        </Box>
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Large spacing:</Text>
        <Box style={{ background: "#f3f4f6", padding: "8px" }}>
          <Text size="sm">Content above</Text>
          <Divider spacing="large" />
          <Text size="sm">Content below</Text>
        </Box>
      </Box>
    </Box>
  ),
};

export const WithLabelVariations: Story = {
  render: () => (
    <Box preset={["stack"]} gap="lg">
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Simple text label:</Text>
        <Divider label="Section" />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Long label:</Text>
        <Divider label="This is a longer section divider label" />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">With preset and label:</Text>
        <Divider preset={["primary"]} label="Featured Section" />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Thick divider with label:</Text>
        <Divider thickness="thick" label="Important Section" />
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
          Dark Mode Dividers
        </Text>
        <Divider preset={["dark"]} />
        <Divider preset={["dark"]} label="Section" />
      </Box>
      <Box preset={["stack"]} gap="md">
        <Text preset={["primaryDark"]} weight="semibold">
          Thickness Variants
        </Text>
        <Divider preset={["dark"]} thickness="thin" />
        <Divider preset={["dark"]} thickness="medium" />
        <Divider preset={["dark"]} thickness="thick" />
      </Box>
      <Box preset={["stack"]} gap="md">
        <Text preset={["primaryDark"]} weight="semibold">
          With Labels
        </Text>
        <Divider preset={["dark"]} label="First Section" />
        <Divider preset={["dark"]} label="Second Section" />
        <Divider preset={["dark"]} label="Third Section" />
      </Box>
    </Box>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <Box preset={["stack"]} gap="xl" style={{ maxWidth: "600px" }}>
      <Box preset={["stack"]} gap="md">
        <Text weight="semibold">Form Sections</Text>
        <Box preset={["stack"]} gap="md">
          <Text size="sm">Personal Information</Text>
          <Divider spacing="small" />
          <Text size="sm">Contact Details</Text>
          <Divider spacing="small" />
          <Text size="sm">Preferences</Text>
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text weight="semibold">Content Sections</Text>
        <Box preset={["stack"]} gap="md">
          <Text>Introduction</Text>
          <Text preset={["muted"]} size="sm">
            This is the introduction section with some content.
          </Text>
          <Divider preset={["subtle"]} label="Main Content" />
          <Text>Main Content</Text>
          <Text preset={["muted"]} size="sm">
            This is the main content section.
          </Text>
          <Divider preset={["subtle"]} label="Conclusion" />
          <Text>Conclusion</Text>
          <Text preset={["muted"]} size="sm">
            This is the conclusion section.
          </Text>
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text weight="semibold">Navigation Dividers</Text>
        <Box preset={["hstack"]} gap="md" style={{ height: "40px" }}>
          <Text size="sm">Home</Text>
          <Divider orientation="vertical" spacing="none" />
          <Text size="sm">About</Text>
          <Divider orientation="vertical" spacing="none" />
          <Text size="sm">Contact</Text>
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
        <Divider
          style={
            {
              "--divider-color": "#8b5cf6",
            } as React.CSSProperties
          }
        />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Gradient Divider:</Text>
        <Divider
          style={
            {
              "--divider-color": "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
              "--divider-thickness": "3px",
            } as React.CSSProperties
          }
        />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Custom Thickness:</Text>
        <Divider
          style={
            {
              "--divider-thickness": "6px",
              "--divider-color": "#10b981",
            } as React.CSSProperties
          }
        />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Dashed Style (via border):</Text>
        <Divider
          as="div"
          style={
            {
              height: "1px",
              background: "none",
              borderTop: "2px dashed var(--marduk-color-gray-400)",
            } as React.CSSProperties
          }
        />
      </Box>
    </Box>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md" style={{ maxWidth: "600px" }}>
      <Text size="sm">
        Resize your viewport to see responsive spacing at 768px and 1024px breakpoints. Divider
        spacing scales automatically for better visual balance.
      </Text>
      <Box preset={["stack"]} gap="md">
        <Text size="sm">Content above</Text>
        <Divider spacing="medium" />
        <Text size="sm">Content below</Text>
      </Box>
    </Box>
  ),
};
