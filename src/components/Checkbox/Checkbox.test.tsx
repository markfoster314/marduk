import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  describe("Rendering", () => {
    it("renders checkbox input", () => {
      render(<Checkbox />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<Checkbox label="Accept Terms" />);
      expect(screen.getByText("Accept Terms")).toBeInTheDocument();
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("renders without label", () => {
      render(<Checkbox aria-label="Checkbox" />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });
  });

  describe("Checked State", () => {
    it("is unchecked by default", () => {
      render(<Checkbox />);
      expect(screen.getByRole("checkbox")).not.toBeChecked();
    });

    it("can be checked", () => {
      render(<Checkbox checked />);
      expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it("can be unchecked", () => {
      render(<Checkbox checked={false} />);
      expect(screen.getByRole("checkbox")).not.toBeChecked();
    });
  });

  describe("Indeterminate State", () => {
    it("sets indeterminate property", () => {
      render(<Checkbox indeterminate />);
      const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
      expect(checkbox.indeterminate).toBe(true);
    });

    it("applies indeterminate class", () => {
      render(<Checkbox indeterminate />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveClass("marduk-checkbox--indeterminate");
    });

    it("can be both checked and indeterminate", () => {
      render(<Checkbox checked indeterminate />);
      const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
      expect(checkbox.checked).toBe(true);
      expect(checkbox.indeterminate).toBe(true);
    });
  });

  describe("Sizes", () => {
    it("applies medium size by default", () => {
      render(<Checkbox />);
      expect(screen.getByRole("checkbox")).toHaveClass(
        "marduk-checkbox--medium"
      );
    });

    it("applies small size class", () => {
      render(<Checkbox size="small" />);
      expect(screen.getByRole("checkbox")).toHaveClass(
        "marduk-checkbox--small"
      );
    });

    it("applies large size class", () => {
      render(<Checkbox size="large" />);
      expect(screen.getByRole("checkbox")).toHaveClass(
        "marduk-checkbox--large"
      );
    });
  });

  describe("Disabled State", () => {
    it("is not disabled by default", () => {
      render(<Checkbox />);
      expect(screen.getByRole("checkbox")).not.toBeDisabled();
    });

    it("can be disabled", () => {
      render(<Checkbox disabled />);
      expect(screen.getByRole("checkbox")).toBeDisabled();
    });

    it("applies disabled class", () => {
      render(<Checkbox disabled />);
      expect(screen.getByRole("checkbox")).toHaveClass(
        "marduk-checkbox--disabled"
      );
    });
  });

  describe("Helper Text", () => {
    it("displays helper text", () => {
      render(<Checkbox helperText="This is helpful" />);
      expect(screen.getByText("This is helpful")).toBeInTheDocument();
    });

    it("hides helper text when error is present", () => {
      render(<Checkbox helperText="Helper" error="Error message" />);
      expect(screen.queryByText("Helper")).not.toBeInTheDocument();
      expect(screen.getByText("Error message")).toBeInTheDocument();
    });
  });

  describe("Error State", () => {
    it("displays error message", () => {
      render(<Checkbox error="This is required" />);
      expect(screen.getByText("This is required")).toBeInTheDocument();
    });

    it("applies error class when error is present", () => {
      render(<Checkbox error="Error" />);
      expect(screen.getByRole("checkbox")).toHaveClass(
        "marduk-checkbox--error"
      );
    });
  });

  describe("Change Handler", () => {
    it("calls onChange when clicked", async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();

      render(<Checkbox onChange={handleChange} />);
      const checkbox = screen.getByRole("checkbox");

      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("does not call onChange when disabled", async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();

      render(<Checkbox disabled onChange={handleChange} />);
      const checkbox = screen.getByRole("checkbox");

      await user.click(checkbox);
      expect(handleChange).not.toHaveBeenCalled();
    });

    it("receives event object in onChange", async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();

      render(<Checkbox onChange={handleChange} />);
      const checkbox = screen.getByRole("checkbox");

      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
    });

    it("toggles checked state when clicked", async () => {
      const user = userEvent.setup();
      const { rerender } = render(
        <Checkbox checked={false} onChange={() => {}} />
      );

      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);
      rerender(<Checkbox checked={true} onChange={() => {}} />);
      expect(checkbox).toBeChecked();
    });
  });

  describe("Label Interaction", () => {
    it("toggles checkbox when label is clicked", async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();

      render(<Checkbox label="Click me" onChange={handleChange} />);
      const label = screen.getByText("Click me");

      await user.click(label);
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe("Additional Props", () => {
    it("forwards additional props to checkbox element", () => {
      render(
        <Checkbox data-testid="custom-checkbox" aria-label="Custom Checkbox" />
      );

      const checkbox = screen.getByTestId("custom-checkbox");
      expect(checkbox).toHaveAttribute("aria-label", "Custom Checkbox");
    });

    it("can have custom id", () => {
      render(<Checkbox id="terms-checkbox" />);
      expect(screen.getByRole("checkbox")).toHaveAttribute(
        "id",
        "terms-checkbox"
      );
    });

    it("can have custom name", () => {
      render(<Checkbox name="terms" />);
      expect(screen.getByRole("checkbox")).toHaveAttribute("name", "terms");
    });
  });

  describe("Accessibility", () => {
    it("has checkbox role", () => {
      render(<Checkbox />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("is keyboard accessible", () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole("checkbox");

      checkbox.focus();
      expect(checkbox).toHaveFocus();
    });

    it("can be toggled with Space key", () => {
      const handleChange = jest.fn();
      render(<Checkbox onChange={handleChange} />);
      const checkbox = screen.getByRole("checkbox");

      checkbox.focus();
      fireEvent.keyDown(checkbox, { key: " ", code: "Space" });
      fireEvent.click(checkbox);

      expect(handleChange).toHaveBeenCalled();
    });

    it("supports aria-label when no visible label", () => {
      render(<Checkbox aria-label="Accept terms" />);
      expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
    });
  });

  describe("Controlled Component", () => {
    it("works as controlled component", () => {
      const { rerender } = render(
        <Checkbox checked={false} onChange={() => {}} />
      );
      expect(screen.getByRole("checkbox")).not.toBeChecked();

      rerender(<Checkbox checked={true} onChange={() => {}} />);
      expect(screen.getByRole("checkbox")).toBeChecked();
    });
  });
});
