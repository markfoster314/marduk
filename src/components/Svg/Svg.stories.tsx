// TODO: Update the icon svg's, some of them are not correct (p sure
//       check icon is filled in and shouldn't be, stuff like that)

import type { Meta, StoryObj } from "@storybook/react";
import { Svg } from "./Svg";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import React from "react";

const meta: Meta<typeof Svg> = {
  title: "Components/Svg",
  component: Svg,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    color: {
      control: { type: "color" },
    },
    darkMode: {
      control: { type: "boolean" },
    },
    viewBox: {
      control: { type: "text" },
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    rotate: {
      control: { type: "select" },
      options: [0, 90, 180, 270],
    },
    flip: {
      control: { type: "select" },
      options: ["horizontal", "vertical", "both"],
    },
    spin: {
      control: { type: "boolean" },
    },
    spinSpeed: {
      control: { type: "select" },
      options: ["slow", "normal", "fast"],
    },
    animation: {
      control: { type: "select" },
      options: ["heartpulse"],
    },
    decorative: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Svg>;

const HeartIcon = () => (
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
);

const StarIcon = () => (
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
);

const CheckIcon = () => <polyline points="20 6 9 17 4 12" />;

const HomeIcon = () => (
  <>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </>
);

const SettingsIcon = () => (
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
  </>
);

const UserIcon = () => (
  <>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </>
);

export const Default: Story = {
  args: {
    children: <HeartIcon />,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: <HeartIcon />,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: <HeartIcon />,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: <HeartIcon />,
  },
};

export const CustomSize: Story = {
  args: {
    size: 48,
    children: <HeartIcon />,
  },
};

export const CustomColor: Story = {
  args: {
    color: "#ff6b6b",
    children: <HeartIcon />,
  },
};

export const WithThemeColor: Story = {
  args: {
    color: "var(--marduk-color-primary-500)",
    children: <HeartIcon />,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Svg size="small">
          <StarIcon />
        </Svg>
        <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
          Small (16px)
        </Text>
      </div>
      <div style={{ textAlign: "center" }}>
        <Svg size="medium">
          <StarIcon />
        </Svg>
        <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
          Medium (24px)
        </Text>
      </div>
      <div style={{ textAlign: "center" }}>
        <Svg size="large">
          <StarIcon />
        </Svg>
        <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
          Large (32px)
        </Text>
      </div>
      <div style={{ textAlign: "center" }}>
        <Svg size={48}>
          <StarIcon />
        </Svg>
        <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
          Custom (48px)
        </Text>
      </div>
    </div>
  ),
};

export const IconCollection: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Svg>
        <HeartIcon />
      </Svg>
      <Svg>
        <StarIcon />
      </Svg>
      <Svg>
        <CheckIcon />
      </Svg>
      <Svg>
        <HomeIcon />
      </Svg>
      <Svg>
        <SettingsIcon />
      </Svg>
      <Svg>
        <UserIcon />
      </Svg>
    </div>
  ),
};

export const ColorVariations: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <div style={{ textAlign: "center" }}>
        <Svg color="var(--marduk-color-primary-500)">
          <HeartIcon />
        </Svg>
        <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
          Primary
        </Text>
      </div>
      <div style={{ textAlign: "center" }}>
        <Svg color="var(--marduk-color-success-500)">
          <CheckIcon />
        </Svg>
        <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
          Success
        </Text>
      </div>
      <div style={{ textAlign: "center" }}>
        <Svg color="var(--marduk-color-warning-500)">
          <StarIcon />
        </Svg>
        <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
          Warning
        </Text>
      </div>
      <div style={{ textAlign: "center" }}>
        <Svg color="var(--marduk-color-error-500)">
          <HeartIcon />
        </Svg>
        <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
          Error
        </Text>
      </div>
      <div style={{ textAlign: "center" }}>
        <Svg color="#9b59b6">
          <SettingsIcon />
        </Svg>
        <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
          Custom
        </Text>
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 20px",
          backgroundColor: "var(--marduk-color-primary-500)",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        <Svg size="small" color="currentColor">
          <HeartIcon />
        </Svg>
        Like
      </button>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 20px",
          backgroundColor: "var(--marduk-color-success-500)",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        <Svg size="small" color="currentColor">
          <CheckIcon />
        </Svg>
        Complete
      </button>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 20px",
          backgroundColor: "var(--marduk-color-gray-600)",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        <Svg size="small" color="currentColor">
          <SettingsIcon />
        </Svg>
        Settings
      </button>
    </div>
  ),
};

