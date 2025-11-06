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
      description: "Alert variant",
    },
    darkMode: {
      control: "boolean",
      description: "Dark mode styling",
    },
    animation: {
      control: "select",
      options: ["none", "fadeInUp", "slideInRight"],
      description: "Entry animation",
    },
    closable: {
      control: "boolean",
      description: "Show close button",
    },
    title: {
      control: "text",
      description: "Alert title",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: "info",
    children: "This is an alert message",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert variant="info">This is an info alert</Alert>
      <Alert variant="success">This is a success alert</Alert>
      <Alert variant="warning">This is a warning alert</Alert>
      <Alert variant="error">This is an error alert</Alert>
    </div>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert variant="info" title="Information">
        Here's some helpful information for you.
      </Alert>
      <Alert variant="success" title="Success">
        Your changes have been saved successfully.
      </Alert>
      <Alert variant="error" title="Error">
        There was a problem processing your request.
      </Alert>
    </div>
  ),
};

export const Closable: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert variant="info" closable>
        You can close this alert
      </Alert>
      <Alert variant="success" closable title="Closable">
        Click the X button to dismiss
      </Alert>
      <Alert variant="warning" closable animation="fadeInUp" title="Warning">
        This action cannot be undone
      </Alert>
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div
      style={{
        background: "#1a1a1a",
        padding: "30px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Alert variant="info" darkMode>
        Info alert in dark mode
      </Alert>
      <Alert variant="success" darkMode title="Success">
        Success alert with title
      </Alert>
      <Alert variant="warning" darkMode closable>
        Warning with close button
      </Alert>
      <Alert variant="error" darkMode closable title="Error">
        Error with title and close
      </Alert>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert
        variant="info"
        title="Custom Variables"
        style={
          {
            "--alert-bg": "#0d3",
            "--alert-border-color": "#f34",
          } as React.CSSProperties
        }
      >
        Using CSS variable overrides for custom colors
      </Alert>
      <Alert
        variant="success"
        animation="slideInRight"
        style={
          {
            "--alert-animation-slide-duration": "1s",
          } as React.CSSProperties
        }
      >
        Slower animation with custom duration
      </Alert>
    </div>
  ),
};
