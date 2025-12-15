import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";
import { Box, Text } from "@/index";
import { STORYBOOK_STATUS } from "@/utils/storybook/constants";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: STORYBOOK_STATUS.READY,
    },
  },
  tags: ["autodocs", "status:ready"],
  argTypes: {
    src: {
      control: "text",
      description: "Image source URL",
    },
    alt: {
      control: "text",
      description: "Alt text (required)",
    },
    objectFit: {
      control: { type: "select" },
      options: ["contain", "cover", "fill", "none", "scale-down"],
      description: "Object fit style",
      table: {
        defaultValue: { summary: "cover" },
      },
    },
    aspectRatio: {
      control: { type: "select" },
      options: ["1:1", "4:3", "16:9", "21:9", "auto"],
      description: "Aspect ratio",
      table: {
        defaultValue: { summary: "auto" },
      },
    },
    lazy: {
      control: { type: "boolean" },
      description: "Enable lazy loading",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    placeholder: {
      control: "text",
      description: "Placeholder image URL",
    },
    preset: {
      control: { type: "multi-select" },
      options: ["rounded", "circle", "thumbnail", "cover"],
      description: "Preset configurations",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/400x300",
    alt: "Placeholder image",
  },
};

export const ObjectFit: Story = {
  render: () => (
    <Box preset={["stack"]} gap="lg">
      <Image
        src="https://via.placeholder.com/200x300"
        alt="Contain"
        objectFit="contain"
        width="200"
        height="200"
      />
      <Image
        src="https://via.placeholder.com/200x300"
        alt="Cover"
        objectFit="cover"
        width="200"
        height="200"
      />
    </Box>
  ),
};

export const AspectRatios: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Image src="https://via.placeholder.com/400x400" alt="1:1" aspectRatio="1:1" width="200" />
      <Image src="https://via.placeholder.com/400x300" alt="4:3" aspectRatio="4:3" width="200" />
      <Image src="https://via.placeholder.com/400x225" alt="16:9" aspectRatio="16:9" width="200" />
    </Box>
  ),
};

export const Presets: Story = {
  render: () => (
    <Box preset={["stack"]} gap="lg">
      <Box preset={["hstack"]} gap="md" align="center">
        <Image
          src="https://via.placeholder.com/100"
          alt="Rounded"
          preset={["rounded"]}
          width="100"
          height="100"
        />
        <Image
          src="https://via.placeholder.com/100"
          alt="Circle"
          preset={["circle"]}
          width="100"
          height="100"
        />
        <Image src="https://via.placeholder.com/100" alt="Thumbnail" preset={["thumbnail"]} />
      </Box>
      <Box>
        <Image
          src="https://via.placeholder.com/800x400"
          alt="Cover"
          preset={["cover"]}
          height="300"
        />
      </Box>
    </Box>
  ),
};

export const LazyLoading: Story = {
  render: () => (
    <Box preset={["stack"]} gap="md">
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Lazy Loading (default):</Text>
        <Text size="sm" preset={["muted"]}>
          Images load only when they enter the viewport
        </Text>
        <Image src="https://via.placeholder.com/400x300" alt="Lazy loaded image" />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Eager Loading:</Text>
        <Text size="sm" preset={["muted"]}>
          Image loads immediately
        </Text>
        <Image src="https://via.placeholder.com/400x300" alt="Eager loaded image" lazy={false} />
      </Box>
    </Box>
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <Box preset={["stack"]} gap="lg">
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">With Placeholder:</Text>
        <Text size="sm" preset={["muted"]}>
          Placeholder shows while loading and on error
        </Text>
        <Image
          src="https://via.placeholder.com/400x300"
          alt="Image with placeholder"
          placeholder="https://via.placeholder.com/400x300/cccccc/666666?text=Loading..."
          width="400"
          height="300"
        />
      </Box>
    </Box>
  ),
};

