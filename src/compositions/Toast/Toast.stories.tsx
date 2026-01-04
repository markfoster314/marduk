import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";
import { ToastVariant } from "./Toast.types";
import { useState } from "react";
import { Button } from "@/index";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Toast> = {
  title: "Compositions/Toast",
  component: Toast,
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
    },
    position: {
      control: "select",
      options: [
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
        "top-center",
        "bottom-center",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    variant: "info",
    message: "This is an informational toast.",
    duration: 0,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    message: "Action completed successfully!",
    duration: 0,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    message: "Please review your settings.",
    duration: 0,
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    message: "An error occurred.",
    duration: 0,
  },
};

export const TopRight: Story = {
  args: {
    variant: "info",
    message: "Toast positioned at top-right",
    position: "top-right",
    duration: 0,
  },
};

export const TopLeft: Story = {
  args: {
    variant: "success",
    message: "Toast positioned at top-left",
    position: "top-left",
    duration: 0,
  },
};

export const BottomRight: Story = {
  args: {
    variant: "warning",
    message: "Toast positioned at bottom-right",
    position: "bottom-right",
    duration: 0,
  },
};

export const BottomLeft: Story = {
  args: {
    variant: "error",
    message: "Toast positioned at bottom-left",
    position: "bottom-left",
    duration: 0,
  },
};

export const TopCenter: Story = {
  args: {
    variant: "info",
    message: "Toast positioned at top-center",
    position: "top-center",
    duration: 0,
  },
};

export const BottomCenter: Story = {
  args: {
    variant: "success",
    message: "Toast positioned at bottom-center",
    position: "bottom-center",
    duration: 0,
  },
};

export const WithAutoDismiss: Story = {
  args: {
    variant: "success",
    message: "This toast will auto-dismiss in 3 seconds",
    duration: 3000,
  },
};

const InteractiveComponent = () => {
  const [toasts, setToasts] = useState<
    Array<{
      id: number;
      variant: ToastVariant;
      message: string;
    }>
  >([]);
  let idCounter = 0;

  const showToast = (variant: ToastVariant, message: string) => {
    const id = idCounter++;
    setToasts((prev) => [...prev, { id, variant, message }]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button onClick={() => showToast("info", "Info notification")}>Show Info</Button>
        <Button onClick={() => showToast("success", "Success! Operation completed.")}>
          Show Success
        </Button>
        <Button onClick={() => showToast("warning", "Warning: Please check your input.")}>
          Show Warning
        </Button>
        <Button onClick={() => showToast("error", "Error: Something went wrong.")}>
          Show Error
        </Button>
      </div>

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          variant={toast.variant}
          message={toast.message}
          duration={5000}
          onClose={() => removeToast(toast.id)}
          position="top-right"
        />
      ))}
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveComponent />,
};
