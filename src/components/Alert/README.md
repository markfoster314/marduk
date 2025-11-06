# Alert

<div align="center">
  <img src="../../../docs/images/touhou.png" alt="Touhou from Touhou" width="400">
</div>

_"It's hard to tell what you could do"_

Contextual feedback messages for user actions and system updates

Got any ideas for stuff to add? [Open an issue](https://github.com/markfoster314/marduk/issues/new)

## Basic Usage

```tsx
import { Alert } from "@markfoster314/marduk";

<Alert>This is an alert message</Alert>;
```

## Variants

Choose from 4 variants: `info` (default), `success`, `warning`, or `error`.

```tsx
<Alert variant="info">Information message</Alert>
<Alert variant="success">Success message</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="error">Error message</Alert>
```

## With Title

```tsx
<Alert variant="success" title="Success">
  Your changes have been saved successfully.
</Alert>
<Alert variant="error" title="Error">
  There was a problem processing your request.
</Alert>
```

## Closable

```tsx
<Alert closable>You can close this alert</Alert>
<Alert closable onClose={() => console.log("Alert closed")}>
  Custom close handler
</Alert>
```

## Animations

Currently two animations implemented: `fadeInUp` or `slideInRight`.

```tsx
<Alert animation="fadeInUp">Animated alert</Alert>
<Alert animation="slideInRight">Slide in from the right</Alert>
```

## Dark Mode

```tsx
<Alert darkMode>Dark mode alert</Alert>
<Alert variant="success" darkMode title="Success">
  Dark mode with title
</Alert>
```

## Customization

Override CSS variables for custom styling.

```tsx
<Alert
  variant="info"
  style={{
    "--alert-bg": "#e3f2fd",
    "--alert-border-color": "#1976d2",
    "--alert-text-color": "#0d47a1",
    "--alert-icon-size": "24px",
  }}
>
  Custom styled alert
</Alert>
```

Available variables: colors (bg, border, text, icon), sizing (padding, gap, icon size, border width/radius), animation durations, and more. Check the CSS file for the complete list.

## Props

| Prop        | Type                                  | Default | Description            |
| ----------- | ------------------------------------- | ------- | ---------------------- |
| `variant`   | `info \| success \| warning \| error` | `info`  | Alert variant          |
| `title`     | `string`                              | -       | Optional alert title   |
| `closable`  | `boolean`                             | `false` | Show close button      |
| `onClose`   | `() => void`                          | -       | Close callback         |
| `animation` | `none \| fadeInUp \| slideInRight`    | `none`  | Entry animation        |
| `darkMode`  | `boolean`                             | `false` | Dark mode styling      |
| `style`     | `CSSProperties`                       | -       | Custom inline styles   |
| `className` | `string`                              | -       | Additional CSS classes |

Plus all standard HTML div element props.

## Testing

Data attributes included for E2E testing: `data-variant`, `data-closable`, `data-dark-mode`, `data-animation`, `data-has-title`

```tsx
<Alert variant="error" closable animation="fadeInUp" title="Error">
  Error message
</Alert>
// data-variant="error"
// data-closable="true"
// data-animation="fadeInUp"
// data-has-title="true"
```

## Accessibility

- Uses `role="alert"` for screen reader announcements
- Error alerts use `aria-live="assertive"` for immediate announcements
- Other variants use `aria-live="polite"` for polite announcements
- Animations disabled when `prefers-reduced-motion` is set
- Enhanced contrast in high contrast mode

---

For more examples, check out the Storybook stories.

THX 4 READING
