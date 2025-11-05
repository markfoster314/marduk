// TODO: update this story with more visual finesse

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text } from "../Text/Text";
import { Svg } from "./Svg";

const meta: Meta<typeof Svg> = {
  title: "Components/Svg",
  component: Svg,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "small", "medium", "large", "xl", "2xl", "3xl"],
      description: "Icon size with responsive scaling",
    },
    color: {
      control: { type: "color" },
      description: "Custom color for the SVG",
    },
    viewBox: {
      control: { type: "text" },
      description: "SVG viewBox attribute",
    },
    darkMode: {
      control: { type: "boolean" },
      description: "Enable dark mode styling",
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
    strokeWidth: {
      control: { type: "number" },
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
    hoverColor: {
      control: { type: "color" },
      description: "Color on hover",
    },
    responsive: {
      control: { type: "boolean" },
      description: "Enable responsive scaling for custom sizes",
    },
    aspectRatio: {
      control: { type: "select" },
      options: ["1:1", "16:9", "4:3", "3:2", "21:9"],
      description: "Aspect ratio for non-square SVGs",
    },
    filter: {
      control: { type: "text" },
      description: "CSS filter effects",
    },
    title: {
      control: { type: "text" },
      description: "Accessible title for screen readers",
    },
    description: {
      control: { type: "text" },
      description: "Accessible description for screen readers",
    },
    decorative: {
      control: { type: "boolean" },
      description: "Mark as decorative (aria-hidden)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Svg>;

const StarIcon = () => (
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
);

const HeartIcon = () => (
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
);

const CheckIcon = () => <polyline points="20 6 9 17 4 12" />;

const SettingsIcon = () => (
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
  </>
);

export const Default: Story = {
  args: {
    size: "medium",
    children: <StarIcon />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", alignItems: "flex-end" }}>
      <Svg size="xs">
        <StarIcon />
      </Svg>
      <Svg size="small">
        <StarIcon />
      </Svg>
      <Svg size="medium">
        <StarIcon />
      </Svg>
      <Svg size="large">
        <StarIcon />
      </Svg>
      <Svg size="xl">
        <StarIcon />
      </Svg>
      <Svg size="2xl">
        <StarIcon />
      </Svg>
      <Svg size="3xl">
        <StarIcon />
      </Svg>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Svg color="var(--marduk-color-primary-500)">
        <HeartIcon />
      </Svg>
      <Svg color="var(--marduk-color-success-500)">
        <CheckIcon />
      </Svg>
      <Svg color="var(--marduk-color-error-500)">
        <HeartIcon />
      </Svg>
      <Svg color="var(--marduk-color-warning-500)">
        <StarIcon />
      </Svg>
    </div>
  ),
};

export const Spinning: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "30px" }}>
      <Svg
        size="large"
        spin
        spinSpeed="slow"
        color="var(--marduk-color-primary-500)"
      >
        <HeartIcon />
      </Svg>
      <Svg
        size="large"
        spin
        spinSpeed="normal"
        color="var(--marduk-color-primary-500)"
      >
        <HeartIcon />
      </Svg>
      <Svg
        size="large"
        spin
        spinSpeed="fast"
        color="var(--marduk-color-primary-500)"
      >
        <HeartIcon />
      </Svg>
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "30px" }}>
      <Svg
        size="xl"
        animation="heartpulse"
        color="var(--marduk-color-error-500)"
      >
        <HeartIcon />
      </Svg>
      <Svg size="xl" spin color="var(--marduk-color-primary-500)">
        <SettingsIcon />
      </Svg>
    </div>
  ),
};

export const Transformations: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Svg size="large">
        <CheckIcon />
      </Svg>
      <Svg size="large" rotate={90}>
        <CheckIcon />
      </Svg>
      <Svg size="large" rotate={180}>
        <CheckIcon />
      </Svg>
      <Svg size="large" rotate={270}>
        <CheckIcon />
      </Svg>
      <Svg size="large" flip="horizontal">
        <CheckIcon />
      </Svg>
      <Svg size="large" flip="vertical">
        <CheckIcon />
      </Svg>
    </div>
  ),
};

export const AspectRatios: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "30px", alignItems: "flex-end" }}>
      <Svg
        size="large"
        aspectRatio="1:1"
        color="var(--marduk-color-primary-500)"
      >
        <rect width="100%" height="100%" />
      </Svg>
      <Svg
        size="large"
        aspectRatio="16:9"
        color="var(--marduk-color-success-500)"
      >
        <rect width="100%" height="100%" />
      </Svg>
      <Svg
        size="large"
        aspectRatio="4:3"
        color="var(--marduk-color-warning-500)"
      >
        <rect width="100%" height="100%" />
      </Svg>
      <Svg size={48} aspectRatio="9:16" color="var(--marduk-color-error-500)">
        <rect width="100%" height="100%" />
      </Svg>
    </div>
  ),
};

export const Filters: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
      <Svg size="xl" color="var(--marduk-color-primary-500)">
        <StarIcon />
      </Svg>
      <Svg
        size="xl"
        filter="grayscale(100%)"
        color="var(--marduk-color-primary-500)"
      >
        <StarIcon />
      </Svg>
      <Svg size="xl" filter="blur(1px)" color="var(--marduk-color-primary-500)">
        <StarIcon />
      </Svg>
      <Svg
        size="xl"
        filter="brightness(1.5)"
        color="var(--marduk-color-primary-500)"
      >
        <StarIcon />
      </Svg>
      <Svg
        size="xl"
        filter="drop-shadow(2px 2px 4px rgba(0,0,0,0.3))"
        color="var(--marduk-color-primary-500)"
      >
        <StarIcon />
      </Svg>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "40px" }}>
      <div>
        <Text
          as="div"
          style={{ marginBottom: "10px", fontSize: "12px", color: "#666" }}
        >
          Fixed size
        </Text>
        <Svg size={48} color="var(--marduk-color-primary-500)">
          <StarIcon />
        </Svg>
      </div>
      <div>
        <Text
          as="div"
          style={{ marginBottom: "10px", fontSize: "12px", color: "#666" }}
        >
          Responsive size
        </Text>
        <Svg size={48} responsive color="var(--marduk-color-success-500)">
          <StarIcon />
        </Svg>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Svg
        size="xl"
        hoverColor="var(--marduk-color-primary-600)"
        color="var(--marduk-color-primary-500)"
      >
        <StarIcon />
      </Svg>
      <Svg
        size="xl"
        hoverColor="var(--marduk-color-error-600)"
        color="var(--marduk-color-error-500)"
      >
        <HeartIcon />
      </Svg>
    </div>
  ),
};
