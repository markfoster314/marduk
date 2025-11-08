import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { useState } from "react";
import { Button } from "@/components/Button/Button";
import { TextInput } from "@/components/TextInput/TextInput";
import React from "react";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Modal> = {
  title: "Compositions/Modal",
  component: Modal,
  tags: ["autodocs", "status:barebones"],
  parameters: {
    docs: {
      subtitle: STORYBOOK_STATUS.BAREBONES,
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const DefaultComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is the modal content.</p>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
};

const WithTitleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
        <p>This modal has a title in the header.</p>
      </Modal>
    </>
  );
};

export const WithTitle: Story = {
  render: () => <WithTitleComponent />,
};

const SmallComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Small Modal" size="small">
        <p>This is a small modal.</p>
      </Modal>
    </>
  );
};

export const Small: Story = {
  render: () => <SmallComponent />,
};

const MediumComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Medium Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Medium Modal" size="medium">
        <p>This is a medium modal (default size).</p>
      </Modal>
    </>
  );
};

export const Medium: Story = {
  render: () => <MediumComponent />,
};

const LargeComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Large Modal" size="large">
        <p>This is a large modal with more space for content.</p>
      </Modal>
    </>
  );
};

export const Large: Story = {
  render: () => <LargeComponent />,
};

const LongContentComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal with Long Content</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Terms and Conditions">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>
      </Modal>
    </>
  );
};

export const LongContent: Story = {
  render: () => <LongContentComponent />,
};

const WithFormComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { name, email });
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Form Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Contact Form">
        <form onSubmit={handleSubmit}>
          <TextInput label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <div style={{ marginTop: "16px" }}>
            <TextInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div
            style={{
              marginTop: "24px",
              display: "flex",
              gap: "8px",
              justifyContent: "flex-end",
            }}
          >
            <Button type="button" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export const WithForm: Story = {
  render: () => <WithFormComponent />,
};

const NoCloseButtonComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="No Close Button"
        showCloseButton={false}
      >
        <p>This modal has no close button. Click outside to close.</p>
      </Modal>
    </>
  );
};

export const NoCloseButton: Story = {
  render: () => <NoCloseButtonComponent />,
};

const NoOverlayCloseComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Cannot Close by Overlay Click"
        closeOnOverlayClick={false}
      >
        <p>You must use the close button or press Escape to close this modal.</p>
      </Modal>
    </>
  );
};

export const NoOverlayClose: Story = {
  render: () => <NoOverlayCloseComponent />,
};
