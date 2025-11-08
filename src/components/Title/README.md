# Title

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"I found you."_

Heading component

## Basic Usage

```tsx
import { Title } from "@markfoster314/marduk";

<Title level={1}>Page Title</Title>;
```

## Heading Levels

Use `level` prop for heading hierarchy (h1-h6).

```tsx
<Title level={1}>Main Heading</Title>
<Title level={2}>Section Heading</Title>
<Title level={3}>Subsection</Title>
```

## Variants

Current variants: `default`, `primary`, `secondary`, `success`, `warning`, or `danger`.

```tsx
<Title level={2} variant="primary">Primary Title</Title>
<Title level={2} variant="success">Success Title</Title>
<Title level={2} variant="danger">Error Title</Title>
```

## Text Alignment

`left` (default), `center`, or `right`.

```tsx
<Title level={1} align="center">Centered Title</Title>
<Title level={2} align="right">Right Aligned</Title>
```

## Size & Weight Overrides

Override the default size or weight for custom styling.

```tsx
<Title level={3} size="large">Large H3</Title>
<Title level={2} weight="bold">Bold H2</Title>
```

## Text Truncation

Truncate long titles with single-line or multi-line clamping.

NOTE: clamp Requires -webkit-line-clamp support (Chrome, Safari, Edge, Firefox 68+)

```tsx
<Title level={2} truncate>
  Very long title that gets cut off...
</Title>;

<Title level={2} clamp maxLines={2}>
  Longer title that wraps to two lines...
</Title>;
```

## Letter Spacing

Spacing presets: `tight`, `normal`, or `wide`.

```tsx
<Title level={1} spacing="wide">WIDE SPACING</Title>
<Title level={2} spacing="tight">Tight Spacing</Title>
```

## Underline Decoration

Available styles: `solid`, `double`, `dotted`, `dashed`, `wavy`

```tsx
<Title level={2} underlined underlineStyle="solid">
  Solid Underline
</Title>

<Title level={2} underlined underlineStyle="wavy">
  Wavy Underline
</Title>
```

## Polymorphic

Render as anything using the `as` prop while maintaining heading styles.

```tsx
<Title as="div" level={1}>
  Looks like H1, renders as div
</Title>;

<Title as="a" href="#section" level={2}>
  Section Link
</Title>;
```

Note: Non-heading elements automatically get `role="heading"` and `aria-level` for accessibility.

## Dark Mode

```tsx
<Title darkMode level={2} variant="primary">
  Dark Title
</Title>
```

## Custom Colors

```tsx
<Title level={1} color="#ff6b6b">
  Custom Color Title
</Title>

<Title level={2} color="var(--my-custom-color)">
  CSS Variable Color
</Title>
```

## Customization

Override CSS variables for custom styling.

```tsx
<Title
  level={1}
  style={
    {
      "--title-font-size": "4rem",
      "--title-color": "#ff6b6b",
      "--title-letter-spacing": "0.1em",
    } as React.CSSProperties
  }
>
  Custom Title
</Title>
```

### Available CSS Variables

**Base Variables:**

- `--title-color`
- `--title-font-family`
- `--title-font-size`
- `--title-font-weight`
- `--title-line-height`
- `--title-letter-spacing`
- `--title-text-transform`
- `--title-margin-top`
- `--title-margin-bottom`

**Underline Variables:**

- `--title-underline-thickness`
- `--title-underline-offset`
- `--title-underline-double-thickness`

**High Contrast Variables:**

- `--title-high-contrast-border-width`
- `--title-high-contrast-padding`
- `--title-high-contrast-underline-thickness`
- `--title-high-contrast-underline-offset`
- `--title-high-contrast-double-thickness`
- `--title-high-contrast-link-thickness`
- `--title-high-contrast-link-offset`

## Props

| Prop             | Type                                                              | Default   | Description                          |
| ---------------- | ----------------------------------------------------------------- | --------- | ------------------------------------ |
| `level`          | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                                      | `1`       | Semantic heading level               |
| `variant`        | `default \| primary \| secondary \| success \| warning \| danger` | `default` | Color variant                        |
| `align`          | `left \| center \| right`                                         | `left`    | Text alignment                       |
| `size`           | `small \| medium \| large`                                        | -         | Size override (optional)             |
| `weight`         | `normal \| medium \| semibold \| bold`                            | -         | Weight override (optional)           |
| `truncate`       | `boolean`                                                         | `false`   | Single-line truncation with ellipsis |
| `clamp`          | `boolean`                                                         | `false`   | Multi-line truncation                |
| `maxLines`       | `number`                                                          | `2`       | Max lines when clamping              |
| `spacing`        | `tight \| normal \| wide`                                         | -         | Letter spacing preset                |
| `underlined`     | `boolean`                                                         | `false`   | Add underline decoration             |
| `underlineStyle` | `solid \| double \| dotted \| dashed \| wavy`                     | `solid`   | Underline style                      |
| `darkMode`       | `boolean`                                                         | `false`   | Dark mode styling                    |
| `color`          | `string`                                                          | -         | Custom color (hex, rgb, CSS var)     |
| `as`             | `ElementType`                                                     | (dynamic) | Render as different element          |

Plus all standard heading/element props.

## Accessibility

- Semantic HTML with proper heading hierarchy (h1-h6)
- Polymorphic elements get `role="heading"` and `aria-level` attributes
- High contrast mode support (enhanced borders, thicker underlines)
- Reduced motion support (disables transitions)
- Links automatically get underlines in high contrast mode
- WCAG 2.1 compliant

## Responsive Design

Like the rest of the project, the title component handles these three screen sizes responsiveness automatically.

- **Mobile** (0-767px): Base sizes
- **Tablet** (768px+): Larger sizes
- **Desktop** (1024px+): Largest sizes

No configuration needed

## Testing

Data attributes are included for E2E testing:

```tsx
<Title level={2} variant="primary" align="center" truncate />
// data-level="2"
// data-variant="primary"
// data-align="center"
// data-truncate="true"
```

Available attributes: `data-level`, `data-variant`, `data-align`, `data-size`, `data-weight`, `data-dark-mode`, `data-custom-color`, `data-truncate`, `data-clamp`, `data-max-lines`, `data-spacing`, `data-underlined`, `data-underline-style`

---

For more examples, check out the Storybook stories.

THX 4 READING
