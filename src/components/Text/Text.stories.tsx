import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import React from "react";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "muted",
      ],
      description: "Color variant",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Text size",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
      description: "Text alignment",
    },
    weight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold", "bold"],
      description: "Font weight override (optional)",
    },
    as: {
      control: { type: "select" },
      options: ["p", "span", "div", "label"],
      description: "HTML element to render as",
    },
    italic: {
      control: { type: "boolean" },
      description: "Italic text style",
    },
    darkMode: {
      control: { type: "boolean" },
      description: "Enable dark mode styling",
    },
    color: {
      control: { type: "color" },
      description: "Custom text color (overrides variant color)",
    },
    lineHeight: {
      control: { type: "select" },
      options: ["tight", "normal", "relaxed", "loose"],
      description: "Line height preset (optional)",
    },
    spacing: {
      control: { type: "select" },
      options: ["tight", "normal", "wide"],
      description: "Letter spacing preset (optional)",
    },
    truncate: {
      control: { type: "boolean" },
      description: "Single-line truncation with ellipsis",
    },
    clamp: {
      control: { type: "boolean" },
      description: "Multi-line truncation",
    },
    maxLines: {
      control: { type: "number" },
      description: "Max lines when clamping (default: 2)",
    },
    underlined: {
      control: { type: "boolean" },
      description: "Enhanced underline decoration",
    },
    underlineStyle: {
      control: { type: "select" },
      options: ["solid", "double", "dotted", "dashed", "wavy"],
      description: "Underline style (requires underlined prop)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is a text component",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text size="xs">Extra Small Text (xs)</Text>
      <Text size="sm">Small Text (sm)</Text>
      <Text size="md">Medium Text (md) - Default</Text>
      <Text size="lg">Large Text (lg)</Text>
      <Text size="xl">Extra Large Text (xl)</Text>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text variant="default">Default variant text</Text>
      <Text variant="primary">Primary variant text</Text>
      <Text variant="secondary">Secondary variant text</Text>
      <Text variant="success">Success variant text</Text>
      <Text variant="danger">Danger variant text</Text>
      <Text variant="warning">Warning variant text</Text>
      <Text variant="muted">Muted variant text</Text>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "500px",
      }}
    >
      <Text align="left">
        This text is left aligned. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </Text>
      <Text align="center">
        This text is center aligned. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </Text>
      <Text align="right">
        This text is right aligned. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </Text>
      <Text align="justify">
        This text is justified. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </div>
  ),
};

