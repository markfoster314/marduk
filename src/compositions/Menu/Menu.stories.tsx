import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./Menu";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Menu> = {
  title: "Compositions/Menu",
  component: Menu,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

const sampleItems = [
  {
    id: "1",
    label: "Edit",
    onClick: () => console.log("Edit clicked"),
  },
  {
    id: "2",
    label: "Delete",
    onClick: () => console.log("Delete clicked"),
  },
  {
    id: "divider",
    label: "",
    divider: true,
  },
  {
    id: "3",
    label: "Settings",
    onClick: () => console.log("Settings clicked"),
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      ...sampleItems,
      {
        id: "4",
        label: "Disabled Item",
        disabled: true,
      },
    ],
  },
};
