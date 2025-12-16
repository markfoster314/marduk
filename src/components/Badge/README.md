# Badge

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"but Miss Kobayashi saved me."_

Status indicators and labels for highlighting information

## Basic Usage

```tsx
import { Badge } from "@markfoster314/marduk";

<Badge preset={["primary"]}>New</Badge>
<Badge preset={["success"]}>Active</Badge>
<Badge preset={["danger"]}>Error</Badge>
```

## Preset System

Presets provide composable, type-safe styling configurations:

```tsx
// Color presets
<Badge preset={["primary"]}>Primary</Badge>
<Badge preset={["success"]}>Success</Badge>

// Dark mode presets
<Badge preset={["primaryDark"]}>Primary Dark</Badge>
<Badge preset={["successDark"]}>Success Dark</Badge>
```

### Built-in Presets

**Colors (Light):**

- `primary`, `secondary`, `success`, `warning`, `danger`, `info`

**Colors (Dark):**

- `primaryDark`, `secondaryDark`, `successDark`, `warningDark`, `dangerDark`, `infoDark`

### Custom Presets

Define your own presets:

```tsx
import { defineBadgePresets } from "@markfoster314/marduk";

defineBadgePresets({
  premium: {
    size: "large",
    style: {
      "--badge-bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "--badge-color": "white",
    },
  },
  subtle: {
    style: {
      "--badge-bg": "rgba(0, 0, 0, 0.05)",
      "--badge-color": "var(--marduk-color-gray-700)",
    },
  },
});

<Badge preset={["premium"]}>Premium</Badge>;
```

## Sizes

Three sizes with responsive scaling:

```tsx
<Badge preset={["primary"]} size="small">Small</Badge>
<Badge preset={["primary"]} size="medium">Medium</Badge>
<Badge preset={["primary"]} size="large">Large</Badge>
```

## Count Display

Display numbers with automatic 99+ formatting:

```tsx
<Badge preset={["danger"]} count={5} />       // Shows: 5
<Badge preset={["primary"]} count={42} />     // Shows: 42
<Badge preset={["success"]} count={100} />    // Shows: 99+
<Badge preset={["warning"]} count={999} />    // Shows: 99+
```

The `count` prop overrides `children` when provided. Numbers over 99 are displayed as "99+".

## Dot Indicator

Show a simple dot for status indicators:

```tsx
<Badge preset={["success"]} dot />
<Badge preset={["warning"]} dot />
<Badge preset={["danger"]} dot />
```

When `dot={true}`, the badge renders as a small circular indicator and ignores both `children` and `count`.

## Overlay Positioning

Position badges over other elements:

```tsx
<div style={{ position: "relative" }}>
  <Button>Messages</Button>
  <Badge preset={["danger"]} count={5} position="overlay" />
</div>
```

Overlay badges are positioned absolutely at the top-right of their parent container. The parent must have `position: relative`.

## Polymorphic Rendering

Render as different HTML elements:

```tsx
<Badge as="span">Span Badge</Badge>
<Badge as="div">Div Badge</Badge>
<Badge as="label">Label Badge</Badge>
```

Default element is `<span>`.

## CSS Variables

Customize appearance using component-scoped CSS variables:

```tsx
<Badge
  style={
    {
      "--badge-bg": "#8b5cf6",
      "--badge-color": "white",
      "--badge-border-radius": "4px",
      "--badge-padding-x": "12px",
    } as React.CSSProperties
  }
>
  Custom Badge
</Badge>
```

### Available Variables:

- `--badge-bg` - Background color
- `--badge-color` - Text color
- `--badge-border-color` - Border color
- `--badge-border-width` - Border width
- `--badge-border-radius` - Border radius
- `--badge-padding-x` - Horizontal padding
- `--badge-padding-y` - Vertical padding
- `--badge-font-size` - Font size
- `--badge-font-weight` - Font weight
- `--badge-font-family` - Font family
- `--badge-min-width` - Minimum width
- `--badge-dot-size` - Dot indicator size
- `--badge-overlay-top` - Overlay top position
- `--badge-overlay-right` - Overlay right position
- `--badge-overlay-transform-x` - Overlay X transform
- `--badge-overlay-transform-y` - Overlay Y transform

## Props

| Prop        | Type                             | Default        | Description            |
| ----------- | -------------------------------- | -------------- | ---------------------- |
| `children`  | `ReactNode`                      | -              | Badge content          |
| `as`        | `ElementType`                    | `"span"`       | HTML element to render |
| `preset`    | `string[]`                       | `[]`           | Preset configurations  |
| `size`      | `"small" \| "medium" \| "large"` | `"medium"`     | Badge size             |
| `dot`       | `boolean`                        | `false`        | Show as dot indicator  |
| `count`     | `number`                         | -              | Number to display      |
| `position`  | `"standalone" \| "overlay"`      | `"standalone"` | Positioning mode       |
| `style`     | `CSSProperties`                  | -              | Inline styles          |
| `className` | `string`                         | -              | Additional CSS classes |

## Examples

### Status Labels

```tsx
<Badge preset={["success"]}>Active</Badge>
<Badge preset={["warning"]}>Pending</Badge>
<Badge preset={["danger"]}>Blocked</Badge>
<Badge preset={["info"]}>Draft</Badge>
```

### Notification Badges

```tsx
<div style={{ position: "relative" }}>
  <Button>Messages</Button>
  <Badge preset={["danger"]} count={3} position="overlay" />
</div>
```

### Product Tags

```tsx
<Badge preset={["success"]} size="small">New</Badge>
<Badge preset={["danger"]} size="small">Sale</Badge>
<Badge preset={["primary"]} size="small">Featured</Badge>
```

### Online Status

```tsx
<div style={{ position: "relative" }}>
  <Avatar />
  <Badge preset={["success"]} dot position="overlay" />
</div>
```

## Accessibility

- Semantic HTML with polymorphic rendering
- ARIA `role="status"` for count and dot badges
- Descriptive `aria-label` attributes
- Screen reader friendly
- High contrast mode support
- Reduced motion support

### ARIA Labels

- Count badges: `aria-label="${count} items"`
- Dot indicators: `aria-label="Status indicator"`
- Text badges: Use default text content for screen readers

## Responsive Design

Badge scales uniformly across breakpoints:

- **Mobile** (0-767px): Base sizes
- **Tablet** (768px+): 15% larger (1.15x)
- **Desktop** (1024px+): 30% larger (1.30x)

All size properties (font-size, padding, dot-size) scale proportionally.

## Testing

Data attributes are included for E2E testing:

```tsx
<Badge preset={["primary"]} size="large" count={5} />
// data-size="large"
// data-position="standalone"
// data-count="5"
// data-preset="primary"
```

Available attributes: `data-size`, `data-position`, `data-dot`, `data-count`, `data-preset`

---

For more examples, check out the Storybook stories.
