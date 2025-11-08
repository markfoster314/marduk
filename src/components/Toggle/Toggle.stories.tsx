import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";
import { useState } from "react";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
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
    labelPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    checked: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    label: "Toggle Switch",
  },
};

export const Checked: Story = {
  args: {
    label: "Enabled Feature",
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: "Disabled Feature",
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Toggle",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled On",
    checked: true,
    disabled: true,
  },
};

export const LabelLeft: Story = {
  args: {
    label: "Enable Notifications",
    labelPosition: "left",
    checked: true,
  },
};

export const LabelRight: Story = {
  args: {
    label: "Enable Notifications",
    labelPosition: "right",
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    "aria-label": "Toggle feature",
    checked: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small Toggle",
    size: "small",
    checked: true,
  },
};

export const Medium: Story = {
  args: {
    label: "Medium Toggle",
    size: "medium",
    checked: true,
  },
};

export const Large: Story = {
  args: {
    label: "Large Toggle",
    size: "large",
    checked: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Toggle label="Small" size="small" checked />
      <Toggle label="Medium" size="medium" checked />
      <Toggle label="Large" size="large" checked />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Toggle label="Off" checked={false} />
      <Toggle label="On" checked={true} />
      <Toggle label="Disabled Off" checked={false} disabled />
      <Toggle label="Disabled On" checked={true} disabled />
    </div>
  ),
};

const InteractiveComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxWidth: "400px",
      }}
    >
      <Toggle
        label={isEnabled ? "Notifications Enabled" : "Notifications Disabled"}
        checked={isEnabled}
        onChange={(e) => setIsEnabled(e.target.checked)}
      />
      <div
        style={{
          padding: "12px",
          backgroundColor: isEnabled ? "#c6f6d5" : "#fed7d7",
          borderRadius: "4px",
        }}
      >
        <strong>Status:</strong> {isEnabled ? "✓ Enabled" : "✗ Disabled"}
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveComponent />,
};

const SettingsPanelComponent = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    analytics: false,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "400px",
        padding: "20px",
        backgroundColor: "#f7fafc",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ margin: "0 0 8px 0" }}>Settings</h3>

      <Toggle
        label="Enable Notifications"
        checked={settings.notifications}
        onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
      />

      <Toggle
        label="Dark Mode"
        checked={settings.darkMode}
        onChange={(e) => setSettings({ ...settings, darkMode: e.target.checked })}
      />

      <Toggle
        label="Auto-save"
        checked={settings.autoSave}
        onChange={(e) => setSettings({ ...settings, autoSave: e.target.checked })}
      />

      <Toggle
        label="Analytics"
        checked={settings.analytics}
        onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
      />

      <div
        style={{
          marginTop: "12px",
          padding: "12px",
          backgroundColor: "white",
          borderRadius: "4px",
          fontSize: "14px",
        }}
      >
        <strong>Active Settings:</strong>
        <ul style={{ margin: "8px 0 0 0", paddingLeft: "20px" }}>
          {settings.notifications && <li>Notifications</li>}
          {settings.darkMode && <li>Dark Mode</li>}
          {settings.autoSave && <li>Auto-save</li>}
          {settings.analytics && <li>Analytics</li>}
        </ul>
      </div>
    </div>
  );
};

export const SettingsPanel: Story = {
  render: () => <SettingsPanelComponent />,
};

export const LabelPositions: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Toggle label="Label on Right" labelPosition="right" checked />
      <Toggle label="Label on Left" labelPosition="left" checked />
    </div>
  ),
};
