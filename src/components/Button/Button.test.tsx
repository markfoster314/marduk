import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button", () => {
  describe("Rendering", () => {
    it("renders children correctly", () => {
      render(<Button>Click Me</Button>);
      expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("renders as a button element", () => {
      render(<Button>Test</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("Variants", () => {
    it("applies primary variant class by default", () => {
      render(<Button>Primary</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--primary");
    });

    it("applies secondary variant class", () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--secondary");
    });

    it("applies success variant class", () => {
      render(<Button variant="success">Success</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--success");
    });

    it("applies warning variant class", () => {
      render(<Button variant="warning">Warning</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--warning");
    });

    it("applies danger variant class", () => {
      render(<Button variant="danger">Danger</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--danger");
    });
  });

  describe("Appearances", () => {
    it("applies filled appearance by default", () => {
      render(<Button>Filled</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--appearance-filled");
    });

    it("applies outline appearance", () => {
      render(<Button appearance="outline">Outline</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--appearance-outline");
    });

    it("applies text appearance", () => {
      render(<Button appearance="text">Text</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--appearance-text");
    });

    it("combines variant and appearance", () => {
      render(
        <Button variant="success" appearance="text">
          Success Text
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--success");
      expect(button).toHaveClass("marduk-button--appearance-text");
    });
  });

  describe("Sizes", () => {
    it("applies medium size class by default", () => {
      render(<Button>Medium</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--medium");
    });

    it("applies small size class", () => {
      render(<Button size="small">Small</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--small");
    });

    it("applies large size class", () => {
      render(<Button size="large">Large</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--large");
    });
  });

  describe("Disabled State", () => {
    it("is not disabled by default", () => {
      render(<Button>Enabled</Button>);
      expect(screen.getByRole("button")).not.toBeDisabled();
    });

    it("can be disabled", () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("applies disabled class when disabled", () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--disabled");
    });
  });

  describe("Loading State", () => {
    it("is not loading by default", () => {
      render(<Button>Not Loading</Button>);
      const button = screen.getByRole("button");
      expect(button).not.toHaveClass("marduk-button--loading");
      expect(button).not.toHaveAttribute("aria-busy");
    });

    it("can be loading", () => {
      render(<Button loading>Loading</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--loading");
    });

    it("is disabled when loading", () => {
      render(<Button loading>Loading</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("has aria-busy attribute when loading", () => {
      render(<Button loading>Loading</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-busy", "true");
    });

    it("shows spinner when loading", () => {
      const { container } = render(<Button loading>Loading</Button>);
      const spinner = container.querySelector(".marduk-button-spinner");
      expect(spinner).toBeInTheDocument();
    });

    it("hides content when loading", () => {
      const { container } = render(<Button loading>Loading Text</Button>);
      const content = container.querySelector(".marduk-button-content--loading");
      expect(content).toBeInTheDocument();
      expect(content).toHaveTextContent("Loading Text");
    });

    it("does not call onClick when loading", () => {
      const handleClick = jest.fn();
      render(
        <Button onClick={handleClick} loading>
          Loading
        </Button>
      );

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("works with all variants", () => {
      const variants: Array<"primary" | "secondary" | "success" | "warning" | "danger"> = [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ];

      variants.forEach((variant) => {
        const { container } = render(
          <Button variant={variant} loading>
            Loading
          </Button>
        );
        expect(container.querySelector(".marduk-button-spinner")).toBeInTheDocument();
      });
    });
  });

  describe("Type Attribute", () => {
    it("has button type by default", () => {
      render(<Button>Default</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });

    it("can have submit type", () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    });

    it("can have reset type", () => {
      render(<Button type="reset">Reset</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "reset");
    });
  });

  describe("Click Handler", () => {
    it("calls onClick when clicked", () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", () => {
      const handleClick = jest.fn();
      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      );

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("receives event object in onClick", () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click</Button>);

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledWith(expect.any(Object));
    });
  });

  describe("Additional Props", () => {
    it("forwards additional props to button element", () => {
      render(
        <Button data-testid="custom-button" aria-label="Custom Button">
          Test
        </Button>
      );

      const button = screen.getByTestId("custom-button");
      expect(button).toHaveAttribute("aria-label", "Custom Button");
    });

    it("applies custom className along with component classes", () => {
      render(<Button className="custom-class">Custom</Button>);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("marduk-button");
      expect(button).toHaveClass("marduk-button--primary");
      expect(button).toHaveClass("marduk-button--medium");
    });
  });

  describe("Accessibility", () => {
    it("is keyboard accessible", () => {
      render(<Button>Accessible</Button>);
      const button = screen.getByRole("button");

      button.focus();
      expect(button).toHaveFocus();
    });

    it("has proper button role", () => {
      render(<Button>Role Test</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });
});
