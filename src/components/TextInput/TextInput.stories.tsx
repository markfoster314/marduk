import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const Required: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    helperText: "Password must be at least 8 characters long",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "This email is already taken",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This is disabled",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small Input",
    size: "small",
    placeholder: "Small size",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium Input",
    size: "medium",
    placeholder: "Medium size",
  },
};

export const Large: Story = {
  args: {
    label: "Large Input",
    size: "large",
    placeholder: "Large size",
  },
};

export const DifferentTypes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "400px",
      }}
    >
      <TextInput label="Text" type="text" placeholder="Enter text" />
      <TextInput label="Email" type="email" placeholder="Enter email" />
      <TextInput label="Password" type="password" placeholder="Enter password" />
      <TextInput label="Number" type="number" placeholder="Enter number" />
      <TextInput label="Telephone" type="tel" placeholder="Enter phone" />
      <TextInput label="URL" type="url" placeholder="Enter URL" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "400px",
      }}
    >
      <TextInput label="Full Name" placeholder="John Doe" required />
      <TextInput
        label="Email"
        type="email"
        placeholder="john@example.com"
        required
        helperText="We'll never share your email"
      />
      <TextInput label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
      <TextInput
        label="Website"
        type="url"
        placeholder="https://example.com"
        helperText="Optional"
      />
    </div>
  ),
};
