import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Tabs } from "./Tabs";
import userEvent from "@testing-library/user-event";

describe("Tabs", () => {
  const sampleTabs = [
    {
      id: "tab1",
      label: "First Tab",
      content: "First content",
    },
    {
      id: "tab2",
      label: "Second Tab",
      content: "Second content",
    },
  ];

  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<Tabs items={sampleTabs} />);
      expect(container.querySelector(".marduk-tabs")).toBeInTheDocument();
    });

    it("renders all tab labels", () => {
      render(<Tabs items={sampleTabs} />);
      expect(screen.getByText("First Tab")).toBeInTheDocument();
      expect(screen.getByText("Second Tab")).toBeInTheDocument();
    });

    it("renders first tab content by default", () => {
      render(<Tabs items={sampleTabs} />);
      expect(screen.getByText("First content")).toBeInTheDocument();
      expect(screen.queryByText("Second content")).not.toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    it("switches tabs when clicked", async () => {
      const user = userEvent.setup();
      render(<Tabs items={sampleTabs} />);

      await user.click(screen.getByText("Second Tab"));
      expect(screen.getByText("Second content")).toBeInTheDocument();
      expect(screen.queryByText("First content")).not.toBeInTheDocument();
    });
  });

  describe("Default Tab", () => {
    it("uses defaultTab when provided", () => {
      render(<Tabs items={sampleTabs} defaultTab="tab2" />);
      expect(screen.getByText("Second content")).toBeInTheDocument();
      expect(screen.queryByText("First content")).not.toBeInTheDocument();
    });
  });

  describe("Disabled Tabs", () => {
    it("does not switch to disabled tab", async () => {
      const user = userEvent.setup();
      const tabsWithDisabled = [
        ...sampleTabs,
        {
          id: "tab3",
          label: "Disabled Tab",
          content: "Disabled content",
          disabled: true,
        },
      ];

      render(<Tabs items={tabsWithDisabled} />);
      await user.click(screen.getByText("Disabled Tab"));
      expect(screen.queryByText("Disabled content")).not.toBeInTheDocument();
    });
  });
});
