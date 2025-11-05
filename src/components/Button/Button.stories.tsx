import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import {
  UserIcon,
  ThumbsUpIcon,
  TriangleExclamationIcon,
  CircleInfoIcon,
} from "../../icons";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "warning", "danger"],
    },
    appearance: {
      control: { type: "select" },
      options: ["filled", "outline", "text"],
      description: "Visual style of the button",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
      description: "Shows loading spinner and disables button",
    },
    loadingText: {
      control: { type: "text" },
      description: "Text to show when loading (overrides children)",
    },
    onClickAsync: {
      description: "Async function that automatically manages loading state",
    },
    iconOnly: {
      control: { type: "boolean" },
      description: "Visually hides text for icon-only buttons",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Makes button take full width of container",
    },
    darkMode: {
      control: { type: "boolean" },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success Button",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading Button",
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <UserIcon size="small" />,
    children: "Profile",
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <span>→</span>,
    children: "Next",
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    leftIcon: <span style={{ fontSize: "16px" }}>✕</span>,
    children: "Close",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Loading State
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Buttons show a spinner and become disabled during loading
        </Text>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary" loading>
          Primary
        </Button>
        <Button variant="secondary" loading>
          Secondary
        </Button>
        <Button variant="success" loading>
          Success
        </Button>
        <Button variant="warning" loading>
          Warning
        </Button>
        <Button variant="danger" loading>
          Danger
        </Button>
      </div>
    </div>
  ),
};

export const LoadingAppearances: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Loading with Different Appearances
        </Title>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Filled
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" appearance="filled" loading>
            Saving...
          </Button>
          <Button variant="success" appearance="filled" loading>
            Processing...
          </Button>
          <Button variant="danger" appearance="filled" loading>
            Deleting...
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Outline
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" appearance="outline" loading>
            Saving...
          </Button>
          <Button variant="success" appearance="outline" loading>
            Processing...
          </Button>
          <Button variant="danger" appearance="outline" loading>
            Deleting...
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Text
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" appearance="text" loading>
            Loading...
          </Button>
          <Button variant="success" appearance="text" loading>
            Refreshing...
          </Button>
          <Button variant="danger" appearance="text" loading>
            Removing...
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const LoadingSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Loading with Different Sizes
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Spinner size automatically adjusts to button size
        </Text>
      </div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Button size="small" loading>
          Small Loading
        </Button>
        <Button size="medium" loading>
          Medium Loading
        </Button>
        <Button size="large" loading>
          Large Loading
        </Button>
      </div>
    </div>
  ),
};

export const LoadingInteractive: Story = {
  render: () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <Title level={3} style={{ marginBottom: "10px" }}>
            Interactive Loading Demo
          </Title>
          <Text
            style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}
          >
            Click the button to trigger a 2-second loading state
          </Text>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" loading={isLoading} onClick={handleClick}>
            Save Changes
          </Button>
          <Button variant="success" loading={isLoading} onClick={handleClick}>
            Submit
          </Button>
          <Button
            variant="danger"
            appearance="outline"
            loading={isLoading}
            onClick={handleClick}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  },
};