export const DarkMode: Story = {
  args: {
    darkMode: true,
    children: <HeartIcon />,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DarkModeComparison: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Light Mode
        </Title>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Svg>
            <HeartIcon />
          </Svg>
          <Svg>
            <StarIcon />
          </Svg>
          <Svg>
            <CheckIcon />
          </Svg>
          <Svg>
            <HomeIcon />
          </Svg>
          <Svg>
            <SettingsIcon />
          </Svg>
          <Svg>
            <UserIcon />
          </Svg>
        </div>
      </div>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Dark Mode
        </Title>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            padding: "20px",
            backgroundColor: "#1e1e1e",
            borderRadius: "8px",
          }}
        >
          <Svg darkMode>
            <HeartIcon />
          </Svg>
          <Svg darkMode>
            <StarIcon />
          </Svg>
          <Svg darkMode>
            <CheckIcon />
          </Svg>
          <Svg darkMode>
            <HomeIcon />
          </Svg>
          <Svg darkMode>
            <SettingsIcon />
          </Svg>
          <Svg darkMode>
            <UserIcon />
          </Svg>
        </div>
      </div>
    </div>
  ),
};

export const WithStroke: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Svg size="large" color="none" stroke="currentColor" strokeWidth="2">
        <HeartIcon />
      </Svg>
      <Svg size="large" color="none" stroke="currentColor" strokeWidth="2">
        <StarIcon />
      </Svg>
      <Svg
        size="large"
        color="none"
        stroke="var(--marduk-color-primary-500)"
        strokeWidth="2"
      >
        <CheckIcon />
      </Svg>
      <Svg
        size="large"
        color="none"
        stroke="var(--marduk-color-success-500)"
        strokeWidth="2"
      >
        <HomeIcon />
      </Svg>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Icons adapt to context
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Icons inherit the current text color and can be sized independently
        </Text>
      </div>
      <Text as="div" style={{ fontSize: "14px", color: "#3498db" }}>
        <Svg size="small">
          <StarIcon />
        </Svg>{" "}
        Small icon with inherited color
      </Text>
      <Text as="div" style={{ fontSize: "18px", color: "#e74c3c" }}>
        <Svg size="medium">
          <HeartIcon />
        </Svg>{" "}
        Medium icon with inherited color
      </Text>
      <Text as="div" style={{ fontSize: "24px", color: "#2ecc71" }}>
        <Svg size="large">
          <CheckIcon />
        </Svg>{" "}
        Large icon with inherited color
      </Text>
    </div>
  ),
};

export const AlignLeft: Story = {
  args: {
    align: "left",
    children: <HeartIcon />,
  },
};

export const AlignCenter: Story = {
  args: {
    align: "center",
    children: <HeartIcon />,
  },
};

export const AlignRight: Story = {
  args: {
    align: "right",
    children: <HeartIcon />,
  },
};

export const AllAlignments: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Alignment Options
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Icons can be aligned left, center, or right within their container
        </Text>
      </div>
      <div
        style={{
          border: "1px dashed #ccc",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Text
          as="div"
          style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}
        >
          Left Aligned
        </Text>
        <Svg align="left" size="large" color="var(--marduk-color-primary-500)">
          <StarIcon />
        </Svg>
      </div>
      <div
        style={{
          border: "1px dashed #ccc",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Text
          as="div"
          style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}
        >
          Center Aligned
        </Text>
        <Svg
          align="center"
          size="large"
          color="var(--marduk-color-success-500)"
        >
          <HeartIcon />
        </Svg>
      </div>
      <div
        style={{
          border: "1px dashed #ccc",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Text
          as="div"
          style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}
        >
          Right Aligned
        </Text>
        <Svg align="right" size="large" color="var(--marduk-color-error-500)">
          <CheckIcon />
        </Svg>
      </div>
    </div>
  ),
};

export const Rotation: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Rotation Options
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Icons can be rotated in 90-degree increments
        </Text>
      </div>
      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <Svg size="large" color="var(--marduk-color-primary-500)">
            <CheckIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            0° (default)
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg size="large" color="var(--marduk-color-primary-500)" rotate={90}>
            <CheckIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            90°
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-primary-500)"
            rotate={180}
          >
            <CheckIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            180°
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-primary-500)"
            rotate={270}
          >
            <CheckIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            270°
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const Flip: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Flip Options
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Icons can be flipped horizontally, vertically, or both
        </Text>
      </div>
      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <Svg size="large" color="var(--marduk-color-success-500)">
            <HeartIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Original
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-success-500)"
            flip="horizontal"
          >
            <HeartIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Horizontal
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-success-500)"
            flip="vertical"
          >
            <HeartIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Vertical
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg size="large" color="var(--marduk-color-success-500)" flip="both">
            <HeartIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Both
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const SpinAnimation: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Spin Animation
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Icons can be animated with different spin speeds
        </Text>
      </div>
      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-primary-500)"
            spin
            spinSpeed="slow"
          >
            <SettingsIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Slow (2s)
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-primary-500)"
            spin
            spinSpeed="normal"
          >
            <SettingsIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Normal (1s)
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-primary-500)"
            spin
            spinSpeed="fast"
          >
            <SettingsIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Fast (0.5s)
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const LoadingSpinner: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <Svg
        size="large"
        color="var(--marduk-color-primary-500)"
        spin
        spinSpeed="normal"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray="60"
          strokeLinecap="round"
        />
      </Svg>
      <Text as="span">Loading...</Text>
    </div>
  ),
};

