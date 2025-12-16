# RadioButtons

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"but Miss Kobayashi saved me."_

A radio button group component for single selection from multiple options.

## Basic Usage

```tsx
import { RadioButtons } from "@markfoster314/marduk";

const options = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

// Basic radio group
<RadioButtons name="size" options={options} label="Choose Size" />;

// Controlled radio group
const [selectedSize, setSelectedSize] = useState("medium");
<RadioButtons
  name="size"
  options={options}
  label="Choose Size"
  value={selectedSize}
  onChange={setSelectedSize}
/>;
```

## Options

Options can include disabled state:

```tsx
const options = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium", disabled: true },
  { value: "large", label: "Large" },
];

<RadioButtons name="size" options={options} />;
```

## Sizes

Three size options:

```tsx
<RadioButtons name="size" options={options} size="small" />
<RadioButtons name="size" options={options} size="medium" /> {/* default */}
<RadioButtons name="size" options={options} size="large" />
```

Sizes are responsive and scale with global breakpoints.

## Direction

Control layout direction:

```tsx
// Vertical (default)
<RadioButtons name="size" options={options} direction="vertical" />

// Horizontal
<RadioButtons name="size" options={options} direction="horizontal" />
```

## States

### Required

```tsx
<RadioButtons name="size" options={options} label="Size" required />
```

### Disabled

```tsx
// Disable entire group
<RadioButtons name="size" options={options} disabled />

// Disable specific options (see Options section above)
```

### Error State

```tsx
<RadioButtons name="size" options={options} label="Size" error="Please select a size" />
```

### Helper Text

```tsx
<RadioButtons
  name="size"
  options={options}
  label="Size"
  helperText="Choose the size that fits you best"
/>
```

Helper text is hidden when an error is present.

## Controlled vs Uncontrolled

RadioButtons supports both controlled and uncontrolled modes:

```tsx
// Controlled
<RadioButtons value={selectedValue} onChange={setSelectedValue} />

// Uncontrolled
<RadioButtons onChange={setSelectedValue} />
```

## Accessibility

- Semantic radio group with proper ARIA attributes
- Keyboard accessible (Arrow keys, Space, Enter)
- Focus management with visual indicators
- Screen reader support
- WCAG 2.1 compliant

Each radio button has a unique ID based on the `name` prop and option value.

## Props

```typescript
interface RadioButtonsProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  direction?: "horizontal" | "vertical";
  size?: "small" | "medium" | "large";
}

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}
```

## Customization

Override styles using CSS variables:

```tsx
<RadioButtons
  name="size"
  options={options}
  style={{
    "--radio-color": "#custom-color",
  }}
/>
```

### Available CSS Variables

- `--radio-color` - Radio button color when selected
- `--radio-border-color` - Border color
- `--radio-text-color` - Label text color

## Responsive Design

Radio button sizes automatically scale with global responsive multipliers:

- Mobile: `--marduk-scale-mobile`
- Tablet: `--marduk-scale-tablet` (768px+)
- Desktop: `--marduk-scale-desktop` (1024px+)

## Testing

Data attributes included for testing:

```tsx
<RadioButtons
  name="size"
  options={options}
  size="small"
  direction="horizontal"
  value="medium"
  required
  disabled
  error="Error"
/>
// data-size="small"
// data-direction="horizontal"
// data-value="medium"
// data-required="true"
// data-disabled="true"
// data-error="true"
```

Available attributes: `data-size`, `data-direction`, `data-value`, `data-required`, `data-disabled`, `data-error`

---

For more examples, check out the Storybook stories.
