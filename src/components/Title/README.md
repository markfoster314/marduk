# Title

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"I found you."_

Semantic heading component with preset system

## Basic Usage

```tsx
import { Title } from "@markfoster314/marduk";

<Title level={1}>Page Title</Title>;
```

## Heading Levels

Use `level` prop for semantic heading hierarchy (h1-h6).

```tsx
<Title level={1}>Main Heading</Title>
<Title level={2}>Section Heading</Title>
<Title level={3}>Subsection</Title>
```

## Presets

Title supports the library's preset system for color variants. See the [main README](../../README.md#presets-system) for detailed documentation on using presets, creating custom presets, and TypeScript support.

### Built-in Title Presets

**Light mode:**

- `default` - Default heading color
- `primary` - Primary color
- `secondary` - Secondary color
- `success` - Success/green
- `danger` - Danger/red
- `warning` - Warning/yellow
- `muted` - Muted/gray

**Dark mode:**

- `defaultDark` - Default heading in dark mode
- `primaryDark` - Primary color dark mode
- `secondaryDark` - Secondary color dark mode
- `successDark` - Success dark mode
- `dangerDark` - Danger dark mode
- `warningDark` - Warning dark mode
- `mutedDark` - Muted dark mode

### Quick Examples

```tsx
<Title level={1} preset={["primary"]}>Primary heading</Title>

<Title level={2} preset={["primaryDark"]}>Primary in dark mode</Title>

<Title level={3} preset={["primary"]} size="large" weight="bold">
  Primary with overrides
</Title>
```

## Text Alignment

`left` (default), `center`, or `right`.

```tsx
<Title level={1} align="center">Centered Title</Title>
<Title level={2} align="right">Right Aligned</Title>
```

## Size & Weight Overrides

Override default size or weight based on level.

```tsx
<Title level={3} size="large">Large H3</Title>
<Title level={2} weight="bold">Bold H2</Title>
```

## Text Truncation

Truncate long titles with single-line or multi-line clamping.

```tsx
<Title level={2} truncate>
  Very long title that gets cut off...
</Title>

<Title level={2} clamp maxLines={2}>
  Longer title that wraps to two lines...
</Title>
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

Render as any element using `as` prop while maintaining heading styles and accessibility.

```tsx
<Title level={2} as="div">
  H2 styling as div with role="heading"
</Title>

<Title level={1} as="span">
  H1 styling as span
</Title>
```

Non-heading elements automatically get `role="heading"` and `aria-level` attributes.

## Custom Colors

```tsx
<Title level={1} color="#8b5cf6">Custom color</Title>

<Title level={2} color="var(--marduk-color-primary-500)">
  CSS variable color
</Title>
```

## Customization

Override default styles using CSS variables:

```tsx
<Title
  level={1}
  style={{
    "--title-font-family": "Georgia, serif",
    "--title-letter-spacing": "0.05em",
  }}
>
  Custom Font
</Title>
```

### Available CSS Variables

```css
--title-color
--title-font-family
--title-font-size
--title-font-weight
--title-line-height
--title-letter-spacing
--title-text-transform
--title-margin-top
--title-margin-bottom
--title-underline-thickness
--title-underline-offset
--title-underline-double-thickness
--marduk-title-custom-color
--title-max-lines
```

## Props

```typescript
interface TitleProps {
  children: ReactNode;
  as?: ElementType; // h1-h6, div, span, p, etc.
  preset?: string[]; // Preset configurations
  level?: 1 | 2 | 3 | 4 | 5 | 6; // Heading level (default: 1)
  align?: "left" | "center" | "right"; // Text alignment
  size?: "small" | "medium" | "large"; // Size override
  weight?: "normal" | "medium" | "semibold" | "bold"; // Weight override
  color?: string; // Custom color
  truncate?: boolean; // Single-line truncation
  clamp?: boolean; // Multi-line truncation
  maxLines?: number; // Max lines for clamp (default: 2)
  spacing?: "tight" | "normal" | "wide"; // Letter spacing
  underlined?: boolean; // Add underline
  underlineStyle?: "solid" | "double" | "dotted" | "dashed" | "wavy";
  className?: string;
  style?: CSSProperties;
}
```

Plus all standard heading/element props.

## Accessibility

- Semantic HTML with proper heading hierarchy (h1-h6)
- Polymorphic elements get `role="heading"` and `aria-level` attributes
- High contrast mode support (enhanced borders, thicker underlines)
- Reduced motion support (disables transitions)
- Links automatically get underlines in high contrast mode
- WCAG 2.1 compliant

## Responsive Design

Titles scale automatically across three breakpoints:

- **Mobile** (0-767px): Base sizes
- **Tablet** (768px+): Larger sizes
- **Desktop** (1024px+): Largest sizes

No configuration needed.

## Testing

Data attributes are included for testing:

```tsx
<Title level={2} preset={["primary"]} align="center" truncate />
// data-level="2"
// data-preset="primary"
// data-align="center"
// data-truncate="true"
```

Available attributes: `data-preset`, `data-level`, `data-align`, `data-size`, `data-weight`, `data-custom-color`, `data-truncate`, `data-clamp`, `data-max-lines`, `data-spacing`, `data-underlined`, `data-underline-style`

---

For more examples, check out the Storybook stories.

THX 4 READING
