# Checkbox

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"but Miss Kobayashi saved me."_

A checkbox component with support for checked, indeterminate, and error states.

## Basic Usage

```tsx
import { Checkbox } from "@markfoster314/marduk";

// Basic checkbox
<Checkbox label="Accept terms and conditions" />

// Controlled checkbox
const [accepted, setAccepted] = useState(false);
<Checkbox
  label="I agree"
  checked={accepted}
  onChange={(e) => setAccepted(e.target.checked)}
/>

// Without label (use aria-label for accessibility)
<Checkbox aria-label="Accept terms" />
```

## Sizes

Three size options:

```tsx
<Checkbox label="Small" size="small" />
<Checkbox label="Medium" size="medium" /> {/* default */}
<Checkbox label="Large" size="large" />
```

Sizes are responsive and scale with global breakpoints.

## States

### Checked

```tsx
<Checkbox label="Checked" checked />
```

### Indeterminate

Useful for "select all" scenarios:

```tsx
<Checkbox label="Select all" indeterminate />
```

### Disabled

```tsx
<Checkbox label="Disabled" disabled />
<Checkbox label="Disabled checked" checked disabled />
```

### Error State

```tsx
<Checkbox label="Required field" error="You must accept the terms" />
```

### Helper Text

```tsx
<Checkbox label="Subscribe to newsletter" helperText="Receive weekly updates" />
```

Helper text is hidden when an error is present.

## Controlled vs Uncontrolled

Checkbox supports both controlled and uncontrolled modes:

```tsx
// Controlled
<Checkbox checked={isChecked} onChange={handleChange} />

// Uncontrolled
<Checkbox onChange={handleChange} />
```

## Accessibility

- Semantic checkbox input
- Keyboard accessible (Space, Enter)
- Focus management with visual indicators
- ARIA support for screen readers
- WCAG 2.1 compliant

Always provide a label or `aria-label` for accessibility:

```tsx
// With visible label
<Checkbox label="Enable feature" />

// With aria-label
<Checkbox aria-label="Enable feature" />
```

## Props

```typescript
interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  size?: "small" | "medium" | "large";
  indeterminate?: boolean;
  // ... all standard input HTML attributes
}
```

## Customization

Override styles using CSS variables:

```tsx
<Checkbox
  label="Custom checkbox"
  style={{
    "--checkbox-color": "#custom-color",
  }}
/>
```

### Available CSS Variables

- `--checkbox-color` - Checkbox color when checked
- `--checkbox-border-color` - Border color
- `--checkbox-text-color` - Label text color

## Responsive Design

Checkbox sizes automatically scale with global responsive multipliers:

- Mobile: `--marduk-scale-mobile`
- Tablet: `--marduk-scale-tablet` (768px+)
- Desktop: `--marduk-scale-desktop` (1024px+)

## Testing

Data attributes included for testing:

```tsx
<Checkbox size="small" checked indeterminate disabled error="Error" />
// data-size="small"
// data-checked="true"
// data-indeterminate="true"
// data-disabled="true"
// data-error="true"
```

Available attributes: `data-size`, `data-checked`, `data-indeterminate`, `data-disabled`, `data-error`

---

For more examples, check out the Storybook stories.
