import type { Meta, StoryObj } from "@storybook/react";
import { LoadingScreen } from "./LoadingScreen";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import { UserIcon } from "../../icons";
import React from "react";

const meta: Meta<typeof LoadingScreen> = {
  title: "Components/LoadingScreen",
  component: LoadingScreen,
  tags: ["autodocs"],
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
    },
    showText: {
      control: { type: "boolean" },
    },
    text: {
      control: { type: "text" },
    },
    darkMode: {
      control: { type: "boolean" },
    },
    textVariant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "muted",
      ],
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "600px",
          overflow: "hidden",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoadingScreen>;

export const Default: Story = {
  args: {},
};

export const Pulse: Story = {
  args: {
    animation: "pulse",
  },
};

export const Rotate: Story = {
  args: {
    animation: "rotate",
  },
};

export const Breathe: Story = {
  args: {
    animation: "breathe",
  },
};

export const Glitch: Story = {
  args: {
    animation: "glitch",
  },
};

export const Ripple: Story = {
  args: {
    animation: "ripple",
  },
};

export const Bounce: Story = {
  args: {
    animation: "bounce",
  },
};

export const Swing: Story = {
  args: {
    animation: "swing",
  },
};

export const Flip: Story = {
  args: {
    animation: "flip",
  },
};

export const Orbit: Story = {
  args: {
    animation: "orbit",
  },
};

export const Shake: Story = {
  args: {
    animation: "shake",
  },
};

export const CustomText: Story = {
  args: {
    animation: "pulse",
    text: "Please wait...",
  },
};

export const NoText: Story = {
  args: {
    animation: "rotate",
    showText: false,
  },
};

export const WithCustomIcon: Story = {
  args: {
    animation: "rotate",
    text: "Loading",
    icon: <UserIcon size={64} color="var(--marduk-color-primary-500)" />,
  },
};

export const DarkMode: Story = {
  args: {
    animation: "pulse",
    darkMode: true,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DarkModeRotate: Story = {
  args: {
    animation: "rotate",
    darkMode: true,
    text: "Processing",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const CustomTextVariations: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ position: "relative", minHeight: "100vh", padding: "40px" }}
      >
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Custom Text Examples
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Different text variations for loading screens
        </Text>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          "Loading",
          "Please wait...",
          "Processing",
          "Fetching data",
          "Initializing",
          "Preparing content",
        ].map((text, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              overflow: "hidden",
              height: "300px",
              position: "relative",
            }}
          >
            <LoadingScreen animation="pulse" text={text} />
          </div>
        ))}
      </div>
    </div>
  ),
};

export const WithoutText: Story = {
  args: {
    darkMode: true,
  },

  decorators: [
    (Story) => (
      <div
        style={{ position: "relative", minHeight: "100vh", padding: "40px" }}
      >
        <Story />
      </div>
    ),
  ],

  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Loading Screen Without Text
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Minimal loading screen with icon only
        </Text>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            overflow: "hidden",
            height: "300px",
            position: "relative",
          }}
        >
          <LoadingScreen animation="rotate" showText={false} />
        </div>
        <div
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            overflow: "hidden",
            height: "300px",
            position: "relative",
          }}
        >
          <LoadingScreen animation="pulse" showText={false} />
        </div>
        <div
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            overflow: "hidden",
            height: "300px",
            position: "relative",
          }}
        >
          <LoadingScreen animation="breathe" showText={false} />
        </div>
      </div>
    </div>
  ),
};

export const FullScreenDemo: Story = {
  args: {
    animation: "pulse",
    text: "Loading application",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export const TextVariants: Story = {
  args: {
    textVariant: "danger",
    animation: "ripple",
    darkMode: true,
  },

  decorators: [
    (Story) => (
      <div
        style={{ position: "relative", minHeight: "100vh", padding: "40px" }}
      >
        <Story />
      </div>
    ),
  ],

  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Text Variant Options
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Different text color variants for loading screens
        </Text>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          "default",
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "muted",
        ].map((variant) => (
          <div key={variant}>
            <Text
              style={{
                fontSize: "12px",
                color: "#666",
                marginBottom: "8px",
                textTransform: "capitalize",
              }}
            >
              {variant}
            </Text>
            <div
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                overflow: "hidden",
                height: "300px",
                position: "relative",
              }}
            >
              <LoadingScreen
                animation="pulse"
                text={`Loading (${variant})`}
                textVariant={variant as any}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const DarkModeComparison: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ position: "relative", minHeight: "100vh", padding: "40px" }}
      >
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Light Mode vs Dark Mode
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Compare loading screens in light and dark modes
        </Text>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <div>
          <Text
            style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}
          >
            Light Mode
          </Text>
          <div
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              overflow: "hidden",
              height: "300px",
              position: "relative",
            }}
          >
            <LoadingScreen animation="pulse" text="Loading" />
          </div>
        </div>
        <div>
          <Text
            style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}
          >
            Dark Mode
          </Text>
          <div
            style={{
              border: "1px solid #2d2d30",
              borderRadius: "8px",
              overflow: "hidden",
              height: "300px",
              position: "relative",
            }}
          >
            <LoadingScreen animation="pulse" text="Loading" darkMode />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveDemo: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ position: "relative", minHeight: "100vh", padding: "40px" }}
      >
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Responsive Loading Screens
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Loading screens adapt to different container sizes
        </Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <Text
            style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}
          >
            Large Container (600px)
          </Text>
          <div
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              overflow: "hidden",
              height: "400px",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <LoadingScreen animation="breathe" text="Loading content" />
          </div>
        </div>
        <div>
          <Text
            style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}
          >
            Medium Container (400px)
          </Text>
          <div
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              overflow: "hidden",
              height: "300px",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <LoadingScreen animation="rotate" text="Processing" />
          </div>
        </div>
        <div>
          <Text
            style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}
          >
            Small Container (300px)
          </Text>
          <div
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              overflow: "hidden",
              height: "200px",
              width: "100%",
              maxWidth: "300px",
            }}
          >
            <LoadingScreen animation="pulse" showText={false} />
          </div>
        </div>
      </div>
    </div>
  ),
};
