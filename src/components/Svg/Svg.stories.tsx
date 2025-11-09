import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text/Text";
import { Svg } from "./Svg";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Svg> = {
  title: "Components/Svg",
  component: Svg,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: STORYBOOK_STATUS.WIP,
    },
  },
  tags: ["autodocs", "status:wip"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "small", "medium", "large", "xl", "2xl", "3xl"],
      description: "Icon size with responsive scaling",
    },
    color: {
      control: { type: "color" },
      description: "Custom color",
    },
    darkMode: {
      control: { type: "boolean" },
      description: "Dark mode styling",
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
    responsive: {
      control: { type: "boolean" },
      description: "Enable responsive scaling for custom sizes",
    },
    filter: {
      control: { type: "text" },
      description: "CSS filter effects",
    },
    hoverColor: {
      control: { type: "color" },
      description: "Color on hover",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Svg>;

const StarIcon = () => (
  <>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </>
);

const HeartIcon = () => (
  <>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </>
);

const CheckIcon = () => (
  <>
    <path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z" />
  </>
);

export const Default: Story = {
  args: {
    children: <StarIcon />,
    size: "medium",
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
      <Svg size="large" color="var(--marduk-color-primary-500)">
        <HeartIcon />
      </Svg>
      <Svg size="large" color="var(--marduk-color-success-500)">
        <CheckIcon />
      </Svg>
      <Svg size="large" color="var(--marduk-color-danger-500)">
        <StarIcon />
      </Svg>
    </div>
  ),
};

export const Spinning: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
      <Svg size="large" spin spinSpeed="slow">
        <StarIcon />
      </Svg>
      <Svg size="large" spin spinSpeed="normal">
        <StarIcon />
      </Svg>
      <Svg size="large" spin spinSpeed="fast">
        <StarIcon />
      </Svg>
    </div>
  ),
};

export const Transformations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <Svg size="large" rotate={0}>
          <StarIcon />
        </Svg>
        <Svg size="large" rotate={90}>
          <StarIcon />
        </Svg>
        <Svg size="large" rotate={180}>
          <StarIcon />
        </Svg>
        <Svg size="large" rotate={270}>
          <StarIcon />
        </Svg>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Svg size="large" flip="horizontal">
          <StarIcon />
        </Svg>
        <Svg size="large" flip="vertical">
          <StarIcon />
        </Svg>
        <Svg size="large" flip="both">
          <StarIcon />
        </Svg>
      </div>
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Svg size="xl" animation="heartpulse" color="var(--marduk-color-danger-500)">
        <HeartIcon />
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
      <Svg size="xl" filter="grayscale(100%)">
        <StarIcon />
      </Svg>
      <Svg size="xl" filter="blur(2px)">
        <StarIcon />
      </Svg>
      <Svg size="xl" filter="brightness(1.5)">
        <StarIcon />
      </Svg>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Svg size={64} responsive color="var(--marduk-color-primary-500)">
        <StarIcon />
      </Svg>
      <Text style={{ fontSize: "14px", color: "#666", maxWidth: "400px" }}>
        Resize viewport to see responsive scaling at 768px and 1024px breakpoints (custom size with
        responsive prop enabled)
      </Text>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Svg size="xl" hoverColor="var(--marduk-color-primary-500)" style={{ cursor: "pointer" }}>
        <HeartIcon />
      </Svg>
      <Svg size="xl" hoverColor="var(--marduk-color-success-500)" style={{ cursor: "pointer" }}>
        <CheckIcon />
      </Svg>
    </div>
  ),
};
