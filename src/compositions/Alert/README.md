# Alert

<div align="center">
  <img src="../../../docs/images/touhou.png" alt="Touhou from Touhou" width="400">
</div>

_"It's hard to tell what you could do"_

Contextual feedback messages for user actions and system updates

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

## Custom Title

You can pass a custom React element as the title using the `customTitle` prop. If both `customTitle` and `title` are provided, `customTitle` takes precedence.

```tsx
import { Alert, Title } from "@markfoster314/marduk";

<Alert
  variant="info"
  customTitle={<Title level={5} preset={["primary"]}>Custom Title Component</Title>}
>
  Alert with custom title component
</Alert>

<Alert
  variant="warning"
  customTitle={
    <div>
      <Title level={6}>Warning</Title>
      <span style={{ fontSize: "0.875rem", opacity: 0.8 }}>Subtitle</span>
    </div>
  }
>
  Alert with complex custom title
</Alert>
```

## Custom Text

You can pass a custom React element as the message text using the `customText` prop. If `customText` is provided, it takes precedence over the default `children` prop.

```tsx
import { Alert, Text } from "@markfoster314/marduk";

<Alert
  variant="info"
  customText={<Text preset={["primary"]} size="md">Custom message text</Text>}
>
  This children prop will be ignored when customText is provided
</Alert>

<Alert
  variant="success"
  customText={
    <div>
      <Text preset={["success"]} weight="semibold">Success!</Text>
      <Text preset={["success"]} size="sm">Your changes have been saved.</Text>
    </div>
  }
>
  Alert with complex custom text
</Alert>
```

## Custom Icon

You can pass a custom React element as the icon using the `customIcon` prop. If `customIcon` is provided, it replaces the default variant icon.

```tsx
import { Alert } from "@markfoster314/marduk";

<Alert
  variant="info"
  customIcon={<span style={{ fontSize: "20px" }}>🔔</span>}
>
  Alert with custom emoji icon
</Alert>

<Alert
  variant="error"
  customIcon={<CustomErrorIcon />}
>
  Alert with custom icon component
</Alert>
```

## Custom Button

You can pass a custom React element as the close button using the `customButton` prop. If `customButton` is provided, it replaces the default close button. The `closable` prop must be `true` for the button to be rendered.

```tsx
import { Alert, Button } from "@markfoster314/marduk";

<Alert
  variant="info"
  closable
  customButton={
    <Button appearance="text" size="small" onClick={() => console.log("Custom close")}>
      Close
    </Button>
  }
>
  Alert with custom close button
</Alert>

<Alert
  variant="warning"
  closable
  customButton={
    <button
      type="button"
      onClick={() => console.log("Dismissed")}
      style={{ padding: "4px 8px", fontSize: "12px" }}
    >
      Dismiss
    </button>
  }
>
  Alert with custom button element
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

Currently two entry animations implemented: `fadeInUp` or `slideInRight`.

```tsx
<Alert animation="fadeInUp">Animated alert</Alert>
<Alert animation="slideInRight">Slide in from the right</Alert>
```

## Close Animations

You can specify an exit animation when the alert is closed using the `closeAnimation` prop. Currently two close animations are available: `fadeOutLeft` or `fadeOutDown`.

```tsx
<Alert closable closeAnimation="fadeOutLeft">
  This alert will fade out to the left when closed
</Alert>

<Alert closable closeAnimation="fadeOutDown">
  This alert will fade out downward when closed
</Alert>
```

You can customize the duration of the close animation using the `closeAnimationDuration` prop (in milliseconds). The default duration is 400ms.

```tsx
<Alert closable closeAnimation="fadeOutLeft" closeAnimationDuration={600}>
  This alert will fade out slowly over 600ms
</Alert>

<Alert closable closeAnimation="fadeOutDown" closeAnimationDuration={200}>
  This alert will fade out quickly over 200ms
</Alert>
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

| Prop                     | Type                                  | Default | Description                                                                     |
| ------------------------ | ------------------------------------- | ------- | ------------------------------------------------------------------------------- |
| `variant`                | `info \| success \| warning \| error` | `info`  | Alert variant                                                                   |
| `title`                  | `string`                              | -       | Optional alert title (string)                                                   |
| `customTitle`            | `ReactElement`                        | -       | Custom title component (takes precedence over `title`)                          |
| `customText`             | `ReactElement`                        | -       | Custom message text component (takes precedence over `children`)                |
| `customIcon`             | `ReactElement`                        | -       | Custom icon component (replaces default variant icon)                           |
| `customButton`           | `ReactElement`                        | -       | Custom close button component (replaces default button when `closable` is true) |
| `closable`               | `boolean`                             | `false` | Show close button                                                               |
| `onClose`                | `() => void`                          | -       | Close callback                                                                  |
| `animation`              | `none \| fadeInUp \| slideInRight`    | `none`  | Entry animation                                                                 |
| `closeAnimation`         | `none \| fadeOutLeft \| fadeOutDown`  | `none`  | Exit animation when alert is closed                                             |
| `closeAnimationDuration` | `number`                              | `400`   | Duration of close animation in milliseconds                                     |
| `darkMode`               | `boolean`                             | `false` | Dark mode styling                                                               |
| `style`                  | `CSSProperties`                       | -       | Custom inline styles                                                            |
| `className`              | `string`                              | -       | Additional CSS classes                                                          |

Plus all standard HTML div element props.

## Testing

Data attributes included for E2E testing: `data-variant`, `data-closable`, `data-dark-mode`, `data-animation`, `data-close-animation`, `data-has-title`

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
