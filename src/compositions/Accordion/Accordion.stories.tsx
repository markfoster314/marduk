import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Accordion> = {
  title: "Compositions/Accordion",
  component: Accordion,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
  argTypes: {
    allowMultiple: {
      control: { type: "boolean" },
      description: "Allow multiple items to be open simultaneously",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleItems = [
  {
    id: "1",
    title: "First Item",
    content: "This is the content for the first accordion item.",
  },
  {
    id: "2",
    title: "Second Item",
    content: "This is the content for the second accordion item.",
  },
  {
    id: "3",
    title: "Third Item",
    content: "This is the content for the third accordion item.",
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    allowMultiple: false,
  },
};

export const AllowMultiple: Story = {
  args: {
    items: sampleItems,
    allowMultiple: true,
  },
};

export const WithDefaultOpen: Story = {
  args: {
    items: [
      {
        id: "1",
        title: "Open by Default",
        content: "This item is open by default.",
        defaultOpen: true,
      },
      {
        id: "2",
        title: "Closed by Default",
        content: "This item is closed by default.",
      },
    ],
  },
};
