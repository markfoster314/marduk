# Dropdown

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"but Miss Kobayashi saved me."_

A select dropdown component with support for options, validation states, and helper text.

## Basic Usage

```tsx
import { Dropdown } from "@markfoster314/marduk";

const options = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
];

// Basic dropdown
<Dropdown options={options} placeholder="Select a country" />

// With label
<Dropdown label="Country" options={options} placeholder="Select your country" />

// Controlled dropdown
const [selected, setSelected] = useState("");
<Dropdown
  label="Country"
  options={options}
  value={selected}
  onChange={(e) => setSelected(e.target.value)}
/>
```

## Options

Options can include disabled state:

```tsx
const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana", disabled: true },
  { value: "orange", label: "Orange" },
];

<Dropdown options={options} />;
```

## Sizes

Three size options:

```tsx
<Dropdown options={options} size="small" />
<Dropdown options={options} size="medium" /> {/* default */}
<Dropdown options={options} size="large" />
```

Sizes are responsive and scale with global breakpoints.

## States

### Required

```tsx
<Dropdown label="Country" options={options} required />
```

### Disabled

```tsx
<Dropdown label="Disabled" options={options} disabled />
```

### Error State

```tsx
<Dropdown label="Country" options={options} error="Please select a country" />
```

### Helper Text

```tsx
<Dropdown label="Country" options={options} helperText="Choose the country where you reside" />
```

Helper text is hidden when an error is present.

### Placeholder

```tsx
<Dropdown options={options} placeholder="Select an option" />
```

## Controlled vs Uncontrolled

Dropdown supports both controlled and uncontrolled modes:

```tsx
// Controlled
<Dropdown value={selectedValue} onChange={handleChange} />

// Uncontrolled
<Dropdown onChange={handleChange} />
```

## Accessibility

- Semantic select element with proper ARIA attributes
- Keyboard accessible (Arrow keys, Space, Enter)
- Focus management with visual indicators
- Screen reader support
- WCAG 2.1 compliant

## Props

```typescript
interface DropdownProps {
  label?: string;
  options: DropdownOption[];
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  size?: "small" | "medium" | "large";
  // ... all standard select HTML attributes
}

interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}
```

## Customization

Override styles using CSS variables:

```tsx
<Dropdown
  options={options}
  style={{
    "--dropdown-border-color": "#custom-color",
  }}
/>
```

### Available CSS Variables

- `--dropdown-border-color` - Border color
- `--dropdown-focus-color` - Focus border color
- `--dropdown-text-color` - Text color

## Responsive Design

Dropdown padding automatically scales with global responsive multipliers:

- Mobile: `--marduk-scale-mobile`
- Tablet: `--marduk-scale-tablet` (768px+)
- Desktop: `--marduk-scale-desktop` (1024px+)

## Testing

Data attributes included for testing:

```tsx
<Dropdown options={options} size="small" value="option2" required disabled error="Error" />
// data-size="small"
// data-value="option2"
// data-required="true"
// data-disabled="true"
// data-error="true"
```

Available attributes: `data-size`, `data-value`, `data-required`, `data-disabled`, `data-error`

---

For more examples, check out the Storybook stories.
