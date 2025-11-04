import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Text } from "../Text/Text";
import React, { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    checked: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    indeterminate: {
      control: { type: "boolean" },
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Checkbox",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Checkbox",
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: "Unchecked Checkbox",
    checked: false,
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Indeterminate Checkbox",
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled Checked",
    checked: true,
    disabled: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Accept Terms",
    helperText: "You must accept the terms and conditions",
  },
};

export const WithError: Story = {
  args: {
    label: "Accept Terms",
    error: "You must accept the terms to continue",
  },
};

export const Small: Story = {
  args: {
    label: "Small Checkbox",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium Checkbox",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    label: "Large Checkbox",
    size: "large",
  },
};

export const WithoutLabel: Story = {
  args: {
    "aria-label": "Checkbox without visible label",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Checkbox label="Small Checkbox" size="small" checked />
      <Checkbox label="Medium Checkbox" size="medium" checked />
      <Checkbox label="Large Checkbox" size="large" checked />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" checked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" checked disabled />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        label="Toggle me"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        helperText={checked ? "Checkbox is checked!" : "Checkbox is unchecked"}
      />
    );
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const items = ["Apple", "Banana", "Orange", "Grape"];

    const allSelected = selectedItems.length === items.length;
    const someSelected =
      selectedItems.length > 0 && selectedItems.length < items.length;

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setSelectedItems(items);
      } else {
        setSelectedItems([]);
      }
    };

    const handleItemToggle = (item: string) => {
      setSelectedItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Checkbox
          label="Select All"
          checked={allSelected}
          indeterminate={someSelected}
          onChange={handleSelectAll}
        />
        <div
          style={{
            marginLeft: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {items.map((item) => (
            <Checkbox
              key={item}
              label={item}
              checked={selectedItems.includes(item)}
              onChange={() => handleItemToggle(item)}
            />
          ))}
        </div>
        <Text style={{ marginTop: "8px", fontSize: "14px", color: "#4a5568" }}>
          Selected: {selectedItems.length} of {items.length}
        </Text>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      newsletter: false,
      terms: false,
      updates: false,
    });

    const [errors, setErrors] = useState({
      terms: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!formData.terms) {
        setErrors({ terms: "You must accept the terms and conditions" });
        return;
      }

      setErrors({ terms: "" });
      alert("Form submitted! " + JSON.stringify(formData, null, 2));
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "400px",
        }}
      >
        <Checkbox
          label="Subscribe to newsletter"
          checked={formData.newsletter}
          onChange={(e) =>
            setFormData({ ...formData, newsletter: e.target.checked })
          }
          helperText="Receive weekly updates about new features"
        />

        <Checkbox
          label="I accept the terms and conditions"
          checked={formData.terms}
          onChange={(e) => {
            setFormData({ ...formData, terms: e.target.checked });
            setErrors({ terms: "" });
          }}
          error={errors.terms}
        />

        <Checkbox
          label="Send me product updates"
          checked={formData.updates}
          onChange={(e) =>
            setFormData({ ...formData, updates: e.target.checked })
          }
        />

        <button
          type="submit"
          style={{ padding: "10px 20px", marginTop: "8px" }}
        >
          Submit
        </button>
      </form>
    );
  },
};
