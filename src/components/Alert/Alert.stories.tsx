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
