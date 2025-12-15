import type { Meta, StoryObj } from "@storybook/react";
import { RadioButtons } from "./RadioButtons";
import { useState } from "react";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof RadioButtons> = {
  title: "Components/RadioButtons",
  component: RadioButtons,
  tags: ["autodocs", "status:ready"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButtons>;

const sizeOptions = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
];

export const Default: Story = {
  args: {
    name: "size",
    options: sizeOptions,
    label: "Select Size",
  },
};

export const Horizontal: Story = {
  args: {
    name: "color",
    options: colorOptions,
    label: "Select Color",
    direction: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    name: "size",
    options: sizeOptions,
    label: "Select Size",
    direction: "vertical",
  },
};

export const WithValue: Story = {
  args: {
    name: "size",
    options: sizeOptions,
    label: "Select Size",
    value: "medium",
  },
};

export const Required: Story = {
  args: {
    name: "size",
    options: sizeOptions,
    label: "Select Size",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    name: "size",
    options: sizeOptions,
    label: "Select Size",
    error: "Please select a size",
  },
};

export const WithHelperText: Story = {
  args: {
    name: "size",
    options: sizeOptions,
    label: "Select Size",
    helperText: "Choose the size that fits you best",
  },
};

export const Disabled: Story = {
  args: {
    name: "size",
    options: sizeOptions,
    label: "Select Size",
    disabled: true,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    name: "size",
    options: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium (Out of Stock)", disabled: true },
      { value: "large", label: "Large" },
    ],
    label: "Select Size",
  },
};

export const Small: Story = {
  args: {
    name: "size",
    options: sizeOptions,
    label: "Select Size",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    name: "size",
    options: sizeOptions,
    label: "Select Size",
    size: "large",
  },
};

const InteractiveComponent = () => {
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div style={{ maxWidth: "400px" }}>
      <RadioButtons
        name="interactive-size"
        options={sizeOptions}
        label="T-Shirt Size"
        value={selectedSize}
        onChange={setSelectedSize}
        helperText="Choose your preferred size"
      />

      <div style={{ marginTop: "24px" }}>
        <RadioButtons
          name="interactive-color"
          options={colorOptions}
          label="Color"
          value={selectedColor}
          onChange={setSelectedColor}
          direction="horizontal"
        />
      </div>

      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          backgroundColor: "#f7fafc",
          borderRadius: "4px",
        }}
      >
        <p style={{ margin: 0, fontSize: "14px", color: "#2d3748" }}>
          <strong>Selected:</strong> {selectedSize} {selectedColor || "(no color selected)"}
        </p>
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveComponent />,
};
