# Box

<div align="center">
  <img src="../../../docs/images/touhou.png" alt="Touhou from Touhou" width="400">
</div>

_"Cool, I only get weekends off."_

Polymorphic layout primitive

## Basic Usage

```tsx
import { Box } from "@markfoster314/marduk";

<Box padding="md">Content</Box>;
```

## Presets

- `stack` - Vertical layout with gap
- `hstack` - Horizontal layout with gap
- `center` - Centered content
- `card` - Card-like container (light)
- `darkCard` - Card-like container (dark)
- `grid2` - 2-column grid
- `grid3` - 3-column grid
- `spaceBetween` - Flex with space-between
- `sidebar` - Sidebar layout
- `header` - Header layout
- `footer` - Footer layout

### Quick Examples

```tsx
<Box preset={["stack"]}>...</Box>

<Box preset={["stack", "card"]}>...</Box>

<Box preset={["stack"]} gap="xl">...</Box>
```

## Spacing

Use design tokens for consistent padding and margin.

```tsx
<Box padding="lg">Padded content</Box>
<Box margin="md">Content with margin</Box>
<Box padding="xl" margin="sm">
  Both padding and margin
</Box>
```

Available sizes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`

## Flex Layouts

Common flex patterns.

```tsx
// Horizontal layout with gap
<Box display="flex" direction="row" gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
</Box>

// Centered content
<Box display="flex" justify="center" align="center" height="200px">
  <div>Centered</div>
</Box>

// Space between
<Box display="flex" justify="between" padding="md">
  <div>Left</div>
  <div>Right</div>
</Box>

// Column layout
<Box display="flex" direction="column" gap="sm">
  <div>Item 1</div>
  <div>Item 2</div>
</Box>
```

## Polymorphic Rendering

Render as any semantic HTML element.

```tsx
<Box as="section" padding="lg">
  Section content
</Box>

<Box as="article" padding="md">
  Article content
</Box>

<Box as="nav" display="flex" gap="md">
  Navigation items
</Box>
```

## Dimensions

Set width and height with any CSS value.

```tsx
<Box width="200px" height="100px">
  Fixed dimensions
</Box>

<Box width="50%" height="auto">
  Percentage width
</Box>

<Box width="100%" height="100vh">
  Full width and viewport height
</Box>
```

## Customization

Override CSS variables for custom styling.

```tsx
<Box
  padding="lg"
  style={{
    "--box-bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "--box-border-radius": "20px",
  }}
>
  Custom gradient background
</Box>
```

Available variables: `--box-bg`, `--box-border-radius`, `--box-padding`, `--box-margin`, `--box-gap`

## Props

| Prop              | Type                                                      | Default | Description                 |
| ----------------- | --------------------------------------------------------- | ------- | --------------------------- |
| `as`              | `ElementType`                                             | `div`   | HTML element to render      |
| `preset`          | `string[]`                                                | -       | Layout preset name(s)       |
| `padding`         | `xs \| sm \| md \| lg \| xl \| 2xl \| 3xl`                | -       | Padding size                |
| `margin`          | `xs \| sm \| md \| lg \| xl \| 2xl \| 3xl`                | -       | Margin size                 |
| `display`         | `flex \| grid \| block \| inline-block \| inline \| none` | -       | CSS display property        |
| `direction`       | `row \| column \| row-reverse \| column-reverse`          | -       | Flex direction              |
| `justify`         | `start \| end \| center \| between \| around \| evenly`   | -       | Flex justify-content        |
| `align`           | `start \| end \| center \| baseline \| stretch`           | -       | Flex align-items            |
| `gap`             | `xs \| sm \| md \| lg \| xl \| 2xl \| 3xl`                | -       | Gap between flex/grid items |
| `wrap`            | `nowrap \| wrap \| wrap-reverse`                          | -       | Flex wrap                   |
| `width`           | `string`                                                  | -       | Width (any CSS value)       |
| `height`          | `string`                                                  | -       | Height (any CSS value)      |
| `borderRadius`    | `sm \| md \| lg \| full`                                  | -       | Border radius size          |
| `backgroundColor` | `string`                                                  | -       | Background color            |
| `style`           | `CSSProperties`                                           | -       | Custom inline styles        |
| `className`       | `string`                                                  | -       | Additional CSS classes      |

Plus all standard HTML element props based on the `as` prop.

## Testing

Data attributes included for E2E testing: `data-preset`, `data-padding`, `data-margin`, `data-display`, `data-flex`

```tsx
<Box preset={["stack"]} padding="md">
  Content
</Box>
// data-preset="stack"
// data-padding="md"

<Box preset={["stack", "card"]}>
  Content
</Box>
// data-preset="stack,card"
```

## Accessibility

- Fully polymorphic - use semantic HTML elements
- Transitions disabled when `prefers-reduced-motion` is set
- Forwards all aria attributes and custom props

---

For more examples, check out the Storybook stories.

THX 4 READING