export const ErrorHandling: Story = {
  render: () => (
    <Box preset={["stack"]} gap="lg">
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Error with Placeholder:</Text>
        <Text size="sm" preset={["muted"]}>
          Shows placeholder image when main image fails
        </Text>
        <Image
          src="invalid-image-url.jpg"
          alt="Failed image"
          placeholder="https://via.placeholder.com/400x300/ffcccc/cc0000?text=Fallback"
          width="400"
          height="300"
        />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Error without Placeholder:</Text>
        <Text size="sm" preset={["muted"]}>
          Shows error message when no placeholder provided
        </Text>
        <Image src="invalid-image-url.jpg" alt="Failed image" width="400" height="300" />
      </Box>
    </Box>
  ),
};

export const Sizing: Story = {
  render: () => (
    <Box preset={["stack"]} gap="lg">
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Fixed Width:</Text>
        <Image src="https://via.placeholder.com/400x300" alt="Fixed width" width="200" />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Fixed Height:</Text>
        <Image src="https://via.placeholder.com/400x300" alt="Fixed height" height="150" />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Fixed Width and Height:</Text>
        <Image
          src="https://via.placeholder.com/400x300"
          alt="Fixed dimensions"
          width="300"
          height="200"
        />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Responsive (max-width: 100%):</Text>
        <Box style={{ maxWidth: "500px", border: "1px solid #e5e7eb", padding: "8px" }}>
          <Image src="https://via.placeholder.com/800x600" alt="Responsive" />
        </Box>
      </Box>
    </Box>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <Box preset={["stack"]} gap="xl" style={{ maxWidth: "800px" }}>
      <Box preset={["stack"]} gap="md">
        <Text weight="semibold" size="lg">
          Product Gallery
        </Text>
        <Box preset={["hstack"]} gap="md" wrap="wrap">
          <Image
            src="https://via.placeholder.com/200x200"
            alt="Product 1"
            preset={["rounded"]}
            aspectRatio="1:1"
            width="200"
          />
          <Image
            src="https://via.placeholder.com/200x200"
            alt="Product 2"
            preset={["rounded"]}
            aspectRatio="1:1"
            width="200"
          />
          <Image
            src="https://via.placeholder.com/200x200"
            alt="Product 3"
            preset={["rounded"]}
            aspectRatio="1:1"
            width="200"
          />
        </Box>
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text weight="semibold" size="lg">
          Hero Image
        </Text>
        <Image
          src="https://via.placeholder.com/800x450"
          alt="Hero"
          preset={["cover"]}
          aspectRatio="16:9"
          height="400"
        />
      </Box>

      <Box preset={["stack"]} gap="md">
        <Text weight="semibold" size="lg">
          Avatar Images
        </Text>
        <Box preset={["hstack"]} gap="md">
          <Image
            src="https://via.placeholder.com/80x80"
            alt="User 1"
            preset={["circle"]}
            width="80"
            height="80"
          />
          <Image
            src="https://via.placeholder.com/80x80"
            alt="User 2"
            preset={["circle"]}
            width="80"
            height="80"
          />
          <Image
            src="https://via.placeholder.com/80x80"
            alt="User 3"
            preset={["circle"]}
            width="80"
            height="80"
          />
        </Box>
      </Box>
    </Box>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Box preset={["stack"]} gap="lg">
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Custom Border:</Text>
        <Image
          src="https://via.placeholder.com/300x200"
          alt="Custom border"
          style={
            {
              border: "4px solid #8b5cf6",
              borderRadius: "12px",
            } as React.CSSProperties
          }
          width="300"
          height="200"
        />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Custom Shadow:</Text>
        <Image
          src="https://via.placeholder.com/300x200"
          alt="Custom shadow"
          style={
            {
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
            } as React.CSSProperties
          }
          width="300"
          height="200"
        />
      </Box>
      <Box preset={["stack"]} gap="sm">
        <Text weight="semibold">Custom Opacity:</Text>
        <Image
          src="https://via.placeholder.com/300x200"
          alt="Custom opacity"
          style={
            {
              opacity: "0.7",
            } as React.CSSProperties
          }
          width="300"
          height="200"
        />
      </Box>
    </Box>
  ),
};
