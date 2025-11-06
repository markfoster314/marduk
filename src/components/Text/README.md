# Text

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"Mmm."_

Polymorphic text component with preset system

If you have any ideas for things to add to this component feel free to [Open an issue](https://github.com/markfoster314/marduk/issues/new)

## Basic Usage

```tsx
import { Text } from "@markfoster314/marduk";

<Text preset={["primary"]}>Primary text</Text>;
```

## Presets

Text supports the library's preset system for color variants. See the [main README](../../README.md#presets-system) for detailed documentation on using presets, creating custom presets, and TypeScript support.

### Built-in Text Presets

**Light mode:**

- `default` - Default text color
- `primary` - Primary color
- `secondary` - Secondary color
- `success` - Success/green
- `danger` - Danger/red
- `warning` - Warning/yellow
- `muted` - Muted/gray

**Dark mode:**

- `defaultDark` - Default text in dark mode
- `primaryDark` - Primary color dark mode
- `secondaryDark` - Secondary color dark mode
- `successDark` - Success dark mode
- `dangerDark` - Danger dark mode
- `warningDark` - Warning dark mode
- `mutedDark` - Muted dark mode

### Quick Examples

```tsx
<Text preset={["primary"]}>Primary text</Text>

<Text preset={["primaryDark"]}>Primary in dark mode</Text>

<Text preset={["primary"]} size="lg" weight="bold">
  Primary with overrides
</Text>
```

## Sizes

```tsx
<Text size="xs">Extra small</Text>
<Text size="sm">Small</Text>
<Text size="md">Medium (default)</Text>
<Text size="lg">Large</Text>
<Text size="xl">Extra large</Text>
```

Responsive - scales up at 768px and 1024px breakpoints.

## Typography

```tsx
<Text weight="bold">Bold text</Text>
<Text italic>Italic text</Text>
<Text underlined underlineStyle="wavy">Wavy underline</Text>
<Text lineHeight="loose">Loose line height</Text>
<Text spacing="wide">Wide letter spacing</Text>
```

## Truncation

```tsx
<Text truncate>Single line with ellipsis...</Text>

<Text clamp maxLines={3}>
  Multi-line text clamped to 3 lines with ellipsis at the end
</Text>
```

## Alignment

```tsx
<Text align="left">Left aligned (default)</Text>
<Text align="center">Center aligned</Text>
<Text align="right">Right aligned</Text>
<Text align="justify">Justified text</Text>
```

## Polymorphic Rendering

```tsx
<Text as="span">Inline span</Text>
<Text as="div">Block div</Text>
<Text as="label" htmlFor="input">Label element</Text>
<Text as="a" href="/link">Link element</Text>
```

## Customization

Override CSS variables or use inline styles:

```tsx
<Text
  preset={["primary"]}
  style={{
    "--text-font-size": "24px",
    fontFamily: "monospace",
  }}
>
  Fully customized
</Text>
```

Available variables: `--text-color`, `--text-font-size`, `--text-font-weight`, `--text-line-height`, `--text-letter-spacing`, `--text-text-align`

## Props

| Prop             | Type                                          | Default | Description            |
| ---------------- | --------------------------------------------- | ------- | ---------------------- |
| `as`             | `ElementType`                                 | `p`     | HTML element to render |
| `preset`         | `string[]`                                    | -       | Text preset name(s)    |
| `size`           | `xs \| sm \| md \| lg \| xl`                  | `md`    | Text size              |
| `align`          | `left \| center \| right \| justify`          | `left`  | Text alignment         |
| `weight`         | `normal \| medium \| semibold \| bold`        | -       | Font weight            |
| `lineHeight`     | `tight \| normal \| relaxed \| loose`         | -       | Line height            |
| `spacing`        | `tight \| normal \| wide`                     | -       | Letter spacing         |
| `truncate`       | `boolean`                                     | `false` | Single line truncation |
| `clamp`          | `boolean`                                     | `false` | Multi-line truncation  |
| `maxLines`       | `number`                                      | `2`     | Lines for clamp        |
| `italic`         | `boolean`                                     | `false` | Italic text            |
| `underlined`     | `boolean`                                     | `false` | Underline text         |
| `underlineStyle` | `solid \| double \| dotted \| dashed \| wavy` | `solid` | Underline style        |
| `color`          | `string`                                      | -       | Custom color           |
| `style`          | `CSSProperties`                               | -       | Custom inline styles   |
| `className`      | `string`                                      | -       | Additional CSS classes |

Plus all standard HTML element props based on the `as` prop.

## Testing

Data attributes included for E2E testing: `data-preset`, `data-size`, `data-align`, `data-weight`, `data-line-height`, `data-spacing`, `data-truncate`, `data-clamp`, `data-max-lines`, `data-italic`, `data-underlined`, `data-underline-style`, `data-custom-color`

```tsx
<Text preset={["primary"]} size="lg">
  Content
</Text>
// data-preset="primary"
// data-size="lg"
```

## Accessibility

- Fully polymorphic - use semantic HTML elements
- Transitions disabled when `prefers-reduced-motion` is set
- Enhanced styling in high contrast mode
- Forwards all aria attributes and custom props

---

For more examples, check out the Storybook stories.

THX 4 READING
