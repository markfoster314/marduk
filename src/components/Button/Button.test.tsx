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
      const content = container.querySelector(
        ".marduk-button-content--loading"
      );
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
      const variants: Array<
        "primary" | "secondary" | "success" | "warning" | "danger"
      > = ["primary", "secondary", "success", "warning", "danger"];

      variants.forEach((variant) => {
        const { container } = render(
          <Button variant={variant} loading>
            Loading
          </Button>
        );
        expect(
          container.querySelector(".marduk-button-spinner")
        ).toBeInTheDocument();
      });
    });

    it("shows loadingText when provided", () => {
      render(
        <Button loading loadingText="Saving...">
          Save
        </Button>
      );
      expect(screen.getByText("Saving...")).toBeInTheDocument();
      expect(screen.queryByText("Save")).not.toBeInTheDocument();
    });

    it("shows children when loading but no loadingText provided", () => {
      render(<Button loading>Save</Button>);
      expect(screen.getByText("Save")).toBeInTheDocument();
    });

    it("shows children when not loading", () => {
      render(
        <Button loading={false} loadingText="Saving...">
          Save
        </Button>
      );
      expect(screen.getByText("Save")).toBeInTheDocument();
      expect(screen.queryByText("Saving...")).not.toBeInTheDocument();
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

  describe("Icon Support", () => {
    it("renders without icons by default", () => {
      const { container } = render(<Button>No Icons</Button>);
      expect(
        container.querySelector(".marduk-button-icon-left")
      ).not.toBeInTheDocument();
      expect(
        container.querySelector(".marduk-button-icon-right")
      ).not.toBeInTheDocument();
    });

    it("renders left icon", () => {
      const { container } = render(
        <Button leftIcon={<span data-testid="left-icon">←</span>}>
          Left Icon
        </Button>
      );
      expect(
        container.querySelector(".marduk-button-icon-left")
      ).toBeInTheDocument();
      expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    });

    it("renders right icon", () => {
      const { container } = render(
        <Button rightIcon={<span data-testid="right-icon">→</span>}>
          Right Icon
        </Button>
      );
      expect(
        container.querySelector(".marduk-button-icon-right")
      ).toBeInTheDocument();
      expect(screen.getByTestId("right-icon")).toBeInTheDocument();
    });

    it("renders both icons", () => {
      render(
        <Button
          leftIcon={<span data-testid="left-icon">←</span>}
          rightIcon={<span data-testid="right-icon">→</span>}
        >
          Both Icons
        </Button>
      );
      expect(screen.getByTestId("left-icon")).toBeInTheDocument();
      expect(screen.getByTestId("right-icon")).toBeInTheDocument();
    });

    it("applies icon-only class", () => {
      render(<Button iconOnly>X</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--icon-only");
    });

    it("hides text visually for icon-only buttons", () => {
      const { container } = render(
        <Button iconOnly leftIcon={<span>×</span>}>
          Close
        </Button>
      );
      const text = container.querySelector(".marduk-button-text--icon-only");
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent("Close");
    });
  });

  describe("Full Width", () => {
    it("is not full width by default", () => {
      render(<Button>Normal</Button>);
      const button = screen.getByRole("button");
      expect(button).not.toHaveClass("marduk-button--full-width");
    });

    it("applies full width class", () => {
      render(<Button fullWidth>Full Width</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("marduk-button--full-width");
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

    it("maintains text for screen readers in icon-only buttons", () => {
      const { container } = render(
        <Button iconOnly leftIcon={<span>×</span>}>
          Close Dialog
        </Button>
      );
      expect(container).toHaveTextContent("Close Dialog");
    });
  });

  describe("Data Attributes for Testing", () => {
    it("applies data-variant attribute", () => {
      render(<Button variant="success">Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-variant", "success");
    });

    it("applies data-appearance attribute", () => {
      render(<Button appearance="outline">Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-appearance", "outline");
    });

    it("applies data-size attribute", () => {
      render(<Button size="large">Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-size", "large");
    });

    it("applies data-loading when loading", () => {
      render(<Button loading>Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-loading", "true");
    });

    it("applies data-disabled when disabled", () => {
      render(<Button disabled>Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-disabled", "true");
    });

    it("applies data-icon-only when iconOnly", () => {
      render(
        <Button iconOnly leftIcon={<span>X</span>}>
          Test
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-icon-only", "true");
    });

    it("applies data-full-width when fullWidth", () => {
      render(<Button fullWidth>Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-full-width", "true");
    });

    it("does not apply conditional data attributes when false", () => {
      render(<Button>Test</Button>);
      const button = screen.getByRole("button");
      expect(button).not.toHaveAttribute("data-loading");
      expect(button).not.toHaveAttribute("data-disabled");
      expect(button).not.toHaveAttribute("data-icon-only");
      expect(button).not.toHaveAttribute("data-full-width");
    });
  });

  describe("Async onClick Helper", () => {
    it("handles async onClick successfully", async () => {
      const mockAsync = jest.fn().mockResolvedValue(undefined);
      render(<Button onClickAsync={mockAsync}>Async Button</Button>);

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(mockAsync).toHaveBeenCalledTimes(1);
    });

    it("sets loading state during async operation", async () => {
      let resolvePromise: () => void;
      const asyncFunction = jest.fn(
        () =>
          new Promise<void>((resolve) => {
            resolvePromise = resolve;
          })
      );

      render(<Button onClickAsync={asyncFunction}>Async Button</Button>);

      const button = screen.getByRole("button");

      expect(button).not.toHaveAttribute("data-loading");

      fireEvent.click(button);

      expect(button).toHaveAttribute("data-loading", "true");
      expect(button).toBeDisabled();

      resolvePromise!();

      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    it("calls both onClickAsync and onClick", async () => {
      const mockAsync = jest.fn().mockResolvedValue(undefined);
      const mockClick = jest.fn();

      render(
        <Button onClickAsync={mockAsync} onClick={mockClick}>
          Both Handlers
        </Button>
      );

      fireEvent.click(screen.getByRole("button"));

      expect(mockAsync).toHaveBeenCalledTimes(1);
      expect(mockClick).toHaveBeenCalledTimes(1);
    });

    it("handles async errors gracefully", async () => {
      const consoleSpy = jest.spyOn(console, "error").mockImplementation();
      const mockAsync = jest.fn().mockRejectedValue(new Error("Async error"));

      render(<Button onClickAsync={mockAsync}>Error Button</Button>);

      fireEvent.click(screen.getByRole("button"));

      await new Promise((resolve) => setTimeout(resolve, 10));

      expect(consoleSpy).toHaveBeenCalledWith(
        "Error when calling button's onClickAsync method:",
        expect.any(Error)
      );

      consoleSpy.mockRestore();
    });

    it("clears loading state after async completion", async () => {
      const mockAsync = jest.fn().mockResolvedValue(undefined);

      render(<Button onClickAsync={mockAsync}>Async Button</Button>);

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(button).toHaveAttribute("data-loading", "true");

      await new Promise((resolve) => setTimeout(resolve, 10));

      expect(button).not.toHaveAttribute("data-loading");
    });

    it("works with loadingText", async () => {
      let resolvePromise: () => void;
      const asyncFunction = jest.fn(
        () =>
          new Promise<void>((resolve) => {
            resolvePromise = resolve;
          })
      );

      render(
        <Button onClickAsync={asyncFunction} loadingText="Processing...">
          Submit
        </Button>
      );

      expect(screen.getByText("Submit")).toBeInTheDocument();

      fireEvent.click(screen.getByRole("button"));

      expect(screen.getByText("Processing...")).toBeInTheDocument();
      expect(screen.queryByText("Submit")).not.toBeInTheDocument();

      resolvePromise!();
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    it("respects external loading prop", () => {
      const mockAsync = jest.fn().mockResolvedValue(undefined);

      render(
        <Button onClickAsync={mockAsync} loading>
          Async Button
        </Button>
      );

      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute("data-loading", "true");
    });
  });

  describe("Polymorphic Component (as prop)", () => {
    it("renders as button by default", () => {
      const { container } = render(<Button>Default</Button>);
      expect(container.querySelector("button")).toBeInTheDocument();
    });

    it("renders as anchor when as='a'", () => {
      const { container } = render(
        <Button as="a" href="/test">
          Link
        </Button>
      );
      expect(container.querySelector("a")).toBeInTheDocument();
      expect(container.querySelector("a")).toHaveAttribute("href", "/test");
    });

    it("renders as div when as='div'", () => {
      const { container } = render(<Button as="div">Div Button</Button>);
      expect(container.querySelector("div.marduk-button")).toBeInTheDocument();
    });

    it("applies correct props for anchor element", () => {
      const { container } = render(
        <Button as="a" href="/page" target="_blank" rel="noopener">
          External Link
        </Button>
      );
      const link = container.querySelector("a");
      expect(link).toHaveAttribute("href", "/page");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener");
    });

    it("does not apply button-specific props to non-button elements", () => {
      const { container } = render(
        <Button as="a" href="/test">
          Link
        </Button>
      );
      const link = container.querySelector("a");
      expect(link).not.toHaveAttribute("type");
    });

    it("applies aria-disabled for disabled links", () => {
      const { container } = render(
        <Button as="a" href="/test" disabled>
          Disabled Link
        </Button>
      );
      const link = container.querySelector("a");
      expect(link).toHaveAttribute("aria-disabled", "true");
    });

    it("maintains all button classes with as prop", () => {
      const { container } = render(
        <Button as="a" variant="success" size="large">
          Styled Link
        </Button>
      );
      const link = container.querySelector("a");
      expect(link).toHaveClass("marduk-button");
      expect(link).toHaveClass("marduk-button--success");
      expect(link).toHaveClass("marduk-button--large");
    });

    it("works with icons when rendered as link", () => {
      const { container } = render(
        <Button as="a" href="/profile" leftIcon={<span>→</span>}>
          Profile
        </Button>
      );
      expect(
        container.querySelector(".marduk-button-icon-left")
      ).toBeInTheDocument();
    });
  });
});