export const LoadingTextOverride: Story = {
  render: () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <Title level={3} style={{ marginBottom: "10px" }}>
            Loading Text Override
          </Title>
          <Text
            style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}
          >
            Use loadingText prop to show different text during loading
          </Text>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button
            variant="primary"
            loading={isLoading}
            loadingText="Saving..."
            onClick={handleClick}
          >
            Save Changes
          </Button>
          <Button
            variant="success"
            loading={isLoading}
            loadingText="Processing..."
            onClick={handleClick}
          >
            Submit
          </Button>
          <Button
            variant="warning"
            loading={isLoading}
            loadingText="Uploading..."
            onClick={handleClick}
          >
            Upload File
          </Button>
          <Button
            variant="danger"
            appearance="outline"
            loading={isLoading}
            loadingText="Deleting..."
            onClick={handleClick}
          >
            Delete
          </Button>
        </div>
        <div
          style={{
            padding: "16px",
            backgroundColor: "#f7fafc",
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "12px",
            marginTop: "10px",
          }}
        >
          <div>{`<Button loading loadingText="Saving...">`}</div>
          <div>{`  Save Changes`}</div>
          <div>{`</Button>`}</div>
        </div>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Buttons with Icons
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Add icons before or after text for better visual context
        </Text>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Left Icons
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" leftIcon={<UserIcon size="small" />}>
            Profile
          </Button>
          <Button variant="success" leftIcon={<ThumbsUpIcon size="small" />}>
            Approve
          </Button>
          <Button
            variant="warning"
            leftIcon={<TriangleExclamationIcon size="small" />}
          >
            Warning
          </Button>
          <Button variant="danger" leftIcon={<span>✕</span>}>
            Delete
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Right Icons
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" rightIcon={<span>→</span>}>
            Next
          </Button>
          <Button variant="secondary" rightIcon={<span>↓</span>}>
            Download
          </Button>
          <Button variant="success" rightIcon={<span>✓</span>}>
            Confirm
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Both Icons
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button
            variant="primary"
            leftIcon={<span>←</span>}
            rightIcon={<span>→</span>}
          >
            Navigate
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const IconOnlyButtons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Icon-Only Buttons
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Text is visually hidden but available to screen readers
        </Text>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Different Sizes
        </Title>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Button
            size="small"
            iconOnly
            leftIcon={<UserIcon size="small" />}
            variant="primary"
          >
            User Profile
          </Button>
          <Button
            size="medium"
            iconOnly
            leftIcon={<CircleInfoIcon size="small" />}
            variant="secondary"
          >
            Information
          </Button>
          <Button
            size="large"
            iconOnly
            leftIcon={<ThumbsUpIcon size="small" />}
            variant="success"
          >
            Like
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Different Appearances
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button
            iconOnly
            leftIcon={<span>✕</span>}
            variant="danger"
            appearance="filled"
          >
            Close
          </Button>
          <Button
            iconOnly
            leftIcon={<span>✓</span>}
            variant="success"
            appearance="outline"
          >
            Accept
          </Button>
          <Button
            iconOnly
            leftIcon={<span>?</span>}
            variant="primary"
            appearance="text"
          >
            Help
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const FullWidthButtons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Full Width Buttons
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Perfect for forms and mobile layouts
        </Text>
      </div>

      <div style={{ maxWidth: "400px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Button variant="primary" fullWidth>
            Sign In
          </Button>
          <Button variant="secondary" fullWidth>
            Create Account
          </Button>
          <Button
            variant="success"
            fullWidth
            leftIcon={<ThumbsUpIcon size="small" />}
          >
            Submit Form
          </Button>
          <Button
            variant="danger"
            appearance="outline"
            fullWidth
            leftIcon={<span>✕</span>}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const IconsWithLoading: Story = {
  render: () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <Title level={3} style={{ marginBottom: "10px" }}>
            Icons with Loading State
          </Title>
          <Text
            style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}
          >
            Icons are hidden during loading and replaced with spinner
          </Text>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button
            variant="primary"
            leftIcon={<ThumbsUpIcon size="small" />}
            loading={isLoading}
            onClick={handleClick}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
          <Button
            variant="success"
            rightIcon={<span>→</span>}
            loading={isLoading}
            onClick={handleClick}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
          <Button
            iconOnly
            leftIcon={<span>✓</span>}
            variant="success"
            loading={isLoading}
            onClick={handleClick}
          >
            Approve
          </Button>
        </div>
      </div>
    );
  },
};

export const AsLink: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Polymorphic Button as Link
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Use the `as` prop to render buttons as links or other elements
        </Text>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Basic Links
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button as="a" href="#home" variant="primary">
            Home
          </Button>
          <Button as="a" href="#about" variant="secondary">
            About
          </Button>
          <Button
            as="a"
            href="/docs"
            variant="primary"
            appearance="outline"
            rightIcon={<span>→</span>}
          >
            Documentation
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          External Links
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button
            as="a"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            rightIcon={<span>↗</span>}
          >
            GitHub
          </Button>
          <Button
            as="a"
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="success"
            appearance="outline"
          >
            External Link
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Disabled Links
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button as="a" href="#disabled" variant="primary" disabled>
            Disabled Link
          </Button>
          <Button as="a" href="#loading" variant="success" loading>
            Loading Link
          </Button>
        </div>
      </div>

      <div
        style={{
          padding: "16px",
          backgroundColor: "#f7fafc",
          borderRadius: "8px",
          fontFamily: "monospace",
          fontSize: "12px",
          marginTop: "10px",
        }}
      >
        <div>{`import { Button } from "@markfoster314/marduk";`}</div>
        <br />
        <div>{`<Button as="a" href="/login">Login</Button>`}</div>
        <div>{`<Button as="a" href="https://github.com" target="_blank">`}</div>
        <div>{`  External Link`}</div>
        <div>{`</Button>`}</div>
      </div>
    </div>
  ),
};

