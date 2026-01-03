import type { Meta, StoryObj } from "@storybook/react";
import { Autocomplete } from "./Autocomplete";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Autocomplete> = {
  title: "Compositions/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const sampleOptions = [
  { value: "1", label: "Apple" },
  { value: "2", label: "Banana" },
  { value: "3", label: "Cherry" },
  { value: "4", label: "Date" },
  { value: "5", label: "Elderberry" },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: "Search fruits...",
  },
};
