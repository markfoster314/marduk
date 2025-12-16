import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { TextInput } from "./TextInput";

describe("TextInput", () => {
  describe("Rendering", () => {
    it("renders input element", () => {
      render(<TextInput />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<TextInput label="Email" />);
      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("renders with placeholder", () => {
      render(<TextInput placeholder="Enter text" />);
      expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    });
  });

  describe("Required Field", () => {
    it("shows asterisk when required", () => {
      render(<TextInput label="Email" required />);
      expect(screen.getByText("*")).toBeInTheDocument();
    });

    it("has required attribute when required", () => {
      render(<TextInput required />);
      expect(screen.getByRole("textbox")).toBeRequired();
    });
  });

  describe("Helper Text", () => {
    it("displays helper text", () => {
      render(<TextInput helperText="This is helpful" />);
      expect(screen.getByText("This is helpful")).toBeInTheDocument();
    });

    it("hides helper text when error is present", () => {
      render(<TextInput helperText="Helper" error="Error message" />);
      expect(screen.queryByText("Helper")).not.toBeInTheDocument();
      expect(screen.getByText("Error message")).toBeInTheDocument();
    });
  });

  describe("Error State", () => {
    it("displays error message", () => {
      render(<TextInput error="Invalid input" />);
      expect(screen.getByText("Invalid input")).toBeInTheDocument();
    });

    it("applies error class when error is present", () => {
      render(<TextInput error="Error" />);
      expect(screen.getByRole("textbox")).toHaveClass("marduk-input--error");
    });
  });

  describe("Sizes", () => {
    it("applies medium size by default", () => {
      render(<TextInput />);
      expect(screen.getByRole("textbox")).toHaveClass("marduk-input--medium");
    });

    it("applies small size class", () => {
      render(<TextInput size="small" />);
      expect(screen.getByRole("textbox")).toHaveClass("marduk-input--small");
    });

    it("applies large size class", () => {
      render(<TextInput size="large" />);
      expect(screen.getByRole("textbox")).toHaveClass("marduk-input--large");
    });
  });

  describe("Input Types", () => {
    it("has text type by default", () => {
      render(<TextInput />);
      expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");
    });

    it("can have email type", () => {
      render(<TextInput type="email" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");
    });

    it("can have password type", () => {
      render(<TextInput type="password" />);
      const input = screen.getByPlaceholderText("") as HTMLInputElement;
      expect(input.type).toBe("password");
    });

    it("can have number type", () => {
      render(<TextInput type="number" />);
      const input = screen.getByRole("spinbutton");
      expect(input).toHaveAttribute("type", "number");
    });
  });

  describe("Disabled State", () => {
    it("is not disabled by default", () => {
      render(<TextInput />);
      expect(screen.getByRole("textbox")).not.toBeDisabled();
    });

    it("can be disabled", () => {
      render(<TextInput disabled />);
      expect(screen.getByRole("textbox")).toBeDisabled();
    });

    it("applies disabled class when disabled", () => {
      render(<TextInput disabled />);
      expect(screen.getByRole("textbox")).toHaveClass("marduk-input--disabled");
    });
  });

  describe("Controlled Input", () => {
    it("displays controlled value", () => {
      render(<TextInput value="Test Value" onChange={() => {}} />);
      expect(screen.getByRole("textbox")).toHaveValue("Test Value");
    });

    it("calls onChange when value changes", async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();

      render(<TextInput value="" onChange={handleChange} />);
      const input = screen.getByRole("textbox");

      await user.type(input, "a");
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe("Focus State", () => {
    it("applies focused class on focus", () => {
      render(<TextInput />);
      const input = screen.getByRole("textbox");

      fireEvent.focus(input);
      expect(input).toHaveClass("marduk-input--focused");
    });

    it("removes focused class on blur", () => {
      render(<TextInput />);
      const input = screen.getByRole("textbox");

      fireEvent.focus(input);
      fireEvent.blur(input);
      expect(input).not.toHaveClass("marduk-input--focused");
    });
  });

  describe("Additional Props", () => {
    it("forwards additional props to input element", () => {
      render(<TextInput data-testid="custom-input" aria-label="Custom Input" />);

      const input = screen.getByTestId("custom-input");
      expect(input).toHaveAttribute("aria-label", "Custom Input");
    });

    it("can have custom id", () => {
      render(<TextInput id="email-input" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("id", "email-input");
    });
  });

  describe("Data Attributes", () => {
    it("includes data-size attribute", () => {
      const { container } = render(<TextInput size="small" />);
      const wrapper = container.querySelector(".marduk-input-wrapper");
      expect(wrapper).toHaveAttribute("data-size", "small");
    });

    it("includes data-type attribute", () => {
      const { container } = render(<TextInput type="email" />);
      const wrapper = container.querySelector(".marduk-input-wrapper");
      expect(wrapper).toHaveAttribute("data-type", "email");
    });

    it("includes data-disabled attribute when disabled", () => {
      const { container } = render(<TextInput disabled />);
      const wrapper = container.querySelector(".marduk-input-wrapper");
      expect(wrapper).toHaveAttribute("data-disabled", "true");
    });

    it("includes data-required attribute when required", () => {
      const { container } = render(<TextInput required />);
      const wrapper = container.querySelector(".marduk-input-wrapper");
      expect(wrapper).toHaveAttribute("data-required", "true");
    });

    it("includes data-error attribute when error is present", () => {
      const { container } = render(<TextInput error="Error message" />);
      const wrapper = container.querySelector(".marduk-input-wrapper");
      expect(wrapper).toHaveAttribute("data-error", "true");
    });

    it("includes data-focused attribute when focused", () => {
      const { container } = render(<TextInput />);
      const input = screen.getByRole("textbox");
      const wrapper = container.querySelector(".marduk-input-wrapper");

      fireEvent.focus(input);
      expect(wrapper).toHaveAttribute("data-focused", "true");
    });
  });

  describe("Accessibility", () => {
    it("is keyboard accessible", () => {
      render(<TextInput />);
      const input = screen.getByRole("textbox");

      act(() => {
        input.focus();
      });
      expect(input).toHaveFocus();
    });

    it("associates label with input", () => {
      render(<TextInput label="Username" />);
      const input = screen.getByRole("textbox");
      expect(input).toBeInTheDocument();
    });
  });
});