export const PolymorphicExamples: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Polymorphic Component Examples
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          The Button component can render as any HTML element while maintaining
          styling and TypeScript support
        </Text>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          As Button (Default)
        </Title>
        <Button variant="primary" onClick={() => alert("Clicked!")}>
          Click Me
        </Button>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          As Link
        </Title>
        <Button as="a" href="#section" variant="primary">
          Navigate to Section
        </Button>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          As Div (Custom Component)
        </Title>
        <Button
          as="div"
          variant="secondary"
          onClick={() => alert("Div clicked!")}
        >
          Clickable Div
        </Button>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Link with All Features
        </Title>
        <Button
          as="a"
          href="/download"
          variant="success"
          fullWidth
          leftIcon={<span>↓</span>}
        >
          Download Now
        </Button>
      </div>
    </div>
  ),
};

export const AsyncOnClick: Story = {
  render: () => {
    const [result, setResult] = React.useState<string>("");

    const simulateApiCall = () => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          setResult("Data saved successfully!");
          resolve();
        }, 2000);
      });
    };

    const simulateFailure = () => {
      return new Promise<void>((_, reject) => {
        setTimeout(() => {
          reject(new Error("Network error"));
        }, 1500);
      });
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <div>
          <Title level={3} style={{ marginBottom: "10px" }}>
            Async onClick Helper
          </Title>
          <Text
            style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}
          >
            Use onClickAsync for automatic loading state management during async
            operations
          </Text>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div>
            <Button
              variant="primary"
              onClickAsync={simulateApiCall}
              loadingText="Saving..."
            >
              Save Data (Auto Loading)
            </Button>
          </div>

          <div>
            <Button
              variant="success"
              onClickAsync={simulateApiCall}
              loadingText="Processing..."
              leftIcon={<ThumbsUpIcon size="small" />}
            >
              Submit Form
            </Button>
          </div>

          <div>
            <Button
              variant="danger"
              appearance="outline"
              onClickAsync={simulateFailure}
              loadingText="Deleting..."
            >
              Delete (Will Fail)
            </Button>
          </div>

          {result && (
            <Text
              as="div"
              style={{
                padding: "12px",
                backgroundColor: "#d4edda",
                borderRadius: "8px",
                color: "#155724",
              }}
            >
              {result}
            </Text>
          )}
        </div>

        <div
          style={{
            padding: "16px",
            backgroundColor: "#f7fafc",
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "12px",
            marginTop: "10px",
          }}
        >
          <div>{`// No manual loading state needed!`}</div>
          <div>{`<Button`}</div>
          <div>{`  onClickAsync={async () => {`}</div>
          <div>{`    await saveToDatabase();`}</div>
          <div>{`  }}`}</div>
          <div>{`  loadingText="Saving..."`}</div>
          <div>{`>`}</div>
          <div>{`  Save`}</div>
          <div>{`</Button>`}</div>
        </div>
      </div>
    );
  },
};

export const DataAttributesForTesting: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Data Attributes for E2E Testing
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          All buttons include data attributes for easy selection in Playwright,
          Cypress, or other testing frameworks
        </Text>
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary" size="large">
          Primary Button
        </Button>
        <Button variant="success" appearance="outline" loading>
          Loading Button
        </Button>
        <Button variant="danger" disabled>
          Disabled Button
        </Button>
        <Button iconOnly leftIcon={<span>✕</span>}>
          Close
        </Button>
      </div>

      <div
        style={{
          padding: "16px",
          backgroundColor: "#f7fafc",
          borderRadius: "8px",
          fontFamily: "monospace",
          fontSize: "12px",
          marginTop: "15px",
        }}
      >
        <Text
          style={{
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Playwright/Cypress Examples:
        </Text>
        <br />
        <div>{`// Select by variant`}</div>
        <div>{`await page.click('[data-variant="primary"]');`}</div>
        <br />
        <div>{`// Select by appearance`}</div>
        <div>{`cy.get('[data-appearance="outline"]').click();`}</div>
        <br />
        <div>{`// Select by size`}</div>
        <div>{`await page.locator('[data-size="large"]').click();`}</div>
        <br />
        <div>{`// Find loading buttons`}</div>
        <div>{`cy.get('[data-loading="true"]').should('be.disabled');`}</div>
        <br />
        <div>{`// Find disabled buttons`}</div>
        <div>{`await page.locator('[data-disabled="true"]').count();`}</div>
        <br />
        <div>{`// Combine selectors`}</div>
        <div>{`cy.get('[data-variant="success"][data-appearance="filled"]');`}</div>
      </div>

      <div
        style={{
          padding: "16px",
          backgroundColor: "#fff3cd",
          borderRadius: "8px",
          marginTop: "15px",
        }}
      >
        <Text style={{ fontSize: "13px", color: "#856404" }}>
          <strong>Tip:</strong> Data attributes are always present and won't
          change, making your tests more stable than relying on classes or text
          content.
        </Text>
      </div>
    </div>
  ),
};

