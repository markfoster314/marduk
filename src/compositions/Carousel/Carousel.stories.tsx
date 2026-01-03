import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Carousel> = {
  title: "Compositions/Carousel",
  component: Carousel,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const sampleItems = [
  <div key="1" style={{ padding: "40px", background: "#f0f0f0", textAlign: "center" }}>
    Slide 1
  </div>,
  <div key="2" style={{ padding: "40px", background: "#e0e0e0", textAlign: "center" }}>
    Slide 2
  </div>,
  <div key="3" style={{ padding: "40px", background: "#d0d0d0", textAlign: "center" }}>
    Slide 3
  </div>,
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const AutoPlay: Story = {
  args: {
    items: sampleItems,
    autoPlay: true,
    interval: 2000,
  },
};
