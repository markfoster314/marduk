# Divider

Visual separator component with orientation, thickness, and label support.

## Basic Usage

```tsx
import { Divider } from "@markfoster314/marduk";

// Basic horizontal divider
<Divider />

// With label
<Divider label="Section" />

// Vertical divider
<Divider orientation="vertical" />

// Custom thickness
<Divider thickness="thick" />

// With preset
<Divider preset={["primary"]} />
```

## Orientation

Dividers can be horizontal (default) or vertical:

```tsx
// Horizontal (default)
<Divider />

// Vertical - useful in navigation or sidebars
<Box preset={["hstack"]} gap="md" style={{ height: "100px" }}>
  <Text>Left</Text>
  <Divider orientation="vertical" />
  <Text>Right</Text>
</Box>
```

## Thickness

Three thickness options:

```tsx
<Divider thickness="thin" />   // 1px
<Divider thickness="medium" /> // 2px (default)
<Divider thickness="thick" />  // 4px
```

## Spacing

Control spacing around the divider:

```tsx
<Divider spacing="none" />   // No margin
<Divider spacing="small" /> // Small margin
<Divider spacing="medium" /> // Medium margin (default)
<Divider spacing="large" />  // Large margin
```

Spacing is applied as margin-top/margin-bottom for horizontal dividers and margin-left/margin-right for vertical dividers.

## Labels

Add optional labels to dividers:

```tsx
// Simple text label
<Divider label="Section" />

// Custom ReactNode label
<Divider
  label={
    <span>
      Custom <strong>Label</strong>
    </span>
  }
/>

// Label with preset
<Divider preset={["primary"]} label="Featured Section" />
```

When a label is provided, the divider renders in a wrapper with the label centered between two divider lines.

## Preset System

Presets provide composable, type-safe styling configurations:

```tsx
// Built-in presets
<Divider preset={["subtle"]} />
<Divider preset={["bold"]} />
<Divider preset={["primary"]} />
<Divider preset={["dark"]} />

// Combine multiple presets
<Divider preset={["subtle", "primary"]} />
```

### Built-in Presets

- **`subtle`** - Thin divider with light gray color
- **`bold`** - Thick divider with darker gray color
- **`primary`** - Medium divider with primary brand color
- **`dark`** - Medium divider optimized for dark backgrounds

### Custom Presets

Define your own presets:

```tsx
import { defineDividerPresets } from "@markfoster314/marduk";

defineDividerPresets({
  premium: {
    thickness: "thick",
    style: {
      "--divider-color": "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    },
  },
  dashed: {
    thickness: "thin",
    style: {
      "--divider-color": "transparent",
      borderTop: "2px dashed var(--marduk-color-gray-400)",
    },
  },
});

<Divider preset={["premium"]} />;
```

## Polymorphic

Render as any element while maintaining divider styles:

```tsx
<Divider as="hr" />   // Semantic HTML (default)
<Divider as="div" />  // Div element
<Divider as="span" /> // Span element
```

Non-semantic elements automatically get `role="separator"` for accessibility.

## Custom Styling

Override styles using CSS variables or inline styles:

```tsx
// Custom color
<Divider
  style={
    {
      "--divider-color": "#8b5cf6",
    } as React.CSSProperties
  }
/>

// Custom thickness
<Divider
  style={
    {
      "--divider-thickness": "6px",
    } as React.CSSProperties
  }
/>

// Gradient divider
<Divider
  style={
    {
      "--divider-color": "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
      "--divider-thickness": "3px",
    } as React.CSSProperties
  }
/>
```

### Available CSS Variables

```css
--divider-color      /* Divider color (default: gray-300) */
--divider-thickness  /* Divider thickness (default: 1px) */
--divider-spacing    /* Spacing around divider */
```

## Responsive Design

Divider spacing scales automatically across three breakpoints:

- **Mobile** (0-767px): Base spacing (1.0×)
- **Tablet** (768px+): ~15% larger spacing
- **Desktop** (1024px+): ~30% larger spacing

No configuration needed - spacing scales proportionally for better visual balance.

## Accessibility

- Semantic `hr` element by default
- `role="separator"` applied automatically
- `aria-label` added when label is a string
- WCAG 2.1 compliant

## Props

| Prop          | Type                                       | Default        | Description              |
| ------------- | ------------------------------------------ | -------------- | ------------------------ |
| `orientation` | `"horizontal" \| "vertical"`               | `"horizontal"` | Divider orientation      |
| `thickness`   | `"thin" \| "medium" \| "thick"`            | `"medium"`     | Divider thickness        |
| `label`       | `ReactNode`                                | -              | Optional label text      |
| `spacing`     | `"none" \| "small" \| "medium" \| "large"` | `"medium"`     | Spacing around divider   |
| `preset`      | `string[]`                                 | `[]`           | Preset configurations    |
| `as`          | `ElementType`                              | `"hr"`         | Polymorphic element type |
| `className`   | `string`                                   | -              | Additional CSS classes   |
| `style`       | `CSSProperties`                            | -              | Inline styles            |

Plus all standard HTML element props.

## Testing

Data attributes are included for E2E testing:

```tsx
<Divider orientation="vertical" thickness="thick" spacing="large" />
// data-orientation="vertical"
// data-thickness="thick"
// data-spacing="large"
// data-preset="..." (if preset provided)
```

Available attributes: `data-orientation`, `data-thickness`, `data-spacing`, `data-preset`

---

For more examples, check out the Storybook stories.