export const HeartPulseAnimation: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Heart Pulse Animation
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Special heart pulse animation with responsive drop shadows
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Svg
            size={48}
            color="var(--marduk-color-error-400)"
            animation="heartpulse"
          >
            <HeartIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "16px" }}>
            Heart Pulse
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg
            size={64}
            color="var(--marduk-color-error-500)"
            animation="heartpulse"
          >
            <HeartIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "16px" }}>
            Large Heart Pulse
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const StrokeIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Stroke Properties
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Icons can be styled with stroke properties for outline designs
        </Text>
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Svg
          size="large"
          color="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <HeartIcon />
        </Svg>
        <Svg
          size="large"
          color="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <StarIcon />
        </Svg>
        <Svg
          size="large"
          color="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <CheckIcon />
        </Svg>
        <Svg
          size="large"
          color="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <HomeIcon />
        </Svg>
        <Svg
          size="large"
          color="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <SettingsIcon />
        </Svg>
        <Svg
          size="large"
          color="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <UserIcon />
        </Svg>
      </div>
    </div>
  ),
};

export const HoverColor: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Hover Color
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Icons can change color on hover for interactive elements
        </Text>
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Svg
          size="large"
          color="var(--marduk-color-gray-500)"
          hoverColor="var(--marduk-color-primary-500)"
        >
          <HeartIcon />
        </Svg>
        <Svg
          size="large"
          color="var(--marduk-color-gray-500)"
          hoverColor="var(--marduk-color-warning-400)"
        >
          <StarIcon />
        </Svg>
        <Svg
          size="large"
          color="var(--marduk-color-gray-500)"
          hoverColor="var(--marduk-color-success-500)"
        >
          <CheckIcon />
        </Svg>
        <Svg
          size="large"
          color="var(--marduk-color-gray-500)"
          hoverColor="var(--marduk-color-error-500)"
        >
          <HomeIcon />
        </Svg>
      </div>
    </div>
  ),
};

export const AccessibleIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Accessibility Features
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Icons with proper accessibility attributes for screen readers
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
        }}
      >
        <Text as="div">
          <strong>Icon with title and description:</strong>
          <div style={{ marginTop: "10px" }}>
            <Svg
              size="large"
              color="var(--marduk-color-primary-500)"
              title="Home Icon"
              description="Navigate to the home page"
            >
              <HomeIcon />
            </Svg>
          </div>
          <code style={{ fontSize: "12px", color: "#666", marginTop: "8px" }}>
            role="img" with {`<title>`} and {`<desc>`}
          </code>
        </Text>
        <Text as="div">
          <strong>Decorative icon (hidden from screen readers):</strong>
          <div style={{ marginTop: "10px" }}>
            <Svg
              size="large"
              color="var(--marduk-color-success-500)"
              decorative
            >
              <StarIcon />
            </Svg>
          </div>
          <code style={{ fontSize: "12px", color: "#666", marginTop: "8px" }}>
            aria-hidden="true"
          </code>
        </Text>
      </div>
    </div>
  ),
};

export const CombinedTransformations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Combined Transformations
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Rotate and flip can be combined for complex transformations
        </Text>
      </div>
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-primary-500)"
            rotate={90}
            flip="horizontal"
          >
            <CheckIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            90° + Horizontal
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-primary-500)"
            rotate={180}
            flip="vertical"
          >
            <CheckIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            180° + Vertical
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-primary-500)"
            rotate={270}
            flip="both"
          >
            <CheckIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            270° + Both
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const AllAnimations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          All Animation Types
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Comparison of spin animations vs. custom animations
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-primary-500)"
            spin
            spinSpeed="slow"
          >
            <HeartIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Spin (Slow)
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-primary-500)"
            spin
            spinSpeed="normal"
          >
            <HeartIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Spin (Normal)
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-primary-500)"
            spin
            spinSpeed="fast"
          >
            <HeartIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Spin (Fast)
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Svg
            size="large"
            color="var(--marduk-color-error-400)"
            animation="heartpulse"
          >
            <HeartIcon />
          </Svg>
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Heart Pulse
          </Text>
        </div>
      </div>
    </div>
  ),
};