export const StyleModifiers: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text>Regular text</Text>
      <Text italic>Italic text</Text>
      <Text underlined>Underlined text</Text>
      <Text italic underlined>
        Italic and underlined text
      </Text>
      <Text weight="bold" italic underlined>
        Bold, italic, and underlined
      </Text>
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div
      style={{ background: "#1e1e1e", padding: "40px", borderRadius: "8px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Text darkMode>Default dark mode text</Text>
        <Text darkMode variant="primary">
          Primary in dark mode
        </Text>
        <Text darkMode variant="success">
          Success in dark mode
        </Text>
        <Text darkMode variant="warning">
          Warning in dark mode
        </Text>
        <Text darkMode variant="danger">
          Danger in dark mode
        </Text>
        <Text darkMode variant="muted">
          Muted in dark mode
        </Text>
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
        <Text weight="bold" style={{ marginBottom: "16px" }}>
          Light Mode
        </Text>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Text variant="default">Default text color</Text>
          <Text variant="primary">Primary text color</Text>
          <Text variant="success">Success text color</Text>
          <Text variant="danger">Danger text color</Text>
          <Text variant="warning">Warning text color</Text>
          <Text variant="muted">Muted text color</Text>
        </div>
      </div>
      <div
        style={{ padding: "30px", background: "#1e1e1e", borderRadius: "8px" }}
      >
        <Text darkMode weight="bold" style={{ marginBottom: "16px" }}>
          Dark Mode
        </Text>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Text darkMode variant="default">
            Default text color
          </Text>
          <Text darkMode variant="primary">
            Primary text color
          </Text>
          <Text darkMode variant="success">
            Success text color
          </Text>
          <Text darkMode variant="danger">
            Danger text color
          </Text>
          <Text darkMode variant="warning">
            Warning text color
          </Text>
          <Text darkMode variant="muted">
            Muted text color
          </Text>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export const CustomColorShowcase: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text color="#e74c3c" size="lg" weight="bold">
        Custom Red (#e74c3c)
      </Text>
      <Text color="#3498db" size="lg" weight="bold">
        Custom Blue (#3498db)
      </Text>
      <Text color="#2ecc71" size="lg" weight="bold">
        Custom Green (#2ecc71)
      </Text>
      <Text color="#f39c12" size="lg" weight="bold">
        Custom Orange (#f39c12)
      </Text>
      <Text color="#9b59b6" size="lg" weight="bold">
        Custom Purple (#9b59b6)
      </Text>
      <Text color="var(--marduk-color-primary-500)" size="lg" weight="bold">
        CSS Variable (--marduk-color-primary-500)
      </Text>
      <Text variant="primary" color="#e74c3c" size="md">
        Color prop overrides variant color
      </Text>
    </div>
  ),
};

export const PolymorphicExamples: Story = {
  render: () => (
    <div>
      <Text
        as="h3"
        size="lg"
        weight="bold"
        style={{ marginBottom: "20px", marginTop: 0 }}
      >
        Polymorphic Component (as prop)
      </Text>
      <Text
        as="p"
        variant="muted"
        style={{ marginBottom: "30px", maxWidth: "800px" }}
      >
        The Text component can render as any HTML element using the `as` prop
        while maintaining all text styling and features.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Default Text Elements
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Text as="p">Paragraph element (default)</Text>
            <Text as="span">Span element (inline)</Text>
            <Text as="div">Div element (block)</Text>
            <Text as="label">Label element (for forms)</Text>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Links
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Text as="a" href="#section1" variant="primary" underlined>
              Text styled link
            </Text>
            <Text
              as="a"
              href="https://example.com"
              target="_blank"
              rel="noopener"
              variant="success"
            >
              External link (opens in new tab)
            </Text>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Buttons with Text Styling
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Text
              as="button"
              type="button"
              variant="primary"
              weight="bold"
              style={{ cursor: "pointer" }}
              onClick={() => alert("Button clicked!")}
            >
              Button styled as text
            </Text>
            <Text
              as="button"
              type="button"
              variant="danger"
              underlined
              style={{ cursor: "pointer" }}
            >
              Delete (underlined button)
            </Text>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Semantic HTML Elements
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Text as="section" variant="muted" size="sm">
              Section element
            </Text>
            <Text as="article" variant="default">
              Article element
            </Text>
            <Text as="aside" variant="secondary" size="sm" italic>
              Aside element (sidebar note)
            </Text>
            <Text as="figcaption" variant="muted" size="xs" align="center">
              Figure caption element
            </Text>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Use Case Examples
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Form label with text styling:
              </Text>
              <Text as="label" htmlFor="email" weight="medium">
                Email Address
              </Text>
            </div>
            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Inline badge/tag:
              </Text>
              <Text
                as="span"
                variant="success"
                size="xs"
                weight="bold"
                style={{
                  display: "inline-block",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  background: "#d4edda",
                }}
              >
                NEW
              </Text>
            </div>
            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Clickable text that's actually a div:
              </Text>
              <Text
                as="div"
                variant="primary"
                underlined
                style={{ cursor: "pointer" }}
                onClick={() => console.log("Clicked!")}
              >
                Click me (div with onClick)
              </Text>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Usage Examples
          </Text>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "8px",
              fontSize: "13px",
              overflow: "auto",
            }}
          >
            {`<Text as="a" href="/link" variant="primary">
  Link styled as text
</Text>

<Text as="button" onClick={handleClick} variant="success">
  Button styled as text
</Text>

<Text as="label" htmlFor="input" weight="bold">
  Form Label
</Text>

<Text as="span" size="xs" variant="muted">
  Inline muted text
</Text>`}
          </pre>
        </div>
      </div>
    </div>
  ),
};

export const CSSVariableCustomization: Story = {
  render: () => (
    <div>
      <Text
        as="h3"
        size="lg"
        weight="bold"
        style={{ marginBottom: "20px", marginTop: 0 }}
      >
        CSS Variable Customization
      </Text>
      <Text
        as="p"
        variant="muted"
        style={{ marginBottom: "30px", maxWidth: "800px" }}
      >
        Override component-level CSS variables for fine-grained control over
        text styling.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Available CSS Variables
          </Text>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "8px",
              fontFamily: "monospace",
              fontSize: "12px",
            }}
          >
            <div>--text-color</div>
            <div>--text-font-family</div>
            <div>--text-font-size</div>
            <div>--text-font-weight</div>
            <div>--text-line-height</div>
            <div>--text-letter-spacing</div>
            <div>--text-text-align</div>
            <div>--text-margin</div>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Customization Examples
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Text
              style={
                {
                  "--text-font-size": "2rem",
                  "--text-color": "#e74c3c",
                  "--text-font-weight": "700",
                } as React.CSSProperties
              }
            >
              Custom font size, color, and weight
            </Text>
            <Text
              style={
                {
                  "--text-line-height": "2",
                  "--text-letter-spacing": "0.1em",
                } as React.CSSProperties
              }
            >
              Custom line height and letter spacing
            </Text>
            <Text
              variant="primary"
              style={
                {
                  "--text-color": "#9b59b6",
                } as React.CSSProperties
              }
            >
              Override variant color with custom CSS variable
            </Text>
          </div>
        </div>

        <div style={{ marginTop: "10px" }}>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Code Example
          </Text>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "8px",
              fontSize: "13px",
              overflow: "auto",
            }}
          >
            {`<Text 
  style={{
    "--text-font-size": "2rem",
    "--text-color": "#e74c3c",
    "--text-letter-spacing": "0.05em"
  } as React.CSSProperties}
>
  Customized text
</Text>`}
          </pre>
        </div>
      </div>
    </div>
  ),
};

