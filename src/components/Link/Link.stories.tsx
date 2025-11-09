import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";
import { UserIcon, CircleInfoIcon, TriangleExclamationIcon, ThumbsUpIcon } from "@/icons";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  tags: ["autodocs", "status:ready"],
  argTypes: {
    children: {
      control: false,
      description: "Link content",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    href: {
      control: { type: "text" },
      description: "URL to navigate to",
    },
    preset: {
      control: { type: "multi-select" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "muted",
        "defaultDark",
        "primaryDark",
        "secondaryDark",
        "successDark",
        "dangerDark",
        "warningDark",
        "mutedDark",
      ],
      description: "Preset configurations (select multiple)",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Link size",
    },
    weight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold", "bold"],
      description: "Font weight",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
      description: "Text alignment",
    },
    underline: {
      control: { type: "select" },
      options: ["none", "hover", "always"],
      description: "Underline style",
      table: {
        defaultValue: { summary: "always" },
      },
    },
    external: {
      control: { type: "boolean" },
      description: "Opens in new tab with security attributes",
    },
    target: {
      control: { type: "select" },
      options: ["_self", "_blank", "_parent", "_top"],
      description: "Link target",
    },
    leftIcon: {
      control: { type: "select" },
      options: ["none", "user", "info", "warning", "thumbsup"],
      mapping: {
        none: undefined,
        user: <UserIcon size="small" />,
        info: <CircleInfoIcon size="small" />,
        warning: <TriangleExclamationIcon size="small" />,
        thumbsup: <ThumbsUpIcon size="small" />,
      },
      description: "Icon to display on the left",
    },
    rightIcon: {
      control: { type: "select" },
      options: ["none", "user", "info", "warning", "thumbsup"],
      mapping: {
        none: undefined,
        user: <UserIcon size="small" />,
        info: <CircleInfoIcon size="small" />,
        warning: <TriangleExclamationIcon size="small" />,
        thumbsup: <ThumbsUpIcon size="small" />,
      },
      description: "Icon to display on the right",
    },
    truncate: {
      control: { type: "boolean" },
      description: "Truncate text with ellipsis",
    },
    clamp: {
      control: { type: "boolean" },
      description: "Clamp text to maxLines",
    },
    maxLines: {
      control: { type: "number" },
      description: "Maximum lines when clamp is enabled",
    },
    italic: {
      control: { type: "boolean" },
      description: "Italic text",
    },
    color: {
      control: { type: "color" },
      description: "Custom text color",
    },
    lineHeight: {
      control: { type: "select" },
      options: ["tight", "normal", "relaxed", "loose"],
      description: "Line height",
    },
    spacing: {
      control: { type: "select" },
      options: ["tight", "normal", "wide"],
      description: "Letter spacing",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Click here",
  },
};

export const Presets: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Link href="#" preset={["default"]}>
          Default
        </Link>
        <Link href="#" preset={["primary"]}>
          Primary
        </Link>
        <Link href="#" preset={["secondary"]}>
          Secondary
        </Link>
        <Link href="#" preset={["success"]}>
          Success
        </Link>
        <Link href="#" preset={["danger"]}>
          Danger
        </Link>
        <Link href="#" preset={["warning"]}>
          Warning
        </Link>
        <Link href="#" preset={["muted"]}>
          Muted
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          background: "#1a1a1a",
          padding: "20px",
          borderRadius: "4px",
        }}
      >
        <Link href="#" preset={["defaultDark"]}>
          Default Dark
        </Link>
        <Link href="#" preset={["primaryDark"]}>
          Primary Dark
        </Link>
        <Link href="#" preset={["secondaryDark"]}>
          Secondary Dark
        </Link>
        <Link href="#" preset={["successDark"]}>
          Success Dark
        </Link>
        <Link href="#" preset={["dangerDark"]}>
          Danger Dark
        </Link>
        <Link href="#" preset={["warningDark"]}>
          Warning Dark
        </Link>
        <Link href="#" preset={["mutedDark"]}>
          Muted Dark
        </Link>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}
    >
      <Link href="#" size="xs">
        Extra Small Link
      </Link>
      <Link href="#" size="sm">
        Small Link
      </Link>
      <Link href="#" size="md">
        Medium Link
      </Link>
      <Link href="#" size="lg">
        Large Link
      </Link>
      <Link href="#" size="xl">
        Extra Large Link
      </Link>
    </div>
  ),
};

