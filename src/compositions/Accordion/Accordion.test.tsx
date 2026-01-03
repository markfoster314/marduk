import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Accordion } from "./Accordion";
import userEvent from "@testing-library/user-event";

describe("Accordion", () => {
  const sampleItems = [
    {
      id: "1",
      title: "First Item",
      content: "First content",
    },
    {
      id: "2",
      title: "Second Item",
      content: "Second content",
    },
  ];

  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<Accordion items={sampleItems} />);
      expect(container.querySelector(".marduk-accordion")).toBeInTheDocument();
    });

    it("renders all accordion items", () => {
      render(<Accordion items={sampleItems} />);
      expect(screen.getByText("First Item")).toBeInTheDocument();
      expect(screen.getByText("Second Item")).toBeInTheDocument();
    });

    it("renders items as closed by default", () => {
      render(<Accordion items={sampleItems} />);
      expect(screen.queryByText("First content")).not.toBeInTheDocument();
      expect(screen.queryByText("Second content")).not.toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    it("opens an item when clicked", async () => {
      const user = userEvent.setup();
      render(<Accordion items={sampleItems} />);

      const firstHeader = screen.getByText("First Item");
      await user.click(firstHeader);

      expect(screen.getByText("First content")).toBeInTheDocument();
    });

    it("closes an item when clicked again", async () => {
      const user = userEvent.setup();
      render(<Accordion items={sampleItems} />);

      const firstHeader = screen.getByText("First Item");
      await user.click(firstHeader);
      expect(screen.getByText("First content")).toBeInTheDocument();

      await user.click(firstHeader);
      expect(screen.queryByText("First content")).not.toBeInTheDocument();
    });
  });

  describe("Allow Multiple", () => {
    it("allows multiple items to be open when allowMultiple is true", async () => {
      const user = userEvent.setup();
      render(<Accordion items={sampleItems} allowMultiple={true} />);

      await user.click(screen.getByText("First Item"));
      await user.click(screen.getByText("Second Item"));

      expect(screen.getByText("First content")).toBeInTheDocument();
      expect(screen.getByText("Second content")).toBeInTheDocument();
    });

    it("closes other items when allowMultiple is false", async () => {
      const user = userEvent.setup();
      render(<Accordion items={sampleItems} allowMultiple={false} />);

      await user.click(screen.getByText("First Item"));
      expect(screen.getByText("First content")).toBeInTheDocument();

      await user.click(screen.getByText("Second Item"));
      expect(screen.queryByText("First content")).not.toBeInTheDocument();
      expect(screen.getByText("Second content")).toBeInTheDocument();
    });
  });

  describe("Default Open", () => {
    it("opens items marked as defaultOpen", () => {
      const itemsWithDefault = [
        {
          id: "1",
          title: "Open Item",
          content: "This is open",
          defaultOpen: true,
        },
        {
          id: "2",
          title: "Closed Item",
          content: "This is closed",
        },
      ];

      render(<Accordion items={itemsWithDefault} />);
      expect(screen.getByText("This is open")).toBeInTheDocument();
      expect(screen.queryByText("This is closed")).not.toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has proper ARIA attributes", () => {
      render(<Accordion items={sampleItems} />);
      const headers = screen.getAllByRole("button");
      expect(headers).toHaveLength(2);
      headers.forEach((header) => {
        expect(header).toHaveAttribute("aria-expanded");
        expect(header).toHaveAttribute("aria-controls");
      });
    });

    it("toggles on Enter key", async () => {
      const user = userEvent.setup();
      render(<Accordion items={sampleItems} />);

      const firstHeader = screen.getByText("First Item");
      firstHeader.focus();
      await user.keyboard("{Enter}");

      expect(screen.getByText("First content")).toBeInTheDocument();
    });

    it("toggles on Space key", async () => {
      const user = userEvent.setup();
      render(<Accordion items={sampleItems} />);

      const firstHeader = screen.getByText("First Item");
      firstHeader.focus();
      await user.keyboard(" ");

      expect(screen.getByText("First content")).toBeInTheDocument();
    });
  });
});