export const DataAttributesForTesting: Story = {
  render: () => (
    <div>
      <Text
        as="h3"
        size="lg"
        weight="bold"
        style={{ marginBottom: "20px", marginTop: 0 }}
      >
        Data Attributes for E2E Testing
      </Text>
      <Text
        as="p"
        variant="muted"
        style={{ marginBottom: "30px", maxWidth: "800px" }}
      >
        All Text components include data attributes for reliable E2E testing
        with Cypress, Playwright, or similar tools.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Always Present Attributes
          </Text>
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
            <Text variant="primary" size="lg" align="center">
              Sample Text
            </Text>
            <pre style={{ fontSize: "12px", margin: 0 }}>
              {`data-variant="primary"
data-size="lg"
data-align="center"`}
            </pre>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Conditional Attributes
          </Text>
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
            <Text
              variant="success"
              size="xl"
              weight="bold"
              italic
              underlined
              underlineStyle="wavy"
              darkMode
              color="#00ff00"
            >
              Full Attributes Text
            </Text>
            <pre style={{ fontSize: "12px", margin: 0 }}>
              {`data-variant="success"
data-size="xl"
data-align="left"
data-weight="bold"
data-italic="true"
data-underlined="true"
data-underline-style="wavy"
data-dark-mode="true"
data-custom-color="true"`}
            </pre>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            E2E Testing Examples
          </Text>
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
cy.get('[data-variant="primary"][data-size="lg"]')
  .should('be.visible');

-> Playwright
await page.locator('[data-variant="success"][data-weight="bold"]')
  .waitFor();

-> Testing Library
const text = screen.getByText('My Text');
expect(text).toHaveAttribute('data-variant', 'primary');
expect(text).toHaveAttribute('data-italic', 'true');

-> Find all large text
cy.get('[data-size="lg"]').should('have.length', 3);`}
          </pre>
        </div>
      </div>
    </div>
  ),
};

export const LineHeightPresets: Story = {
  render: () => (
    <div>
      <Text
        as="h3"
        size="lg"
        weight="bold"
        style={{ marginBottom: "20px", marginTop: 0 }}
      >
        Line Height Presets
      </Text>
      <Text
        as="p"
        variant="muted"
        style={{ marginBottom: "30px", maxWidth: "800px" }}
      >
        Control line spacing with preset line height values for different
        reading experiences.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Line Height Variations
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={{ maxWidth: "600px" }}>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Tight (1.2) - Compact spacing for headlines:
              </Text>
              <Text lineHeight="tight" size="lg" weight="bold">
                Tight line height creates a more compact appearance. This is
                great for headlines, titles, or when vertical space is limited.
              </Text>
            </div>

            <div style={{ maxWidth: "600px" }}>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Normal (1.6) - Default, good for most text:
              </Text>
              <Text lineHeight="normal">
                Normal line height is the default value (1.6). This provides
                balanced readability for most content types and is the standard
                for body text in most designs.
              </Text>
            </div>

            <div style={{ maxWidth: "600px" }}>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Relaxed (1.8) - More breathing room:
              </Text>
              <Text lineHeight="relaxed">
                Relaxed line height adds more space between lines. This can
                improve readability for longer paragraphs or when you want a
                more open, airy feel to your text.
              </Text>
            </div>

            <div style={{ maxWidth: "600px" }}>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Loose (2.0) - Maximum spacing:
              </Text>
              <Text lineHeight="loose">
                Loose line height provides the most space between lines. This is
                useful for emphasis, quotes, or when you want text to feel very
                open and easy to scan.
              </Text>
            </div>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Common Use Cases
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Headlines and titles (tight):
              </Text>
              <Text lineHeight="tight" size="xl" weight="bold">
                Breaking News: Major Update Released
              </Text>
            </div>
            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Body paragraphs (normal or relaxed):
              </Text>
              <Text lineHeight="relaxed" style={{ maxWidth: "500px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </Text>
            </div>
            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Quotes or emphasis (loose):
              </Text>
              <Text
                lineHeight="loose"
                italic
                size="lg"
                align="center"
                style={{ maxWidth: "500px" }}
              >
                "Anywhere can be paradise as long as you have the will to live.
                After all, you are alive, so you will always have the chance to
                be happy. As long as the Sun, the Moon, and the Earth exist,
                everything will be all right."
              </Text>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Usage Examples
          </Text>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "8px",
              fontSize: "13px",
              overflow: "auto",
            }}
          >
            {`<Text lineHeight="tight" weight="bold">
  Compact headline
</Text>

<Text lineHeight="normal">
  Default body text (1.6)
</Text>

<Text lineHeight="relaxed">
  Relaxed paragraph for better readability
</Text>

<Text lineHeight="loose" italic>
  Loose spacing for quotes or emphasis
</Text>`}
          </pre>
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveTypography: Story = {
  render: () => (
    <div>
      <Text
        as="h3"
        size="lg"
        weight="bold"
        style={{ marginBottom: "20px", marginTop: 0 }}
      >
        Responsive Typography
      </Text>
      <Text
        as="p"
        variant="muted"
        style={{ marginBottom: "30px", maxWidth: "800px" }}
      >
        Text sizes automatically scale across mobile (0-767px), tablet (768px+),
        and desktop (1024px+) breakpoints.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Resize your browser to see responsive scaling
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Text size="xs" weight="medium">
              XS: 0.625rem → 0.875rem (tablet) → 0.875rem (desktop)
            </Text>
            <Text size="sm" weight="medium">
              SM: 0.875rem → 1rem (tablet) → 1rem (desktop)
            </Text>
            <Text size="md" weight="medium">
              MD: 1rem → 1.125rem (tablet) → 1.125rem (desktop)
            </Text>
            <Text size="lg" weight="medium">
              LG: 1.125rem → 1.25rem (tablet) → 1.25rem (desktop)
            </Text>
            <Text size="xl" weight="medium">
              XL: 1.25rem → 1.5rem (tablet) → 1.75rem (desktop)
            </Text>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Responsive Text Sizes by Breakpoint
          </Text>
          <div
            style={{
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #ddd" }}>
                  <th style={{ textAlign: "left", padding: "8px" }}>Size</th>
                  <th style={{ textAlign: "left", padding: "8px" }}>
                    Mobile (0-767px)
                  </th>
                  <th style={{ textAlign: "left", padding: "8px" }}>
                    Tablet (768px+)
                  </th>
                  <th style={{ textAlign: "left", padding: "8px" }}>
                    Desktop (1024px+)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "8px", fontWeight: "bold" }}>xs</td>
                  <td style={{ padding: "8px" }}>0.625rem</td>
                  <td style={{ padding: "8px" }}>0.875rem</td>
                  <td style={{ padding: "8px" }}>0.875rem</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "8px", fontWeight: "bold" }}>sm</td>
                  <td style={{ padding: "8px" }}>0.875rem</td>
                  <td style={{ padding: "8px" }}>1rem</td>
                  <td style={{ padding: "8px" }}>1rem</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "8px", fontWeight: "bold" }}>md</td>
                  <td style={{ padding: "8px" }}>1rem</td>
                  <td style={{ padding: "8px" }}>1.125rem</td>
                  <td style={{ padding: "8px" }}>1.125rem</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "8px", fontWeight: "bold" }}>lg</td>
                  <td style={{ padding: "8px" }}>1.125rem</td>
                  <td style={{ padding: "8px" }}>1.25rem</td>
                  <td style={{ padding: "8px" }}>1.25rem</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px", fontWeight: "bold" }}>xl</td>
                  <td style={{ padding: "8px" }}>1.25rem</td>
                  <td style={{ padding: "8px" }}>1.5rem</td>
                  <td style={{ padding: "8px" }}>1.75rem</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: "10px" }}>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Implementation
          </Text>
          <Text
            as="p"
            variant="muted"
            size="sm"
            style={{ marginBottom: "10px" }}
          >
            Responsive scaling is automatic. Just set the size prop and it will
            scale appropriately across all breakpoints.
          </Text>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "8px",
              fontSize: "13px",
              overflow: "auto",
            }}
          >
            {`<Text size="lg">
  Automatically scales from 1.125rem (mobile)
  to 1.25rem (tablet/desktop)
</Text>

<Text size="xl">
  1.25rem (mobile) → 1.5rem (tablet) → 1.75rem (desktop)
</Text>`}
          </pre>
        </div>
      </div>
    </div>
  ),
};
// TODO: Updated story when we have our own table component ^

export const TextTruncation: Story = {
  render: () => (
    <div>
      <Text
        as="h3"
        size="lg"
        weight="bold"
        style={{ marginBottom: "20px", marginTop: 0 }}
      >
        Text Truncation
      </Text>
      <Text
        as="p"
        variant="muted"
        style={{ marginBottom: "30px", maxWidth: "800px" }}
      >
        Control how long text content is displayed with single-line truncation
        or multi-line clamping.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Single-Line Truncation (truncate prop)
          </Text>
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
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Normal (no truncation):
              </Text>
              <Text>
                This is a very long paragraph that will wrap to multiple lines
                naturally without any truncation applied to it at all
              </Text>
            </div>
            <div style={{ maxWidth: "400px" }}>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                With truncate prop:
              </Text>
              <Text truncate>
                This is a very long paragraph that will wrap to multiple lines
                naturally without any truncation applied to it at all
              </Text>
            </div>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Multi-Line Clamping (clamp prop with maxLines)
          </Text>
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
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Clamp to 2 lines (default):
              </Text>
              <Text clamp>
                This is a very long paragraph that would normally wrap to
                multiple lines but is being clamped to just two lines with an
                ellipsis at the end to indicate there is more text available
                beyond what is visible
              </Text>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Clamp to 3 lines:
              </Text>
              <Text clamp maxLines={3}>
                This is a very long paragraph that would normally wrap to
                multiple lines but is being clamped to just three lines with an
                ellipsis at the end to indicate there is more text available
                beyond what is visible in this truncated view of the content
              </Text>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Clamp to 1 line:
              </Text>
              <Text clamp maxLines={1}>
                This is a very long paragraph that gets clamped to single line
              </Text>
            </div>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            With Variants
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              maxWidth: "450px",
            }}
          >
            <Text variant="primary" truncate>
              Primary variant with a very long text that gets truncated with
              ellipsis
            </Text>
            <Text variant="success" clamp maxLines={2}>
              Success variant with a moderately long text that gets clamped to
              two lines and shows an ellipsis when the text exceeds that limit
            </Text>
            <Text variant="danger" clamp maxLines={1}>
              Danger variant clamped to single line for compact displays
            </Text>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Usage Examples
          </Text>
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
<Text truncate>
  Very long text that gets cut off
</Text>

-> Multi-line clamping (default 2 lines)
<Text clamp>
  Long text that wraps to multiple
  lines but gets cut off after
</Text>

-> Custom line count
<Text clamp maxLines={3}>
  Even longer text that can wrap
  to three lines before showing
</Text>`}
          </pre>
        </div>
      </div>
    </div>
  ),
};

