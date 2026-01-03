import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { Button } from "@/index";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Sidebar> = {
  title: "Compositions/Sidebar",
  component: Sidebar,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const DefaultSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Sidebar</Button>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{ padding: "20px" }}>
          <h2>Sidebar Content</h2>
          <p>This is the sidebar content area.</p>
        </div>
      </Sidebar>
    </>
  );
};

const RightPositionSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Right Sidebar</Button>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} position="right">
        <div style={{ padding: "20px" }}>
          <h2>Right Sidebar</h2>
          <p>This sidebar opens from the right.</p>
        </div>
      </Sidebar>
    </>
  );
};

export const Default: Story = {
  render: () => <DefaultSidebar />,
};

export const RightPosition: Story = {
  render: () => <RightPositionSidebar />,
};
