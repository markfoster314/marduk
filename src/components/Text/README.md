# Text

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"Mmm."_

Typography component for body text

If you have any ideas for things to add to this component feel free to [Open an issue](https://github.com/markfoster314/marduk/issues/new)

## Basic Usage

```tsx
import { Text } from "@markfoster314/marduk";

<Text>Some body text</Text>;
```

## Sizes

Current sizes: `xs`, `sm`, `md` (default), `lg`, or `xl`.

```tsx
<Text size="xs">Extra small text</Text>
<Text size="sm">Small text</Text>
<Text size="md">Medium text (default)</Text>
<Text size="lg">Large text</Text>
<Text size="xl">Extra large text</Text>
```

## Variants

Current variants: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, or `muted`.

```tsx
<Text variant="primary">Primary text</Text>
<Text variant="success">Success message</Text>
<Text variant="muted">Muted text</Text>
```

## Text Alignment

`left` (default), `center`, or `right`.

```tsx
<Text align="center">Centered text</Text>
<Text align="right">Right aligned</Text>
```

## Font Weight

Weight options: `normal` (default), `medium`, `semibold`, or `bold`.

```tsx
<Text weight="medium">Medium weight</Text>
<Text weight="bold">Bold text</Text>
```

## Line Height

Line height presets: `tight`, `normal` (default), `relaxed`, or `loose`.

```tsx
<Text lineHeight="tight">
  Tight line height for compact text blocks.
</Text>

<Text lineHeight="relaxed">
  Relaxed line height for easier reading over longer paragraphs.
</Text>
```

## Text Truncation

Truncate long text with single-line or multi-line clamping.

NOTE: clamp requires -webkit-line-clamp support (Chrome, Safari, Edge, Firefox 68+)

```tsx
<Text truncate>Very long text that gets cut off with ellipsis...</Text>;

<Text clamp maxLines={3}>
  Longer text that wraps to three lines before being clamped...
</Text>;
```

## Letter Spacing

Spacing presets: `tight`, `normal`, or `wide`.

```tsx
<Text spacing="wide">WIDE SPACING</Text>
<Text spacing="tight">Tight Spacing</Text>
```

## Underline Decoration

Available styles: `solid`, `double`, `dotted`, `dashed`, `wavy`

```tsx
<Text underlined underlineStyle="solid">
  Solid underline
</Text>

<Text underlined underlineStyle="wavy">
  Wavy underline
</Text>

<Text underlined underlineStyle="dotted">
  Dotted underline
</Text>
```

## Polymorphic

Render as anything using the `as` prop while maintaining text styles.

```tsx
<Text as="span">Renders as span</Text>

<Text as="a" href="#section">
  Renders as link
</Text>

<Text as="label" htmlFor="input">
  Renders as label
</Text>
```

## Dark Mode

```tsx
<Text darkMode variant="primary">
  Dark mode text
</Text>
```

## Custom Colors

```tsx
<Text color="#ff6b6b">
  Custom color text
</Text>

<Text color="var(--my-custom-color)">
  CSS variable color
</Text>
```

## Customization

Override CSS variables for custom styling.

```tsx
<Text
  style={
    {
      "--text-font-size": "1.125rem",
      "--text-line-height": "2",
      "--text-letter-spacing": "0.05em",
    } as React.CSSProperties
  }
>
  Custom styled text
</Text>
```

### Available CSS Variables

**Base Variables:**

- `--text-color`
- `--text-font-family`
- `--text-font-size`
- `--text-font-weight`
- `--text-line-height`
- `--text-letter-spacing`
- `--text-text-align`
- `--text-margin`

**Underline Variables:**

- `--text-underline-thickness`
- `--text-underline-offset`
- `--text-underline-double-thickness`

**High Contrast Variables:**

- `--text-high-contrast-underline-thickness`
- `--text-high-contrast-underline-offset`
- `--text-high-contrast-double-thickness`
- `--text-high-contrast-border-width`
- `--text-high-contrast-padding-left`

## Props

| Prop             | Type                                                                       | Default   | Description                          |
| ---------------- | -------------------------------------------------------------------------- | --------- | ------------------------------------ |
| `size`           | `xs \| sm \| md \| lg \| xl`                                               | `md`      | Text size                            |
| `variant`        | `default \| primary \| secondary \| success \| warning \| danger \| muted` | `default` | Color variant                        |
| `align`          | `left \| center \| right`                                                  | `left`    | Text alignment                       |
| `weight`         | `normal \| medium \| semibold \| bold`                                     | `normal`  | Font weight                          |
| `lineHeight`     | `tight \| normal \| relaxed \| loose`                                      | `normal`  | Line height preset                   |
| `truncate`       | `boolean`                                                                  | `false`   | Single-line truncation with ellipsis |
| `clamp`          | `boolean`                                                                  | `false`   | Multi-line truncation                |
| `maxLines`       | `number`                                                                   | `2`       | Max lines when clamping              |
| `spacing`        | `tight \| normal \| wide`                                                  | -         | Letter spacing preset                |
| `underlined`     | `boolean`                                                                  | `false`   | Add underline decoration             |
| `underlineStyle` | `solid \| double \| dotted \| dashed \| wavy`                              | `solid`   | Underline style                      |
| `darkMode`       | `boolean`                                                                  | `false`   | Dark mode styling                    |
| `color`          | `string`                                                                   | -         | Custom color (hex, rgb, CSS var)     |
| `as`             | `ElementType`                                                              | `p`       | Render as different element          |

Plus all standard paragraph/element props.

## Accessibility

- Semantic HTML with `<p>` as default element
- Polymorphic rendering with proper element semantics
- High contrast mode support (enhanced font weight, thicker underlines, automatic link underlines)
- Reduced motion support (disables transitions)
- WCAG 2.1 compliant

## Responsive Design

Like the rest of the project, the text component handles these three screen sizes responsiveness automatically.

- **Mobile** (0-767px): Base sizes
- **Tablet** (768px+): Larger sizes
- **Desktop** (1024px+): Largest sizes

Example sizing:

- `xs`: 10px (mobile) → 11px (tablet) → 12px (desktop)
- `sm`: 12px (mobile) → 13px (tablet) → 14px (desktop)
- `md`: 14px (mobile) → 15px (tablet) → 16px (desktop)
- `lg`: 16px (mobile) → 17px (tablet) → 18px (desktop)
- `xl`: 18px (mobile) → 19px (tablet) → 20px (desktop)

No configuration needed

## Testing

Data attributes are included for E2E testing:

```tsx
<Text size="lg" variant="primary" align="center" truncate />
// data-size="lg"
// data-variant="primary"
// data-align="center"
// data-truncate="true"
```

Available attributes: `data-size`, `data-variant`, `data-align`, `data-weight`, `data-line-height`, `data-dark-mode`, `data-custom-color`, `data-truncate`, `data-clamp`, `data-max-lines`, `data-spacing`, `data-underlined`, `data-underline-style`

---

For more examples, check out the Storybook stories.

THX 4 READING
