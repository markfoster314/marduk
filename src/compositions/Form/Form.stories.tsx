import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";
import { TextInput, Button } from "@/index";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Form> = {
  title: "Compositions/Form",
  component: Form,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => (
    <Form onSubmit={(e) => e.preventDefault()}>
      <TextInput label="Name" placeholder="Enter your name" />
      <TextInput label="Email" type="email" placeholder="Enter your email" />
      <Button type="submit">Submit</Button>
    </Form>
  ),
};
