import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import React from "react";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
    darkMode: {
      control: { type: "boolean" },
    },
    animation: {
      control: { type: "select" },
      options: ["none", "fadeInUp", "slideInRight"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: "info",
    children: "This is an informational message.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Your changes have been saved successfully!",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Please review your information before proceeding.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "An error occurred while processing your request.",
  },
};

export const WithTitle: Story = {
  args: {
    variant: "info",
    title: "Information",
    children: "This alert has a title to provide more context.",
  },
};

export const Closable: Story = {
  args: {
    variant: "success",
    closable: true,
    children: "This alert can be closed by clicking the X button.",
  },
};

export const ClosableWithTitle: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    closable: true,
    children: "This is a closable alert with a title.",
  },
};

export const LongContent: Story = {
  args: {
    variant: "info",
    title: "Detailed Information",
    closable: true,
    children:
      "This is a longer alert message that contains more detailed information. It demonstrates how the alert component handles multiple lines of text and maintains its layout properly across different content lengths.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxWidth: "600px",
      }}
    >
      <Alert variant="info" title="Info" closable>
        This is an informational alert with a title.
      </Alert>
      <Alert variant="success" title="Success" closable>
        Operation completed successfully!
      </Alert>
      <Alert variant="warning" title="Warning" closable>
        Please be cautious when proceeding.
      </Alert>
      <Alert variant="error" title="Error" closable>
        An error has occurred.
      </Alert>
    </div>
  ),
};

export const DarkMode: Story = {
  args: {
    variant: "info",
    darkMode: true,
    children: "This is an alert in dark mode.",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DarkModeVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxWidth: "600px",
        padding: "20px",
        backgroundColor: "#1e1e1e",
      }}
    >
      <Alert variant="info" title="Info" closable darkMode>
        This is an informational alert in dark mode.
      </Alert>
      <Alert variant="success" title="Success" closable darkMode>
        Operation completed successfully!
      </Alert>
      <Alert variant="warning" title="Warning" closable darkMode>
        Please be cautious when proceeding.
      </Alert>
      <Alert variant="error" title="Error" closable darkMode>
        An error has occurred.
      </Alert>
    </div>
  ),
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const WithFadeInUpAnimation: Story = {
  args: {
    variant: "success",
    animation: "fadeInUp",
    title: "Animated Alert",
    children: "This alert fades in and moves up when it appears.",
  },
};

export const WithSlideInRightAnimation: Story = {
  args: {
    variant: "info",
    animation: "slideInRight",
    title: "Sliding Alert",
    children: "This alert slides in from the right when it appears.",
  },
};

export const AnimatedVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxWidth: "600px",
      }}
    >
      <Alert variant="info" title="Fade In Up" animation="fadeInUp" closable>
        This alert uses the fadeInUp animation.
      </Alert>
      <Alert variant="success" title="Fade In Up" animation="fadeInUp" closable>
        Success message with fadeInUp animation.
      </Alert>
      <Alert
        variant="warning"
        title="Slide In Right"
        animation="slideInRight"
        closable
      >
        Warning message sliding in from the right.
      </Alert>
      <Alert
        variant="error"
        title="Slide In Right"
        animation="slideInRight"
        closable
      >
        Error message with slideInRight animation.
      </Alert>
    </div>
  ),
};
