import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RadioButtons } from "./RadioButtons";
import type { RadioOption } from "./RadioButtons";

const mockOptions: RadioOption[] = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

describe("RadioButtons", () => {
  describe("Rendering", () => {
    it("renders all radio options", () => {
      render(<RadioButtons name="size" options={mockOptions} />);

      expect(screen.getByLabelText("Small")).toBeInTheDocument();
      expect(screen.getByLabelText("Medium")).toBeInTheDocument();
      expect(screen.getByLabelText("Large")).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<RadioButtons name="size" options={mockOptions} label="Choose Size" />);
      expect(screen.getByText("Choose Size")).toBeInTheDocument();
    });

    it("renders required asterisk when required", () => {
      render(<RadioButtons name="size" options={mockOptions} label="Size" required />);
      expect(screen.getByText("*")).toBeInTheDocument();
    });

    it("renders without label", () => {
      render(<RadioButtons name="size" options={mockOptions} />);
      expect(screen.queryByRole("label")).not.toBeInTheDocument();
    });
  });

  describe("Selection", () => {
    it("selects radio button when clicked", () => {
      const handleChange = jest.fn();
      render(<RadioButtons name="size" options={mockOptions} onChange={handleChange} />);

      const mediumRadio = screen.getByLabelText("Medium") as HTMLInputElement;
      fireEvent.click(mediumRadio);

      expect(handleChange).toHaveBeenCalledWith("medium");
      expect(mediumRadio.checked).toBe(true);
    });

    it("works as controlled component", () => {
      const { rerender } = render(<RadioButtons name="size" options={mockOptions} value="small" />);

      const smallRadio = screen.getByLabelText("Small") as HTMLInputElement;
      expect(smallRadio.checked).toBe(true);

      rerender(<RadioButtons name="size" options={mockOptions} value="large" />);

      const largeRadio = screen.getByLabelText("Large") as HTMLInputElement;
      expect(largeRadio.checked).toBe(true);
      expect(smallRadio.checked).toBe(false);
    });

    it("works as uncontrolled component", () => {
      render(<RadioButtons name="size" options={mockOptions} />);

      const mediumRadio = screen.getByLabelText("Medium") as HTMLInputElement;
      fireEvent.click(mediumRadio);

      expect(mediumRadio.checked).toBe(true);
    });
  });

  describe("Direction", () => {
    it("applies vertical direction by default", () => {
      render(<RadioButtons name="size" options={mockOptions} />);
      const group = screen.getByRole("radiogroup");
      expect(group.className).toContain("vertical");
    });

    it("applies horizontal direction", () => {
      render(<RadioButtons name="size" options={mockOptions} direction="horizontal" />);
      const group = screen.getByRole("radiogroup");
      expect(group.className).toContain("horizontal");
    });
  });

  describe("Sizes", () => {
    it("applies medium size by default", () => {
      render(<RadioButtons name="size" options={mockOptions} />);
      const radioItem = screen.getByLabelText("Small").closest("label");
      expect(radioItem?.className).toContain("medium");
    });

    it("applies small size", () => {
      render(<RadioButtons name="size" options={mockOptions} size="small" />);
      const radioItem = screen.getByLabelText("Small").closest("label");
      expect(radioItem?.className).toContain("small");
    });

    it("applies large size", () => {
      render(<RadioButtons name="size" options={mockOptions} size="large" />);
      const radioItem = screen.getByLabelText("Small").closest("label");
      expect(radioItem?.className).toContain("large");
    });
  });

  describe("Disabled State", () => {
    it("disables all options when disabled prop is true", () => {
      render(<RadioButtons name="size" options={mockOptions} disabled />);

      const smallRadio = screen.getByLabelText("Small") as HTMLInputElement;
      const mediumRadio = screen.getByLabelText("Medium") as HTMLInputElement;

      expect(smallRadio.disabled).toBe(true);
      expect(mediumRadio.disabled).toBe(true);
    });

    it("disables specific options", () => {
      const optionsWithDisabled = [
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium", disabled: true },
        { value: "large", label: "Large" },
      ];

      render(<RadioButtons name="size" options={optionsWithDisabled} />);

      const mediumRadio = screen.getByLabelText("Medium") as HTMLInputElement;
      expect(mediumRadio.disabled).toBe(true);
    });

    it("does not call onChange when disabled", () => {
      const handleChange = jest.fn();
      render(<RadioButtons name="size" options={mockOptions} disabled onChange={handleChange} />);

      const mediumRadio = screen.getByLabelText("Medium");
      fireEvent.click(mediumRadio);

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe("Helper Text and Errors", () => {
    it("renders helper text", () => {
      render(<RadioButtons name="size" options={mockOptions} helperText="Choose your size" />);
      expect(screen.getByText("Choose your size")).toBeInTheDocument();
    });

    it("renders error text", () => {
      render(<RadioButtons name="size" options={mockOptions} error="Size is required" />);
      expect(screen.getByText("Size is required")).toBeInTheDocument();
    });

    it("hides helper text when error is shown", () => {
      render(
        <RadioButtons
          name="size"
          options={mockOptions}
          error="Size is required"
          helperText="Choose your size"
        />,
      );

      expect(screen.getByText("Size is required")).toBeInTheDocument();
      expect(screen.queryByText("Choose your size")).not.toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has radiogroup role", () => {
      render(<RadioButtons name="size" options={mockOptions} label="Size" />);
      expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    });

    it("associates label with radiogroup", () => {
      render(<RadioButtons name="size" options={mockOptions} label="Choose Size" />);
      const group = screen.getByRole("radiogroup");
      expect(group).toHaveAttribute("aria-label", "Choose Size");
    });

    it("each radio has unique id", () => {
      render(<RadioButtons name="size" options={mockOptions} />);

      const smallRadio = screen.getByLabelText("Small");
      const mediumRadio = screen.getByLabelText("Medium");

      expect(smallRadio.id).toBe("size-small");
      expect(mediumRadio.id).toBe("size-medium");
    });
  });
});
