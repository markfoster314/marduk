# Avatar

User avatar component with image fallback, initials, status indicators, and multiple sizes.

## Basic Usage

```tsx
import { Avatar } from "@markfoster314/marduk";

<Avatar alt="John Doe" />;
```

## Presets

Avatar supports the library's preset system for color variants. See the [main README](../../README.md#presets-system) for detailed documentation on using presets, creating custom presets, and TypeScript support.

### Built-in Avatar Presets

**Light mode:**

- `primary` - Primary color background
- `secondary` - Secondary/gray background
- `success` - Success/green background
- `warning` - Warning/yellow background
- `danger` - Danger/red background

**Dark mode:**

- `primaryDark` - Primary color for dark backgrounds
- `secondaryDark` - Secondary color for dark backgrounds
- `successDark` - Success color for dark backgrounds
- `warningDark` - Warning color for dark backgrounds
- `dangerDark` - Danger color for dark backgrounds

### Quick Examples

```tsx
<Avatar alt="User" preset={["primary"]} />

<Avatar alt="User" preset={["primaryDark"]} />

<Avatar alt="User" preset={["success"]} size="large" />
```

## Sizes

Five sizes with responsive scaling:

```tsx
<Avatar alt="XS" size="xs" />
<Avatar alt="Small" size="small" />
<Avatar alt="Medium" size="medium" />
<Avatar alt="Large" size="large" />
<Avatar alt="XL" size="xl" />
```

Responsive - scales up at 768px and 1024px breakpoints.

## Shapes

Three shape variants:

```tsx
<Avatar alt="Circle" shape="circle" />
<Avatar alt="Square" shape="square" />
<Avatar alt="Rounded" shape="rounded" />
```

## Status Indicators

Show user status with visual indicators:

```tsx
<Avatar alt="Online" status="online" />
<Avatar alt="Offline" status="offline" />
<Avatar alt="Busy" status="busy" />
<Avatar alt="Away" status="away" />
```

## Image with Fallback

Avatar automatically falls back through a chain:

```tsx
// 1. Image (if src provided and loads)
<Avatar src="avatar.jpg" alt="John Doe" />

// 2. Custom initials (if provided)
<Avatar alt="John Doe" initials="JD" />

// 3. Auto-generated initials (from alt text)
<Avatar alt="John Doe" />  // Shows "JD"

// 4. Fallback icon (if provided)
<Avatar alt="User" fallbackIcon={<UserIcon />} />

// 5. Default fallback ("?")
<Avatar alt="" />
```

## Fallback Order

1. Image (if `src` provided and loads successfully)
2. Custom initials (if `initials` provided)
3. Auto-generated initials (from `alt` text)
4. Fallback icon (if `fallbackIcon` provided)
5. Default fallback ("?")

## Polymorphic Rendering

Render as any HTML element:

```tsx
<Avatar alt="User" as="span" />
<Avatar alt="User" as="div" />
```

Default element is `<div>`.

## Customization

Override CSS variables for custom styling:

```tsx
<Avatar
  alt="User"
  preset={["primary"]}
  style={{
    "--avatar-bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "--avatar-color": "#ffffff",
    "--avatar-border": "3px solid #8b5cf6",
  }}
/>
```

### Available CSS Variables

- `--avatar-bg` - Background color
- `--avatar-color` - Text/initials color
- `--avatar-border` - Border style
- `--avatar-border-radius` - Border radius
- `--avatar-size` - Avatar size
- `--avatar-padding` - Internal padding for initials/icon (default: 0.25em)
- `--avatar-status-size` - Status indicator size
- `--avatar-status-offset` - Status indicator position offset

## Props

| Prop           | Type                                             | Default    | Description                         |
| -------------- | ------------------------------------------------ | ---------- | ----------------------------------- |
| `as`           | `ElementType`                                    | `"div"`    | HTML element to render              |
| `preset`       | `string[]`                                       | `[]`       | Preset configurations               |
| `alt`          | `string`                                         | -          | **Required.** Alt text              |
| `src`          | `string`                                         | -          | Image source URL                    |
| `size`         | `"xs" \| "small" \| "medium" \| "large" \| "xl"` | `"medium"` | Avatar size                         |
| `shape`        | `"circle" \| "square" \| "rounded"`              | `"circle"` | Avatar shape                        |
| `status`       | `"online" \| "offline" \| "busy" \| "away"`      | -          | Status indicator                    |
| `initials`     | `string`                                         | -          | Custom initials                     |
| `fallbackIcon` | `ReactNode`                                      | -          | Icon to show when no image/initials |
| `style`        | `CSSProperties`                                  | -          | Custom inline styles                |
| `className`    | `string`                                         | -          | Additional CSS classes              |

Plus all standard HTML element props based on the `as` prop.

## Testing

Data attributes included for E2E testing: `data-size`, `data-shape`, `data-status`, `data-preset`

```tsx
<Avatar alt="User" preset={["primary"]} size="large" shape="rounded" status="online" />
// data-size="large"
// data-shape="rounded"
// data-status="online"
// data-preset="primary"
```

## Accessibility

- Uses `role="img"` with `aria-label` from `alt` prop
- Status indicators have descriptive `aria-label` attributes
- Proper semantic HTML
- Image fallbacks maintain accessibility
- Screen reader friendly

## Responsive Design

Avatar sizes scale automatically across three breakpoints:

- **Mobile** (0-767px): Base sizes
- **Tablet** (768px+): 15% larger (1.15×)
- **Desktop** (1024px+): 30% larger (1.30×)

All size properties (avatar size, status indicator) scale proportionally.

---

For more examples, check out the Storybook stories.

THX 4 READING
