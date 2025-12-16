import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs", "status:ready"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "React element that triggers the tooltip",
      table: {
        type: { summary: "ReactElement" },
      },
    },
    content: {
      control: "text",
      description: "Tooltip content (string or ReactNode)",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Tooltip position relative to trigger",
    },
    delay: {
      control: { type: "number" },
      description: "Delay in milliseconds before showing tooltip",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "200" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    content: "This is a tooltip",
    position: "top",
    children: <Button>Hover me (Top)</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: "This is a tooltip",
    position: "bottom",
    children: <Button>Hover me (Bottom)</Button>,
  },
};

export const Left: Story = {
  args: {
    content: "This is a tooltip",
    position: "left",
    children: <Button>Hover me (Left)</Button>,
  },
};

export const Right: Story = {
  args: {
    content: "This is a tooltip",
    position: "right",
    children: <Button>Hover me (Right)</Button>,
  },
};

export const LongContent: Story = {
  args: {
    content: "This is a longer tooltip with more content",
    position: "top",
    children: <Button>Hover for long tooltip</Button>,
  },
};

export const WithDelay: Story = {
  args: {
    content: "This tooltip appears after 500ms",
    position: "top",
    delay: 500,
    children: <Button>Hover me (with delay)</Button>,
  },
};

export const NoDelay: Story = {
  args: {
    content: "This tooltip appears instantly",
    position: "top",
    delay: 0,
    children: <Button>Hover me (no delay)</Button>,
  },
};

export const AllPositions: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Tooltip content="Top tooltip" position="top">
        <Button>Top</Button>
      </Tooltip>

      <Tooltip content="Bottom tooltip" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>

      <Tooltip content="Left tooltip" position="left">
        <Button>Left</Button>
      </Tooltip>

      <Tooltip content="Right tooltip" position="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
};

export const OnText: Story = {
  render: () => (
    <div style={{ padding: "40px" }}>
      <p>
        This is a paragraph with{" "}
        <Tooltip content="More information about this" position="top">
          <span style={{ borderBottom: "1px dashed #3182ce", cursor: "help" }}>a tooltip</span>
        </Tooltip>{" "}
        inline.
      </p>
    </div>
  ),
};
