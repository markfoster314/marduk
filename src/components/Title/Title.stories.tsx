import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";
import React from "react";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
      description: "Heading level (h1-h6)",
    },
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
      description: "Color variant",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Text alignment",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size override (optional)",
    },
    weight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold", "bold"],
      description: "Font weight override (optional)",
    },
    darkMode: {
      control: { type: "boolean" },
      description: "Enable dark mode styling",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: "This is a title",
    level: 1,
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Title level={1}>Heading Level 1</Title>
      <Title level={2}>Heading Level 2</Title>
      <Title level={3}>Heading Level 3</Title>
      <Title level={4}>Heading Level 4</Title>
      <Title level={5}>Heading Level 5</Title>
      <Title level={6}>Heading Level 6</Title>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Title level={2} variant="default">
        Default Variant
      </Title>
      <Title level={2} variant="primary">
        Primary Variant
      </Title>
      <Title level={2} variant="secondary">
        Secondary Variant
      </Title>
      <Title level={2} variant="success">
        Success Variant
      </Title>
      <Title level={2} variant="warning">
        Warning Variant
      </Title>
      <Title level={2} variant="danger">
        Danger Variant
      </Title>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "500px",
      }}
    >
      <Title level={3} align="left">
        Left Aligned Title
      </Title>
      <Title level={3} align="center">
        Center Aligned Title
      </Title>
      <Title level={3} align="right">
        Right Aligned Title
      </Title>
    </div>
  ),
};

export const CustomSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Title level={3} size="small">
        Small Size Override
      </Title>
      <Title level={3} size="medium">
        Medium Size Override
      </Title>
      <Title level={3} size="large">
        Large Size Override
      </Title>
    </div>
  ),
};

export const CustomWeights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Title level={3} weight="normal">
        Normal Weight
      </Title>
      <Title level={3} weight="medium">
        Medium Weight
      </Title>
      <Title level={3} weight="semibold">
        Semibold Weight
      </Title>
      <Title level={3} weight="bold">
        Bold Weight
      </Title>
    </div>
  ),
};

export const PrimaryHeading: Story = {
  args: {
    children: "Welcome to Marduk Components",
    level: 1,
    variant: "primary",
    align: "center",
  },
};

export const SectionHeading: Story = {
  args: {
    children: "Getting Started",
    level: 2,
    variant: "default",
  },
};

export const SubHeading: Story = {
  args: {
    children: "Installation Instructions",
    level: 3,
    variant: "secondary",
  },
};

export const ErrorHeading: Story = {
  args: {
    children: "Error: Something went wrong",
    level: 4,
    variant: "danger",
  },
};

export const SuccessHeading: Story = {
  args: {
    children: "Success! Your changes have been saved",
    level: 4,
    variant: "success",
  },
};

export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ width: "100%", padding: "20px" }}>
      <div style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "14px", color: "#718096", marginBottom: "20px" }}>
          Resize your browser window to see font sizes adapt automatically.
          Titles scale down on mobile and up on desktop for optimal readability.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Title level={1} variant="primary">
            Main Page Heading
          </Title>
          <p style={{ fontSize: "14px", color: "#718096" }}>
            Mobile: 1.875rem (30px) → Tablet: 2.25rem (36px) → Desktop: 2.5rem
            (40px)
          </p>
        </div>
        <div>
          <Title level={2}>Section Title</Title>
          <p style={{ fontSize: "14px", color: "#718096" }}>
            Mobile: 1.5rem (24px) → Tablet: 1.875rem (30px) → Desktop: 2rem
            (32px)
          </p>
        </div>
        <div>
          <Title level={3} variant="secondary">
            Subsection Heading
          </Title>
          <p style={{ fontSize: "14px", color: "#718096" }}>
            Mobile: 1.25rem (20px) → Tablet: 1.5rem (24px) → Desktop: 1.75rem
            (28px)
          </p>
        </div>
        <div>
          <Title level={4}>Article Title</Title>
          <p style={{ fontSize: "14px", color: "#718096" }}>
            Mobile: 1.125rem (18px) → Tablet: 1.25rem (20px) → Desktop: 1.5rem
            (24px)
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export const DarkMode: Story = {
  render: () => (
    <div
      style={{ background: "#1e1e1e", padding: "40px", borderRadius: "8px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Title level={1} darkMode>
          Dark Mode Heading
        </Title>
        <Title level={2} darkMode variant="primary">
          Primary in Dark Mode
        </Title>
        <Title level={3} darkMode variant="success">
          Success in Dark Mode
        </Title>
        <Title level={4} darkMode variant="warning">
          Warning in Dark Mode
        </Title>
        <Title level={5} darkMode variant="danger">
          Danger in Dark Mode
        </Title>
        <Title level={6} darkMode variant="secondary">
          Secondary in Dark Mode
        </Title>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const DarkModeComparison: Story = {
  render: () => (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
    >
      <div
        style={{ padding: "30px", background: "#ffffff", borderRadius: "8px" }}
      >
        <Title level={2} style={{ marginBottom: "20px" }}>
          Light Mode
        </Title>
        <Title level={3} variant="default">
          Default Text
        </Title>
        <Title level={3} variant="primary">
          Primary Text
        </Title>
        <Title level={3} variant="success">
          Success Text
        </Title>
        <Title level={3} variant="warning">
          Warning Text
        </Title>
        <Title level={3} variant="danger">
          Danger Text
        </Title>
      </div>
      <div
        style={{ padding: "30px", background: "#1e1e1e", borderRadius: "8px" }}
      >
        <Title level={2} darkMode style={{ marginBottom: "20px" }}>
          Dark Mode
        </Title>
        <Title level={3} darkMode variant="default">
          Default Text
        </Title>
        <Title level={3} darkMode variant="primary">
          Primary Text
        </Title>
        <Title level={3} darkMode variant="success">
          Success Text
        </Title>
        <Title level={3} darkMode variant="warning">
          Warning Text
        </Title>
        <Title level={3} darkMode variant="danger">
          Danger Text
        </Title>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
