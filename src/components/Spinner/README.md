# Spinner

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"but Miss Kobayashi saved me."_

Loading indicator component with customizable size, speed, and color presets.

## Basic Usage

```tsx
import { Spinner } from "@markfoster314/marduk";

// Basic usage
<Spinner />

// With label
<Spinner label="Loading data..." />

// Custom size and speed
<Spinner size="large" speed="fast" />

// With preset
<Spinner preset={["primary"]} />
```

## Sizes

Three size options:

```tsx
<Spinner size="small" />   // Small spinner
<Spinner size="medium" />  // Medium spinner (default)
<Spinner size="large" />  // Large spinner
```

**Use cases:**

- `small` - Inline with text, buttons, compact spaces
- `medium` - Standard loading states (default)
- `large` - Full page loading, prominent indicators

## Speeds

Control animation speed:

```tsx
<Spinner speed="slow" />   // Slow animation
<Spinner speed="normal" /> // Normal speed (default)
<Spinner speed="fast" />   // Fast animation
```

**Speed options:**

- `slow` - Slower, more relaxed animation
- `normal` - Standard speed (default)
- `fast` - Faster, more energetic animation

## Labels

Add optional loading text:

```tsx
<Spinner label="Loading data..." />
<Spinner label="Processing request" />
<Spinner label="Please wait" />
```

The label:

- Appears below the spinner
- Updates `aria-label` for accessibility
- Can be styled via CSS variables

## Preset System

Presets provide composable, type-safe styling configurations:

```tsx
// Light mode presets
<Spinner preset={["primary"]} />
<Spinner preset={["success"]} />
<Spinner preset={["warning"]} />
<Spinner preset={["danger"]} />

// Dark mode presets
<Spinner preset={["primaryDark"]} />
<Spinner preset={["successDark"]} />
<Spinner preset={["warningDark"]} />
<Spinner preset={["dangerDark"]} />

// Combine multiple presets
<Spinner preset={["primary", "success"]} />
```

### Built-in Presets

**Light Mode:**

- `primary` - Primary brand color
- `secondary` - Secondary color
- `success` - Success/green color
- `warning` - Warning/yellow color
- `danger` - Danger/red color

**Dark Mode:**

- `primaryDark` - Primary color for dark backgrounds
- `secondaryDark` - Secondary color for dark backgrounds
- `successDark` - Success color for dark backgrounds
- `warningDark` - Warning color for dark backgrounds
- `dangerDark` - Danger color for dark backgrounds

### Custom Presets

Define your own presets:

```tsx
import { defineSpinnerPresets } from "@markfoster314/marduk";

defineSpinnerPresets({
  premium: {
    size: "large",
    style: {
      "--spinner-color": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
  },
  subtle: {
    style: {
      "--spinner-color": "rgba(0, 0, 0, 0.3)",
    },
  },
});

<Spinner preset={["premium"]} />;
```

## Polymorphic

Render as any element while maintaining spinner styles:

```tsx
<Spinner as="div" />   // Div element (default)
<Spinner as="span" />  // Span element
<Spinner as="button" /> // Button element
```

Non-semantic elements automatically get `role="status"` for accessibility.

## Custom Styling

Override styles using CSS variables or inline styles:

```tsx
// Custom color
<Spinner
  style={
    {
      "--spinner-color": "#8b5cf6",
    } as React.CSSProperties
  }
/>

// Custom size (via style)
<Spinner
  style={
    {
      width: "60px",
      height: "60px",
    } as React.CSSProperties
  }
/>

// Custom label styling
<Spinner
  label="Loading"
  style={
    {
      "--spinner-label-color": "#10b981",
      "--spinner-label-font-weight": "600",
    } as React.CSSProperties
  }
/>
```

### Available CSS Variables

```css
--spinner-color           /* Spinner circle color */
--spinner-label-color     /* Label text color */
--spinner-label-font-size /* Label font size */
--spinner-label-font-weight /* Label font weight */
```

## Real-World Examples

### Button Loading State

```tsx
<Box
  style={{
    border: "1px solid gray",
    borderRadius: "6px",
    padding: "8px 16px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  }}
>
  <Spinner size="small" />
  <Text size="sm">Saving...</Text>
</Box>
```

### Page Loading State

```tsx
<Box
  style={{
    border: "1px solid gray",
    borderRadius: "8px",
    padding: "40px",
    textAlign: "center",
  }}
>
  <Spinner size="large" label="Loading page content..." />
</Box>
```

### Inline Loading

```tsx
<Box preset={["hstack"]} gap="sm" align="center">
  <Text>Fetching data</Text>
  <Spinner size="small" />
</Box>
```

### Status Indicators

```tsx
<Box preset={["stack"]} gap="sm">
  <Box preset={["hstack"]} gap="sm" align="center">
    <Spinner preset={["success"]} size="small" />
    <Text size="sm">Connection established</Text>
  </Box>
  <Box preset={["hstack"]} gap="sm" align="center">
    <Spinner preset={["warning"]} size="small" />
    <Text size="sm">Syncing data...</Text>
  </Box>
  <Box preset={["hstack"]} gap="sm" align="center">
    <Spinner preset={["danger"]} size="small" />
    <Text size="sm">Error occurred</Text>
  </Box>
</Box>
```

## Accessibility

- `role="status"` applied automatically
- `aria-label` set to label text or "Loading" if no label
- `aria-live="polite"` for live region announcements
- Screen reader friendly

## Props

| Prop        | Type                             | Default    | Description              |
| ----------- | -------------------------------- | ---------- | ------------------------ |
| `size`      | `"small" \| "medium" \| "large"` | `"medium"` | Spinner size             |
| `speed`     | `"slow" \| "normal" \| "fast"`   | `"normal"` | Animation speed          |
| `label`     | `string`                         | -          | Optional loading label   |
| `preset`    | `string[]`                       | `[]`       | Preset configurations    |
| `as`        | `ElementType`                    | `"div"`    | Polymorphic element type |
| `className` | `string`                         | -          | Additional CSS classes   |
| `style`     | `CSSProperties`                  | -          | Inline styles            |

Plus all standard HTML element props.

## Testing

Data attributes are included for E2E testing:

```tsx
<Spinner size="large" speed="fast" preset={["primary"]} />
// data-size="large"
// data-speed="fast"
// data-preset="primary"
```

Available attributes: `data-size`, `data-speed`, `data-preset`

---

For more examples, check out the Storybook stories.
