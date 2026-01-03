import type { Meta, StoryObj } from "@storybook/react";
import { Wizard } from "./Wizard";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Wizard> = {
  title: "Compositions/Wizard",
  component: Wizard,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Wizard>;

const sampleSteps = [
  {
    id: "step1",
    title: "Step 1",
    content: "Content for step 1",
  },
  {
    id: "step2",
    title: "Step 2",
    content: "Content for step 2",
  },
  {
    id: "step3",
    title: "Step 3",
    content: "Content for step 3",
  },
];

export const Default: Story = {
  args: {
    steps: sampleSteps,
  },
};
