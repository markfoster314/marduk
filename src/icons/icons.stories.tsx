import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { iconData } from "./data";
import {
  UserIcon,
  SkullCrossbonesIcon,
  CircleInfoIcon,
  ThumbsUpIcon,
  TriangleExclamationIcon,
} from "./index";
import { Text } from "../components/Text/Text";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Icon> = {
  title: "Icons/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  tags: ["autodocs", "status:ready"],
  argTypes: {
    name: {
      control: { type: "select" },
      options: Object.keys(iconData),
      description: "Icon name from the icon data",
    },
    preset: {
      control: { type: "multi-select" },
      options: [
        "default",
        "icon",
        "loading",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "muted",
        "primaryDark",
        "secondaryDark",
        "successDark",
        "dangerDark",
        "warningDark",
        "infoDark",
        "mutedDark",
        "large",
        "xl",
      ],
      description: "Preset configurations (select multiple)",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "small", "medium", "large", "xl", "2xl", "3xl"],
      description: "Icon size with responsive scaling",
    },
    color: {
      control: { type: "color" },
      description: "Custom color",
    },
    viewBox: {
      control: { type: "text" },
      description: "SVG viewBox attribute",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "0 0 24 24" },
      },
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Horizontal alignment",
    },
    rotate: {
      control: { type: "select" },
      options: [0, 90, 180, 270],
      description: "Rotation in degrees",
    },
    flip: {
      control: { type: "select" },
      options: ["horizontal", "vertical", "both"],
      description: "Flip direction",
    },
    spin: {
      control: { type: "boolean" },
      description: "Enable spin animation",
    },
    spinSpeed: {
      control: { type: "select" },
      options: ["slow", "normal", "fast"],
      description: "Spin animation speed",
    },
    animation: {
      control: { type: "select" },
      options: ["heartpulse"],
      description: "Custom animation type",
    },
    filter: {
      control: { type: "text" },
      description: "CSS filter effects",
    },
    hoverColor: {
      control: { type: "color" },
      description: "Color on hover",
    },
    responsive: {
      control: { type: "boolean" },
      description: "Enable responsive scaling for custom sizes",
    },
    strokeWidth: {
      control: { type: "text" },
      description: "Stroke width for outlined icons",
    },
    strokeLinecap: {
      control: { type: "select" },
      options: ["butt", "round", "square"],
      description: "Stroke line cap style",
    },
    strokeLinejoin: {
      control: { type: "select" },
      options: ["miter", "round", "bevel"],
      description: "Stroke line join style",
    },
    title: {
      control: { type: "text" },
      description: "Accessible title for screen readers",
    },
    description: {
      control: { type: "text" },
      description: "Accessible description",
    },
    decorative: {
      control: { type: "boolean" },
      description: "Mark as decorative (aria-hidden)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "user",
    size: "medium",
  },
};

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {Object.keys(iconData).map((iconName) => (
        <div
          key={iconName}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
          }}
        >
          <Icon name={iconName} size="large" />
          <Text
            as="div"
            style={{
              fontSize: "12px",
              marginTop: "8px",
              textAlign: "center",
              color: "#666",
            }}
          >
            {iconName}
          </Text>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", alignItems: "flex-end" }}>
      <UserIcon size="xs" />
      <UserIcon size="small" />
      <UserIcon size="medium" />
      <UserIcon size="large" />
      <UserIcon size="xl" />
      <UserIcon size="2xl" />
      <UserIcon size="3xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px" }}>
      <ThumbsUpIcon size="xl" color="var(--marduk-color-primary-500)" />
      <ThumbsUpIcon size="xl" color="var(--marduk-color-success-500)" />
      <ThumbsUpIcon size="xl" color="var(--marduk-color-danger-500)" />
      <ThumbsUpIcon size="xl" color="var(--marduk-color-warning-500)" />
    </div>
  ),
};

export const Transformations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <TriangleExclamationIcon size="xl" rotate={0} />
        <TriangleExclamationIcon size="xl" rotate={90} />
        <TriangleExclamationIcon size="xl" rotate={180} />
        <TriangleExclamationIcon size="xl" rotate={270} />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <UserIcon size="xl" />
        <UserIcon size="xl" flip="horizontal" />
        <UserIcon size="xl" flip="vertical" />
      </div>
    </div>
  ),
};

export const Spinning: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "25px" }}>
      <CircleInfoIcon size="xl" spin spinSpeed="slow" />
      <CircleInfoIcon size="xl" spin spinSpeed="normal" />
      <CircleInfoIcon size="xl" spin spinSpeed="fast" />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px" }}>
      <ThumbsUpIcon
        size="2xl"
        hoverColor="var(--marduk-color-success-500)"
        style={{ cursor: "pointer" }}
      />
      <SkullCrossbonesIcon
        size="2xl"
        hoverColor="var(--marduk-color-danger-500)"
        style={{ cursor: "pointer" }}
      />
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "300px" }}>
      <div style={{ width: "100%", border: "1px solid #ccc", padding: "10px" }}>
        <UserIcon align="left" size="large" />
      </div>
      <div style={{ width: "100%", border: "1px solid #ccc", padding: "10px" }}>
        <UserIcon align="center" size="large" />
      </div>
      <div style={{ width: "100%", border: "1px solid #ccc", padding: "10px" }}>
        <UserIcon align="right" size="large" />
      </div>
    </div>
  ),
};

export const Presets: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <ThumbsUpIcon preset={["primary"]} />
        <CircleInfoIcon preset={["success"]} />
        <TriangleExclamationIcon preset={["danger"]} />
        <UserIcon preset={["warning"]} />
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <ThumbsUpIcon preset={["primaryDark"]} />
        <CircleInfoIcon preset={["successDark"]} />
        <TriangleExclamationIcon preset={["dangerDark"]} />
        <UserIcon preset={["warningDark"]} />
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <CircleInfoIcon preset={["loading"]} />
        <UserIcon preset={["icon", "large"]} />
        <ThumbsUpIcon preset={["xl", "primary"]} />
      </div>
    </div>
  ),
};

export const Filters: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
      <UserIcon size="xl" color="var(--marduk-color-primary-500)" />
      <UserIcon size="xl" filter="grayscale(100%)" />
      <UserIcon size="xl" filter="blur(2px)" />
      <UserIcon size="xl" filter="brightness(1.5)" />
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px" }}>
      <ThumbsUpIcon size="xl" animation="heartpulse" color="var(--marduk-color-danger-500)" />
    </div>
  ),
};
