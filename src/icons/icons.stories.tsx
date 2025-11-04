import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { iconData } from "./data";
import { Text } from "../components/Text/Text";
import { Title } from "../components/Title/Title";
import { Button } from "../components/Button/Button";
import React from "react";
import { UserIcon } from "./index";

const meta: Meta<typeof Icon> = {
  title: "Icons/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "select" },
      options: Object.keys(iconData),
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    color: {
      control: { type: "color" },
    },
    rotate: {
      control: { type: "select" },
      options: [0, 90, 180, 270],
    },
    flip: {
      control: { type: "select" },
      options: ["horizontal", "vertical", "both"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "user",
  },
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Icon Library
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          All available icons in the Marduk component library
        </Text>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "20px",
        }}
      >
        {Object.keys(iconData).map((iconName) => (
          <div
            key={iconName}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#f7fafc";
              e.currentTarget.style.borderColor = "#cbd5e0";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "#e2e8f0";
            }}
          >
            <Icon name={iconName as any} size="large" />
            <Text
              as="div"
              style={{
                fontSize: "11px",
                marginTop: "8px",
                textAlign: "center",
                color: "#4a5568",
              }}
            >
              {iconName}
            </Text>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Icon Sizes
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Icons support predefined and custom sizes
        </Text>
      </div>
      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <Icon name="user" size="small" />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Small (16px)
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Icon name="user" size="medium" />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Medium (24px)
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Icon name="user" size="large" />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Large (32px)
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Icon name="user" size={48} />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Custom (48px)
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Icon Colors
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Icons support any color value or CSS variable
        </Text>
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ textAlign: "center" }}>
          <Icon
            name="user"
            size="large"
            color="var(--marduk-color-primary-500)"
          />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Primary
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Icon
            name="user"
            size="large"
            color="var(--marduk-color-warning-400)"
          />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Warning
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Icon
            name="user"
            size="large"
            color="var(--marduk-color-success-500)"
          />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Success
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Icon
            name="user"
            size="large"
            color="var(--marduk-color-error-500)"
          />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Error
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <Icon name="user" size="large" color="#9b59b6" />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Custom
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const IndividualComponents: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Individual Icon Components
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Import specific icon components for better tree-shaking
        </Text>
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <UserIcon size="large" color="var(--marduk-color-primary-500)" />
        <UserIcon size="large" color="var(--marduk-color-success-500)" />
        <UserIcon size="large" color="var(--marduk-color-warning-400)" />
        <UserIcon size="large" color="var(--marduk-color-error-500)" />
        <UserIcon size="large" color="var(--marduk-color-gray-600)" />
      </div>
      <div
        style={{
          padding: "16px",
          backgroundColor: "#f7fafc",
          borderRadius: "8px",
          fontFamily: "monospace",
          fontSize: "12px",
        }}
      >
        <div>{`import { UserIcon } from "@markfoster314/marduk";`}</div>
        <br />
        <div>{`<UserIcon size="large" color="blue" />`}</div>
      </div>
    </div>
  ),
};

export const WithTransformations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Transformations
        </Title>
        <Text style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Icons inherit all Svg component props including rotate, flip, spin
        </Text>
      </div>
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <div style={{ textAlign: "center" }}>
          <UserIcon size="large" />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Default
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <UserIcon size="large" rotate={90} />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Rotate 90°
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <UserIcon size="large" rotate={180} />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Rotate 180°
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <UserIcon size="large" flip="horizontal" />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Flip Horizontal
          </Text>
        </div>
        <div style={{ textAlign: "center" }}>
          <UserIcon size="large" spin />
          <Text as="div" style={{ fontSize: "12px", marginTop: "8px" }}>
            Spinning
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const InteractiveExample: Story = {
  render: () => {
    const [count, setCount] = React.useState(1);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Title level={3} style={{ marginBottom: "10px" }}>
            Interactive Icons
          </Title>
          <Text
            style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}
          >
            Icons can be used in interactive components
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => setCount(Math.max(1, count - 1))}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              backgroundColor: "var(--marduk-color-gray-200)",
              color: "var(--marduk-color-gray-700)",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Remove User
          </Button>

          <div style={{ display: "flex", gap: "10px" }}>
            {Array.from({ length: count }).map((_, i) => (
              <UserIcon
                key={i}
                size="large"
                color="var(--marduk-color-primary-500)"
              />
            ))}
          </div>

          <Button
            onClick={() => setCount(count + 1)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              backgroundColor: "var(--marduk-color-primary-500)",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Add User
          </Button>
        </div>
      </div>
    );
  },
};