export const DarkMode: Story = {
  args: {
    darkMode: true,
    children: "Dark Mode Button",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DarkModeVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        padding: "20px",
        backgroundColor: "#1e1e1e",
      }}
    >
      <Button variant="primary" darkMode>
        Primary
      </Button>
      <Button variant="secondary" darkMode>
        Secondary
      </Button>
      <Button variant="success" darkMode>
        Success
      </Button>
      <Button variant="warning" darkMode>
        Warning
      </Button>
      <Button variant="danger" darkMode>
        Danger
      </Button>
    </div>
  ),
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DarkModeComparison: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Light Mode
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Dark Mode
        </Title>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            padding: "20px",
            backgroundColor: "#1e1e1e",
            borderRadius: "8px",
          }}
        >
          <Button variant="primary" darkMode>
            Primary
          </Button>
          <Button variant="secondary" darkMode>
            Secondary
          </Button>
          <Button variant="success" darkMode>
            Success
          </Button>
          <Button variant="warning" darkMode>
            Warning
          </Button>
          <Button variant="danger" darkMode>
            Danger
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const FilledAppearance: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Filled Buttons (Default)
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Solid background with white text
        </Text>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary" appearance="filled">
          Primary
        </Button>
        <Button variant="secondary" appearance="filled">
          Secondary
        </Button>
        <Button variant="success" appearance="filled">
          Success
        </Button>
        <Button variant="warning" appearance="filled">
          Warning
        </Button>
        <Button variant="danger" appearance="filled">
          Danger
        </Button>
      </div>
    </div>
  ),
};

export const OutlineAppearance: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Outline Buttons
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Transparent background with colored border and text
        </Text>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary" appearance="outline">
          Primary
        </Button>
        <Button variant="secondary" appearance="outline">
          Secondary
        </Button>
        <Button variant="success" appearance="outline">
          Success
        </Button>
        <Button variant="warning" appearance="outline">
          Warning
        </Button>
        <Button variant="danger" appearance="outline">
          Danger
        </Button>
      </div>
    </div>
  ),
};

export const TextAppearance: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Text Buttons
        </Title>
        <Text style={{ marginBottom: "15px", color: "#666", fontSize: "14px" }}>
          Minimal style with just colored text, subtle hover effect
        </Text>
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary" appearance="text">
          Primary
        </Button>
        <Button variant="secondary" appearance="text">
          Secondary
        </Button>
        <Button variant="success" appearance="text">
          Success
        </Button>
        <Button variant="warning" appearance="text">
          Warning
        </Button>
        <Button variant="danger" appearance="text">
          Danger
        </Button>
      </div>
    </div>
  ),
};