export const LetterSpacingPresets: Story = {
  render: () => (
    <div>
      <Text
        as="h3"
        size="lg"
        weight="bold"
        style={{ marginBottom: "20px", marginTop: 0 }}
      >
        Letter Spacing Presets
      </Text>
      <Text
        as="p"
        variant="muted"
        style={{ marginBottom: "30px", maxWidth: "800px" }}
      >
        Use spacing presets for quick letter spacing adjustments.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Spacing Variations
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Text size="lg" spacing="tight">
              Tight Spacing (-0.02em)
            </Text>
            <Text size="lg">Default Spacing (no spacing prop)</Text>
            <Text size="lg" spacing="normal">
              Normal Spacing (0)
            </Text>
            <Text size="lg" spacing="wide">
              Wide Spacing (0.05em)
            </Text>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Spacing with Variants
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Text variant="primary" spacing="wide">
              Primary Wide Spacing
            </Text>
            <Text variant="success" spacing="tight">
              Success Tight Spacing
            </Text>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Common Use Cases
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Headlines with wide spacing for emphasis:
              </Text>
              <Text size="xl" spacing="wide" weight="bold">
                BREAKING NEWS
              </Text>
            </div>
            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Tight spacing for compact displays:
              </Text>
              <Text spacing="tight">Compact text for dense layouts</Text>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Usage
          </Text>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "8px",
              fontSize: "13px",
              overflow: "auto",
            }}
          >
            {`<Text spacing="wide">
  Wide Spacing
</Text>

<Text spacing="tight">
  Tight Spacing
</Text>

<Text spacing="normal">
  Normal Spacing (explicit)
</Text>`}
          </pre>
        </div>
      </div>
    </div>
  ),
};

