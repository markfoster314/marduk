import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  describe("Rendering", () => {
    it("renders checkbox input with toggle styling", () => {
      render(<Toggle />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<Toggle label="Enable Feature" />);
      expect(screen.getByText("Enable Feature")).toBeInTheDocument();
    });

    it("renders without label", () => {
      render(<Toggle aria-label="Toggle" />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });
  });

  describe("Checked State", () => {
    it("is unchecked by default in uncontrolled mode", () => {
      render(<Toggle />);
      expect(screen.getByRole("checkbox")).not.toBeChecked();
    });

    it("can be checked", () => {
      render(<Toggle checked onChange={() => {}} />);
      expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it("can be unchecked", () => {
      render(<Toggle checked={false} onChange={() => {}} />);
      expect(screen.getByRole("checkbox")).not.toBeChecked();
    });
  });

  describe("Sizes", () => {
    it("applies medium size by default", () => {
      const { container } = render(<Toggle />);
      expect(
        container.querySelector(".marduk-toggle--medium")
      ).toBeInTheDocument();
    });

    it("applies small size class", () => {
      const { container } = render(<Toggle size="small" />);
      expect(
        container.querySelector(".marduk-toggle--small")
      ).toBeInTheDocument();
    });

    it("applies large size class", () => {
      const { container } = render(<Toggle size="large" />);
      expect(
        container.querySelector(".marduk-toggle--large")
      ).toBeInTheDocument();
    });
  });

  describe("Label Position", () => {
    it("positions label on right by default", () => {
      const { container } = render(<Toggle label="Test" />);
      expect(
        container.querySelector(".marduk-toggle-label--right")
      ).toBeInTheDocument();
    });

    it("can position label on left", () => {
      const { container } = render(
        <Toggle label="Test" labelPosition="left" />
      );
      expect(
        container.querySelector(".marduk-toggle-label--left")
      ).toBeInTheDocument();
    });
  });

  describe("Disabled State", () => {
    it("is not disabled by default", () => {
      render(<Toggle />);
      expect(screen.getByRole("checkbox")).not.toBeDisabled();
    });

    it("can be disabled", () => {
      render(<Toggle disabled />);
      expect(screen.getByRole("checkbox")).toBeDisabled();
    });

    it("applies disabled class", () => {
      const { container } = render(<Toggle disabled />);
      expect(
        container.querySelector(".marduk-toggle--disabled")
      ).toBeInTheDocument();
    });
  });

  describe("Change Handler", () => {
    it("calls onChange when toggled", async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();

      render(<Toggle onChange={handleChange} />);
      const toggle = screen.getByRole("checkbox");

      await user.click(toggle);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("does not call onChange when disabled", async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();

      render(<Toggle disabled onChange={handleChange} />);
      const toggle = screen.getByRole("checkbox");

      await user.click(toggle);
      expect(handleChange).not.toHaveBeenCalled();
    });

    it("receives event object in onChange", async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();

      render(<Toggle onChange={handleChange} />);
      const toggle = screen.getByRole("checkbox");

      await user.click(toggle);
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
    });

    it("toggles state when clicked", async () => {
      const user = userEvent.setup();
      const { rerender } = render(
        <Toggle checked={false} onChange={() => {}} />
      );

      const toggle = screen.getByRole("checkbox");
      expect(toggle).not.toBeChecked();

      await user.click(toggle);
      rerender(<Toggle checked={true} onChange={() => {}} />);
      expect(toggle).toBeChecked();
    });
  });

  describe("Label Interaction", () => {
    it("toggles when label text is clicked", async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();

      render(<Toggle label="Click me" onChange={handleChange} />);
      const label = screen.getByText("Click me");

      await user.click(label);
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe("Uncontrolled Mode", () => {
    it("works without checked prop", async () => {
      const user = userEvent.setup();
      render(<Toggle label="Test" />);

      const toggle = screen.getByRole("checkbox");
      expect(toggle).not.toBeChecked();

      await user.click(toggle);
      expect(toggle).toBeChecked();
    });
  });

  describe("Controlled Mode", () => {
    it("works as controlled component", () => {
      const { rerender } = render(
        <Toggle checked={false} onChange={() => {}} />
      );
      expect(screen.getByRole("checkbox")).not.toBeChecked();

      rerender(<Toggle checked={true} onChange={() => {}} />);
      expect(screen.getByRole("checkbox")).toBeChecked();
    });
  });

  describe("Additional Props", () => {
    it("forwards additional props to input element", () => {
      render(<Toggle data-testid="custom-toggle" aria-label="Custom Toggle" />);

      const toggle = screen.getByTestId("custom-toggle");
      expect(toggle).toHaveAttribute("aria-label", "Custom Toggle");
    });

    it("can have custom id", () => {
      render(<Toggle id="feature-toggle" />);
      expect(screen.getByRole("checkbox")).toHaveAttribute(
        "id",
        "feature-toggle"
      );
    });

    it("can have custom name", () => {
      render(<Toggle name="notifications" />);
      expect(screen.getByRole("checkbox")).toHaveAttribute(
        "name",
        "notifications"
      );
    });
  });

  describe("Accessibility", () => {
    it("has checkbox role", () => {
      render(<Toggle />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("is keyboard accessible", () => {
      render(<Toggle />);
      const toggle = screen.getByRole("checkbox");

      toggle.focus();
      expect(toggle).toHaveFocus();
    });

    it("supports aria-label when no visible label", () => {
      render(<Toggle aria-label="Enable feature" />);
      expect(screen.getByLabelText("Enable feature")).toBeInTheDocument();
    });
  });
});
