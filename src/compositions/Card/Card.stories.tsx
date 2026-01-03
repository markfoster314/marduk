import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "@/index";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Card> = {
  title: "Compositions/Card",
  component: Card,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    children: "This is the card body content.",
  },
};

export const WithFooter: Story = {
  args: {
    title: "Card with Footer",
    children: "This card has a footer section.",
    footer: <Button>Action</Button>,
  },
};

export const WithHeaderActions: Story = {
  args: {
    title: "Card with Actions",
    children: "This card has header actions.",
    headerActions: <Button>Edit</Button>,
  },
};

export const NoTitle: Story = {
  args: {
    children: "This card has no title, just body content.",
  },
};
