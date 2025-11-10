import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, Title, Button, Link, Svg, ThumbsUpIcon, CircleInfoIcon } from "@/index";

const ResponsiveDemo = () => {
  return (
    <Box preset={["stack"]} gap="xl" style={{ maxWidth: "800px", margin: "0 auto" }}>
      {/* Header */}
      <Box preset={["stack"]} gap="sm">
        <Title level={1}>Responsive Scaling Demo</Title>
        <Text preset={["muted"]}>
          Resize your browser window to see how all components scale uniformly at 768px and 1024px
          breakpoints.
        </Text>
      </Box>

      {/* Breakpoint Indicators */}
      <Box preset={["stack"]} gap="sm" padding="md" backgroundColor="#f0f9ff" borderRadius="md">
        <Text weight="semibold">Current Scaling:</Text>
        <Box preset={["stack"]} gap="xs">
          <Text size="sm">Mobile (0-767px): Base size (1.0x)</Text>
          <Text size="sm">Tablet (768px+): 15% larger (1.15x)</Text>
          <Text size="sm">Desktop (1024px+): 30% larger (1.30x)</Text>
        </Box>
      </Box>

      {/* Text Sizes Demo */}
      <Box preset={["stack"]} gap="md">
        <Title level={3}>Text Component</Title>
        <Box preset={["stack"]} gap="sm">
          <Text size="xs">Extra Small Text (xs)</Text>
          <Text size="sm">Small Text (sm)</Text>
          <Text size="md">Medium Text (md)</Text>
          <Text size="lg">Large Text (lg)</Text>
          <Text size="xl">Extra Large Text (xl)</Text>
        </Box>
      </Box>

      {/* Button Sizes Demo */}
      <Box preset={["stack"]} gap="md">
        <Title level={3}>Button Component</Title>
        <Box preset={["hstack"]} gap="md" wrap="wrap">
          <Button size="small" preset={["primary"]} appearance="filled">
            Small Button
          </Button>
          <Button size="medium" preset={["primary"]} appearance="filled">
            Medium Button
          </Button>
          <Button size="large" preset={["primary"]} appearance="filled">
            Large Button
          </Button>
        </Box>
      </Box>

      {/* Link Sizes Demo */}
      <Box preset={["stack"]} gap="md">
        <Title level={3}>Link Component</Title>
        <Box preset={["stack"]} gap="sm">
          <Link href="#" size="xs" leftIcon={<CircleInfoIcon size="small" />}>
            Extra Small Link (xs)
          </Link>
          <Link href="#" size="sm" leftIcon={<CircleInfoIcon size="small" />}>
            Small Link (sm)
          </Link>
          <Link href="#" size="md" leftIcon={<CircleInfoIcon size="small" />}>
            Medium Link (md)
          </Link>
          <Link href="#" size="lg" leftIcon={<CircleInfoIcon size="small" />}>
            Large Link (lg)
          </Link>
          <Link href="#" size="xl" leftIcon={<CircleInfoIcon size="small" />}>
            Extra Large Link (xl)
          </Link>
        </Box>
      </Box>

      {/* Svg Sizes Demo */}
      <Box preset={["stack"]} gap="md">
        <Title level={3}>Svg Component</Title>
        <Box preset={["hstack"]} gap="md" align="center">
          <Svg size="xs" color="var(--marduk-color-primary-500)">
            <ThumbsUpIcon />
          </Svg>
          <Svg size="small" color="var(--marduk-color-primary-500)">
            <ThumbsUpIcon />
          </Svg>
          <Svg size="medium" color="var(--marduk-color-primary-500)">
            <ThumbsUpIcon />
          </Svg>
          <Svg size="large" color="var(--marduk-color-primary-500)">
            <ThumbsUpIcon />
          </Svg>
          <Svg size="xl" color="var(--marduk-color-primary-500)">
            <ThumbsUpIcon />
          </Svg>
        </Box>
      </Box>

      {/* Comparison with Title */}
      <Box preset={["stack"]} gap="md">
        <Title level={3}>Title Component (Semantic Scaling)</Title>
        <Box preset={["stack"]} gap="sm" padding="md" backgroundColor="#fef3c7" borderRadius="md">
          <Text size="sm" weight="semibold">
            Note: Title uses semantic heading scales, not uniform multipliers
          </Text>
          <Title level={1}>Heading 1</Title>
          <Title level={2}>Heading 2</Title>
          <Title level={3}>Heading 3</Title>
        </Box>
      </Box>

      {/* Practical Example */}
      <Box preset={["stack"]} gap="md">
        <Title level={3}>Real-World Example</Title>
        <Box preset={["card"]} gap="lg" padding="lg">
          <Box preset={["hstack"]} gap="lg" align="center">
            <Svg size="large" color="var(--marduk-color-success-500)">
              <CircleInfoIcon />
            </Svg>
            <Box preset={["stack"]} gap="sm">
              <Title level={4}>Feature Announcement</Title>
              <Text size="sm" preset={["muted"]}>
                All components now scale uniformly for better UX
              </Text>
            </Box>
          </Box>
          <Box preset={["hstack"]} gap="md" justify="center" style={{ paddingTop: "8px" }}>
            <Button size="medium" preset={["primary"]} appearance="filled">
              Learn More
            </Button>
            <Link href="#" size="md">
              Documentation
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Instructions */}
      <Box preset={["stack"]} gap="sm" padding="md" backgroundColor="#f0fdf4" borderRadius="md">
        <Text weight="semibold">Try It Yourself</Text>
        <Text size="sm">
          Open your browser&apos;s DevTools (F12) and toggle device toolbar. Switch between mobile,
          tablet, and desktop viewports to see the smooth, consistent scaling in action.
        </Text>
      </Box>
    </Box>
  );
};

const meta: Meta = {
  title: "System/Responsive Scaling",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Demonstration of the uniform responsive scaling system. All components (Text, Button, Link, Svg) scale by 15% at tablet (768px+) and 30% at desktop (1024px+) for consistent UI transitions.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: () => <ResponsiveDemo />,
};

export const ComparisonView: Story = {
  render: () => (
    <Box preset={["stack"]} gap="xl">
      <Box preset={["stack"]} gap="md">
        <Title level={2}>Uniform Scaling Components</Title>
        <Text preset={["muted"]}>
          These use uniform multipliers (x1.15 at tablet, x1.30 at desktop)
        </Text>
        <Box preset={["stack"]} gap="lg" padding="lg" backgroundColor="#f0f9ff" borderRadius="md">
          <Box preset={["hstack"]} gap="md" align="center" wrap="wrap">
            <Text size="md">Text (md)</Text>
            <Button size="medium" preset={["primary"]} appearance="filled">
              Button (md)
            </Button>
            <Link href="#" size="md">
              Link (md)
            </Link>
            <Svg size="medium" color="var(--marduk-color-primary-500)">
              <ThumbsUpIcon />
            </Svg>
          </Box>
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Title level={2}>Semantic Scaling Component</Title>
        <Text preset={["muted"]}>
          Title uses intentional heading hierarchy (different ratios per level)
        </Text>
        <Box preset={["stack"]} gap="md" padding="lg" backgroundColor="#fef3c7" borderRadius="md">
          <Title level={1}>Heading 1</Title>
          <Title level={2}>Heading 2</Title>
          <Title level={3}>Heading 3</Title>
        </Box>
      </Box>
    </Box>
  ),
};
