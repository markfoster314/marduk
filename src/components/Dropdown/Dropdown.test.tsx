import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Dropdown, DropdownOption } from "./Dropdown";

const mockOptions: DropdownOption[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

describe("Dropdown", () => {
  describe("Rendering", () => {
    it("renders select element", () => {
      render(<Dropdown options={mockOptions} onChange={() => {}} />);
      expect(screen.getByRole("combobox")).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<Dropdown label="Select Option" options={mockOptions} onChange={() => {}} />);
      expect(screen.getByText("Select Option")).toBeInTheDocument();
    });

    it("renders all options", () => {
      render(<Dropdown options={mockOptions} onChange={() => {}} />);
      const select = screen.getByRole("combobox");
      expect(select.querySelectorAll("option")).toHaveLength(4); // +1 for placeholder
    });

    it("renders placeholder option", () => {
      render(<Dropdown options={mockOptions} placeholder="Choose..." onChange={() => {}} />);
      expect(screen.getByText("Choose...")).toBeInTheDocument();
    });
  });

  describe("Sizes", () => {
    it("applies medium size by default", () => {
      render(<Dropdown options={mockOptions} onChange={() => {}} />);
      expect(screen.getByRole("combobox")).toHaveClass("marduk-dropdown--medium");
    });

    it("applies small size class", () => {
      render(<Dropdown options={mockOptions} size="small" onChange={() => {}} />);
      expect(screen.getByRole("combobox")).toHaveClass("marduk-dropdown--small");
    });

    it("applies large size class", () => {
      render(<Dropdown options={mockOptions} size="large" onChange={() => {}} />);
      expect(screen.getByRole("combobox")).toHaveClass("marduk-dropdown--large");
    });
  });

  describe("Required Field", () => {
    it("shows asterisk when required", () => {
      render(<Dropdown label="Select" options={mockOptions} required onChange={() => {}} />);
      expect(screen.getByText("*")).toBeInTheDocument();
    });

    it("has required attribute", () => {
      render(<Dropdown options={mockOptions} required onChange={() => {}} />);
      expect(screen.getByRole("combobox")).toBeRequired();
    });
  });

  describe("Helper Text", () => {
    it("displays helper text", () => {
      render(<Dropdown options={mockOptions} helperText="Choose wisely" onChange={() => {}} />);
      expect(screen.getByText("Choose wisely")).toBeInTheDocument();
    });

    it("hides helper text when error is present", () => {
      render(
        <Dropdown
          options={mockOptions}
          helperText="Helper"
          error="Error message"
          onChange={() => {}}
        />,
      );
      expect(screen.queryByText("Helper")).not.toBeInTheDocument();
      expect(screen.getByText("Error message")).toBeInTheDocument();
    });
  });

  describe("Error State", () => {
    it("displays error message", () => {
      render(<Dropdown options={mockOptions} error="Selection required" onChange={() => {}} />);
      expect(screen.getByText("Selection required")).toBeInTheDocument();
    });

    it("applies error class", () => {
      render(<Dropdown options={mockOptions} error="Error" onChange={() => {}} />);
      expect(screen.getByRole("combobox")).toHaveClass("marduk-dropdown--error");
    });
  });

  describe("Disabled State", () => {
    it("can be disabled", () => {
      render(<Dropdown options={mockOptions} disabled onChange={() => {}} />);
      expect(screen.getByRole("combobox")).toBeDisabled();
    });

    it("applies disabled class", () => {
      render(<Dropdown options={mockOptions} disabled onChange={() => {}} />);
      expect(screen.getByRole("combobox")).toHaveClass("marduk-dropdown--disabled");
    });
  });

  describe("Disabled Options", () => {
    const optionsWithDisabled: DropdownOption[] = [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2", disabled: true },
      { value: "3", label: "Option 3" },
    ];

    it("renders disabled options", () => {
      render(<Dropdown options={optionsWithDisabled} onChange={() => {}} />);
      const select = screen.getByRole("combobox") as HTMLSelectElement;
      const options = Array.from(select.options);
      const disabledOption = options.find((opt) => opt.value === "2");
      expect(disabledOption).toBeDefined();
      expect(disabledOption?.disabled).toBe(true);
    });
  });

  describe("Selection", () => {
    it("handles controlled value", () => {
      render(<Dropdown options={mockOptions} value="option2" onChange={() => {}} />);
      const select = screen.getByRole("combobox") as HTMLSelectElement;
      expect(select.value).toBe("option2");
    });

    it("calls onChange when selection changes", async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();

      render(<Dropdown options={mockOptions} onChange={handleChange} />);
      const select = screen.getByRole("combobox");

      await user.selectOptions(select, "option2");
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe("Uncontrolled Mode", () => {
    it("works without value prop", async () => {
      const user = userEvent.setup();
      render(<Dropdown options={mockOptions} />);

      const select = screen.getByRole("combobox") as HTMLSelectElement;
      await user.selectOptions(select, "option2");

      expect(select.value).toBe("option2");
    });
  });

  describe("Additional Props", () => {
    it("forwards additional props", () => {
      render(
        <Dropdown
          options={mockOptions}
          data-testid="custom-dropdown"
          aria-label="Custom Dropdown"
          onChange={() => {}}
        />,
      );
      const select = screen.getByTestId("custom-dropdown");
      expect(select).toHaveAttribute("aria-label", "Custom Dropdown");
    });
  });

  describe("Accessibility", () => {
    it("has combobox role", () => {
      render(<Dropdown options={mockOptions} onChange={() => {}} />);
      expect(screen.getByRole("combobox")).toBeInTheDocument();
    });

    it("is keyboard accessible", () => {
      render(<Dropdown options={mockOptions} onChange={() => {}} />);
      const select = screen.getByRole("combobox");

      select.focus();
      expect(select).toHaveFocus();
    });
  });
});
