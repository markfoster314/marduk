# Button

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"Oh!"_

Flexible, accessible button component with preset system

## Basic Usage

```tsx
import { Button } from "@markfoster314/marduk";

<Button preset={["primary"]}>Click me</Button>;
```

## Presets

Button supports the library's preset system for color variants. See the [main README](../../README.md#presets-system) for detailed documentation on using presets, creating custom presets, and TypeScript support.

### Built-in Button Presets

**Light mode:**

- `default` - Default button color
- `primary` - Primary color
- `secondary` - Secondary color
- `success` - Success/green
- `danger` - Danger/red
- `warning` - Warning/yellow

**Dark mode:**

- `defaultDark` - Default in dark mode
- `primaryDark` - Primary dark mode
- `secondaryDark` - Secondary dark mode
- `successDark` - Success dark mode
- `dangerDark` - Danger dark mode
- `warningDark` - Warning dark mode

### Quick Examples

```tsx
<Button preset={["primary"]}>Primary button</Button>

<Button preset={["primaryDark"]}>Primary in dark mode</Button>

<Button preset={["success"]} appearance="outline">
  Success outline
</Button>
```

## Appearances

`filled` (default), `outline`, or `text`.

```tsx
<Button preset={["primary"]} appearance="filled">Filled</Button>
<Button preset={["primary"]} appearance="outline">Outline</Button>
<Button preset={["success"]} appearance="text">Text Button</Button>
```

## Sizes

`small`, `medium` (default), or `large`.

```tsx
<Button size="small">Small</Button>
<Button size="large">Large</Button>
```

## Icons

Add icons on either side, or make it icon-only.

```tsx
<Button leftIcon={<UserIcon />}>Profile</Button>
<Button rightIcon={<ArrowIcon />}>Next</Button>
<Button iconOnly leftIcon={<SearchIcon />} aria-label="Search">Search</Button>
```

## Loading State

Shows a spinner and disables the button.

```tsx
<Button loading>Loading...</Button>
<Button loading loadingText="Saving...">Save</Button>
```

## Async onClick

Handles loading state for async operations automatically.

```tsx
<Button
  onClickAsync={async () => {
    await saveData();
  }}
>
  Save
</Button>
```

Supports both onClick and onClickAsync. onClick triggers before onClickAsync.

## Disabled State

```tsx
<Button disabled>Disabled</Button>
<Button preset={["primary"]} appearance="outline" disabled>
  Disabled Outline
</Button>
```

## Full Width

```tsx
<Button fullWidth>Full Width Button</Button>
```

## Polymorphic

Render as any element using `as` prop.

```tsx
<Button as="a" href="/profile" preset={["primary"]}>
  Link Button
</Button>

<Button as="div" preset={["success"]}>
  Div Button
</Button>
```

## Customization

Override styles using CSS variables:

```tsx
<Button
  preset={["primary"]}
  style={{
    "--button-border-radius": "999px",
    "--button-padding-x": "32px",
  }}
>
  Pill Button
</Button>
```

### Available CSS Variables

```css
--button-font-family
--button-font-size
--button-font-weight
--button-padding-x
--button-padding-y
--button-border-radius
--button-border-width
--button-transition
--button-active-scale
--button-spinner-size
```

## Props

```typescript
interface ButtonProps {
  children: ReactNode;
  as?: ElementType; // button, a, div, etc.
  preset?: string[]; // Preset configurations
  appearance?: "filled" | "outline" | "text";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  loadingText?: ReactNode;
  onClickAsync?: () => Promise<void>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconOnly?: boolean;
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
}
```

Plus all standard button/element props.

## Accessibility

- Semantic button element by default
- Keyboard accessible (Space, Enter)
- Proper ARIA attributes (aria-busy, aria-disabled)
- Screen reader support for icon-only buttons
- Focus management
- High contrast mode support
- WCAG 2.1 compliant

## Testing

Data attributes included for testing:

```tsx
<Button preset={["success"]} appearance="outline" loading />
// data-preset="success"
// data-variant="success"
// data-appearance="outline"
// data-size="medium"
// data-loading="true"
```

Available attributes: `data-preset`, `data-variant`, `data-appearance`, `data-size`, `data-loading`, `data-disabled`, `data-icon-only`, `data-full-width`

---

For more examples, check out the Storybook stories.

THX 4 READING
