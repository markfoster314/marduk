import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { iconData } from "./data";
import React from "react";
import {
  UserIcon,
  SkullCrossbonesIcon,
  CircleInfoIcon,
  ThumbsUpIcon,
  TriangleExclamationIcon,
} from "./index";
import { Text } from "../components/Text/Text";

const meta: Meta<typeof Icon> = {
  title: "Icons/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "select" },
      options: Object.keys(iconData),
    },
    size: {
      control: { type: "select" },
      options: ["xs", "small", "medium", "large", "xl", "2xl", "3xl"],
    },
    color: {
      control: { type: "color" },
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
