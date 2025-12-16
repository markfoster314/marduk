# TextInput

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"Mmm."_

A text input component with support for various input types, validation states, and helper text.

## Basic Usage

```tsx
import { TextInput } from "@markfoster314/marduk";

// Basic input
<TextInput placeholder="Enter your name" />

// With label
<TextInput label="Email" placeholder="Enter your email" />

// Controlled input
const [value, setValue] = useState("");
<TextInput
  label="Username"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

## Input Types

Supports various HTML input types:

```tsx
<TextInput type="text" label="Text" />
<TextInput type="email" label="Email" />
<TextInput type="password" label="Password" />
<TextInput type="number" label="Number" />
<TextInput type="tel" label="Phone" />
<TextInput type="url" label="Website" />
<TextInput type="search" label="Search" />
```

## Sizes

Three size options:

```tsx
<TextInput label="Small" size="small" />
<TextInput label="Medium" size="medium" /> {/* default */}
<TextInput label="Large" size="large" />
```

Sizes are responsive and scale with global breakpoints.

## States

### Required

```tsx
<TextInput label="Email" required />
```

### Disabled

```tsx
<TextInput label="Disabled" disabled />
```

### Error State

```tsx
<TextInput label="Email" error="Please enter a valid email address" />
```

### Helper Text

```tsx
<TextInput label="Password" type="password" helperText="Must be at least 8 characters" />
```

Helper text is hidden when an error is present.

### Focus State

The input automatically tracks focus state for styling:

```tsx
<TextInput label="Email" />
// Automatically applies focused class on focus
```

## Controlled vs Uncontrolled

TextInput supports both controlled and uncontrolled modes:

```tsx
// Controlled
<TextInput value={value} onChange={setValue} />

// Uncontrolled
<TextInput onChange={handleChange} />
```

## Accessibility

- Semantic input element
- Keyboard accessible
- Focus management with visual indicators
- Proper label association
- ARIA support for error states
- WCAG 2.1 compliant

Always provide a label for accessibility:

```tsx
<TextInput label="Email" />
```

## Props

```typescript
interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  size?: "small" | "medium" | "large";
  // ... all standard input HTML attributes
}
```

## Customization

Override styles using CSS variables:

```tsx
<TextInput
  label="Custom input"
  style={{
    "--input-border-color": "#custom-color",
  }}
/>
```

### Available CSS Variables

- `--input-border-color` - Border color
- `--input-focus-color` - Focus border color
- `--input-text-color` - Text color

## Responsive Design

Input padding automatically scales with global responsive multipliers:

- Mobile: `--marduk-scale-mobile`
- Tablet: `--marduk-scale-tablet` (768px+)
- Desktop: `--marduk-scale-desktop` (1024px+)

## Testing

Data attributes included for testing:

```tsx
<TextInput size="small" type="email" disabled required error="Error" />
// data-size="small"
// data-type="email"
// data-disabled="true"
// data-required="true"
// data-error="true"
// data-focused="true" (when focused)
```

Available attributes: `data-size`, `data-type`, `data-disabled`, `data-required`, `data-error`, `data-focused`

---

For more examples, check out the Storybook stories.