export const UnderlineDecoration: Story = {
  render: () => (
    <div>
      <Text
        as="h3"
        size="lg"
        weight="bold"
        style={{ marginBottom: "20px", marginTop: 0 }}
      >
        Underline Decoration
      </Text>
      <Text
        as="p"
        variant="muted"
        style={{ marginBottom: "30px", maxWidth: "800px" }}
      >
        Add decorative underlines to your text with various styles.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Underline Styles
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Text size="lg" underlined underlineStyle="solid">
              Solid Underline (default)
            </Text>
            <Text size="lg" underlined underlineStyle="double">
              Double Underline
            </Text>
            <Text size="lg" underlined underlineStyle="dotted">
              Dotted Underline
            </Text>
            <Text size="lg" underlined underlineStyle="dashed">
              Dashed Underline
            </Text>
            <Text size="lg" underlined underlineStyle="wavy">
              Wavy Underline
            </Text>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            With Variants
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Text variant="primary" underlined underlineStyle="solid">
              Primary Solid Underline
            </Text>
            <Text variant="success" underlined underlineStyle="double">
              Success Double Underline
            </Text>
            <Text variant="warning" underlined underlineStyle="wavy">
              Warning Wavy Underline
            </Text>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Common Use Cases
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Emphasis with solid underline:
              </Text>
              <Text underlined underlineStyle="solid" weight="medium">
                Important information
              </Text>
            </div>
            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Playful text with wavy underline:
              </Text>
              <Text underlined underlineStyle="wavy" variant="primary">
                Fun and creative content
              </Text>
            </div>
            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Formal emphasis with double underline:
              </Text>
              <Text underlined underlineStyle="double" weight="bold">
                Strongly emphasized text
              </Text>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Usage Examples
          </Text>
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
<Text underlined>
  Underlined text
</Text>

-> Different underline styles
<Text underlined underlineStyle="wavy">
  Wavy Underline
</Text>

<Text underlined underlineStyle="double">
  Double Underline
</Text>

-> With variants
<Text variant="primary" underlined underlineStyle="wavy">
  Primary Wavy Underline
</Text>`}
          </pre>
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#d1ecf1",
            border: "1px solid #bee5eb",
            borderRadius: "8px",
          }}
        >
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#0c5460" }}
          >
            Browser Support
          </Text>
          <Text
            as="p"
            style={{ fontSize: "13px", color: "#0c5460", margin: 0 }}
          >
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
      <Text
        as="h3"
        size="lg"
        weight="bold"
        style={{ marginBottom: "20px", marginTop: 0 }}
      >
        Accessibility Features
      </Text>
      <Text
        as="p"
        variant="muted"
        style={{ marginBottom: "30px", maxWidth: "800px" }}
      >
        The Text component includes built-in support for reduced motion and high
        contrast mode preferences.
      </Text>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Reduced Motion Support
          </Text>
          <div
            style={{
              padding: "15px",
              background: "#e3f2fd",
              border: "1px solid #2196f3",
              borderRadius: "8px",
            }}
          >
            <Text style={{ fontSize: "13px", color: "#0d47a1", margin: 0 }}>
              <strong>Feature:</strong> Transitions are automatically disabled
              when users have <code>prefers-reduced-motion: reduce</code>{" "}
              enabled.
            </Text>
          </div>
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div>
              <Text size="md">
                Normal Text (has font-size transition on resize)
              </Text>
              <Text style={{ fontSize: "12px", color: "#666" }}>
                Resize your browser to see smooth font-size transitions (unless
                reduced motion is enabled)
              </Text>
            </div>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            High Contrast Mode Support
          </Text>
          <div
            style={{
              padding: "15px",
              background: "#e3f2fd",
              border: "1px solid #2196f3",
              borderRadius: "8px",
            }}
          >
            <Text style={{ fontSize: "13px", color: "#0d47a1", margin: 0 }}>
              <strong>Feature:</strong> When <code>prefers-contrast: high</code>{" "}
              is enabled, text automatically gets enhanced visual features:
            </Text>
            <ul
              style={{
                fontSize: "13px",
                color: "#0d47a1",
                marginTop: "10px",
                marginBottom: 0,
              }}
            >
              <li>Font weight increased to medium</li>
              <li>Thicker underlines (2px instead of 1px)</li>
              <li>Automatic underlines for links</li>
              <li>Left border for variant and custom colored text</li>
            </ul>
          </div>
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Normal text (gets medium weight in high contrast):
              </Text>
              <Text>Regular text content</Text>
            </div>

            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Underlined text (gets thicker underline in high contrast):
              </Text>
              <Text underlined underlineStyle="solid">
                Underlined text
              </Text>
            </div>

            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Link text (gets automatic underline in high contrast):
              </Text>
              <Text as="a" href="#section" variant="primary">
                Link text
              </Text>
            </div>

            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Variant text (gets left border in high contrast):
              </Text>
              <Text variant="primary">Primary text</Text>
            </div>

            <div>
              <Text
                as="p"
                style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}
              >
                Custom color (gets left border in high contrast):
              </Text>
              <Text color="#ff6b6b">Custom color text</Text>
            </div>
          </div>
        </div>

        <div>
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}
          >
            Testing Instructions
          </Text>
          <div
            style={{
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            <Text
              as="p"
              style={{ fontSize: "13px", color: "#333", marginBottom: "10px" }}
            >
              <strong>Reduced Motion:</strong>
            </Text>
            <ul style={{ fontSize: "13px", color: "#666", marginTop: 0 }}>
              <li>
                <strong>Windows:</strong> Settings → Accessibility → Visual
                effects → Animation effects
              </li>
              <li>
                <strong>macOS:</strong> System Preferences → Accessibility →
                Display → Reduce motion
              </li>
              <li>
                <strong>DevTools:</strong> Chrome DevTools → Rendering → Emulate
                CSS media prefers-reduced-motion
              </li>
            </ul>

            <Text
              as="p"
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
                <strong>Windows:</strong> Settings → Accessibility → Contrast
                themes
              </li>
              <li>
                <strong>macOS:</strong> System Preferences → Accessibility →
                Display → Increase contrast
              </li>
              <li>
                <strong>DevTools:</strong> Chrome DevTools → Rendering → Emulate
                CSS media prefers-contrast
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
          <Text
            as="h4"
            weight="semibold"
            style={{ marginBottom: "10px", fontSize: "14px", color: "#155724" }}
          >
            WCAG Compliance
          </Text>
          <Text style={{ fontSize: "13px", color: "#155724", margin: 0 }}>
            Respects <strong>prefers-reduced-motion</strong> (WCAG 2.3.3)
            <br />
            Enhanced visibility in <strong>high contrast mode</strong> (WCAG
            1.4.11)
            <br />
            Semantic HTML with proper text semantics (WCAG 1.3.1)
          </Text>
        </div>
      </div>
    </div>
  ),
};
// TODO: Updated story when we have our own ul li components ^
