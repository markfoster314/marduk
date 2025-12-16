# Icon

An icon component that wraps SVG icons with consistent styling and behavior.

## Basic Usage

```tsx
import { Icon } from "@markfoster314/marduk";

// Basic icon
<Icon name="user" />

// With size
<Icon name="user" size="large" />

// With color
<Icon name="user" color="var(--marduk-color-primary-500)" />
```

## Available Icons

Icons are available by name. Check Storybook for the full list of available icons.

```tsx
<Icon name="user" />
<Icon name="heart" />
<Icon name="star" />
// ... and more
```

## Sizes

Predefined sizes:

```tsx
<Icon name="user" size="xs" />
<Icon name="user" size="small" />
<Icon name="user" size="medium" /> {/* default */}
<Icon name="user" size="large" />
<Icon name="user" size="xl" />
<Icon name="user" size="2xl" />
<Icon name="user" size="3xl" />
```

Custom sizes with responsive scaling:

```tsx
// Custom size
<Icon name="user" size={40} />

// Custom size with responsive scaling
<Icon name="user" size={40} responsive />
```

## Colors

```tsx
// Using CSS variable
<Icon name="user" color="var(--marduk-color-primary-500)" />

// Using preset colors
<Icon name="user" preset={["primary"]} />

// Hover color
<Icon name="user" hoverColor="var(--marduk-color-success-500)" />
```

## Transformations

### Rotation

```tsx
<Icon name="arrow" rotate={90} />
<Icon name="arrow" rotate={180} />
<Icon name="arrow" rotate={270} />
```

### Flip

```tsx
<Icon name="arrow" flip="horizontal" />
<Icon name="arrow" flip="vertical" />
<Icon name="arrow" flip="both" />
```

### Alignment

```tsx
<Icon name="user" align="left" />
<Icon name="user" align="center" />
<Icon name="user" align="right" />
```

## Animations

### Spin

```tsx
// Basic spin
<Icon name="loading" spin />

// Spin with speed
<Icon name="loading" spin spinSpeed="slow" />
<Icon name="loading" spin spinSpeed="normal" />
<Icon name="loading" spin spinSpeed="fast" />
```

### Custom Animations

```tsx
<Icon name="heart" animation="heartpulse" />
```

## Presets

Use presets for common styling combinations:

```tsx
<Icon name="user" preset={["primary"]} />
<Icon name="check" preset={["success"]} />
<Icon name="warning" preset={["warning"]} />
<Icon name="error" preset={["danger"]} />
```

Combine multiple presets:

```tsx
<Icon name="user" preset={["primary", "large"]} />
```

## Accessibility

### Decorative Icons

For purely decorative icons:

```tsx
<Icon name="decoration" decorative />
// Sets aria-hidden="true"
```

### Descriptive Icons

For icons that convey meaning:

```tsx
<Icon name="user" title="User profile" description="Click to view user profile" />
```

## ViewBox

Customize the viewBox:

```tsx
<Icon name="user" viewBox="0 0 32 32" />
```

If not provided, uses the icon's default viewBox or "0 0 24 24".

## Stroke Properties

For outlined icons:

```tsx
<Icon name="outline-icon" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
```

## Filters

Apply CSS filters:

```tsx
<Icon name="user" filter="grayscale(100%)" />
<Icon name="user" filter="blur(2px)" />
<Icon name="user" filter="brightness(1.5)" />
```

## Props

```typescript
interface IconProps {
  name: keyof typeof iconData;
  viewBox?: string;
  // ... all Svg component props
}
```

Icon extends all Svg component props, including:

- `size`, `color`, `preset`
- `align`, `rotate`, `flip`
- `spin`, `spinSpeed`, `animation`
- `title`, `description`, `decorative`
- `strokeWidth`, `strokeLinecap`, `strokeLinejoin`
- `hoverColor`, `responsive`, `filter`
- `className`, `style`
- And more...

## Customization

Override styles using CSS variables:

```tsx
<Icon
  name="user"
  style={{
    "--svg-color": "#custom-color",
  }}
/>
```

## Responsive Design

Icons automatically scale with global responsive multipliers when using predefined sizes. For custom sizes, enable responsive scaling:

```tsx
<Icon name="user" size={40} responsive />
```

## Testing

Data attributes included for testing:

```tsx
<Icon name="user" size="large" viewBox="0 0 32 32" />
// data-icon-name="user"
// data-viewbox="0 0 32 32"
// Plus all Svg component data attributes
```

Available attributes: `data-icon-name`, `data-viewbox`, plus all Svg component data attributes (`data-size`, `data-preset`, `data-align`, `data-rotate`, `data-flip`, `data-spin`, `data-animation`, etc.)

---

For more examples, check out the Storybook stories.
