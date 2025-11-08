import type { Meta, StoryObj } from "@storybook/react";
import { LoadingScreen } from "./LoadingScreen";
import React from "react";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof LoadingScreen> = {
  title: "Compositions/LoadingScreen",
  component: LoadingScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      subtitle: STORYBOOK_STATUS.WIP_FUNCTIONAL,
    },
  },
  tags: ["autodocs", "status:wip"],
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
  },
};

export default meta;
type Story = StoryObj<typeof LoadingScreen>;

export const Default: Story = {
  args: {
    animation: "pulse",
    text: "Loading",
    showText: true,
  },
};

export const Animations: Story = {
  render: () => <LoadingScreen animation="ripple" />,
};

export const Glitch: Story = {
  render: () => <LoadingScreen animation="glitch" text="Processing" />,
};

export const Bounce: Story = {
  render: () => <LoadingScreen animation="bounce" />,
};

export const CustomText: Story = {
  render: () => <LoadingScreen animation="breathe" text="Please wait" textVariant="primary" />,
};

export const NoText: Story = {
  render: () => <LoadingScreen animation="rotate" showText={false} />,
};

export const DarkMode: Story = {
  render: () => <LoadingScreen animation="pulse" darkMode textVariant="primary" />,
};

export const CustomStyling: Story = {
  render: () => (
    <LoadingScreen
      animation="swing"
      style={
        {
          "--loading-screen-text-size": "4rem",
          "--loading-screen-swing-duration": "3s",
          "--loading-screen-bg-light": "rgba(139, 92, 246, 0.5)",
        } as React.CSSProperties
      }
    />
  ),
};
