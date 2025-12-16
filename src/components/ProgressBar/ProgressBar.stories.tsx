import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";
import { useState, useEffect } from "react";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs", "status:ready"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "success", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Primary: Story = {
  args: {
    value: 65,
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    value: 100,
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    value: 40,
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    value: 25,
    variant: "error",
  },
};

export const WithLabel: Story = {
  args: {
    value: 70,
    label: "Upload Progress",
    showLabel: true,
  },
};

export const WithPercentage: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
};

export const Small: Story = {
  args: {
    value: 60,
    size: "small",
    showLabel: true,
  },
};

export const Medium: Story = {
  args: {
    value: 60,
    size: "medium",
    showLabel: true,
  },
};

export const Large: Story = {
  args: {
    value: 60,
    size: "large",
    showLabel: true,
  },
};

export const Striped: Story = {
  args: {
    value: 75,
    striped: true,
    showLabel: true,
  },
};

export const StripedAnimated: Story = {
  args: {
    value: 75,
    striped: true,
    animated: true,
    showLabel: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        maxWidth: "500px",
      }}
    >
      <ProgressBar value={65} variant="primary" label="Primary" showLabel />
      <ProgressBar value={100} variant="success" label="Success" showLabel />
      <ProgressBar value={40} variant="warning" label="Warning" showLabel />
      <ProgressBar value={25} variant="error" label="Error" showLabel />
    </div>
  ),
};

const AnimatedProgressComponent = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ maxWidth: "500px" }}>
      <ProgressBar value={progress} label="Loading..." showLabel striped animated />
    </div>
  );
};

export const AnimatedProgress: Story = {
  render: () => <AnimatedProgressComponent />,
};
