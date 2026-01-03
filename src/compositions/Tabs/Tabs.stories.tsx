import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Tabs> = {
  title: "Compositions/Tabs",
  component: Tabs,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const sampleTabs = [
  {
    id: "tab1",
    label: "First Tab",
    content: "Content for the first tab",
  },
  {
    id: "tab2",
    label: "Second Tab",
    content: "Content for the second tab",
  },
  {
    id: "tab3",
    label: "Third Tab",
    content: "Content for the third tab",
  },
];

export const Default: Story = {
  args: {
    items: sampleTabs,
  },
};

export const WithDefaultTab: Story = {
  args: {
    items: sampleTabs,
    defaultTab: "tab2",
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      ...sampleTabs,
      {
        id: "tab4",
        label: "Disabled Tab",
        content: "This tab is disabled",
        disabled: true,
      },
    ],
  },
};
