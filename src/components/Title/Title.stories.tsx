import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";
import { Text } from "../Text/Text";
import React from "react";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "div", "span", "p"],
      description: "Render as different element (polymorphic)",
    },
    level: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
      description: "Heading level (h1-h6)",
    },
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
      description: "Color variant",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Text alignment",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size override (optional)",
    },
    weight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold", "bold"],
      description: "Font weight override (optional)",
    },
    darkMode: {
      control: { type: "boolean" },
      description: "Enable dark mode styling",
    },
    color: {
      control: { type: "color" },
      description: "Custom title color (overrides variant color)",
    },
    truncate: {
      control: { type: "boolean" },
      description: "Single-line truncation with ellipsis",
    },
    clamp: {
      control: { type: "boolean" },
      description: "Multi-line truncation with line-clamp",
    },
    maxLines: {
      control: { type: "number" },
      description: "Number of lines to show when clamping (default: 2)",
    },
    spacing: {
      control: { type: "select" },
      options: ["tight", "normal", "wide"],
      description: "Letter spacing preset",
    },
    underlined: {
      control: { type: "boolean" },
      description: "Add underline decoration",
    },
    underlineStyle: {
      control: { type: "select" },
      options: ["solid", "double", "dotted", "dashed", "wavy"],
      description: "Underline style (requires underlined=true)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: "This is a title",
    level: 1,
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Title level={1}>Heading Level 1</Title>
      <Title level={2}>Heading Level 2</Title>
      <Title level={3}>Heading Level 3</Title>
      <Title level={4}>Heading Level 4</Title>
      <Title level={5}>Heading Level 5</Title>
      <Title level={6}>Heading Level 6</Title>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Title level={2} variant="default">
        Default Variant
      </Title>
      <Title level={2} variant="primary">
        Primary Variant
      </Title>
      <Title level={2} variant="secondary">
        Secondary Variant
      </Title>
      <Title level={2} variant="success">
        Success Variant
      </Title>
      <Title level={2} variant="warning">
        Warning Variant
      </Title>
      <Title level={2} variant="danger">
        Danger Variant
      </Title>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "500px",
      }}
    >
      <Title level={3} align="left">
        Left Aligned Title
      </Title>
      <Title level={3} align="center">
        Center Aligned Title
      </Title>
      <Title level={3} align="right">
        Right Aligned Title
      </Title>
    </div>
  ),
};

export const CustomSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Title level={3} size="small">
        Small Size Override
      </Title>
      <Title level={3} size="medium">
        Medium Size Override
      </Title>
      <Title level={3} size="large">
        Large Size Override
      </Title>
    </div>
  ),
};

export const CustomWeights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Title level={3} weight="normal">
        Normal Weight
      </Title>
      <Title level={3} weight="medium">
        Medium Weight
      </Title>
      <Title level={3} weight="semibold">
        Semibold Weight
      </Title>
      <Title level={3} weight="bold">
        Bold Weight
      </Title>
    </div>
  ),
};

export const PrimaryHeading: Story = {
  args: {
    children: "Welcome to Marduk Components",
    level: 1,
    variant: "primary",
    align: "center",
  },
};

export const SectionHeading: Story = {
  args: {
    children: "Getting Started",
    level: 2,
    variant: "default",
  },
};

export const SubHeading: Story = {
  args: {
    children: "Installation Instructions",
    level: 3,
    variant: "secondary",
  },
};

export const ErrorHeading: Story = {
  args: {
    children: "Error: Something went wrong",
    level: 4,
    variant: "danger",
  },
};

export const SuccessHeading: Story = {
  args: {
    children: "Success! Your changes have been saved",
    level: 4,
    variant: "success",
  },
};

