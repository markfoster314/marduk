import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import React from "react";
import { Text } from "@/components/Text/Text";
import { Button } from "@/components/Button/Button";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Alert> = {
  title: "Compositions/Alert",
  component: Alert,
  tags: ["autodocs", "status:ready"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
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
    closeAnimation: {
      control: "select",
      options: ["none", "fadeOutLeft", "fadeOutDown"],
      description: "Exit animation when alert is closed",
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
        Here&apos;s some helpful information for you.
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

const AnimationsStory = () => {
  const [showFade, setShowFade] = React.useState(true);
  const [showSlide, setShowSlide] = React.useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <Button
          onClick={() => {
            setShowFade(false);
            setTimeout(() => setShowFade(true), 100);
          }}
          style={{ marginBottom: "16px" }}
        >
          Replay Fade In Up Animation
        </Button>
        {showFade && (
          <Alert variant="info" animation="fadeInUp" title="Fade In Up">
            This alert fades in from below
          </Alert>
        )}
      </div>

      <div>
        <Button
          onClick={() => {
            setShowSlide(false);
            setTimeout(() => setShowSlide(true), 100);
          }}
          style={{ marginBottom: "16px" }}
        >
          Replay Slide In Right Animation
        </Button>
        {showSlide && (
          <Alert variant="success" animation="slideInRight" title="Slide In Right">
            This alert slides in from the left
          </Alert>
        )}
      </div>

      <div>
        <Alert variant="warning" animation="fadeInUp" title="Fade In Up">
          Default fade animation (0.4s)
        </Alert>
        <Alert
          variant="error"
          animation="slideInRight"
          title="Custom Duration"
          style={
            {
              "--alert-animation-slide-duration": "1.5s",
            } as React.CSSProperties
          }
        >
          Slower slide animation (1.5s)
        </Alert>
      </div>
    </div>
  );
};

export const Animations: Story = {
  render: () => <AnimationsStory />,
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

export const CustomTitle: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert
        variant="info"
        customTitle={
          <Text preset={["success"]} size="sm" weight="semibold">
            Custom Info Title
          </Text>
        }
      >
        Alert with custom title using Text component
      </Alert>
      <Alert
        variant="success"
        customTitle={
          <Text preset={["success"]} size="xl" weight="bold">
            Success Custom Title
          </Text>
        }
      >
        Success alert with custom styled title
      </Alert>
      <Alert
        variant="warning"
        customTitle={
          <Text preset={["warning"]} size="sm">
            Warning Custom Title
          </Text>
        }
      >
        Warning alert with custom title
      </Alert>
      <Alert
        variant="error"
        customTitle={
          <Text preset={["danger"]} size="md" weight="semibold">
            Error Custom Title
          </Text>
        }
      >
        Error alert with custom title component
      </Alert>
      <Alert
        variant="info"
        title="String Title"
        customTitle={
          <Text preset={["primary"]} size="sm">
            Custom Title Takes Precedence
          </Text>
        }
      >
        When both title and customTitle are provided, customTitle is used
      </Alert>
    </div>
  ),
};

export const CustomText: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert
        variant="info"
        customText={
          <Text preset={["primary"]} size="md" weight="medium">
            Custom message text using Text component
          </Text>
        }
      >
        This children prop will be ignored
      </Alert>
      <Alert
        variant="success"
        customText={
          <div>
            <Text preset={["success"]} weight="semibold">
              Success!
            </Text>
            <Text preset={["success"]} size="sm">
              Your changes have been saved.
            </Text>
          </div>
        }
      >
        Alert with complex custom text
      </Alert>
      <Alert
        variant="warning"
        title="Warning"
        customText={
          <Text preset={["warning"]} size="sm">
            Custom warning message that takes precedence over children
          </Text>
        }
      >
        This children prop will be ignored
      </Alert>
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert variant="info" customIcon={<span style={{ fontSize: "20px" }}>NGE</span>}>
        Alert with custom emoji icon
      </Alert>
      <Alert
        variant="error"
        customIcon={
          <span style={{ fontSize: "18px", color: "var(--marduk-color-danger-600)" }}>NGE</span>
        }
      >
        Alert with custom warning icon
      </Alert>
      <Alert
        variant="success"
        title="Success"
        customIcon={<span style={{ fontSize: "20px" }}>NGE</span>}
      >
        Success alert with custom checkmark icon
      </Alert>
    </div>
  ),
};

export const CustomButton: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert
        variant="info"
        closable
        customButton={
          <Button appearance="text" size="small" onClick={() => console.log("Custom close")}>
            Close
          </Button>
        }
      >
        Alert with custom close button using Button component
      </Alert>
      <Alert
        variant="warning"
        closable
        customButton={
          <button
            type="button"
            onClick={() => console.log("Dismissed")}
            style={{ padding: "4px 8px", fontSize: "12px", cursor: "pointer" }}
          >
            Dismiss
          </button>
        }
      >
        Alert with custom button element
      </Alert>
      <Alert
        variant="error"
        closable
        title="Error"
        customButton={
          <Button
            appearance="text"
            size="small"
            preset={["danger"]}
            onClick={() => console.log("Error dismissed")}
          >
            ×
          </Button>
        }
      >
        Error alert with custom styled button
      </Alert>
    </div>
  ),
};

export const CloseAnimations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert variant="info" closable closeAnimation="fadeOutLeft" title="Fade Out Left">
        Click the X to see fade out left animation
      </Alert>
      <Alert variant="success" closable closeAnimation="fadeOutDown" title="Fade Out Down">
        Click the X to see fade out down animation
      </Alert>
      <Alert variant="warning" closable closeAnimation="none" title="No Animation">
        This alert closes instantly without animation
      </Alert>
    </div>
  ),
};
