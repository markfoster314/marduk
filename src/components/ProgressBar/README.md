# ProgressBar

A progress bar component for displaying task completion or loading states.

## Basic Usage

```tsx
import { ProgressBar } from "@markfoster314/marduk";

// Basic progress bar
<ProgressBar value={50} />

// With label
<ProgressBar value={75} label="Upload Progress" showLabel />

// Custom max value
<ProgressBar value={25} max={50} />
```

## Variants

Four color variants:

```tsx
<ProgressBar value={65} variant="primary" /> {/* default */}
<ProgressBar value={100} variant="success" />
<ProgressBar value={40} variant="warning" />
<ProgressBar value={25} variant="error" />
```

## Sizes

Three size options:

```tsx
<ProgressBar value={50} size="small" />
<ProgressBar value={50} size="medium" /> {/* default */}
<ProgressBar value={50} size="large" />
```

Sizes are responsive and scale with global breakpoints.

## Labels

### Show Percentage

```tsx
<ProgressBar value={75} showLabel />
// Displays: 75%
```

### Custom Label

```tsx
<ProgressBar value={50} label="Loading..." />
```

### Both Label and Percentage

```tsx
<ProgressBar value={50} label="Progress" showLabel />
// Displays: Progress | 50%
```

## Striped and Animated

Add visual effects:

```tsx
// Striped pattern
<ProgressBar value={75} striped />

// Animated stripes
<ProgressBar value={75} striped animated />
```

## Value Handling

The component automatically handles edge cases:

- Values are clamped between 0 and max
- Percentage is calculated as `(value / max) * 100`
- Negative values are treated as 0
- Values exceeding max are capped at 100%

```tsx
<ProgressBar value={150} max={100} /> {/* Shows 100% */}
<ProgressBar value={-10} /> {/* Shows 0% */}
```

## Accessibility

- Semantic progressbar role
- Proper ARIA attributes (aria-valuenow, aria-valuemin, aria-valuemax)
- Screen reader support
- WCAG 2.1 compliant

## Props

```typescript
interface ProgressBarProps {
  value: number;
  max?: number; // default: 100
  variant?: "primary" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
  showLabel?: boolean;
  label?: string;
  striped?: boolean;
  animated?: boolean;
  className?: string;
  // ... all standard div HTML attributes
}
```

## Customization

Override styles using CSS variables:

```tsx
<ProgressBar
  value={50}
  style={{
    "--progress-color": "#custom-color",
  }}
/>
```

### Available CSS Variables

- `--progress-color` - Fill color
- `--progress-bg-color` - Background color
- `--progress-height` - Bar height

## Responsive Design

Progress bar height automatically scales with global responsive multipliers:

- Mobile: `--marduk-scale-mobile`
- Tablet: `--marduk-scale-tablet` (768px+)
- Desktop: `--marduk-scale-desktop` (1024px+)

## Testing

Data attributes included for testing:

```tsx
<ProgressBar value={50} max={100} variant="success" size="small" striped animated showLabel />
// data-variant="success"
// data-size="small"
// data-value="50"
// data-max="100"
// data-percentage="50"
// data-striped="true"
// data-animated="true"
// data-show-label="true"
```

Available attributes: `data-variant`, `data-size`, `data-value`, `data-max`, `data-percentage`, `data-striped`, `data-animated`, `data-show-label`

---

For more examples, check out the Storybook stories.