export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ width: "100%", padding: "20px" }}>
      <div style={{ marginBottom: "40px" }}>
        <Text
          style={{ fontSize: "14px", color: "#718096", marginBottom: "20px" }}
        >
          Resize your browser window to see font sizes, margins, and decorations
          adapt automatically. Titles scale for optimal readability at 768px and
          1024px breakpoints.
        </Text>
        <div
          style={{
            padding: "12px",
            background: "#e3f2fd",
            borderRadius: "6px",
            marginBottom: "10px",
          }}
        >
          <Text style={{ fontSize: "13px", color: "#0d47a1", margin: 0 }}>
            <strong>Responsive Features:</strong> Font sizes, margins, underline
            thickness, and high contrast borders all adapt to screen size.
          </Text>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Title level={1} variant="primary">
            Main Page Heading
          </Title>
          <Text style={{ fontSize: "14px", color: "#718096" }}>
            Mobile: 1.875rem (30px) → Tablet: 2.25rem (36px) → Desktop: 2.5rem
            (40px)
          </Text>
        </div>
        <div>
          <Title level={2}>Section Title</Title>
          <Text style={{ fontSize: "14px", color: "#718096" }}>
            Mobile: 1.5rem (24px) → Tablet: 1.875rem (30px) → Desktop: 2rem
            (32px)
          </Text>
        </div>
        <div>
          <Title level={3} variant="secondary">
            Subsection Heading
          </Title>
          <Text style={{ fontSize: "14px", color: "#718096" }}>
            Mobile: 1.25rem (20px) → Tablet: 1.5rem (24px) → Desktop: 1.75rem
            (28px)
          </Text>
        </div>
        <div>
          <Title level={4}>Article Title</Title>
          <Text style={{ fontSize: "14px", color: "#718096" }}>
            Mobile: 1.125rem (18px) → Tablet: 1.25rem (20px) → Desktop: 1.5rem
            (24px)
          </Text>
        </div>

        <div
          style={{
            marginTop: "30px",
            paddingTop: "30px",
            borderTop: "2px solid #e2e8f0",
          }}
        >
          <Title level={3} style={{ marginBottom: "15px" }}>
            Responsive Decorations
          </Title>
          <Text
            style={{ fontSize: "14px", color: "#718096", marginBottom: "20px" }}
          >
            Underline thickness and offset also scale responsively:
          </Text>
          <div>
            <Title
              level={2}
              underlined
              underlineStyle="solid"
              variant="primary"
            >
              Responsive Underline
            </Title>
            <Text style={{ fontSize: "14px", color: "#718096" }}>
              Mobile: 1.5px/3px offset → Tablet: 2px/4px → Desktop: 2.5px/5px
            </Text>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Title
              level={2}
              underlined
              underlineStyle="double"
              variant="success"
            >
              Responsive Double Underline
            </Title>
            <Text style={{ fontSize: "14px", color: "#718096" }}>
              Mobile: 2.5px → Tablet: 3px → Desktop: 3.5px
            </Text>
          </div>
        </div>

        <div
          style={{
            marginTop: "30px",
            paddingTop: "30px",
            borderTop: "2px solid #e2e8f0",
          }}
        >
          <Title level={3} style={{ marginBottom: "15px" }}>
            Breakpoint Reference
          </Title>
          <div
            style={{
              padding: "15px",
              background: "#f7fafc",
              borderRadius: "8px",
            }}
          >
            <ul
              style={{
                fontSize: "14px",
                color: "#4a5568",
                margin: 0,
                paddingLeft: "20px",
              }}
            >
              <li>
                <strong>Mobile:</strong> Default (0-767px)
              </li>
              <li>
                <strong>Tablet:</strong> 768px and up
              </li>
              <li>
                <strong>Desktop:</strong> 1024px and up
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
/* TODO: update this story above to use our internal ul li once its built */

