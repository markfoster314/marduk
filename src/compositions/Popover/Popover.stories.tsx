import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { useState } from "react";
import { Button } from "@/index";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Popover> = {
  title: "Compositions/Popover",
  component: Popover,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

const DefaultPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} content="This is popover content">
      <Button onClick={() => setIsOpen(true)}>Open Popover</Button>
    </Popover>
  );
};

const TopPositionPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} position="top" content="Top popover">
      <Button onClick={() => setIsOpen(true)}>Top Popover</Button>
    </Popover>
  );
};

export const Default: Story = {
  render: () => <DefaultPopover />,
};

export const TopPosition: Story = {
  render: () => <TopPositionPopover />,
};
