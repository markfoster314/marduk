# Link

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"I guess power comes at a price in every world."_

Navigation primitive with icons, presets, and all Text features

## Basic Usage

```tsx
import { Link } from "@markfoster314/marduk";

<Link href="/about">About Us</Link>;
```

## Preset System

Presets provide composable, type-safe styling configurations:

```tsx
// Color presets
<Link href="/" preset={["primary"]}>Primary Link</Link>

// Dark mode presets
<Link href="/" preset={["primaryDark"]}>Primary Dark Link</Link>
```

### Built-in Presets

**Colors (Light):**

- `default`, `primary`, `secondary`, `success`, `danger`, `warning`, `muted`

**Colors (Dark):**

- `defaultDark`, `primaryDark`, `secondaryDark`, `successDark`, `dangerDark`, `warningDark`, `mutedDark`

All presets include `underline="always"` by default.

### Custom Presets

Define your own presets:

```tsx
import { defineLinkPresets } from "@markfoster314/marduk";

defineLinkPresets({
  nav: {
    size: "md",
    weight: "semibold",
    underline: "none",
  },
  cta: {
    size: "lg",
    weight: "bold",
    color: "var(--brand-color)",
  },
});

<Link href="/" preset={["nav"]}>
  Navigation Link
</Link>;
```

## External Links

Links to external domains should use the `external` prop for security:

```tsx
<Link href="https://example.com" external>
  External Site
</Link>
```

This automatically:

- Sets `target="_blank"`
- Adds `rel="noopener noreferrer"` for security
- Sets `data-external="true"` for styling/testing

## With Icons

```tsx
import { Link } from "@markfoster314/marduk";
import { UserIcon, CircleInfoIcon } from "@markfoster314/marduk/icons";

// Left icon
<Link href="/profile" leftIcon={<UserIcon size="small" />}>
  Profile
</Link>

// Right icon
<Link href="/help" rightIcon={<CircleInfoIcon size="small" />}>
  Help
</Link>

// Both icons
<Link
  href="/docs"
  leftIcon={<UserIcon size="small" />}
  rightIcon={<CircleInfoIcon size="small" />}
>
  Documentation
</Link>
```

## Underline Styles

```tsx
// No underline
<Link href="/" underline="none">Clean Link</Link>

// Underline on hover (default)
<Link href="/" underline="hover">Hover Link</Link>

// Always underlined
<Link href="/" underline="always">Underlined Link</Link>
```

## Text Features

Link inherits all Text component features:

```tsx
// Sizes
<Link href="/" size="xs">Extra Small</Link>
<Link href="/" size="lg">Large</Link>

// Weights
<Link href="/" weight="semibold">Semibold</Link>
<Link href="/" weight="bold">Bold</Link>

// Alignment
<Link href="/" align="center">Centered</Link>

// Truncation
<Link href="/" truncate>Very long text that will be truncated...</Link>

// Clamping
<Link href="/" clamp maxLines={2}>
  Multi-line text that will be clamped to 2 lines...
</Link>

// Italic
<Link href="/" italic>Italic Text</Link>

// Custom color
<Link href="/" color="#ff0000">Red Link</Link>
```

## Props

| Prop         | Type                                   | Default | Description                        |
| ------------ | -------------------------------------- | ------- | ---------------------------------- |
| `href`       | `string`                               | -       | **Required.** URL to navigate to   |
| `preset`     | `string[]`                             | `[]`    | Preset configurations (composable) |
| `size`       | `xs \| sm \| md \| lg \| xl`           | -       | Link size                          |
| `weight`     | `normal \| medium \| semibold \| bold` | -       | Font weight                        |
| `align`      | `left \| center \| right \| justify`   | -       | Text alignment                     |
| `underline`  | `none \| hover \| always`              | `hover` | Underline style                    |
| `external`   | `boolean`                              | `false` | Opens in new tab with security     |
| `target`     | `_self \| _blank \| _parent \| _top`   | -       | Link target                        |
| `leftIcon`   | `ReactElement`                         | -       | Icon on the left                   |
| `rightIcon`  | `ReactElement`                         | -       | Icon on the right                  |
| `truncate`   | `boolean`                              | `false` | Truncate with ellipsis             |
| `clamp`      | `boolean`                              | `false` | Clamp to maxLines                  |
| `maxLines`   | `number`                               | -       | Max lines when clamping            |
| `italic`     | `boolean`                              | `false` | Italic text                        |
| `color`      | `string`                               | -       | Custom color                       |
| `lineHeight` | `tight \| normal \| relaxed \| loose`  | -       | Line height                        |
| `spacing`    | `tight \| normal \| wide`              | -       | Letter spacing                     |
| `style`      | `CSSProperties`                        | -       | Custom inline styles               |
| `className`  | `string`                               | -       | Additional CSS classes             |
| `as`         | `ElementType`                          | `a`     | Polymorphic element                |

Plus all standard anchor element props.

## Polymorphic Rendering

Render as any HTML element while maintaining link functionality:

```tsx
<Link href="/" as="button">
  Button-styled Link
</Link>
```

## Responsive Design

Link sizes scale automatically across three breakpoints:

- **Mobile** (0-767px): Base sizes
- **Tablet** (768px+): Step up one size
- **Desktop** (1024px+): Step up one more size

Example: `size="md"` renders as md → lg → xl across breakpoints.

## Accessibility

- Keyboard focusable by default
- Visible focus outline
- Support for `aria-label` and other ARIA attributes
- External links include security attributes
- High contrast mode support
- `:visited` state styling
- Proper semantic HTML
- Reduced motion support

```tsx
<Link href="/about" aria-label="Navigate to about page">
  About
</Link>

<Link href="#main-content">
  Skip to content
</Link>
```

## Testing

Data attributes are included for E2E testing:

```tsx
<Link href="/" size="lg" underline="always" external />
// data-size="lg"
// data-underline="always"
// data-external="true"
```

Available attributes: `data-size`, `data-weight`, `data-align`, `data-line-height`, `data-spacing`, `data-truncate`, `data-clamp`, `data-max-lines`, `data-italic`, `data-underline`, `data-external`, `data-preset`

---

For more examples, check out the Storybook stories.

THX 4 READING