export const DarkMode: Story = {
  render: () => (
    <div
      style={{ background: "#1e1e1e", padding: "40px", borderRadius: "8px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Title level={1} darkMode>
          Dark Mode Heading
        </Title>
        <Title level={2} darkMode variant="primary">
          Primary in Dark Mode
        </Title>
        <Title level={3} darkMode variant="success">
          Success in Dark Mode
        </Title>
        <Title level={4} darkMode variant="warning">
          Warning in Dark Mode
        </Title>
        <Title level={5} darkMode variant="danger">
          Danger in Dark Mode
        </Title>
        <Title level={6} darkMode variant="secondary">
          Secondary in Dark Mode
        </Title>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const DarkModeComparison: Story = {
  render: () => (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
    >
      <div
        style={{ padding: "30px", background: "#ffffff", borderRadius: "8px" }}
      >
        <Title level={2} style={{ marginBottom: "20px" }}>
          Light Mode
        </Title>
        <Title level={3} variant="default">
          Default Text
        </Title>
        <Title level={3} variant="primary">
          Primary Text
        </Title>
        <Title level={3} variant="success">
          Success Text
        </Title>
        <Title level={3} variant="warning">
          Warning Text
        </Title>
        <Title level={3} variant="danger">
          Danger Text
        </Title>
      </div>
      <div
        style={{ padding: "30px", background: "#1e1e1e", borderRadius: "8px" }}
      >
        <Title level={2} darkMode style={{ marginBottom: "20px" }}>
          Dark Mode
        </Title>
        <Title level={3} darkMode variant="default">
          Default Text
        </Title>
        <Title level={3} darkMode variant="primary">
          Primary Text
        </Title>
        <Title level={3} darkMode variant="success">
          Success Text
        </Title>
        <Title level={3} darkMode variant="warning">
          Warning Text
        </Title>
        <Title level={3} darkMode variant="danger">
          Danger Text
        </Title>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export const CustomColor: Story = {
  args: {
    children: "Custom colored title",
    level: 2,
    color: "#ff6b6b",
    weight: "bold",
  },
};

export const CustomColorShowcase: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Title level={2} color="#e74c3c" weight="bold">
        Custom Red (#e74c3c)
      </Title>
      <Title level={2} color="#3498db" weight="bold">
        Custom Blue (#3498db)
      </Title>
      <Title level={2} color="#2ecc71" weight="bold">
        Custom Green (#2ecc71)
      </Title>
      <Title level={2} color="#f39c12" weight="bold">
        Custom Orange (#f39c12)
      </Title>
      <Title level={2} color="#9b59b6" weight="bold">
        Custom Purple (#9b59b6)
      </Title>
      <Title level={2} color="var(--marduk-color-primary-500)" weight="bold">
        CSS Variable (--marduk-color-primary-500)
      </Title>
      <Title level={3} variant="primary" color="#e74c3c">
        Color prop overrides variant color
      </Title>
    </div>
  ),
};

export const CustomColorWithLevels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Title level={1} color="#e74c3c">
        H1 with Custom Color
      </Title>
      <Title level={2} color="#3498db">
        H2 with Custom Color
      </Title>
      <Title level={3} color="#2ecc71">
        H3 with Custom Color
      </Title>
      <Title level={4} color="#f39c12">
        H4 with Custom Color
      </Title>
      <Title level={5} color="#9b59b6">
        H5 with Custom Color
      </Title>
      <Title level={6} color="#e91e63">
        H6 with Custom Color
      </Title>
    </div>
  ),
};

export const CSSVariableCustomization: Story = {
  render: () => (
    <div>
      <Title level={3} style={{ marginBottom: "20px" }}>
        CSS Variable Customization
      </Title>
      <Text style={{ marginBottom: "30px", color: "#666", maxWidth: "800px" }}>
        The Title component exposes CSS variables for advanced theming. Override
        these variables inline or in your global styles.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Custom Font Size (--title-font-size)
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Title level={2}>Default Size</Title>
            <Title
              level={2}
              style={{ "--title-font-size": "3rem" } as React.CSSProperties}
            >
              Custom Size (3rem)
            </Title>
            <Title
              level={2}
              style={{ "--title-font-size": "1.5rem" } as React.CSSProperties}
            >
              Custom Size (1.5rem)
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Custom Font Weight (--title-font-weight)
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Title
              level={2}
              style={{ "--title-font-weight": "300" } as React.CSSProperties}
            >
              Light Weight (300)
            </Title>
            <Title
              level={2}
              style={{ "--title-font-weight": "900" } as React.CSSProperties}
            >
              Black Weight (900)
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Custom Letter Spacing (--title-letter-spacing)
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Title
              level={2}
              style={
                { "--title-letter-spacing": "-0.02em" } as React.CSSProperties
              }
            >
              Tight Spacing (-0.02em)
            </Title>
            <Title level={2}>Normal Spacing</Title>
            <Title
              level={2}
              style={
                { "--title-letter-spacing": "0.1em" } as React.CSSProperties
              }
            >
              Wide Spacing (0.1em)
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Custom Text Transform (--title-text-transform)
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Title
              level={2}
              style={
                { "--title-text-transform": "uppercase" } as React.CSSProperties
              }
            >
              Uppercase Title
            </Title>
            <Title
              level={2}
              style={
                { "--title-text-transform": "lowercase" } as React.CSSProperties
              }
            >
              Lowercase Title
            </Title>
            <Title
              level={2}
              style={
                {
                  "--title-text-transform": "capitalize",
                } as React.CSSProperties
              }
            >
              capitalized title
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Custom Line Height (--title-line-height)
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Title
              level={2}
              style={{ "--title-line-height": "1" } as React.CSSProperties}
            >
              Tight Line Height (1)
            </Title>
            <Title
              level={2}
              style={{ "--title-line-height": "1.8" } as React.CSSProperties}
            >
              Loose Line Height (1.8)
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Custom Color (--title-color)
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Title
              level={2}
              style={{ "--title-color": "#ff6b6b" } as React.CSSProperties}
            >
              Custom Red
            </Title>
            <Title
              level={2}
              style={
                {
                  "--title-color":
                    "linear-gradient(to right, #667eea, #764ba2)",
                } as React.CSSProperties
              }
            >
              Gradient Color (needs -webkit-background-clip)
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Custom Margins (--title-margin-top, --title-margin-bottom)
          </Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
              background: "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            <Title
              level={3}
              style={
                {
                  "--title-margin-top": "20px",
                  "--title-margin-bottom": "20px",
                } as React.CSSProperties
              }
            >
              Large Margins (20px)
            </Title>
            <Title
              level={3}
              style={
                {
                  "--title-margin-top": "0",
                  "--title-margin-bottom": "0",
                } as React.CSSProperties
              }
            >
              No Margins
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Combined Customization
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Title
              level={2}
              style={
                {
                  "--title-font-size": "2.5rem",
                  "--title-font-weight": "900",
                  "--title-letter-spacing": "0.05em",
                  "--title-text-transform": "uppercase",
                  "--title-color": "#8b5cf6",
                } as React.CSSProperties
              }
            >
              Fully Custom Title
            </Title>
          </div>
        </div>

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
            {`<Title
  level={2}
  style={{
    "--title-font-size": "3rem",
    "--title-letter-spacing": "0.05em",
    "--title-text-transform": "uppercase"
  } as React.CSSProperties}
>
  Custom Title
</Title>

<Title
  level={2}
  underlined
  style={{
    "--title-underline-thickness": "4px",
    "--title-underline-offset": "8px"
  } as React.CSSProperties}
>
  Thick Underline
</Title>

<Title
  level={2}
  variant="primary"
  style={{
    "--title-high-contrast-border-width": "6px",
    "--title-high-contrast-padding": "16px"
  } as React.CSSProperties}
>
  Custom High Contrast
</Title>

.custom-title {
  --title-font-size: 2.5rem;
  --title-font-weight: 900;
  --title-color: #8b5cf6;
  --title-underline-thickness: 3px;
}`}
          </pre>
        </div>
      </div>
    </div>
  ),
};

export const PolymorphicExamples: Story = {
  render: () => (
    <div>
      <Title level={3} style={{ marginBottom: "20px" }}>
        Polymorphic Component (as prop)
      </Title>
      <Text style={{ marginBottom: "30px", color: "#666", maxWidth: "800px" }}>
        The Title component can render as any element using the `as` prop while
        maintaining heading styles and accessibility.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Semantic Headings (Default)
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Title level={1}>H1 Element (default)</Title>
            <Title level={2}>H2 Element</Title>
            <Title level={3}>H3 Element</Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Non-Semantic Elements with Heading Styles
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Title as="div" level={2} variant="primary">
              Div with H2 styles
            </Title>
            <Title as="span" level={3} variant="success">
              Span with H3 styles
            </Title>
            <Title as="p" level={4} variant="warning">
              Paragraph with H4 styles
            </Title>
          </div>
          <Text style={{ fontSize: "12px", color: "#999", marginTop: "10px" }}>
            Non-heading elements automatically get role="heading" and aria-level
            for accessibility
          </Text>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Links with Heading Styles
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Title as="a" href="#section1" level={2} variant="primary">
              Clickable Section Link
            </Title>
            <Title as="a" href="#section2" level={3}>
              Another Section Link
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Real-World Use Cases
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Multiple H1s on a page (SEO concern) → Use as="div":
              </Text>
              <Title as="div" level={1} variant="primary">
                Looks like H1, renders as div
              </Title>
            </div>
            <div>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Card title that shouldn't be in heading hierarchy:
              </Text>
              <Title as="span" level={3} weight="semibold">
                Card Title (span element)
              </Title>
            </div>
            <div>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Navigation link styled as heading:
              </Text>
              <Title as="a" href="#home" level={2} variant="secondary">
                Home (link element)
              </Title>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Usage Examples
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
            {`<Title level={2}>Section Title</Title>

<Title as="div" level={2}>
  Styled as H2, renders as div
</Title>

<Title as="a" href="#section" level={3}>
  Section Link
</Title>

<Title
  as="div"
  level={1}
  style={{
    "--title-font-size": "4rem",
    "--title-color": "#ff6b6b"
  } as React.CSSProperties}
>
  Hero Title
</Title>`}
          </pre>
        </div>
      </div>
    </div>
  ),
};

export const DataAttributesForTesting: Story = {
  render: () => (
    <div>
      <Title level={3} style={{ marginBottom: "20px" }}>
        Data Attributes for E2E Testing
      </Title>
      <Text style={{ marginBottom: "30px", color: "#666", maxWidth: "800px" }}>
        All Title components include data attributes for reliable E2E testing
        with Cypress, Playwright, or similar tools.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Always Present Attributes
          </Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            <Title level={2} variant="primary" align="center">
              Sample Title
            </Title>
            <pre style={{ fontSize: "12px", margin: 0 }}>
              {`data-level="2"
data-variant="primary"
data-align="center"`}
            </pre>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Conditional Attributes
          </Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            <Title
              level={3}
              size="large"
              weight="bold"
              darkMode
              color="#ff0000"
            >
              Full Attributes Title
            </Title>
            <pre style={{ fontSize: "12px", margin: 0 }}>
              {`data-level="3"
data-variant="default"
data-align="left"
data-size="large"
data-weight="bold"
data-dark-mode="true"
data-custom-color="true"`}
            </pre>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            E2E Testing Examples
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
            {`-> Cypress
cy.get('[data-level="1"][data-variant="primary"]')
  .should('be.visible');

-> Playwright
await page.locator('[data-level="2"][data-align="center"]')
  .waitFor();

-> Testing Library
const title = screen.getByText('My Title');
expect(title).toHaveAttribute('data-level', '3');
expect(title).toHaveAttribute('data-variant', 'success');

-> Find all H2-level titles
cy.get('[data-level="2"]').should('have.length', 3);

-> Find dark mode titles
cy.get('[data-dark-mode="true"]')
  .should('have.class', 'marduk-title--dark');`}
          </pre>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Available Data Attributes
          </Title>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #ddd" }}>
                <th style={{ textAlign: "left", padding: "8px" }}>Attribute</th>
                <th style={{ textAlign: "left", padding: "8px" }}>Values</th>
                <th style={{ textAlign: "left", padding: "8px" }}>Always?</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td
                  style={{
                    padding: "8px",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                >
                  data-level
                </td>
                <td style={{ padding: "8px" }}>1-6</td>
                <td style={{ padding: "8px" }}>Yes</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td
                  style={{
                    padding: "8px",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                >
                  data-variant
                </td>
                <td style={{ padding: "8px" }}>
                  default, primary, secondary, success, warning, danger
                </td>
                <td style={{ padding: "8px" }}>Yes</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td
                  style={{
                    padding: "8px",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                >
                  data-align
                </td>
                <td style={{ padding: "8px" }}>left, center, right</td>
                <td style={{ padding: "8px" }}>Yes</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td
                  style={{
                    padding: "8px",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                >
                  data-size
                </td>
                <td style={{ padding: "8px" }}>small, medium, large</td>
                <td style={{ padding: "8px" }}>When specified</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td
                  style={{
                    padding: "8px",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                >
                  data-weight
                </td>
                <td style={{ padding: "8px" }}>
                  normal, medium, semibold, bold
                </td>
                <td style={{ padding: "8px" }}>When specified</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td
                  style={{
                    padding: "8px",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                >
                  data-dark-mode
                </td>
                <td style={{ padding: "8px" }}>true</td>
                <td style={{ padding: "8px" }}>When enabled</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td
                  style={{
                    padding: "8px",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                >
                  data-custom-color
                </td>
                <td style={{ padding: "8px" }}>true</td>
                <td style={{ padding: "8px" }}>When color prop used</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td
                  style={{
                    padding: "8px",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                >
                  data-truncate
                </td>
                <td style={{ padding: "8px" }}>true</td>
                <td style={{ padding: "8px" }}>When truncate enabled</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <td
                  style={{
                    padding: "8px",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                >
                  data-clamp
                </td>
                <td style={{ padding: "8px" }}>true</td>
                <td style={{ padding: "8px" }}>When clamp enabled</td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    fontFamily: "monospace",
                    fontSize: "12px",
                  }}
                >
                  data-max-lines
                </td>
                <td style={{ padding: "8px" }}>number</td>
                <td style={{ padding: "8px" }}>When clamp enabled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ),
};
// TODO: Update the above story when we create the table component ^

export const TextTruncation: Story = {
  render: () => (
    <div>
      <Title level={3} style={{ marginBottom: "20px" }}>
        Text Truncation
      </Title>
      <Text style={{ marginBottom: "30px", color: "#666", maxWidth: "800px" }}>
        Control how long titles are displayed with single-line truncation or
        multi-line clamping.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Single-Line Truncation (truncate prop)
          </Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            <div style={{ maxWidth: "400px" }}>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Normal (no truncation):
              </Text>
              <Title level={3}>
                This is a very long title that will wrap to multiple lines
                naturally without any truncation applied to it at all
              </Title>
            </div>
            <div style={{ maxWidth: "400px" }}>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                With truncate prop:
              </Text>
              <Title level={3} truncate>
                This is a very long title that will wrap to multiple lines
                naturally without any truncation applied to it at all
              </Title>
            </div>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Multi-Line Clamping (clamp prop with maxLines)
          </Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            <div style={{ maxWidth: "500px" }}>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Clamp to 1 line:
              </Text>
              <Title level={3} clamp maxLines={1}>
                This is a very long title that would normally wrap to multiple
                lines but is being clamped to just one line with an ellipsis at
                the end to indicate there is more text available
              </Title>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Clamp to 2 lines (default):
              </Text>
              <Title level={3} clamp maxLines={2}>
                This is a very long title that would normally wrap to multiple
                lines but is being clamped to just two lines with an ellipsis at
                the end to indicate there is more text available beyond what is
                visible
              </Title>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Clamp to 3 lines:
              </Text>
              <Title level={3} clamp maxLines={3}>
                This is a very long title that would normally wrap to multiple
                lines but is being clamped to just three lines with an ellipsis
                at the end to indicate there is more text available beyond what
                is visible in this truncated view
              </Title>
            </div>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Truncation with Variants
          </Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              maxWidth: "450px",
            }}
          >
            <Title level={2} variant="primary" truncate>
              Primary variant with a very long title that gets truncated with
              ellipsis
            </Title>
            <Title level={2} variant="success" clamp maxLines={2}>
              Success variant with a moderately long title that gets clamped to
              two lines and shows an ellipsis when the text exceeds that limit
            </Title>
            <Title level={2} variant="danger" clamp maxLines={1}>
              Danger variant clamped to single line for compact displays
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Responsive Truncation
          </Title>
          <Text
            style={{ fontSize: "12px", color: "#999", marginBottom: "10px" }}
          >
            Useful for responsive cards, headers, and layouts:
          </Text>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
              maxWidth: "800px",
            }}
          >
            <div
              style={{
                padding: "15px",
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <Title level={3} truncate variant="primary">
                Very Long Card Title That Gets Cut Off
              </Title>
              <Text
                style={{ fontSize: "14px", color: "#666", marginTop: "10px" }}
              >
                Card content goes here...
              </Text>
            </div>
            <div
              style={{
                padding: "15px",
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <Title level={3} clamp maxLines={2} variant="success">
                Another Card with a Long Title That Spans Multiple Lines But Is
                Clamped
              </Title>
              <Text
                style={{ fontSize: "14px", color: "#666", marginTop: "10px" }}
              >
                Card content goes here...
              </Text>
            </div>
            <div
              style={{
                padding: "15px",
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <Title level={3} truncate variant="warning">
                Short Title
              </Title>
              <Text
                style={{ fontSize: "14px", color: "#666", marginTop: "10px" }}
              >
                Card content goes here...
              </Text>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Usage Examples
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
            {`-> Single-line truncation with ellipsis
<Title level={2} truncate>
  Very long title that gets cut off...
</Title>

-> Multi-line clamping (default 2 lines)
<Title level={2} clamp>
  Long title that wraps to multiple
  lines but gets cut off after...
</Title>

-> Custom line count
<Title level={2} clamp maxLines={3}>
  Even longer title that can wrap
  to three lines before it shows
  the ellipsis at the end...
</Title>

-> With variants
<Title level={2} variant="primary" truncate>
  Truncated primary title...
</Title>

-> Responsive card titles
<div className="card">
  <Title level={3} clamp maxLines={2}>
    {articleTitle}
  </Title>
</div>`}
          </pre>
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#fff3cd",
            border: "1px solid #ffc107",
            borderRadius: "8px",
          }}
        >
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#856404" }}
          >
            Browser Support
          </Title>
          <Text style={{ fontSize: "13px", color: "#856404", margin: 0 }}>
            <strong>truncate:</strong> Works in all modern browsers
            <br />
            <strong>clamp:</strong> Requires -webkit-line-clamp support (Chrome,
            Safari, Edge, Firefox 68+)
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const LetterSpacing: Story = {
  render: () => (
    <div>
      <Title level={3} style={{ marginBottom: "20px" }}>
        Letter Spacing Presets
      </Title>
      <Text style={{ marginBottom: "30px", color: "#666", maxWidth: "800px" }}>
        Use spacing presets for quick letter spacing adjustments.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Spacing Variations
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Title level={2} spacing="tight">
              Tight Spacing (-0.02em)
            </Title>
            <Title level={2}>Default Spacing (no spacing prop)</Title>
            <Title level={2} spacing="normal">
              Normal Spacing (0)
            </Title>
            <Title level={2} spacing="wide">
              Wide Spacing (0.05em)
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Spacing with Variants
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Title level={2} variant="primary" spacing="wide">
              Primary Wide Spacing
            </Title>
            <Title level={2} variant="success" spacing="tight">
              Success Tight Spacing
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Common Use Cases
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Headlines benefit from wide spacing for emphasis:
              </Text>
              <Title level={1} spacing="wide" weight="bold">
                BREAKING NEWS
              </Title>
            </div>
            <div>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Tight spacing for compact displays:
              </Text>
              <Title level={3} spacing="tight">
                Compact Section Title
              </Title>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Usage
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
            {`<Title level={1} spacing="wide">
  Wide Spacing
</Title>

<Title level={2} spacing="tight">
  Tight Spacing
</Title>

<Title level={2} spacing="normal">
  Normal Spacing (explicit)
</Title>`}
          </pre>
        </div>
      </div>
    </div>
  ),
};

export const UnderlineDecoration: Story = {
  render: () => (
    <div>
      <Title level={3} style={{ marginBottom: "20px" }}>
        Underline Decoration
      </Title>
      <Text style={{ marginBottom: "30px", color: "#666", maxWidth: "800px" }}>
        Add decorative underlines to your titles with various styles.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Underline Styles
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Title level={2} underlined underlineStyle="solid">
              Solid Underline (default)
            </Title>
            <Title level={2} underlined underlineStyle="double">
              Double Underline
            </Title>
            <Title level={2} underlined underlineStyle="dotted">
              Dotted Underline
            </Title>
            <Title level={2} underlined underlineStyle="dashed">
              Dashed Underline
            </Title>
            <Title level={2} underlined underlineStyle="wavy">
              Wavy Underline
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Underlines with Color Variants
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Title
              level={2}
              variant="primary"
              underlined
              underlineStyle="solid"
            >
              Primary Underlined
            </Title>
            <Title level={2} variant="success" underlined underlineStyle="wavy">
              Success Wavy Underline
            </Title>
            <Title
              level={2}
              variant="danger"
              underlined
              underlineStyle="double"
            >
              Danger Double Underline
            </Title>
            <Title
              level={2}
              variant="warning"
              underlined
              underlineStyle="dashed"
            >
              Warning Dashed Underline
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Underlines with Custom Colors
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Title level={2} color="#e74c3c" underlined underlineStyle="solid">
              Custom Red with Solid Underline
            </Title>
            <Title level={2} color="#3498db" underlined underlineStyle="wavy">
              Custom Blue with Wavy Underline
            </Title>
            <Title level={2} color="#2ecc71" underlined underlineStyle="double">
              Custom Green with Double Underline
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Combined with Letter Spacing
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Title
              level={2}
              variant="primary"
              spacing="wide"
              underlined
              underlineStyle="solid"
            >
              Wide Spacing + Underline
            </Title>
            <Title
              level={2}
              variant="success"
              spacing="tight"
              underlined
              underlineStyle="wavy"
            >
              Tight Spacing + Wavy Underline
            </Title>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Real-World Use Cases
          </Title>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Section headers with emphasis:
              </Text>
              <Title level={2} underlined underlineStyle="solid" weight="bold">
                Featured Section
              </Title>
            </div>
            <div>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Playful titles for creative content:
              </Text>
              <Title
                level={2}
                variant="primary"
                underlined
                underlineStyle="wavy"
              >
                Fun & Creative Title
              </Title>
            </div>
            <div>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Formal titles with double underline:
              </Text>
              <Title level={1} underlined underlineStyle="double" weight="bold">
                Important Document Title
              </Title>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Usage Examples
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
            {`-> Basic underline (solid by default)
<Title level={2} underlined>
  Underlined Title
</Title>

-> Different underline styles
<Title level={2} underlined underlineStyle="wavy">
  Wavy Underline
</Title>

<Title level={2} underlined underlineStyle="double">
  Double Underline
</Title>

-> With letter spacing
<Title level={2} spacing="wide" underlined>
  Wide Spacing + Underline
</Title>

-> With variants
<Title level={2} variant="primary" underlined underlineStyle="wavy">
  Primary Wavy Underline
</Title>`}
          </pre>
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#d1ecf1",
            border: "1px solid #17a2b8",
            borderRadius: "8px",
          }}
        >
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#0c5460" }}
          >
            Browser Support
          </Title>
          <Text style={{ fontSize: "13px", color: "#0c5460", margin: 0 }}>
            <strong>text-decoration-style:</strong> All modern browsers
            <br />
            <strong>wavy underline:</strong> Chrome, Safari, Edge, Firefox 6+
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const AccessibilityFeatures: Story = {
  render: () => (
    <div>
      <Title level={3} style={{ marginBottom: "20px" }}>
        Accessibility Features
      </Title>
      <Text style={{ marginBottom: "30px", color: "#666", maxWidth: "800px" }}>
        The Title component includes built-in support for reduced motion and
        high contrast mode preferences.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Reduced Motion Support
          </Title>
          <div
            style={{
              padding: "15px",
              background: "#e3f2fd",
              border: "1px solid #2196f3",
              borderRadius: "8px",
              marginBottom: "15px",
            }}
          >
            <Text style={{ fontSize: "13px", color: "#0d47a1", margin: 0 }}>
              <strong>Feature:</strong> Transitions are automatically disabled
              when users have <code>prefers-reduced-motion: reduce</code>{" "}
              enabled.
            </Text>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Title level={2}>
              Normal Title (has font-size transition on resize)
            </Title>
            <Text style={{ fontSize: "12px", color: "#666" }}>
              Resize your browser to see smooth font-size transitions (unless
              reduced motion is enabled)
            </Text>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            High Contrast Mode Support
          </Title>
          <div
            style={{
              padding: "15px",
              background: "#e3f2fd",
              border: "1px solid #2196f3",
              borderRadius: "8px",
              marginBottom: "15px",
            }}
          >
            <Text style={{ fontSize: "13px", color: "#0d47a1", margin: 0 }}>
              <strong>Feature:</strong> When <code>prefers-contrast: high</code>{" "}
              is enabled, titles automatically get enhanced visual features:
            </Text>
            <ul
              style={{
                fontSize: "13px",
                color: "#0d47a1",
                marginTop: "10px",
                marginBottom: 0,
              }}
            >
              <li>Bolder font weight for better readability</li>
              <li>Thicker underlines (3px) with more offset</li>
              <li>Automatic underlines for link titles</li>
              <li>Left borders for colored/variant titles</li>
            </ul>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Normal title (gets bold weight in high contrast):
              </Text>
              <Title level={2}>Regular Title</Title>
            </div>

            <div>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Underlined title (gets thicker underline in high contrast):
              </Text>
              <Title level={2} underlined underlineStyle="solid">
                Underlined Title
              </Title>
            </div>

            <div>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Link title (gets automatic underline in high contrast):
              </Text>
              <Title as="a" href="#section" level={2} variant="primary">
                Link Title
              </Title>
            </div>

            <div>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Variant titles (get left border in high contrast):
              </Text>
              <Title level={2} variant="primary">
                Primary Variant
              </Title>
              <Title level={2} variant="success" style={{ marginTop: "10px" }}>
                Success Variant
              </Title>
            </div>

            <div>
              <Text
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Custom color (gets left border in high contrast):
              </Text>
              <Title level={2} color="#ff6b6b">
                Custom Color Title
              </Title>
            </div>
          </div>
        </div>

        <div>
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            How to Test
          </Title>
          <div
            style={{
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            <Text
              style={{ fontSize: "13px", color: "#333", marginBottom: "10px" }}
            >
              <strong>Reduced Motion:</strong>
            </Text>
            <ul style={{ fontSize: "13px", color: "#666", marginTop: 0 }}>
              <li>
                <strong>macOS:</strong> System Preferences → Accessibility →
                Display → Reduce motion
              </li>
              <li>
                <strong>Windows:</strong> Settings → Ease of Access → Display →
                Show animations in Windows
              </li>
              <li>
                <strong>DevTools:</strong> Open DevTools → Command Palette →
                "Emulate CSS prefers-reduced-motion"
              </li>
            </ul>

            <Text
              style={{
                fontSize: "13px",
                color: "#333",
                marginBottom: "10px",
                marginTop: "15px",
              }}
            >
              <strong>High Contrast Mode:</strong>
            </Text>
            <ul
              style={{
                fontSize: "13px",
                color: "#666",
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              <li>
                <strong>Windows:</strong> Settings → Ease of Access → High
                contrast
              </li>
              <li>
                <strong>macOS:</strong> System Preferences → Accessibility →
                Display → Increase contrast
              </li>
              <li>
                <strong>DevTools:</strong> Open DevTools → Command Palette →
                "Emulate CSS prefers-contrast"
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#d4edda",
            border: "1px solid #28a745",
            borderRadius: "8px",
          }}
        >
          <Title
            level={4}
            style={{ marginBottom: "10px", fontSize: "14px", color: "#155724" }}
          >
            WCAG Compliance
          </Title>
          <Text style={{ fontSize: "13px", color: "#155724", margin: 0 }}>
            Respects <strong>prefers-reduced-motion</strong> (WCAG 2.3.3)
            <br />
            Enhanced visibility in <strong>high contrast mode</strong> (WCAG
            1.4.11)
            <br />
            Semantic HTML with proper heading hierarchy (WCAG 1.3.1)
          </Text>
        </div>
      </div>
    </div>
  ),
};
// TODO update the above story when we create the ul li component
