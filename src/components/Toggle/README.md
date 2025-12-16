# Toggle

<div align="center">
  <img src="../../../docs/gifs/kanna-poke.gif" alt="Kanna Poke" width="400">
</div>

_"I found you."_

A toggle switch component for binary on/off states.

## Basic Usage

```tsx
import { Toggle } from "@markfoster314/marduk";

// Basic toggle
<Toggle label="Enable notifications" />

// Controlled toggle
const [enabled, setEnabled] = useState(false);
<Toggle
  label="Enable feature"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>

// Without label (use aria-label for accessibility)
<Toggle aria-label="Enable dark mode" />
```

## Sizes

Three size options:

```tsx
<Toggle label="Small" size="small" />
<Toggle label="Medium" size="medium" /> {/* default */}
<Toggle label="Large" size="large" />
```

Sizes are responsive and scale with global breakpoints.

## Label Position

Control label position:

```tsx
<Toggle label="Label on left" labelPosition="left" />
<Toggle label="Label on right" labelPosition="right" /> {/* default */}
```

## States

### Disabled

```tsx
<Toggle label="Disabled toggle" disabled />
<Toggle label="Disabled checked" checked disabled />
```

### Controlled vs Uncontrolled

Toggle supports both controlled and uncontrolled modes:

```tsx
// Controlled
<Toggle checked={isEnabled} onChange={handleChange} />

// Uncontrolled
<Toggle onChange={handleChange} />
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
<Toggle label="Enable feature" />

// With aria-label
<Toggle aria-label="Enable feature" />
```

## Props

```typescript
interface ToggleProps {
  label?: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  labelPosition?: "left" | "right";
  // ... all standard input HTML attributes
}
```

## Customization

Override styles using CSS variables:

```tsx
<Toggle
  label="Custom toggle"
  style={{
    "--toggle-track-color": "#custom-color",
  }}
/>
```

### Available CSS Variables

- `--toggle-track-color` - Track background color
- `--toggle-thumb-color` - Thumb color
- `--toggle-text-color` - Label text color

## Responsive Design

Toggle sizes automatically scale with global responsive multipliers:

- Mobile: `--marduk-scale-mobile`
- Tablet: `--marduk-scale-tablet` (768px+)
- Desktop: `--marduk-scale-desktop` (1024px+)

## Testing

Data attributes included for testing:

```tsx
<Toggle size="small" labelPosition="left" checked disabled />
// data-size="small"
// data-label-position="left"
// data-checked="true"
// data-disabled="true"
```

Available attributes: `data-size`, `data-label-position`, `data-checked`, `data-disabled`

---

For more examples, check out the Storybook stories.