export const UnderlineStyles: Story = {
  render: () => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}
    >
      <Link href="#" underline="none">
        No underline
      </Link>
      <Link href="#" underline="hover">
        Underline on hover
      </Link>
      <Link href="#" underline="always">
        Always underlined
      </Link>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}
    >
      <Link href="#" leftIcon={<UserIcon size="small" />}>
        Left icon
      </Link>
      <Link href="#" rightIcon={<CircleInfoIcon size="small" />}>
        Right icon
      </Link>
      <Link
        href="#"
        leftIcon={<TriangleExclamationIcon size="small" />}
        rightIcon={<CircleInfoIcon size="small" />}
      >
        Both icons
      </Link>
      <Link href="#" preset={["primary"]} leftIcon={<UserIcon size="small" />} weight="semibold">
        Styled with icon
      </Link>
    </div>
  ),
};

export const ExternalLinks: Story = {
  render: () => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}
    >
      <Link href="https://example.com">Internal-looking link</Link>
      <Link href="https://example.com" external>
        External link (opens in new tab)
      </Link>
      <Link href="https://github.com" external leftIcon={<CircleInfoIcon size="small" />}>
        GitHub (external with icon)
      </Link>
      <Link href="https://example.com" target="_parent">
        Custom target
      </Link>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
      <Link href="#" weight="normal">
        Normal weight
      </Link>
      <Link href="#" weight="medium">
        Medium weight
      </Link>
      <Link href="#" weight="semibold">
        Semibold weight
      </Link>
      <Link href="#" weight="bold">
        Bold weight
      </Link>
    </div>
  ),
};

export const TextFormatting: Story = {
  render: () => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}
    >
      <Link href="#" italic>
        Italic link
      </Link>
      <Link href="#" style={{ textTransform: "uppercase" }}>
        Uppercase link
      </Link>
      <Link href="#" spacing="wide">
        Wide letter spacing
      </Link>
      <Link href="#" lineHeight="loose">
        Loose line height with multiple words that wrap to demonstrate
      </Link>
    </div>
  ),
};

export const Truncation: Story = {
  render: () => (
    <div style={{ width: "200px", display: "flex", flexDirection: "column", gap: "12px" }}>
      <Link href="#" truncate>
        This is a very long link text that will be truncated with an ellipsis
      </Link>
      <Link href="#" clamp maxLines={2}>
        This is a very long link text that will be clamped to two lines and show an ellipsis at the
        end
      </Link>
    </div>
  ),
};

export const Navigation: Story = {
  render: () => (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        background: "#f5f5f5",
        borderRadius: "4px",
      }}
    >
      <Link href="#home" preset={["primary"]} weight="semibold" underline="hover">
        Home
      </Link>
      <Link href="#about" underline="hover">
        About
      </Link>
      <Link href="#services" underline="hover">
        Services
      </Link>
      <Link href="#contact" underline="hover">
        Contact
      </Link>
    </nav>
  ),
};

export const Polymorphic: Story = {
  render: () => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}
    >
      <Link href="#" preset={["primary"]}>
        Default anchor element
      </Link>
      <Link href="#" as="button" preset={["success"]}>
        Renders as button
      </Link>
      <Link href="#" as="div" preset={["warning"]}>
        Renders as div
      </Link>
    </div>
  ),
};

export const Accessibility: Story = {
  render: () => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}
    >
      <Link href="#" aria-label="Navigate to home page">
        Home
      </Link>
      <Link
        href="https://example.com"
        external
        aria-label="Visit our external documentation (opens in new tab)"
      >
        Documentation
      </Link>
      <Link href="#skip-to-content" style={{ position: "absolute", left: "-9999px" }}>
        Skip to content
      </Link>
    </div>
  ),
};
