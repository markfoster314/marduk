# Skeleton

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"but Miss Kobayashi saved me."_

Loading placeholder component with shape variants, animations, and multiple item support.

## Basic Usage

```tsx
import { Skeleton } from "@markfoster314/marduk";

// Basic usage
<Skeleton />

// Custom shape and size
<Skeleton shape="circle" width="50px" height="50px" />

// Multiple skeletons
<Skeleton count={3} />

// With preset
<Skeleton preset={["text"]} />

// Custom animation
<Skeleton animation="wave" />
```

## Shapes

Three shape options for different content types:

```tsx
<Skeleton shape="text" />        // Text lines (default)
<Skeleton shape="circle" />      // Circular (avatars, icons)
<Skeleton shape="rectangle" />   // Rectangular (images, cards)
```

**Use cases:**

- `text` - For text content, paragraphs, lines
- `circle` - For avatars, profile pictures, icons
- `rectangle` - For images, cards, banners

## Animations

Three animation types:

```tsx
<Skeleton animation="pulse" />  // Smooth pulse (default)
<Skeleton animation="wave" />   // Shimmer wave effect
<Skeleton animation="none" />   // No animation
```

**Animation types:**

- `pulse` - Smooth opacity pulse (default)
- `wave` - Shimmer wave effect
- `none` - Static, no animation

## Sizing

Control skeleton dimensions:

```tsx
// Fixed width
<Skeleton width="200px" />

// Fixed height
<Skeleton height="50px" />

// Fixed dimensions
<Skeleton width="300px" height="20px" />

// Percentage width
<Box style={{ width: "400px" }}>
  <Skeleton width="75%" />
</Box>

// Number values (pixels)
<Skeleton width={250} height={30} />
```

Width and height can be strings (`"200px"`, `"50%"`) or numbers (pixels).

## Multiple Items

Render multiple skeleton items at once:

```tsx
// Three skeleton items
<Skeleton count={3} />

// Custom count with styling
<Skeleton count={5} width="100%" style={{ marginBottom: "8px" }} />
```

When `count > 1`, only the first skeleton receives ARIA attributes for accessibility.

## Preset System

Presets provide composable, type-safe styling configurations:

```tsx
// Built-in presets
<Skeleton preset={["text"]} />
<Skeleton preset={["title"]} />
<Skeleton preset={["avatar"]} />
<Skeleton preset={["button"]} />

// Combine multiple presets
<Skeleton preset={["text", "title"]} />
```

### Built-in Presets

- **`text`** - Standard text line skeleton
- **`title`** - Larger title/heading skeleton
- **`avatar`** - Circular avatar skeleton
- **`button`** - Button-shaped skeleton

### Custom Presets

Define your own presets:

```tsx
import { defineSkeletonPresets } from "@markfoster314/marduk";

defineSkeletonPresets({
  card: {
    shape: "rectangle",
    width: "100%",
    height: "200px",
    style: {
      borderRadius: "8px",
    },
  },
  listItem: {
    shape: "text",
    width: "100%",
    height: "20px",
    style: {
      marginBottom: "8px",
    },
  },
});

<Skeleton preset={["card"]} />;
```

## Polymorphic

Render as any element while maintaining skeleton styles:

```tsx
<Skeleton as="div" />   // Div element (default)
<Skeleton as="span" />  // Span element
<Skeleton as="p" />     // Paragraph element
```

Non-semantic elements automatically get `role="status"` for accessibility.

## Custom Styling

Override styles using CSS variables or inline styles:

```tsx
// Custom color
<Skeleton
  style={
    {
      "--skeleton-bg": "#e0e7ff",
      "--skeleton-highlight": "#c7d2fe",
    } as React.CSSProperties
  }
/>

// Custom border radius
<Skeleton
  width="200px"
  height="50px"
  style={
    {
      borderRadius: "12px",
    } as React.CSSProperties
  }
/>

// Custom opacity
<Skeleton
  style={
    {
      opacity: "0.5",
    } as React.CSSProperties
  }
/>
```

### Available CSS Variables

```css
--skeleton-bg           /* Background color */
--skeleton-highlight    /* Highlight/shimmer color */
```

## Real-World Examples

### Card Loading State

```tsx
<Box style={{ border: "1px solid gray", padding: "16px", borderRadius: "8px" }}>
  <Box preset={["hstack"]} gap="md">
    <Skeleton preset={["avatar"]} />
    <Box preset={["stack"]} gap="xs" style={{ flex: 1 }}>
      <Skeleton preset={["title"]} />
      <Skeleton width="60%" />
    </Box>
  </Box>
  <Skeleton count={3} width="100%" style={{ marginBottom: "8px" }} />
</Box>
```

### List Loading State

```tsx
<Box preset={["stack"]} gap="md">
  {Array.from({ length: 3 }).map((_, i) => (
    <Box key={i} preset={["hstack"]} gap="md">
      <Skeleton shape="circle" width="40px" height="40px" />
      <Box preset={["stack"]} gap="xs" style={{ flex: 1 }}>
        <Skeleton width="80%" />
        <Skeleton width="60%" />
      </Box>
    </Box>
  ))}
</Box>
```

### Article Loading State

```tsx
<Box preset={["stack"]} gap="md">
  <Skeleton shape="rectangle" width="100%" height="200px" />
  <Skeleton preset={["title"]} />
  <Skeleton count={4} />
</Box>
```

## Accessibility

- `role="status"` applied automatically
- `aria-label="Loading content"` for screen readers
- `aria-live="polite"` for live region announcements
- When `count > 1`, only first skeleton has ARIA attributes

## Props

| Prop        | Type                                | Default   | Description              |
| ----------- | ----------------------------------- | --------- | ------------------------ |
| `shape`     | `"text" \| "circle" \| "rectangle"` | `"text"`  | Skeleton shape           |
| `animation` | `"pulse" \| "wave" \| "none"`       | `"pulse"` | Animation type           |
| `width`     | `string \| number`                  | -         | Skeleton width           |
| `height`    | `string \| number`                  | -         | Skeleton height          |
| `count`     | `number`                            | `1`       | Number of skeleton items |
| `preset`    | `string[]`                          | `[]`      | Preset configurations    |
| `as`        | `ElementType`                       | `"div"`   | Polymorphic element type |
| `className` | `string`                            | -         | Additional CSS classes   |
| `style`     | `CSSProperties`                     | -         | Inline styles            |

Plus all standard HTML element props.

## Testing

Data attributes are included for E2E testing:

```tsx
<Skeleton shape="circle" animation="wave" count={3} />
// data-shape="circle"
// data-animation="wave"
// data-preset="..." (if preset provided)
```

Available attributes: `data-shape`, `data-animation`, `data-preset`

---

For more examples, check out the Storybook stories.
