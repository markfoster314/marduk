import type { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "./Timeline";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Timeline> = {
  title: "Compositions/Timeline",
  component: Timeline,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

const sampleItems = [
  {
    id: "1",
    title: "Event 1",
    content: "Description of event 1",
    timestamp: "2024-01-01",
  },
  {
    id: "2",
    title: "Event 2",
    content: "Description of event 2",
    timestamp: "2024-01-02",
  },
  {
    id: "3",
    title: "Event 3",
    content: "Description of event 3",
    timestamp: "2024-01-03",
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};
