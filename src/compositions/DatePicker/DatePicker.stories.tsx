import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof DatePicker> = {
  title: "Compositions/DatePicker",
  component: DatePicker,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    placeholder: "Select a date",
  },
};

export const WithValue: Story = {
  args: {
    value: new Date(),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled date picker",
  },
};