export const AllAppearances: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          All Appearances × All Variants
        </Title>
        <Text style={{ marginBottom: "20px", color: "#666", fontSize: "14px" }}>
          The new appearance prop lets you combine any variant color with any
          visual style!
        </Text>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "12px", fontSize: "14px", color: "#555" }}
          >
            Filled
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button variant="primary" appearance="filled">
              Primary
            </Button>
            <Button variant="secondary" appearance="filled">
              Secondary
            </Button>
            <Button variant="success" appearance="filled">
              Success
            </Button>
            <Button variant="warning" appearance="filled">
              Warning
            </Button>
            <Button variant="danger" appearance="filled">
              Danger
            </Button>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "12px", fontSize: "14px", color: "#555" }}
          >
            Outline
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button variant="primary" appearance="outline">
              Primary
            </Button>
            <Button variant="secondary" appearance="outline">
              Secondary
            </Button>
            <Button variant="success" appearance="outline">
              Success
            </Button>
            <Button variant="warning" appearance="outline">
              Warning
            </Button>
            <Button variant="danger" appearance="outline">
              Danger
            </Button>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "12px", fontSize: "14px", color: "#555" }}
          >
            Text
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button variant="primary" appearance="text">
              Primary
            </Button>
            <Button variant="secondary" appearance="text">
              Secondary
            </Button>
            <Button variant="success" appearance="text">
              Success
            </Button>
            <Button variant="warning" appearance="text">
              Warning
            </Button>
            <Button variant="danger" appearance="text">
              Danger
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AppearancesWithSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Appearances with Different Sizes
        </Title>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Small Buttons
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button size="small" variant="success" appearance="filled">
            Filled
          </Button>
          <Button size="small" variant="success" appearance="outline">
            Outline
          </Button>
          <Button size="small" variant="success" appearance="text">
            Text
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Medium Buttons
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button size="medium" variant="primary" appearance="filled">
            Filled
          </Button>
          <Button size="medium" variant="primary" appearance="outline">
            Outline
          </Button>
          <Button size="medium" variant="primary" appearance="text">
            Text
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
        >
          Large Buttons
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button size="large" variant="danger" appearance="filled">
            Filled
          </Button>
          <Button size="large" variant="danger" appearance="outline">
            Outline
          </Button>
          <Button size="large" variant="danger" appearance="text">
            Text
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const DarkModeAppearances: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        padding: "20px",
        backgroundColor: "#1e1e1e",
        borderRadius: "8px",
      }}
    >
      <div>
        <Title level={3} style={{ marginBottom: "10px" }} darkMode>
          Dark Mode Appearances
        </Title>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px" }}
          darkMode
          variant="secondary"
        >
          Filled
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" appearance="filled" darkMode>
            Primary
          </Button>
          <Button variant="secondary" appearance="filled" darkMode>
            Secondary
          </Button>
          <Button variant="success" appearance="filled" darkMode>
            Success
          </Button>
          <Button variant="danger" appearance="filled" darkMode>
            Danger
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px" }}
          darkMode
          variant="secondary"
        >
          Outline
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" appearance="outline" darkMode>
            Primary
          </Button>
          <Button variant="secondary" appearance="outline" darkMode>
            Secondary
          </Button>
          <Button variant="success" appearance="outline" darkMode>
            Success
          </Button>
          <Button variant="danger" appearance="outline" darkMode>
            Danger
          </Button>
        </div>
      </div>

      <div>
        <Title
          level={4}
          style={{ marginBottom: "10px", fontSize: "14px" }}
          darkMode
          variant="secondary"
        >
          Text
        </Title>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" appearance="text" darkMode>
            Primary
          </Button>
          <Button variant="secondary" appearance="text" darkMode>
            Secondary
          </Button>
          <Button variant="success" appearance="text" darkMode>
            Success
          </Button>
          <Button variant="danger" appearance="text" darkMode>
            Danger
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <Title level={3} style={{ marginBottom: "10px" }}>
          Responsive Buttons (resize browser to see changes)
        </Title>
        <Text style={{ marginBottom: "20px", color: "#666", fontSize: "14px" }}>
          Buttons automatically adjust their size based on screen width:
          <br />
          Mobile (default) → Tablet (768px+) → Desktop (1024px+)
        </Text>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Small Buttons
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button size="small" variant="primary">
              Small Primary
            </Button>
            <Button size="small" variant="success" appearance="outline">
              Small Outline
            </Button>
            <Button size="small" variant="danger" appearance="text">
              Small Text
            </Button>
          </div>
        </div>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Medium Buttons
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button size="medium" variant="primary">
              Medium Primary
            </Button>
            <Button size="medium" variant="success" appearance="outline">
              Medium Outline
            </Button>
            <Button size="medium" variant="danger" appearance="text">
              Medium Text
            </Button>
          </div>
        </div>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Large Buttons
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button size="large" variant="primary">
              Large Primary
            </Button>
            <Button size="large" variant="success" appearance="outline">
              Large Outline
            </Button>
            <Button size="large" variant="danger" appearance="text">
              Large Text
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CSSVariableCustomization: Story = {
  render: () => (
    <div>
      <Title level={3} style={{ marginBottom: "20px" }}>
        CSS Variable Customization
      </Title>
      <Text
        as="p"
        style={{ marginBottom: "30px", color: "#666", maxWidth: "800px" }}
      >
        The Button component exposes CSS variables for advanced theming.
        Override these variables inline or in your global styles.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {/* Border Radius */}
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Custom Border Radius (--button-border-radius)
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button variant="primary">Default Radius</Button>
            <Button
              variant="primary"
              style={{ "--button-border-radius": "4px" } as React.CSSProperties}
            >
              Small Radius (4px)
            </Button>
            <Button
              variant="primary"
              style={
                { "--button-border-radius": "999px" } as React.CSSProperties
              }
            >
              Pill Button (999px)
            </Button>
            <Button
              variant="primary"
              style={{ "--button-border-radius": "0" } as React.CSSProperties}
            >
              No Radius
            </Button>
          </div>
        </div>

        {/* Font Weight */}
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Custom Font Weight (--button-font-weight)
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button variant="primary">Default Weight (600)</Button>
            <Button
              variant="primary"
              style={{ "--button-font-weight": "400" } as React.CSSProperties}
            >
              Normal Weight (400)
            </Button>
            <Button
              variant="primary"
              style={{ "--button-font-weight": "700" } as React.CSSProperties}
            >
              Bold Weight (700)
            </Button>
          </div>
        </div>

        {/* Focus Outline */}
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Custom Focus Outline (--button-focus-outline-*)
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button variant="primary">Default Focus</Button>
            <Button
              variant="primary"
              style={
                {
                  "--button-focus-outline-color": "#ff6b00",
                  "--button-focus-outline-width": "3px",
                } as React.CSSProperties
              }
            >
              Orange Focus (3px)
            </Button>
            <Button
              variant="success"
              style={
                {
                  "--button-focus-outline-color": "#10b981",
                  "--button-focus-outline-offset": "4px",
                } as React.CSSProperties
              }
            >
              Green Focus (offset 4px)
            </Button>
          </div>
        </div>

        {/* Active Scale */}
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Custom Active Scale (--button-active-scale)
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button variant="primary">Default Press (0.97)</Button>
            <Button
              variant="primary"
              style={{ "--button-active-scale": "0.95" } as React.CSSProperties}
            >
              Smaller Press (0.95)
            </Button>
            <Button
              variant="primary"
              style={{ "--button-active-scale": "1" } as React.CSSProperties}
            >
              No Press Effect (1)
            </Button>
          </div>
        </div>

        {/* Icon Gap */}
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Custom Icon Gap (--button-icon-gap)
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button
              variant="primary"
              leftIcon={<UserIcon width={16} height={16} />}
            >
              Default Gap
            </Button>
            <Button
              variant="primary"
              leftIcon={<UserIcon width={16} height={16} />}
              style={{ "--button-icon-gap": "4px" } as React.CSSProperties}
            >
              Tight Gap (4px)
            </Button>
            <Button
              variant="primary"
              leftIcon={<UserIcon width={16} height={16} />}
              style={{ "--button-icon-gap": "16px" } as React.CSSProperties}
            >
              Wide Gap (16px)
            </Button>
          </div>
        </div>

        {/* Disabled State */}
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Custom Disabled State (--button-disabled-*)
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button variant="primary" disabled>
              Default Disabled
            </Button>
            <Button
              variant="primary"
              disabled
              style={
                {
                  "--button-disabled-opacity": "0.7",
                  "--button-disabled-filter": "grayscale(0)",
                } as React.CSSProperties
              }
            >
              Custom Disabled (no grayscale)
            </Button>
            <Button
              variant="primary"
              disabled
              style={
                {
                  "--button-disabled-opacity": "0.3",
                  "--button-disabled-filter": "grayscale(1)",
                } as React.CSSProperties
              }
            >
              Full Grayscale
            </Button>
          </div>
        </div>

        {/* Combined Example */}
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Combined Customization
          </Title>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button
              variant="primary"
              leftIcon={<UserIcon width={16} height={16} />}
              style={
                {
                  "--button-border-radius": "20px",
                  "--button-font-weight": "700",
                  "--button-focus-outline-color": "#8b5cf6",
                  "--button-focus-outline-width": "3px",
                  "--button-active-scale": "0.95",
                  "--button-icon-gap": "12px",
                } as React.CSSProperties
              }
            >
              Fully Custom Button
            </Button>
          </div>
        </div>

        {/* Code Example */}
        <div style={{ marginTop: "20px" }}>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Usage Example
          </Title>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "8px",
              fontSize: "13px",
              overflow: "auto",
            }}
          >
            {`// Inline style override
<Button
  variant="primary"
  style={{
    "--button-border-radius": "999px",
    "--button-active-scale": "1"
  } as React.CSSProperties}
>
  Pill Button
</Button>

// Global CSS override
.custom-button {
  --button-border-radius: 20px;
  --button-font-weight: 700;
  --button-focus-outline-color: #8b5cf6;
}`}
          </pre>
        </div>
      </div>
    </div>
  ),
};
