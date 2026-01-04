import type { Meta, StoryObj } from "@storybook/react";
import { LoadingIndicator } from "./LoadingIndicator";
import { Text } from "@/components/Text/Text";
import React from "react";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof LoadingIndicator> = {
  title: "Compositions/LoadingIndicator",
  component: LoadingIndicator,
  parameters: {
    layout: "fullscreen",
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  tags: ["autodocs", "status:ready"],
  argTypes: {
    animation: {
      control: { type: "select" },
      options: [
        "pulse",
        "rotate",
        "breathe",
        "glitch",
        "ripple",
        "bounce",
        "swing",
        "flip",
        "orbit",
        "shake",
      ],
      description: "Animation type",
    },
    showText: {
      control: { type: "boolean" },
      description: "Show/hide loading text",
    },
    text: {
      control: { type: "text" },
      description: "Custom loading text",
    },
    darkMode: {
      control: { type: "boolean" },
      description: "Dark mode styling",
    },
    textVariant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "danger", "warning", "muted"],
      description: "Text color variant",
    },
    position: {
      control: { type: "select" },
      options: [
        "top-left",
        "top-center",
        "top-right",
        "middle-left",
        "middle-center",
        "middle-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      description: "Position of the indicator",
    },
    fullscreen: {
      control: { type: "boolean" },
      description: "Use fullscreen overlay (fixed positioning) vs relative to container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingIndicator>;

export const Default: Story = {
  args: {
    animation: "pulse",
    text: "Loading",
    showText: true,
  },
};

export const Animations: Story = {
  render: () => <LoadingIndicator animation="ripple" />,
};

export const Glitch: Story = {
  render: () => <LoadingIndicator animation="glitch" text="Processing" />,
};

export const Bounce: Story = {
  render: () => <LoadingIndicator animation="bounce" />,
};

export const CustomText: Story = {
  render: () => <LoadingIndicator animation="breathe" text="Please wait" textVariant="primary" />,
};

export const CustomTextComponent: Story = {
  render: () => (
    <LoadingIndicator
      animation="pulse"
      customText={
        <div>
          <Text preset={["primary"]} weight="semibold" size="lg">
            Processing
          </Text>
          <Text preset={["primary"]} size="sm">
            This may take a moment
          </Text>
        </div>
      }
    />
  ),
};

export const NoText: Story = {
  render: () => <LoadingIndicator animation="rotate" showText={false} />,
};

export const DarkMode: Story = {
  render: () => <LoadingIndicator animation="pulse" darkMode textVariant="primary" />,
};

export const CustomStyling: Story = {
  render: () => (
    <LoadingIndicator
      animation="swing"
      style={
        {
          "--loading-indicator-text-size": "4rem",
          "--loading-indicator-swing-duration": "3s",
          "--loading-indicator-bg-light": "rgba(139, 92, 246, 0.5)",
        } as React.CSSProperties
      }
    />
  ),
};

// All Positions Showcase
export const AllPositions: Story = {
  render: () => (
    <div style={{ position: "relative", width: "100vw", height: "100vh", background: "#f0f0f0" }}>
      <LoadingIndicator fullscreen={true} position="top-left" animation="pulse" text="Top Left" />
      <LoadingIndicator
        fullscreen={true}
        position="top-center"
        animation="pulse"
        text="Top Center"
      />
      <LoadingIndicator fullscreen={true} position="top-right" animation="pulse" text="Top Right" />
      <LoadingIndicator
        fullscreen={true}
        position="middle-left"
        animation="pulse"
        text="Middle Left"
      />
      <LoadingIndicator
        fullscreen={true}
        position="middle-center"
        animation="pulse"
        text="Middle Center"
      />
      <LoadingIndicator
        fullscreen={true}
        position="middle-right"
        animation="pulse"
        text="Middle Right"
      />
      <LoadingIndicator
        fullscreen={true}
        position="bottom-left"
        animation="pulse"
        text="Bottom Left"
      />
      <LoadingIndicator
        fullscreen={true}
        position="bottom-center"
        animation="pulse"
        text="Bottom Center"
      />
      <LoadingIndicator
        fullscreen={true}
        position="bottom-right"
        animation="pulse"
        text="Bottom Right"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All 9 positions displayed simultaneously for comparison.",
      },
    },
  },
};

// Position with Different Animations
export const PositionWithAnimations: Story = {
  render: () => (
    <div style={{ position: "relative", width: "100vw", height: "100vh", background: "#f0f0f0" }}>
      <LoadingIndicator fullscreen={true} position="top-left" animation="rotate" text="Rotate" />
      <LoadingIndicator fullscreen={true} position="top-right" animation="bounce" text="Bounce" />
      <LoadingIndicator fullscreen={true} position="bottom-left" animation="glitch" text="Glitch" />
      <LoadingIndicator
        fullscreen={true}
        position="bottom-right"
        animation="ripple"
        text="Ripple"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different positions with different animations.",
      },
    },
  },
};

// Fullscreen Examples
export const FullscreenMode: Story = {
  render: () => <LoadingIndicator fullscreen position="middle-center" />,
  parameters: {
    docs: {
      description: {
        story: "Fullscreen mode - covers entire viewport with background.",
      },
    },
  },
};

export const ContainerMode: Story = {
  render: () => (
    <div
      style={{
        width: "400px",
        height: "300px",
        border: "2px solid #ccc",
        margin: "20px auto",
        position: "relative",
        background: "#f9f9f9",
      }}
    >
      <LoadingIndicator fullscreen={false} position="middle-center" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Container mode (default) - relative to parent container.",
      },
    },
  },
};

export const ContainerModePositions: Story = {
  render: () => (
    <div
      style={{
        width: "600px",
        height: "400px",
        border: "2px solid #ccc",
        margin: "20px auto",
        position: "relative",
        background: "#f9f9f9",
      }}
    >
      <LoadingIndicator fullscreen={false} position="top-left" text="Top Left" />
      <LoadingIndicator fullscreen={false} position="top-right" text="Top Right" />
      <LoadingIndicator fullscreen={false} position="bottom-left" text="Bottom Left" />
      <LoadingIndicator fullscreen={false} position="bottom-right" text="Bottom Right" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Container mode with different positions.",
      },
    },
  },
};
